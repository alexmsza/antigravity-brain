# /// script
# requires-python = ">=3.10"
# dependencies = ["yt-dlp", "faster-whisper"]
# ///
"""Video Watch — prepara um vídeo para análise multimodal pelo agente (AGY/Gemini).

Pipeline: download (yt-dlp) -> frames por mudança de cena (ffmpeg) ->
legenda nativa ou transcrição local (faster-whisper) -> manifest.md sincronizado.

Uso:
    uv run watch.py <url-ou-arquivo> [--out DIR] [--max-frames 40] [--scene 0.30]
                    [--model small] [--lang pt]
"""
from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path


def run(cmd: list[str]) -> subprocess.CompletedProcess:
    return subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace")


def fmt_ts(sec: float) -> str:
    m, s = divmod(int(sec), 60)
    return f"{m:02d}:{s:02d}"


def download(src: str, out: Path) -> tuple[Path, dict]:
    p = Path(src)
    if p.exists():
        return p.resolve(), {"title": p.stem, "source": str(p)}
    import yt_dlp

    opts = {
        "outtmpl": str(out / "video.%(ext)s"),
        "format": "bv*[height<=720]+ba/b[height<=720]/b",
        "merge_output_format": "mp4",
        "writesubtitles": True,
        "writeautomaticsub": True,
        "subtitleslangs": ["pt.*", "en.*"],
        "subtitlesformat": "vtt",
        "quiet": True,
        "noprogress": True,
    }
    with yt_dlp.YoutubeDL(opts) as ydl:
        info = ydl.extract_info(src, download=True)
    video = next(out.glob("video.mp4"), None) or next(out.glob("video.*"))
    meta = {
        "title": info.get("title"),
        "uploader": info.get("uploader"),
        "duration": info.get("duration"),
        "description": info.get("description"),
        "like_count": info.get("like_count"),
        "comment_count": info.get("comment_count"),
        "source": src,
    }
    return video, meta


def probe_duration(video: Path) -> float:
    r = run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "json", str(video)])
    try:
        return float(json.loads(r.stdout)["format"]["duration"])
    except Exception:
        return 0.0


def extract_frames(video: Path, out: Path, scene: float, max_frames: int, duration: float) -> list[tuple[float, Path]]:
    fdir = out / "frames"
    fdir.mkdir(exist_ok=True)
    # 1) detecção de mudança de cena
    r = run([
        "ffmpeg", "-hide_banner", "-i", str(video),
        "-vf", f"select='eq(n,0)+gt(scene,{scene})',showinfo,scale=540:-2",
        "-vsync", "vfr", "-q:v", "4", str(fdir / "scene_%03d.jpg"),
    ])
    times = [float(t) for t in re.findall(r"pts_time:([\d.]+)", r.stderr)]
    files = sorted(fdir.glob("scene_*.jpg"))
    frames = list(zip(times, files))
    # 2) fallback: amostragem uniforme se poucas cenas
    if len(frames) < 4 and duration > 0:
        for f in files:
            f.unlink()
        n = min(max_frames, max(6, int(duration / 3)))
        frames = []
        for i in range(n):
            t = duration * (i + 0.5) / n
            dst = fdir / f"uni_{i:03d}.jpg"
            run(["ffmpeg", "-hide_banner", "-ss", f"{t:.2f}", "-i", str(video),
                 "-frames:v", "1", "-vf", "scale=540:-2", "-q:v", "4", str(dst)])
            if dst.exists():
                frames.append((t, dst))
    # 3) limita quantidade mantendo distribuição
    if len(frames) > max_frames:
        step = len(frames) / max_frames
        keep = {int(i * step) for i in range(max_frames)}
        for i, (_, f) in enumerate(frames):
            if i not in keep:
                f.unlink(missing_ok=True)
        frames = [fr for i, fr in enumerate(frames) if i in keep]
    return frames


def parse_vtt(path: Path) -> list[tuple[float, str]]:
    segs, last = [], ""
    blocks = path.read_text(encoding="utf-8", errors="replace").split("\n\n")
    for b in blocks:
        m = re.search(r"(\d+):(\d+):([\d.]+)\s+-->", b) or re.search(r"(\d+):([\d.]+)\s+-->", b)
        if not m:
            continue
        g = m.groups()
        t = (float(g[0]) * 3600 + float(g[1]) * 60 + float(g[2])) if len(g) == 3 else float(g[0]) * 60 + float(g[1])
        text = " ".join(l for l in b.splitlines()[1:] if "-->" not in l)
        text = re.sub(r"<[^>]+>", "", text).strip()
        if text and text != last:
            segs.append((t, text))
            last = text
    return segs


def transcribe(video: Path, out: Path, model: str, lang: str | None) -> tuple[list[tuple[float, str]], str]:
    vtt = next(out.glob("video*.vtt"), None)
    if vtt:
        return parse_vtt(vtt), f"legenda nativa ({vtt.name})"
    import numpy as np
    from faster_whisper import WhisperModel

    # Decodifica com ffmpeg (16 kHz mono float32) para não depender da versão do PyAV.
    raw = subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-i", str(video),
         "-f", "f32le", "-ac", "1", "-ar", "16000", "-"],
        capture_output=True,
    ).stdout
    if not raw:
        return [], "sem faixa de áudio"
    audio = np.frombuffer(raw, dtype=np.float32)

    wm = WhisperModel(model, device="auto", compute_type="int8")
    segments, info = wm.transcribe(audio, language=lang, vad_filter=True)
    segs = [(s.start, s.text.strip()) for s in segments]
    return segs, f"faster-whisper/{model} (idioma: {info.language})"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("--out", default=None)
    ap.add_argument("--max-frames", type=int, default=40)
    ap.add_argument("--scene", type=float, default=0.30)
    ap.add_argument("--model", default="small")
    ap.add_argument("--lang", default=None)
    a = ap.parse_args()

    if not shutil.which("ffmpeg"):
        print("ERRO: ffmpeg não encontrado no PATH.", file=sys.stderr)
        return 2

    slug = re.sub(r"[^\w-]+", "_", Path(a.src).stem if Path(a.src).exists() else a.src.rstrip("/").split("/")[-1])[:60]
    out = Path(a.out or Path.cwd() / "watch-out" / slug).resolve()
    out.mkdir(parents=True, exist_ok=True)

    video, meta = download(a.src, out)
    duration = meta.get("duration") or probe_duration(video)
    frames = extract_frames(video, out, a.scene, a.max_frames, duration)
    segs, tsrc = transcribe(video, out, a.model, a.lang)

    lines = [f"# Watch: {meta.get('title') or slug}", "",
             f"- **Fonte:** {meta.get('source')}",
             f"- **Autor:** {meta.get('uploader') or '-'}",
             f"- **Duração:** {fmt_ts(duration)}",
             f"- **Engajamento:** {meta.get('like_count') or '-'} curtidas / {meta.get('comment_count') or '-'} comentários",
             f"- **Transcrição:** {tsrc}",
             f"- **Frames:** {len(frames)}", ""]
    if meta.get("description"):
        lines += ["## Legenda/descrição original", "", meta["description"].strip(), ""]
    lines += ["## Linha do tempo (frames + fala)", ""]
    bounds = [t for t, _ in frames] + [float("inf")]
    used = set()
    for i, (t, f) in enumerate(frames):
        lines.append(f"### [{fmt_ts(t)}] frame `{f.as_posix()}`")
        speech = [txt for j, (st, txt) in enumerate(segs) if bounds[i] <= st < bounds[i + 1] or (i == 0 and st < t)]
        for j, (st, _) in enumerate(segs):
            if bounds[i] <= st < bounds[i + 1] or (i == 0 and st < t):
                used.add(j)
        lines.append("> " + (" ".join(speech) if speech else "_(sem fala)_"))
        lines.append("")
    lines += ["## Transcrição completa", ""]
    lines += [f"- `{fmt_ts(st)}` {txt}" for st, txt in segs] or ["_(sem áudio de fala)_"]

    manifest = out / "manifest.md"
    manifest.write_text("\n".join(lines), encoding="utf-8")
    print(str(manifest))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

---
name: kaggle_cloud_compute
description: Orquestrador de computação pesada gratuita em nuvem (30h/semana de 2x NVIDIA T4 / 32 GB VRAM + 20h TPU) via Kaggle CLI. Use para fine-tuning de modelos (Laya, Llama, Gemma), transcrição de áudios em massa (Whisper Large-v3), geração de embeddings vetoriais, OCR em PDFs escaneados e download de grandes bases de dados sem sobrecarregar a CPU local.
---

# 🚀 Kaggle Cloud Compute — Orquestrador de GPU Remota Gratuita para o AGY

Esta skill habilita o Antigravity (AGY) e seus subagentes a offloadar tarefas de computação intensiva para a nuvem gratuita do **Kaggle** (subsidiária do Google) utilizando a **Kaggle CLI** (`v2.2.5`) pré-configurada no sistema.

---

## ⚡ Capacidade Disponível na Conta

- **GPU:** 30 horas / semana com **2x NVIDIA Tesla T4 (32 GB VRAM)** ou **NVIDIA P100 (16 GB VRAM)**.
- **TPU:** 20 horas / semana com **Google Cloud TPU v3-8** (8 núcleos aceleradores).
- **Armazenamento:** 214 GB de Datasets Privados + 214 GB de Modelos Privados no Google Cloud Storage.
- **Conectividade:** Acesso à internet liberado nos kernels (~1 Gbps), permitindo instalar pacotes via pip e baixar pesos de Hugging Face / GitHub.
- **Autenticação:** Configurada em `~/.kaggle/access_token` e variável de ambiente `KAGGLE_API_TOKEN`.

---

## 🎯 Quando Acionar a Kaggle Cloud GPU

1. **Fine-Tuning de Modelos (Laya / QLoRA de LLMs):**
   - Fine-tuning do Laya (`convaiinnovations/laya`) com a loss RLCD e calibração de temperatura.
   - Ajuste fino (QLoRA 4-bit) de modelos como Llama 3.2 (1B/3B), Gemma 2 (2B/9B) ou Qwen 2.5 (3B/7B).
2. **Transcrição em Lote de Áudio e Vídeo (`video-watch` / `/watch` + Whisper Large-v3):**
   - Transcrever horas de reuniões gravadas, podcasts, aulas (IFNMG / FAT) ou lotes de Reels/YouTube (> 10 min) em ~90 segundos na T4 ao invés de minutos/horas na CPU local, já extraindo os frames de mudança de cena via `ffmpeg`.
3. **Síntese de Voz Neural, Recorte de Vídeo e Batch Render (`code-reels-hyperframes`):**
   - Gerar narrações neurais pesadas (`F5-TTS`, `Chatterbox`, `Kokoro`), remover fundo de vídeo e renderizar lotes de composições sem travar a máquina local.
4. **Análise Multimodal e Visão em Lote de Nicho (`instagram-content-engine`):**
   - Auditar dezenas de carrosséis e Reels virais do nicho com `Qwen2-VL` / `Florence-2` e gerar embeddings semânticos com `BAAI/bge-m3`.
5. **Geração Massiva de Embeddings para RAG:**
   - Vetorizar dezenas de milhares de páginas (livros da Biblioteca Canônica, contratos, apostilas) com `BAAI/bge-m3` ou `nomic-embed-text`.
6. **OCR e Visão Computacional Pesada:**
   - Extrair dados estruturados de lotes de notas fiscais, contratos escaneados e plantas via `Florence-2-large` ou `Qwen2-VL`.
7. **Download e Mineração de Datasets Públicos (+250k bases):**
   - Ingestão instantânea de dados financeiros, imobiliários, de saúde ou censo para projetos locais.

---

## 🛠️ Fluxo Padrão de Execução via CLI (Headless / Desktop)

Todo o ciclo de vida de um job remoto pode ser controlado pelo AGY sem abrir o navegador:

### 1. Estrutura do Pacote de Execução (`kernel-bundle/`)

Todo job precisa de um diretório contendo:
1. `kernel-metadata.json`: Especifica a GPU, linguagem e título.
2. O script ou notebook de execução (`script.py` ou `notebook.ipynb`).

```json
{
  "id": "alexsouza/nome-do-job",
  "title": "Nome do Job",
  "code_file": "script.py",
  "language": "python",
  "kernel_type": "script",
  "is_private": "true",
  "enable_gpu": "true",
  "enable_tpu": "false",
  "enable_internet": "true",
  "dataset_sources": [],
  "competition_sources": [],
  "kernel_sources": [],
  "model_sources": []
}
```

### 2. Comandos Operacionais

```powershell
# 1. Enviar e iniciar o job na GPU do Kaggle
kaggle kernels push -p ./kernel-bundle

# 2. Consultar status de execução (QUEUED, RUNNING, COMPLETE, ERROR)
kaggle kernels status alexsouza/nome-do-job

# 3. Baixar os resultados / pesos / arquivos gerados direto para o PC
kaggle kernels output alexsouza/nome-do-job -p ./output
```

### 3. Busca e Download de Datasets com 1 Comando

```powershell
# Buscar bases de dados públicas
kaggle datasets list -s "brazil real estate"

# Baixar e descompactar na pasta local
kaggle datasets download -d usuario/dataset-name --unzip -p ./data
```

# 🤖 Skills: Inteligência Artificial Local, Agentes & Automação

## 1. `graphify` (Memória Estrutural & Grafos de Conhecimento)
- **Regra de Ouro:** Ferramenta padrão mandatória em todo e qualquer projeto.
- **Início Mandatório:** Se `graphify-out/` não existir, rodar imediatamente `graphify . --code-only`.
- **Economia de Tokens:** Sempre consultar o grafo via `graphify query "<pergunta>"` ou `graphify path "<A>" "<B>"` antes de ler arquivos inteiros no chat, economizando até 80% do contexto.
- **Atualização Incremental:** Após alterar código, rodar `graphify update .` a custo zero de LLM.

## 2. `aszadev_agy_offload` (Sidecar Local Ollama Dual-Model)
- **Objetivo:** Descarregar tarefas pesadas de leitura de documentações gigantes, logs e loops de build locais.
- **Integração:** Invocável via MCP `aszadev-local`.

## 3. `laya_decision_engine` (Motor Local System-1 via ONNX)
- **Objetivo:** Classificação de intenções, triagem de formulários, auditoria de risco e roteamento instantâneo com zero chamadas de API externa.

## 4. `kaggle_cloud_compute` (Regra Prioritária de Offload GPU/TPU)
- **Objetivo:** Orquestração de 30 horas semanais de GPUs duplas NVIDIA T4 / 32 GB VRAM + 20h TPU via `kaggle kernels push` para fine-tuning, transcrição `Whisper Large-v3` (em conjunto com `video-watch`), síntese neural/render em lote (`code-reels-hyperframes`), visão computacional (`instagram-content-engine`) e geração de embeddings sem sobrecarregar a máquina local.

## 5. `video-watch` & Plugin `watch` (`claude-video`)
- **Objetivo:** Assistir a qualquer vídeo (Reels, Shorts, TikTok, YouTube ou arquivo local) extraindo frames por mudança de cena (`ffmpeg`) + transcrição sincronizada (`faster-whisper` local para vídeos curtos ou `kaggle_cloud_compute` para vídeos > 10 min e lotes).

## 6. `code-reels-hyperframes` & Plugin `hyperframes`
- **Objetivo:** Produzir vídeos verticais (`1080x1920`) em código HTML/CSS + GSAP renderizados localmente em MP4 sem gastar créditos de IA de vídeo.

## 7. `instagram-content-engine` & Plugin `instagram-skills` (9 Skills `ig-*`)
- **Objetivo:** Equipe completa de engenharia de conteúdo para Instagram (10 fórmulas de gancho, carrossel slide a slide, 5 hashtags cirúrgicas, humanizador anti-slop, calendário semanal e auditoria de viralidade ponderada por seguidores) com aprovação prévia obrigatória.

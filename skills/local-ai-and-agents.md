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

## 4. `kaggle_cloud_compute`
- **Objetivo:** Orquestração de 30 horas semanais de GPUs duplas NVIDIA T4 / 32 GB VRAM para fine-tuning, transcrição Whisper e geração de embeddings em lote.

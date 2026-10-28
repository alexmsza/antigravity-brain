# ⚡ Servidor MCP: ASZADEV Local (`aszadev-local`)

## 1. Descrição & Finalidade
O `aszadev-local` é o sidecar de execução e computação local soberana (Ollama Dual-Model + Multi-Arm MCP + AszaDesigner). Ele é utilizado para economizar tokens do modelo de nuvem Antigravity, processar logs extensos, rodar loops de testes e gerar vetores/mockups localmente.

## 2. Ferramentas Disponíveis
- `aszadev_fast_offload`: Executa sumarização, reformatação ou triagem usando modelo local ultra-leve sem consumir cota de API externa.
- `aszadev_multi_arm_research`: Realiza pesquisas multi-fontes simultâneas (GitHub, web, docs locais).
- `aszadev_autonomous_build`: Executa loops de build, correção de tipos TypeScript e testes de regressão até obter sucesso.
- `aszadesigner_generate_asset`: Gera especificações de design, paletas cromáticas ou vetores SVG locais.
- `aszadev_guardrail_audit`: Executa auditoria estrita de segurança e conformidade LGPD / vazamento de credenciais.
- `aszadev_consult_skill`: Consulta heurísticas e skills locais indexadas no sistema.

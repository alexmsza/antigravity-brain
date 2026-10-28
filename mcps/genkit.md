# ⚙️ Genkit MCP Server — Orquestração & Tracing GenAI

> **Servidor MCP:** `genkit-mcp-server`  
> **Modo de Carregamento:** Lazy (`call_mcp_tool`)  
> **Propósito:** Inspeção, execução e observabilidade de pipelines, fluxos e modelos de IA generativa desenvolvidos com o framework Google Genkit (TypeScript / Go).

---

## 🛠️ Principais Ferramentas Expostas

| Ferramenta | Descrição Operacional |
| :--- | :--- |
| `list_flows` | Lista todos os fluxos de IA definidos na aplicação Genkit em execução. |
| `run_flow` | Dispara a execução de um fluxo GenAI passando payloads de entrada específicos. |
| `get_trace` | Inspeciona rastreamentos distribuídos de chamadas a LLMs, prompts e saídas intermediárias. |
| `start_runtime` / `restart_runtime` | Inicializa ou reinicia o runtime de desenvolvimento do Genkit local. |
| `lookup_genkit_docs` | Busca padrões de arquitetura, plugins e guias oficiais do Genkit. |

---

## 💡 Casos de Uso no Antigravity

1. **Desenvolvimento de Agentes Complexos:** Prototipação e depuração de agentes com memória e múltiplos passos.
2. **Observabilidade & Avaliação:** Inspecionar traces de execução para identificar gargalos de latência ou alucinações em steps intermediários.

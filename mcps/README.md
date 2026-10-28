# 🔌 Catálogo Mestre de Servidores MCP (Model Context Protocol)

Este diretório contém a especificação técnica, ferramentas expostas, casos de uso e guias de chamada para todos os servidores MCP integrados ao ecossistema do Antigravity.

---

## 🧭 Matriz de Servidores MCP Conectados

| Servidor MCP | Tipo | Principais Ferramentas | Casos de Uso |
| :--- | :--- | :--- | :--- |
| **`aszadev-local`** | Lazy | `fast_offload`, `multi_arm_research`, `autonomous_build`, `guardrail_audit` | Economia de tokens via Ollama dual-model local e pesquisa multi-fontes |
| **`chrome-devtools`**| Lazy | `navigate_page`, `evaluate_script`, `click`, `take_screenshot`, `get_console_message`| Testes E2E, auditoria a11y, depuração de performance (CWV/LCP) |
| **`context7`** | Lazy | `resolve-library-id`, `query-docs` | Consulta em tempo real à documentação oficial de pacotes npm/python |
| **`genkit-mcp-server`**| Lazy | `list_flows`, `run_flow`, `get_trace`, `start_runtime` | Depuração e execução de pipelines e fluxos GenAI (Google Genkit) |
| **`github`** | Lazy | `create_repository`, `search_repositories`, `push_files`, `create_pull_request` | Automação completa do ciclo de vida de repositórios no GitHub |
| **`groq`** | Lazy | `ask_with_realtime_information`, `ask_with_code_execution` | Inferência em milissegundos via LPU com execução de código segura |
| **`iris`** | Lazy | `capture` | Captura fotográfica instantânea de páginas web inteiras ou seletores CSS |
| **`notion`** | Lazy | `API-post-page`, `API-patch-page`, `API-query-data-source`, `API-retrieve-a-block` | Sincronização de tarefas, calendários, bases de dados e livros no Notion |

---

## 🛠️ Padrão de Invocação Lazy

No Antigravity, ferramentas marcadas como **Lazy** são chamadas sob demanda através de:

```json
{
  "ServerName": "<nome-do-mcp>",
  "ToolName": "<nome-da-tool>",
  "Arguments": {
    "param1": "valor"
  }
}
```

Consulte os arquivos individuais neste diretório para ver os schemas e parâmetros detalhados de cada servidor.

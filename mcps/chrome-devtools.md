# 🌐 Chrome DevTools MCP — Automação de Browser, E2E & Auditoria Web

> **Servidor MCP:** `chrome-devtools-mcp`  
> **Modo de Carregamento:** Lazy (`call_mcp_tool`)  
> **Propósito:** Controle programático do Chromium para depuração de interfaces, execução de testes E2E, auditoria de acessibilidade (a11y), medição de Core Web Vitals (CWV/LCP) e inspeção de rede/console.

---

## 🛠️ Principais Ferramentas Expostas

| Ferramenta | Descrição Operacional |
| :--- | :--- |
| `navigate_page` | Navega até uma URL específica e aguarda o carregamento do DOM. |
| `click` | Dispara clique em elementos via seletores CSS ou coordenadas. |
| `type_text` / `fill` | Preenche inputs e formulários de texto simulando digitação humana. |
| `evaluate_script` | Executa scripts JavaScript arbitrários no contexto da página. |
| `take_screenshot` | Captura tela em PNG/JPEG da viewport ou de elementos específicos. |
| `lighthouse_audit` | Executa auditoria automatizada de performance, SEO e acessibilidade. |
| `list_console_messages` | Inspeciona logs, warnings e erros do console do navegador. |
| `list_network_requests` | Analisa requisições HTTP/WebSocket, payloads e headers de resposta. |

---

## 💡 Casos de Uso no Antigravity

1. **Validação E2E no Spec-Driven Development:** Validar critérios de aceitação Given-When-Then simulando a navegação do usuário antes do relatório de convergência.
2. **Auditoria de Acessibilidade (a11y):** Inspecionar contraste de cores, atributos ARIA e navegação por teclado.
3. **Depuração de Performance:** Medir Largest Contentful Paint (LCP) e diagnosticar requisições de rede bloqueantes.

# ⚡ Groq MCP Server — Inferência LPU Ultra-Rápida & Execução de Código

> **Servidor MCP:** `groq`  
> **Modo de Carregamento:** Lazy (`call_mcp_tool`)  
> **Propósito:** Inferência de inteligência artificial de altíssima velocidade baseada na arquitetura LPU (Language Processing Unit), com suporte a pesquisa com informações em tempo real e execução segura de código Python.

---

## 🛠️ Principais Ferramentas Expostas

| Ferramenta | Descrição Operacional |
| :--- | :--- |
| `ask_with_realtime_information` | Consulta modelos de ponta (Llama 3.3 70B, etc.) com injeção de dados atualizados da web em milissegundos. |
| `ask_with_code_execution` | Roda queries complexas que demandam computação matemática, parsing estruturado de dados ou simulações executando código em sandbox isolado. |

---

## 💡 Casos de Uso no Antigravity

1. **Raciocínio Rápido e Computação Matemática:** Processamento de grandes volumes de dados tabulares ou cálculos analíticos com resposta em menos de 500ms.
2. **Checagem Rápida em Tempo Real:** Validação de notícias ou lançamentos sem onerar cotas de modelos mais lentos.

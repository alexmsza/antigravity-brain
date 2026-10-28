# 🧠 Matriz de Roteamento Inteligente de Modelos & Economia de Cota

Para garantir eficiência máxima de tokens e custo computacional equilibrado, o Antigravity opera sob a seguinte matriz de esforço:

---

## 📊 Matriz de Seleção

| Categoria da Tarefa | Modelo Recomendado | Nível de Raciocínio | Ação / Alerta Proativo |
| :--- | :--- | :--- | :--- |
| **Leve & Rápida (Economia Máxima)** | Gemini 3.8 Flash / Claude Haiku | Fraco (Low) / Mínimo | Se o usuário estiver usando modelo pesado (Argon), alertar para economizar cota. |
| **Desenvolvimento Padrão** | Gemini 3.8 Flash / Claude 3.5 Sonnet | Médio (Medium) | Desenvolvimento full-stack diário, testes unitários, refatorações pontuais, endpoints. |
| **Crítica & Alta Complexidade** | Gemini 4 Argon / Claude 3.7 Sonnet | Forte (High) | Arquitetura distribuída, monorepos, depuração profunda, segurança. |

---

## 🤖 Orquestração de Subagentes em Background
- Subagentes de pesquisa / leitura paralela: `flash_lite` ou `flash`.
- Subagentes de refatoração pesada e auditoria: `pro`.

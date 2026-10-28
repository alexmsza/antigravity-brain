# 📜 Projeto: Constituição Arquitetural & Princípios de Engenharia

> **Diretriz Spec Kit:** Este arquivo define as leis invioláveis, padrões de código e limites de segurança deste projeto.

---

## 1. Princípios de Arquitetura & Qualidade
- **Tipagem Estrita:** TypeScript com `strict: true` ou Python com type hints completos e verificação via `mypy` / `ruff`.
- **Validação de Limites (Boundaries):** Todo payload de entrada (rotas de API, webhooks, formulários) DEVE ser validado via schema (Zod ou Pydantic) antes de atingir o banco de dados.
- **Zero Vibe-Coding:** Nenhuma alteração de código é realizada sem especificação prévia (`specs/`), plano arquitetural (`plans/`) e tarefas atomizadas (`tasks/`).

## 2. Segurança, LGPD & Privacidade (Security by Design)
- **Gestão de Segredos:** Proibição absoluta de credenciais ou chaves hardcoded. Uso estrito de variáveis de ambiente sanitizadas.
- **Zero Leaks na UI:** A interface nunca expõe detalhes internos de arquitetura, nomes de tabelas, provedores de infraestrutura ou stack traces de erro.
- **Isolamento de Dados (RLS):** Toda tabela de dados de usuário no PostgreSQL/Supabase DEVE ter Row Level Security habilitado com políticas baseadas em `auth.uid()`.

## 3. Estratégia de Testes & Convergência
- **Critério de Aceitação:** Toda feature só é considerada concluída quando o relatório de convergência (`convergence/`) atingir `Status: Converged`.
- **Baterias Mínimas:** Testes unitários para regras de negócio e testes de integração para endpoints críticos.

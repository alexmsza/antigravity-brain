# 🧠 Antigravity Brain — Central Knowledge Vault & Engineering Hub

> **Repositório Central de Conhecimento, Modelos Arquiteturais, Design Systems, MCPs, Skills e Blueprints de Produção da Antigravity & Sousza Consultoria.**

Este repositório atua como o **Segundo Cérebro de Engenharia** para o assistente de IA Antigravity, consolidando a inteligência técnica, os padrões de arquitetura, os servidores MCP em operação, as skills catalogadas e modelos de sites de alta conversão analisados no ecossistema real.

---

## 🗂️ Arquitetura do Repositório

```text
antigravity-brain/
├── models-sites/                    # Modelos de sites dissecados, tokens e templates reutilizáveis
│   ├── amplus-imoveis/              # Modelo B2B Real Estate Corporativo & Logística (Recife/Nordeste)
│   ├── flat-belavista/              # Modelo Short-Stay, Hospedagem & Pousada à Beira-Mar (Porto de Galinhas)
│   ├── pov-podcast/                 # Modelo Estúdio Audiovisual, Podcast & Creator Hub (Cinemático Dark)
│   └── ceo-boa-viagem/              # Modelo Clínica Estética & Odontológica de Luxo (Boa Viagem/Recife)
│
├── mcps/                            # Catálogo e arquitetura de integração de servidores MCP
│   ├── README.md                    # Matriz de MCPs e protocolos STDIO / HTTP / SSE
│   ├── aszadev-local.md             # Sidecar local Ollama Dual-Model & multi-arm
│   ├── chrome-devtools.md           # Automação de browser, auditoria web e a11y
│   ├── context7.md                  # Resolvedor e buscador de documentações oficiais
│   ├── genkit.md                    # Orquestrador de fluxos GenAI e traces
│   ├── github.md                    # Automação de repositórios, PRs e issues
│   ├── groq.md                      # Inferência ultra-rápida LPU com execução de código
│   ├── iris.md                      # Captura visual de screenshots em milissegundos
│   └── notion.md                    # Sincronização corporativa e acadêmica no Notion Workspace
│
├── skills/                          # Matriz de skills especializadas de engenharia e IA
│   ├── README.md                    # Guia de roteamento de skills
│   ├── frontend-and-ui.md           # Next.js 15, Tailwind v4, shadcn/ui, UIverse
│   ├── backend-and-databases.md     # Prisma ORM, Supabase, PostgreSQL, DB Enforcer
│   ├── data-and-ml.md               # BigQuery, dbt, Dataform, GCP Pipelines
│   ├── science-and-bio.md           # AlphaFold, ChEMBL, PDB, UniProt, BLAST
│   └── local-ai-and-agents.md       # Graphify, Aszadev, Laya Engine, Kaggle Compute
│
├── context/                         # Diretrizes operacionais e regras canônicas
│   ├── antigravity-directives.md    # Postura de Tech Lead, tom humano e pragmatismo
│   ├── security-and-lgpd.md         # Zero leaks na UI, proteção de PII e boundary checks
│   ├── model-routing-matrix.md      # Matriz inteligente de modelos e economia de tokens
│   └── ui-component-catalogs.md     # Padrões visuais inspirados no UIverse.io
│
├── stacks-templates/                # Blueprints prontos para inicialização de projetos
│   ├── nextjs15-tailwind-shadcn/    # Boilerplate Next.js 15 App Router + Tailwind v4 + shadcn/ui
│   ├── python-uv-fastapi/           # Boilerplate Python moderno gerenciado via uv
│   └── docker-compose-production/   # Infraestrutura containerizada (Postgres, Redis, Nginx)
│
└── graphify-out/                    # Grafo de conhecimento semântico e memória estrutural (AST)
```

---

## 🚀 Como Navegar e Consultar

O repositório possui uma base de memória semântica indexada via **Graphify**:
- **Consultas no Terminal:** `graphify query "<pergunta>"`
- **Relações de Dependências:** `graphify path "<Módulo A>" "<Módulo B>"`
- **Explicação de Conceitos:** `graphify explain "<Conceito>"`
- **Atualização Incremental:** `graphify update .` (custo zero de LLM)

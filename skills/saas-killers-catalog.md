# 🚀 SaaS-Killers & Infraestrutura Auto-Hospedada (Custo R$ 0)

> **Segundo Cérebro — Alex Souza**  
> **Objetivo:** Catálogo canônico unificado de alternativas open-source e auto-hospedadas (self-hosted) para substituir assinaturas caras de softwares proprietários em todas as iniciativas e projetos da consultoria.

---

## 📊 Matriz Comparativa Mestre

| Ferramenta Open Source | Substitui / Alternativa a | Stack / Linguagem | Custo Original Evitado | Principais Recursos / Diferenciais |
| :--- | :--- | :--- | :--- | :--- |
| **Ollama** (`ollama/ollama`) | ChatGPT Plus / Copilot Pro | Go | R$ 120/mês | Execução de LLMs locais (Llama, DeepSeek, Mistral) sem internet e sem limites de tokens. |
| **Jan / Open WebUI** | ChatGPT Team / Enterprise | TypeScript / Python | R$ 150/mês | Interface de chat rica com RAG, histórico local, múltiplos modelos e suporte a múltiplos usuários. |
| **HeyGem (Duix-Avatar)** | HeyGen | Python / C++ | R$ 145/mês | Clonagem e geração de avatares falantes a partir de um vídeo de referência, 100% offline. |
| **Presenton** | Gamma | Python / React | R$ 100/mês | Geração de apresentações com IA, suporte nativo a LaTeX e exportação direta para PowerPoint (.pptx). |
| **Meetily** | Otter.ai | Python / Rust | R$ 85/mês | Assistente de reuniões privado, transcrição 4x mais rápida com Whisper/Parakeet e resumo via Ollama local. |
| **AgenticSeek** | Manus | Python / Playwright | R$ 100/mês | Agente autônomo local que navega na web real, analisa arquivos e executa tarefas sem APIs externas. |
| **Vane (ex-Perplexica)** | Perplexity Pro | TypeScript / Python | R$ 110/mês | Motor de busca semântico com IA, pesquisa na web e síntese de respostas com citações auditáveis. |
| **Harper** | Grammarly Premium | Rust | R$ 75/mês | Verificador gramatical e estilístico ultrarrápido rodando localmente sem enviar texto para a nuvem. |
| **ComfyUI** | Midjourney | Python | R$ 160/mês | Interface em nós para síntese de imagens via Stable Diffusion/Flux com controle fino de GPU. |
| **Immich** | Google Fotos | TypeScript / Dart | R$ 40/mês | Backup self-hosted com reconhecimento facial, busca semântica por fotos e sincronização mobile nativa. |
| **Stirling-PDF** | Adobe Acrobat Pro / iLovePDF | Java / Docker | R$ 90/mês | Suíte completa para mesclar, assinar, converter, comprimir e extrair texto de PDFs offline. |
| **AppFlowy** | Notion | Rust / Flutter | R$ 60/mês | Workspace focado em privacidade, notas, quadros Kanban e bases de conhecimento locais. |
| **Crawl4AI** | Firecrawl / Scrapers Pagos | Python | R$ 200/mês | Web crawler de altíssima velocidade otimizado para extração limpa de dados e alimentação de LLMs. |
| **Coolify** | Heroku / Vercel Pro | TypeScript / PHP | R$ 120/mês | PaaS auto-hospedada para deploy de apps, bancos Postgres/MySQL e contêineres Docker com 1 clique. |
| **Penpot** | Figma Pro | Clojure / TypeScript | R$ 80/mês | Design e prototipagem vetorial aberta em SVG puro, sem aprisionamento de arquivos. |
| **Cal.com** | Calendly Pro | TypeScript | R$ 65/mês | Agendamento de reuniões com múltiplos calendários e fluxos automatizados sem restrição de eventos. |
| **Plausible Analytics** | Google Analytics 360 | Elixir | Variável | Análise de tráfego web leve (<1KB), sem cookies, com 100% de conformidade com LGPD/GDPR. |
| **Rembg** | Remove.bg Pro | Python | R$ 50/mês | Remoção instantânea de fundo de imagens via modelos U2-Net em linha de comando ou API. |
| **n8n** | Zapier / Make | TypeScript | R$ 150/mês | Orquestrador de integrações e fluxos de automação com nós, webhooks e suporte nativo a agentes de IA. |
| **PocketBase** | Firebase / AWS Amplify | Go (SQLite) | R$ 100/mês | Backend em 1 único arquivo executável: banco de dados em tempo real, autenticação e armazenamento. |
| **Floci** | AWS Local Services | Python / Go | R$ 250/mês | Emula S3, Lambda, SQS e DynamoDB localmente em 1 comando sem necessidade de credenciais da AWS. |
| **WAHA / WuzAPI** | Z-API / Gupshup | TypeScript / Go | R$ 180/mês | API RESTful HTTP para WhatsApp integrada com bots e CRMs auto-hospedados. |
| **Chatwoot** | Intercom / Zendesk | Ruby / Vue.js | R$ 200/mês | Central de atendimento ao cliente multicanal (WhatsApp, Live Chat, E-mail, Telegram). |
| **Vikunja** | Asana / Monday | Go / Vue.js | R$ 70/mês | Gestor de tarefas completo com visualizações em Lista, Kanban e Gráfico de Gantt. |
| **Mailflare** | Google Workspace / Zoho Mail | Cloudflare Workers | R$ 35/mês | Servidor de e-mails corporativos em domínio próprio rodando em infraestrutura gratuita do Cloudflare. |

---

## 💡 Heurística de Adoção Técnica
1. **MVP / Fase Inicial:** Usar serviços de custo zero (Coolify + PocketBase + Ollama local).
2. **Privacidade e LGPD:** Em dados sensíveis de clientes ou judiciais, priorizar Meetily, Stirling-PDF, Jan e Plausible.
3. **Escala de Produção:** Integrar n8n com WAHA e Supabase para automações corporativas de alta confiabilidade.

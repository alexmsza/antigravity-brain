# ⚡ Open Source Power Stack — Acervo de Tecnologias Emergentes & Repositórios de Alta Performance

> **Origem:** Extraído e sintetizado a partir da auditoria técnica do ecossistema `@alexmsza` (Alex Souza) ⇄ `@alex.msza`.  
> **Objetivo:** Municiar o Antigravity com alternativas open-source, motores de sandbox para agentes, ferramentas de economia de tokens e soluções de infraestrutura local de custo zero.

---

## 🤖 1. Agentes Autônomos, Sandboxing & Raciocínio de Código

| Ferramenta / Repo | Arquitetura & Mecânica | Impacto Operacional / Economia |
| :--- | :--- | :--- |
| **OpenCodex** | Proxy local que permite rotear chamadas do OpenAI Codex e Claude Code para qualquer modelo aberto ou local. | Elimina assinaturas de APIs de código proprietárias e vendor lock-in. |
| **ripwire** | Motor de mapeamento estrutural de codebase para agentes de codificação. | Impede leitura cega de arquivos inteiros, economizando mais de 80% de tokens de contexto (sinergia com Graphify). |
| **NexusRAG & Code Graph RAG** | RAG combinando grafos de conhecimento determinísticos com vetores e anotação estrita de fontes. | Permite queries multi-hop em linguagem natural sobre repositórios inteiros sem alucinações. |
| **OpenSandbox (Alibaba)** | Sandbox open-source desenhado especificamente para isolar execuções de agentes autônomos. | Segurança contra injeção de comandos e execução não-autorizada em ambientes de teste. |
| **Enoch** (`our-ark/enoch`) | Framework de IA pessoal no qual o próprio agente inspeciona e reescreve seu código-fonte sob supervisão humana. | Meta-programação segura e evolução contínua de rotinas e heurísticas. |
| **Prime Agent** | Agente de engenharia open-source com loop de auto-aprimoramento durante tarefas longas. | Persistência de contexto e auto-correção contínua durante rodadas de testes. |
| **MiniMax Code** | Coding agent de terminal (CLI) que lê arquivos, diagnostica erros e roda testes unitários. | Pair programming de baixa latência e foco em tarefas cirúrgicas de terminal. |
| **ART (Agent RL)** | Framework de treino por reforço (Reinforcement Learning) para agentes autônomos em ambientes reais. | Treina políticas de decisão com base em tentativa, erro e recompensa do ambiente. |
| **OpenHands** | Plataforma open-source para engenharia conduzida por agentes (antigo OpenDevin). | Resolução autônoma de issues e pull requests no GitHub. |

---

## ⚡ 2. Infraestrutura Local de IA, Hardware & LLMs Custo Zero

| Tecnologia | Capacidade Técnica | Cenário de Aplicação |
| :--- | :--- | :--- |
| **Floci** | Emulador local completo de serviços centrais AWS (S3, Lambda, SQS, DynamoDB) em 1 único comando. | Desenvolvimento e testes locais de lambdas e filas sem conta na AWS e sem risco de custos acidentais. |
| **FreeToken** | Otimizador de inferência que viabiliza execução de LLMs de 290 bilhões de parâmetros em GPUs gamer locais. | Raciocínio ultra-avançado em ambiente local com soberania total de dados. |
| **llmfit** | Utilitário CLI que inspeciona hardware local (CPU, RAM, VRAM, CUDA) e calcula quais modelos/quants rodam fluidamente. | Dimensionamento preciso de modelos para a máquina do usuário sem testes às cegas. |
| **MarkItDown (Microsoft)** | Biblioteca Python oficial da Microsoft para conversão universal de arquivos (Office, PDF, HTML, áudio/imagem) para Markdown. | Ingestão e preparação de dados limpos para LLMs, RAG e Notion com fidelidade semântica. |
| **Surfsense** | Motor de busca e síntese documental open-source (alternativa a Perplexity e NotebookLM). | Investigação acadêmica e cruzamento de fontes técnicas locais. |
| **transcribe.cpp** | Transcrição de áudio em tempo real escrita em C++ puro com suporte a 16+ famílias de modelos. | Transcrição de palestras, reuniões e videoaulas com zero consumo de tokens e sem dependência de internet. |
| **Laya / System-1** | Motor de inferência ONNX ultra-rápido para classificação e decisões em milissegundos. | Triagem de formulários, classificação de e-mails e moderação com custo zero. |

---

## 🎬 3. Automação de Mídia, Vídeo, Áudio & Growth

| Ferramenta | Proposta de Engenharia | Caso de Uso |
| :--- | :--- | :--- |
| **AutoSocial** | Publicador e agendador programático de vídeos verticais para TikTok, Instagram Reels e YouTube Shorts. | Automação de esteiras de conteúdo sem passar por plataformas pagas de agendamento. |
| **AutoShorts** | Motor desktop que processa vídeos longos, identifica trechos de pico de retenção e exporta cortes verticais prontos. | Conversão de palestras, podcasts e aulas em cortes para redes sociais. |
| **SceneFlow** | Sincronizador script-to-screen que atua como depurador visual para produções audiovisuais com IA. | Alinhamento visual cena a cena entre o roteiro de locução e a renderização das tomadas. |
| **StemKit** | Separador local de stems de áudio (vocais, bateria, baixo, sintetizadores) a partir de links do YouTube. | Produção musical e trilhas sonoras limpas para vídeos institucionais. |
| **OpenVoice** | Clonagem de voz instantânea (zero-shot) com pequeno áudio de amostra. | Dublagens corporativas e audiobooks preservando o timbre natural. |
| **Open-Sora** | Gerador de vídeos cinematográficos a partir de texto rodando em instâncias abertas. | Prototipação rápida de conceitos visuais e vinhetas. |
| **OpenScreen** | Gravador de tela open-source gratuito com zooms cinemáticos e foco dinâmico (substituto do Screen Studio). | Gravação de demos técnicas e tutoriais de produto em alta definição. |

---

## 🌐 4. Engenharia Web, Segurança, Scrapers & Micro-SaaS

| Ferramenta / Repo | Arquitetura | Aplicação Prática |
| :--- | :--- | :--- |
| **Fortress** | Motor de browser headless que contorna desafios anti-bot internamente no navegador. | Scrapers resilientes que não sofrem bloqueios por Cloudflare ou CDNs. |
| **WAHA & OpenWA** | API HTTP auto-hospedada de WhatsApp conectada a CRM com agentes de atendimento nativos. | Alternativa soberana e gratuita ao Kommo, Octadesk e APIs pagas de WhatsApp. |
| **Mailflare** | Servidor de e-mail corporativo em domínio próprio rodando em Cloudflare Workers / Email Routing. | Caixas de entrada empresariais gratuitas com domínio profissional. |
| **Dioxus** | Framework full-stack em Rust para Web, Desktop e Mobile em 1 único repositório. | Aplicações de alta performance com segurança de memória e baixo consumo de recursos. |
| **apk-reverse** | Skill de IA para desmontar APKs Android, remover anúncios, telemetria invasiva e bloatware. | Auditoria de segurança de binários móveis e análise de telemetria. |
| **Crucix** | Inteligência geoespacial e sensoriamento remoto open-source. | Monitoramento e análise de imagens de satélite para logística e meio ambiente. |
| **Paperless-ngx** | Sistema de arquivo e gestão documental com OCR inteligente e busca semântica em documentos físicos. | Digitalização corporativa de notas fiscais, contratos e certidões. |
| **9Drive** | Painel agregador de múltiplas contas Google Drive em interface única. | Gestão consolidada de armazenamento em nuvem e backups. |

---

## 📚 5. Repositórios de Aprendizado & Recursos Dev

- `free-for-dev`: Catálogo canônico com mais de 1.000 serviços com planos gratuitos (SaaS, PaaS, IaaS) para desenvolvedores.
- `florinpop17/app-ideas`: Mais de 100 ideias práticas de aplicações detalhadas por histórias de usuário em 3 níveis (Tier 1 a 3).
- `practical-tutorials/project-based-learning`: Repositório de tutoriais passo a passo para construir sistemas complexos do zero.
- `agenda-tech-brasil`: Rastreador comunitário de meetups, conferências e hackathons no Brasil.
- `freepublicapis.com`: Diretório categorizado de APIs públicas gratuitas prontas para consumo.

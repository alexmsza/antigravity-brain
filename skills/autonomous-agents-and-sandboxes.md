# 🤖 Frameworks de Agentes Autônomos, Sandboxes & Execução de Código

> **Segundo Cérebro — Alex Souza**  
> **Objetivo:** Municiar o Antigravity com a arquitetura de agentes, roteamento resiliente de modelos, sandboxing de segurança e navegação estrutural de código sem consumo excessivo de tokens.

---

## 🏗️ 1. Mapeamento & Economia de Contexto (Zero Token Waste)

| Ferramenta | Proposta Técnica | Mecânica de Execução | Sinergia no Ecossistema |
| :--- | :--- | :--- | :--- |
| **ripwire** | Mapa estrutural de código para agentes. | Gera um índice determinístico dos arquivos e dependências, impedindo que o LLM leia o repositório inteiro. | Opera em perfeita sintonia com a regra do **Graphify** (`graphify-out/`). |
| **NexusRAG & Code Graph RAG** | RAG sobre grafos de conhecimento e vetores. | Combina ASTs, classes e chamadas de métodos com busca vetorial, viabilizando perguntas multi-hop com citações exatas. | Ideal para documentações massivas e monorepos complexos. |
| **MarkItDown (Microsoft)** | Conversor universal para Markdown limpo. | Converte PDFs, Word, PPTX e planilhas em texto puro estruturado para contextualizar agentes. | Pré-processador de ingestão de dados para agentes e Notion. |

---

## 🛡️ 2. Sandboxing & Isolamento de Execução

| Ferramenta | Arquitetura | Propósito |
| :--- | :--- | :--- |
| **OpenSandbox (Alibaba)** | Container isolado ultraleve para execução de código gerado por IA. | Garante que agentes de automação possam compilar, rodar testes e executar comandos shell sem colocar a máquina hospedeira em risco. |
| **Camofox Browser (`jo-inc/camofox-browser`)** | Fork do Firefox (Camoufox) com falsificação de fingerprint em nível C++. | Dá aos agentes um navegador real, indetectável por firewalls de bot e Cloudflare para scraping e automações web. |
| **Fortress** | Motor headless anti-bloqueio. | Trata desafios de CDN e captchas na própria camada de rede do navegador. |

---

## 🧠 3. Roteamento de Modelos & Meta-Programação

| Ferramenta | Propósito & Diferencial |
| :--- | :--- |
| **OmniRoute** | Roteador universal que distribui chamadas do Claude Code, Cursor, Cline e Codex por múltiplos provedores e modelos abertos, evitando bloqueios de taxa (*rate limits*) e cotas esgotadas. |
| **OpenCodex** | Proxy local que permite usar qualquer modelo aberto (Qwen, DeepSeek, Llama) em ferramentas que exigem Codex ou Claude Code. |
| **Enoch (`our-ark/enoch`)** | Framework de IA pessoal no qual o próprio agente inspeciona seu histórico e reescreve seu próprio código-fonte sob supervisão humana. |
| **Prime Agent** | Agente de desenvolvimento autônomo com persistência de raciocínio de longo prazo e auto-correção contínua durante rodadas de testes. |
| **MiniMax Code** | Coding agent de terminal (CLI) focado em tarefas rápidas: leitura de arquivos, diagnósticos de testes e refatorações cirúrgicas. |
| **Craft Agents** | Ambiente autônomo onde agentes realizam experimentos de ajuste fino (fine-tuning) em pequenos modelos durante a noite. |
| **Agent Canvas** | Interface visual baseada em nós para desenhar orquestrações de múltiplos agentes trabalhando cooperativamente. |
| **Open Second Brain (`NousResearch/hermes-agent`)** | Conecta o Hermes Agent a cofres de Markdown (Obsidian/Notion) transformando anotações em agentes ativos de raciocínio. |

---

## 🎯 Regras Operacionais para Antigravity
1. **Antes de inspecionar código:** Sempre verificar se há um grafo de dependências (`graphify` ou `ripwire`) para evitar varredura cega de arquivos.
2. **Execução de scripts arriscados:** Propor a execução isolada em container Docker ou via ambiente seguro (`OpenSandbox`).
3. **Esgotamento de cota de nuvem:** Recomendar a transição para `OmniRoute` ou proxies locais (`OpenCodex`) conectando a modelos locais do Ollama.

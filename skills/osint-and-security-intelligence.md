# 🕵️ Cibersegurança, OSINT & Inteligência Forense Digital

> **Segundo Cérebro — Alex Souza**  
> **Origem:** Páginas de ferramentas do Notion (`OSINT4ALL`, `Anotações ferramentas interessantes - parte 2`) e auditoria técnica do perfil.  
> **Objetivo:** Catálogo de ferramentas de inteligência em fontes abertas (OSINT), análise forense e segurança ofensiva/defensiva.

---

## 🔍 1. Investigação em Fontes Abertas (OSINT)

| Ferramenta / Protocolo | Proposta Técnica | Capacidades |
| :--- | :--- | :--- |
| **PhoneIntel** | Inteligência sobre números de telefone. | Extrai país, operadora, estado/região, gera Google Dorks otimizados e plota coordenadas geográficas no OpenStreetMap (`--map`). |
| **Crucix** | Inteligência geoespacial e satélites. | Análise de imagens de satélite abertas, detecção de padrões de ocupação e sensoriamento remoto de infraestruturas. |
| **Protocolo Vanessa Viana** | Metodologia jurídica e técnica de coleta forense. | Preservação da cadeia de custódia, hashes criptográficos de evidências digitais e relatórios técnicos válidos judicialmente. |
| **OSINT4ALL** | Diretório canônico de investigações abertas. | Mapeamento de registros de domínios (Whois), DNS reverso, metadados de imagens (ExifTool) e rastreamento de vazamentos de dados. |

---

## 🛡️ 2. Navegação Oculta & Evasão de Bots

| Ferramenta | Arquitetura | Cenário de Aplicação |
| :--- | :--- | :--- |
| **Camofox Browser (`camofox-browser`)** | Navegador com falsificação profunda de impressões digitais de hardware em nível C++ (baseado em Camoufox / Firefox). | Fornece aos agentes de IA um ambiente de navegação 100% indetectável para pesquisas competitivas e coleta de dados sem bloqueios. |
| **Fortress** | Motor headless anti-bloqueio que resolve desafios anti-bot no próprio processo do browser. | Scraping massivo de dados públicos protegidos por CDNs (Cloudflare, Akamai). |

---

## 🔒 3. Análise de Binários & Pentest Automatizado

| Ferramenta | Propósito |
| :--- | :--- |
| **apk-reverse** | Skill de IA para engenharia reversa de APKs Android: descompilação, inspeção de código Smali/Java, remoção de telemetria invasiva, bloqueio de anúncios e recompilação/assinatura. |
| **Strix** | Agente autônomo de segurança focado em aplicações vibe-coded: executa varreduras de injeção, falhas de autorização (IDOR) e vazamento de segredos, entregando a correção em código. |

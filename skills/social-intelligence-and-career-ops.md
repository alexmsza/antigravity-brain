# 🧠 Social Intelligence, Career-Ops & Open Source SaaS-Killers

> **Origem:** Extração analítica profunda do acervo técnico de `@alexmsza` (Alex Souza) ⇄ `@alex.msza`.  
> **Status:** Módulo de Inteligência Canônica da Antigravity.

---

## 1. Career-Ops: Caçador Autônomo de Vagas & Scoring de Oportunidades

Inspirado no projeto open source de alta tração (+75.000 stars no GitHub) referenciado por Fabiano Carvalho (`@fabianocarvalhojr`).

### 1.1. Arquitetura Operacional
```mermaid
flowchart TD
    A["Vagas Brutas (LinkedIn / Gupy / Portais)"] --> B["Parser de Requisitos & Salário"]
    B --> C{"Scoring Engine (0 a 5)"}
    C -- "Nota < 4" --> D["Descarte Automático (Economia de Tempo)"]
    C -- "Nota >= 4" --> E["Geração de CV Sob Medida (Tailored)"]
    E --> F["Rascunho de Respostas Discursivas"]
    F --> G["Mensagem Personalizada para Recrutador"]
    G --> H["Revisão & Disparo Humano (100% no Controle)"]
```

### 1.2. Heurística de Scoring (0 a 5)
* **0-2:** Desalinhamento de stack, presencialidade distante (ex: exigência física fora de Recife sem flexibilidade remota) ou senioridade fora da regra (Senior/Staff/Lead).
* **3:** Compatibilidade parcial de competências ou falta de transparência salarial.
* **4:** Forte aderência técnica (Python, SQL, Cloud, IA, Data), regime remoto ou local viável, pretensão salarial atendida.
* **5:** Compatibilidade cirúrgica com o portfólio (Governança, GenAI, Hackathons, Visão Computacional, DataSecOps).

### 1.3. Regra de Aplicação Prática
* Sempre que o usuário mencionar busca de emprego, vagas, processos seletivos ou envio de currículo:
  * Aplicar o filtro rigoroso de nota ≥ 4 antes de investir esforço de preenchimento.
  * Modular o currículo com ênfase nas palavras-chave exatas da descrição da vaga.

---

## 2. Turnitout-Humanizer: Higienização Determinística de Arquivos & Código

Baseado no repositório `AhmadHassan-BTed/Turnitout-Humanizer` (`ahmadhassan-bted.github.io/Turnitout-Humanizer/`).

### 2.1. Princípio de Funcionamento
Ao contrário de ferramentas que usam outra IA para reescrever texto (gerando alucinações e perda de precisão técnica), o Turnitout opera por **regras determinísticas**:
1. **Remoção de Caracteres Invisíveis:** Elimina caracteres zero-width (`\u200B`, `\u200C`, `\u200D`, `\uFEFF`) e marcadores invisíveis inseridos por modelos de linguagem.
2. **Sanitização de Metadados:** Limpa metadados ocultos de softwares de edição (.docx, LaTeX, PDF).
3. **Normalização de Comentários de Código:** Ajusta a densidade e o tom dos comentários em código-fonte (iniciante, pleno, sênior) mantendo a lógica executável 100% inalterada.

### 2.2. Regra de Aplicação Prática
* Em trabalhos acadêmicos (IFNMG/FAT), relatórios para clientes ou commits de código:
  * Garantir código limpo, sem caracteres invisíveis parasitas e sem comentários artificiais que pareçam gerados por automação genérica.

---

## 3. Matriz dos 8 Repositórios Open Source SaaS-Killers (Custo R$ 0)

| Categoria | Repositório Open Source | SaaS Pago que Substitui | Benefício de Engenharia & Economia |
| :--- | :--- | :--- | :--- |
| **Workspace de IA Local** | `Jan` / `Open WebUI` / `Aider` | ChatGPT Plus / Copilot ($20-$40/mês) | Roda localmente via Ollama/vLLM sem expor dados proprietários e com custo zero de token. |
| **Parsing de Documentos** | `Docling` (IBM) / `Marker` / `MarkItDown` | Adobe Acrobat / Mathpix ($15-$30/mês) | Converte PDFs escaneados, Word e apresentações em Markdown estruturado com tabelas e fórmulas intactas. |
| **Backend All-in-One** | `PocketBase` / `SurrealDB` | Firebase / Supabase Pro ($25+/mês) | Backend completo em 1 único arquivo binário (Auth, Realtime DB, S3 Storage e Admin UI) com SQLite embutido. |
| **Transcrição Offline** | `WhisperX` / `Buzz` | Otter.ai / Descript ($18-$30/mês) | Transcrição ultra-rápida de áudio/vídeo direto na máquina ou GPU com pontuação e diarização de oradores. |
| **Design & Landing Pages** | `htmlrev.com` | Webflow / Unbounce ($30-$60/mês) | Centenas de templates HTML/Tailwind responsivos prontos para produção sem lock-in. |
| **Plataforma de Estudos** | `coddy.tech` | Codecademy / LeetCode Pro ($20/mês) | Aprendizado prático de algoritmos e linguagens por níveis progressivos. |
| **Apresentações Técnicas** | `Marp` / `Slidev` | Gamma App ($15/mês) | Slides programáticos diretamente de Markdown com suporte a código e Mermaid. |
| **Automação de Conteúdo** | `Claude Instagram Skill` | Ferramentas caras de Social Media | Roteirização, análise de reels virais e moderação semi-autônoma de comunidade. |

---

## 4. Claude Instagram Skill: Engenharia Reversa de Conteúdo & Gestão de Perfil

Baseado nas implementações de Igor Henrique (`@igao.ia`):
1. **Engenharia Reversa de Reels Virais:** Analisar os ganchos (hooks de 3 segundos), a retenção intermediária e o CTA final de vídeos com alta tração técnica para transformá-los em roteiros autorais da Consultoria Sousza e dos projetos de Alex Souza.
2. **Moderação Human-in-the-Loop:** Rascunhar respostas a comentários e DMs técnicas, deixando sempre a aprovação final para Alex Souza.

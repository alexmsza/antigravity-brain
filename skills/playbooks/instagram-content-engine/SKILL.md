---
name: instagram-content-engine
description: >-
  Suíte completa de engenharia de conteúdo para Instagram (baseada nos 9 robôs de social media).
  Gera ganchos com 10 fórmulas validadas, monta carrosséis slide a slide, seleciona as 5 hashtags
  cirúrgicas, elimina clichês de IA (anti-slop), planeja calendário semanal, audita viralidade de nicho
  (taxa real de engajamento) e garante aprovação humana prévia mandatória.
---

# 🚀 Instagram Content Engine — Suíte dos 9 Módulos de Conteúdo

Esta skill adapta a metodologia do **instagram-skills** (`github.com/sergebulaev/instagram-skills` e `marcondes.ai`) para operação nativa no **Google Antigravity (AGY)** com modelos multimodais **Gemini**.

O objetivo é atuar como uma equipe completa de social media e crescimento orgânico orientada a engenharia, combinando precisão técnica, retenção psicológica e voz humana autêntica sem parecer gerada por IA.

---

## ⚡ Quando Ativar Esta Skill
Ative sempre que Alex Souza solicitar:
- Criação de carrosséis técnicos ou conceituais slide a slide para Instagram/LinkedIn.
- Escrita de legendas com ganchos fortes nos primeiros 3 segundos de leitura.
- Auditoria e seleção de hashtags focadas em alcance qualificado (regra das 5 hashtags).
- Planejamento de calendário editorial semanal com horários e objetivos de funil.
- Análise de métricas de nicho para identificar o que fura a bolha de verdade (`(curtidas + comentários) / seguidores`).
- Estruturação de funis de comentário por palavra-chave para DMs (*ManyChat* / automação de inbox).

---

## 🛡️ Regra Inegociável: Gatekeeper de Aprovação Humana (Alex Souza)
De acordo com as **Regras Operacionais de Alex Souza**:
> **Nenhum post, legenda, comentário ou mensagem direta pode ser publicado sem apresentação prévia da minuta integral no chat e autorização explícita do usuário.**

---

## 🧩 Os 9 Módulos do Sistema

```mermaid
flowchart TD
    M1["1. Hook Generator (10 Fórmulas)"] --> M2["2. Carousel Architect (Slide a Slide)"]
    M1 --> M7["7. Magnetic Caption"]
    M2 --> M4["4. Anti-AI Slop Filter"]
    M7 --> M3["3. Hashtag Curator (Top 5)"]
    M7 --> M8["8. DM Keyword Funnel"]
    M4 --> M5["5. Weekly Editorial Calendar"]
    M6["6. Niche Viral Scout"] --> M1
    M5 --> M9["9. Human Gatekeeper (Aprovação)"]
    M8 --> M9
```

---

### Módulo 1: Gerador de Ganchos (10 Fórmulas Validadas)
O gancho (*hook*) define 80% do sucesso do conteúdo. Escolha uma das 10 fórmulas de acordo com o objetivo:

1. **Quebra de Crença Comum:** *"Você não precisa de [Ferramenta Cara/Complexa] para [Resultado Desejado]."*
2. **Número Específico + Tempo:** *"Como economizei 14 horas de desenvolvimento nesta semana usando apenas 1 comando CLI."*
3. **Erro Oculto:** *"O erro na arquitetura do seu banco que está custando o dobro da fatura no final do mês."*
4. **Curiosidade Contraintuitiva:** *"Por que os melhores engenheiros de software estão deletando código em vez de escrever mais."*
5. **Comparação Direta (A vs B):** *"[Abordagem Popular] vs [Abordagem Eficiente]: Por que mudamos nossa stack em produção."*
6. **Segredo de Bastidores / Caso Real:** *"Os bastidores de como subimos um sistema com zero downtime para [X] usuários."*
7. **Checklist Rápido:** *"Antes de colocar seu agente de IA em produção, confira estes 5 itens obrigatórios de segurança."*
8. **Analogia Pragmática:** *"Construir software sem especificação técnica é como levantar um prédio sem planta estrutural."*
9. **Desafio Provocativo:** *"Se o seu backend não aguenta 1.000 requisições simultâneas sem engasgar, você precisa revisar isto aqui."*
10. **Acesso Exclusivo / Open Source:** *"Este repositório com 19k estrelas resolve o maior ponto cego dos agentes de IA e é 100% gratuito."*

---

### Módulo 2: Arquiteto de Carrossel (Slide a Slide)
Estrutura rígida de retenção para carrosséis de 6 a 10 slides:

| Slide | Função | Conteúdo & Hierarquia Visual |
| :--- | :--- | :--- |
| **Slide 1** | **Capa Magnética** | Gancho em caixa alta + elemento visual central (UI mockup, ícone ou diagrama minimalista). Zero texto corrido. |
| **Slide 2** | **O Problema Real** | Contextualização da dor em 2 frases diretas. O leitor precisa pensar: *"isso acontece comigo"*. |
| **Slides 3 a N-2** | **Solução em Microdoses** | 1 conceito central por slide. Título forte (`H2`), explicação concisa (máximo 30 palavras) e código/gráfico em destaque. |
| **Slide N-1** | **Slide de Ouro (Clímax)** | O resumo em 1 diagrama esquemático (Mermaid/ASCII) ou tabela de trade-offs comparativa. O maior gerador de prints/salvamentos. |
| **Slide N** | **CTA Final** | Chamada clara para ação: *"Comente [PALAVRA-CHAVE] para receber o material"* ou *"Salve este post para consultar no próximo sprint"*. |

---

### Módulo 3: Curador de Hashtags (A Regra das 5 Hashtags)
Proibido poluir o post com 30 hashtags genéricas que derrubam o alcance algorítmico. Utilizar estritamente **5 hashtags**:
- **1 Hashtag de Macro-Nicho:** Ex: `#tecnologia`, `#inteligenciaartificial`, `#programacao`.
- **2 Hashtags de Médio Alcance:** Ex: `#engenhariadesoftware`, `#devbrasil`, `#automacaocomia`.
- **2 Hashtags Ultra-Específicas:** Ex: `#antigravitycli`, `#claudecode`, `#fullstackts`.

---

### Módulo 4: Filtro Anti-Slop (Linguagem Humana & Executiva)
Submeter todo o texto ao crivo da skill `anti-slop-executive-tone` e `sousza_human_tone`:
- **Termos Banidos:** *"No cenário dinâmico de hoje"*, *"a revolução da IA"*, *"prepare-se para ficar chocado"*, *"vamos mergulhar de cabeça"*, emojis em excesso (🚀🔥💡 em cada linha).
- **Substituição:** Prosa de engenheiro sênior. Frases com sujeito, verbo e predicado diretos, vocabulário técnico preciso e postura de quem constrói sistemas de verdade.

---

### Módulo 5: Calendário Editorial Semanal Inteligente
Distribuição de conteúdo orientada ao funil de autoridade técnica:

```markdown
| Dia | Horário Ideal (BRT) | Formato | Pilar de Conteúdo | Objetivo de Conversão |
| :--- | :--- | :--- | :--- | :--- |
| **Segunda** | 11:30 - 12:30 | Carrossel | Engenharia de Sistemas / Arquitetura | Salvamentos & Autoridade |
| **Quarta** | 18:30 - 19:30 | Reel / Código | Ferramenta Open Source / Automação CLI | Compartilhamentos & Novos Seguidores |
| **Sexta** | 08:30 - 09:30 | Post Único / Dossiê | Caso Real de Produção / Lição Aprendida | DMs & Geração de Oportunidades |
```

---

### Módulo 6: Scout de Viralidade de Nicho (Métrica Real de Engajamento)
Para descobrir conteúdos que realmente performaram no nicho, nunca avaliar apenas o número bruto de curtidas (que favorece contas gigantes). 
Calcular a **Taxa Real de Penetração**:

$$\text{Taxa de Penetração} = \frac{\text{Curtidas} + (2 \times \text{Comentários})}{\text{Seguidores}} \times 100$$

- **Normal:** 1.5% a 3.5%
- **Bom:** 3.5% a 7.0%
- **Fura-Bolha / Viral Real:** > 7.0% (Post prioritário para engenharia reversa).

---

### Módulo 7: Construtor de Legendas Magnéticas
Estrutura padrão de legenda escaneável:

```markdown
[Gancho de 1 a 2 linhas que resume o benefício ou a dor]

[Parágrafo de contextualização rápida: 2 a 3 linhas]

Aqui estão os pontos principais:
• [Ponto 1 em negrito]: Explicação em 1 linha.
• [Ponto 2 em negrito]: Explicação em 1 linha.
• [Ponto 3 em negrito]: Explicação em 1 linha.

[Insight de fechamento ou trade-off técnico]

💬 Comente "[PALAVRA-CHAVE]" que te envio o código/guia completo no direct.

#tag1 #tag2 #tag3 #tag4 #tag5
```

---

### Módulo 8: Funil de Palavra-Chave para Direct (DM Automation)
Para converter comentários em leads e relacionamentos diretos:
- **Escolha da Palavra-Chave:** Curta, fácil de digitar e em maiúsculas (ex: `CLI`, `REEL`, `WATCH`, `STACK`).
- **Automação de Resposta:** Resposta no direct imediata, acolhedora e sem links quebrados.

---

### Módulo 9: Gatekeeper de Aprovação
Ao finalizar a proposta de carrossel, legenda ou roteiro, apresentar a minuta executiva completa no chat e aguardar o aval explícito de Alex Souza antes de qualquer finalização.

---

### ⚡ Módulo 10 (Integração AGY): Offload Pesado para Kaggle Cloud Compute (`kaggle_cloud_compute`)
Sempre que uma operação de conteúdo exigir processamento intensivo — como **transcrição de dezenas de Reels de concorrentes com Whisper Large-v3**, **OCR/visão computacional de carrosséis virais (`Qwen2-VL` / `Florence-2`)** ou **clusterização semântica de milhares de comentários/posts** — acione prioritariamente a skill **`kaggle_cloud_compute`** (`kaggle kernels push` em 2x NVIDIA T4 32 GB VRAM gratuitas), poupando 100% da CPU local.

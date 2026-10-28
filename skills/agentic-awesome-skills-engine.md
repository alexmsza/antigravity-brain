# ⚡ Agentic Awesome Skills (AAS Core) — Catálogo de Playbooks Agênticos

> **Segundo Cérebro — Alex Souza**  
> **Origem:** Baseado no ecossistema [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) (+49.000 stars no GitHub).  
> **Status:** Padrão arquitetural para empacotamento, descoberta e governança de skills modulares no Antigravity e Gemini.

---

## 🎯 Conceito Central

O **Agentic Awesome Skills (AAS)** padroniza a criação de runbooks e instruções em formato `SKILL.md`, permitindo que agentes de IA inspecionem catálogos locais, componham stacks controladas (`aas-stack.json`) e operem com máxima precisão técnica sem sobrecarregar a janela de contexto.

---

## 🏛️ Princípios de Operação

1. **Progressive Disclosure:** O agente só mantém em memória ativa os metadados (`name` e `description`). O corpo completo de instruções, exemplos e scripts de cada skill só é lido no momento exato em que a tarefa o exige.
2. **Composição em Stack (`aas-stack.json`):** Cada projeto mantém um manifesto determinístico listando exatamente quais skills são necessárias para aquele contexto (ex: React + Tailwind + Supabase para frontend; Python + uv + FastAPI para backend).
3. **Padrão Canônico de Playbook (`SKILL.md`):**

```markdown
---
name: nome-da-skill
description: Descrição rica em palavras-chave que orienta o agente sobre QUANDO e COMO ativar esta skill.
---

# Nome da Skill

## Quando Ativar
Instruções de gatilho...

## Procedimento Operacional
Passo a passo acionável com diagramas Mermaid e tabelas...

## Verificação & Critérios de Sucesso
Como validar que o objetivo foi atingido...
```

---

## 📍 Localizações no Ecossistema Alex Souza

- **Globais do Usuário:** `C:\Users\alexk\.gemini\config\skills\<name>/SKILL.md` (aplicam-se a todas as sessões).
- **Locais do Workspace:** `.agents/skills/<name>/SKILL.md` (específicas de um repositório).
- **Repositório Central:** `C:\Users\alexk\projects\antigravity-brain\skills/` (versionadas no GitHub).

# 🎨 Skills: Frontend, Design Systems & UI

## 1. `frontend-builder`
- **Foco:** Criação de front-ends escaláveis em React 19 e Next.js 15 (App Router).
- **Diretrizes:**
  - Separação rigorosa entre Server Components (`RSC`) e Client Components (`"use client"`).
  - Co-localização de componentes, hooks e tipos dentro do diretório de rotas ou `components/`.
  - Integração com `shadcn/ui` para primitivos acessíveis.

## 2. `tailwind` (Tailwind CSS v4)
- **Foco:** Configuração nativa em CSS via `@theme` e eliminação de arquivos JS legados.
- **Tokens Canônicos:**
  - Uso de cores modernas em espaço perceptual `oklch()`.
  - Variáveis semânticas: `--background`, `--foreground`, `--primary`, `--secondary`, `--accent`, `--card`.
  - Suporte a container queries e micro-interações responsivas.

## 3. Catálogo de Inspiração & Microinterações: [UIverse.io](https://uiverse.io/)
- **Diretriz de Front-End:** Conforme a regra de ouro do usuário, consultar e incorporar ativamente elementos do UIverse.io (botões com glassmorphism, toggles tácteis, cards animados, inputs elegantes e loaders estilizados) adaptados rigorosamente para a paleta e tokens do projeto em produção.

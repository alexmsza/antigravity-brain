# 🗄️ Skills: Backend, Banco de Dados & Infraestrutura

## 1. `db-enforcer` & PostgreSQL
- **Chaves Primárias:** Preferência mandatória por `UUIDv7` (ordenáveis no tempo) sobre auto-increment inteiros ou UUIDv4 aleatórios.
- **Políticas RLS (Row-Level Security):** Implementação de políticas zero-trust por tenant (`tenant_id`) ou usuário (`auth.uid()`).
- **Nomenclatura Padrão:** Tabelas no plural em `snake_case`, colunas em `snake_case`, timestamps em `timestamptz`.

## 2. `prisma-cli` & Prisma ORM v7
- **Geração do Client:** `prisma generate` após qualquer alteração no `schema.prisma`.
- **Driver Adapters:** Suporte aos novos driver adapters do Prisma v7 (`@prisma/adapter-pg`, `@prisma/adapter-neon`).
- **Migrações:** Execução de migrações rastreadas via `prisma migrate dev` em desenvolvimento e `prisma migrate deploy` em pipelines de CI/CD.

## 3. `supabase`
- **Autenticação:** Gerenciamento seguro de sessões via SSR cookies no Next.js (`@supabase/ssr`).
- **Edge Functions:** Funções serverless escritas em TypeScript com Deno runtime.

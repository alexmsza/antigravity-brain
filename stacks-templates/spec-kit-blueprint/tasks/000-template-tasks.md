# 📝 Tarefas de Implementação: [Nome da Feature / Módulo]

> **Especificação:** `specs/000-template-spec.md`  
> **Plano:** `plans/000-template-plan.md`

---

## 📋 Checklist de Tarefas Sequenciais

- [ ] **Task 1: Schemas & Tipagem**
  - **Arquivo:** `src/lib/schemas/resource.schema.ts`
  - **Ação:** Criar schemas Zod para entrada e saída com testes de parsing.

- [ ] **Task 2: Camada de Persistência & Migrations**
  - **Arquivo:** `prisma/schema.prisma` ou migrations Supabase.
  - **Ação:** Definir tabela com chave primária UUIDv7, índices e habilitar RLS.

- [ ] **Task 3: Service & Regra de Negócio**
  - **Arquivo:** `src/lib/services/resource.service.ts`
  - **Ação:** Implementar métodos com tratamento resiliente de erros.

- [ ] **Task 4: Endpoint / Route Handler**
  - **Arquivo:** `src/app/api/v1/resource/route.ts`
  - **Ação:** Montar rota com sanitização de limites e retornos HTTP semânticos (201, 400, 401, 500).

- [ ] **Task 5: Testes de Integração & Convergência**
  - **Arquivo:** `src/tests/integration/resource.test.ts`
  - **Ação:** Bateria de testes simulando fluxos de sucesso e casos extremos.

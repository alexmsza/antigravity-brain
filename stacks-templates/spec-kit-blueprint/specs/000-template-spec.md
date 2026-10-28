# 📋 Especificação Funcional: [Nome da Feature / Módulo]

> **Status:** [Draft / Approved / Implementing / Completed]  
> **Data:** [YYYY-MM-DD]  
> **Autor:** Alex Souza (ou par com Antigravity)

---

## 1. Contexto & Histórias de Usuário
- **Como** [persona ou papel de usuário],
- **Quero** [ação ou capacidade do sistema],
- **Para que** [benefício mensurável ou resultado esperado].

---

## 2. Requisitos Funcionais (RF)
- [ ] **RF-01:** O sistema deve permitir...
- [ ] **RF-02:** O sistema deve validar...
- [ ] **RF-03:** O sistema deve disparar...

---

## 3. Requisitos Não-Funcionais (RNF)
- [ ] **RNF-01 (Desempenho):** Tempo de resposta do endpoint < 200ms sob carga normal.
- [ ] **RNF-02 (Segurança):** Autenticação mandatória via Bearer Token JWT e validação de tenant.
- [ ] **RNF-03 (Observabilidade):** Logging estruturado em formato JSON sem dados de PII expostos.

---

## 4. Contratos de Dados & Schemas (Zod / TypeScript)
```typescript
import { z } from "zod";

export const FeatureInputSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(3).max(120),
  status: z.enum(["active", "archived", "pending"]),
});

export type FeatureInput = z.infer<typeof FeatureInputSchema>;
```

---

## 5. Critérios de Aceitação (Gherkin / Given-When-Then)
- **Cenário 1: Sucesso na Criação**
  - **Dado** que um usuário autenticado envia um payload válido,
  - **Quando** o endpoint `POST /api/v1/resource` é invocado,
  - **Então** o registro é persistido no banco com `userId` correspondente e retorna status `201 Created`.

- **Cenário 2: Payload Inválido**
  - **Dado** que o payload possui campos faltantes,
  - **Quando** a rota recebe a requisição,
  - **Então** o schema Zod rejeita e retorna status `422 Unprocessable Entity` com detalhes dos campos inválidos.

# 📝 Servidor MCP: Notion Workspace (`notion`)

## 1. Descrição & Finalidade
O servidor MCP `notion` conecta o Antigravity à Central de Controle de Atividades, Agenda/Calendar e Biblioteca Canônica de Alex Souza no Notion, garantindo observabilidade total de sprints, dossiês acadêmicos e livros.

## 2. Ferramentas Disponíveis
- `API-post-page`: Cria novas páginas ou itens de banco de dados (tarefas, notas, registros).
- `API-patch-page`: Atualiza propriedades de páginas existentes (ex: Status, Prazo ISO 8601, Prioridade).
- `API-query-data-source`: Realiza consultas estruturadas com filtros e ordenação em bases de dados.
- `API-retrieve-a-block` / `API-patch-block-children`: Lê e adiciona blocos filhos (títulos, textos, códigos, Mermaid, callouts).
- `API-post-search`: Busca global por páginas ou databases pelo título ou conteúdo.

## 3. Diretrizes de Sincronização
- Manter status sempre fidedigno: `A Fazer`, `Em Progresso`, `Concluído`.
- Cadastrar prazos com timestamp ISO 8601 (`YYYY-MM-DDTHH:mm:ssZ`) para integração com o Notion Calendar.
- Separar rigorosamente cursos acadêmicos (`IFNMG - TIA`, `IFNMG - BCAP`, `FAT Informática`).

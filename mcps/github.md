# 🐙 Servidor MCP: GitHub (`github`)

## 1. Descrição & Finalidade
O servidor MCP `github` provê controle programático completo sobre repositórios, branches, arquivos, pull requests e issues da conta conectada (`alexmsza`).

## 2. Ferramentas Disponíveis
- `create_repository`: Cria novos repositórios públicos ou privados na conta do usuário autenticado.
- `search_repositories`: Busca repositórios por query semântica ou qualificadores (`user:alexmsza`, `stars:>10`).
- `get_file_contents`: Lê arquivos de qualquer repositório público ou privado acessível.
- `create_or_update_file`: Escreve ou atualiza um arquivo individual com commit message.
- `push_files`: Envia múltiplos arquivos em um único commit atômico para uma branch.
- `create_branch`: Cria uma nova ramificação a partir de um commit SHA.
- `create_pull_request`: Abre PR com título, corpo, base e head.
- `create_pull_request_review`: Submete revisões de código com aprovação ou pedidos de mudança.
- `merge_pull_request`: Executa merge seguro de PRs abertos.

## 3. Exemplo Prático de Criação de Repositório

```json
{
  "ServerName": "github",
  "ToolName": "create_repository",
  "Arguments": {
    "name": "antigravity-brain",
    "description": "🧠 Central Brain & Knowledge Vault do Antigravity",
    "private": false,
    "autoInit": true
  }
}
```

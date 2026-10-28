# 📸 Servidor MCP: Iris Visual Camera (`iris`)

## 1. Descrição & Finalidade
O servidor MCP `iris` provê capacidades de captura fotográfica e inspeção visual ultra-rápida (sub-segundo) de aplicações web locais (`localhost:3000`) ou páginas remotas em produção.

## 2. Ferramentas Disponíveis
- `capture`: Captura screenshots confiáveis com suporte a:
  - Resolução desktop, mobile (`iphone`, `ipad`) ou customizada `WxH`.
  - Emulação de modo escuro (`dark: true`).
  - Captura de página inteira (`full_page: true`) ou seletor CSS específico (`selector: "#hero"`).
  - Espera inteligente por renderização de elementos (`wait_for: ".ready"`).

## 3. Exemplo Prático de Captura

```json
{
  "ServerName": "iris",
  "ToolName": "capture",
  "Arguments": {
    "url": "https://amplusimoveis.com.br",
    "size": "desktop",
    "timeout_seconds": 30,
    "output": "screenshot.png"
  }
}
```

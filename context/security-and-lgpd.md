# 🛡️ Diretrizes de Segurança, Privacidade (LGPD) & Zero Leaks na UI

## 1. Gestão de Segredos & Variáveis de Ambiente
- **Regra de Ouro:** Jamais hardcodar credenciais, chaves de API, tokens JWT ou senhas em arquivos de código.
- Utilizar sempre `.env` e manter `.env.example` rigorosamente sanitizado.

## 2. Sigilo Absoluto de Arquitetura (Zero Leaks na UI)
- Em hipótese alguma expor detalhes internos da arquitetura, provedores ou tecnologias em mensagens visíveis para o usuário final (modais, toasts, telas, formulários ou mensagens de erro).
- **Proibido Citar:** Provedores (Zoho, Vercel, Supabase, AWS, Cloudflare), nomes de tabelas, portas, protocolos (SMTP, RLS, Serverless) ou status técnicos ("fila local", "ambiente de dev").
- **Mensagens Padronizadas para o Cliente:** Sempre 100% executivas, neutras e acolhedoras:
  - *Exemplo correto:* *"Solicitação registrada com sucesso. A diretoria entrará em contato em breve."*
  - *Exemplo proibido:* *"Payload inserido no Supabase via RLS na porta 5432."*

## 3. Proteção de Dados Sensíveis (PII) & Validação de Limites
- Proibido expor e-mails, telefones ou documentos pessoais em logs de console (`console.log`).
- Sanitizar e validar rigorosamente inputs e webhooks com bibliotecas como Zod antes de persistir no banco de dados.

# 🎨 As 20 Leis de UX & Design Cognitivo para Interfaces Inteligentes

> **Origem:** Extração analítica de Isaque Paiva (`@isaquelev1` — *20 leis de UX para o Claude melhorar suas interfaces*).  
> **Status:** Módulo Canônico de Frontend & Experiência do Usuário.

---

## 1. Princípios Fundamentais & Aplicação Direta em Código

### 1.1. Eficiência & Tempo de Resposta
1. **Limiar de Doherty (Doherty Threshold):**
   * *Regra:* Resposta do sistema inferior a **400ms** previne dispersão de atenção e multiplica a produtividade.
   * *Código:* Utilizar sempre *Skeleton Loaders*, *Optimistic Updates* (React 19 `useOptimistic`) e microinterações de feedback instantâneo.
2. **Lei de Parkinson:**
   * *Regra:* O tempo de execução de uma tarefa se expande para preencher o tempo percebido.
   * *Código:* Fluxos diretos, salvamento automático e preenchimento inteligente de formulários para encurtar ciclos de uso.

### 1.2. Tomada de Decisão & Carga Mental
3. **Lei de Hick (Hick's Law):**
   * *Regra:* O tempo de decisão cresce logaritmicamente com o número de escolhas.
   * *Código:* Limitar menus primários a 5-7 itens; dividir formulários densos em etapas (*multi-step wizard*); destacar sempre 1 CTA primário.
4. **Lei de Miller:**
   * *Regra:* A capacidade de retenção imediata da memória de trabalho humana é de **7 ± 2 itens**.
   * *Código:* Agrupamento visual (*chunking*); blocos de cartões e listas paginadas ou particionadas.
5. **Navalha de Occam:**
   * *Regra:* A solução com o menor número de premissas visuais é sempre superior.
   * *Código:* Eliminar botões redundantes, campos opcionais inúteis e texto explicativo prolixo na UI.

### 1.3. Ergonomia & Layout Espacial
6. **Lei de Fitts:**
   * *Regra:* O tempo para atingir um alvo depende da distância e do tamanho do alvo.
   * *Código:* Botões de ação com padding generoso (mínimo de 44x44px no mobile); botões flutuantes fixados próximos ao polegar.
7. **Lei de Jakob:**
   * *Regra:* Usuários passam a maior parte do tempo em outros produtos; eles esperam padrões universais.
   * *Código:* Seguir padrões industriais consolidados (busca no topo, ícone de perfil no canto superior direito, menu lateral colapsável).
8. **Lei da Região Comum (Common Region):**
   * *Regra:* Elementos dentro de uma borda ou fundo comum são percebidos como um grupo coeso.
   * *Código:* Cards bem delimitados com bordas sutis (`border border-slate-800 bg-slate-950/50`).
9. **Lei da Proximidade:**
   * *Regra:* Objetos próximos são vistos como associados.
   * *Código:* Espaçamentos hierárquicos consistentes (espaço entre label e input menor que espaço entre campos distintos).
10. **Lei da Similaridade:**
    * *Regra:* Elementos com mesmo estilo visual têm mesma função.
    * *Código:* Padronização rigorosa de cores de tokens (todas as ações destrutivas em vermelho, primárias em ciano/azul).
11. **Lei da Conexão Uniforme:**
    * *Regra:* Elementos conectados por linhas ou trilhas são percebidos como dependentes.
    * *Código:* Linhas conectivas em timelines de status, esteiras de pedidos e grafos de dependência.
12. **Lei da Prägnanz (Simplicidade e Boa Forma):**
    * *Regra:* O cérebro interpreta composições complexas na forma geométrica mais simples.
    * *Código:* Layouts geométricos alinhados à grade (*grid layout*), evitando assimetrias caóticas.

### 1.4. Psicologia & Retenção Emocional
13. **Efeito da Usabilidade Estética:**
    * *Regra:* Usuários percebem produtos visualmente atraentes como mais fáceis de operar.
    * *Código:* Tipografia refinada, contrastes calibrados (WCAG AAA) e microinterações táteis (UIverse.io).
14. **Regra do Ponto Final (Peak-End Rule):**
    * *Regra:* A memória do usuário sobre uma sessão é definida pelo pico mais intenso e pelo encerramento.
    * *Código:* Finalizações memoráveis (animação suave de sucesso, recibo executivo limpo, feedback afirmativo).
15. **Lei de Postel (Princípio da Robustez):**
    * *Regra:* "Seja liberal no que aceita e rigoroso no que transmite."
    * *Código:* Autocorreção de inputs (ex: aceitar telefones com ou sem DDD/máscara; normalizar maiúsculas/minúsculas).
16. **Lei de Tesler (Conservação da Complexidade):**
    * *Regra:* A complexidade nunca desaparece; ela deve ser absorvida pelo sistema para poupar o usuário.
    * *Código:* O backend/frontend deve realizar cálculos, triagens e transformações automaticamente nos bastidores.
17. **Efeito de Posição Serial:**
    * *Regra:* O primeiro e o último item de uma lista são os mais memoráveis.
    * *Código:* Posicionar recursos mais vitais nas extremidades da barra de navegação e em tabelas de preços.
18. **Efeito Von Restorff (Isolamento):**
    * *Regra:* O elemento visualmente destoante é o mais lembrado e clicado.
    * *Código:* Destaque exclusivo para o plano "Mais Escolhido" ou botão de ação de maior conversão.
19. **Efeito Zeigarnik:**
    * *Regra:* Tarefas incompletas criam tensão psicológica que incentiva a conclusão.
    * *Código:* Barras de progresso em onboarding ("Perfil 85% completo"), checklists interativos de tarefas pendentes.
20. **Princípio de Pareto (80/20):**
    * *Regra:* 80% do valor utilizado vem de 20% das funcionalidades.
    * *Código:* Destacar ostensivamente as funcionalidades centrais e encapsular as secundárias em menus secundários.

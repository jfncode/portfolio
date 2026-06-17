/* Base de conhecimento do jfncode chatbot — 100% offline.
   Para ALIMENTAR: copie um bloco { } e ajuste tags/pergunta/resposta.
   - tags     = palavras-chave que o visitante pode digitar (sem acento, minúsculas)
   - pergunta = rótulo do botão/atalho (curto)
   - resposta = texto exibido (aceita HTML simples: <b>, <br>)
   - wa       = true mostra o botão "falar no WhatsApp" depois da resposta
   Tom: sempre tirar a dúvida E conduzir o cliente para fechar. */
window.JFN_FAQ = {
  saudacao:
    'Olá! 👋 Sou o <b>jfncode chatbot</b>. Tiro suas dúvidas sobre sites, sistemas, chatbots e automação — e já te mostro como a gente resolve o seu problema e faz seu negócio vender mais. Escolha uma opção ou digite sua pergunta:',

  // atalhos que aparecem como botões na abertura (referencia pelas pergunta-chave)
  destaques: ['servicos', 'precos', 'prazo', 'chatbot', 'whatsapp'],

  fallback:
    '<span class="gr">// 404 — não achei na minha base</span><br>Essa eu não respondo por aqui 🤔 — mas a equipe responde rapidinho e já te ajuda a resolver. Bora pro WhatsApp?',

  itens: [
    { id:'servicos', tags:['servico','servicos','oferece','trabalho','portfolio','projetos'],
      pergunta:'Quais serviços vocês fazem',
      resposta:'A <b>jfncode</b> faz: 🌐 sites & landing pages · ⚙️ sistemas internos · 🤖 chatbots & IA (igual este aqui!) · 🔁 automação · 🔗 SEO.<br>Qual deles resolveria o <b>seu</b> problema? Te passo um orçamento agora.', wa:true },

    { id:'precos', tags:['preco','precos','custa','custo','valor','quanto','investimento','orcamento','plano','planos'],
      pergunta:'Quanto custa um site',
      resposta:'💰 Planos: <b>Essencial R$ 590</b> (one-page) · <b>Profissional R$ 1.290</b> · <b>Premium</b> sob orçamento. Todos com manutenção mensal.<br>Fechando agora a gente agiliza — quer montar o seu no WhatsApp?', wa:true },

    { id:'prazo', tags:['prazo','tempo','demora','quando','pronto','entrega','rapido','dias'],
      pergunta:'Prazo de entrega',
      resposta:'⚡ Um one-page fica no ar em <b>até 7 dias</b>. Quanto antes começar, antes seu negócio aparece e vende. Bora dar o primeiro passo hoje?', wa:true },

    { id:'chatbot', tags:['chatbot','chat','bot','assistente','atendimento','robo de atendimento'],
      pergunta:'Quero um chatbot desses',
      resposta:'🤖 Esse assistente que você está usando? Eu faço <b>um igual pro seu negócio!</b> Atende clientes 24/7, tira dúvidas e qualifica vendas — ideal pra <b>empresa de pequeno porte</b> que não tem equipe pra ficar respondendo. Imagina nunca mais perder um cliente por demora. Quer um desses?', wa:true },

    { id:'pequena', tags:['pequena','pequeno','porte','micro','mei','comecando','autonomo','sozinho','familiar'],
      pergunta:'Tenho uma empresa pequena',
      resposta:'💡 Aí que a <b>jfncode</b> brilha: deixo sua pequena empresa <b>com cara de grande</b> — site profissional, atendimento automático e presença no Google, sem precisar de equipe de TI. Você cuida do negócio, a tecnologia trabalha por você. É o seu caso?', wa:true },

    { id:'app', tags:['app','aplicativo','aplicativos','iphone','android','celular','mobile','play store','app store'],
      pergunta:'Vocês fazem aplicativo',
      resposta:'📱 Faço <b>web apps</b> e sites 100% responsivos que rodam liso no celular (iPhone e Android) direto pelo navegador — <b>sem custo de loja de aplicativos</b> e mais rápido de lançar que um app nativo. Pra maioria dos negócios é a melhor relação custo-benefício. Quer ver como ficaria pro seu?', wa:true },

    { id:'sistema', tags:['sistema','plataforma','interno','gestao','painel','login','cadastro','controle'],
      pergunta:'Vocês fazem sistemas',
      resposta:'⚙️ Sim! Sistemas sob medida: cadastros, painéis, área de login, treinamento. Já fiz a plataforma de treinamento de um <b>hospital</b>. Isso organiza e profissionaliza sua operação. Me conta o que sua empresa precisa controlar.', wa:true },

    { id:'automacao', tags:['automacao','automatizacao','robo','automatizar','repetitivo','tarefa'],
      pergunta:'O que é automação',
      resposta:'🔁 Crio robôs que trabalham por você 24/7: publicam conteúdo, monitoram, executam tarefas repetitivas. <b>Menos trabalho manual, mais tempo pra vender.</b> O que você gostaria de tirar das suas costas?', wa:true },

    { id:'seo', tags:['seo','google','aparecer','busca','pesquisa','encontrar','ranking','indexar'],
      pergunta:'Aparecer no Google (SEO)',
      resposta:'🔎 Otimizo seu site pra <b>aparecer no Google</b> (SEO + preview de link bonito). Seu cliente te acha na hora que pesquisa pelo seu serviço. Quer ser encontrado por quem já está procurando?', wa:true },

    { id:'manutencao', tags:['manutencao','mensal','mensalidade','suporte','atualizacao','manter'],
      pergunta:'Tem manutenção',
      resposta:'🔧 Tem sim — manutenção mensal (R$ 60–90) mantém seu site no ar, seguro e atualizado. É o que garante que seu investimento <b>nunca fica parado</b>.', wa:true },

    { id:'dominio', tags:['dominio','registro','.com','.com.br','endereco','url','nome do site'],
      pergunta:'Tem domínio incluso',
      resposta:'🌐 Configuro seu domínio <b>.com.br</b> junto com o site — endereço profissional próprio, nada de link genérico. Já tem um nome em mente?', wa:true },

    { id:'pagamento', tags:['pagamento','pagar','pix','cartao','parcela','parcelar','forma'],
      pergunta:'Formas de pagamento',
      resposta:'💳 Pix, cartão ou parcelado — a gente combina o que cabe no seu bolso. O importante é tirar seu projeto do papel. Fala comigo no WhatsApp que monto o melhor formato.', wa:true },

    { id:'whatsapp', tags:['whatsapp','whats','zap','falar','contato','humano','atendente','telefone'],
      pergunta:'Falar no WhatsApp',
      resposta:'🚀 Bora! É só me chamar que a gente alinha tudo e seu projeto já entra na fila. Primeira conversa <b>sem compromisso</b>.', wa:true },
  ],
};

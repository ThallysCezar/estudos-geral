// Topicos 5 a 8 e a parte "Como aprender de verdade".
export const TOPICOS_C = [
{
  id: 'd1', parte: 'p4', badges: ['essencial'],
  titulo: 'Dados: o que você não guarda é o que não vaza',
  direto: 'Descubra quais dados existem, para que servem e quem os acessa. Colete o necessário, proteja durante todo o ciclo de vida e elimine quando não houver justificativa para manter. Minimização é o único controle que reduz risco e custo ao mesmo tempo.',
  caso: ['o caso',
    'O pedido precisa do endereço para a entrega. Alguém copia o endereço para o log de depuração "só para investigar um bug". Seis meses depois esse campo está no log, no sistema de análise, no backup de 90 dias e nas fixtures de teste que todo desenvolvedor tem na máquina. Mascarar o endereço na tela não remove nenhuma dessas cópias — e, quando chega um pedido de exclusão do titular, ninguém sabe dizer onde o dado está.'],
  analogia: 'É a diferença entre guardar uma chave reserva e espalhar dez cópias pela casa "por via das dúvidas". Cada cópia é um lugar a mais para perder, um lugar a mais para alguém achar, e um lugar a mais para lembrar quando você trocar a fechadura.',
  duo: {
    surgiu: ['Como surgiu', 'Armazenamento ficou barato e a cultura virou "guarde tudo, pode ser útil depois". Funcionou enquanto o dado era só custo de disco. Passou a não funcionar quando dado pessoal ganhou obrigação legal, prazo de resposta ao titular e consequência em caso de exposição — aí cada cópia esquecida virou passivo.'],
    repl: 'o hábito de coletar por precaução e reter indefinidamente. A lógica se inverteu: cada campo guardado precisa de finalidade declarada e prazo, e o padrão passou a ser descartar, não acumular.',
  },
  mecanismo: [
    '<p>Inventarie dados e fluxos, não apenas tabelas: coleta, uso, compartilhamento, armazenamento, backup, exportação, retenção e descarte. Classifique a sensibilidade, restrinja acesso, proteja transporte e armazenamento, e trate cópias e ambientes de teste como parte do escopo — eles quase sempre ficam de fora e são onde o dado mais circula.</p>',
    '<p>Sobre a LGPD, sem simplificação enganosa: ela regula o tratamento de dados pessoais e atribui papéis e obrigações conforme a atuação. "Controlador" e "operador" são definidos pelo que a parte <i>faz</i> no tratamento, não pelo nome que o contrato usa. Base legal, transparência, direitos do titular, segurança e comunicação de incidentes exigem avaliação do caso com quem é competente para isso.</p>',
    '<p>Criptografia ajuda e não substitui o resto. Dado cifrado com a chave acessível ao mesmo serviço comprometido continua exposto; e cifrar não resolve acesso indevido de quem tem permissão legítima, nem dispensa minimização e descarte.</p>',
  ],
  dg: 'ciclo',
  serve: 'Reduzir superfície e custo ao mesmo tempo: menos dados e menos cópias significam menos lugares para proteger, menos exposição em caso de incidente e menos esforço para atender um pedido de exclusão ou de portabilidade.',
  importa: 'É o único capítulo em que a decisão técnica tem consequência jurídica direta, e o único em que a melhor proteção é não ter o dado. Também é onde a engenharia decide sozinha, todos os dias, em cada campo que copia para um log sem pensar.',
  alem: {
    tag: 'Para ir além', opt: 'por que backup e log são o calcanhar da retenção',
    corpo: [
      '<p>Política de retenção costuma ser escrita pensando no banco de dados principal. Backup e log seguem outra lógica: o backup guarda o estado completo por semanas ou meses, e o log retém o que a aplicação imprimiu, não o que o modelo de dados declarou.</p>',
      '<p>Consequência prática: apagar um registro do banco não o apaga dos backups do período nem dos logs. Qualquer promessa de exclusão precisa considerar os dois, e o caminho realista é não deixar o dado chegar lá — filtrando na origem — em vez de tentar removê-lo depois.</p>',
    ],
    fonte: 'A ANPD mantém guia orientativo de segurança e material para agentes de tratamento de pequeno porte. Este caderno é educacional; confirme requisitos com privacidade e jurídico.',
  },
  ver: 'Onde o dado fica, como se replica e o custo de cada camada de armazenamento estão em <a href="../trilhas/nuvem.html">Nuvem completo</a>; o desenho de retenção e paginação sobre volume, em <a href="../trilhas/system-design.html">System Design completo</a>.',
  gotcha: ['armadilhas', [
    '<b>Mascarar na tela e achar que resolveu.</b> A máscara é de apresentação. O dado continua no log, no backup, na exportação e nas fixtures.',
    '<b>Tratar contrato como definidor de papel.</b> Controlador e operador decorrem da atuação no tratamento, não do nome escrito no contrato.',
    '<b>Usar dado real em ambiente de teste.</b> É a cópia com menos controle e mais acesso de toda a organização.',
    '<b>Prometer exclusão sem olhar backup e log.</b> Apagar do banco principal não apaga das cópias que sobrevivem semanas.',
  ]],
  fechamento: {
    titulo: 'Síntese: minimizar é o controle mais barato',
    revisao: [
      ['teal', 'Inventário é de fluxo, não de tabela', 'Coleta, uso, compartilhamento, backup, exportação, retenção e descarte. Teste e analytics fazem parte do escopo.'],
      ['purple', 'Papel decorre da atuação', 'Controlador e operador são definidos pelo que a parte faz no tratamento, não pelo rótulo do contrato.'],
      ['rose', 'Criptografia não substitui acesso e descarte', 'Cifrar não resolve uso indevido por quem tem permissão legítima, nem dispensa minimizar e eliminar.'],
    ],
    pegadinha: ['Acreditar que apagar do banco cumpre um pedido de exclusão', 'O backup guarda o estado completo por semanas ou meses e o log retém o que a aplicação imprimiu. O caminho realista é impedir que o dado chegue lá, filtrando na origem.'],
    modelo: ['Cada campo precisa de finalidade e prazo', 'Para qualquer dado pessoal que o sistema toque, responda: por que está sendo coletado, por quanto tempo fica e quem acessa. Campo sem as três respostas é passivo, não ativo.'],
    exercicio: {
      cenario: 'Cenário de engenharia: para investigar uma falha intermitente no checkout, um desenvolvedor adiciona ao log o payload completo do pedido, que inclui nome, endereço e os quatro últimos dígitos do cartão. O log vai para a ferramenta central, com retenção de 90 dias e acesso para todo o time de engenharia.',
      pergunta: 'Qual é o problema principal e o encaminhamento correto?',
      opcoes: [
        ['Não há problema relevante: são apenas os quatro últimos dígitos, que isoladamente não reconstroem o número do cartão, e o log fica numa ferramenta interna com acesso restrito à engenharia.', false, 'Incorreto. O problema não é só o cartão: nome e endereço são dados pessoais que acabaram de ganhar mais 90 dias de retenção e uma audiência muito maior do que a necessária.'],
        ['O payload inteiro ampliou a superfície sem finalidade: registre só o identificador do pedido e o estado necessário ao diagnóstico, e trate os 90 dias já coletados como exposição a tratar.', true, 'Exato. A finalidade é diagnosticar, e para isso basta o identificador e o estado relevante. O log herdou retenção e acesso que ninguém decidiu para aquele dado.'],
        ['O correto é cifrar os campos sensíveis dentro da própria linha de log, mantendo o payload completo para não perder capacidade de investigar a falha intermitente mais adiante.', false, 'Incorreto. Cifrar dentro do log adiciona complexidade e gestão de chave sem remover a cópia desnecessária; a decisão certa é não registrar o que não é preciso.'],
      ],
    },
    flashcard: ['Por que minimização de dados é considerada o controle mais eficiente?',
      'Porque é o único que reduz risco e custo ao mesmo tempo. Todo outro controle protege um dado que continua existindo, e portanto continua precisando de acesso, cifragem, backup, auditoria e resposta a pedidos do titular. O dado que não foi coletado não vaza, não precisa ser protegido, não aparece em backup e não entra num pedido de exclusão.'],
  },
},
{
  id: 'e1', parte: 'p5', badges: ['essencial'],
  titulo: 'Secure SDLC: segurança cedo, não como portão no fim',
  direto: 'Identificar abuso e requisitos cedo, reduzir vulnerabilidade no código e nas dependências, e manter controles no pipeline e em produção. Segurança no fim da esteira só consegue reprovar — e reprovar tarde é caro demais para ser feito com frequência.',
  caso: ['o caso',
    'Uma funcionalidade de exportação de relatórios entra em revisão de segurança na véspera do lançamento. O revisor aponta que qualquer usuário autenticado consegue exportar dados de outra organização. A correção exige mudar o modelo de consulta, que já está em três telas. O time escolhe lançar com um filtro no front-end e "corrigir na próxima sprint". O filtro vai para produção; a próxima sprint tem outras prioridades.'],
  analogia: 'É a diferença entre o engenheiro que acompanha a obra e o fiscal que aparece no dia da entrega. O fiscal só pode aprovar ou reprovar o que já está construído — e reprovar significa demolir. Quem acompanha desde a planta consegue mudar uma viga quando isso ainda custa uma borracha.',
  duo: {
    surgiu: ['Como surgiu', 'Enquanto o ciclo era longo e o lançamento acontecia duas vezes por ano, cabia uma auditoria antes de cada entrega. Com entrega contínua, o portão no fim virou gargalo: ou ele atrasa tudo, ou é contornado. A saída foi distribuir a verificação pelo ciclo, em vez de concentrá-la num ponto.'],
    repl: 'a revisão de segurança como etapa final de aprovação. Ela não desapareceu, mas deixou de ser o único momento — e deixou de ser o momento em que se descobre que o desenho está errado.',
  },
  mecanismo: [
    '<p>O fluxo prático: requisitos de segurança e privacidade → modelagem de ameaças → desenho de controles → implementação → revisão e testes → publicação com proveniência → monitoramento → correção e aprendizado. Cada etapa produz algo verificável, e a modelagem de ameaças é a que mais economiza retrabalho porque acontece antes de existir código.</p>',
    '<p>Controles por camada: validação e codificação de saída contra entrada maliciosa; consultas parametrizadas; autorização no servidor; segredo fora do repositório; dependências inventariadas e atualizadas; testes proporcionais ao risco, com revisão humana; e log sem senha, token ou dado pessoal desnecessário.</p>',
    '<p>Em Java e Spring: configuração explícita do Spring Security, validação de entrada, limite de tamanho de payload, autorização nos endpoints <i>e</i> nos serviços, dependências corrigidas, e proteção do actuator e dos endpoints administrativos. Transação e validação de negócio não substituem autorização.</p>',
  ],
  dg: 'sdlc',
  serve: 'Fazer com que a correção aconteça quando ela ainda é barata — no requisito e no desenho — em vez de virar dívida negociada contra prazo na véspera do lançamento.',
  importa: 'O custo de corrigir cresce com a distância entre o erro e a descoberta. Uma falha de autorização encontrada na modelagem custa uma conversa; encontrada em produção custa incidente, correção às pressas e, às vezes, comunicação a titulares.',
  alem: {
    tag: 'Para ir além', opt: 'o que o OWASP Top 10 é, e o que ele não é',
    corpo: [
      '<p>O OWASP Top 10 é um documento de conscientização sobre categorias de risco frequentes em aplicações web. Ele organiza a conversa e dá vocabulário comum.</p>',
      '<p>O que ele <b>não</b> é: não é norma, não é lista completa de controles e não é critério suficiente para declarar uma aplicação segura. "Passamos no Top 10" não é afirmação verificável — as categorias são amplas e dependem do contexto do sistema. Use-o para orientar modelagem de ameaças e revisão, combinado com requisitos próprios e critérios testáveis.</p>',
    ],
    fonte: 'OWASP Top 10. Confirme a edição vigente antes de citar; as categorias mudam entre versões.',
  },
  ver: 'A configuração de filtros e o <code class="i">@PreAuthorize</code> estão em <a href="../trilhas/spring.html">Spring completo</a>; o pipeline, a proveniência da imagem e os segredos em cluster, em <a href="../trilhas/docker-kubernetes.html">Docker e Kubernetes completo</a>.',
  gotcha: ['armadilhas', [
    '<b>Tratar o Top 10 como checklist de aprovação.</b> É conscientização, não norma. Nenhuma aplicação fica segura por "cobrir as dez".',
    '<b>Segurança como portão no fim.</b> Quem só pode reprovar na véspera acaba sendo contornado — e vira filtro no front-end "até a próxima sprint".',
    '<b>Confiar no scanner e dispensar revisão humana.</b> Ferramenta encontra padrão conhecido; falha de autorização e de regra de negócio quase sempre escapa.',
    '<b>Dependência atualizada só quando quebra.</b> Inventário e atualização precisam de cadência própria, não do acaso de um build falhar.',
  ]],
  fechamento: {
    titulo: 'Síntese: o custo cresce com a distância',
    revisao: [
      ['teal', 'Verificação distribuída pelo ciclo', 'Requisito, modelagem de ameaças, desenho, implementação, teste, publicação, monitoramento e aprendizado. Cada etapa produz evidência.'],
      ['purple', 'Autorização é do servidor', 'Validação, consulta parametrizada e autorização no endpoint e no serviço. Transação e regra de negócio não substituem permissão.'],
      ['rose', 'Modelagem de ameaças economiza mais', 'Acontece antes de existir código, e é onde uma decisão de desenho custa uma conversa em vez de um refactor.'],
    ],
    pegadinha: ['Declarar a aplicação segura porque "cobrimos o OWASP Top 10"', 'O Top 10 é conscientização sobre categorias frequentes, com escopo amplo e dependente de contexto. Não é norma nem lista completa, e não produz afirmação verificável sobre um sistema específico.'],
    modelo: ['Distância entre o erro e a descoberta', 'Para qualquer controle que você for adicionar, pergunte em que etapa ele descobriria o problema. Quanto mais perto do requisito, mais barata a correção; quanto mais perto de produção, maior a chance de virar dívida negociada contra prazo.'],
    exercicio: {
      cenario: 'Cenário de pipeline: o time propõe adicionar um scanner de dependências que falha o build quando encontra vulnerabilidade de severidade alta. Em duas semanas, o build passa a falhar várias vezes por dia por causa de bibliotecas transitivas sem correção disponível, e o time adiciona uma exceção global para não travar as entregas.',
      pergunta: 'Qual leitura desse resultado é a correta?',
      opcoes: [
        ['O scanner foi mal escolhido: trocar por uma ferramenta com menos falsos positivos e melhor resolução de dependências transitivas resolveria sem precisar de exceção global no pipeline.', false, 'Incorreto. O problema não é a ferramenta: é que o controle foi ligado sem política de tratamento, sem dono e sem prazo para o que ele encontra.'],
        ['O controle entrou sem processo: falta critério de severidade no contexto, dono para triagem, prazo por faixa e exceção com validade. Sem isso o portão vira ruído e acaba desligado.', true, 'Exato. Controle sem processo de tratamento produz alarme que a equipe aprende a ignorar — e a exceção global é o sintoma previsível disso.'],
        ['O resultado mostra que falhar o build por vulnerabilidade de dependência é reação excessiva; o correto seria apenas publicar o relatório e revisá-lo numa cadência periódica combinada.', false, 'Incorreto. Só registrar converte o controle em relatório que ninguém lê. O problema não é a severidade da reação, é a ausência de triagem, dono e prazo.'],
      ],
    },
    flashcard: ['Por que mover segurança para o início do ciclo reduz custo, e não apenas antecipa trabalho?',
      'Porque o custo de corrigir cresce com a distância entre o erro e a descoberta. Uma falha de autorização identificada na modelagem de ameaças muda um diagrama; a mesma falha encontrada na véspera do lançamento exige alterar código já espalhado por várias telas, e costuma ser negociada contra o prazo — virando um paliativo no front-end que fica em produção indefinidamente.'],
  },
},
{
  id: 'e2', parte: 'p5', badges: ['essencial'],
  titulo: 'Incidente: conter, preservar, recuperar e aprender',
  direto: 'Incidente é um evento que exige coordenação para conter impacto, preservar evidência, recuperar o serviço e cumprir as comunicações cabíveis. O improviso custa caro justamente no momento em que ninguém tem cabeça para improvisar.',
  caso: ['o caso',
    'Um token de serviço aparece num repositório público. O relógio começa a correr, e a ordem importa: revogar e rotacionar a credencial; identificar o que ela alcançava e o que foi usado desde a exposição; limitar o acesso afetado; preservar os logs <i>antes</i> que a retenção os apague; corrigir a origem — o segredo que entrou no build; e avaliar, com quem é competente, as obrigações de comunicação. Fazer isso sem um runbook, às onze da noite, é como aprender a dirigir na estrada.'],
  analogia: 'É o extintor e o plano de evacuação. Ninguém lê o manual do extintor com fogo na sala. O valor do plano está em ter sido escrito e ensaiado antes — quando dava para pensar devagar e discordar sem urgência.',
  duo: {
    surgiu: ['Como surgiu', 'Enquanto a resposta era "reinstalar o servidor", a prática informal bastava. Com sistemas distribuídos, obrigações de comunicação e a necessidade de dizer depois o que exatamente aconteceu, a resposta virou processo com papéis, porque descobrir quem decide no meio do incidente é tarde demais.'],
    repl: 'a cultura de culpa, em que a revisão terminava em um nome. A revisão sem culpa surgiu porque punir quem reporta ensina o time a não reportar — e um incidente escondido é mais caro que um incidente conhecido.',
  },
  mecanismo: [
    '<p>O ciclo: preparar papéis e runbooks; detectar e classificar; conter; erradicar a causa; recuperar com segurança; comunicar as partes interessadas; e fazer revisão sem culpa, com ações que têm dono e prazo e são acompanhadas até o fim.</p>',
    '<p>Observabilidade segura é o que torna o resto possível: métricas, logs e traces permitem perceber o comportamento e reconstruir a sequência. Para servirem de evidência, precisam de integridade protegida, acesso controlado, relógio sincronizado, dado sensível limitado e retenção pelo período justificado. Um log é indício, não verdade completa.</p>',
    '<p>Para medir e melhorar: tempo até detectar e até conter, cobertura dos ativos críticos, vulnerabilidades fora do prazo, testes de restauração realizados e ações de postmortem vencidas. Métrica serve para orientar decisão, não para punir quem reportou o problema.</p>',
  ],
  dg: 'incidente',
  serve: 'Transformar um momento de pânico em sequência conhecida, de modo que as decisões difíceis já tenham sido tomadas antes e o time possa executar em vez de deliberar.',
  importa: 'A diferença entre um incidente de duas horas e um de dois dias raramente está na competência técnica. Está em saber quem decide, onde está o runbook, se a evidência foi preservada antes de a retenção passar, e se alguém já pensou em qual é o caminho de volta.',
  alem: {
    tag: 'Para ir além', opt: 'por que preservar evidência conflita com restaurar rápido',
    corpo: [
      '<p>Os dois objetivos legítimos brigam. Restaurar o serviço quer derrubar e recriar a instância comprometida agora; preservar evidência quer capturar memória, disco e estado antes que isso aconteça. Quem decide no calor do momento costuma escolher restaurar, e a investigação depois fica sem material.</p>',
      '<p>A saída é decidir antes, por classe de incidente: em quais casos a captura precede a recriação, quem tem autoridade para pedir a captura, e qual é o tempo máximo aceitável para ela. Decidido antes, vira execução; decidido durante, vira discussão com o serviço fora do ar.</p>',
    ],
    fonte: 'Prática consolidada em resposta a incidentes; os critérios específicos dependem das obrigações aplicáveis à organização.',
  },
  ver: 'Métricas, traces e o que observar em produção estão em <a href="../trilhas/nuvem.html">Nuvem completo</a>; timeout, disjuntor e degradação, em <a href="../trilhas/system-design.html">System Design completo</a>. Aqui interessa a coordenação sob pressão.',
  gotcha: ['armadilhas', [
    '<b>Recriar a instância antes de capturar evidência.</b> Resolve o serviço e encerra a investigação junto. Decida a ordem por classe de incidente, antes.',
    '<b>Runbook que nunca foi ensaiado.</b> Documento não lido sob pressão é documento que não existe.',
    '<b>Revisão que termina num nome.</b> Punir quem reporta ensina o time a esconder, e incidente escondido custa mais.',
    '<b>Postmortem sem dono e sem prazo.</b> Ação registrada e não acompanhada é a forma educada de não corrigir.',
  ]],
  fechamento: {
    titulo: 'Síntese: decidir antes para executar depois',
    revisao: [
      ['teal', 'O ciclo tem sete passos', 'Preparar, detectar, conter, erradicar, recuperar, comunicar e aprender. Cada um com papel definido antes do incidente.'],
      ['purple', 'Log é indício, não verdade', 'Para servir de evidência precisa de integridade, acesso controlado, relógio sincronizado e retenção justificada.'],
      ['rose', 'Revisão sem culpa, ação com dono', 'A revisão busca causa, não culpado; mas a ação resultante precisa de responsável e prazo, ou não acontece.'],
    ],
    pegadinha: ['Derrubar e recriar a instância comprometida antes de preservar evidência', 'Restaurar rápido e investigar depois são objetivos que brigam. Recriada a instância, memória e disco se foram — e a investigação fica sem material para dizer o que aconteceu.'],
    modelo: ['Decisão difícil pertence ao tempo de paz', 'Toda escolha que exigiria deliberação durante o incidente — capturar ou recriar, comunicar ou aguardar, quem autoriza o quê — deve estar decidida antes. No incidente, o time executa; se precisar decidir, já é tarde.'],
    exercicio: {
      cenario: 'Cenário de resposta: às 23h, um alerta indica exportação atípica de dados por uma conta de serviço. O time de plantão identifica a credencial, revoga o token e recria o contêiner afetado para restaurar o serviço. Na manhã seguinte, a investigação quer saber o que foi exportado e para onde.',
      pergunta: 'Que erro de processo esse plantão revela?',
      opcoes: [
        ['Nenhum erro relevante: diante de exportação em curso às 23h, revogar a credencial e restabelecer o serviço é exatamente a prioridade que se espera de um plantão bem treinado.', false, 'Incorreto. Conter foi certo, mas recriar o contêiner antes de capturar estado eliminou a evidência que a investigação agora precisa — e isso era previsível.'],
        ['Faltava decidir antes, por classe de incidente, quando a captura de evidência precede a recriação e quem pode pedi-la. Conter foi correto; perder a evidência veio de decisão não tomada.', true, 'Exato. A ordem entre preservar e restaurar precisa estar definida em tempo de paz; no incidente o time executa. Sem essa definição, a escolha recai sempre sobre restaurar.'],
        ['O erro foi revogar o token de imediato: isso alertou o atacante e eliminou a chance de observar o comportamento dele por algum tempo para dimensionar o alcance real da intrusão.', false, 'Incorreto. Conter rápido é prioridade legítima diante de exportação em curso; observar um atacante ativo exige preparo específico e raramente compensa o risco de mais dados saírem.'],
      ],
    },
    flashcard: ['Por que a revisão pós-incidente é feita sem culpa, e o que ela não dispensa?',
      'Sem culpa porque punir quem reporta ensina o time a esconder incidentes, e incidente escondido é descoberto tarde e custa mais. O que ela não dispensa é a responsabilidade pelas ações corretivas: cada item que sai da revisão precisa de dono nomeado e prazo, acompanhado até concluir. Buscar causa em vez de culpado não é abrir mão de consequência, é escolher a consequência que melhora o sistema.'],
  },
},
];

// A ultima parte e o ultimo marco, conforme o Spec.
export const COMO_APRENDER = {
  id: 'f1', parte: 'p6', badges: ['método'],
  titulo: 'O ciclo, as fontes e como praticar',
  direto: 'Governança é a área em que é mais fácil decorar sigla e não saber decidir nada. O ciclo que fixa é o mesmo dos outros cadernos — ler, ver, conferir na fonte, praticar, escrever — com uma diferença: aqui a prática é defender uma decisão, não rodar um comando.',
  caso: ['o caso',
    'Você lê sobre Zero Trust, assiste a um vídeo e consegue explicar o conceito. Na primeira reunião real, alguém pergunta: "e o que muda no nosso serviço de pedidos na segunda-feira?". Reconhecer o conceito não respondeu nada. O que responde é ter escrito, para um sistema concreto, quais acessos deixam de ser implícitos e o que isso custa.'],
  analogia: 'É a diferença entre saber as regras do xadrez e jogar uma partida. As regras se aprendem numa tarde; decidir sob restrição, com relógio correndo e um adversário do outro lado, é outra habilidade — e só se adquire jogando.',
  mecanismo: [
    '<p><b>O ciclo.</b> Ler este caderno → ver um vídeo que dê o mapa → conferir na fonte oficial (NIST, ANPD, OWASP) → fazer o laboratório → escrever a nota do que mudou de ideia → repetir. A volta é a parte que fixa, e é a que quase todo mundo pula.</p>',
    '<p><b>Canais e cursos em português.</b> Não listo nomes aqui sem ter verificado que existem e tratam do tema. Esta parte está deliberadamente incompleta: <b>pesquise e preencha com fontes reais em PT-BR</b>, conferindo que o canal trata de governança, risco e segurança aplicada — não apenas de certificação. Inventar nome de canal é pior que deixar a seção vazia.</p>',
    '<p><b>Como pesquisar.</b> Busque pelo nome do mecanismo, não pela sigla: "controle compensatório exemplo", "modelagem de ameaças STRIDE exemplo prático", "retenção de log dado pessoal". Cruze sempre com a fonte primária — o site do NIST, o da ANPD, o do OWASP — porque resumo de terceiro envelhece e perde a ressalva.</p>',
  ],
  dg: 'ciclo-aprender',
  serve: 'Transformar vocabulário em capacidade de decidir. O teste não é explicar o que é risco residual; é apontar, num sistema real, qual é o risco residual e quem o aceitou.',
  importa: 'Esta é a área em que o estudo superficial engana mais, porque as siglas dão a sensação de domínio. Saber dizer "defesa em profundidade" não é o mesmo que saber apontar as camadas do seu sistema e dizer qual delas falha pelo mesmo motivo que a outra.',
  ver: 'O mesmo ciclo, aplicado aos outros assuntos, está no fim de cada documento do acervo. O laboratório onde essas decisões viram prática fica em <a href="../lab/projetos.html">Laboratório de projetos</a>.',
  pratica: [
    '<b>Mini-projeto na sua stack.</b> Pegue o serviço de pedidos em Spring do acervo e faça três coisas, nesta ordem:',
    '1. <b>Modele a ameaça</b> de um fluxo só — o cancelamento de pedido. Quem pode abusar, como, e o que acontece.',
    '2. <b>Implemente a autorização no domínio</b>, não só na borda: o gerente só cancela pedido da própria filial, antes do faturamento.',
    '3. <b>Escreva um ADR de meia página</b> dizendo qual risco você aceitou e por quê. Esse é o entregável que mais ensina — e o único que se parece com o trabalho real.',
  ],
};

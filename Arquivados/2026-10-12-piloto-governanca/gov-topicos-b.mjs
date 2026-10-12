// Topicos 3 a 8. Texto base do documento original, vestido no chassi.
export const TOPICOS_B = [
{
  id: 'b1', parte: 'p2', badges: ['essencial'],
  titulo: 'Defesa em profundidade: nenhuma barreira única',
  direto: 'Não dependa de uma só barreira. Camadas independentes — endpoint, rede, identidade, aplicação, dados, monitoramento e recuperação — fazem com que ultrapassar uma não entregue o resto. É o oposto de "temos firewall, estamos protegidos".',
  caso: ['o caso',
    'Um atacante consegue a senha de um desenvolvedor por phishing. Com uma barreira só, acabou: ele entra na VPN e alcança tudo que está "dentro da rede". Com camadas, o estrago para no primeiro degrau — o MFA bloqueia o login; se passar, a conta só tem permissão de leitura no seu próprio serviço; se escalar, o acesso ao banco exige credencial de outro cofre; e a exportação em volume incomum dispara alerta. Nenhuma camada é perfeita. O conjunto é que segura.'],
  analogia: 'É a diferença entre um cofre e um banco. O cofre é uma barreira boa — e única: aberto o cofre, acabou. O banco tem porta giratória, detector, câmera, caixa-forte com temporizador, limite de saque e auditoria. Nenhum desses elementos sozinho impede um assalto; a combinação torna o assalto caro, lento e visível.',
  duo: {
    surgiu: ['Como surgiu', 'O modelo antigo era o perímetro: uma muralha separando "dentro" (confiável) de "fora" (hostil). Funcionava quando todo mundo trabalhava no escritório e os servidores ficavam na sala ao lado. Nuvem, trabalho remoto, SaaS e integrações entre empresas dissolveram a fronteira — não existe mais um "dentro".'],
    repl: 'o modelo de perímetro, em que estar dentro da rede era prova suficiente de confiança. Zero Trust não substitui as camadas: ele remove a confiança implícita de uma delas, a rede, e exige que cada acesso seja decidido por identidade, recurso e contexto.',
  },
  mecanismo: [
    '<p>Privilégio mínimo limita <b>permissão</b> e <b>duração</b>. As duas dimensões importam: uma conta com acesso amplo por cinco minutos é um risco diferente de uma com acesso estreito por dois anos. Acesso temporário com aprovação registrada resolve a maior parte dos casos de "preciso de admin para depurar".</p>',
    '<p>Numa aplicação, as camadas aparecem assim: a API valida token e escopo; a regra de domínio verifica se <i>aquele</i> usuário pode agir sobre <i>aquele</i> pedido; o serviço acessa apenas o próprio banco; segredos vêm de um gestor, não do repositório; e operações críticas geram log protegido.</p>',
    '<p>Zero Trust <b>não</b> é produto nem "não confiar em ninguém" literalmente. É a estratégia de reduzir confiança implícita e tornar cada decisão de acesso explícita e reavaliável. A arquitetura descrita no NIST SP 800-207 gira em torno de recursos, identidades e políticas — não de segmentos de rede.</p>',
  ],
  dg: 'camadas',
  serve: 'Limitar o que um invasor consegue fazer <i>depois</i> de passar pela primeira barreira. Toda camada individual vai falhar algum dia; o desenho em profundidade garante que a falha de uma não seja a falha do sistema.',
  importa: 'Credenciais vazam e redes são comprometidas — isso é premissa, não hipótese remota. A diferença entre um incidente contido e uma exposição completa quase sempre está em quantas camadas independentes existiam entre a entrada e o dado.',
  alem: {
    tag: 'Para ir além', opt: 'por que "independentes" é a palavra que faz o trabalho',
    corpo: [
      '<p>Camadas só multiplicam proteção se falharem por motivos diferentes. Três controles que dependem do mesmo diretório de identidade não são três camadas: são uma, desenhada três vezes. Se o diretório cai ou é comprometido, os três caem juntos.</p>',
      '<p>O teste prático é perguntar, para cada par de camadas: existe uma falha única que derruba as duas? Credencial compartilhada, mesma dependência de rede, mesmo provedor, mesma conta de administração — todos criam esse acoplamento invisível.</p>',
    ],
    fonte: 'NIST SP 800-207 trata da arquitetura Zero Trust; o raciocínio sobre independência de camadas é geral de engenharia de confiabilidade.',
  },
  ver: 'Falha parcial, degradação e o que acontece quando um componente cai estão em <a href="../trilhas/system-design.html">System Design completo</a>; isolamento de rede e identidade na nuvem, em <a href="../trilhas/nuvem.html">Nuvem completo</a>. Aqui interessa só como as camadas se combinam contra um adversário.',
  gotcha: ['armadilhas', [
    '<b>Chamar de camada o que depende da mesma raiz.</b> Três controles ligados ao mesmo diretório caem juntos. Camada só conta se falhar por motivo diferente.',
    '<b>Tratar Zero Trust como produto.</b> Nenhuma ferramenta "implementa Zero Trust". É estratégia de decisão de acesso, e exige política, identidade e telemetria.',
    '<b>Esconder botão no front-end e chamar de autorização.</b> Se a API aceita a chamada, a proteção não existe. Toda autorização relevante é verificada no servidor.',
    '<b>Privilégio mínimo só na permissão, nunca na duração.</b> Acesso amplo "temporário" que ninguém revoga é acesso permanente com outro nome.',
  ]],
  fechamento: {
    titulo: 'Síntese: camadas que falham por motivos diferentes',
    revisao: [
      ['teal', 'Nenhuma barreira única', 'Endpoint, rede, identidade, aplicação, dados, monitoramento e recuperação. O conjunto segura o que a peça isolada não segura.'],
      ['purple', 'Privilégio mínimo tem duas dimensões', 'Permissão e duração. Acesso estreito por dois anos e acesso amplo por cinco minutos são riscos diferentes.'],
      ['rose', 'Zero Trust remove confiança implícita', 'Não é produto nem desconfiança literal: é decidir cada acesso por identidade, recurso e contexto, de forma reavaliável.'],
    ],
    pegadinha: ['Contar como camadas controles que compartilham a mesma raiz de falha', 'Três verificações que dependem do mesmo diretório de identidade são uma camada desenhada três vezes. Se o diretório for comprometido, as três caem no mesmo instante.'],
    modelo: ['Teste do par de camadas', 'Para cada duas camadas, pergunte: existe uma única falha que derruba as duas? Credencial compartilhada, mesma dependência de rede, mesmo provedor ou mesma conta de administração revelam o acoplamento que anula a profundidade.'],
    exercicio: {
      cenario: 'Cenário de arquitetura: um serviço Spring expõe uma API interna. O time argumenta que não precisa validar autorização no domínio, porque a API só é alcançável pela rede privada e o gateway já valida o token JWT na borda.',
      pergunta: 'Qual é a crítica correta a esse desenho?',
      opcoes: [
        ['O argumento procede: com a rede privada isolando o tráfego externo e o gateway validando a assinatura do token, repetir a verificação no domínio seria duplicação de esforço sem ganho real.', false, 'Incorreto. Esse é exatamente o raciocínio de perímetro: ele trata "estar na rede privada" como prova de confiança, e colapsa duas camadas numa só.'],
        ['O desenho tem uma camada só. Validar o token prova quem é o chamador, não que ele pode agir sobre aquele recurso — e qualquer serviço comprometido na rede alcança a API sem nova verificação.', true, 'Exato. Autenticação na borda não substitui autorização no domínio, e confiar na rede privada é confiança implícita — a premissa que Zero Trust remove.'],
        ['O problema está no formato do token: JWT assinado pode ser reaproveitado se vazar, então o correto seria adotar TLS mútuo entre os serviços em lugar da validação feita na borda.', false, 'Incorreto. Troca a tecnologia e mantém o defeito: continua havendo uma única verificação, na borda, sem autorização sobre o recurso no domínio.'],
      ],
    },
    flashcard: ['Por que autenticar na borda não substitui autorizar no domínio?',
      'Porque são perguntas diferentes. A autenticação responde "quem é você" e termina ali; a autorização responde "você pode fazer isto, neste recurso, agora". Um token válido prova identidade, não permissão sobre um pedido específico — e se qualquer serviço dentro da rede puder chamar a API, a borda deixa de ser barreira. Por isso a verificação relevante acontece onde a regra de negócio conhece o recurso.'],
  },
},
{
  id: 'c1', parte: 'p3', badges: ['essencial'],
  titulo: 'IAM: autenticação responde quem, autorização responde o quê',
  direto: 'Autenticação responde "quem é você?". Autorização responde "o que você pode fazer neste recurso, agora?". São decisões separadas, em momentos separados, e confundi-las é a origem da maior parte das falhas de acesso em aplicação.',
  caso: ['o caso',
    'Um endpoint administrativo esconde o botão no front-end para quem não é <code class="i">ADMIN</code>. Um usuário comum abre o painel de rede do navegador, copia a chamada e a repete com o próprio token válido. A API responde 200. O token estava correto — ele <i>era</i> quem dizia ser. Ninguém nunca perguntou se ele <i>podia</i>.'],
  analogia: 'O crachá prova que você trabalha na empresa; ele não decide em quais andares o elevador para. Autenticação é o crachá. Autorização é a leitora de cada porta — e ela precisa saber qual porta é, não só que o crachá é legítimo.',
  duo: {
    surgiu: ['Como surgiu', 'No começo, aplicação e usuários viviam no mesmo servidor, e "login" bastava: autenticado significava autorizado a tudo que o sistema fazia. Com múltiplos serviços, integrações entre empresas e acesso de máquinas a máquinas, a identidade passou a atravessar fronteiras, e a decisão de permissão teve de ser tomada separadamente, perto do recurso.'],
    repl: 'o modelo de sessão única em que estar logado era sinônimo de poder tudo. Papéis e escopos surgiram para quebrar isso, e atributos de contexto surgiram depois, quando "qual papel" deixou de ser suficiente para decidir.',
  },
  mecanismo: [
    '<p>A identidade é comprovada por fatores; a autenticação estabelece uma sessão ou emite um token; a autorização avalia papel, escopo, recurso, ação e contexto. O IAM governa o ciclo de vida inteiro: entrada, mudança de função, revisão periódica e remoção — e é na mudança de função que o acesso se acumula, porque quase ninguém tira o que não é mais necessário.</p>',
    '<p><b>RBAC</b> decide por papel e resolve bem quando as permissões seguem o cargo. <b>ABAC</b> decide por atributos — organização, propriedade do recurso, horário, origem — e é o que você precisa quando a resposta depende do caso concreto, não do cargo.</p>',
    '<p>Em Spring: o Spring Security valida identidade e escopos na borda, mas o serviço ainda precisa verificar autorização no domínio. Um papel <code class="i">ADMIN</code> não deveria, sozinho, permitir alterar qualquer pedido se a regra real depende de organização, propriedade ou estado do pedido.</p>',
  ],
  dg: 'iam',
  serve: 'Garantir que uma credencial comprometida alcance o mínimo possível, e que o acesso de cada pessoa acompanhe a função que ela realmente exerce hoje — não a soma de tudo que ela já exerceu.',
  importa: 'Permissão excessiva é o multiplicador de impacto de todo incidente de credencial. A diferença entre "um atacante leu os pedidos de um cliente" e "um atacante exportou a base inteira" normalmente não está em como ele entrou, mas no que a conta podia depois de entrar.',
  alem: {
    tag: 'Para ir além', opt: 'contas de serviço, o ponto cego do IAM',
    corpo: [
      '<p>Boa parte do esforço de IAM vai para contas humanas — MFA, revisão, offboarding. Contas de serviço costumam ficar de fora: não têm dono claro, não participam de revisão, a credencial não expira e ninguém sabe quem a criou.</p>',
      '<p>O mínimo razoável é tratá-las como identidades de primeira classe: dono nomeado, credencial com rotação, escopo estreito, e inventário que permita responder "o que esta credencial alcança?" sem abrir o código. Um segredo fixo no repositório há meses é o caso extremo desse ponto cego.</p>',
    ],
    fonte: 'Prática consolidada em gestão de identidade; confirme os requisitos específicos do seu provedor de nuvem.',
  },
  ver: 'O mecanismo de filtros, proxies e o <code class="i">@PreAuthorize</code> está detalhado em <a href="../trilhas/spring.html">Spring completo</a>; o modelo de permissões na nuvem, em <a href="../trilhas/nuvem.html">Nuvem completo</a>. Aqui interessa a separação entre as duas perguntas.',
  gotcha: ['armadilhas', [
    '<b>Esconder o botão e chamar de autorização.</b> O front-end melhora a experiência; ele não protege nada. Se a API aceita, a proteção não existe.',
    '<b>Papel que decide sozinho.</b> <code class="i">ADMIN</code> raramente deveria autorizar qualquer ação sobre qualquer recurso. A regra quase sempre depende de propriedade, organização ou estado.',
    '<b>Acesso que só acumula.</b> Mudança de função sem remoção do acesso antigo é como o time inteiro vira privilegiado em três anos, sem ninguém ter decidido isso.',
    '<b>Conta de serviço sem dono.</b> Credencial que ninguém reivindica é credencial que ninguém rotaciona nem revoga.',
  ]],
  fechamento: {
    titulo: 'Síntese: duas perguntas, dois momentos',
    revisao: [
      ['teal', 'Quem ≠ o quê', 'Autenticação estabelece identidade e termina. Autorização decide ação sobre recurso, com contexto, e acontece perto da regra de negócio.'],
      ['purple', 'RBAC e ABAC resolvem casos diferentes', 'Papel serve quando a permissão segue o cargo; atributos servem quando a resposta depende de propriedade, organização ou estado.'],
      ['rose', 'O ciclo de vida é onde o acesso vaza', 'Entrada, mudança de função, revisão e remoção. É na mudança de função que a permissão se acumula sem ninguém decidir.'],
    ],
    pegadinha: ['Confiar que o front-end protege a API', 'Esconder o botão muda a experiência, não a superfície. Qualquer pessoa repete a chamada com o próprio token válido; se a API não verifica autorização, ela responde normalmente.'],
    modelo: ['Pergunta sobre o recurso, não sobre o cargo', 'Antes de autorizar, formule: "este sujeito pode executar esta ação sobre este recurso específico, neste estado, agora?". Se a sua verificação consegue responder sem olhar o recurso, ela está decidindo cedo demais.'],
    exercicio: {
      cenario: 'Cenário de implementação: num serviço de pedidos, a regra é que um gerente só pode cancelar pedidos da própria filial, e apenas enquanto o pedido não tiver sido faturado. A equipe implementou a verificação com uma anotação de papel no controller: apenas quem tem o papel GERENTE alcança o endpoint.',
      pergunta: 'O que falta nessa implementação?',
      opcoes: [
        ['Nada de essencial: o papel GERENTE já restringe quem alcança o endpoint, e a verificação do estado de faturamento pertence à camada de persistência, junto com a regra transacional.', false, 'Incorreto. O papel responde "quem", mas a regra depende de dois atributos do recurso — filial e estado do faturamento — que a anotação de papel não consegue avaliar.'],
        ['Falta a autorização sobre o recurso: verificar, no domínio, se o pedido pertence à filial daquele gerente e se ainda não foi faturado. O papel é condição necessária, não suficiente.', true, 'Exato. É um caso de ABAC: a decisão depende de propriedade e estado do recurso, que só a regra de negócio conhece. O papel apenas filtra quem pode tentar.'],
        ['Falta exigir reautenticação com MFA no endpoint, já que cancelar pedido é operação sensível e irreversível, e um token de sessão longa não deveria autorizá-la sozinho.', false, 'Incorreto. MFA fortalece a autenticação, que não é o problema aqui: mesmo com identidade garantida, o gerente continuaria podendo cancelar pedido de outra filial.'],
      ],
    },
    flashcard: ['Quando RBAC não basta e ABAC passa a ser necessário?',
      'Quando a decisão depende de atributos do caso concreto, e não apenas do cargo de quem pede. Se a regra é "gerente cancela pedido da própria filial, antes do faturamento", o papel responde só a primeira parte: filial e estado são atributos do recurso. RBAC filtra quem pode tentar; ABAC decide se aquela ação, naquele recurso, naquele estado, é permitida.'],
  },
},
];

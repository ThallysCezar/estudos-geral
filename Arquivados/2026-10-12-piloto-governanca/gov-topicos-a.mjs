// Topicos 1 a 5. Texto base vindo do documento original, mais as pecas do chassi.
export const TOPICOS_A = [
{
  id: 'a1', parte: 'p1', badges: ['essencial'],
  titulo: 'Governança, gestão e segurança são três coisas diferentes',
  direto: 'Governança determina direção, limites e prestação de contas. Gestão planeja e executa dentro desses limites. Segurança é o resultado contínuo: reduzir a chance e o impacto de uso indevido, indisponibilidade, alteração ou exposição de informação. Confundir os três é o que faz reunião de segurança virar discussão sem dono.',
  caso: ['o caso',
    'Um serviço de pedidos cai por três horas numa sexta-feira. Na reunião seguinte, alguém pergunta "de quem é a culpa?". A pergunta certa é outra, em três camadas: <b>a direção</b> já tinha dito qual indisponibilidade era aceitável para esse serviço? <b>A gestão</b> traduziu isso em orçamento, redundância e plantão? <b>A engenharia</b> implementou e mediu? Sem a primeira resposta, as outras duas são chute — e ninguém é responsável porque nunca ficou escrito quem era.'],
  analogia: 'É a diferença entre o conselho de uma escola, a direção e os professores. O conselho decide que a escola aceita turmas de no máximo 30 alunos e que isso é inegociável. A direção contrata, monta as salas e o horário. O professor dá a aula. Quando uma turma chega a 42 alunos, o problema não é do professor — é que alguém furou o limite que o conselho tinha fixado, e ninguém verificou.',
  duo: {
    surgiu: ['Como surgiu', 'TI passou de suporte local a dependência central de operação, receita e obrigação legal. Enquanto era "o pessoal da informática", a decisão sobre risco ficava dispersa e implícita. Quando uma indisponibilidade passou a custar receita e uma exposição de dados passou a ter consequência jurídica, foi preciso dizer, no papel, quem decide o quê.'],
    repl: 'o modelo em que segurança era um assunto técnico, resolvido por quem entendia de firewall, sem ninguém do negócio precisar opinar. Isso funcionava enquanto o pior caso era um computador parado; deixou de funcionar quando o pior caso passou a ser o negócio parado.',
  },
  mecanismo: [
    '<p>O arranjo tem quatro níveis, e cada um produz um artefato diferente. A <b>política</b> expressa intenção e regra ("acesso administrativo é temporário"). O <b>padrão</b> define o requisito obrigatório ("máximo de 8 horas, com aprovação registrada"). O <b>procedimento</b> descreve a execução ("peça por este formulário; o dono do serviço aprova"). A <b>evidência</b> registra que aconteceu: o ticket, o log, a configuração.</p>',
    '<p>Exceção não é falha do sistema — é parte dele. Mas precisa de justificativa, aprovador nomeado, prazo e plano de volta ao padrão. Exceção sem prazo é mudança de política feita pela porta dos fundos.</p>',
  ],
  dg: 'cadeia',
  serve: 'Transformar "alguém deveria cuidar disso" em "esta pessoa decide, neste fórum, com este critério, e a evidência fica aqui". Sem isso, todo risco vira responsabilidade difusa, e responsabilidade difusa é o mesmo que nenhuma.',
  importa: 'Decisão de risco tem custo de reversão alto. Quando a direção não fixa o apetite a risco, a engenharia decide por omissão — normalmente escolhendo o caminho mais rápido, que é o menos protegido. E quando dá errado, a conversa acontece sem critério, porque nunca houve um.',
  alem: {
    tag: 'Para ir além', opt: 'o que o NIST CSF 2.0 acrescentou, e o que ele não é',
    corpo: [
      '<p>O NIST Cybersecurity Framework 2.0 organiza resultados em seis funções: <b>Govern</b>, Identify, Protect, Detect, Respond e Recover. O <i>Govern</i> entrou como função própria na versão 2.0, justamente para separar "decidir e prestar contas" de "proteger e detectar".</p>',
      '<p>O que ele <b>não</b> é: não é certificação, não é lista universal de controles e não é norma com requisito auditável no sentido da ISO. É um vocabulário comum de resultados esperados, para que áreas diferentes consigam conversar sobre a mesma coisa. Usar como checklist de conformidade é o erro mais comum.</p>',
    ],
    fonte: 'NIST CSF 2.0. Confirme a versão vigente antes de citar em documento formal.',
  },
  ver: 'A disciplina de decidir sob restrição e registrar a decisão está em <a href="../trilhas/arquitetura.html">Arquitetura completo</a> (ADR e trade-offs) e em <a href="../trilhas/system-design.html">System Design completo</a> (contrato, SLO e o que o negócio aceita perder). Aqui interessa só quem tem autoridade para aceitar o risco residual.',
  gotcha: ['armadilhas', [
    '<b>Tratar conformidade como segurança.</b> Auditoria aprovada diz que, na data da amostragem, os requisitos verificados estavam atendidos. Não diz que o ambiente está seguro hoje.',
    '<b>Criar comitê antes de criar responsabilidade.</b> Empresa pequena não precisa de fórum mensal; precisa saber quem aprova acesso, mudança crítica e exceção. O arranjo mínimo é esse.',
    '<b>Escrever política que ninguém consegue cumprir.</b> Regra que a operação contorna todo dia não protege nada e ainda ensina o time a ignorar o conjunto.',
    '<b>Confundir dono do sistema com dono do risco.</b> Quem opera não é necessariamente quem tem autoridade para aceitar a consequência de uma falha.',
  ]],
  fechamento: {
    titulo: 'Síntese: direção, gestão e o que sobra de risco',
    revisao: [
      ['teal', 'Três papéis, três artefatos', 'Direção fixa apetite a risco e prioridade; gestão traduz em política, padrão e orçamento; engenharia implementa e mede. Cada camada produz evidência verificável.'],
      ['purple', 'Política → padrão → procedimento → evidência', 'A cadeia só vale se terminar em evidência. Política sem evidência é intenção; evidência sem política é coleta sem critério.'],
      ['rose', 'Exceção é parte do sistema', 'Precisa de justificativa, aprovador, prazo e plano de retorno. Exceção sem prazo vira mudança de política não declarada.'],
    ],
    pegadinha: ['Achar que passar na auditoria significa estar seguro', 'Auditoria verifica requisitos definidos, numa amostra, numa data. Um ambiente pode passar na auditoria e ter uma credencial de serviço sem rotação há dois anos, porque ninguém definiu esse requisito.'],
    modelo: ['Autoridade sobre risco residual', 'Para qualquer risco relevante, pergunte: quem tem autoridade para aceitá-lo? Se a resposta for "ninguém sabe" ou "o time de segurança", o arranjo de governança ainda não existe — segurança orienta, mas quem aceita risco é quem responde pelo resultado.'],
    exercicio: {
      cenario: 'Cenário de governança: uma equipe precisa de acesso de administrador em produção para depurar um incidente recorrente. A política da empresa exige acesso temporário e auditável. O time alega que pedir aprovação a cada vez atrasa o diagnóstico e pede acesso permanente.',
      pergunta: 'Qual é a resposta que respeita a governança sem travar o trabalho?',
      opcoes: [
        ['Conceder o acesso permanente ao time, registrando em ata que a engenharia assumiu a decisão por se tratar de pessoal sênior e de um incidente que já se repetiu três vezes.', false, 'Incorreto. Acesso permanente amplia o impacto de uma credencial comprometida e, pior, a decisão foi tomada por quem não tem autoridade para aceitar esse risco residual.'],
        ['Aprovar uma exceção com prazo, aprovador nomeado e trilha de auditoria, tratando a causa raiz do incidente recorrente como item separado, com dono e data de conclusão.', true, 'Exato. Exceção com prazo e dono resolve o problema imediato sem virar mudança de política; e atacar a causa raiz remove a necessidade de repetir a exceção.'],
        ['Negar o pedido citando a política vigente e orientar que o diagnóstico seja concluído apenas com os logs já existentes, sem elevação de privilégio em nenhuma hipótese.', false, 'Incorreto. Política que impede o trabalho sem oferecer caminho é a que o time aprende a contornar. Governança existe para habilitar com limite, não para bloquear.'],
      ],
    },
    flashcard: ['Qual a diferença entre risco inerente e risco residual, e por que ela importa na prática?',
      'Risco inerente é o risco antes dos controles; residual é o que permanece depois deles. A distinção importa porque "temos controle" não significa "o risco foi eliminado": é preciso validar desenho, cobertura e operação do controle. E alguém com autoridade precisa aceitar explicitamente o residual — se ninguém aceita, ele foi aceito por omissão.'],
  },
},
{
  id: 'a2', parte: 'p1', badges: ['essencial'],
  titulo: 'Risco é um cenário com dono, não um adjetivo',
  direto: 'Risco combina um cenário de ameaça, uma fraqueza explorável, um impacto e uma probabilidade. A avaliação orienta decisão; ela não prevê o futuro com precisão matemática. Dizer "risco alto" sem descrever o que pode acontecer é não ter dito nada.',
  caso: ['o caso',
    'Uma planilha de riscos classifica dezessete itens como "alto". Nenhum deles tem cenário escrito. Na hora de priorizar orçamento, ninguém consegue defender um contra o outro, e a decisão acaba sendo por quem falou mais alto na reunião. Reescritos como cenário, dois viram prioridade óbvia: <i>"credencial de serviço vazada no build permite exportar a base de clientes"</i> e <i>"backup nunca foi testado para restauração"</i>. Os outros quinze viram itens de rotina.'],
  analogia: 'É a diferença entre o médico dizer "você está mal" e dizer "sua pressão está em 16 por 10, e nesse patamar o risco de um evento cardíaco nos próximos cinco anos sobe tanto". O segundo permite decidir o que fazer hoje. O primeiro só gera ansiedade sem direção.',
  duo: {
    surgiu: ['Como surgiu', 'As primeiras abordagens eram listas fixas de controles, iguais para todo mundo. Funcionavam quando o parque era homogêneo. Com sistemas de criticidade muito diferente convivendo na mesma empresa, a lista fixa passou a tratar um laptop de estagiário e um sistema de pagamentos como se tivessem o mesmo risco — gastando o mesmo esforço nos dois.'],
    repl: 'o checklist universal de controles. A abordagem baseada em risco não eliminou os catálogos, mas inverteu a ordem: primeiro o cenário e o impacto, depois qual controle do catálogo faz sentido ali.',
  },
  mecanismo: [
    '<p>Para avaliar, descreva um cenário concreto e identifique: ativo, ameaça, vulnerabilidade, controles existentes, impacto, probabilidade e o grau de incerteza da sua estimativa. Esse último item é o mais esquecido — assumir precisão que você não tem é como dar um número de latência sem ter medido.</p>',
    '<p>As opções de tratamento são quatro: <b>evitar</b> (retirar a atividade), <b>reduzir</b> (controle preventivo, detectivo ou corretivo), <b>compartilhar</b> (contrato ou seguro reparte a consequência, mas não transfere a responsabilidade) e <b>aceitar</b> (decisão explícita, com dono e data de revisão).</p>',
    '<p>Controle é a medida que altera o risco. Preventivo: MFA. Detectivo: alerta de exportação incomum. Corretivo: revogar chave e rotacionar segredo. Evidência é o que prova que o controle opera: configuração, log, ticket aprovado, resultado de teste.</p>',
  ],
  dg: 'risco',
  serve: 'Permitir comparar riscos entre si para decidir onde gastar o próximo real e a próxima hora de engenharia. Sem cenário, não há comparação possível — e sem comparação, a priorização é política, não técnica.',
  importa: 'Orçamento e tempo de engenharia são finitos. Tratar tudo como crítico é a forma mais confiável de não proteger nada bem. E, no sentido inverso, um risco descrito com cenário concreto costuma se defender sozinho na conversa com quem decide o orçamento.',
  alem: {
    tag: 'Para ir além', opt: 'por que somar notas de 1 a 5 engana',
    corpo: [
      '<p>A matriz "probabilidade × impacto" com notas de 1 a 5 é popular porque é fácil. O problema é que ela trata escalas ordinais como se fossem numéricas: a distância entre 4 e 5 não é igual à distância entre 1 e 2, e multiplicar posições de ranking não produz grandeza com significado.</p>',
      '<p>Na prática isso causa dois efeitos conhecidos: riscos muito diferentes caem na mesma célula, e a faixa do meio incha até virar a maioria dos itens. Alternativas usam faixas de perda em dinheiro e intervalos de probabilidade declarados, o que força a explicitar a incerteza em vez de escondê-la num número.</p>',
      '<p>Para um caderno de estudo o ponto é modesto: a matriz serve para organizar conversa, não para ranquear com precisão. Se duas pessoas discordam de uma nota, o útil é discutir o cenário, não negociar o número.</p>',
    ],
    fonte: 'Crítica bem documentada na literatura de análise quantitativa de risco; confirme as fontes antes de citar em discussão formal.',
  },
  ver: 'A conta que decide entre uma alternativa e outra, e o hábito de medir antes de afirmar, estão em <a href="../trilhas/system-design.html">System Design completo</a>. Aqui o foco é a decisão de aceitar ou não o que sobra.',
  gotcha: ['armadilhas', [
    '<b>Usar "risco alto" sem cenário.</b> Não é avaliação, é adjetivo. Exija a frase completa: o que acontece, com qual ativo, por qual caminho, com qual impacto.',
    '<b>Confundir compartilhar com eliminar.</b> Seguro e contrato repartem consequência financeira. A responsabilidade perante o titular do dado e perante o cliente continua sua.',
    '<b>Aceitar risco por omissão.</b> Não decidir é decidir aceitar — só que sem dono, sem prazo e sem revisão.',
    '<b>Medir controle pela existência, não pela operação.</b> O MFA está configurado para todos ou só para quem se lembrou de ativar? Cobertura e operação são parte do controle.',
  ]],
  fechamento: {
    titulo: 'Síntese: do adjetivo ao cenário com dono',
    revisao: [
      ['teal', 'Cenário, não rótulo', 'Risco se descreve como frase completa: ativo, ameaça, vulnerabilidade, impacto, probabilidade e incerteza. "Alto" não é descrição.'],
      ['purple', 'Quatro tratamentos', 'Evitar, reduzir, compartilhar, aceitar. Compartilhar reparte consequência financeira, não responsabilidade.'],
      ['rose', 'Controle sem evidência não conta', 'Preventivo, detectivo ou corretivo — o que prova que opera é configuração, log, ticket ou teste. Existir não é operar.'],
    ],
    pegadinha: ['Tratar a matriz 5×5 como se o produto das notas fosse uma grandeza', 'Notas ordinais multiplicadas não produzem número com significado: riscos muito diferentes caem na mesma célula e a faixa do meio incha. A matriz organiza conversa; ela não ranqueia com precisão.'],
    modelo: ['Frase completa de risco', 'Antes de classificar qualquer coisa, complete: "se [ameaça] explorar [fraqueza] em [ativo], acontece [impacto], e eu estimo [probabilidade] com [grau de confiança]". O que não couber nessa frase ainda não foi entendido.'],
    exercicio: {
      cenario: 'Cenário de avaliação: o inventário aponta que um token de serviço com permissão de leitura ampla está fixo no repositório há oito meses. O time classificou como "risco médio" porque "o repositório é privado".',
      pergunta: 'Qual a crítica mais pertinente a essa avaliação?',
      opcoes: [
        ['A classificação deveria ser "alta" em vez de "média", porque segredo versionado em repositório é sempre crítico, independentemente de o repositório ser público ou privado.', false, 'Incorreto. Trocar um rótulo por outro não resolve: o problema é que a avaliação não descreve cenário, impacto nem o que acontece se o repositório deixar de ser privado.'],
        ['A avaliação apoia-se num controle não verificado e não descreve cenário: quem acessou o repositório nesses oito meses, o que o token alcança, e o efeito de um clone, fork ou backup.', true, 'Exato. "Repositório é privado" é um controle cuja cobertura e operação não foram validadas, e sem cenário não há como comparar este risco com os outros nem decidir o tratamento.'],
        ['A avaliação está adequada: repositório privado é controle preventivo legítimo, reduz a probabilidade de exposição e justifica a classificação média atribuída pelo time.', false, 'Incorreto. É controle válido, mas único — e a avaliação não considera histórico de acesso, cópias locais, backups, nem o impacto do que o token alcança se a barreira falhar.'],
      ],
    },
    flashcard: ['Por que "compartilhar o risco" com um contrato ou seguro não encerra a responsabilidade?',
      'Porque o contrato reparte a consequência financeira entre as partes, mas não transfere a obrigação perante quem foi afetado. Se dados de clientes vazam por falha de um fornecedor, a relação com o titular do dado e com o cliente continua sendo da organização que coletou. O contrato muda quem paga a conta, não quem responde.'],
  },
},
];

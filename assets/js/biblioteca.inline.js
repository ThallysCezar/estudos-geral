/* Extraido de cadernos/biblioteca.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 2 ---------- */

function W(h,inner){return '<figure class="dg"><svg viewBox="0 0 340 '+h+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg></figure>';}
var DG={
 acop:W(150,'<text x="170" y="16" class="bt">quem depende de mim × de quem eu dependo</text><rect x="126" y="58" width="88" height="34" rx="9" class="b1"/><text x="170" y="79" class="bs">componente</text><rect x="10" y="30" width="58" height="20" rx="5" class="b2"/><rect x="10" y="56" width="58" height="20" rx="5" class="b2"/><rect x="10" y="82" width="58" height="20" rx="5" class="b2"/><path d="M68,40 L124,68" class="lt"/><path d="M68,66 L124,73" class="lt"/><path d="M68,92 L124,82" class="lt"/><text x="39" y="118" class="bs">aferente</text><text x="39" y="130" class="bs">3 dependem</text><rect x="272" y="44" width="58" height="20" rx="5" class="b4"/><rect x="272" y="72" width="58" height="20" rx="5" class="b4"/><path d="M214,70 L270,54" class="lb"/><path d="M214,78 L270,82" class="lb"/><text x="301" y="118" class="bs">eferente</text><text x="301" y="130" class="bs">depende de 2</text><text x="170" y="144" class="bs">aferente alto = perigoso mudar · eferente alto = frágil</text>'),
 quantum:W(160,'<text x="170" y="16" class="bt">um banco compartilhado cola dois serviços</text><rect x="8" y="30" width="150" height="102" rx="10" class="b5"/><text x="83" y="46" class="bs">UM quantum</text><rect x="18" y="56" width="60" height="24" rx="6" class="b2"/><text x="48" y="72" class="bs">pedido</text><rect x="88" y="56" width="60" height="24" rx="6" class="b2"/><text x="118" y="72" class="bs">estoque</text><rect x="38" y="96" width="90" height="24" rx="6" class="b4"/><text x="83" y="112" class="bs">MESMO banco</text><path d="M48,80 L60,94" class="lr"/><path d="M118,80 L106,94" class="lr"/><rect x="182" y="30" width="150" height="102" rx="10" class="b1"/><text x="257" y="46" class="bs">DOIS quanta</text><rect x="192" y="56" width="60" height="24" rx="6" class="b2"/><text x="222" y="72" class="bs">pedido</text><rect x="262" y="56" width="60" height="24" rx="6" class="b2"/><text x="292" y="72" class="bs">estoque</text><rect x="192" y="96" width="60" height="24" rx="6" class="b4"/><text x="222" y="112" class="bs">banco A</text><rect x="262" y="96" width="60" height="24" rx="6" class="b4"/><text x="292" y="112" class="bs">banco B</text><path d="M222,80 L222,94" class="lt"/><path d="M292,80 L292,94" class="lt"/><text x="170" y="152" class="bs">o teste: consigo implantar um sem o outro?</text>'),
 saga:W(150,'<text x="170" y="16" class="bt">três eixos, oito combinações</text><rect x="14" y="32" width="96" height="46" rx="9" class="b2"/><text x="62" y="50" class="bs">comunicação</text><text x="62" y="66" class="bs">sínc. × assínc.</text><rect x="122" y="32" width="96" height="46" rx="9" class="b4"/><text x="170" y="50" class="bs">consistência</text><text x="170" y="66" class="bs">atômica × eventual</text><rect x="230" y="32" width="96" height="46" rx="9" class="b1"/><text x="278" y="50" class="bs">coordenação</text><text x="278" y="66" class="bs">orquestr. × coreog.</text><text x="170" y="100" class="bs">2 × 2 × 2 = 8 padrões, cada um com nome e custo</text><text x="170" y="122" class="bs">mais atômico e síncrono → fácil de raciocinar, menos disponível</text><text x="170" y="138" class="bs">mais eventual e assíncrono → escala melhor, difícil de depurar</text>'),
 subd:W(140,'<text x="170" y="16" class="bt">nem todo subdomínio merece o mesmo esforço</text><rect x="10" y="32" width="100" height="66" rx="10" class="b1"/><text x="60" y="52" class="bt">core</text><text x="60" y="70" class="bs">diferencia</text><text x="60" y="86" class="bs">modele com cuidado</text><rect x="120" y="32" width="100" height="66" rx="10" class="b2"/><text x="170" y="52" class="bt">supporting</text><text x="170" y="70" class="bs">necessário</text><text x="170" y="86" class="bs">CRUD bem feito</text><rect x="230" y="32" width="100" height="66" rx="10" class="b3"/><text x="280" y="52" class="bt">generic</text><text x="280" y="70" class="bs">resolvido</text><text x="280" y="86" class="bs">compre pronto</text><text x="170" y="122" class="bs">DDD tático no genérico é desperdício puro</text>'),
 fw:W(140,'<rect x="8" y="36" width="74" height="40" rx="9" class="b2"/><text x="45" y="54" class="bt">1 escopo</text><text x="45" y="68" class="bs">perguntar</text><rect x="92" y="36" width="74" height="40" rx="9" class="b2"/><text x="129" y="54" class="bt">2 desenho</text><text x="129" y="68" class="bs">alto nível</text><rect x="176" y="36" width="74" height="40" rx="9" class="b1"/><text x="213" y="54" class="bt">3 detalhe</text><text x="213" y="68" class="bs">o crítico</text><rect x="260" y="36" width="72" height="40" rx="9" class="b3"/><text x="296" y="54" class="bt">4 fechar</text><text x="296" y="68" class="bs">gargalos</text><path d="M82,56 L90,56" class="l"/><path d="M166,56 L174,56" class="l"/><path d="M250,56 L258,56" class="l"/><text x="170" y="100" class="bs">o passo 1 é o mais pulado — e o que mais reprova</text><text x="170" y="122" class="bs">sair desenhando sem perguntar quantos e quais garantias</text>'),
 bigo:W(160,'<text x="170" y="16" class="bt">a forma da curva, não o tempo absoluto</text><path d="M30,130 L310,130" class="l"/><path d="M30,130 L30,30" class="l"/><text x="170" y="150" class="bs">tamanho da entrada →</text><path d="M30,126 L310,120" class="lt"/><text x="290" y="112" class="bs">O(1)</text><path d="M30,124 L310,100" class="lt"/><text x="290" y="94" class="bs">O(log n)</text><path d="M30,126 L310,66" class="lb"/><text x="286" y="60" class="bs">O(n)</text><path d="M30,126 C160,120 250,80 310,40" class="lb"/><text x="282" y="36" class="bs">O(n log n)</text><path d="M30,128 C120,126 170,100 200,32" class="lr"/><text x="204" y="28" class="bs">O(n²)</text>')
};
var T=[
{g:"01",n:"Fundamentals of Software Architecture",s:"Mark Richards e Neal Ford — o que arquitetura é, e por que não existe melhor prática",c:"var(--gold)",cs:"var(--gold-s)",items:[
 {t:"Tudo é trade-off",x:"a frase que governa o livro",oq:"A tese central: em arquitetura não existe resposta certa, só a resposta menos ruim para um contexto. Toda escolha ganha uma coisa e paga outra.",ps:"Trocar a busca por 'a arquitetura correta' pela pergunta 'o que estou comprando e o que estou pagando?'.",cf:"Quando alguém apresenta uma solução sem citar o custo dela, a análise está incompleta — não a solução. <b>Erro comum:</b> escolher a tecnologia primeiro e construir a justificativa depois; acontece muito mais do que se admite.",ex:"# a pergunta de revisão\n\"O que esta decisão está nos custando?\"\n# se ninguém souber responder, a decisão não\n# foi tomada — foi adotada"},
 {t:"As quatro dimensões",x:"o que compõe uma arquitetura",oq:"Arquitetura é a soma de quatro coisas: a estrutura (o estilo escolhido), as características desejadas, as decisões tomadas e os princípios que guiam as decisões futuras.",ps:"Perceber que desenhar caixas é só uma das quatro — e a mais fácil.",cf:"Estrutura responde 'como está organizado'; características, 'o que precisa ser verdade'; decisões, 'o que é regra'; princípios, 'como decidir o que ainda não foi decidido'. <b>Erro comum:</b> documentar só a estrutura e deixar as outras três na cabeça de uma pessoa."},
 {t:"Características de arquitetura",x:"os -ilities, e por que no máximo três",oq:"Disponibilidade, escalabilidade, testabilidade, desempenho, segurança, elasticidade — as propriedades que o sistema precisa exibir, além de fazer o que faz.",ps:"São elas que determinam o estilo. Escolher o estilo antes de conhecê-las é decidir sem critério.",cf:"Elas competem entre si: mais segurança custa desempenho, mais elasticidade custa simplicidade. Por isso os autores insistem em <b>escolher no máximo três como prioritárias</b>. <b>Erro comum:</b> a lista com quinze itens 'importantes' — que é o mesmo que não ter prioridade nenhuma.",ex:"# o exercício que dói e funciona\n# marque APENAS 3 e defenda a exclusão do resto\n[ ] desempenho   [ ] escalabilidade\n[ ] segurança    [ ] testabilidade\n[ ] simplicidade [ ] disponibilidade"},
 {t:"Acoplamento aferente e eferente",x:"quem depende de mim, de quem eu dependo",dg:"acop",oq:"Aferente é quantos componentes dependem deste; eferente é de quantos este depende. Instabilidade é a razão entre os dois.",ps:"Medir acoplamento em vez de opinar sobre ele — e saber quais componentes não podem mudar com frequência.",cf:"Componente com acoplamento aferente alto é perigoso de mudar: muita gente quebra junto. Acoplamento eferente alto é frágil: quebra quando qualquer dependência muda. <b>Erro comum:</b> tratar 'acoplamento' como palavrão em vez de medida — algum acoplamento é inevitável e necessário."},
 {t:"Os estilos, e o que cada um cobra",x:"camadas, pipeline, microkernel, microsserviços",oq:"Cada estilo arquitetural favorece certas características e sacrifica outras. Não há escala de melhor para pior — há adequação.",ps:"Escolher com base nas três características prioritárias, e não no que está em alta.",cf:"Camadas é simples e barato, e escala mal. Microsserviços dá elasticidade e evolução independente, ao custo de complexidade operacional enorme. Event-driven dá desacoplamento e torna o fluxo difícil de seguir. <b>Erro comum:</b> copiar a arquitetura de uma big tech — ela carrega o custo do problema deles, que você não tem."},
 {t:"Lei de Conway e a manobra inversa",x:"o desenho segue o organograma",oq:"Sistemas tendem a copiar a estrutura de comunicação da organização que os constrói. Se há três times, tende a sair um sistema em três partes.",ps:"Entender por que a arquitetura desenhada no quadro não sobrevive ao contato com a empresa.",cf:"A manobra inversa é reorganizar os times para que a estrutura desejada seja a natural. É por isso que arquitetura é também assunto de gestão. <b>Erro comum:</b> desenhar módulos que atravessam fronteiras de time e esperar que eles se mantenham separados."},
 {t:"ADR: registrar a decisão",x:"o porquê que sobrevive à pessoa",oq:"Architecture Decision Record: um documento curto por decisão, com contexto, alternativas consideradas, escolha e consequências.",ps:"Fazer o raciocínio sobreviver a quem saiu da empresa — e evitar que a mesma discussão volte a cada seis meses.",cf:"O campo que mais importa é <b>consequências</b>, e é o que as pessoas pulam. Sem ele, o ADR vira ata. <b>Erro comum:</b> registrar só o que foi escolhido, sem as alternativas — aí ninguém sabe se a opção óbvia de hoje já foi descartada por um motivo real."}
]},
{g:"02",n:"Software Architecture: The Hard Parts",s:"Ford, Richards, Sadalage e Dehghani — decompor quando não há resposta pronta",c:"var(--red)",cs:"var(--red-soft)",items:[
 {t:"Architecture quantum",x:"a unidade que escala junto",dg:"quantum",oq:"Um quantum é a menor parte que pode ser implantada de forma independente, com alto acoplamento funcional e um contrato de dados próprio. Se dois serviços compartilham o mesmo banco, eles são um quantum só.",ps:"Descobrir a fronteira real do seu sistema — que quase nunca é a que o diagrama mostra.",cf:"O banco compartilhado é o que mais frequentemente cola serviços num quantum único: eles são implantados separados e falham juntos. <b>Erro comum:</b> chamar de microsserviços um conjunto que divide o mesmo esquema de banco.",ex:"# teste do quantum\n# posso implantar A sem implantar B?\n# posso mudar o esquema de A sem quebrar B?\n# se a resposta for não, A e B são UM"},
 {t:"Decompor: componentes antes de serviços",x:"a ordem que evita retrabalho",oq:"Antes de quebrar em serviços, identifique e reorganize os componentes dentro do monólito — agrupando por domínio, não por camada técnica.",ps:"Errar barato. Mover uma classe de pacote é trivial; mover um serviço já implantado é um projeto.",cf:"O monólito modular é um destino legítimo, não só uma etapa. Muitos sistemas deveriam parar aí. <b>Erro comum:</b> começar extraindo serviço sem antes ter componentes coesos — você distribui a bagunça em vez de organizá-la."},
 {t:"Decompor os dados",x:"a parte genuinamente difícil",oq:"Quebrar o serviço é a parte fácil. Quebrar o banco — decidir de quem é cada tabela, o que fazer com as junções e como manter integridade sem chave estrangeira — é onde a migração trava.",ps:"Reconhecer que o trabalho de verdade está nos dados, e orçar tempo para isso.",cf:"As junções que atravessam a nova fronteira precisam virar chamada, replicação de dados ou uma decisão de negócio sobre consistência. <b>Erro comum:</b> planejar a separação de serviços e descobrir o problema de dados no meio do caminho."},
 {t:"Escolher banco pela força dominante",x:"critério, não preferência",oq:"Em vez de 'qual banco é melhor', o livro propõe pontuar cada opção contra as forças que realmente importam naquele caso: modelo de consulta, escala, consistência, custo e o que o time sabe operar.",ps:"Tornar a escolha defensável e registrável num ADR, em vez de uma disputa de gosto.",cf:"A força dominante costuma ser o padrão de acesso — o mesmo critério do Conceitos de Backend. <b>Erro comum:</b> deixar a familiaridade do time fora da matriz; ela é uma força legítima e frequentemente decisiva."},
 {t:"Granularidade: integradores e desintegradores",x:"o cabo de guerra",oq:"Existem forças que puxam para dividir mais (escopo do domínio, volatilidade diferente, escala diferente, isolamento de falha, segurança) e forças que puxam para juntar (transação, fluxo de dados, dependência, troca de código compartilhado).",ps:"Ter uma lista explícita dos dois lados, em vez de decidir o tamanho do serviço por intuição.",cf:"A pergunta certa não é 'qual o tamanho ideal', e sim 'qual força é mais forte aqui'. <b>Erro comum:</b> só olhar os desintegradores — aí você fatia até o ponto em que toda operação vira uma saga."},
 {t:"Transação distribuída e ownership",x:"quem manda no dado",oq:"Ao dividir, cada dado precisa de um dono claro. Quando uma operação atravessa donos, não existe transação — existe coordenação.",ps:"Saber que a transação ACID era um luxo do monólito, e que perdê-la tem preço concreto.",cf:"Três casos de ownership: um serviço só escreve (simples), poucos serviços escrevem (delegar a um) ou muitos escrevem (serviço dedicado de dados). <b>Erro comum:</b> dois serviços escrevendo na mesma tabela e a esperança de que dê certo."},
 {t:"Os oito padrões de saga",x:"a matriz que organiza tudo",dg:"saga",oq:"O livro classifica sagas por três eixos: comunicação (síncrona ou assíncrona), consistência (atômica ou eventual) e coordenação (orquestrada ou coreografada). Oito combinações, cada uma com nome e consequência.",ps:"Parar de dizer 'vamos usar saga' e passar a dizer qual das oito, com o custo nomeado.",cf:"Quanto mais atômica e síncrona, mais fácil de raciocinar e menos disponível. Quanto mais eventual e assíncrona, mais escalável e mais difícil de depurar. <b>Erro comum:</b> escolher a mais sofisticada por padrão, quando a maioria dos fluxos aceita a mais simples."},
 {t:"Contratos rígidos e flexíveis",x:"o outro cabo de guerra",oq:"Contrato rígido (esquema estrito, versionado) dá garantia e acopla; contrato flexível (campos opcionais, tolerante) dá liberdade e adia o erro para a execução.",ps:"Decidir conscientemente onde cada um cabe, em vez de padronizar um dos dois para tudo.",cf:"Rígido entre times que se coordenam mal; flexível onde a evolução é constante e os consumidores são conhecidos. <b>Erro comum:</b> contrato flexível sem teste de contrato — você trocou a garantia por nada."}
]},
{g:"03",n:"Learning Domain-Driven Design",s:"Vlad Khononov — modelar o domínio antes de desenhar o castelo",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Domínio e subdomínios",x:"nem tudo merece o mesmo esforço",dg:"subd",oq:"O domínio é o negócio inteiro. Ele se divide em subdomínios <b>core</b> (o que diferencia a empresa), <b>supporting</b> (necessário, específico, mas não diferencia) e <b>generic</b> (resolvido, dá para comprar pronto).",ps:"Concentrar a modelagem cuidadosa onde ela paga — e só ali.",cf:"Aplicar DDD tático no subdomínio genérico é desperdício puro: autenticação e envio de e-mail você compra. <b>Erro comum:</b> usar agregados e eventos no CRUD de cadastro porque 'é o padrão da casa'.",ex:"core      → modele com cuidado, invista\nsupporting→ CRUD bem feito basta\ngeneric   → compre, não construa"},
 {t:"Linguagem ubíqua",x:"uma palavra, um significado",oq:"O mesmo vocabulário entre quem entende o negócio e quem escreve o código — e dentro de uma fronteira, cada termo significa exatamente uma coisa.",ps:"Eliminar a tradução constante que é a origem silenciosa de metade dos bugs de regra de negócio.",cf:"Se 'pedido' significa coisas diferentes no comercial e no fiscal, você não tem um termo ambíguo — você tem duas fronteiras. <b>Erro comum:</b> forçar um modelo canônico único para o 'cliente' da empresa inteira, que acaba servindo mal a todo mundo."},
 {t:"Bounded context",x:"a fronteira do significado",oq:"O limite dentro do qual um modelo e sua linguagem valem. Fora dele, os mesmos termos podem significar outra coisa — e tudo bem.",ps:"Permitir que cada parte do sistema tenha o modelo adequado ao seu problema, sem negociar um modelo universal.",cf:"Bounded context é decisão de <em>modelo</em>; serviço é decisão de <em>implantação</em>. Costumam coincidir, mas não são a mesma coisa. <b>Erro comum:</b> confundir os dois e criar um microsserviço por entidade."},
 {t:"Context map",x:"como as fronteiras se relacionam",oq:"Os padrões de integração entre contextos: parceria, kernel compartilhado, cliente-fornecedor, conformista, camada anticorrupção e serviço de host aberto.",ps:"Nomear a relação de poder e de dependência entre times — que é o que de fato determina como a integração vai envelhecer.",cf:"A <b>camada anticorrupção</b> é a mais útil no dia a dia: traduz o modelo do outro para o seu, para que o vocabulário alheio não vaze para dentro do seu domínio. <b>Erro comum:</b> consumir o modelo do legado direto e deixá-lo contaminar o código novo."},
 {t:"A escada dos padrões táticos",x:"proporcional à regra",oq:"Quatro níveis, do mais simples ao mais caro: transaction script, active record, domain model e event-sourced domain model.",ps:"Escolher a ferramenta proporcional à complexidade da regra — não aplicar o mais sofisticado por toda parte.",cf:"Se a lógica é 'salva o que veio do formulário', transaction script resolve. Domain model se paga quando há invariantes de verdade. Event sourcing quando o histórico das mudanças é requisito, não curiosidade. <b>Erro comum:</b> event sourcing por elegância — e um ano depois ninguém consegue responder uma consulta simples."},
 {t:"Agregado, entidade e value object",x:"onde a invariante vive",oq:"O agregado é a fronteira de consistência: tudo dentro dele muda numa transação só, e ele é a unidade de proteção das regras.",ps:"Ter um lugar óbvio onde a invariante é garantida, em vez de espalhá-la por serviços e validações.",cf:"Regra prática: agregado pequeno, referência a outros por identificador, uma transação por agregado. Value object não tem identidade — dois valores iguais são o mesmo. <b>Erro comum:</b> agregado gigante que carrega meio banco a cada operação e vira ponto de contenção."},
 {t:"Eventos de domínio",x:"o fato que o negócio reconhece",oq:"Um fato relevante do domínio, nomeado no passado, que outras partes podem reagir a — sem que quem publicou saiba quem são.",ps:"Desacoplar reações do fluxo principal usando a linguagem do negócio, e não termos técnicos.",cf:"Evento de domínio é diferente de evento de integração: o primeiro é interno ao contexto e rico; o segundo atravessa fronteiras e deve ser estável e magro. <b>Erro comum:</b> publicar o evento interno para fora e amarrar todo mundo ao seu modelo."}
]},
{g:"04",n:"System Design Interview",s:"Alex Xu — a conversa estruturada, não a resposta decorada",c:"var(--cyan)",cs:"var(--arc-soft)",items:[
 {t:"O framework de quatro passos",x:"a estrutura que evita o branco",dg:"fw",oq:"1) Entender o escopo e os requisitos. 2) Propor um desenho de alto nível. 3) Aprofundar nos pontos críticos. 4) Encerrar discutindo gargalos e evolução.",ps:"Ter um roteiro quando a pergunta é aberta demais — na entrevista e na reunião de desenho.",cf:"O passo 1 é o mais subestimado e o que mais reprova: sair desenhando sem perguntar quantos usuários, que operações e quais garantias é o erro clássico. <b>Erro comum:</b> gastar 80% do tempo no desenho bonito e não sobrar tempo para os gargalos.",ex:"1. escopo    — quantos? quais operações? que garantias?\n2. alto nível— caixas e fluxo principal\n3. detalhe   — o ponto crítico, com números\n4. fechar    — gargalos, falhas, próximo passo"},
 {t:"Estimativa de guardanapo",x:"números antes de escolher",oq:"Calcular por alto o volume de requisições, o armazenamento e a banda antes de decidir a arquitetura.",ps:"Descobrir se o problema é grande de verdade. Muita complexidade é adicionada para um volume que caberia num servidor.",cf:"Poucos números resolvem: requisições por segundo (total e de pico), tamanho médio do registro, retenção. <b>Erro comum:</b> pular a estimativa e projetar para uma escala imaginária.",ex:"1 milhão de usuários ativos/dia\n× 10 ações = 10M/dia ≈ 115 req/s\npico 3× ≈ 350 req/s\n# isto cabe em pouquíssimas máquinas"},
 {t:"A escada de escala",x:"a mesma ordem, de novo",oq:"Vertical, horizontal com balanceador, cache, CDN, réplica de leitura, sharding — cada degrau resolvendo um limite específico.",ps:"Ter uma sequência defensável em vez de mencionar tecnologias soltas.",cf:"É a mesma escada da Parte 01 do Conceitos de Backend, vista pela ótica da entrevista: o entrevistador quer ouvir o <em>porquê</em> de cada degrau e o que ele custa. <b>Erro comum:</b> citar o degrau sem saber o que ele quebra."},
 {t:"Consistent hashing",x:"o truque que evita remapear tudo",oq:"Distribuir chaves por um anel de hash, de modo que adicionar ou remover um nó realoque apenas uma fração das chaves, em vez de quase todas.",ps:"Fundamento de cache distribuído, banco chave-valor e sharding — aparece em quase todo desenho de escala.",cf:"Com o módulo simples pelo número de nós, mudar a quantidade de nós invalida praticamente todo o mapeamento. Nós virtuais suavizam a distribuição. <b>Erro comum:</b> citar o nome sem saber explicar o problema que ele resolve."},
 {t:"Padrões transferíveis",x:"o que realmente vale decorar",oq:"Os estudos de caso — encurtador de URL, feed, chat, autocompletar, armazenamento de arquivos — servem para extrair padrões que se repetem, não para memorizar respostas.",ps:"Reconhecer o padrão numa pergunta nova, em vez de torcer para cair uma que você já viu.",cf:"Os que mais se repetem: leitura pesada resolve com cache e réplica; escrita pesada resolve com fila e particionamento; unicidade resolve com gerador de id; busca resolve com índice invertido. <b>Erro comum:</b> decorar o desenho do Twitter e travar quando a pergunta muda de domínio."},
 {t:"Explicar o porquê",x:"o critério de avaliação real",oq:"O entrevistador avalia o raciocínio, não o diagrama. Uma escolha simples bem justificada vale mais que uma sofisticada sem defesa.",ps:"Treinar a articulação do trade-off — que é a mesma habilidade dos dois primeiros livros desta estante.",cf:"Diga o que está trocando: 'escolho consistência eventual aqui porque o usuário tolera alguns segundos, e isso me dá disponibilidade'. <b>Erro comum:</b> apresentar a solução como óbvia e não mencionar nenhuma alternativa."}
]},
{g:"05",n:"Entendendo Algoritmos",s:"Aditya Bhargava — a base que sustenta as decisões dos outros quatro",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"Big-O em dez segundos",x:"como o custo cresce",dg:"bigo",oq:"Notação que descreve como o tempo cresce conforme a entrada cresce — não quanto tempo leva, mas a forma da curva.",ps:"Comparar abordagens sem medir, e reconhecer o laço aninhado que vai explodir com dados reais.",cf:"O que importa é a ordem, não a constante: O(n²) perde para O(n log n) em escala, mesmo que seja mais rápido com dez elementos. <b>Erro comum:</b> otimizar a constante de um algoritmo que tem a ordem errada.",ex:"O(1)      acesso a índice, tabela hash\nO(log n)  busca binária\nO(n)      varrer uma vez\nO(n log n) ordenação eficiente\nO(n²)     laço dentro de laço\nO(2^n)    força bruta em subconjuntos"},
 {t:"Busca binária",x:"o poder de cortar pela metade",oq:"Numa coleção ordenada, comparar com o meio e descartar metade a cada passo. Um milhão de itens em cerca de vinte comparações.",ps:"É a intuição por trás do índice B-tree do banco, do diagnóstico por bisseção e do próprio método de investigação.",cf:"Exige ordenação prévia — e é por isso que o índice do banco é uma estrutura ordenada. <b>Erro comum:</b> aplicar em coleção não ordenada e obter resultado errado sem erro nenhum."},
 {t:"Ordenação: seleção, quick e merge",x:"os clássicos e o que o mundo usa",oq:"Seleção é O(n²) e didático. Quicksort é O(n log n) no caso médio e rápido na prática. Mergesort é O(n log n) garantido e estável.",ps:"Entender o que a biblioteca faz por você — e por que ninguém escreve ordenação à mão.",cf:"Java usa Timsort para objetos (estável, ótimo em dados parcialmente ordenados) e uma variação de quicksort para primitivos. <b>Erro comum:</b> implementar a própria ordenação; a da biblioteca é melhor em todos os aspectos.",ex:"Collections.sort(lista)      // Timsort, estável\nArrays.sort(int[])           // dual-pivot quicksort\nlista.sort(Comparator.comparing(Pedido::data))"},
 {t:"Tabela hash",x:"O(1) e a letra miúda",oq:"Estrutura que transforma a chave num índice e acessa direto. Busca, inserção e remoção em tempo constante no caso médio.",ps:"É o que está por trás de HashMap, de cache e de deduplicação — inclusive a tabela de idempotência.",cf:"O caso constante depende de boa distribuição: com colisões em excesso, degrada. Em Java, <code>equals</code> e <code>hashCode</code> precisam ser coerentes, senão o objeto some dentro do mapa. <b>Erro comum:</b> usar como chave um objeto mutável e alterá-lo depois de inserido."},
 {t:"Grafos: BFS e Dijkstra",x:"caminho mais curto",oq:"Busca em largura encontra o menor número de saltos; Dijkstra encontra o caminho de menor custo quando as arestas têm peso.",ps:"Modelar relações — dependências, rotas, recomendações — e resolver com algoritmo conhecido em vez de heurística própria.",cf:"BFS usa fila e visita por camadas; Dijkstra usa fila de prioridade e não aceita peso negativo. <b>Erro comum:</b> esquecer o conjunto de visitados e entrar em laço infinito num grafo com ciclo."},
 {t:"Guloso e programação dinâmica",x:"quando o ótimo local basta",oq:"O guloso escolhe o melhor passo imediato e é rápido — nem sempre chega ao ótimo. A programação dinâmica quebra em subproblemas e guarda os resultados, chegando ao ótimo por mais trabalho.",ps:"Reconhecer quando uma aproximação boa é suficiente — que é a maioria dos casos práticos.",cf:"Se o problema tem subestrutura ótima e subproblemas repetidos, cabe programação dinâmica. Se não, o guloso com uma heurística razoável costuma ser a escolha pragmática. <b>Erro comum:</b> partir para força bruta sem perceber que os subproblemas se repetem."}
]},
{g:"06",n:"Ler de verdade",s:"como transformar leitura em decisão — e as próximas da fila",c:"var(--java)",cs:"var(--java-soft)",items:[
 {t:"O método dos três passes",x:"não leia do começo ao fim",oq:"Primeiro passe: sumário, introduções e conclusões de cada capítulo, para montar o mapa. Segundo: os capítulos que respondem a uma pergunta que você tem agora. Terceiro: só o que virou decisão real.",ps:"Livro técnico de 400 páginas lido linearmente costuma ser abandonado no capítulo 6. O mapa primeiro muda isso.",cf:"A pergunta que guia o segundo passe vem do trabalho: 'como decido o tamanho deste serviço?' leva direto ao capítulo de granularidade. <b>Erro comum:</b> tratar livro técnico como romance — e medir progresso por páginas em vez de por decisões."},
 {t:"Uma decisão por capítulo",x:"a prova de que leu",oq:"Ao fechar um capítulo, escreva uma decisão que você tomaria diferente a partir dele — ou registre que ele não mudou nada.",ps:"Separar 'li e concordei' de 'entendi a ponto de aplicar'. São coisas muito diferentes.",cf:"Se em cinco capítulos nenhuma decisão mudou, ou o livro não é para você agora, ou você está lendo no piloto automático. <b>Erro comum:</b> grifar muito e não escrever nada — grifo dá sensação de aprendizado e retém pouco."},
 {t:"Cruzar os autores",x:"onde eles discordam",oq:"Os quatro primeiros livros desta estante se sobrepõem em vários pontos — e divergem em alguns.",ps:"A divergência é onde está o aprendizado: significa que ali existe um trade-off real, não uma verdade.",cf:"Exemplos: Richards e Ford tratam microsserviços como um estilo entre vários; Hard Parts assume o contexto distribuído e ataca a decomposição. Khononov parte do domínio; Xu parte da escala. Nenhum está errado — partem de problemas diferentes. <b>Erro comum:</b> tomar o último livro lido como a resposta definitiva."},
  {t:"As próximas da fila",x:"onde acrescentar",oq:"Esta estante cresce: cada livro novo entra como um marco na trilha e uma parte no conteúdo, no mesmo formato.",ps:"Manter a biblioteca num lugar só, em vez de espalhar um HTML por livro — que foi o que originou este documento.",cf:"Candidatos naturais para a sequência, dado o que você já leu: <em>Designing Data-Intensive Applications</em> (Kleppmann) para dados e consistência, <em>Release It!</em> (Nygard) para resiliência e os padrões de falha, e <em>Effective Java</em> (Bloch) para a linguagem. Ao ler, acrescente aqui: marco na trilha, parte no conteúdo.",ex:"# quando terminar um livro:\n# 1. novo marco na trilha (6-8 nós)\n# 2. nova parte no conteúdo\n# 3. um tópico em \"onde discordam\"\n# NÃO crie um HTML novo por livro",star:true}
]},
{g:"07",n:"Como aprender de verdade",s:"o ciclo permanente, os canais em português e como pesquisar e praticar",c:"var(--gold)",cs:"var(--gold-s)",items:[
 {t:"O ciclo de aprendizado",x:"ler, ver, documentação, laboratório e nota de síntese",oq:"O ciclo de cinco passos: ler o conceito, assistir à aula prática, checar a documentação oficial ou artigo seminal, subir laboratório isolado e escrever uma nota autoral de síntese.",ps:"Garantir que a teoria vire retenção de longo prazo e critério técnico.",cf:"A retenção passiva se perde em poucos dias. O ciclo ativo força a articulação com as próprias palavras e a validação em código. <b>Erro comum:</b> ler sem abrir o terminal e acreditar que dominou o assunto.",ex:"# o ciclo de estudo ativo\n1. ler o conceito fundamental\n2. vídeo de demonstração prática\n3. documentação oficial / artigo original\n4. laboratório em código isolado\n5. nota de síntese com trade-offs"},
 {t:"Canais e cursos em português",x:"curadoria técnica com autoridade comprovada",oq:"Fontes em português focadas em arquitetura, código limpo, microsserviços, concorrência e engenharia de software pragmática.",ps:"Conectar a literatura internacional com a prática e os desafios reais do mercado de tecnologia brasileiro.",cf:"Instrutores seniores como Wesley Willians (Full Cycle), Rodrigo Branas, Alexandre Aquiles e Rinaldo Rossi analisam trade-offs e limites práticos. <b>Erro comum:</b> consumir tutoriais superficiais de hype que não abordam custo operacional ou modos de falha."},
 {t:"Como pesquisar e o que praticar",x:"buscas por trade-offs e projetos com falhas reais",oq:"Formular pesquisas pelas exceções e limites de cada padrão, além de desenvolver mini-projetos focados em resiliência e medição de desempenho.",ps:"Construir repertório técnico sólido e portfólio autoral defensável.",cf:"Pesquise por termos de falha ('failure modes', 'post-mortem', 'trade-offs') e pratique construindo monolitos modulares, sagas distribuídas e benchmarks de estruturas de dados. <b>Erro comum:</b> testar apenas o caminho feliz (happy path) e ignorar timeouts e inconsistências de rede.",ex:"# termos de pesquisa recomendados:\n\"bounded context integration failure modes\"\n\"distributed sagas compensating transactions\"\n\"modular monolith vs microservices post-mortem\""}
]}
];


/* ---------- render ---------- */
/* ================== NAVEGAÇÃO (trilha + conteúdo) ================== */
var nav=document.getElementById("nav");
var navMap={};
function navHead(txt){var a=document.createElement("a");a.className="sec";a.style.color="var(--soft)";a.style.marginTop="18px";a.style.fontSize=".68rem";a.textContent=txt;nav.appendChild(a);}
/* ================== TRILHA ================== */
var flat=[];T.forEach(function(g){g.items.forEach(function(it){it._g=g;flat.push(it);});});
flat.forEach(function(it,i){it._i=i;it._id=it.t.toLowerCase().replace(/[^a-z0-9]+/g,'-');});
var KEYT="biblioteca-completo-CL-trilha-v1";
var doneT={};try{doneT=JSON.parse(localStorage.getItem(KEYT)||"{}");}catch(e){}
var track=document.getElementById("track"),lg=document.getElementById("lg");
navHead("A trilha · "+T.length+" grupos");
T.forEach(function(g,gi){
  var sec=document.createElement("section");
  sec.className="grp "+(gi%2===0?"l":"r");sec.id="g"+g.g;
  sec.style.setProperty("--gc",g.c);sec.style.setProperty("--gs",g.cs);
  var ms=document.createElement("div");ms.className="milestone";
  ms.innerHTML='<span class="n">'+g.g+'</span><h2>'+g.n+'</h2><small>'+g.s+'</small>';
  var box=document.createElement("div");box.className="cluster";
  g.items.forEach(function(it){
    var b=document.createElement("button");b.className="node";b.type="button";b.dataset.i=it._i;
    b.innerHTML='<b>'+it.t+'</b><span>'+it.x+'</span>';
    b.addEventListener("click",function(){open(it._i);});
    box.appendChild(b);
  });
  sec.appendChild(box);sec.appendChild(ms);track.appendChild(sec);
  var s=document.createElement("span");s.innerHTML='<b style="background:'+g.c+'"></b>'+g.n;lg.appendChild(s);
  var a=document.createElement("a");a.className="sec";a.href="#g"+g.g;a.innerHTML="<b>"+g.g+"</b>"+g.n;nav.appendChild(a);
  navMap["g"+g.g]=a;
});
var fim=document.createElement("div");fim.className="trail-end";
fim.innerHTML='<span>fim da trilha ↓ agora o conteúdo</span>';
track.appendChild(fim);
/* ---------- painel ---------- */
var panel=document.getElementById("panel"),scrim=document.getElementById("scrim"),cur=-1;
function open(i){
  cur=i;var it=flat[i];
  panel.style.setProperty("--pc",it._g.c);
  document.getElementById("pTag").textContent=it._g.g+" · "+it._g.n;
  document.getElementById("pTitle").textContent=it.t;
  document.getElementById("pSub").textContent=it.x;
  var h='';
  h+='<div class="blk"><h4>O que é</h4><p>'+it.oq+'</p></div>';
  h+='<div class="blk"><h4>Para que serve</h4><p>'+it.ps+'</p></div>';
  h+='<div class="blk"><h4>Como funciona</h4><p>'+it.cf+'</p></div>';
  if(it.dg&&DG[it.dg])h+='<div class="blk"><h4>Visual</h4>'+DG[it.dg]+'</div>';
  if(it.ex)h+='<div class="blk"><h4>Exemplo</h4><pre><code>'+hlCode(it.ex)+'</code></pre></div>';
  document.getElementById("pBody").innerHTML=h;
  document.getElementById("pBody").scrollTop=0;
  syncMark();
  panel.classList.add("on");scrim.classList.add("on");
  document.getElementById("pX").focus();
}
function hlCode(code){
  var e=code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  e=e.replace(/(\/\/[^\n]*|#[^\n]*)/g,'<span class="c">$1</span>');
  e=e.replace(/"([^"\n]*)"/g,'<span class="s">"$1"</span>');
  e=e.replace(/\b(class|interface|record|enum|new|return|static|final|void|try|catch|finally|throw|throws|if|else|for|while|switch|case|public|private|protected|var|sealed|permits|implements|extends|synchronized|volatile|import|module|requires|exports)\b/g,'<span class="k">$1</span>');
  e=e.replace(/\b(int|long|double|boolean|String|List|Map|Set|Optional|BigDecimal|LocalDate|Duration|Path|ByteBuffer|Thread|Future)\b/g,'<span class="t">$1</span>');
  e=e.replace(/(@\w+)/g,'<span class="d">$1</span>');
  return e;
}
function closeP(){panel.classList.remove("on");scrim.classList.remove("on");}
document.getElementById("pX").addEventListener("click",closeP);
scrim.addEventListener("click",closeP);
document.addEventListener("keydown",function(e){
  if(e.key==="Escape")closeP();
  if(!panel.classList.contains("on"))return;
  if(e.key==="ArrowRight")go(1);if(e.key==="ArrowLeft")go(-1);
});
function go(d){var n=cur+d;if(n>=0&&n<flat.length)open(n);}
document.getElementById("pNext").addEventListener("click",function(){go(1);});
document.getElementById("pPrev").addEventListener("click",function(){go(-1);});
var mark=document.getElementById("pMark");
function syncMark(){
  var on=!!doneT[flat[cur]._id];
  mark.classList.toggle("is",on);
  mark.textContent=on?"✓ estudado":"marcar estudado";
}
mark.addEventListener("click",function(){
  var id=flat[cur]._id;
  if(doneT[id])delete doneT[id];else doneT[id]=1;
  localStorage.setItem(KEYT,JSON.stringify(doneT));
  syncMark();paint();
});
/* ================== CONTEÚDO (tópicos profundos) ================== */
var parts=[].slice.call(document.querySelectorAll("section.part"));
var entries=[];
navHead("O conteúdo · "+parts.length+" partes");
parts.forEach(function(sec){
  var num=sec.querySelector(".ph .num").textContent.trim();
  var h2=sec.querySelector(".ph h2").textContent;
  var a=document.createElement("a");a.className="sec";a.href="#"+sec.id;a.innerHTML="<b>"+num+"</b>"+h2;
  nav.appendChild(a);entries.push({a:a,el:sec,sec:true});
  sec.querySelectorAll("article.topic").forEach(function(t){
    var title=t.querySelector("h3").textContent.replace(/\s+/g," ").trim();
    var la=document.createElement("a");la.className="top";la.href="#"+t.id;la.dataset.k=t.id;la.textContent=title;
    nav.appendChild(la);entries.push({a:la,el:t,sec:false});
  });
});
var KEYM="biblioteca-completo-CL-conteudo-v1";
var doneM={};try{doneM=JSON.parse(localStorage.getItem(KEYM)||"{}");}catch(e){}
var botoes=[].slice.call(document.querySelectorAll(".done"));
botoes.forEach(function(b){
  b.addEventListener("click",function(){
    var k=b.dataset.k;
    if(doneM[k])delete doneM[k];else doneM[k]=1;
    localStorage.setItem(KEYM,JSON.stringify(doneM));paint();
  });
});
/* ================== PROGRESSO COMBINADO ================== */
function paint(){
  var n=0;
  document.querySelectorAll(".node").forEach(function(b){
    var it=flat[+b.dataset.i];var on=!!doneT[it._id];
    b.classList.toggle("done",on);if(on)n++;
  });
  var m=0;
  botoes.forEach(function(b){
    var k=b.dataset.k,on=!!doneM[k];
    b.classList.toggle("is",on);
    b.textContent=on?"✓ dominado":"marcar dominado";
    var la=nav.querySelector('a[data-k="'+k+'"]');
    if(la)la.classList.toggle("ok",on);
    if(on)m++;
  });
  var tot=flat.length+botoes.length,fez=n+m;
  var pct=tot?Math.round(fez/tot*100):0;
  document.getElementById("rdone").textContent=fez+" de "+tot;
  document.getElementById("rsub").textContent=n+" nós · "+m+" tópicos";
  document.getElementById("rpct").textContent=pct+"%";
  document.getElementById("ring").style.setProperty("--deg",(pct*3.6)+"deg");
}
document.getElementById("reset").addEventListener("click",function(){
  if(!confirm("Zerar TODO o progresso (trilha e conteúdo)?"))return;
  doneT={};doneM={};
  localStorage.setItem(KEYT,"{}");localStorage.setItem(KEYM,"{}");
  paint();if(cur>=0)syncMark();
});
/* ================== SCROLLSPY ================== */
function onScroll(){
  var y=window.scrollY+140,c=null,i;
  for(i=0;i<entries.length;i++){ if(!entries[i].sec&&entries[i].el.offsetTop<=y) c=entries[i]; }
  entries.forEach(function(e){ if(!e.sec) e.a.classList.toggle("active",e===c); });
  var h=document.body.scrollHeight-window.innerHeight;
  document.getElementById("tp").style.width=(h>0?window.scrollY/h*100:0)+"%";
  document.getElementById("up").classList.toggle("on",window.scrollY>700);
}
var scrollTicking=false;
function onScrollThrottled(){
  if(!scrollTicking){
    window.requestAnimationFrame(function(){
      onScroll();
      scrollTicking=false;
    });
    scrollTicking=true;
  }
}
document.addEventListener("scroll",onScrollThrottled,{passive:true});
document.getElementById("up").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});
document.getElementById("top").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});
/* ================== BUSCA (nós + tópicos) ================== */
var q=document.getElementById("q");
q.addEventListener("input",function(){
  var v=q.value.trim().toLowerCase(),vis=0;
  document.querySelectorAll(".node").forEach(function(b){
    var it=flat[+b.dataset.i];
    var txt=(it.t+" "+it.x+" "+it.oq+" "+it.ps+" "+it.cf).toLowerCase();
    var hit=v&&txt.indexOf(v)>-1;
    b.classList.toggle("hit",!!hit);
    b.classList.toggle("dim",!!v&&!hit);
    if(hit)vis++;
  });
  document.querySelectorAll(".grp").forEach(function(g){
    if(!v){g.classList.remove("hide");return;}
    g.classList.toggle("hide",!g.querySelector(".node.hit"));
  });
  document.querySelectorAll("article.topic").forEach(function(t){
    var hit=!v||t.textContent.toLowerCase().indexOf(v)>-1;
    t.classList.toggle("hide",!hit);
    var la=nav.querySelector('a[data-k="'+t.id+'"]');
    if(la)la.classList.toggle("hide",!hit);
    if(hit&&v)vis++;
  });
  parts.forEach(function(sec){
    var algum=sec.querySelector("article.topic:not(.hide)");
    sec.style.display=algum?"":"none";
    var sa=nav.querySelector('a.sec[href="#'+sec.id+'"]');
    if(sa)sa.classList.toggle("hide",!algum);
  });
  document.getElementById("nores").classList.toggle("on",!!v&&vis===0);
});
/* ================== REALCE DOS BLOCOS DE CÓDIGO ================== */
function hl(el){
  var e=el.textContent.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  var store=[];
  function keep(cls,txt){store.push('<span class="'+cls+'">'+txt+'</span>');return "§"+(store.length-1)+"§";}
  e=e.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|--[^\n]*|#[^\n]*)/g,function(m){return keep("c",m);});
  e=e.replace(/("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')/g,function(m){return keep("s",m);});
  e=e.replace(/(@[A-Za-z_]\w*)/g,function(m){return keep("a",m);});
  e=e.replace(/\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|record|return|sealed|permits|short|static|super|switch|synchronized|this|throw|throws|transient|try|var|void|volatile|while|when|yield|true|false|null|SELECT|FROM|WHERE|AND|OR|INSERT|INTO|VALUES|UPDATE|SET|JOIN|ON|ORDER|BY|LIMIT|BEGIN|COMMIT|ROLLBACK|CREATE|INDEX|EXPLAIN|ANALYZE|FOR)\b/g,'<span class="k">$1</span>');
  e=e.replace(/\b([A-Z][A-Za-z0-9_]*)\b/g,'<span class="t">$1</span>');
  e=e.replace(/\b(\d[\d_]*)\b/g,'<span class="n">$1</span>');
  e=e.replace(/§(\d+)§/g,function(_,i){return store[+i];});
  el.innerHTML=e;
}
document.querySelectorAll("section.part pre code").forEach(hl);
paint();onScroll();
/* ================== MODO TESTE (retrieval practice) ================== */
(function(){
 var RK="biblioteca-completo-CL-rev-v1";
 var rev={};try{rev=JSON.parse(localStorage.getItem(RK)||"{}");}catch(e){}
 var test=false,revealed=false;
 var P=document.getElementById("panel"),B=document.getElementById("pBody");
 var mB=document.getElementById("mode"),rB=document.getElementById("review");
 var ok=document.getElementById("gOk"),no=document.getElementById("gNo");
 var _open=open;
 open=function(i){_open(i);after(flat[i]);};
 function after(it){
  revealed=false;P.classList.toggle("test",test);P.classList.remove("revealed");
  if(test){
   var g=document.createElement("div");g.className="gate";
   g.innerHTML='<div class="gate-in"><span class="ghint">tente explicar antes de ver</span><h5></h5><em></em><button class="reveal-btn" type="button">revelar resposta &#9656;</button></div>';
   g.querySelector("h5").textContent=it.t;g.querySelector("em").textContent=it.x||"";
   g.querySelector(".reveal-btn").addEventListener("click",reveal);
   B.insertBefore(g,B.firstChild);
  }
  grade();
 }
 function reveal(){revealed=true;P.classList.add("revealed");grade();B.scrollTop=0;}
 function grade(){var s=test&&revealed;ok.hidden=!s;no.hidden=!s;}
 function cid(){return(cur>=0)?flat[cur]._id:null;}
 function save(){localStorage.setItem(RK,JSON.stringify(rev));pr();}
 ok.addEventListener("click",function(){var id=cid();if(id){delete rev[id];save();}go(1);});
 no.addEventListener("click",function(){var id=cid();if(id){rev[id]=1;save();}go(1);});
 mB.addEventListener("click",function(){
  test=!test;mB.textContent=test?"🎯 teste":"📖 estudo";mB.classList.toggle("on",test);
  if(P.classList.contains("on")&&cur>=0)open(cur);
 });
 rB.addEventListener("click",function(){
  var k=Object.keys(rev);if(!k.length)return;
  if(!test){test=true;mB.textContent="🎯 teste";mB.classList.add("on");}
  for(var i=0;i<flat.length;i++){if(rev[flat[i]._id]){open(i);break;}}
 });
 function pr(){
  var n=Object.keys(rev).length;rB.hidden=n===0;rB.textContent="🎯 revisar ("+n+")";
  document.querySelectorAll(".node").forEach(function(b){b.classList.toggle("torev",!!rev[flat[+b.dataset.i]._id]);});
 }
 pr();
})();


/* ---------- bloco 2 de 2 ---------- */

(function(){
  if(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  if(!("IntersectionObserver" in window))return;
  document.documentElement.classList.add("dganim");
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add("in");dispara(e.target);io.unobserve(e.target)}
  })},{threshold:.18,rootMargin:"0px 0px -6% 0px"});
  function pt(p,l){var o=p.getPointAtLength(l);return [o.x,o.y]}
  function segs(f){
    var arr=[].slice.call(f.querySelectorAll("svg path.l,svg path.lt,svg path.lb,svg path.lr,svg path.ln"));
    return arr.map(function(p){
      try{
        var t=p.getTotalLength(); if(!t||t<12)return null;
        var b=p.getBBox(); var a=pt(p,0),z=pt(p,t);
        return {p:p,t:t,x:b.x,y:(a[1]+z[1])/2,a:a,z:z};
      }catch(_){return null}
    }).filter(Boolean);
  }
  function faixas(ss){
    var out=[];
    ss.slice().sort(function(a,b){return a.y-b.y}).forEach(function(s){
      for(var i=0;i<out.length;i++){ if(Math.abs(out[i].y-s.y)<34){out[i].itens.push(s);return} }
      out.push({y:s.y,itens:[s]});
    });
    return out.filter(function(g){return g.itens.length>=2})
              .sort(function(a,b){return b.itens.length-a.itens.length}).slice(0,3);
  }
  function traco(itens){
    itens.sort(function(a,b){return a.x-b.x});
    var d="",n=0;
    itens.forEach(function(s){
      var N=Math.max(2,Math.min(14,Math.round(s.t/14)));
      for(var i=0;i<=N;i++){ var q=pt(s.p,s.t*i/N); d+=(n++?"L":"M")+q[0].toFixed(1)+","+q[1].toFixed(1)+" "}
    });
    return n>1?d:null;
  }
  function fio(f){
    if(f.querySelector(".pulse"))return;
    var svg=f.querySelector("svg"); if(!svg)return;
    var ss=segs(f); if(ss.length<2)return;
    var ciclo=ss.some(function(s){return s.a[0]-s.z[0]>80});
    var gs=faixas(ss); if(!gs.length)return;
    var NS="http://www.w3.org/2000/svg";
    gs.forEach(function(g,gi){
      var d=traco(g.itens); if(!d)return;
      var cor=getComputedStyle(g.itens[0].p).stroke;
      if(!cor||cor==="none")cor="currentColor";
      var wrap=document.createElementNS(NS,"g");
      wrap.setAttribute("class","pulse gen");
      wrap.style.setProperty("--pd",(1.15+gi*0.18).toFixed(2)+"s");
      var c=document.createElementNS(NS,"circle");
      c.setAttribute("r","4.2"); c.setAttribute("fill",cor);
      var mo=document.createElementNS(NS,"animateMotion");
      mo.setAttribute("path",d);
      mo.setAttribute("calcMode","linear");
      mo.setAttribute("begin","indefinite");
      var dur = ciclo ? "5.2s" : (2.8 + gi * 0.35).toFixed(2) + "s";
      mo.setAttribute("dur", dur);
      mo.setAttribute("repeatCount", "indefinite");
      var fade = document.createElementNS(NS, "animate");
      fade.setAttribute("attributeName", "opacity");
      fade.setAttribute("begin", "indefinite");
      fade.setAttribute("dur", dur);
      fade.setAttribute("repeatCount", "indefinite");
      fade.setAttribute("values", "0;1;1;0");
      fade.setAttribute("keyTimes", "0;0.12;0.88;1");
      c.appendChild(fade); wrap.__fade = fade;
      c.appendChild(mo); wrap.appendChild(c); svg.appendChild(wrap);
      wrap.__mo=mo;
    });
    f.__fios=[].slice.call(svg.querySelectorAll(".pulse.gen"));
  }
  function dispara(f){
    (f.__fios||[]).forEach(function(w){
      try{ w.__mo&&w.__mo.beginElement(); w.__fade&&w.__fade.beginElement(); w.classList.add("go") }catch(_){}
    });
  }
  function px(n){try{return n.getBBox().x}catch(_){return 0}}
  function prep(f){
    if(f.getAttribute("data-dg"))return;
    f.setAttribute("data-dg","1");
    var ns=[].slice.call(f.querySelectorAll("svg *")).filter(function(n){return n.getBBox});
    ns.forEach(function(n){
      if(n.getTotalLength&&n.tagName!=="text"){try{n.setAttribute("pathLength",100)}catch(_){}}
    });
    ns.map(function(n){return [n,px(n)]})
      .sort(function(a,b){return a[1]-b[1]})
      .forEach(function(p,i){p[0].style.setProperty("--d",(i*0.035).toFixed(3)+"s")});
    try{fio(f)}catch(_){}
    io.observe(f);
  }
  function scan(r){[].slice.call((r||document).querySelectorAll("figure.dg")).forEach(prep)}
  scan(document);
  /* o painel da trilha injeta diagramas depois do carregamento */
  new MutationObserver(function(ms){
    for(var i=0;i<ms.length;i++){
      var a=ms[i].addedNodes;
      for(var j=0;j<a.length;j++){
        var n=a[j];
        if(n.nodeType===1){ if(n.matches&&n.matches("figure.dg")) prep(n); else scan(n); }
      }
    }
  }).observe(document.body,{childList:true,subtree:true});
})();

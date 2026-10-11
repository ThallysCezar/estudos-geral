/* Extraido de trilhas/arquitetura.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>, entao roda depois do HTML ser analisado,
 * na mesma ordem em que os blocos apareciam no documento.
 * Gerado em 2026-10-09. Nao editar: edite o HTML de origem. */

/* ---------- bloco 1 de 4 ---------- */

function W(h,inner){return '<figure class="dg"><svg viewBox="0 0 340 '+h+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg></figure>';}
var DG={
 anat:W(150,'<rect x="4" y="14" width="52" height="26" rx="6" class="sf"/><text x="30" y="31" class="bs">usuário</text><path d="M56,27 L70,27" class="ln"/><path d="M70,27 L65,24 L65,30 Z" class="hd"/><rect x="72" y="14" width="46" height="26" rx="6" class="sf"/><text x="95" y="31" class="bs">DNS</text><path d="M118,27 L132,27" class="ln"/><path d="M132,27 L127,24 L127,30 Z" class="hd"/><rect x="134" y="14" width="56" height="26" rx="6" class="sf"/><text x="162" y="31" class="bs">LB/GW</text><path d="M190,27 L204,27" class="ln"/><path d="M204,27 L199,24 L199,30 Z" class="hd"/><rect x="206" y="8" width="128" height="38" rx="7" class="sf"/><text x="270" y="24" class="bt">apps (stateless)</text><text x="270" y="38" class="bs">réplicas atrás do LB</text><path d="M240,46 L120,72 M270,46 L270,72 M300,46 L318,72" class="ln dash"/><rect x="70" y="72" width="90" height="28" rx="6" class="bx"/><text x="115" y="90" class="bs">banco (verdade)</text><rect x="228" y="72" width="80" height="28" rx="6" class="bx"/><text x="268" y="90" class="bs">cache</text><rect x="170" y="72" width="50" height="28" rx="6" class="bx"/><text x="195" y="90" class="bs">fila</text><path d="M195,100 L195,114" class="ln dash"/><rect x="150" y="114" width="90" height="26" rx="6" class="bx"/><text x="195" y="131" class="bs">workers/jobs</text><text x="60" y="130" class="bs">borda → app →</text><text x="60" y="142" class="bs">estado → bastidores</text>'),
 sync:W(110,'<text x="85" y="16" class="bs">SÍNCRONO (espera)</text><rect x="8" y="24" width="60" height="24" rx="6" class="sf"/><text x="38" y="40" class="bs">A</text><path d="M68,36 L120,36" class="ln"/><path d="M120,36 L114,33 L114,39 Z" class="hd"/><rect x="122" y="24" width="60" height="24" rx="6" class="sf"/><text x="152" y="40" class="bs">B</text><path d="M120,44 L70,44" class="ln dash"/><text x="95" y="58" class="bs">A trava até B responder</text><text x="255" y="16" class="bs">ASSÍNCRONO (segue)</text><rect x="200" y="24" width="50" height="24" rx="6" class="sf"/><text x="225" y="40" class="bs">A</text><path d="M250,36 L272,36" class="ln"/><path d="M272,36 L266,33 L266,39 Z" class="hd"/><rect x="274" y="24" width="26" height="24" rx="5" class="bx"/><text x="287" y="40" class="bs">fila</text><path d="M300,36 L316,36" class="ln dash"/><rect x="276" y="66" width="56" height="24" rx="6" class="sf"/><text x="304" y="82" class="bs">B (depois)</text><path d="M287,48 L300,66" class="ln dash"/><text x="230" y="82" class="bs">A não espera;</text><text x="230" y="94" class="bs">B consome no ritmo dele</text>'),
 saga:W(120,'<rect x="6" y="20" width="70" height="26" rx="6" class="sf"/><text x="41" y="37" class="bs">1. reserva</text><path d="M76,33 L92,33" class="ln"/><path d="M92,33 L87,30 L87,36 Z" class="hd"/><rect x="94" y="20" width="70" height="26" rx="6" class="sf"/><text x="129" y="37" class="bs">2. cobra</text><path d="M164,33 L180,33" class="ln"/><path d="M180,33 L175,30 L175,36 Z" class="hd"/><rect x="182" y="20" width="70" height="26" rx="6" class="bx" style="stroke:var(--red)"/><text x="217" y="37" class="bs" style="fill:var(--red)">3. falhou!</text><path d="M217,46 L217,66" class="ln dash" style="stroke:var(--red)"/><rect x="150" y="66" width="120" height="26" rx="6" class="sf" style="stroke:var(--red)"/><text x="210" y="83" class="bs" style="fill:var(--red)">compensa: estorna 2</text><path d="M150,79 L60,79" class="ln dash" style="stroke:var(--red)"/><path d="M60,79 L66,76 L66,82 Z" class="hd" style="fill:var(--red)"/><rect x="6" y="66" width="90" height="26" rx="6" class="sf" style="stroke:var(--red)"/><text x="51" y="83" class="bs" style="fill:var(--red)">desfaz 1</text><text x="170" y="112" class="bs">sem transação global: cada passo tem sua compensação</text>'),
 cb:W(96,'<circle cx="52" cy="46" r="28" class="sf" style="stroke:var(--green)"/><text x="52" y="43" class="bt" style="fill:var(--green)">CLOSED</text><text x="52" y="56" class="bs">passa tudo</text><path d="M82,36 L142,26" class="ln"/><path d="M142,26 L136,24 L137,30 Z" class="hd"/><text x="112" y="20" class="bs">muitas falhas</text><circle cx="172" cy="46" r="28" class="sf" style="stroke:var(--red)"/><text x="172" y="43" class="bt" style="fill:var(--red)">OPEN</text><text x="172" y="56" class="bs">falha rápido</text><path d="M202,36 L262,26" class="ln"/><path d="M262,26 L256,24 L257,30 Z" class="hd"/><text x="232" y="20" class="bs">após espera</text><circle cx="292" cy="46" r="28" class="sf" style="stroke:var(--yellow)"/><text x="292" y="43" class="bt" style="fill:var(--yellow)">HALF</text><text x="292" y="56" class="bs">testa 1</text><path d="M276,70 C200,92 90,88 62,72" class="ln dash" style="stroke:var(--green)"/><path d="M62,72 L69,74 L67,67 Z" class="hd" style="fill:var(--green)"/>'),
 o11y:W(100,'<rect x="10" y="24" width="96" height="50" rx="8" class="sf"/><text x="58" y="44" class="bt">MÉTRICAS</text><text x="58" y="60" class="bs">o que está</text><text x="58" y="70" class="bs">acontecendo</text><rect x="122" y="24" width="96" height="50" rx="8" class="sf"/><text x="170" y="44" class="bt">LOGS</text><text x="170" y="60" class="bs">o que aconteceu</text><text x="170" y="70" class="bs">em detalhe</text><rect x="234" y="24" width="96" height="50" rx="8" class="sf"/><text x="282" y="44" class="bt">TRACES</text><text x="282" y="60" class="bs">por onde a</text><text x="282" y="70" class="bs">requisição passou</text><text x="170" y="92" class="bs">métrica avisa → trace localiza → log explica</text>'),
 slo:W(96,'<rect x="10" y="30" width="240" height="26" rx="6" class="sf" style="stroke:var(--green)"/><text x="130" y="47" class="bs" style="fill:var(--green)">SLO: 99,9% das reqs < 300ms no mês</text><rect x="260" y="30" width="70" height="26" rx="6" class="bx" style="stroke:var(--red)"/><text x="295" y="47" class="bs" style="fill:var(--red)">0,1% budget</text><text x="170" y="76" class="bs">error budget = quanto pode falhar sem quebrar a promessa</text><text x="170" y="88" class="bs">budget acabando? congela feature, prioriza estabilidade</text>'),
 ladder:W(120,'<rect x="8" y="80" width="70" height="26" rx="6" class="sf"/><text x="43" y="97" class="bs">Sênior</text><rect x="94" y="54" width="70" height="26" rx="6" class="sf"/><text x="129" y="71" class="bs">Staff</text><rect x="180" y="28" width="76 " height="26" rx="6" class="sf"/><text x="218" y="45" class="bs">Principal</text><path d="M78,88 L94,70 M164,62 L180,44" class="ln dash"/><text x="43" y="116" class="bs">um time</text><text x="129" y="90" class="bs">vários times</text><text x="218" y="64" class="bs">a organização</text><text x="290" y="45" class="bs">escopo e</text><text x="290" y="57" class="bs">alavancagem</text><text x="290" y="69" class="bs">crescem</text>'),
 tshape:W(110,'<rect x="30" y="20" width="280" height="22" rx="5" class="sf"/><text x="170" y="35" class="bs">largura: sabe avaliar TUDO (rede, dados, infra, front…)</text><rect x="140" y="42" width="60" height="56" rx="5" class="sf" style="stroke:var(--green)"/><text x="170" y="66" class="bs" style="fill:var(--green)">fundo em</text><text x="170" y="78" class="bs" style="fill:var(--green)">1-2 áreas</text><text x="70" y="70" class="bs">o arquiteto é</text><text x="70" y="82" class="bs">em forma de T</text><text x="272" y="70" class="bs">profundo o bastante</text><text x="272" y="82" class="bs">para decidir</text>'),
 c4:W(120,'<rect x="10" y="20" width="76" height="26" rx="6" class="sf"/><text x="48" y="37" class="bs">1. Contexto</text><path d="M86,33 L100,33" class="ln"/><path d="M100,33 L95,30 L95,36 Z" class="hd"/><rect x="102" y="20" width="80" height="26" rx="6" class="sf"/><text x="142" y="37" class="bs">2. Contêiner</text><path d="M182,33 L196,33" class="ln"/><path d="M196,33 L191,30 L191,36 Z" class="hd"/><rect x="198" y="20" width="86" height="26" rx="6" class="sf"/><text x="241" y="37" class="bs">3. Componente</text><path d="M284,33 L298,33" class="ln"/><path d="M298,33 L293,30 L293,36 Z" class="hd"/><rect x="300" y="20" width="34" height="26" rx="6" class="bx"/><text x="317" y="37" class="bs">4.</text><text x="48" y="62" class="bs">sistema e</text><text x="48" y="74" class="bs">vizinhos</text><text x="142" y="62" class="bs">apps, bancos,</text><text x="142" y="74" class="bs">filas</text><text x="241" y="62" class="bs">módulos de</text><text x="241" y="74" class="bs">um contêiner</text><text x="317" y="62" class="bs">código</text><text x="170" y="104" class="bs">zoom progressivo: cada nível para uma audiência</text>'),
 msg:W(104,'<rect x="8" y="20" width="90" height="26" rx="6" class="sf"/><text x="53" y="37" class="bs">mesma ideia</text><path d="M53,46 L53,60" class="ln"/><path d="M53,60 L50,54 L56,54 Z" class="hd"/><rect x="8" y="60" width="90" height="34" rx="6" class="bx"/><text x="53" y="74" class="bs">p/ dev: detalhes</text><text x="53" y="86" class="bs">técnicos, trade-off</text><rect x="122" y="60" width="96" height="34" rx="6" class="bx"/><text x="170" y="74" class="bs">p/ gestor: prazo,</text><text x="170" y="86" class="bs">risco, custo</text><rect x="242" y="60" width="90" height="34" rx="6" class="bx"/><text x="287" y="74" class="bs">p/ negócio:</text><text x="287" y="86" class="bs">impacto no cliente</text><path d="M98,33 L170,60 M98,33 L287,60" class="ln dash"/>'),
 outbox:W(110,'<rect x="8" y="26" width="110" height="52" rx="8" class="sf"/><text x="63" y="44" class="bt">transação local</text><text x="63" y="58" class="bs">1. salva pedido</text><text x="63" y="70" class="bs">2. grava na outbox</text><path d="M118,52 L146,52" class="ln"/><path d="M146,52 L140,49 L140,55 Z" class="hd"/><rect x="148" y="38" width="80" height="28" rx="6" class="bx"/><text x="188" y="56" class="bs">relay lê outbox</text><path d="M228,52 L256,52" class="ln"/><path d="M256,52 L250,49 L250,55 Z" class="hd"/><rect x="258" y="38" width="74" height="28" rx="6" class="sf"/><text x="295" y="56" class="bs">publica na fila</text><text x="170" y="98" class="bs">banco e evento nunca divergem: ou salva os dois, ou nenhum</text>')
};

var T=[
{g:"01",n:"A visão do arquiteto",s:"o que muda na cabeça — antes de qualquer tecnologia",c:"var(--arc)",cs:"var(--arc-soft)",items:[
 {t:"O que um arquiteto faz",x:"o papel",oq:"Toma e comunica as decisões CARAS de mudar depois: fronteiras entre sistemas, tecnologias-chave, contratos, requisitos de qualidade.",ps:"Código se refatora em horas; uma fronteira errada entre serviços custa meses. O arquiteto existe para acertar (ou tornar reversível) o que é caro errar.",cf:"Pergunte sempre: 'quão caro é mudar isso depois?'. Caro → decida com cuidado, documente, envolva gente. Barato → deixe o time decidir e siga.",ex:"Decisões de arquiteto: dividir ou não em serviços; síncrono ou fila;\nqual banco; contrato entre times; SLO.\nNÃO é decisão de arquiteto: nome de variável, lib de utilitário."},
 {t:"Tudo é trade-off",x:"1ª lei",oq:"Não existe escolha só com vantagens. Toda decisão de arquitetura troca uma coisa por outra.",ps:"Quem promete 'a solução perfeita' ainda não achou o custo dela. Seu trabalho é escolher QUAL custo aceitar.",cf:"Para cada opção, force-se a escrever o que ela PIORA. Se você não achou a desvantagem, não entendeu a opção ainda.",ex:"Microservices: +deploy independente, +escala por parte\n                -rede, -consistência, -operação\nMonólito:     +simples, +transação fácil\n                -escala em bloco, -times se atropelam"},
 {t:"O porquê > o como",x:"2ª lei",oq:"Entender POR QUE algo foi decidido importa mais do que saber COMO implementar.",ps:"Tecnologias mudam; os porquês são o que te deixa avaliar a próxima tecnologia sem começar do zero.",cf:"Ao estudar qualquer coisa, pergunte: que problema isso resolve? o que existia antes? o que ele piora? Guarde o porquê, o como você acha na doc.",ex:"'Por que existe fila?' → desacoplar no tempo, absorver pico.\nSabendo isso, você avalia Kafka, SQS ou RabbitMQ em minutos —\nsão respostas diferentes ao MESMO porquê."},
 {t:"T-shaped: largura × profundidade",x:"o formato",oq:"O arquiteto sabe um pouco de quase tudo (largura) e muito de uma ou duas áreas (profundidade).",ps:"Você precisa AVALIAR qualquer camada (rede, banco, front, infra) sem ser o maior especialista em cada uma — para isso existem os especialistas do time.",cf:"Largura: entenda o problema que cada tecnologia resolve e seus limites. Profundidade: mantenha 1-2 áreas onde você desce até o mecanismo (a sua âncora de credibilidade).",ex:"Profundo: backend Java + dados (sua base).\nLargo: sabe o que é um CDN, quando usar fila, por que\nCORS existe, o custo de um JOIN — o suficiente p/ decidir.",dg:"tshape"},
 {t:"Pensamento sistêmico",x:"2ª ordem",oq:"Enxergar o efeito do efeito: o que acontece DEPOIS que a mudança entra, nas partes que ninguém olhou.",ps:"A maioria dos incidentes vem de efeitos de 2ª ordem: o retry que virou avalanche, o cache que escondeu o bug, o índice que travou o deploy.",cf:"Para toda proposta pergunte: o que acontece sob 10x a carga? quando a dependência cair? com dado duplicado? daqui a 2 anos com o triplo do time?",ex:"Mudança: 'adicionar retry nas chamadas'.\n2ª ordem: serviço degradado recebe 3x mais chamadas\n→ derruba de vez. Por isso retry exige backoff + circuit breaker."},
 {t:"Requisitos não-funcionais",x:"os -ilities",oq:"As qualidades do sistema: performance, disponibilidade, escalabilidade, segurança, manutenibilidade, custo, observabilidade.",ps:"Funcionalidade define O QUE o sistema faz; a arquitetura existe por causa do COMO BEM ele precisa fazer. São os -ilities que decidem a arquitetura.",cf:"Extraia números: 'rápido' → p99 < 300ms; 'sempre no ar' → 99,9% (43min de downtime/mês). Sem número, não dá pra projetar nem verificar.",ex:"Mesma funcionalidade, arquiteturas diferentes:\n- e-commerce local (100 users): monólito + Postgres\n- Black Friday nacional: cache, filas, réplicas, autoscaling\nO que mudou? Só os -ilities."},
 {t:"Contexto > dogma",x:"maturidade",oq:"Não existe 'melhor prática' universal — existe prática adequada a um contexto (tamanho do time, escala, prazo, maturidade).",ps:"Copiar a arquitetura da Netflix com um time de 5 pessoas é o erro clássico. O contexto deles justifica o custo; o seu, provavelmente não.",cf:"Antes de adotar qualquer padrão pergunte: qual dor ELES tinham? eu tenho essa dor? tenho o custo/time para sustentar? Se não: versão mais simples.",ex:"'Kafka porque a Netflix usa' ✗\n'Fila simples (SQS) porque nosso pico é 10x e\n perder mensagem é inaceitável' ✓ — dor real, ferramenta mínima."},
 {t:"Simplicidade deliberada",x:"Ockham",oq:"A arquitetura mais simples que atende os requisitos é a certa. Complexidade só entra paga por uma dor real e medida.",ps:"Cada peça a mais (serviço, banco, fila) é mais operação, mais falha possível, mais custo cognitivo. Complexidade não usada é dívida pura.",cf:"Comece simples e evolua sob dor: monólito modular → extrai um serviço quando doer; um banco → réplica quando doer; síncrono → fila quando doer.",ex:"Checklist antes de adicionar uma peça:\n1. que dor MEDIDA ela resolve?\n2. o que ela quebra/complica?\n3. dá pra resolver com o que já temos?\nSem resposta pra 1 → não entra."}
]},
{g:"02",n:"O padrão que se repete",s:"a anatomia de (quase) todo sistema — e como se achar em projeto novo",c:"var(--teal)",cs:"var(--teal-soft)",items:[
 {t:"A anatomia universal",x:"o mapa",oq:"Quase todo sistema segue o mesmo esqueleto: borda (DNS/LB/gateway) → aplicação (stateless, em réplicas) → estado (banco/cache/fila/arquivos) → bastidores (workers/jobs).",ps:"É o padrão que você intuiu: front, back, banco, pagamento… mudam os nomes, o esqueleto se repete. Quem conhece o esqueleto se acha em qualquer projeto.",cf:"Ao chegar num sistema novo, desenhe essas 4 faixas e vá encaixando cada peça que descobrir. O que não encaixar é exatamente o que merece pergunta.",ex:"Borda:      Route53 → ALB → API Gateway\nAplicação:  serviços/monólito (réplicas)\nEstado:     Postgres + Redis + SQS + S3\nBastidores: workers, crons, pipelines",dg:"anat"},
 {t:"A borda: por onde tudo entra",x:"camada 1",oq:"DNS resolve o nome; load balancer distribui; gateway concentra preocupações transversais (auth, rate limit, roteamento).",ps:"É onde se decide quem entra, quanto entra e para onde vai. Metade dos incidentes de 'sistema fora' se diagnostica aqui.",cf:"Saiba responder: qual o domínio? quem faz TLS? onde está o health check? tem rate limit? o gateway roteia por path ou por host?",ex:"Perguntas de chegada:\n- 'cai onde primeiro?' (LB? gateway? CDN?)\n- 'o que barra request inválido?'\n- '503 vem de onde?' (quase sempre: LB sem alvo saudável)"},
 {t:"A aplicação: stateless",x:"camada 2",oq:"Os serviços que processam requisições — projetados SEM estado local, para que qualquer réplica atenda qualquer request.",ps:"Stateless é o que permite escalar horizontal e matar/recriar instâncias sem dó (deploy, autoscaling, falha).",cf:"Estado de sessão vai para fora (Redis/token). Arquivo local é proibido (use blob storage). Se matar uma instância dói, tem estado escondido nela.",ex:"Teste mental: 'posso derrubar qualquer instância agora?'\nSe a resposta for 'não, aquela tem X na memória' —\nachou o problema de arquitetura."},
 {t:"O estado: cada dado no seu lugar",x:"camada 3",oq:"Banco relacional (fonte da verdade), cache (velocidade), fila (desacoplamento no tempo), blob storage (arquivos).",ps:"Errar o lugar do dado é a fonte nº 1 de dor: sessão no banco, arquivo no banco, verdade no cache…",cf:"Pergunte por dado: precisa de transação? → banco. É recomputável e lido demais? → cache. É trabalho para depois? → fila. É arquivo? → blob + URL no banco.",ex:"Cheiros de dado no lugar errado:\n- BLOB gigante no Postgres (vai p/ S3)\n- 'verdade' só no Redis (some no restart)\n- job pesado dentro do request (vai p/ fila)"},
 {t:"Os bastidores: workers & jobs",x:"camada 4",oq:"Processamento fora do ciclo request/response: consumidores de fila, crons, pipelines de dado, relatórios.",ps:"É a metade invisível do sistema — e onde vivem os incidentes silenciosos (job que parou há 3 dias e ninguém viu).",cf:"Mapeie: o que roda agendado? o que consome cada fila? o que acontece se rodar duas vezes (idempotência)? quem é avisado se falhar?",ex:"Perguntas de chegada:\n- 'que crons existem e onde estão agendados?'\n- 'se este worker morrer 1h, qual o impacto?'\n- 'este job pode rodar em duas instâncias ao mesmo tempo?'"},
 {t:"Roteiro de chegada num projeto",x:"o método",oq:"Sequência para 'pegar o jeito' de qualquer sistema novo em dias, não meses.",ps:"É a habilidade que você pediu: entrar em projeto desconhecido e se orientar rápido — ela é treinável e sempre igual.",cf:"1) Desenhe a anatomia (4 faixas). 2) Siga UMA requisição de ponta a ponta. 3) Ache a fonte da verdade de cada dado. 4) Levante os contratos com outros sistemas. 5) Pergunte 'o que mais quebra?' para quem opera.",ex:"Semana 1 em projeto novo:\nDia 1-2: anatomia + rodar local\nDia 3: seguir 1 request no código e nos logs\nDia 4: mapa de dados e integrações\nDia 5: incidentes recentes + dívidas conhecidas"},
 {t:"Seguir uma requisição",x:"a técnica",oq:"Escolher um fluxo importante (ex.: 'criar pedido') e rastreá-lo por todas as camadas: borda → controller → serviço → banco → fila → worker.",ps:"Uma requisição bem seguida ensina mais que uma semana de documentação: revela as camadas reais, os contratos reais e as gambiarras reais.",cf:"Use o código + logs + trace (se houver). Anote cada salto: quem chamou, com que contrato, o que persiste, o que dispara depois.",ex:"POST /pedidos\n→ gateway (auth) → PedidoController → PedidoService\n→ INSERT pedido → outbox → fila 'pedido-criado'\n→ worker: e-mail + estoque + faturamento"},
 {t:"Mapa de dependências",x:"quem chama quem",oq:"O diagrama de quais sistemas chamam quais, com o tipo de cada seta (sync/async) e a criticidade.",ps:"Revela os pontos únicos de falha, os acoplamentos escondidos e o raio de explosão de cada mudança.",cf:"Setas síncronas = acoplamento forte (se B cai, A sofre junto). Para cada seta pergunte: e se o destino cair? tem timeout? tem fallback?",ex:"pedido → (sync) pagamento   ← ponto crítico!\npedido → (async) e-mail      ← tolera atraso\npedido → (sync) estoque      ← precisa mesmo ser sync?"}
]},
{g:"03",n:"Domínio & regra de negócio",s:"o que você tem que entender do negócio — e como aprender rápido",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"Por que o domínio manda",x:"fundamento",oq:"A arquitetura serve ao negócio: as fronteiras certas dos sistemas são as fronteiras do DOMÍNIO, não da tecnologia.",ps:"Serviços divididos por camada técnica ('serviço de banco', 'serviço de API') acoplam tudo. Divididos por domínio (pedidos, pagamento, estoque), cada um evolui sozinho.",cf:"Antes de desenhar caixas, entenda: quais são as áreas do negócio? quem decide o quê? o que muda junto? O software espelha essa estrutura.",ex:"Pergunta-teste para uma fronteira:\n'uma mudança típica de negócio toca quantos serviços?'\n1 = fronteira boa. 4 = fronteira errada (foi cortada\npela técnica, não pelo domínio)."},
 {t:"Linguagem ubíqua",x:"vocabulário",oq:"Usar as MESMAS palavras do negócio no código, nas conversas e nos diagramas — sem tradução mental.",ps:"Metade dos bugs de regra de negócio são bugs de tradução: o negócio disse 'fatura', o código chama de 'invoice_order_v2'.",cf:"Monte um glossário com o especialista do domínio. Se uma palavra tem dois significados ('cliente' = comprador OU loja?), são dois conceitos — e talvez dois contextos.",ex:"Sinal de problema: a reunião fala 'apólice'\ne o código tem 'contract', 'policy' e 'agreement'\npara a mesma coisa. Padronize ou sofra."},
 {t:"Bounded contexts",x:"fronteiras",oq:"Regiões onde um modelo e uma linguagem valem. 'Produto' no catálogo (fotos, descrição) é diferente de 'produto' no estoque (quantidade, lote).",ps:"É a ferramenta mais prática do DDD para decidir onde cortar sistemas: cada contexto pode virar um módulo ou serviço.",cf:"Procure onde o significado das palavras muda — ali há uma fronteira. Entre contextos, traduza explicitamente (anti-corruption layer), não compartilhe o modelo.",ex:"Cliente no faturamento: CNPJ, condição de pagamento.\nCliente no suporte: histórico de tickets, humor.\nMesma pessoa, modelos diferentes → contextos diferentes."},
 {t:"Invariantes",x:"o que nunca pode",oq:"Regras que NUNCA podem ser violadas: saldo não fica negativo, assento não é vendido duas vezes, nota emitida não muda.",ps:"Invariantes definem onde você PRECISA de consistência forte (transação, lock) — e onde pode relaxar. É a pergunta técnica mais importante do domínio.",cf:"Para cada invariante: qual o custo de violar? (dinheiro? multa? constrangimento?). Custo alto → transação no mesmo agregado. Custo baixo → eventual + correção.",ex:"'Assento único por passageiro' → invariante forte:\nlock/transação na reserva.\n'Contador de visualizações exato' → relaxa:\neventual está ótimo, ninguém morre."},
 {t:"Eventos de domínio",x:"fatos",oq:"Coisas que ACONTECERAM no negócio, no passado: PedidoPago, EstoqueReservado, ClienteBloqueado.",ps:"Modelar por eventos revela o fluxo real do negócio e é a base da comunicação assíncrona entre contextos.",cf:"Dinâmica prática: event storming — o time e o negócio colam post-its dos eventos em ordem cronológica. As aglomerações revelam contextos; as dúvidas revelam regras mal entendidas.",ex:"Fluxo por eventos:\nPedidoCriado → PagamentoAprovado → EstoqueReservado\n→ PedidoFaturado → PedidoEnviado\nCada seta: quem precisa saber? sync ou async?"},
 {t:"Core, supporting, generic",x:"onde investir",oq:"Core domain = o que diferencia o negócio (merece seu melhor time e design). Supporting = necessário mas não diferencial. Generic = compre pronto.",ps:"Investir design sofisticado no lugar errado é desperdício clássico: DDD caprichado no cadastro e gambiarra no motor de preços (que era o core).",cf:"Pergunte ao negócio: 'o que faz o cliente escolher a gente?'. Isso é core — construa. Login, e-mail, boleto? Generic — use pronto (Auth0, SES, gateway).",ex:"Fintech de crédito:\ncore: motor de análise de risco (construir, caprichar)\nsupporting: gestão de contratos (simples e correto)\ngeneric: login, e-mails, assinatura digital (comprar)"},
 {t:"Como aprender um domínio novo",x:"o método",oq:"Roteiro para entender a regra de negócio de um setor que você nunca viu (seguros, logística, saúde…).",ps:"Arquiteto troca de domínio a vida toda. Quem tem método aprende em semanas o que levaria anos por osmose.",cf:"1) Siga o dinheiro (quem paga o quê, quando). 2) Mapeie o ciclo de vida da entidade central (pedido, apólice, carga). 3) Colecione os casos estranhos ('e se o cliente cancelar depois de pago?'). 4) Aprenda as regras EXTERNAS (lei, regulador). 5) Valide desenhando o fluxo para o especialista corrigir.",ex:"Perguntas de ouro para o especialista:\n- 'me conta o caso mais cabeludo do mês'\n- 'o que o sistema anterior fazia de errado?'\n- 'o que dá multa se errarmos?'\nAs exceções ensinam mais que o fluxo feliz."}
]},
{g:"04",n:"Comunicação entre sistemas",s:"contratos, sincronia e as decisões que definem o acoplamento",c:"var(--blue)",cs:"var(--blue-soft)",items:[
 {t:"Síncrono vs assíncrono",x:"a decisão nº 1",oq:"Síncrono: chama e espera a resposta (REST/gRPC). Assíncrono: publica e segue a vida (fila/evento).",ps:"É A decisão que define o acoplamento no tempo: no síncrono, se B cai, A sofre junto AGORA. No assíncrono, B pode se recuperar depois.",cf:"Precisa da resposta para continuar (consultar preço)? → sync. É um fato que outros reagem (pedido criado → enviar e-mail)? → async. Na dúvida entre serviços, prefira async.",ex:"checkout → (sync) gateway de pagamento (preciso do OK)\ncheckout → (async) e-mail, estoque, analytics\n(podem acontecer segundos depois sem drama)",dg:"sync"},
 {t:"Contratos & versionamento",x:"a promessa",oq:"O contrato (OpenAPI, schema de evento, .proto) é a promessa pública entre sistemas — mais importante que o código de cada lado.",ps:"Quebrar contrato quebra OUTROS times. A disciplina de contrato é o que permite times evoluírem independentes.",cf:"Regra: mudanças aditivas (campo novo opcional) são livres; mudanças que quebram (renomear, remover, mudar tipo) exigem versão nova + período de convivência + migração dos consumidores.",ex:"Seguro:  adicionar 'desconto' opcional\nQuebra:  renomear 'valor' → 'amount'\nProcesso: v2 no ar → consumidores migram → v1 morre\n(com métricas de quem ainda usa v1)"},
 {t:"REST · gRPC · eventos",x:"quando cada",oq:"REST: público, legível, cacheável. gRPC: interno, binário, rápido, streaming. Eventos: fatos para muitos interessados.",ps:"Cada mecanismo é uma resposta a um contexto — o sênior escolhe pelo lado de quem consome.",cf:"Borda (navegador/parceiros) → REST. Serviço↔serviço com volume/latência → gRPC. Fato que N times consomem → evento. Misturar os três no mesmo sistema é normal.",ex:"app mobile → REST (API pública)\npedidos → estoque: gRPC (interno, rápido)\n'PedidoPago' → tópico (faturamento, e-mail,\nanalytics consomem sem o pedidos saber)"},
 {t:"Filas & pub/sub",x:"desacoplar",oq:"Fila: cada mensagem é consumida por UM worker (distribuir trabalho). Pub/sub (tópico): cada mensagem vai para TODOS os inscritos (anunciar fato).",ps:"Absorve picos (buffer), desacopla no tempo e permite adicionar consumidores sem tocar no produtor.",cf:"Dimensione: o que acontece se a fila crescer 1M? (DLQ, alarme de idade da mensagem). Consumidor SEMPRE idempotente — mensagens duplicam.",ex:"fila 'gerar-nota': 5 workers dividem o trabalho\ntópico 'pedido-pago': e-mail, estoque e analytics\nrecebem cada um a sua cópia"},
 {t:"Idempotência",x:"obrigatória",oq:"Executar a mesma operação N vezes tem o mesmo efeito que uma: o pedido não duplica, a cobrança não repete.",ps:"Redes falham e retries acontecem — a MESMA mensagem/request VAI chegar duas vezes. Sem idempotência, retry = dado duplicado.",cf:"Chave de idempotência (o cliente manda um ID único; o servidor guarda e ignora repetição) ou operações naturalmente idempotentes (SET status='pago' vs incrementar).",ex:"POST /cobrancas\nIdempotency-Key: 7f3a-...\n1ª vez: cobra e guarda o resultado sob a chave\n2ª vez (retry): devolve o MESMO resultado, não cobra"},
 {t:"Outbox & entrega garantida",x:"consistência",oq:"Como garantir que 'salvei no banco' e 'publiquei o evento' aconteçam juntos — sem transação distribuída.",ps:"O bug clássico: salva o pedido, publica o evento… e o publish falha. Agora o mundo não sabe do pedido.",cf:"Padrão outbox: grava o evento numa tabela NA MESMA transação do dado; um relay lê a tabela e publica na fila. Ou o banco commitou os dois, ou nenhum.",ex:"BEGIN;\n  INSERT INTO pedido ...;\n  INSERT INTO outbox (evento_json) ...;\nCOMMIT;\n-- relay: SELECT da outbox → publica → marca enviado",dg:"outbox"},
 {t:"Acoplamento temporal",x:"conceito",oq:"Quando A só funciona se B estiver no ar NO MESMO INSTANTE. Cadeias síncronas somam disponibilidades (e latências).",ps:"3 serviços de 99,9% em cadeia síncrona = 99,7% no melhor caso. Cada seta sync na cadeia é disponibilidade a menos.",cf:"Audite as cadeias: quantos saltos síncronos tem o fluxo crítico? Dá para quebrar com fila? Dá para responder 'aceito, processando' (202) em vez de esperar tudo?",ex:"checkout → pagamento → antifraude → banco emissor\n4 saltos sync: a latência é a SOMA, a falha é o PRODUTO.\nAntifraude pode ser async? Já melhora tudo."},
 {t:"API Gateway & BFF",x:"a porta",oq:"Gateway: porta única com auth, rate limit e roteamento. BFF (Backend For Frontend): uma camada de API POR tipo de cliente (web, mobile).",ps:"Centraliza o transversal (sem repetir auth em cada serviço) e evita a 'API genérica' que não serve bem a ninguém.",cf:"Gateway não é lugar de regra de negócio (vira gargalo político). BFF agrega e adapta: o mobile pede 1 chamada, o BFF faz 4 por trás.",ex:"mobile → BFF mobile → (pedidos, cliente, promo)\nweb    → BFF web    → (os mesmos, com shape diferente)\ngateway na frente de todos: auth + rate limit"},
 {t:"Anti-corruption layer",x:"proteção",oq:"Uma camada de tradução entre o SEU modelo e o modelo de um sistema externo/legado.",ps:"Sem ela, o modelo bagunçado do legado vaza para dentro do seu domínio e o corrompe (daí o nome).",cf:"Um adaptador na fronteira: converte o dialeto deles para a sua linguagem ubíqua. Seu domínio nunca vê 'CD_CLI_TP2' — vê 'clienteVip'.",ex:"legado: { CD_CLI: 91, TP_SIT: 'A2' }\nACL traduz → Cliente(id=91, situacao=ATIVO)\nSe o legado mudar, só a ACL muda."}
]},
{g:"05",n:"Dados & consistência",s:"onde mora a verdade — e o preço de distribuí-la",c:"var(--orange)",cs:"var(--orange-soft)",items:[
 {t:"Fonte da verdade",x:"princípio",oq:"Para cada dado, UM lugar é o dono oficial. Todo o resto (cache, réplica, cópia em outro serviço) é derivado.",ps:"Quando dois lugares 'mandam' no mesmo dado, a divergência é questão de tempo — e ninguém sabe qual está certo.",cf:"Documente por dado: quem é o dono? quem pode escrever? os demais leem/copiam com que atraso aceitável?",ex:"preço: dono = catálogo. O checkout LÊ (e tolera\n30s de atraso via cache). Se o checkout também\nescrevesse preço → conflito garantido."},
 {t:"Consistência forte vs eventual",x:"o dial",oq:"Forte: todos veem o mesmo valor imediatamente (transação). Eventual: as cópias convergem com o tempo.",ps:"Consistência forte custa latência e disponibilidade; eventual custa raciocínio ('li o que acabei de escrever?'). Escolhe-se POR DADO, não por sistema.",cf:"Use as invariantes do domínio: violar custa caro (dinheiro/lei)? → forte. É contador, feed, recomendação? → eventual sem medo.",ex:"forte:    débito em conta, reserva de assento\neventual: likes, visualizações, catálogo replicado\nhíbrido:  pedido forte no serviço dono; réplica\n          eventual nos outros"},
 {t:"Transações distribuídas",x:"por que evitar",oq:"Tentar uma transação ACID abraçando vários serviços/bancos (2PC).",ps:"2PC trava recursos esperando todos confirmarem, escala mal e falha feio. A arquitetura moderna evita em vez de resolver.",cf:"Redesenhe: mantenha a invariante dentro de UM serviço (fronteira certa!), ou aceite consistência eventual coordenada por saga.",ex:"'Preciso de transação entre pedido e estoque'\n→ pergunta certa: a fronteira está certa?\n→ ou: dá pra reservar estoque com compensação\n   se o pagamento falhar? (saga)"},
 {t:"Saga",x:"padrão",oq:"Uma transação longa quebrada em passos locais, cada um com uma COMPENSAÇÃO que o desfaz.",ps:"É como se coordena um fluxo entre serviços sem transação global: se um passo falha, desfaz-se o que já foi feito.",cf:"Coreografada (cada serviço reage a eventos) ou orquestrada (um coordenador comanda). Orquestrada é mais fácil de entender e observar; escolha-a por padrão.",ex:"reservar estoque → cobrar → emitir nota\ncobrar falhou → compensa: libera estoque\n(cada passo idempotente + compensação idempotente)",dg:"saga"},
 {t:"CQRS & read models",x:"leitura ≠ escrita",oq:"Separar o modelo de escrita (normalizado, com invariantes) do modelo de leitura (desnormalizado, pronto para a tela).",ps:"A tela de listagem que faz 8 JOINs não precisa torturar o modelo transacional: uma projeção pré-montada serve em 5ms.",cf:"A escrita publica eventos; um projetor monta a visão de leitura (tabela desnormalizada, Elastic, cache). Aceita-se pequeno atraso na leitura.",ex:"escrita: INSERT pedido (3ª forma normal, invariantes)\nprojeção: tabela 'pedidos_dashboard' já com nome do\ncliente, total e status — a tela só faz SELECT *"},
 {t:"Cache: onde e como invalidar",x:"velocidade",oq:"Cópia rápida de dado caro de obter: no navegador, CDN, aplicação (Caffeine) ou distribuído (Redis).",ps:"Cache é o maior multiplicador de performance — e a invalidação é um dos dois problemas difíceis da computação.",cf:"Padrão: cache-aside com TTL (sempre tenha TTL!). Pergunte por dado: quão velho pode ser? o que acontece se todos expirarem juntos (estouro)? TTL com jitter.",ex:"produto: TTL 60s (tolera atraso)\npreço em promoção: invalidação ativa no update + TTL curto\nsaldo: NUNCA cacheia (invariante forte)"},
 {t:"Sharding & particionamento",x:"escala",oq:"Dividir os dados entre máquinas por uma chave (user_id, região) quando um servidor não dá conta.",ps:"É o último degrau da escala de dados — poderoso e caro: consultas cross-shard, rebalanceamento, complexidade para sempre.",cf:"Antes: índice → cache → réplicas de leitura. Se chegar ao shard: escolha a chave pelo padrão de acesso (a maioria das queries deve conter a chave) e tema o hot shard.",ex:"chave por user_id: 'minhas ordens' cai num shard só ✓\nrelatório global: varre todos os shards ✗ (mande\npara o analítico, não pro transacional)"},
 {t:"Dados entre serviços",x:"duplicar ou pedir",oq:"O serviço B precisa do nome do cliente (dono: A). Consulta toda vez (sync) ou mantém uma cópia local (via eventos)?",ps:"Consultar acopla no tempo e adiciona latência; copiar traz consistência eventual e custo de sincronizar. É trade-off recorrente.",cf:"Dado estável e lido demais → copie via eventos (cache local de longa duração). Dado volátil ou raro → consulte. Nunca: dois donos.",ex:"faturamento guarda cópia de nome/CNPJ do cliente\n(atualizada por evento ClienteAtualizado).\nSe A cair, faturamento segue faturando."}
]},
{g:"06",n:"Segurança",s:"pensar como quem ataca, projetar como quem defende",c:"var(--red)",cs:"var(--red-soft)",items:[
 {t:"Mentalidade & superfície",x:"fundamento",oq:"Segurança é reduzir superfície de ataque (tudo que está exposto) e assumir que qualquer camada pode ser violada (defesa em profundidade).",ps:"O arquiteto não 'adiciona segurança no fim' — desenha o sistema para que o dano de uma falha seja limitado.",cf:"Para cada componente: precisa estar exposto? com que permissões roda? se for comprometido, o que o atacante alcança? Camadas: borda, rede, app, dado.",ex:"banco NUNCA exposto à internet (só a app alcança)\nadmin atrás de VPN + MFA\ncada serviço com a MENOR permissão que funciona"},
 {t:"AuthN vs AuthZ",x:"a distinção",oq:"Autenticação: quem é você (login, token). Autorização: o que você PODE fazer (papéis, permissões).",ps:"A falha nº 1 em APIs é autorização quebrada: o usuário autenticado acessa recurso dos outros (IDOR) só trocando o ID na URL.",cf:"Toda rota valida DONO do recurso, não só o login. Autorização centralizada (no gateway/serviço), nunca 'na tela' (o front esconde, o back garante).",ex:"GET /pedidos/123\n✗ 'está logado? ok, devolve'\n✓ 'está logado E o pedido 123 é dele/do papel dele?'"},
 {t:"OAuth2 · OIDC · SSO",x:"o padrão",oq:"OAuth2 delega autorização; OIDC adiciona identidade (login); SSO = um login para vários sistemas via um Identity Provider.",ps:"É o padrão de identidade de tudo hoje — o arquiteto precisa saber os fluxos, não decorar specs.",cf:"API stateless: valida JWT (assinatura + expiração + audience). App web: authorization code + PKCE. Nunca aceite token sem validar emissor/assinatura.",ex:"usuário → IdP (login+MFA) → token assinado\n→ app envia Bearer → API valida assinatura\nsem consultar o IdP a cada request"},
 {t:"Zero trust & least privilege",x:"princípios",oq:"Zero trust: não confie porque 'está na rede interna' — toda chamada se autentica. Least privilege: cada peça só tem a permissão mínima.",ps:"O perímetro morreu: um serviço comprometido dentro da rede não pode virar chave-mestra.",cf:"Serviço↔serviço com mTLS/token próprio. IAM por serviço (não uma role admin genérica). Revise permissões que 'sobraram'.",ex:"worker de e-mail: pode ler a fila de e-mail. Só.\nSe comprometido: manda spam (ruim), mas NÃO lê\no banco de clientes (catástrofe evitada)."},
 {t:"Segredos",x:"higiene",oq:"Senhas, tokens e chaves ficam em cofre (Vault/Secrets Manager), nunca em código, repositório ou imagem.",ps:"Segredo commitado fica no histórico do Git para sempre e é caçado por bots em minutos.",cf:"Injete em runtime (env/cofre), rotacione, e trate vazamento como incidente (revogar já, não 'apagar o commit').",ex:"✗ application.yml com senha no repo\n✓ ${DB_PASSWORD} vindo do Secrets Manager,\n  rotacionado, com acesso auditado"},
 {t:"OWASP: os ataques clássicos",x:"conhecer",oq:"Injeção (SQL/comando), XSS, CSRF, IDOR, desserialização insegura, dependências vulneráveis.",ps:"São 90% dos ataques reais — e todos têm defesa padrão conhecida.",cf:"Injeção → prepared statements. XSS → escape de saída + CSP. IDOR → autorização por recurso. Dependências → scanner de CVE no CI.",ex:"a cada PR o pipeline roda:\n- análise estática (SAST)\n- verificação de dependências (CVEs)\nfalhou → não entra. Segurança como portão, não evento."},
 {t:"Threat modeling",x:"dinâmica",oq:"Exercício estruturado: desenhar o sistema e perguntar 'o que pode dar errado aqui?' antes de construir.",ps:"Achar a falha no quadro custa uma reunião; achar em produção custa um incidente (ou uma multa).",cf:"Pegue o diagrama, marque as fronteiras de confiança (onde o dado cruza de uma zona para outra) e aplique STRIDE em cada uma: spoofing, tampering, repudiation, info disclosure, DoS, elevation.",ex:"fronteira: app → S3 de uploads\n- upload de arquivo malicioso? (validar tipo/scan)\n- URL adivinhável? (pre-signed com expiração)\n- quem pode ler? (bucket privado, nunca público)"},
 {t:"Cripto: trânsito & repouso",x:"dados",oq:"TLS em toda comunicação (trânsito); criptografia de disco/campo para dado sensível (repouso); hash lento para senha.",ps:"LGPD e vazamentos: o dado roubado criptografado com chave fora do alcance vale muito menos.",cf:"TLS até internamente (mTLS entre serviços). Campos sensíveis (documento, saúde) cifrados com chave no KMS. Senha: BCrypt/Argon2, nunca reversível.",ex:"em trânsito: TLS 1.2+ em tudo, sem exceção interna\nem repouso: disco cifrado + campo CPF cifrado (KMS)\nsenha: hash Argon2 — nem o DBA recupera"}
]},
{g:"07",n:"Resiliência",s:"projetar para a falha — porque ela vem",c:"var(--java)",cs:"var(--java-soft)",items:[
 {t:"Falha é normal",x:"mentalidade",oq:"Em sistema distribuído, rede falha, dependência cai e disco enche — o design parte disso, não torce contra.",ps:"A diferença entre um blip de 30s e um incidente de 4h é quase sempre decisão de arquitetura tomada ANTES.",cf:"Para cada dependência pergunte: quando (não 'se') ela falhar, o que o usuário vê? O sistema degrada com elegância ou desaba em cascata?",ex:"recomendações caiu →\n✗ página de produto dá 500\n✓ página carrega sem o carrossel 'você também pode gostar'\n(o usuário nem percebe)"},
 {t:"Timeout",x:"o mais importante",oq:"Tempo máximo de espera em TODA chamada externa (conexão e resposta).",ps:"O padrão de muitos clients é infinito: uma dependência lenta prende suas threads até derrubar TUDO. Timeout é a defesa mais barata que existe.",cf:"Defina pelo SLO do fluxo (se a página promete 1s, a chamada interna não pode esperar 30s). Orce: timeout de fora ≥ soma dos de dentro.",ex:"connectTimeout: 300ms\nreadTimeout: 800ms\n(e um budget total do request: 2s — estourou,\nresponde erro/fallback, não pendura o usuário)"},
 {t:"Retry com backoff + jitter",x:"cuidado",oq:"Tentar de novo falhas transitórias — esperando mais a cada tentativa (backoff) com aleatoriedade (jitter).",ps:"Retry imediato e sincronizado de mil clientes é um DDoS interno contra a dependência que já está mal.",cf:"Só em erro transitório (timeout, 503 — nunca 400), poucas tentativas (2-3), backoff exponencial + jitter, e SÓ em operação idempotente.",ex:"tentativa 1 → falhou\nespera 200ms±rand → 2 → falhou\nespera 800ms±rand → 3 → desiste e usa fallback\n(sem jitter, todos batem juntos de novo)"},
 {t:"Circuit breaker",x:"padrão",oq:"Disjuntor: depois de N falhas, para de chamar a dependência por um tempo e falha rápido.",ps:"Protege suas threads (não esperam por um morto) e dá fôlego para a dependência se recuperar.",cf:"Estados: fechado (normal) → aberto (falha rápido) → meio-aberto (testa 1). Sempre com um fallback definido: o que responder enquanto está aberto?",ex:"pagamento fora → breaker abre →\ncheckout responde 'pedido aceito, cobraremos em\nseguida' (fila) em vez de erro na cara do cliente",dg:"cb"},
 {t:"Bulkhead",x:"isolamento",oq:"Compartimentar recursos (pools de conexão/threads) por dependência, como os compartimentos de um navio.",ps:"Sem isso, UMA dependência lenta consome todas as threads e afunda funcionalidades que nem dependiam dela.",cf:"Pool separado por integração crítica; limite de concorrência por rota; o vazamento fica contido no compartimento.",ex:"pool 'consulta-cep': 10 conexões\npool 'pagamento': 30\ncep lento esgota SEU pool — o checkout segue vivo"},
 {t:"Degradação graciosa",x:"UX da falha",oq:"Planejar VERSÕES REDUZIDAS da experiência para quando partes do sistema falham.",ps:"O usuário perdoa um recurso a menos; não perdoa a tela branca.",cf:"Por funcionalidade: qual o mínimo aceitável? busca cai → mostra categorias; recomendação cai → mostra mais vendidos; preço dinâmico cai → usa o último conhecido (se o domínio permitir!).",ex:"feature flags de degradação prontas:\n'modo_sem_busca', 'checkout_simplificado'\nligadas por alarme ou à mão durante incidente"},
 {t:"Backpressure & load shedding",x:"autodefesa",oq:"Backpressure: sinalizar 'estou cheio' para quem envia. Load shedding: descartar o excesso para salvar o essencial.",ps:"Aceitar tudo sob pico = morrer com fila infinita e latência explodindo. Melhor atender 80% bem que 100% mal.",cf:"Limite de fila com rejeição (429 + Retry-After), prioridade por rota (checkout > relatório), autoscaling com limite.",ex:"pico 5x: sistema responde 429 para 'exportar CSV'\ne mantém checkout saudável.\nSem shedding: TUDO fica com 30s de latência."},
 {t:"DR: RTO, RPO & backups",x:"o pior dia",oq:"Disaster recovery: RTO = em quanto tempo volta; RPO = quanto dado pode perder. Backups + plano testado.",ps:"Backup não testado é loteria. Região caindo, ransomware, DROP TABLE por engano — o plano é para isso.",cf:"Defina RTO/RPO com o negócio (custam dinheiro!). Teste restore periodicamente (game day). Backups isolados (conta/região separada — ransomware apaga backup acessível).",ex:"RPO 5min = replicação contínua + WAL\nRTO 1h = infra como código + restore ensaiado\n'a última vez que RESTAURAMOS um backup foi quando?'\n— pergunta de arquiteto"}
]},
{g:"08",n:"Observabilidade",s:"ver o sistema por dentro — antes do cliente reclamar",c:"var(--pink)",cs:"var(--pink-soft)",items:[
 {t:"Os três pilares",x:"o mapa",oq:"Métricas (números agregados no tempo), logs (eventos detalhados), traces (o caminho de cada requisição entre serviços).",ps:"Cada um responde uma pergunta: métrica = 'algo está errado?'; trace = 'onde?'; log = 'por quê?'.",cf:"O fluxo de diagnóstico é sempre: alarme de métrica → abre o trace da requisição lenta/errada → lê o log daquele ponto exato. Instrumente pensando nesse caminho.",ex:"alarme: p99 do checkout subiu →\ntrace: 80% do tempo no serviço de frete →\nlog do frete: timeout na transportadora X\n(3 minutos, sem achismo)",dg:"o11y"},
 {t:"Logs estruturados & correlação",x:"base",oq:"Logs em JSON com campos padronizados e um traceId que amarra tudo que aconteceu numa mesma requisição, em todos os serviços.",ps:"Texto solto não se busca nem se cruza. Sem correlação, cada serviço conta uma história separada.",cf:"Padronize campos (traceId, userId, serviço, duração). O traceId nasce na borda e se propaga em TODA chamada (header) e mensagem (metadado).",ex:"{ ts, level:'ERROR', traceId:'a1b2',\n  svc:'pagamento', msg:'gateway timeout', ms:3012 }\nbusca: traceId=a1b2 → a requisição inteira,\nem todos os serviços, em ordem"},
 {t:"Métricas: RED & USE",x:"o que medir",oq:"Para serviços, RED: Rate (tráfego), Errors (erros), Duration (latência em percentis). Para recursos, USE: Utilization, Saturation, Errors.",ps:"Com RED por serviço você enxerga a saúde do sistema inteiro num painel. Percentil (p95/p99) — média esconde a dor.",cf:"Todo serviço expõe RED por endpoint. p99 importa mais que média: 1% dos usuários sofrendo é MUITA gente. Dashboards por fluxo de negócio, não só por máquina.",ex:"checkout: 120 req/s · 0,2% erro · p99 480ms\nfila nota: idade da msg mais velha: 3s (saturação!)\nCPU 60% mas fila crescendo = problema mesmo assim"},
 {t:"Tracing distribuído",x:"o caminho",oq:"Cada requisição ganha um trace com spans (um por operação), mostrando a cascata de chamadas e onde o tempo foi gasto.",ps:"Em arquitetura distribuída é a ÚNICA forma de responder 'onde está lento' sem adivinhar.",cf:"OpenTelemetry como padrão (instrumentação automática + spans manuais nos pontos de negócio). Propague contexto também pelas filas.",ex:"trace do POST /pedidos (total 1,2s):\n gateway 5ms → pedidos 40ms → [pagamento 900ms!]\n → estoque 30ms → fila 2ms\nculpado visível sem abrir um log sequer"},
 {t:"SLI · SLO · error budget",x:"a promessa",oq:"SLI: o que se mede (p99, taxa de sucesso). SLO: a meta (99,9% no mês). Error budget: o quanto pode falhar dentro da meta.",ps:"Transforma 'estabilidade' de opinião em número — e decide a briga feature vs confiabilidade sem gritaria.",cf:"Defina SLOs com o negócio nos fluxos críticos. Budget saudável → acelere features. Budget estourando → congela lançamento, prioriza estabilidade. É regra combinada, não bronca.",ex:"SLO: 99,9%/mês → budget: 43min de indisponibilidade\ngastou 40min na 1ª quinzena?\n→ a própria regra segura o deploy arriscado",dg:"slo"},
 {t:"Alertas por sintoma",x:"acordar certo",oq:"Alertar pelo que o USUÁRIO sente (erro, latência, fila parada), não por causa interna (CPU alta).",ps:"Alerta demais = fadiga = alarme real ignorado. CPU 90% com usuários felizes não é incidente.",cf:"Cada alerta: acionável (diz o que fazer), ligado a SLO, com runbook. Revise mensalmente: alerta que nunca gerou ação morre.",ex:"✗ 'CPU > 80%' às 3h (e daí?)\n✓ 'taxa de erro do checkout > 1% por 5min\n   → runbook: verificar gateway de pagamento'"},
 {t:"Postmortem sem culpa",x:"aprender",oq:"Análise estruturada pós-incidente: linha do tempo, causas (plural), o que detectou/atrasou, ações com dono e prazo.",ps:"Punir quem errou garante que o próximo erro será escondido. O postmortem transforma incidente em melhoria de sistema.",cf:"Foco em COMO o sistema permitiu o erro (falta de guard-rail, alarme, teste), nunca em QUEM. Ações viram backlog priorizado — postmortem sem ação é teatro.",ex:"incidente: deploy derrubou pagamentos 40min\nações: canary obrigatório p/ serviço crítico,\nalarme de taxa de erro por versão, rollback 1-clique\n(quem apertou o botão NÃO é a causa)"}
]},
{g:"09",n:"Infra & entrega",s:"o caminho até produção — e o custo de rodar",c:"var(--teal)",cs:"var(--teal-soft)",items:[
 {t:"CI/CD como portão",x:"fundação",oq:"Pipeline que compila, testa, verifica (segurança, qualidade) e entrega — a cada mudança.",ps:"É o guard-rail que permite ir rápido com segurança: o que não passa no portão, não entra.",cf:"Etapas: build → testes → análise (SAST/CVE) → artefato imutável → deploy por ambiente. O MESMO artefato promove de staging a prod (nunca rebuilda).",ex:"PR → CI (5min): testes + lint + CVEs\nmerge → imagem v1.2.3 → staging (auto)\n→ prod (aprovação/canary)\nartefato imutável: o que testou é o que roda"},
 {t:"Deploy sem downtime",x:"estratégias",oq:"Rolling (troca instâncias aos poucos), blue-green (dois ambientes, vira a chave), canary (nova versão para 1-5% do tráfego primeiro).",ps:"Deploy é a causa nº 1 de incidente — a estratégia define o raio de explosão e a velocidade do rollback.",cf:"Serviço crítico → canary com métricas comparadas (erro/latência da versão nova vs velha) e rollback automático. Migração de banco SEMPRE compatível com a versão anterior (expand/contract).",ex:"canary 5% por 15min:\np99 e erros iguais? → 50% → 100%\npiorou? → rollback automático\n(banco: adicionar coluna ✓; renomear = 2 passos)"},
 {t:"Feature flags",x:"desacoplar",oq:"Separar DEPLOY (código no ar) de RELEASE (funcionalidade ligada): a flag liga/desliga por usuário, %, ambiente.",ps:"Permite mergear código incompleto desligado, testar em produção com 1% e desligar feature bugada em segundos sem deploy.",cf:"Flags de release (temporárias — apague depois!), flags operacionais (degradação), flags de experimento (A/B). Governança: flag esquecida vira dívida.",ex:"lançamento: flag 'novo_checkout' 1% → 10% → 100%\nincidente às 18h? desliga a flag em 10s\n(rollback de deploy levaria 15min)"},
 {t:"Containers & orquestração",x:"o que saber",oq:"Container empacota app+dependências; o orquestrador (Kubernetes/ECS) mantém N réplicas vivas, faz deploy e escala.",ps:"O arquiteto não opera o cluster, mas projeta PARA ele: probes, recursos, tolerância a morte de instância.",cf:"Entenda: liveness vs readiness (reiniciar vs tirar do tráfego), requests/limits de recurso (OOMKill!), graceful shutdown (terminar o request antes de morrer).",ex:"app precisa: responder /health honesto,\naguentar SIGTERM (drenar), subir em segundos,\nnão guardar nada local — o resto é o orquestrador"},
 {t:"Infra como código",x:"IaC",oq:"Declarar a infraestrutura (rede, banco, filas, permissões) em código versionado (Terraform), aplicado por pipeline.",ps:"Infra clicada no console é irreproduzível, sem auditoria e diverge entre ambientes ('funciona em staging…').",cf:"Tudo em código, revisado em PR, aplicado por pipeline. Ambientes idênticos por definição. Console em produção: só leitura.",ex:"nova fila: PR no Terraform → review → apply\nauditoria grátis: git log responde 'quem criou\nessa role e quando' em segundos"},
 {t:"Gerenciado vs próprio",x:"decisão",oq:"Usar serviço gerenciado (RDS, SQS, ElastiCache) ou operar você mesmo (Postgres em VM, Kafka próprio)?",ps:"O gerenciado custa mais por mês e MUITO menos em gente e incidente. Operar bem um banco/Kafka é um time inteiro.",cf:"Padrão: gerenciado, a menos que (a) o custo em escala inviabilize ou (b) você precise de algo que o gerenciado não dá. Revise quando a escala mudar.",ex:"time de 8 devs: RDS, SQS, ECS — foco no produto\nfase 'Kafka próprio pra economizar' termina em\nincidente de 6h num sábado"},
 {t:"Custo como requisito",x:"FinOps",oq:"Tratar custo de cloud como requisito arquitetural: medido por serviço, revisado, projetado.",ps:"Arquitetura que dobra a conta sem dobrar o valor é arquitetura ruim — e Staff+ é cobrado por isso.",cf:"Tagueie recursos por time/serviço, olhe o relatório mensal, conheça os padrões caros (NAT gateway, egress, logs sem retenção, instância parada) e projete o custo ANTES de adotar.",ex:"decisão: guardar eventos brutos 2 anos?\nS3 tiered: ~$X/mês ✓\nno Postgres: ~$40X/mês ✗\nmesma feature, projeto 40x mais barato"}
]},
{g:"10",n:"Decisão & documentação",s:"como se decide e registra — a memória da arquitetura",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"ADR",x:"a ferramenta nº 1",oq:"Architecture Decision Record: documento curto (1 página) que registra UMA decisão, seu contexto, as opções e as consequências.",ps:"Em 2 anos ninguém lembra POR QUE se escolheu X — e o time novo desfaz decisões boas por não conhecer o contexto.",cf:"Formato: contexto → opções consideradas (com trade-offs!) → decisão → consequências (inclusive as ruins). Numerado, versionado no repo, imutável (nova decisão = novo ADR).",ex:"ADR-014: fila SQS em vez de Kafka\ncontexto: pico 10x, sem necessidade de replay\nopções: Kafka (replay, +operação), SQS (simples)\ndecisão: SQS · consequência: sem replay — revisar\nse analytics precisar de histórico"},
 {t:"C4 model",x:"diagramas",oq:"Quatro níveis de zoom: contexto (sistema e vizinhos) → contêineres (apps, bancos) → componentes → código.",ps:"Um diagrama para cada audiência: executivo vê contexto, dev novo vê contêiner. O erro clássico é UM diagrama gigante que não serve a ninguém.",cf:"Mantenha vivos só os níveis 1 e 2 (os que valem o custo de atualizar). Cada caixa: nome + tecnologia + responsabilidade em 1 linha. Setas com verbo ('publica evento', não só uma linha).",ex:"reunião com negócio → diagrama de CONTEXTO\nonboarding de dev → CONTÊINERES\ndiscussão de refactor → COMPONENTES do serviço",dg:"c4"},
 {t:"RFC / design doc",x:"decidir junto",oq:"Documento de proposta ('quero fazer X assim') circulado para comentários ANTES de construir.",ps:"Escala a revisão de arquitetura: 10 pessoas criticam o design em paralelo, por escrito, sem reunião de 2h.",cf:"Estrutura: problema → requisitos → proposta → alternativas descartadas (e por quê) → riscos → plano. Prazo para comentários; discordância registrada; decisão tem dono.",ex:"RFC: 'migrar sessões para Redis'\ncomentários no doc por 1 semana →\nsegurança apontou TTL, infra apontou failover →\nversão final vira o plano (e o ADR)"},
 {t:"Análise de trade-offs",x:"o método",oq:"Comparar opções de forma estruturada: critérios com peso × notas por opção — em vez de 'eu acho'.",ps:"Torna a decisão defensável e revisável: qualquer um vê POR QUE a opção B venceu, e o que mudaria a conclusão.",cf:"Escolha 4-6 critérios que importam NESTE contexto (custo, operação, latência, maturidade do time…), dê pesos, pontue com o time. O exercício vale mais que o número final.",ex:"           peso  SQS  Kafka\noperação    3     5    2\nreplay      2     1    5\ncusto       2     4    2\n→ SQS 25 × Kafka 20 (e sabemos o que mudaria isso)"},
 {t:"Fitness functions",x:"guard-rails",oq:"Testes automatizados DA ARQUITETURA: regras que quebram o build se violadas (dependência proibida, latência, cobertura).",ps:"Arquitetura combinada em reunião erode em 6 meses; a testada no CI se mantém sozinha.",cf:"ArchUnit para dependências entre pacotes/camadas; testes de performance com limite; verificação de contratos. O guard-rail educa melhor que o code review.",ex:"@ArchTest: 'domínio não importa infraestrutura'\n@ArchTest: 'controllers não acessam repositório direto'\npipeline: p99 do endpoint crítico < 300ms senão falha"},
 {t:"Spike / prova de conceito",x:"reduzir risco",oq:"Experimento curto e descartável para responder UMA pergunta técnica antes de apostar.",ps:"Meio dia de spike evita 3 meses na direção errada. Decidir por benchmark alheio é terceirizar o risco.",cf:"Defina a pergunta e o critério ANTES ('aguenta 5k msg/s com p99<50ms?'). Timebox. O código é descartável — o resultado vira input do ADR.",ex:"pergunta: 'gRPC reduz p99 vs REST no nosso caso?'\nspike de 2 dias com carga real → 40% menor\n→ decisão embasada, código do spike no lixo"},
 {t:"Strangler fig",x:"evoluir legado",oq:"Modernizar um sistema legado estrangulando-o aos poucos: rotas migram uma a uma para o novo, até o velho morrer.",ps:"O 'big bang rewrite' falha com frequência assustadora: 18 meses sem entregar valor e o legado ainda mudando.",cf:"Um proxy na frente decide rota a rota (velho ou novo). Migre por valor/risco. Cada rota migrada entrega valor JÁ e é reversível.",ex:"mês 1: /consultas → novo (leitura, baixo risco)\nmês 3: /cadastro → novo\nmês 8: legado atende só 2 rotas → aposenta\n(sempre reversível via proxy)"}
]},
{g:"11",n:"Pessoas & influência",s:"a metade do trabalho que não é código — oratória incluída",c:"var(--yellow)",cs:"var(--yellow-soft)",items:[
 {t:"Comunicar é o trabalho",x:"a virada",oq:"De Staff pra cima, seu impacto viaja por palavras (docs, apresentações, conversas) mais do que por código.",ps:"A melhor arquitetura mal comunicada perde para a mediana bem comunicada — porque arquitetura só existe se os times a seguirem.",cf:"Trate comunicação como skill técnica: estruture, ensaie, peça feedback, itere. É treinável como qualquer API.",ex:"seu design brilhante rejeitado em reunião\nnão é (só) política: é mensagem errada\npara a audiência errada no formato errado."},
 {t:"Adaptar a mensagem",x:"audiência",oq:"A MESMA decisão explicada diferente: dev quer o trade-off técnico; gestor quer prazo/risco; negócio quer impacto no cliente e custo.",ps:"Falar de 'idempotência de consumidores' para o diretor comercial é jogar a reunião fora — e seu crédito junto.",cf:"Antes de falar: quem é a audiência? o que ELES perdem/ganham? que decisão preciso deles? Comece pela conclusão, detalhe sob demanda.",ex:"mesma migração:\ndev: 'outbox + saga, expand/contract no schema'\ngestor: '6 semanas, risco médio, sem downtime'\nnegócio: 'zero impacto no cliente; destrava o Pix'",dg:"msg"},
 {t:"Oratória técnica",x:"apresentar",oq:"Estrutura para apresentar qualquer proposta: problema → impacto → opções → recomendação → pedido claro.",ps:"Apresentação técnica sem estrutura vira tour de diagrama — e ninguém decide nada no final.",cf:"Abra com o problema em 1 frase e POR QUE importa agora. 1 slide = 1 ideia. Termine com pedido explícito ('preciso de aprovação para X'). Ensaie a abertura e o fechamento.",ex:"ruim: 20 slides de arquitetura, 'é isso'\nbom: 'perdemos R$X/mês com timeouts (problema).\n3 opções, recomendo B por custo/risco.\nPreciso de 2 devs por 6 semanas. Aprovamos?'"},
 {t:"Convencer sem autoridade",x:"influência",oq:"Staff/Principal raramente MANDA — influencia por credibilidade, dados e alinhamento de interesses.",ps:"Impor decisão gera complacência ('faz aí o que ele falou') e sabotagem passiva. Adesão genuína executa melhor.",cf:"Entenda o incentivo de cada parte (o que ELES ganham?). Traga dados/spike, não opinião. Ceda no acessório para ganhar no essencial. Plante a ideia e deixe outros a levarem adiante.",ex:"time resiste à migração →\nem vez de escalar pro diretor: mostre o custo atual\nEM NÚMEROS, proponha piloto pequeno no serviço\nque mais dói PARA ELES. O piloto convence sozinho."},
 {t:"Facilitar > impor",x:"decisão em grupo",oq:"O arquiteto conduz o grupo à decisão: enquadra o problema, expõe trade-offs, força a escolha — sem precisar 'vencer'.",ps:"Decisão construída pelo grupo é executada com vontade; a imposta é executada com má vontade (e 'eu avisei' na primeira falha).",cf:"Separe divergir (todas as vozes, inclusive as quietas) de decidir (dono claro, prazo claro). Discordou? Registra a objeção e comita ('disagree and commit').",ex:"reunião de decisão:\n1. problema e critérios (5min)\n2. opções e trade-offs (20min, todos falam)\n3. decisão pelo dono + objeções REGISTRADAS no ADR\nsem 'vamos pensar mais' eterno"},
 {t:"Mentoria & multiplicação",x:"alavancagem",oq:"Elevar o nível dos outros: pair em decisão, review que ensina, delegar com contexto, criar material que escala.",ps:"O teto do seu impacto sozinho é 1 pessoa. Staff+ é medido pelo que o SISTEMA de pessoas produz por sua causa.",cf:"Delegue a decisão inteira (com contexto e guard-rails), não a tarefa. Review pergunta ('o que acontece se X falhar?') em vez de mandar. Documente o raciocínio, não só a conclusão.",ex:"em vez de desenhar a solução para o pleno:\n'aqui está o problema, os requisitos e 2 riscos\nque eu vejo. Traz uma proposta quarta?'\n→ ele cresce; você escala"},
 {t:"Conflito técnico saudável",x:"tensão boa",oq:"Discordância sobre IDEIAS com respeito às pessoas — e mecanismos para não virar guerra ou silêncio.",ps:"Time que não discorda produz arquitetura medíocre por consenso morno; time que briga produz rotatividade.",cf:"Ataque a proposta, nunca a pessoa ('essa opção degrada X' vs 'você não entende'). Steelman: descreva a posição do outro melhor que ele antes de criticar. Critérios explícitos despersonalizam.",ex:"discussão travada REST vs eventos →\n'ok: nossos critérios são latência, autonomia dos\ntimes e operação. Vamos pontuar juntos.'\n(a matriz decide, não o ego)"},
 {t:"Escrever bem",x:"a skill secreta",oq:"Docs claros, curtos e estruturados: RFCs, ADRs, propostas, postmortems, até mensagens de Slack.",ps:"Escrever é pensar: quem escreve claro decide claro. E o doc escala seu raciocínio para gente que você nunca vai conhecer.",cf:"Conclusão primeiro (BLUF). Parágrafos curtos. Títulos que contam a história sozinhos. Releia cortando 30%. Escreva para o leitor apressado.",ex:"antes: 4 parágrafos de contexto até o pedido\ndepois: 'Proponho migrar X para Y até março.\nMotivo: R$Z/mês + 2 incidentes. Detalhes abaixo.'\n(o diretor lê 3 linhas e decide)"}
]},
{g:"12",n:"Carreira: Staff & Principal",s:"o que muda em cada degrau — e como chegar lá",c:"var(--red)",cs:"var(--red-soft)",items:[
 {t:"A escada",x:"o mapa",oq:"Sênior: referência de UM time. Staff: impacto em VÁRIOS times (problemas sem dono claro). Principal: direção técnica da ORGANIZAÇÃO.",ps:"Cada degrau muda o QUE é o trabalho, não só o tamanho: mais escopo, mais ambiguidade, mais gente, menos código.",cf:"A pergunta de cada nível: Sênior 'como fazemos isso bem?' · Staff 'o que deveríamos fazer (e o que NÃO)?' · Principal 'para onde a tecnologia da empresa vai em 2 anos?'",ex:"mesmo problema (lentidão):\nsênior: otimiza o serviço do time\nstaff: descobre que 4 times sofrem igual e cria\na plataforma de cache comum\nprincipal: muda a estratégia de dados da empresa",dg:"ladder"},
 {t:"Escopo & alavancagem",x:"a moeda",oq:"Alavancagem = impacto ÷ esforço. Subir de nível é escolher trabalho de alavancagem cada vez maior.",ps:"8h codando = impacto de 1 dev. 8h destravando a decisão que bloqueava 3 times = impacto de 15 devs.",cf:"Pergunte semanalmente: 'qual é a coisa que SÓ EU posso destravar e que afeta mais gente?'. Plataforma, padrão, decisão, doc — costumam bater feature individual.",ex:"alta alavancagem:\n- o template de serviço que 10 times usam\n- o ADR que evita 5 debates repetidos\n- a mentoria que cria outro sênior forte"},
 {t:"Glue work",x:"o invisível",oq:"O trabalho de cola: alinhar times, destravar decisões, achar o dono, escrever o doc que faltava, ligar A com B.",ps:"É o que faz projetos multi-time andarem — e o que mais falta nas organizações. Staff é, em grande parte, glue work de alto nível.",cf:"Faça o glue work ESTRATÉGICO (que destrava muito) e torne-o visível (escreva o que foi destravado). Cuidado: glue work invisível demais não promove ninguém — documente impacto.",ex:"projeto travado 3 semanas: 'pagamentos espera\ndado que cadastro não sabia que devia'\n1 reunião certa + 1 contrato escrito = destravou\n→ isso É o trabalho, não distração dele"},
 {t:"Arquétipos de Staff",x:"os sabores",oq:"Tech Lead (guia um time grande), Architect (dono de uma área técnica), Solver (resolve o problema cabeludo da vez), Right Hand (braço direito de um diretor).",ps:"Staff não é um molde único — saber seu arquétipo evita tentar ser tudo e frustrar-se.",cf:"Identifique o que a organização PRECISA e o que você É. Arquiteto de domínio combina com quem ama profundidade; solver com quem ama variedade.",ex:"empresa em migração de plataforma → precisa de\nArchitect · incidente atrás de incidente → Solver\nescolha o jogo antes de jogar"},
 {t:"Visibilidade & narrativa",x:"realpolitik",oq:"Impacto que ninguém conhece não existe para a organização. Staff+ mantém uma narrativa honesta do próprio impacto.",ps:"Promoção a Staff/Principal é um caso construído com evidências — e quem decide não viu seu dia a dia.",cf:"Documente resultados (antes/depois, números). Compartilhe aprendizados publicamente (tech talks, docs). Faça seu gestor conseguir CONTAR sua história sem você na sala.",ex:"brag document trimestral:\n- migração X: -40% custo, zero downtime\n- padrão Y adotado por 6 times\n- 2 engenheiros mentorados promovidos"},
 {t:"Dizer não & priorizar",x:"foco",oq:"Com escopo grande, TUDO compete pela sua atenção — dizer não (bem) vira a habilidade central.",ps:"O Staff que diz sim para tudo vira gargalo de todos e não entrega o que só ele podia entregar.",cf:"Critério público de prioridade (alavancagem). 'Não' com alternativa: 'não consigo agora, mas o doc X resolve / a pessoa Y consegue'. Proteja blocos de trabalho profundo.",ex:"'pode revisar meu design?' ×5 por semana\n→ cria o guia de design review + office hours\nsemanal: escala o sim, protege o foco"},
 {t:"Métricas de impacto",x:"prova",oq:"Como se mede um Staff/Principal: resultados de negócio viabilizados, capacidade criada nos times, riscos evitados, direção definida.",ps:"Linhas de código e horas não medem mais nada nesse nível — e você precisa saber se está indo bem.",cf:"Pergunte-se por trimestre: que decisão importante melhorei? que capacidade os times têm agora que não tinham? que desastre não aconteceu por minha causa (e como provo)?",ex:"impacto de Principal (exemplos):\n- estratégia multi-cloud que evitou lock-in de $2M\n- padrão de eventos que reduziu integração de\n  semanas para dias em toda a engenharia"}
]},
{g:"13",n:"Quanto saber de cada tecnologia",s:"a régua de profundidade do arquiteto, camada por camada",c:"var(--blue)",cs:"var(--blue-soft)",items:[
 {t:"A régua de profundidade",x:"o princípio",oq:"Para cada tecnologia, o arquiteto precisa do nível DECISÓRIO: avaliar, comparar, prever falhas e conversar com o especialista — não necessariamente operar.",ps:"Responde sua pergunta central: 'quanto preciso saber de cada coisa?'. Resposta: o bastante para DECIDIR e para saber QUANDO chamar quem sabe mais.",cf:"Teste dos 4 níveis por tecnologia: (1) sei o problema que resolve? (2) sei os trade-offs vs alternativas? (3) sei como ela falha? (4) sei dimensionar/custear por alto? Isso basta. Operar no detalhe = time.",ex:"Kafka, nível arquiteto:\n✓ pra que serve, vs SQS/Rabbit, como perde msg,\n  o que custa operar\n✗ decorar todos os configs do broker (isso é o\n  especialista — e tudo bem)"},
 {t:"Banco relacional",x:"a régua",oq:"O que saber: modelagem, índices e EXPLAIN, transações e isolamento, replicação/failover, connection pool, migração sem downtime.",ps:"É a fonte da verdade de quase tudo — a tecnologia onde o arquiteto mais precisa de profundidade real.",cf:"Saiba responder: por que essa query é lenta? o que esse índice custa na escrita? o que acontece no failover? por que o pool esgotou? como migrar schema com o sistema no ar?",ex:"red flags que você deve pegar de longe:\n- SELECT sem índice em tabela de 50M linhas\n- transação aberta com chamada HTTP dentro\n- ddl-auto=update em produção"},
 {t:"NoSQL & cache",x:"a régua",oq:"O que saber: modelos (chave-valor, documento, colunar, grafo), quando cada um vence o relacional, consistência eventual, TTL e invalidação, o que acontece quando o cache morre.",ps:"A escolha errada de banco é caríssima de reverter — e cache mal projetado derruba sistema (estouro em massa, verdade só no cache).",cf:"Para cada candidato: qual pergunta o sistema mais faz aos dados? (é ela que escolhe o banco). Cache: o sistema sobrevive com ele vazio (cold start)?",ex:"decisões típicas:\n- carrinho: Redis com TTL (perder = ok)\n- catálogo lido 1000:1 → réplica + cache agressivo\n- 'MongoDB porque é moderno' ✗ (qual a pergunta?)"},
 {t:"Mensageria & eventos",x:"a régua",oq:"O que saber: fila vs tópico, garantias de entrega (at-least-once!), ordenação, DLQ, replay, idade da fila como métrica, idempotência do consumidor.",ps:"Mensageria é o esqueleto do assíncrono — e cada garantia que você exige (ordem, exactly-once) custa caro.",cf:"Perguntas de projeto: perder mensagem é aceitável? duplicar é? a ordem importa (por chave ou global)? precisa reprocessar histórico? As respostas escolhem a ferramenta.",ex:"SQS: simples, sem ordem global, sem replay\nKafka: ordem por partição, replay, +operação\nprecisa só desacoplar e absorver pico? SQS ganha\npor simplicidade"},
 {t:"Front-end",x:"a régua",oq:"O que saber: SPA vs SSR e o impacto em SEO/latência, o custo do bundle, CORS, autenticação no browser (cookies vs tokens, XSS), BFF, cache/CDN de assets.",ps:"Você não vai escrever o CSS — mas decide contratos, autenticação e a arquitetura que o front consome.",cf:"Saiba conversar: por que o front pede BFF? por que aquele endpoint devolve demais (over-fetch)? onde o token fica seguro? o que o CDN resolve?",ex:"decisões que o arquiteto participa:\n- API pública REST + BFF por app\n- token em cookie httpOnly (não localStorage)\n- assets versionados com cache infinito no CDN"},
 {t:"Cloud & infra",x:"a régua",oq:"O que saber: os blocos essenciais (compute, rede/VPC, LB, DNS, IAM, filas, storage), o modelo de preço dos que usa, limites e quotas, e como diagnosticar (a nota 'onde olhar').",ps:"A cloud é o chão de tudo — e decisões de arquitetura são inseparáveis de custo e permissão (IAM).",cf:"Para cada serviço usado: o que acontece quando ele falha? qual o custo em 10x a escala? que permissão mínima precisa? A conta mensal é um documento de arquitetura — leia.",ex:"nível arquiteto na AWS:\n✓ desenhar VPC/subnets, escolher ECS vs Lambda,\n  ler a conta, achar o gargalo de IAM\n✗ decorar os 200 serviços (ninguém sabe)"},
 {t:"Rede",x:"a régua",oq:"O que saber: DNS, TLS, HTTP (códigos, headers, keep-alive, HTTP/2), latência como orçamento, o caminho de um request, portas/firewall/security groups.",ps:"Metade dos 'bugs misteriosos' entre serviços são rede: timeout, DNS, TLS expirado, porta fechada, CORS.",cf:"Saiba seguir um pacote: nome → IP → conexão → TLS → request → resposta. E os números de bolso: mesmo DC ~1ms, entre regiões ~100ms — some os saltos do seu fluxo.",ex:"diagnóstico clássico que você deve liderar:\n'A não fala com B' → DNS resolve? porta aberta?\nsecurity group libera? TLS válido? timeout de quê?\n(nessa ordem, 5 minutos)"},
 {t:"Linguagens & frameworks",x:"a régua",oq:"O que saber: 1-2 stacks a fundo (sua âncora), e das demais: modelo de concorrência, gestão de memória, ecossistema, custo de contratação.",ps:"Decisão de linguagem é decisão de ORGANIZAÇÃO (contratação, curva, operação) — não de gosto pessoal.",cf:"Para avaliar uma stack: maturidade do ecossistema? como escala I/O (threads? event loop?)? como se observa em produção? tem gente no mercado? Padronize poucas stacks e permita exceções justificadas.",ex:"'posso usar Rust nesse serviço?'\nresposta de arquiteto: 'qual dor resolve que Java\nnão resolve? quem mais mantém? vale abrir uma\n3ª stack na empresa por isso?'"},
 {t:"Tecnologias novas (e IA)",x:"a régua",oq:"Como avaliar qualquer tecnologia nova sem hype: que problema resolve, maturidade, custo de sair (lock-in), quem mais sustenta.",ps:"O arquiteto é o filtro entre o hype e a produção — nem 'não' automático, nem 'sim' de conferência.",cf:"Funil: ler/estudar (barato) → spike com critério (1 semana) → piloto em borda não-crítica → adoção com padrão e guard-rails. Cada etapa mata ou promove.",ex:"'vamos usar IA no atendimento?'\nfunil: spike com métricas de qualidade → piloto no\nfluxo de FAQ (baixo risco) → medir deflexão e erro\n→ decisão com número, não com demo"}
]}
,
{g:"14",n:"Como aprender de verdade",s:"o ciclo que fixa, fontes que valem e laboratórios reais",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"O ciclo de aprendizado",x:"trade-offs e validação",oq:"Ciclo deliberado: teoria dos fundamentos → vídeo de alto nível → documentação/artigos seminais → PoC prática → registro em ADR → revisão ativa.",ps:"Garantir que os modelos mentais de arquitetura sejam validados na prática antes de comprometer o sistema.",cf:"Isole a dúvida arquitetural em uma prova de conceito descartável de poucos dias; meça latência e complexidade; documente o contexto e os trade-offs em um ADR. Erro comum: desenhar diagramas complexos sem validar o comportamento sob concorrência e falhas de rede.",ex:"# ciclo:\n# 1. definir o problema de negócio\n# 2. levantar 2 a 3 alternativas\n# 3. construir PoC rápida de teste\n# 4. redigir ADR com trade-offs"},
 {t:"Canais e cursos em português",x:"fontes de credibilidade",oq:"Curadoria de referências técnicas em língua portuguesa e internacional dedicadas a arquitetura pragmática e sistemas distribuídos.",ps:"Construir visão de conjunto com instrutores experientes antes de se aprofundar na literatura formal.",cf:"Full Cycle (Wesley Willians) para microsserviços e mensageria; Rodrigo Branas para Clean Architecture e refatoração; Alexandre Aquiles para arquitetura e design pragmático; Martin Fowler (martinfowler.com) como referência seminal. Erro comum: adotar padrões rígidos cegamente em sistemas triviais.",ex:"# referências:\n# Full Cycle: microsserviços, mensageria e distribuídos\n# Rodrigo Branas: Clean Architecture e design patterns\n# Alexandre Aquiles: arquitetura corporativa e evolução\n# Martin Fowler: martinfowler.com (padrões seminais)"},
 {t:"Como pesquisar e o que praticar",x:"diagnóstico e portfólio",oq:"Formulação de buscas focadas em trade-offs reais e construção de projetos práticos que testam resiliência e concorrência.",ps:"Comprovar competência técnica sênior demonstrando decisões arquiteturais justificadas e testadas contra falhas.",cf:"Pesquise post-mortems reais de engenharia; compare padrões sob a ótica de trade-offs. No portfólio: Transactional Outbox, Rate Limiter distribuído, Circuit Breaker com fallback e o Capstone OrderFlow documentado com ADRs. Erro comum: só montar CRUDs básicos sem tratamento de falhas parciais.",ex:"# busca de trade-offs:\n\"transactional outbox pattern vs cdc debezium trade-offs\"\n# projetos:\n# 1. Transactional Outbox com CDC\n# 2. Rate Limiter distribuído no Gateway\n# 3. Circuit Breaker com fallback gracioso\n# 4. Capstone OrderFlow com ADRs"}
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
var KEYT="arquitetura-completo-CL-trilha-v1";
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
var KEYM="arquitetura-completo-CL-conteudo-v1";
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
document.addEventListener("scroll",onScroll,{passive:true});
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
 var RK="arquitetura-completo-CL-rev-v1";
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




/* ---------- bloco 2 de 4 ---------- */

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


/* ---------- bloco 3 de 4 ---------- */

// ==================== IMAGE MODAL & ZOOM CONTROLLER ====================
(function(){
  if (window.__imgModalInit) return;
  window.__imgModalInit = true;

  var modal = document.getElementById('imgModal');
  if (!modal) return;

  var backdrop = document.getElementById('imBackdrop');
  var viewport = document.getElementById('imViewport');
  var canvas = document.getElementById('imCanvas');
  var img = document.getElementById('imImg');
  var caption = document.getElementById('imCaption');
  var badge = document.getElementById('imBadge');
  var btnClose = document.getElementById('imClose');
  var btnZoomIn = document.getElementById('imZoomIn');
  var btnZoomOut = document.getElementById('imZoomOut');
  var btnReset = document.getElementById('imZoomReset');

  var scale = 1;
  var panX = 0;
  var panY = 0;
  var isDragging = false;
  var dragStartX = 0;
  var dragStartY = 0;
  var initialPanX = 0;
  var initialPanY = 0;
  var hasMoved = false;

  function updateTransform() {
    canvas.style.transform = 'translate(' + panX + 'px, ' + panY + 'px) scale(' + scale + ')';
    if (btnReset) btnReset.textContent = Math.round(scale * 100) + '%';
  }

  function resetZoom() {
    scale = 1;
    panX = 0;
    panY = 0;
    updateTransform();
  }

  function openModal(src, titleText, badgeText) {
    if (!src) return;
    img.src = src;
    if (caption) caption.textContent = titleText || 'Visualização Ampliada';
    if (badge && badgeText) badge.textContent = badgeText;
    resetZoom();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(function(){
      if (!modal.classList.contains('open')) {
        img.src = '';
      }
    }, 250);
  }

  // Intercept click on any .topic-img, .visual-diagram, or zoomable image
  document.addEventListener('click', function(e) {
    var trigger = e.target.closest('.topic-img a, .topic-img img, figure.visual-diagram img, [data-zoomable]');
    if (!trigger) return;

    e.preventDefault();
    e.stopPropagation();

    var targetImg = trigger.tagName.toLowerCase() === 'img' ? trigger : trigger.querySelector('img');
    var fig = trigger.closest('figure');
    var cap = fig ? (fig.querySelector('figcaption em') || fig.querySelector('figcaption')) : null;
    var bd = fig ? fig.querySelector('figcaption span') : null;

    var src = '';
    if (targetImg) {
      src = targetImg.getAttribute('src') || targetImg.src;
    } else if (trigger.tagName.toLowerCase() === 'a') {
      src = trigger.getAttribute('href');
    }

    if (src) {
      var capText = cap ? cap.textContent.trim() : (targetImg ? targetImg.alt : '');
      var bdText = bd ? bd.textContent.trim() : 'MAPA MENTAL';
      openModal(src, capText, bdText);
    }
  }, true);

  if (btnClose) {
    btnClose.addEventListener('click', function(e){
      e.stopPropagation();
      closeModal();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', function(e){
      closeModal();
    });
  }

  // Close on Escape or shortcut keys
  document.addEventListener('keydown', function(e){
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === '+' || e.key === '=') {
      scale = Math.min(6, scale * 1.25);
      updateTransform();
    } else if (e.key === '-') {
      scale = Math.max(0.3, scale / 1.25);
      updateTransform();
    } else if (e.key === '0') {
      resetZoom();
    }
  });

  if (btnZoomIn) {
    btnZoomIn.addEventListener('click', function(e){
      e.stopPropagation();
      scale = Math.min(6, scale * 1.25);
      updateTransform();
    });
  }

  if (btnZoomOut) {
    btnZoomOut.addEventListener('click', function(e){
      e.stopPropagation();
      scale = Math.max(0.3, scale / 1.25);
      updateTransform();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', function(e){
      e.stopPropagation();
      resetZoom();
    });
  }

  // Double click toggles zoom (100% -> 200% -> 100%)
  if (canvas) {
    canvas.addEventListener('dblclick', function(e){
      e.stopPropagation();
      if (scale <= 1.15) {
        scale = 2;
      } else {
        scale = 1;
        panX = 0;
        panY = 0;
      }
      updateTransform();
    });
  }

  // Mouse wheel zoom
  if (viewport) {
    viewport.addEventListener('wheel', function(e){
      if (!modal.classList.contains('open')) return;
      e.preventDefault();
      var zoomFactor = e.deltaY < 0 ? 1.15 : 0.87;
      var newScale = scale * zoomFactor;
      if (newScale >= 0.3 && newScale <= 6) {
        scale = newScale;
        updateTransform();
      }
    }, { passive: false });

    // Drag / Pan & Click Outside
    viewport.addEventListener('mousedown', function(e){
      if (e.button !== 0) return;
      if (e.target.closest('.im-btn') || e.target.closest('.im-header') || e.target.closest('.im-footer')) return;

      isDragging = true;
      hasMoved = false;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      initialPanX = panX;
      initialPanY = panY;
      viewport.classList.add('is-dragging');
    });

    window.addEventListener('mousemove', function(e){
      if (!isDragging) return;
      var dx = e.clientX - dragStartX;
      var dy = e.clientY - dragStartY;
      if (Math.hypot(dx, dy) > 5) {
        hasMoved = true;
      }
      panX = initialPanX + dx;
      panY = initialPanY + dy;
      updateTransform();
    });

    window.addEventListener('mouseup', function(e){
      if (isDragging) {
        isDragging = false;
        viewport.classList.remove('is-dragging');
        // If user clicked outside the image without dragging
        if (!hasMoved && (e.target === viewport || e.target === backdrop || e.target === modal)) {
          closeModal();
        }
      }
    });

    // Touch support (mobile pinch / drag)
    var touchStartDist = 0;
    var initialTouchScale = 1;
    viewport.addEventListener('touchstart', function(e){
      if (e.touches.length === 1) {
        isDragging = true;
        hasMoved = false;
        dragStartX = e.touches[0].clientX;
        dragStartY = e.touches[0].clientY;
        initialPanX = panX;
        initialPanY = panY;
      } else if (e.touches.length === 2) {
        isDragging = false;
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        initialTouchScale = scale;
      }
    }, { passive: true });

    viewport.addEventListener('touchmove', function(e){
      if (e.touches.length === 1 && isDragging) {
        var dx = e.touches[0].clientX - dragStartX;
        var dy = e.touches[0].clientY - dragStartY;
        if (Math.hypot(dx, dy) > 5) hasMoved = true;
        panX = initialPanX + dx;
        panY = initialPanY + dy;
        updateTransform();
      } else if (e.touches.length === 2 && touchStartDist > 0) {
        var currentDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        var factor = currentDist / touchStartDist;
        var newScale = initialTouchScale * factor;
        if (newScale >= 0.4 && newScale <= 6) {
          scale = newScale;
          updateTransform();
        }
      }
    }, { passive: true });

    viewport.addEventListener('touchend', function(e){
      if (isDragging) {
        isDragging = false;
        if (!hasMoved && (e.target === viewport || e.target === backdrop)) {
          closeModal();
        }
      }
      if (e.touches.length < 2) {
        touchStartDist = 0;
      }
    });
  }
})();


/* ---------- bloco 4 de 4 ---------- */

// Circuit Breaker Simulator Controller
(function(){
  var lab=document.getElementById("circuitLab");
  if(!lab)return;
  var nodes=[
    document.getElementById("cn1"),
    document.getElementById("cn2"),
    document.getElementById("cn3"),
    document.getElementById("cn4"),
    document.getElementById("cn5")
  ];
  var hud=document.getElementById("circuitHud");
  var btnOk=document.getElementById("btnCircuitOk");
  var btnFail=document.getElementById("btnCircuitFail");
  var btnTrip=document.getElementById("btnCircuitTrip");
  var btnHalf=document.getElementById("btnCircuitHalfOpen");
  var btnReset=document.getElementById("btnCircuitReset");
  var timer=null;

  var state = "CLOSED"; // CLOSED, OPEN, HALF_OPEN
  var windowCalls = []; // booleans: true = success, false = fail
  var windowSize = 10;

  function updateNodeDisplay(){
    var stateEl = document.querySelector("#cn2 .cn-val");
    if(stateEl){
      if(state === "CLOSED"){
        stateEl.innerHTML = '<span style="color:var(--teal)">CLOSED (Fechado)</span>';
      } else if(state === "OPEN"){
        stateEl.innerHTML = '<span style="color:var(--rose)">OPEN (Aberto - Falha Rápida)</span>';
      } else {
        stateEl.innerHTML = '<span style="color:var(--gold)">HALF-OPEN (Meio Aberto)</span>';
      }
    }

    var winEl = document.querySelector("#cn3 .cn-val");
    if(winEl){
      var fails = windowCalls.filter(function(x){return !x;}).length;
      var rate = windowCalls.length ? Math.round((fails / windowCalls.length) * 100) : 0;
      var icons = windowCalls.map(function(x){return x ? '🟩' : '🟥';}).join('');
      winEl.innerHTML = (icons || '⚪⚪⚪⚪⚪') + '<br><small>Erro: ' + rate + '% (' + fails + '/' + windowCalls.length + ')</small>';
    }
  }

  function clearState(){
    if(timer)clearTimeout(timer);
    nodes.forEach(function(n){
      if(!n)return;
      n.className="cl-node";
    });
    updateNodeDisplay();
  }

  function setHud(lines){
    if(!hud)return;
    hud.innerHTML=lines.map(function(l){
      return '<div class="ch-l '+(l.cls||"ch-info")+'">'+l.txt+'</div>';
    }).join("");
    hud.scrollTop=hud.scrollHeight;
  }

  function runScenario(steps, callback){
    clearState();
    var idx=0;
    function next(){
      if(idx>0 && steps[idx-1]){
        var prev=steps[idx-1];
        if(nodes[prev.node]){
          nodes[prev.node].classList.remove("active");
          nodes[prev.node].classList.add(prev.status||"ok");
        }
      }
      if(idx<steps.length){
        var cur=steps[idx];
        if(nodes[cur.node]){
          nodes[cur.node].classList.add("active");
        }
        setHud(cur.logs);
        idx++;
        timer=setTimeout(next, cur.delay||750);
      } else {
        if(callback) callback();
      }
    }
    next();
  }

  if(btnOk) btnOk.addEventListener("click",function(){
    if(state === "OPEN"){
      runScenario([
        {node:0, logs:[{cls:"ch-info",txt:"[Client Gateway] Requisição GET /pedidos/123 recebida."}], delay:500},
        {node:1, status:"err", logs:[{cls:"ch-err",txt:"⚡ [CircuitBreaker OPEN] Circuito está ABERTO! Chamada downstream BLOQUEADA sem tocar na rede!"}], delay:600},
        {node:4, status:"ok", logs:[{cls:"ch-ok",txt:"🛡️ [Fallback Executado] Retorna dados do cache local Redis ou resposta parcial em 1ms (Sem esgotar threads!)."}], delay:500}
      ]);
      return;
    }

    windowCalls.push(true);
    if(windowCalls.length > windowSize) windowCalls.shift();
    updateNodeDisplay();

    if(state === "HALF_OPEN"){
      var successes = windowCalls.filter(function(x){return x;}).length;
      if(successes >= 3){
        state = "CLOSED";
        windowCalls = [true, true, true];
      }
    }

    runScenario([
      {node:0, logs:[{cls:"ch-info",txt:"[Client Gateway] Requisição GET /pedidos/checkout disparada."}], delay:500},
      {node:1, status:"ok", logs:[{cls:"ch-ok",txt:"[Resilience4j CB] Estado: " + state + ". Requisição autorizada a prosseguir."}], delay:600},
      {node:2, status:"ok", logs:[{cls:"ch-ok",txt:"[Sliding Window] Janela atualizada: Sucesso registrado (200 OK, 38ms)."}], delay:650},
      {node:3, status:"ok", logs:[{cls:"ch-ok",txt:"[Downstream Service] Microsserviço de Pagamentos respondeu com sucesso!"}], delay:500}
    ], updateNodeDisplay);
  });

  if(btnFail) btnFail.addEventListener("click",function(){
    if(state === "OPEN"){
      runScenario([
        {node:0, logs:[{cls:"ch-info",txt:"[Client Gateway] Requisição recebida."}], delay:500},
        {node:1, status:"err", logs:[{cls:"ch-err",txt:"⚡ [Fail-Fast] CB já está OPEN! Call downstream nem é disparada. Economia imediata de socket/thread."}], delay:600},
        {node:4, status:"ok", logs:[{cls:"ch-ok",txt:"🛡️ [Fallback Ativado] Degradação graciosa entregue ao cliente."}], delay:500}
      ]);
      return;
    }

    windowCalls.push(false);
    if(windowCalls.length > windowSize) windowCalls.shift();
    
    var fails = windowCalls.filter(function(x){return !x;}).length;
    var rate = Math.round((fails / windowCalls.length) * 100);

    var willTrip = (rate >= 50 && windowCalls.length >= 5) || (state === "HALF_OPEN");

    runScenario([
      {node:0, logs:[{cls:"ch-warn",txt:"[Client Gateway] Requisição POST /pedidos/pagar disparada."}], delay:500},
      {node:1, status:"warn", logs:[{cls:"ch-info",txt:"[Resilience4j CB] Estado: " + state + ". Enviando chamada ao downstream..."}], delay:600},
      {node:3, status:"err", logs:[{cls:"ch-err",txt:"💥 [Downstream Falhou] GatewayTimeout (504) ou Connection Refused no serviço de pagamentos!"}], delay:700},
      {node:2, status:"err", logs:[{cls:"ch-err",txt:"[Sliding Window] Erro registrado. Taxa de falha calculada: " + rate + "% (limiar tolerado: 50%)."}], delay:750},
      {node:4, status:"ok", logs:[{cls:"ch-warn",txt:"🛡️ [Fallback Executado] Mensagem enviada para Dead Letter Queue / Outbox para processamento assíncrono posterior."}], delay:500}
    ], function(){
      if(willTrip){
        state = "OPEN";
        setHud([{cls:"ch-err",txt:"🚨 [CIRCUITO DISPAROU -> OPEN] Taxa de falha excedeu 50%! O Circuit Breaker abriu! Próximas chamadas falharão instantaneamente sem sobrecarregar o serviço agonizante."}]);
      }
      updateNodeDisplay();
    });
  });

  if(btnTrip) btnTrip.addEventListener("click",function(){
    state = "OPEN";
    windowCalls = [false, false, false, false, false, false];
    updateNodeDisplay();
    runScenario([
      {node:1, status:"err", logs:[{cls:"ch-err",txt:"🚨 [DISPARO FORÇADO] Circuit Breaker alterado para estado OPEN!"}], delay:600},
      {node:2, status:"err", logs:[{cls:"ch-err",txt:"[Sliding Window] Taxa de erro: 100%. Limiar violado!"}], delay:600},
      {node:4, status:"ok", logs:[{cls:"ch-ok",txt:"🛡️ [Proteção Ativa] Todos os novos requests são desviados para o Fallback em <2ms. Protege threads do tomcat contra travamento por timeout!"}], delay:500}
    ]);
  });

  if(btnHalf) btnHalf.addEventListener("click",function(){
    state = "HALF_OPEN";
    windowCalls = [];
    updateNodeDisplay();
    runScenario([
      {node:1, status:"warn", logs:[{cls:"ch-warn",txt:"⏱️ [WaitDurationInOpenState Esgotado] Transição de OPEN -> HALF-OPEN."}], delay:650},
      {node:2, status:"warn", logs:[{cls:"ch-info",txt:"[Trial Probe Mode] Limite de 3 chamadas de teste (permittedNumberOfCallsInHalfOpenState=3)."}], delay:700},
      {node:0, status:"ok", logs:[{cls:"ch-ok",txt:"Envie requisições de sucesso (btn Verde) para restaurar o circuito para CLOSED, ou falha (btn Vermelho) para reabrir imediatamente."}], delay:500}
    ]);
  });

  if(btnReset) btnReset.addEventListener("click",function(){
    state = "CLOSED";
    windowCalls = [true, true, true, true];
    clearState();
    setHud([{cls:"ch-info",txt:"[Circuit Breaker Resetado] Estado: CLOSED. Janela limpa. Pronto para simulação."}]);
  });

  updateNodeDisplay();
})();

/* Extraido de trilhas/system-design.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 3 ---------- */

function W(h,inner){return '<figure class="dg"><svg viewBox="0 0 340 '+h+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg></figure>';}
var DG={
 contrato:W(158,'<text x="170" y="16" class="bt">"10k RPS" não é requisito — é sintoma</text><rect x="6" y="32" width="96" height="38" rx="8" class="b5"/><text x="54" y="50" class="bs">"o banco não</text><text x="54" y="62" class="bs">aguenta 10k RPS"</text><path d="M104,51 L128,51" class="l"/><path d="M128,51 L120,47 L120,55 Z" class="h"/><rect x="130" y="30" width="100" height="42" rx="8" class="b2"/><text x="180" y="46" class="bs">RPS de quê?</text><text x="180" y="58" class="bs">quantas queries</text><text x="180" y="68" class="bs">por request?</text><path d="M232,51 L256,51" class="l"/><path d="M256,51 L248,47 L248,55 Z" class="h"/><rect x="258" y="32" width="76" height="38" rx="8" class="b1"/><text x="296" y="50" class="bs">30k QPS</text><text x="296" y="62" class="bs">no banco</text><text x="170" y="92" class="bs">1 · contrato: p99 &lt; 100 ms · erro &lt; 0,5% · lê-o-que-escreveu</text><text x="170" y="108" class="bs">2 · workload: 95% leitura · Zipf 80/20 · 3 queries/request</text><text x="170" y="124" class="bs">3 · gargalo: query A = 62% do tempo · pool com fila · CPU 88%</text><text x="170" y="148" class="bt">só agora existe um problema para resolver</text>'),
 little:W(150,'<text x="170" y="16" class="bt">lei de Little: L = λ × W</text><rect x="14" y="34" width="92" height="34" rx="8" class="b2"/><text x="60" y="49" class="bs">λ = chegadas/s</text><text x="60" y="62" class="bs">30.000 queries/s</text><rect x="124" y="34" width="92" height="34" rx="8" class="b2"/><text x="170" y="49" class="bs">W = tempo dentro</text><text x="170" y="62" class="bs">0,008 s</text><rect x="234" y="34" width="92" height="34" rx="8" class="b1"/><text x="280" y="49" class="bs">L = em voo</text><text x="280" y="62" class="bs">240</text><path d="M108,51 L122,51" class="l"/><path d="M218,51 L232,51" class="lt"/><text x="170" y="90" class="bs">240 execuções concorrentes em média — e o pool tem 20</text><text x="170" y="112" class="bt">a conta não diz "pool = 240"</text><text x="170" y="128" class="bs">diz: ou o banco sustenta 240, ou você precisa reduzir W</text><text x="170" y="144" class="bs">reduzir W é quase sempre mais barato que abrir a comporta</text>'),
 escada:W(196,'<text x="170" y="16" class="bt">escada de leitura: cada degrau tem gate e prova</text><rect x="20" y="160" width="300" height="20" rx="5" class="b1"/><text x="170" y="174" class="bs">00 proteger e observar · 01 remover trabalho evitável</text><rect x="34" y="132" width="272" height="20" rx="5" class="b1"/><text x="170" y="146" class="bs">02 consulta e índice · 03 concorrência e transação</text><rect x="48" y="104" width="244" height="20" rx="5" class="b2"/><text x="170" y="118" class="bs">04 vertical ou especialização</text><rect x="62" y="76" width="216" height="20" rx="5" class="b2"/><text x="170" y="90" class="bs">05 cache onde há reuso</text><rect x="76" y="48" width="188" height="20" rx="5" class="b4"/><text x="170" y="62" class="bs">06 réplicas de leitura</text><rect x="90" y="24" width="160" height="20" rx="5" class="b5"/><text x="170" y="38" class="bs">07 particionar — só com evidência</text><text x="170" y="192" class="bs">de baixo para cima: mais barato → mais caro de operar</text>'),
 shard:W(170,'<text x="86" y="16" class="bt">✗ chave ruim</text><text x="254" y="16" class="bt">✓ chave boa</text><line x1="170" y1="24" x2="170" y2="150" class="l d"/><text x="86" y="32" class="bs">partition key = país (90% BR)</text><rect x="10" y="42" width="46" height="72" rx="7" class="b5"/><text x="33" y="74" class="bs">S1</text><text x="33" y="90" class="bs">90%</text><rect x="62" y="82" width="46" height="32" rx="7" class="bx"/><text x="85" y="102" class="bs">S2</text><rect x="114" y="82" width="46" height="32" rx="7" class="bx"/><text x="137" y="102" class="bs">S3</text><text x="86" y="132" class="bs">pagou 3, usa 1</text><text x="254" y="32" class="bs">partition key = hash(user_id)</text><rect x="182" y="56" width="46" height="58" rx="7" class="b1"/><text x="205" y="88" class="bs">~33%</text><rect x="234" y="56" width="46" height="58" rx="7" class="b1"/><text x="257" y="88" class="bs">~33%</text><rect x="286" y="56" width="46" height="58" rx="7" class="b1"/><text x="309" y="88" class="bs">~33%</text><text x="254" y="132" class="bs">capacidade × 3</text><text x="170" y="160" class="bs">a pergunta da entrevista: qual seria a sua partition key, e por quê?</text>'),
 fila:W(160,'<text x="170" y="16" class="bt">a fila achata o pico — ela não cria capacidade</text><path d="M12,74 L44,74 L52,40 L68,40 L76,74 L120,74" class="l"/><text x="66" y="90" class="bs">entrada com pico</text><path d="M126,62 L146,62" class="l"/><path d="M146,62 L138,58 L138,66 Z" class="h"/><rect x="148" y="44" width="56" height="34" rx="8" class="b1"/><text x="176" y="60" class="bs">fila</text><text x="176" y="72" class="bs">▯▯▯▯</text><path d="M206,62 L226,62" class="lt"/><path d="M226,62 L218,58 L218,66 Z" class="ht"/><path d="M230,74 L292,74" class="lt"/><text x="264" y="90" class="bs">saída constante</text><rect x="296" y="50" width="38" height="30" rx="7" class="bx"/><text x="315" y="69" class="bs">banco</text><text x="170" y="116" class="bs">se a MÉDIA de entrada já passa da vazão do banco,</text><text x="170" y="130" class="bs">a fila só cresce — você trocou "cair" por "atrasar para sempre"</text><text x="170" y="152" class="bt">fila resolve pico · carga constante se resolve com capacidade</text>'),
 bloom:W(168,'<text x="170" y="16" class="bt">Bloom: erra só para um lado</text><rect x="8" y="34" width="76" height="34" rx="8" class="b2"/><text x="46" y="50" class="bs">digitou</text><text x="46" y="63" class="bs">"thallys_dev"</text><path d="M86,51 L106,51" class="l"/><path d="M106,51 L98,47 L98,55 Z" class="h"/><rect x="108" y="30" width="88" height="42" rx="8" class="b4"/><text x="152" y="47" class="bs">Bloom filter</text><text x="152" y="60" class="bs">~2 GB · µs</text><path d="M198,42 L242,30" class="lt"/><text x="222" y="24" class="bs">bit 0</text><rect x="244" y="18" width="90" height="28" rx="7" class="b1"/><text x="289" y="30" class="bs">LIVRE ✓</text><text x="289" y="41" class="bs">sem tocar no banco</text><path d="M198,62 L242,78" class="lr"/><text x="220" y="82" class="bs">todos 1</text><rect x="244" y="62" width="90" height="32" rx="7" class="b5"/><text x="289" y="76" class="bs">talvez ocupado</text><text x="289" y="88" class="bs">confere no índice</text><text x="170" y="118" class="bs">nunca diz "ocupado" para um nome livre — o contrário pode acontecer</text><text x="170" y="140" class="bt">é barreira de economia, não de verdade</text><text x="170" y="156" class="bs">quem garante unicidade continua sendo o índice único no INSERT</text>'),
 keyset:W(164,'<text x="86" y="16" class="bt">OFFSET 500000</text><text x="254" y="16" class="bt">keyset</text><line x1="170" y1="24" x2="170" y2="140" class="l d"/><rect x="14" y="34" width="144" height="76" rx="8" class="b5"/><text x="86" y="52" class="bs">o banco lê 500.010 linhas</text><text x="86" y="66" class="bs">e joga 500.000 fora</text><text x="86" y="84" class="bs">custo cresce com a página</text><text x="86" y="98" class="bs">página 1: 8 ms · página 5000: 4 s</text><rect x="182" y="34" width="144" height="76" rx="8" class="b1"/><text x="254" y="52" class="bs">WHERE (dt,id) &lt; (?,?)</text><text x="254" y="66" class="bs">salta direto na árvore</text><text x="254" y="84" class="bs">custo constante</text><text x="254" y="98" class="bs">página 1: 8 ms · página 5000: 8 ms</text><text x="170" y="130" class="bs">o índice precisa ter as MESMAS colunas, na MESMA ordem</text><text x="170" y="152" class="bt">e o cursor precisa desempatar: (data, id), nunca só data</text>'),
 tempo:W(176,'<text x="170" y="16" class="bt">a escada do tempo real</text><rect x="8" y="30" width="76" height="46" rx="8" class="b3"/><text x="46" y="47" class="bs">polling</text><text x="46" y="60" class="bs">pergunta sempre</text><text x="46" y="71" class="bs">quase tudo "não"</text><rect x="92" y="30" width="76" height="46" rx="8" class="b2"/><text x="130" y="47" class="bs">long polling</text><text x="130" y="60" class="bs">segura até ter</text><text x="130" y="71" class="bs">ou estourar</text><rect x="176" y="30" width="76" height="46" rx="8" class="b1"/><text x="214" y="47" class="bs">SSE</text><text x="214" y="60" class="bs">só servidor→cliente</text><text x="214" y="71" class="bs">passa em proxy</text><rect x="260" y="30" width="74" height="46" rx="8" class="b4"/><text x="297" y="47" class="bs">WebSocket</text><text x="297" y="60" class="bs">bidirecional</text><text x="297" y="71" class="bs">conexão com estado</text><path d="M8,92 L334,92" class="l d"/><text x="46" y="108" class="bs">mais simples</text><text x="297" y="108" class="bs">mais capaz</text><text x="170" y="134" class="bs">notificação de progresso e feed: SSE resolve e custa menos</text><text x="170" y="150" class="bs">chat e colaboração: WebSocket, e você herda reconexão e estado</text><text x="170" y="170" class="bt">escolha pelo SENTIDO do tráfego, não pela moda</text>'),
 falha:W(172,'<text x="170" y="16" class="bt">falha parcial: o modo que só existe em rede</text><rect x="12" y="34" width="80" height="34" rx="8" class="b2"/><text x="52" y="50" class="bs">seu serviço</text><text x="52" y="63" class="bs">chamou</text><path d="M94,51 L134,51" class="l d"/><rect x="136" y="34" width="80" height="34" rx="8" class="b5"/><text x="176" y="50" class="bs">sem resposta</text><text x="176" y="63" class="bs">timeout</text><text x="252" y="42" class="bs">não chegou?</text><text x="252" y="56" class="bs">chegou e fez?</text><text x="252" y="70" class="bs">fez e a resposta sumiu?</text><text x="170" y="96" class="bs">os três casos são indistinguíveis do lado de fora</text><rect x="14" y="110" width="96" height="30" rx="7" class="b1"/><text x="62" y="129" class="bs">timeout em tudo</text><rect x="122" y="110" width="96" height="30" rx="7" class="b1"/><text x="170" y="124" class="bs">retry com jitter</text><text x="170" y="136" class="bs">só se idempotente</text><rect x="230" y="110" width="96" height="30" rx="7" class="b1"/><text x="278" y="129" class="bs">disjuntor</text><text x="170" y="164" class="bt">sem timeout, o disjuntor nunca conta falha — só acumula thread presa</text>'),
 ciclo:W(150,'<text x="170" y="16" class="bt">o ciclo que fixa</text><rect x="10" y="34" width="66" height="30" rx="8" class="b2"/><text x="43" y="53" class="bs">ler aqui</text><path d="M78,49 L96,49" class="l"/><path d="M96,49 L88,45 L88,53 Z" class="h"/><rect x="98" y="34" width="66" height="30" rx="8" class="b2"/><text x="131" y="53" class="bs">ver vídeo</text><path d="M166,49 L184,49" class="l"/><path d="M184,49 L176,45 L176,53 Z" class="h"/><rect x="186" y="34" width="66" height="30" rx="8" class="b2"/><text x="219" y="53" class="bs">doc oficial</text><path d="M254,49 L272,49" class="l"/><path d="M272,49 L264,45 L264,53 Z" class="h"/><rect x="274" y="34" width="60" height="30" rx="8" class="b1"/><text x="304" y="53" class="bs">fazer o lab</text><path d="M304,66 L304,88 L43,88 L43,66" class="lt d"/><path d="M43,66 L39,74 L47,74 Z" class="ht"/><text x="170" y="104" class="bs">e a volta: escrever a nota atômica do que quebrou</text><text x="170" y="126" class="bt">vídeo dá o mapa · doc dá a precisão · lab fixa</text><text x="170" y="142" class="bs">nunca pare no vídeo</text>')
};

var T=[
{g:"01",n:"O método",s:"antes de desenhar caixa, transformar a frase vaga em número",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"A pergunta vaga não é requisito",x:"'10k RPS' é sintoma, não diagnóstico",dg:"contrato",oq:"A mesma taxa pode ser trivial ou impossível. 10.000 leituras por chave primária num índice em memória é fácil; 10.000 relatórios com junção e ordenação sobre bilhões de linhas não existe.",ps:"Impedir que você comece a desenhar arquitetura em cima de um número que não significa nada sozinho.",cf:"Converta a frase em três coisas, nesta ordem. <b>Contrato:</b> p99, taxa de erro tolerada, consistência exigida. <b>Workload:</b> mistura de leitura e escrita, quantas queries por request, distribuição das chaves, tamanho do payload. <b>Gargalo:</b> qual recurso satura e qual consulta domina. <b>Erro comum:</b> responder à pergunta antes de tê-la.",caso:"O entrevistador diz: 'o banco não aguenta 10 mil requisições por segundo'. A primeira resposta certa não é 'coloco cache' — é: RPS de quê? Requisições HTTP, operações lógicas ou statements SQL? Se cada request dispara três consultas, 10k HTTP já são 30k QPS no banco. O número mudou por três antes de você desenhar qualquer caixa.",ex:"# a frase vira hipótese testável\ncontrato : p99 < 100 ms · erro < 0,5% · lê o que escreveu\nworkload : 95% leitura · pico 10k · 3 queries/req · Zipf 80/20\ngargalo  : query A = 62% do tempo · pool com fila · DB CPU 88%"},
 {t:"As perguntas de carga",x:"seis que mudam tudo",oq:"Um bloco fixo de perguntas sobre a natureza do tráfego, feito antes de qualquer proposta.",ps:"Transformar 'muito acesso' em demanda de recurso mensurável.",cf:"RPS de quê · qual a mistura de leitura e escrita · média ou pico, e por quanto tempo · quantas queries por request · qual a distribuição das chaves (uniforme, Zipf, celebridade, inquilino gigante) · qual o tamanho do payload. <b>Erro comum:</b> assumir distribuição uniforme. Quase nunca é: 20% das chaves levam 80% dos acessos, e é isso que decide se cache funciona."},
 {t:"As perguntas de produto",x:"o que o negócio aceita perder",oq:"O segundo bloco: SLO, consistência exigida, tolerância a dado velho, orçamento e comportamento aceitável na falha.",ps:"Descobrir o grau de liberdade que você tem. Sem ele, toda decisão técnica vira chute.",cf:"Pode ficar stale por 100 ms, 30 s, 5 min ou nunca? Precisa de read-your-writes? Na falha, é melhor degradar, rejeitar, servir dado velho ou bloquear? <b>Erro comum:</b> tratar consistência eventual como detalhe técnico. É decisão de produto — precisa ser aprovada, não descoberta em produção."},
 {t:"Os erros que eliminam",x:"o que faz anotar 'não recomendo'",oq:"Padrões de resposta que derrubam o candidato independentemente do resto.",ps:"Reconhecer e evitar os quatro mais comuns.",cf:"(1) Propor solução antes de entender o problema. (2) Citar tecnologia como se fosse resposta — 'uso Kafka' não explica nada. (3) Não saber o preço do que propôs: todo mecanismo cobra em complexidade operacional. (4) Prometer garantia que o mecanismo não dá, como <i>exactly-once</i> sem escopo. <b>Erro comum:</b> o silêncio — pensar sem narrar. O entrevistador avalia o raciocínio, não só o desenho."}
]}
,
{g:"02",n:"A conta antes da caixa",s:"estimativa de guardanapo: ordens de grandeza, não previsão",c:"var(--cyan)",cs:"var(--arc-soft)",items:[
 {t:"Lei de Little",x:"L = λ × W",dg:"little",oq:"Concorrência média dentro de um sistema é igual à taxa de chegada multiplicada pelo tempo médio que cada item passa lá dentro.",ps:"É a conta mais útil de System Design: transforma taxa (que você sabe) em ocupação (que decide o dimensionamento).",cf:"Use unidades coerentes: λ em operações por segundo, W em segundos. O resultado é quantas operações estão em voo ao mesmo tempo, em média. <b>Erro comum:</b> ler o resultado como 'configure o pool com esse número'. A conta não autoriza nada — ela revela se o que você quer é possível.",caso:"10k RPS × 3 queries sequenciais de 8 ms = 30.000 QPS e W = 0,008 s. L = 240 execuções concorrentes no banco. O pool tem 20. A conta não diz 'aumente para 240': diz que ou o banco sustenta 240 execuções simultâneas (quase nunca sustenta), ou você precisa reduzir W — menos queries, consulta mais barata, transação mais curta.",ex:"L = λ × W\n30.000 × 0,008 = 240 em voo\n\n# teto ingênuo de um pool\nteto ≈ pool ÷ W\n20 ÷ 0,010 = 2.000 ciclos/s por instância"},
 {t:"A conta do cache",x:"o que sobra para o banco",oq:"Com cache-aside, o que chega ao banco é (leituras × taxa de miss) + todas as escritas.",ps:"Saber de antemão quanto o cache realmente alivia — e que ele não alivia escrita nenhuma.",cf:"Com 9.500 leituras/s e 80% de acerto, sobram 1.900 leituras. Somadas às escritas, dá o QPS real. <b>Erro comum:</b> celebrar 80% de hit rate sem notar que dobrar o tráfego dobra os 20% que passam — o alívio é proporcional, não absoluto.",ex:"leituras/s = RPS × %leitura\nno banco   = leituras × (1 − hit) + escritas\n\n10.000 × 0,95 = 9.500 leituras\n9.500 × 0,20  = 1.900 misses\n+ 500 escritas = 2.400 ops/s no banco"},
 {t:"Os números de latência",x:"as ordens de grandeza que decidem",oq:"Uma tabela mental de custos: memória em nanossegundos, SSD em microssegundos, rede no mesmo datacenter em centenas de microssegundos, entre continentes em centenas de milissegundos.",ps:"Detectar proposta absurda sem benchmark. Se o desenho exige três idas à Europa dentro de um p99 de 100 ms, ele já morreu.",cf:"Guarde as relações, não os valores exatos: RAM é ~100× mais rápida que SSD; rede local é ~100× mais lenta que RAM; travessia intercontinental é ~100× mais lenta que rede local. <b>Erro comum:</b> decorar a tabela e não usá-la — a utilidade é somar o caminho inteiro da requisição e comparar com o SLO."},
 {t:"O limite do modelo",x:"estimativa não é promessa",oq:"Toda conta de guardanapo usa médias estacionárias e ignora p99, locks, filas, variação de chave e contenção.",ps:"Usar a estimativa para o que ela serve — tornar suposições visíveis — e não como garantia de capacidade.",cf:"A conta detecta ordem de grandeza absurda e expõe premissas. Ela não substitui teste de carga com a mesma distribuição, os mesmos dados e a mesma concorrência. <b>Erro comum:</b> apresentar o número da estimativa como resultado. Diga 'essa conta sugere', nunca 'o sistema suporta'."}
]}
,
{g:"03",n:"Escalar leitura",s:"a escada — cada degrau com gate de entrada e prova de saída",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"A escada, não o checklist",x:"do mais barato ao mais caro de operar",dg:"escada",oq:"Oito degraus em ordem de custo operacional crescente: proteger e observar, remover trabalho evitável, otimizar consulta e índice, controlar concorrência, escalar vertical, cachear, replicar, particionar.",ps:"Impedir que a resposta pule direto para a solução mais cara — que é o que quase todo mundo faz.",cf:"Cada degrau tem uma <b>condição de entrada</b> (só suba se…) e uma <b>prova de saída</b> (mediu o quê?). A ordem não é rígida: consistência, skew e custo podem trocar dois degraus de lugar. <b>Erro comum:</b> tratar como checklist e executar todos. A escada existe para você parar assim que o SLO for atendido.",caso:"Com 10k RPS, a resposta que impressiona não é 'coloco Redis'. É: primeiro ponho timeout e limite de concorrência para parar de aceitar trabalho ilimitado enquanto investigo; depois olho queries por request — se são três e dá para ser uma, acabei de dividir a carga por três sem infraestrutura nova."},
 {t:"Índice é estrutura de acesso",x:"desenhado para a consulta, não para a coluna",oq:"O índice serve a um padrão de acesso concreto: igualdade, faixa e ordenação — nessa ordem dentro da chave composta.",ps:"Parar de criar um índice por coluna e passar a criar o índice que a consulta real usa.",cf:"A ordem das colunas vem da consulta: primeiro as de igualdade, depois a de faixa, depois a de ordenação. Índice <i>covering</i> responde sem tocar na tabela. <b>Erro comum:</b> criar índice sem antes ler o plano — metade das vezes o problema é outro, e você acabou de deixar a escrita mais lenta de graça.",ex:"-- consulta real\nSELECT id, total FROM pedido\n WHERE cliente_id = ? AND criado_em > ?\n ORDER BY criado_em DESC LIMIT 50;\n\n-- o índice que ela pede\nCREATE INDEX ix ON pedido (cliente_id, criado_em DESC)\n  INCLUDE (total);"},
 {t:"Réplica compra escala com lag",x:"e o lag é visível para o usuário",oq:"Cópias que só respondem leitura, alimentadas por replicação assíncrona a partir do primário.",ps:"Tirar leitura do primário quando ele continua sendo o limite depois dos degraus anteriores.",cf:"A replicação atrasa. Leitura que precisa do dado recém-escrito vai ao primário — é o padrão <i>read-your-writes</i>. Trate também <i>monotonic reads</i>: o mesmo usuário não pode ver o dado sumir ao trocar de réplica. <b>Erro comum:</b> mandar tudo para a réplica e o usuário não encontrar o registro que acabou de criar.",map:[["Conceitos de Backend","O mecanismo da replicação e do pool está detalhado lá — aqui interessa quando pagar por ele."],["Arquitetura","Consistência forte ou eventual: o que o negócio aceita."]]},
 {t:"Cache é contrato de freshness",x:"hit rate não é a métrica difícil",oq:"Guardar resultado caro em memória, com uma promessa explícita de quão velho o dado pode estar.",ps:"O ganho mais barato em sistema de leitura intensa — desde que exista reuso.",cf:"Defina três coisas antes de implementar: fonte da verdade, janela de staleness tolerada e estratégia de invalidação (expiração, deleção ou atualização). Cuide do <i>stampede</i>: quando a chave quente expira, mil requisições vão ao banco juntas — resolva com bloqueio de repopulação ou expiração com jitter. <b>Erro comum:</b> cachear dado por usuário numa chave global."},
 {t:"CDN não é só para arquivo",x:"resposta pública também cacheia",oq:"A borda pode guardar resposta de API pública, não apenas imagem e JavaScript.",ps:"Tirar do seu datacenter o tráfego que é idêntico para todo mundo.",cf:"Precisa de cabeçalho de cache correto, chave de cache bem escolhida (cuidado com query string e cookie) e um jeito de invalidar. <b>Erro comum:</b> cachear na borda uma resposta que varia por usuário e vazar dado de um para outro — a falha mais cara desta lista."},
 {t:"Proteção faz parte da escala",x:"recusar cedo é escalar",oq:"Orçamento de concorrência, isolamento por tipo de trabalho, rejeição útil e interrupção de insistência.",ps:"Um sistema que aceita trabalho ilimitado não fica lento: ele cai, e leva junto o que não tinha relação.",cf:"Limite de concorrência por endpoint, <i>bulkhead</i> separando relatório de leitura simples, 429 com <code class=\"i\">Retry-After</code> em vez de fila infinita, e disjuntor para parar de bater na porta fechada. <b>Erro comum:</b> tratar proteção como assunto de segurança, e não de capacidade."}
]}
,
{g:"04",n:"Escalar escrita",s:"por que é mais difícil — e as quatro alavancas",c:"var(--orange)",cs:"var(--orange-soft)",items:[
 {t:"Escrita não tem réplica",x:"a assimetria que muda tudo",oq:"Leitura se resolve duplicando: réplica, cache, CDN. Escrita precisa ir ao dono do dado, virar durável e atualizar todo índice.",ps:"Entender por que a escada da leitura não serve aqui, e por que o teto chega muito mais cedo.",cf:"Cada escrita paga log de transação, atualização de índice, e — se houver replicação síncrona — a espera pela confirmação de outro nó. Duplicar o banco não multiplica a capacidade de escrita: multiplica o trabalho. <b>Erro comum:</b> propor réplica de leitura para um problema de escrita."},
 {t:"Sharding e partition key",x:"a chave é tudo",dg:"shard",oq:"Dividir os dados entre N bancos independentes; a partition key decide para qual deles cada escrita vai.",ps:"A única alavanca que realmente multiplica capacidade de escrita — se a chave distribuir bem.",cf:"Chave com valores concentrados (país, status, data de hoje) cria <i>hot shard</i>: um banco sufocado e os outros ociosos. <code class=\"i\">hash(user_id)</code> distribui; <code class=\"i\">país</code> não, quando 90% é Brasil. Bancos que nasceram distribuídos — Cassandra, DynamoDB, ClickHouse — fazem roteamento e rebalanceamento por você. <b>Erro comum:</b> shardar antes de esgotar índice, cache e réplica.",caso:"A pergunta que o entrevistador sempre faz é literalmente esta: 'qual seria a sua partition key, e por quê?'. Para analytics de eventos, <code class=\"i\">hash(user_id)</code> ou <code class=\"i\">hash(session_id)</code> distribuem; <code class=\"i\">timestamp</code> é a pior escolha possível — todo mundo escreve no shard de agora."},
 {t:"A fila é amortecedor",x:"absorve pico, não cria capacidade",dg:"fila",oq:"Um buffer entre quem produz e o banco: a aplicação publica e responde na hora, consumidores drenam no ritmo que o banco aguenta.",ps:"Sobreviver a pico sem dimensionar o sistema inteiro para o pior minuto do mês.",cf:"Funciona só se a <b>vazão média</b> do banco for maior que a <b>taxa média</b> de entrada. Se a média já não cabe, a fila cresce para sempre: o lag vira infinito e você trocou 'cair' por 'atrasar', que às vezes é pior. <b>Erro comum:</b> este exato — é onde mais candidato cai.",map:[["Mensageria","Confirms, ack, prefetch, DLQ e outbox estão detalhados lá — aqui a fila aparece só como alavanca de escala."]]},
 {t:"Batching",x:"troca latência por vazão",oq:"Agrupar N escritas numa transação só, pagando o pedágio de rede, parsing e log uma vez em vez de N.",ps:"A melhor relação custo-benefício em escrita massiva — ganho de ordem de grandeza com pouca complexidade.",cf:"Você espera juntar N registros ou X milissegundos antes de gravar. Para métrica, log e evento isso é irrelevante; para 'o usuário precisa ver agora', não serve. <b>Erro comum:</b> lote sem limite de tempo — em tráfego baixo o dado fica preso no buffer indefinidamente.",ex:"// 1.000 inserts isolados: overhead × 1.000\n// 1 batch de 1.000: overhead × 1\n\njdbc.batchUpdate(SQL, lote);  // flush por tamanho OU por tempo\n// sem o \"ou por tempo\", trafego baixo trava o dado no buffer"},
 {t:"Agregação na borda",x:"não mandar tudo para o centro",oq:"Servidores próximos ao usuário acumulam localmente e enviam apenas totais consolidados ao banco central.",ps:"Derrubar o volume que chega ao centro em ordens de grandeza, quando o evento bruto individual não precisa ser guardado.",cf:"Se a pergunta do negócio é 'quantas visualizações na última hora', não é preciso mandar 1 milhão de linhas — basta mandar o número. <b>Erro comum:</b> usar isso quando o evento bruto é necessário depois (auditoria, reprocessamento, análise nova). A agregação é irreversível: o que você jogou fora não volta.",caso:"1 milhão de eventos/s na entrada, soma local por segundo em cada borda, e o banco central recebe cerca de 100 escritas/s. É a diferença entre um cluster caríssimo e um banco comum."},
 {t:"A montagem do 1M/s",x:"as quatro alavancas juntas",oq:"Clientes → Kafka particionado (buffer e ordem por chave) → consumidores com batching de mil linhas → banco shardado ou colunar.",ps:"Ver que nenhuma alavanca sozinha resolve: cada uma ataca uma parte diferente do problema.",cf:"A fila absorve a irregularidade; o batching reduz o pedágio por linha; o sharding multiplica a capacidade; a agregação, quando aplicável, reduz o volume na origem. <b>Erro comum:</b> apresentar só uma delas e achar que respondeu."}
]}
,
{g:"05",n:"Existência em escala",s:"responder 'esse nome está livre?' para dois bilhões",c:"var(--pink)",cs:"var(--pink-soft)",items:[
 {t:"O ingênuo já é quase rápido",x:"o índice muda a ordem de grandeza",oq:"<code class=\"i\">SELECT 1 FROM users WHERE username = ? LIMIT 1</code> num índice único sobre 2 bilhões de linhas custa cerca de cinco saltos de árvore.",ps:"Desfazer a intuição errada de que 'procurar em 2 bilhões é lento'. Sem índice é varredura de minutos; com índice é sub-milissegundo.",cf:"A B-tree tem fan-out alto: 2 bilhões de chaves cabem em cerca de cinco níveis. O tamanho da tabela quase não muda a latência de um lookup por chave — é essa propriedade que sustenta quase todo sistema grande. <b>Erro comum:</b> propor arquitetura exótica para um problema que o índice resolve."},
 {t:"Bloom filter",x:"erra só para um lado",dg:"bloom",oq:"Vetor de bits mais k funções de hash. Responde 'com certeza não existe' ou 'talvez exista', usando uma fração da memória de um índice.",ps:"Evitar a ida ao banco no caso comum — um nome inventado qualquer está livre, e essa é a maioria das consultas.",cf:"Se algum dos k bits for 0, o valor nunca foi inserido: resposta definitiva, sem I/O. Se todos forem 1, pode ser falso positivo — aí sim consulta o índice. Para 2 bilhões de chaves a 1% de falso positivo, cerca de 2 a 3 GB de RAM, contra dezenas ou centenas de GB do índice. <b>Erro comum:</b> tratar o Bloom como fonte da verdade. Ele é barreira de economia; quem garante unicidade é o índice."},
 {t:"A verdade acontece no INSERT",x:"a checagem é só UX",oq:"Duas pessoas podem ver 'disponível' ao mesmo tempo. Quem desempata é a restrição única na gravação.",ps:"Não confundir a consulta otimista que alimenta a interface com a garantia de unicidade.",cf:"O <code class=\"i\">UNIQUE INDEX</code> deixa um passar e devolve violação ao outro, que vira a mensagem 'acabou de ser escolhido'. <b>Erro comum:</b> reservar o nome só pela checagem — a corrida deixa dois donos.",ex:"CREATE UNIQUE INDEX ix_users_username ON users (username);\n\nINSERT INTO users (username) VALUES (?);\n-- dois simultaneos: um passa, o outro leva violacao\n-- traduza a violacao em \"acabou de ser pego\", nao em 500"},
 {t:"Nomes quentes e sharding",x:"as duas camadas restantes",oq:"O cache guarda os usernames muito consultados; o sharding por <code class=\"i\">hash(username)</code> espalha os 2 bilhões entre nós.",ps:"Cobrir a repetição (cache) e o volume (shard) sem tocar na camada de verdade.",cf:"O roteador manda a consulta direto ao shard certo, e a busca continua sendo um lookup pequeno — agora paralelizável. <b>Erro comum:</b> cache sem invalidação no momento do INSERT: alguém registra o nome e o cache continua dizendo 'livre' por mais um TTL."}
]}
,
{g:"06",n:"Listar em escala",s:"paginar um milhão sem o custo crescer com a página",c:"var(--yellow)",cs:"var(--yellow-soft)",items:[
 {t:"OFFSET paga pelo que joga fora",x:"o custo cresce com a profundidade",dg:"keyset",oq:"<code class=\"i\">LIMIT 10 OFFSET 500000</code> faz o banco produzir 500.010 linhas ordenadas e descartar 500.000.",ps:"Entender por que a página 1 responde em milissegundos e a página 5.000 derruba o SLO.",cf:"O banco não tem como 'pular' sem gerar: ele precisa ordenar até chegar lá. O custo é linear na profundidade. <b>Erro comum:</b> medir a paginação só na primeira página e declarar que está rápida."},
 {t:"Keyset: a fronteira vira consulta",x:"custo constante em qualquer página",oq:"Em vez de dizer quantas linhas pular, você diz depois de qual item continuar — e o índice salta direto para lá.",ps:"Paginação com custo constante, independente de quão fundo o usuário está.",cf:"A comparação precisa ser em tupla, com desempate estável: <code class=\"i\">(criado_em, id) &lt; (?, ?)</code>. E o índice precisa ter as mesmas colunas na mesma ordem, senão o salto não acontece. Buscar N+1 linhas informa se existe próxima página sem um COUNT. <b>Erro comum:</b> ordenar só por data, que empata e faz item aparecer duas vezes ou sumir.",ex:"SELECT id, criado_em, total FROM pedido\n WHERE cliente_id = ?\n   AND (criado_em, id) < (?, ?)\n ORDER BY criado_em DESC, id DESC\n LIMIT 51;"},
 {t:"O cursor é contrato",x:"opaco, versionado, com erro nomeado",oq:"O cursor devolvido ao cliente é parte da API pública, com as mesmas obrigações de qualquer contrato.",ps:"Poder mudar a implementação depois sem quebrar quem já está paginando.",cf:"Opaco (base64 de um payload interno) para o cliente não construir cursor à mão; versionado para você evoluir o formato; com erros nomeados — cursor inválido, cursor expirado, ordenação incompatível. <b>Erro comum:</b> expor o valor cru da chave, o que congela a sua escolha de ordenação para sempre."},
 {t:"Enquanto você pagina, o mundo muda",x:"snapshot, watermark e export",oq:"Com inserções concorrentes, offset faz item pular ou repetir; keyset continua depois de uma identidade e não se perde.",ps:"Escolher a estratégia pela intenção: navegar, exportar ou reconciliar.",cf:"Quatro estratégias, quatro intenções: <b>offset</b> para telas com número de página e pouca profundidade; <b>keyset</b> para rolagem infinita e APIs; <b>snapshot ou watermark</b> quando a lista precisa ser estável durante toda a travessia; <b>export assíncrono</b> quando o volume não cabe numa requisição. <b>Erro comum:</b> usar paginação de tela para varrer a base inteira — isso é export, não paginação."}
]}
,
{g:"07",n:"Arquivos e tempo real",s:"tirar bytes da sua aplicação e escolher o canal certo",c:"var(--blue)",cs:"var(--blue-soft)",items:[
 {t:"O arquivo não passa pela sua API",x:"URL pré-assinada",oq:"A aplicação gera uma URL temporária e assinada; o cliente envia os bytes direto para o storage.",ps:"Tirar tráfego de arquivo do caminho da sua aplicação — ela deixa de ser gargalo de banda e de memória.",cf:"A aplicação só autoriza (chave gerada no servidor, tamanho máximo, tipo, prazo curto) e depois confirma por HEAD. Os bytes nunca a atravessam. <b>Erro comum:</b> validade longa demais, o que transforma a URL num acesso permanente para quem a copiar.",map:[["Conceitos de Backend","MinIO, multipart e o passo a passo do upload estão detalhados lá."],["Nuvem","Armazenamento de objetos sem depender de um provedor."]]},
 {t:"Multipart e a decisão por tamanho",x:"pedaço a pedaço, com retomada",oq:"O arquivo é dividido em partes enviadas separadamente e remontadas pelo storage no final.",ps:"Enviar arquivo grande com retomada por parte, paralelismo e sem segurar tudo em memória.",cf:"Uma régua honesta por tamanho: até alguns MB, upload direto resolve; acima disso, pré-assinada; acima de centenas de MB, multipart com retomada. Falhou uma parte, reenvia só ela. <b>Erro comum:</b> não abortar upload incompleto — as partes ficam ocupando espaço e sendo cobradas em silêncio."},
 {t:"Quarentena e evento do storage",x:"o que acontece depois do upload",oq:"O objeto chega num bucket de quarentena, dispara um evento, é verificado e só então promovido ao bucket de produção.",ps:"Não servir ao público um arquivo que ninguém olhou — e processar de forma assíncrona sem acoplar ao upload.",cf:"O evento de <i>object created</i> vira mensagem numa fila e o consumidor faz a verificação. <b>Erro comum:</b> supor que o evento chega exatamente uma vez — chega ao menos uma vez, então o consumidor precisa ser idempotente."},
 {t:"A escada do tempo real",x:"escolha pelo sentido do tráfego",dg:"tempo",oq:"Polling pergunta de novo; long polling segura a requisição; SSE é um canal do servidor para o cliente; WebSocket é bidirecional e persistente.",ps:"Escolher pelo sentido e pela frequência, não pela novidade.",cf:"Progresso, feed e notificação são só de ida: SSE resolve, é mais simples e passa em qualquer proxy HTTP. Chat e colaboração precisam de volta: WebSocket, e você herda reconexão, estado de conexão e um balanceador que entenda conexão longa. <b>Erro comum:</b> WebSocket para um caso que era notificação."},
 {t:"SOAP, REST, GraphQL e gRPC",x:"escolher pelo problema",oq:"Quatro estilos com contratos e custos diferentes: envelope XML com contrato rígido, recursos sobre HTTP, consulta moldada pelo cliente, e RPC binário sobre HTTP/2.",ps:"Ter um critério em vez de um gosto.",cf:"REST para API pública e cacheável; gRPC entre serviços internos com contrato forte e latência baixa; GraphQL quando clientes muito diferentes precisam de recortes diferentes do mesmo grafo — ao custo de cache e limite de profundidade. SOAP aparece em integração corporativa e bancária legada. <b>Erro comum:</b> GraphQL como padrão da casa e depois descobrir que perdeu o cache de borda.",map:[["Arquitetura","REST, gRPC e GraphQL pelo problema, e contratos com versionamento."]]}
]}
,
{g:"08",n:"Sobreviver à falha",s:"em rede, a única certeza é que uma parte vai cair",c:"var(--red)",cs:"var(--red-soft)",items:[
 {t:"Falha parcial",x:"os três casos indistinguíveis",dg:"falha",oq:"Quando uma chamada não responde, você não consegue saber se ela não chegou, se chegou e executou, ou se executou e a resposta se perdeu.",ps:"É o modo de falha que não existe em programa local e que define quase todo o resto do design distribuído.",cf:"Como os três são indistinguíveis de fora, o repetir precisa ser seguro — ou seja, idempotente. Sem isso, todo retry é uma aposta. <b>Erro comum:</b> tratar timeout como 'não aconteceu'. Timeout não é resposta: é ausência de resposta.",map:[["Arquitetura","Falha parcial, degradação graciosa e recuperação."],["Conceitos de Backend","Idempotency key: como tornar qualquer operação segura para repetir."]]},
 {t:"Timeout, retry e jitter",x:"e por que retry ingênuo piora",oq:"Todo I/O remoto precisa de prazo. Retry repete o que falhou, com espera crescente e um componente aleatório.",ps:"Absorver falha transitória sem transformar um soluço em avalanche.",cf:"Sem jitter, todos os clientes que falharam juntos voltam juntos — é a tempestade de retry que derruba o serviço que estava se recuperando. Limite o número de tentativas e só repita o que é idempotente. <b>Erro comum:</b> retry em cada camada: três camadas com três tentativas viram 27 chamadas.",ex:"espera = base × 2^tentativa × (0,5 + random()/2)\n// 100ms → ~200ms → ~400ms  (com jitter, espalhado)\n// teto de tentativas SEMPRE\n// e so repita operacao idempotente"},
 {t:"Disjuntor",x:"parar de bater na porta fechada",oq:"Depois de N falhas seguidas, o disjuntor abre e as chamadas falham imediatamente, sem nem tentar.",ps:"Impedir que uma dependência lenta consuma todas as suas threads e derrube o que não tinha relação com ela.",cf:"Três estados: fechado, aberto e meio-aberto — este último deixa uma chamada testar se o outro lado voltou. <b>Erro comum:</b> disjuntor sem timeout na chamada. Sem prazo, ele nunca conta falha: só acumula thread presa, que é exatamente o que ele deveria evitar."},
 {t:"Backpressure e degradação",x:"recusar cedo, responder pior",oq:"Backpressure é recusar trabalho quando não há capacidade. Degradação graciosa é entregar uma resposta pior em vez de nenhuma.",ps:"Escolher conscientemente o que sacrificar quando não dá para atender tudo.",cf:"Aceitar tudo e cair atende zero pessoas; recusar 10% atende 90%. Degradar é servir o dado do cache mesmo velho, esconder a seção de recomendações, desligar o relatório pesado. <b>Erro comum:</b> fila interna sem teto, que troca uma falha rápida e clara por uma lenta e confusa."},
 {t:"Balanceador e health check",x:"quem sai da rotação e quando",oq:"O balanceador distribui e, por saúde, tira de rotação quem não responde.",ps:"Entender que a saúde que importa é 'posso receber tráfego agora', não 'o processo está vivo'.",cf:"Separe as duas perguntas: <i>readiness</i> decide rotação e pode falhar temporariamente sem reiniciar nada; <i>liveness</i> decide reinício e deve testar só o próprio processo. <b>Erro comum:</b> liveness que testa o banco — o banco pisca, todas as instâncias reiniciam ao mesmo tempo e você derruba o sistema inteiro por conta própria.",map:[["Docker e Kubernetes","Probes, rollout e graceful shutdown no detalhe."]]}
]}
,
{
    g: "09",
    n: "8 Passos & Contas",
    s: "o framework das entrevistas e a matemática das restrições",
    c: "var(--teal)",
    cs: "var(--teal-soft)",
    items: [
      {
        t: "Os 8 passos da entrevista",
        x: "o roteiro metódico completo",
        oq: "Roteiro sequencial de condução de System Design: escopo, estimativas, arquitetura HLD, trade-offs, dados, APIs, resiliência e observabilidade.",
        ps: "Garantir que a solução ataque os requisitos reais e não caia na armadilha de desenhar caixas cedo demais.",
        cf: "Gaste os primeiros 10 minutos exclusivamente em requisitos funcionais/não-funcionais e estimativas antes de desenhar qualquer componente."
      },
      {
        t: "Teorema PACELC",
        x: "latência vs consistência no dia a dia",
        oq: "Extensão moderna do Teorema CAP: Se há Partição (P), escolha entre Disponibilidade (A) ou Consistência (C); Senão (Else), escolha entre Latência (L) ou Consistência (C).",
        ps: "Decidir o comportamento do sistema durante 99.9% do tempo de operação normal sem partição de rede.",
        cf: "Bancos como DynamoDB e Cassandra optam por PA/EL (baixa latência sob operação normal); MongoDB e Spanner priorizam consistência PC/EC."
      },
      {
        t: "Latências de Jeff Dean",
        x: "as ordens de grandeza da física",
        oq: "Tabela referencial de latências: L1 (0.5ns), RAM (100ns), SSD (100µs), LAN Datacenter (0.5ms), HDD (10ms), WAN (120ms).",
        ps: "Validar em segundos se um desenho arquitetural é fisicamente viável para o SLO exigido.",
        cf: "RAM é ~1000x mais rápida que SSD e ~100.000x mais rápida que disco mecânico. Toda proposta arquitetural deve somar os saltos de rede e I/O."
      },
      {
        t: "Fórmulas de guardanapo",
        x: "o truque dos 100k segundos",
        oq: "Regras de conversão rápida: 1 dia ≈ 100.000 segundos; QPS = requisições/dia ÷ 100.000; regra 80/20 de RAM para cache de dados diários.",
        ps: "Calcular capacidade de tráfego, armazenamento de 5 anos e tamanho de cluster sem calculadora.",
        cf: "100 milhões de requisições/dia equivalem a 1.000 QPS médios e 2.000 a 3.000 QPS de pico."
      }
    ]
  }
,
{
    g: "10",
    n: "17 Sistemas do Mundo Real",
    s: "arquitetura, fluxo e trade-offs dos casos canônicos",
    c: "var(--violet)",
    cs: "var(--violet-s)",
    items: [
      {
        t: "URL Shortener & KGS",
        x: "Base62 e pré-geração de chaves",
        oq: "Encurtar URLs com chaves Base62 de 7 caracteres (3.5 trilhões de combinações) e Key Generation Service (KGS).",
        ps: "Evitar colisões de hash e locks de escrita em alta concorrência.",
        cf: "HTTP 301 cacheia no browser (alivia servidor); HTTP 302/307 força passagem pelo servidor (permite métricas e analytics)."
      },
      {
        t: "WhatsApp & Presence",
        x: "WebSockets e Heartbeat no Redis",
        oq: "Mensageria bidirecional via WebSockets com roteamento entre servidores via Kafka/Redis e presença por heartbeat TTL.",
        ps: "Manter milhões de conexões abertas com entrega sub-segundo e indicação de online/offline.",
        cf: "Armazenamento local no SQLite do aparelho para fluidez imediata e Cassandra particionado por chat_id na nuvem."
      },
      {
        t: "Uber & Geohash",
        x: "telemetria e matching geoespacial",
        oq: "Ingestão de GPS a cada 4s indexada via Geohash, QuadTree ou Google S2/H3 com Redis Geospatial.",
        ps: "Localizar motoristas livres em raio de 3km em milissegundos sem esgotar banco relacional.",
        cf: "Matching engine aplica lock distribuído temporário de 15 segundos para evitar corrida entre motoristas."
      },
      {
        t: "Netflix & ABR Video",
        x: "chunking e CDN descentralizada",
        oq: "Transcoding em chunks de 4 a 10s em múltiplos formatos (HLS/DASH) servidos via Open Connect CDN nos ISPs.",
        ps: "Evitar buffering em redes instáveis adaptando a resolução dinamicamente.",
        cf: "Adaptive Bitrate (ABR) no player do usuário reduz de 1080p para 720p se a banda oscilar sem pausar a reprodução."
      },
      {
        t: "Google Maps & Contraction",
        x: "map tiles e grafos rodoviários",
        oq: "Renderização por azulejos vetoriais (Map Tiles) em CDN e roteamento por Contraction Hierarchies em grafos de transporte.",
        ps: "Calcular rotas de milhares de quilômetros em menos de 5 milissegundos.",
        cf: "Contraction Hierarchies pré-calcula atalhos em rodovias principais; Flink ajusta pesos com tráfego em tempo real."
      },
      {
        t: "Search & Inverted Index",
        x: "URL frontier e busca invertida",
        oq: "Crawler com filas de prioridade e politeness delay, deduplicação SimHash e Índice Invertido distribuído.",
        ps: "Varrer a web sem derrubar alvos e buscar termos em milissegundos.",
        cf: "BM25 avalia frequência de termos; PageRank avalia autoridade; busca por interseção de posting lists."
      },
      {
        t: "Flash Sale & Redlock",
        x: "estoque atômico e padrão Saga",
        oq: "Prevenção de sobrevenda com scripts Lua atômicos no Redis, Redlock e filas virtuais de espera na borda.",
        ps: "Vender 1.000 ingressos para 100.000 compradores simultâneos com zero inconsistência.",
        cf: "Padrão Saga orquestrado com chaves de idempotência garante reserva temporária, cobrança e baixa segura."
      },
      {
        t: "Twitter & Hybrid Fanout",
        x: "push para comuns, pull para celebridades",
        oq: "Arquitetura híbrida de feed: Fanout-on-Write (Push) para usuários normais e Fanout-on-Read (Pull) para perfis com mais de 25k seguidores.",
        ps: "Evitar o Fanout Bomb de 100 milhões de escritas quando celebridades postam.",
        cf: "Timeline cacheada em Redis Sorted Sets (ZSet) ordenada por timestamp do post."
      },
      {
        t: "Notificações & Multi-Canal",
        x: "prioridade e deduplicação",
        oq: "Gateway multi-canal (APNs, FCM, SMS, Email) com filas de prioridade e deduplicação por sliding window.",
        ps: "Garantir envio prioritário de 2FA sem que mensagens promocionais travem o sistema.",
        cf: "Redis sliding window impede envio repetido do mesmo alerta em caso de retries."
      },
      {
        t: "Drive & Block Deduplication",
        x: "chunks de 4MB e delta-sync",
        oq: "Divisão de arquivos em blocos de 4MB com hash SHA-256 e sincronização apenas de blocos modificados (Delta-Sync).",
        ps: "Economizar petabytes de storage em arquivos compartilhados e gigabytes de tráfego de rede.",
        cf: "Metadados (permissões, pastas) no banco relacional/Spanner; blocos brutos imutáveis no S3/Object Storage."
      },
      {
        t: "Rate Limiter Distribuído",
        x: "Token Bucket e Sliding Window",
        oq: "Controle de taxa de requisições usando Token Bucket ou Sliding Window Counter implementado com scripts Lua no Redis.",
        ps: "Proteger serviços contra abuso e sobrecarga com execução atômica sem race conditions.",
        cf: "Retorna cabeçalhos padronizados X-RateLimit e código HTTP 429 Too Many Requests com Retry-After."
      },
      {
        t: "Cache Distribuído & Anticatástrofe",
        x: "consistent hashing e stampede",
        oq: "Cluster de cache com Consistent Hashing (Vnodes) e proteção contra Cache Stampede, Avalanche e Penetration.",
        ps: "Garantir resiliência máxima na camada de cache em memória.",
        cf: "XFetch / Mutex lock impede thundering herd; Jitter no TTL previne avalanche; Bloom Filter barra penetration."
      },
      {
        t: "Autocomplete & Trie Top-K",
        x: "árvore de prefixos com Top-5 pré-salvo",
        oq: "Estrutura Trie onde cada nó armazena pré-calculada a lista dos Top-5 termos mais frequentes, com consulta O(p).",
        ps: "Devolver sugestões de pesquisa em menos de 30 milissegundos enquanto o usuário digita.",
        cf: "Pipeline offline em Apache Spark/MapReduce recalcula as frequências e reconstrói o Trie periodicamente."
      },
      {
        t: "Métricas & Gorilla TSDB",
        x: "compressão delta-of-delta e rollup",
        oq: "Ingestão massiva de telemetria em Time-Series Database com compressão Gorilla (1.37 bytes/amostra) e downsampling.",
        ps: "Monitorar milhares de microsserviços sem explodir custos de armazenamento.",
        cf: "Dados de 1s guardados por 7 dias; agregados de 5m por 30 dias; médias de 1h retidas por 1 ano."
      },
      {
        t: "Stripe & Double-Entry Ledger",
        x: "partida dobrada e idempotência",
        oq: "Contabilidade de partida dobrada (débito + crédito = 0) em ledger append-only imutável com chaves de idempotência.",
        ps: "Garantir integridade financeira absoluta: nenhum centavo duplicado ou perdido em quedas de rede.",
        cf: "Chave de idempotência no header HTTP e reconciliação diária assíncrona com adquirentes e bancos."
      },
      {
        t: "YouTube & Transcoding DAG",
        x: "upload resumível, GOP slicing e Vitess",
        oq: "Ingestão massiva de vídeo UGC com upload resumível HTTP PATCH, pipeline de transcodificação DAG em chunks GOP e sharding Vitess.",
        ps: "Processar 500 horas de vídeo enviadas por minuto sem gargalo de transcodificação e tolerando instabilidades de rede.",
        cf: "Fatiamento por GOP permite transcodificar centenas de chunks em paralelo; contagem de views via Redis HyperLogLog com flush em lote."
      },
      {
        t: "Spotify & Audio Prefetch",
        x: "start sub-200ms e Spotify Connect",
        oq: "Streaming de música com prefetch dos primeiros 10s, cache local criptografado DRM, Cassandra para playlists e Spotify Connect via WebSockets.",
        ps: "Iniciar áudio instantaneamente ao clicar e controlar playback sincronizado entre múltiplos dispositivos (celular, desktop, TV).",
        cf: "Prefetching de 10 segundos mascara a latência de rede; WebSockets com backend de eventos garantem troca de dispositivo sem corte."
      }
    ]
  }
,
{
    g: "11",
    n: "System Design para IA",
    s: "model serving, RAG híbrido, MCP e agentes em escala",
    c: "var(--cyan)",
    cs: "var(--arc-soft)",
    items: [
      {
        t: "Inference Serving & PagedAttention",
        x: "continuous batching e gestão de VRAM",
        oq: "Arquitetura de model serving para LLMs dominando o desbalanço entre fase Prefill (compute-bound) e Decode (memory-bound).",
        ps: "Maximizar throughput de tokens e minimizar TTFT em clusters de GPU de alto custo.",
        cf: "Continuous batching inclui novas requisições a cada token; PagedAttention divide KV-Cache em páginas virtuais não contíguas."
      },
      {
        t: "Enterprise RAG & Hybrid Search",
        x: "BM25 + Dense Vectors + Reranking",
        oq: "Pipeline RAG combinando busca léxica exata (BM25) com busca vetorial densa (HNSW) via RRF e Cross-Encoder Reranking.",
        ps: "Eliminar alucinações e permitir busca precisa de termos exatos (códigos, IDs, datas) e semântica.",
        cf: "Reranker avalia os 100 melhores chunks e seleciona os 5 mais relevantes para o prompt final da LLM."
      },
      {
        t: "Protocolo MCP (Model Context Protocol)",
        x: "o padrão aberto de conexão com IA",
        oq: "Protocolo aberto Client-Host-Server para conectar modelos de linguagem a ferramentas, dados corporativos e prompts.",
        ps: "Desacoplar os modelos e agentes das integrações de sistemas de produção com schemas JSON padronizados.",
        cf: "MCP Servers expõem recursos, ferramentas e prompts de forma segura com controle estrito de permissões pelo Host."
      },
      {
        t: "Semantic Cache & AI Agents",
        x: "ReAct loop e economia radical de tokens",
        oq: "Agentes autônomos com loop ReAct e guardrails, acelerados por Prompt Caching na GPU e Semantic Caching no Redis Vector.",
        ps: "Reduzir custos de API em 40% a 80% e responder perguntas repetidas com latência instantânea.",
        cf: "Se uma pergunta tem similaridade de cosseno > 0.95 com uma anterior, responde direto do cache sem chamar a LLM."
      }
    ]
  }
,
{g:"12",n:"Como aprender de verdade",s:"vídeo dá o mapa, doc dá a precisão, lab fixa",c:"var(--amber)",cs:"var(--amber-soft)",items:[
 {t:"O ciclo",x:"e a volta que quase ninguém faz",dg:"ciclo",oq:"Ler aqui → ver vídeo → ler a documentação oficial → fazer o laboratório → escrever a nota do que quebrou → repetir.",ps:"System Design é a área em que é mais fácil confundir reconhecer com saber: o desenho parece claro, e você não conseguiria defendê-lo sob pergunta.",cf:"A volta do ciclo é a parte que fixa: escrever, com as suas palavras, o que quebrou e por quê. <b>Erro comum:</b> parar no vídeo. Vídeo mostra o desenho pronto e esconde as dez decisões que levaram até ele."},
 {t:"Canais e cursos em português",x:"para este assunto",oq:"Fontes em PT-BR que tratam de escala, dados e sistemas distribuídos com profundidade.",ps:"Ter um mapa em português antes de atravessar a documentação em inglês.",cf:"<b>Rodrigo Branas</b> e <b>Fabio Akita</b> cobrem arquitetura e sistemas com profundidade incomum em português. <b>Full Cycle</b> e <b>Código Fonte TV</b> têm material de sistemas distribuídos e mensageria. Em inglês, o canal <b>ByteByteGo</b> (do autor do System Design Interview) é o complemento visual mais direto. <b>Regra:</b> nunca cite um número de vídeo sem conferir na documentação — a metade dos números que circulam está desatualizada."},
 {t:"Como pesquisar",x:"o nome exato, na fonte certa",oq:"Buscar pelo nome do mecanismo, restrito à documentação oficial, em vez de pelo sintoma.",ps:"Metade da competência é saber o nome da coisa. Com ele, a resposta vem em minutos.",cf:"Para banco, rode <code class=\"i\">EXPLAIN ANALYZE</code> antes de pesquisar — o plano diz o nome do problema. Para escala, procure pelo mecanismo (<i>keyset pagination</i>, <i>hot partition</i>, <i>cache stampede</i>), não pelo sintoma ('API lenta').",ex:"site:postgresql.org index-only scan covering\n\"keyset pagination\" tuple comparison postgres\n\"hot partition\" dynamodb partition key design\ncache stampede thundering herd mitigation"},
 {t:"Praticar: os quatro casos",x:"o laboratório que fecha o documento",oq:"Reproduzir localmente os quatro problemas deste documento, com dados sintéticos e medição.",ps:"Você não precisa de 10k RPS reais para aprender: precisa de uma curva que mude quando você muda o desenho.",cf:"(1) Gere 1 milhão de pedidos e compare OFFSET 500000 com keyset, medindo a diferença; (2) dispare carga concorrente e observe a fila do pool antes e depois de reduzir queries por request; (3) implemente o Bloom filter na frente de um índice único e meça quantas idas ao banco desapareceram; (4) monte o consumidor com batching e compare a vazão com inserts isolados. Todos rodam num PostgreSQL em container.",ex:"# a curva que prova a paginacao\nfor p in 1 10 100 1000 5000; do\n  psql -c \"EXPLAIN ANALYZE SELECT * FROM pedido\n           ORDER BY criado_em DESC, id DESC\n           LIMIT 10 OFFSET $((p*10));\"\ndone\n# offset: o tempo cresce. keyset: o tempo nao muda.",star:true}
]}
];


/* ---------- render ---------- */


/* ---------- render ---------- */
/* ================== NAVEGAÇÃO (trilha + conteúdo) ================== */
var nav=document.getElementById("nav");
var navMap={};
function navHead(txt){var a=document.createElement("a");a.className="sec";a.style.color="var(--soft)";a.style.marginTop="18px";a.style.fontSize=".68rem";a.textContent=txt;nav.appendChild(a);}
/* ================== TRILHA ================== */
var flat=[];T.forEach(function(g){g.items.forEach(function(it){it._g=g;flat.push(it);});});
flat.forEach(function(it,i){it._i=i;it._id=it.t.toLowerCase().replace(/[^a-z0-9]+/g,'-');});
var KEYT="system-design-completo-CL-trilha-v1";
var doneT={};try{doneT=JSON.parse(localStorage.getItem(KEYT)||"{}");}catch(e){}
var track=document.getElementById("track"),lg=document.getElementById("lg");
navHead("A trilha · 12 marcos");
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
  if(it.caso)h+='<div class="blk"><h4>No caso concreto</h4><p>'+it.caso+'</p></div>';
  if(it.map)h+='<div class="blk"><h4>Onde a teoria mora</h4><table class="vmap"><tbody>'+it.map.map(function(r){return '<tr><td class="vp">'+r[0]+'</td><td>'+r[1]+'</td></tr>';}).join('')+'</tbody></table></div>';
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
  e=e.replace(/(\/\/[^\n]*|#[^\n]*|--[^\n]*)/g,'<span class="c">$1</span>');
  e=e.replace(/"([^"\n]*)"/g,'<span class="s">"$1"</span>');
  e=e.replace(/\b(class|interface|record|enum|new|return|static|final|void|try|catch|finally|throw|throws|if|else|for|while|switch|case|public|private|protected|var|implements|extends|import|SELECT|FROM|WHERE|AND|OR|ORDER|BY|LIMIT|INSERT|INTO|VALUES|UPDATE|SET|CREATE|INDEX|UNIQUE|EXPLAIN|ANALYZE)\b/g,'<span class="k">$1</span>');
  e=e.replace(/\b(int|long|double|boolean|String|List|Map|Set|Optional|BigDecimal|LocalDate|Duration|Instant|Page|Slice)\b/g,'<span class="t">$1</span>');
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
navHead("O conteúdo · 12 partes");
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
var KEYM="system-design-completo-CL-conteudo-v1";
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
    var txt=(it.t+" "+it.x+" "+it.oq+" "+it.ps+" "+it.cf+" "+(it.caso||"")).toLowerCase();
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
  e=e.replace(/\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|record|return|sealed|permits|short|static|super|switch|synchronized|this|throw|throws|transient|try|var|void|volatile|while|when|yield|true|false|null|SELECT|FROM|WHERE|AND|OR|INSERT|INTO|VALUES|UPDATE|SET|JOIN|ON|ORDER|BY|LIMIT|OFFSET|BEGIN|COMMIT|ROLLBACK|CREATE|INDEX|UNIQUE|EXPLAIN|ANALYZE|FOR|DESC|ASC|WITH|AS|GROUP|HAVING|PARTITION)\b/g,'<span class="k">$1</span>');
  e=e.replace(/\b([A-Z][A-Za-z0-9_]*)\b/g,'<span class="t">$1</span>');
  e=e.replace(/\b(\d[\d_]*)\b/g,'<span class="n">$1</span>');
  e=e.replace(/§(\d+)§/g,function(_,i){return store[+i];});
  el.innerHTML=e;
}
document.querySelectorAll("section.part pre code").forEach(hl);
paint();onScroll();
/* ================== MODO TESTE (retrieval practice) ================== */
(function(){
 var RK="system-design-completo-CL-rev-v1";
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




/* ---------- bloco 2 de 3 ---------- */

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


/* ---------- bloco 3 de 3 ---------- */

/* "Para ir alem" recolhido nao sai no papel. Abre todos antes de imprimir e
   devolve ao estado anterior depois, para nao mudar o que a pessoa via. */
(function(){
  var abertos=null;
  function antes(){
    var ds=document.querySelectorAll("details.alem");
    abertos=[];
    for(var i=0;i<ds.length;i++){abertos.push(ds[i].open);ds[i].open=true;}
  }
  function depois(){
    if(!abertos)return;
    var ds=document.querySelectorAll("details.alem");
    for(var i=0;i<ds.length;i++)ds[i].open=abertos[i];
    abertos=null;
  }
  window.addEventListener("beforeprint",antes);
  window.addEventListener("afterprint",depois);
  if(window.matchMedia){
    var mq=matchMedia("print");
    if(mq.addEventListener)mq.addEventListener("change",function(e){e.matches?antes():depois();});
  }
})();

/* Extraido de cadernos/conceitos-backend.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 3 ---------- */

function W(h,inner){return '<figure class="dg"><svg viewBox="0 0 340 '+h+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg></figure>';}
var DG={
 garg:W(150,'<text x="170" y="16" class="bt">a corrente arrebenta no elo mais fraco</text><rect x="6" y="34" width="58" height="28" rx="7" class="b2"/><text x="35" y="52" class="bs">cliente</text><rect x="76" y="34" width="58" height="28" rx="7" class="b2"/><text x="105" y="52" class="bs">LB</text><rect x="146" y="34" width="58" height="28" rx="7" class="b1"/><text x="175" y="52" class="bs">app ×4</text><rect x="216" y="34" width="58" height="28" rx="7" class="b5"/><text x="245" y="52" class="bs">pool</text><rect x="278" y="34" width="56" height="28" rx="7" class="b5"/><text x="306" y="52" class="bs">banco</text><path d="M64,48 L74,48" class="l"/><path d="M134,48 L144,48" class="l"/><path d="M204,48 L214,48" class="lr"/><path d="M274,48 L276,48" class="lr"/><text x="245" y="76" class="bs">↑ satura aqui</text><text x="170" y="100" class="bs">escalar a app de 4 para 8 não ajuda:</text><text x="170" y="114" class="bs">o banco continua aceitando as mesmas 100 conexões</text><text x="170" y="136" class="bt">meça antes de escalar</text>'),
 race:W(168,'<text x="85" y="16" class="bt">cliente A</text><text x="255" y="16" class="bt">cliente B</text><line x1="85" y1="24" x2="85" y2="140" class="l d"/><line x1="255" y1="24" x2="255" y2="140" class="l d"/><rect x="24" y="32" width="122" height="22" rx="6" class="b2"/><text x="85" y="47" class="bs">lê estoque = 1</text><rect x="194" y="56" width="122" height="22" rx="6" class="b2"/><text x="255" y="71" class="bs">lê estoque = 1</text><rect x="24" y="82" width="122" height="22" rx="6" class="b5"/><text x="85" y="97" class="bs">grava 0 · vendeu</text><rect x="194" y="106" width="122" height="22" rx="6" class="b5"/><text x="255" y="121" class="bs">grava 0 · vendeu</text><text x="170" y="152" class="bs">1 item em estoque · 2 vendas · o banco não reclamou</text><text x="170" y="164" class="bs">a janela é entre LER e GRAVAR</text>'),
 lock:W(164,'<rect x="6" y="26" width="102" height="112" rx="9" class="b3"/><text x="57" y="42" class="bt">pessimista</text><text x="57" y="60" class="bs">trava ao ler</text><text x="57" y="74" class="bs">outro ESPERA</text><text x="57" y="96" class="bs">conflito frequente</text><text x="57" y="110" class="bs">transação curta</text><text x="57" y="128" class="bs">FOR UPDATE</text><rect x="118" y="26" width="102" height="112" rx="9" class="b1"/><text x="169" y="42" class="bt">otimista</text><text x="169" y="60" class="bs">não trava</text><text x="169" y="74" class="bs">confere versão</text><text x="169" y="96" class="bs">conflito raro</text><text x="169" y="110" class="bs">leitura intensa</text><text x="169" y="128" class="bs">WHERE versao=?</text><rect x="230" y="26" width="104" height="112" rx="9" class="b4"/><text x="282" y="42" class="bt">distribuído</text><text x="282" y="60" class="bs">fora do banco</text><text x="282" y="74" class="bs">entre processos</text><text x="282" y="96" class="bs">job único</text><text x="282" y="110" class="bs">SEMPRE com TTL</text><text x="282" y="128" class="bs">SET NX EX</text><text x="170" y="156" class="bs">antes dos três, tente o UPDATE condicional</text>'),
 idx:W(152,'<text x="170" y="16" class="bt">B-tree: poucos saltos em vez de varrer tudo</text><rect x="134" y="28" width="72" height="22" rx="6" class="b4"/><text x="170" y="43" class="bs">50 | 100</text><rect x="34" y="66" width="66" height="22" rx="6" class="b1"/><text x="67" y="81" class="bs">10 | 30</text><rect x="136" y="66" width="66" height="22" rx="6" class="b1"/><text x="169" y="81" class="bs">60 | 80</text><rect x="238" y="66" width="66" height="22" rx="6" class="b1"/><text x="271" y="81" class="bs">120|150</text><path d="M150,50 L80,64" class="lt"/><path d="M170,50 L169,64" class="lt"/><path d="M192,50 L258,64" class="lt"/><rect x="118" y="104" width="102" height="22" rx="6" class="b2"/><text x="169" y="119" class="bs">→ a linha</text><path d="M169,88 L169,102" class="lt"/><text x="60" y="119" class="bs">3 saltos</text><text x="290" y="119" class="bs">≠ 10M linhas</text><text x="170" y="144" class="bs">ordenada → serve para = , intervalo, ORDER BY e prefixo</text>'),
 authz:W(140,'<rect x="8" y="30" width="150" height="80" rx="9" class="b2"/><text x="83" y="48" class="bt">AUTENTICAÇÃO</text><text x="83" y="66" class="bs">quem é você?</text><text x="83" y="84" class="bs">senha · token · biometria</text><text x="83" y="100" class="bs">acontece UMA vez</text><rect x="182" y="30" width="150" height="80" rx="9" class="b1"/><text x="257" y="48" class="bt">AUTORIZAÇÃO</text><text x="257" y="66" class="bs">o que você pode?</text><text x="257" y="84" class="bs">RBAC · ABAC · ACL</text><text x="257" y="100" class="bs">a CADA requisição</text><path d="M158,70 L180,70" class="lt"/><path d="M182,70 L174,66 L174,74 Z" class="ht"/><text x="170" y="130" class="bs">estar logado ≠ poder fazer — e a checagem é no servidor</text>')
};

var T=[
{g:"01",n:"Gargalos e escala",s:"onde o sistema trava — e o que fazer em cada ponto",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Achar o gargalo antes de agir",x:"medir, não adivinhar",dg:"garg",oq:"Gargalo é o recurso que satura primeiro e limita todo o resto: CPU, memória, I/O de disco, rede, conexões de banco ou uma trava.",ps:"Evitar a otimização mais cara que existe: a que resolve o que não era o problema.",cf:"Olhe latência (p95/p99, nunca a média), throughput, taxa de erro e saturação. Depois desça: a aplicação está esperando ou trabalhando? Se está esperando, o gargalo é externo. <b>Erro comum:</b> escalar a aplicação quando o gargalo é o banco — a fila só muda de lugar.",ex:"# a ordem da investigação\n1. p99 subiu ou o throughput caiu?\n2. a app espera (I/O) ou trabalha (CPU)?\n3. se espera: banco? API externa? lock?\n4. só então mexa"},
 {t:"Escalar vertical x horizontal",x:"máquina maior ou mais máquinas",oq:"Vertical (scale up) é trocar por uma máquina mais forte. Horizontal (scale out) é somar instâncias atrás de um balanceador.",ps:"Vertical é simples e tem teto físico. Horizontal não tem teto prático, mas exige a aplicação ser stateless.",cf:"Comece vertical enquanto for barato; migre para horizontal quando o custo virar exponencial ou você precisar de tolerância a falha. <b>Erro comum:</b> escalar horizontalmente uma aplicação que guarda sessão em memória — cada réplica vê um estado diferente.",ex:"# vertical: 2 vCPU → 8 vCPU (1 instância)\n# horizontal: 4 × 2 vCPU atrás de um LB\n# horizontal exige: sem estado local"},
 {t:"Cache",x:"não refazer o que é caro",oq:"Guardar em memória o resultado de algo caro para não recalcular ou reconsultar.",ps:"É a otimização com melhor retorno em quase todo sistema de leitura intensa.",cf:"Padrão cache-aside: procura no cache, se não achar busca na fonte e grava. Sempre com TTL. <b>Erro comum:</b> cachear dado por usuário numa chave global — um usuário vê o dado de outro.",ex:"var v = cache.get(k);\nif (v == null) { v = db.load(k); cache.put(k, v, TTL); }\n// TTL sempre. cache sem expiração envelhece em silêncio"},
 {t:"Processamento assíncrono",x:"tirar do caminho da requisição",oq:"Tudo que não precisa terminar dentro da requisição sai dela: vai para uma fila e um worker processa depois.",ps:"Derrubar a latência percebida e absorver pico sem escalar o sistema inteiro.",cf:"O usuário recebe 202 Accepted e um identificador; o resultado chega por consulta, evento ou notificação. <b>Erro comum:</b> mandar para a fila uma validação que o usuário precisava ver na hora — ele vai embora achando que deu certo."},
 {t:"Connection pooling",x:"o gargalo invisível",oq:"Abrir conexão com o banco é caro. O pool mantém um conjunto pronto e reutiliza.",ps:"Sem pool, cada consulta paga handshake e autenticação. Com pool mal dimensionado, você derruba o banco.",cf:"A conta é de trás para frente: <code>max_connections</code> do banco ÷ número máximo de réplicas = pool por réplica. Pool de 4 a 10 costuma render mais que 50. <b>Erro comum:</b> aumentar o pool ao ver lentidão — quase sempre piora.",ex:"banco aceita 100 · reserva admin 10\noutros serviços 30 → sobram 60\nteto de réplicas 15 → pool = 4 por réplica"},
 {t:"Read replicas",x:"tirar leitura do primário",oq:"Cópias do banco que só respondem leitura, mantidas por replicação a partir do primário.",ps:"Aliviar o primário quando a carga é dominada por leitura — relatório, listagem, busca.",cf:"A replicação tem atraso: a réplica pode não ter o que você acabou de gravar. Leitura que precisa do dado recém-escrito vai no primário. <b>Erro comum:</b> mandar tudo para a réplica e ver o usuário não encontrar o registro que acabou de criar."},
 {t:"Sharding",x:"o último recurso",oq:"Particionar os dados entre vários bancos por uma chave — cliente, região, faixa de id.",ps:"Quando um banco único já não cabe, nem em máquina nem em vazão.",cf:"Escolher a chave errada é caríssimo de desfazer, e consulta que atravessa shards perde quase todo o benefício. <b>Erro comum:</b> shardear antes de esgotar índice, cache e réplica — que resolvem a grande maioria dos casos."}
]},
{g:"02",n:"Concorrência e race condition",s:"dois clientes, um produto — o problema clássico",c:"var(--red)",cs:"var(--red-soft)",items:[
 {t:"O que é race condition",x:"o resultado depende do tempo",dg:"race",oq:"Duas execuções simultâneas leem o mesmo estado, decidem com base nele e escrevem — e o resultado final depende de quem chegou primeiro.",ps:"É a origem de estoque negativo, saldo errado, cobrança dupla e vaga vendida duas vezes.",cf:"O padrão perigoso é sempre o mesmo: <b>ler → decidir → escrever</b> em passos separados. Entre ler e escrever, outro processo mudou o mundo. <b>Erro comum:</b> testar com um usuário só e concluir que funciona.",ex:"// AMBOS leem estoque = 1\nif (p.getEstoque() > 0) {      // ambos passam\n  p.setEstoque(p.getEstoque()-1);\n  repo.save(p);                // estoque = 0, vendeu 2\n}"},
 {t:"Update atômico condicional",x:"a solução mais simples e robusta",oq:"Em vez de ler-decidir-escrever, mande o banco fazer as três coisas numa instrução só, com a condição no WHERE.",ps:"Resolve a maioria dos casos de race condition sem lock explícito e sem custo de coordenação.",cf:"O banco garante atomicidade da instrução. Se retornar 0 linhas afetadas, alguém chegou antes — e você trata isso. <b>Erro comum:</b> não conferir o número de linhas afetadas, o que faz o código achar que deu certo.",ex:"UPDATE produto SET estoque = estoque - 1\n WHERE id = ? AND estoque > 0;\n-- 1 linha afetada = deu certo\n-- 0 linhas          = acabou o estoque"},
 {t:"Nível de isolamento",x:"o que a transação enxerga",oq:"Define o que uma transação vê das outras que estão rodando: READ COMMITTED, REPEATABLE READ, SERIALIZABLE.",ps:"Entender qual anomalia cada nível permite — leitura suja, não repetível, fantasma.",cf:"Quanto mais forte o isolamento, menos concorrência. SERIALIZABLE resolve quase tudo e custa vazão. O padrão da maioria dos bancos é READ COMMITTED, que <b>não</b> impede a race condition acima. <b>Erro comum:</b> supor que 'estar numa transação' já protege."},
 {t:"Reserva temporária com TTL",x:"segurar sem travar",oq:"Em vez de bloquear o registro, cria-se uma reserva com prazo: o item fica indisponível por N minutos e volta sozinho se a compra não fechar.",ps:"Fluxos longos — checkout, assento, agendamento — em que travar o banco por minutos seria inviável.",cf:"A reserva é uma linha com validade, não uma trava de banco. Um job ou o próprio TTL do Redis libera o que expirou. <b>Erro comum:</b> criar reserva sem expiração e acumular estoque fantasma."},
 {t:"Operações atômicas no Redis",x:"contador e trava rápidos",oq:"Comandos como INCR, DECR e SETNX são atômicos por natureza — o Redis é single-threaded no processamento de comandos.",ps:"Contador, limite de taxa e trava simples com latência muito menor que a do banco.",cf:"Para sequências de comandos, use script Lua, que executa como uma unidade. <b>Erro comum:</b> fazer GET e depois SET esperando atomicidade — entre os dois cabe outro cliente.",ex:"SETNX trava:pedido:42 1\nEXPIRE trava:pedido:42 30\n# melhor: SET k v NX EX 30  (uma operação só)"},
 {t:"Filas como serialização",x:"quando a ordem resolve",oq:"Mandar todas as operações sobre a mesma entidade para uma fila consumida por um worker faz elas acontecerem uma de cada vez.",ps:"Elimina a concorrência por construção, em vez de coordenar concorrentes.",cf:"Funciona bem quando o processamento pode ser assíncrono. Se houver vários consumidores, a serialização só vale por chave — roteie por id da entidade. <b>Erro comum:</b> esperar ordem global com múltiplos consumidores."},
 {t:"Anomalias de concorrência",x:"deadlock, livelock e starvation",oq:"As três falhas clássicas de sincronização: deadlock (espera circular infinita), livelock (mudança síncrona sem progresso) e starvation (inanição perpétua).",ps:"Saber diagnosticar travamentos em ambientes concorrentes e quebrar impasses com ordenação e backoff.",cf:"Deadlock quebra com ordenação global de locks. Livelock quebra com jitter aleatório nas retentativas. Starvation quebra com Fair Queues (FIFO). <b>Erro comum:</b> tratar travamento dando mais CPU e memória."},
 {t:"Ferramentas de concorrência",x:"TSan, JConsole e testes de estresse",oq:"Instrumentação e observabilidade para detectar race conditions e thread contention antes e durante a produção.",ps:"Encontrar bugs concorrentes que testes unitários tradicionais nunca conseguem pegar.",cf:"ThreadSanitizer intercepta acessos no binário; VisualVM e JConsole analisam thread dumps da JVM; k6, JMeter e Gatling simulam rajadas reais no CI. <b>Erro comum:</b> confiar apenas em testes locais com 1 usuário."}
]},
{g:"03",n:"Locks",s:"pessimista, otimista e distribuído — quando cada um",c:"var(--amber)",cs:"var(--amber-soft)",items:[
 {t:"O que é um lock",x:"acesso exclusivo a um recurso",dg:"lock",oq:"Mecanismo que garante que só um fluxo por vez manipule um recurso, para que o resultado não dependa do tempo.",ps:"Proteger invariantes que uma instrução atômica sozinha não consegue expressar.",cf:"Todo lock troca <em>concorrência</em> por <em>correção</em>. A pergunta certa nunca é 'devo usar lock?', e sim 'qual é o menor escopo de exclusão que resolve?'. <b>Erro comum:</b> travar mais do que o necessário e transformar o lock no novo gargalo."},
 {t:"Lock pessimista",x:"assume que vai dar conflito",oq:"Bloqueia a linha no momento da leitura: SELECT ... FOR UPDATE. Quem chegar depois espera até a transação terminar.",ps:"Conflito frequente e operação curta, em que refazer o trabalho sairia caro.",cf:"O bloqueio dura até o commit ou rollback, então a transação precisa ser curta. <b>Erro comum:</b> chamar API externa dentro da transação com lock — a linha fica travada pelo tempo do terceiro.",ex:"BEGIN;\nSELECT * FROM produto WHERE id=? FOR UPDATE;\n-- ninguém mais lê essa linha para update\nUPDATE produto SET estoque = estoque-1 WHERE id=?;\nCOMMIT;"},
 {t:"Lock otimista",x:"assume que não vai dar conflito",oq:"Não bloqueia nada. Lê a versão junto com o dado e, ao gravar, exige que a versão ainda seja a mesma.",ps:"Conflito raro e leitura intensa — não paga o custo de bloquear enquanto quase nunca há disputa.",cf:"Se a versão mudou, o UPDATE afeta 0 linhas e a aplicação decide: repetir, avisar o usuário ou desistir. Em JPA é o <code>@Version</code>. <b>Erro comum:</b> não tratar a falha de versão e perder a escrita em silêncio.",ex:"UPDATE produto SET estoque=?, versao=versao+1\n WHERE id=? AND versao=?;\n-- 0 linhas = alguém alterou antes → refaça"},
 {t:"Lock distribuído",x:"exclusão entre processos diferentes",oq:"Quando o recurso não é uma linha de banco — um job que não pode rodar duas vezes, um arquivo, uma chamada externa — a trava vive fora, geralmente no Redis.",ps:"Garantir que só uma instância da aplicação execute algo, mesmo com várias réplicas.",cf:"Sempre com TTL, senão a queda do dono trava o recurso para sempre. E a trava precisa de um valor único do dono, para que só ele libere. <b>Erro comum:</b> DEL sem conferir o dono — você libera a trava de outro processo.",ex:"SET trava:job valor-unico NX EX 30\n# ... trabalho ...\n# libera SÓ se o valor ainda for meu (Lua)\nif redis.call('get',k)==v then redis.call('del',k) end"},
 {t:"Lock x Promise",x:"a confusão que vale desfazer",oq:"Promise (ou Future) é sobre <em>quando</em> um valor fica pronto — assincronia. Lock é sobre <em>quem</em> pode mexer num recurso — exclusão.",ps:"São eixos independentes: código assíncrono também sofre race condition, e código síncrono também precisa de lock.",cf:"Uma Promise não serializa nada: dois fluxos assíncronos podem ler o mesmo estado e escrever por cima um do outro exatamente como duas threads. <b>Erro comum:</b> achar que 'é async, então é seguro'."},
 {t:"Qual escolher",x:"a régua de decisão",oq:"Do mais barato ao mais caro: instrução atômica → lock otimista → lock pessimista → lock distribuído.",ps:"Escolher o menor mecanismo que resolve, em vez do mais forte disponível.",cf:"Se cabe num UPDATE condicional, use isso. Se o conflito é raro, otimista. Se é frequente e curto, pessimista. Se atravessa processos, distribuído. <b>Erro comum:</b> começar pelo lock distribuído, que é o mais complexo e o mais fácil de errar."},
 {t:"Ecossistema de locks",x:"bancos, ORMs e Redlock/ShedLock",oq:"Do SELECT FOR UPDATE (com NOWAIT e SKIP LOCKED) e @Version ao Redlock com fencing tokens e ShedLock para jobs agendados.",ps:"Mapear a ferramenta exata para a camada correta sem inventar locks caseiros frágeis.",cf:"No Postgres/MySQL, SKIP LOCKED cria filas paralelas de alta vazão no próprio banco. No Spring, @Version cuida de conflitos otimistas. No Kubernetes, ShedLock impede execução duplicada de CronJobs. <b>Erro comum:</b> lock distribuído sem fencing token suscetível a pausas de GC."}
]},
{g:"04",n:"Idempotência e defesas",s:"repetir sem estragar, e se proteger de excesso",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"Idempotência",x:"repetir dá o mesmo resultado",oq:"Operação que, executada N vezes, produz o mesmo efeito observável de uma vez só.",ps:"Rede falha, cliente repete, fila reentrega. Sem idempotência, cada repetição vira cobrança dupla.",cf:"Não é 'detectar duplicata' — é o efeito ser o mesmo. <code>status = PAGO</code> é idempotente; <code>saldo -= 10</code> não é. <b>Erro comum:</b> deixar para depois. A repetição vai acontecer, e no pior dia."},
 {t:"Idempotency key",x:"como conseguir na prática",oq:"O cliente envia um identificador único da tentativa; o servidor grava esse id junto com o efeito, na mesma transação, e ignora repetições.",ps:"Transformar qualquer operação em idempotente, inclusive as que não são por natureza.",cf:"UNIQUE na coluna do id faz o banco recusar a segunda. Chave e efeito <b>na mesma transação</b> — senão você registra sem fazer, ou faz sem registrar. <b>Erro comum:</b> deduplicar em cache volátil, que reinicia e deixa duplicar.",ex:"POST /pagamentos\nIdempotency-Key: 9f3a-...\n\n@Transactional\nif (!processados.registrarSeNovo(key)) return jaFeito;\ncobrar(...);"},
 {t:"Métodos HTTP idempotentes",x:"o que a especificação já garante",oq:"GET, PUT e DELETE são idempotentes por definição; POST não é.",ps:"Saber onde você ganha idempotência de graça e onde precisa construir.",cf:"PUT manda o estado final desejado, por isso repetir não muda nada; POST cria algo novo a cada chamada. <b>Erro comum:</b> usar POST para uma operação que era naturalmente um PUT e criar o problema sem necessidade."},
 {t:"Rate limiting",x:"quantas chamadas por período",oq:"Limitar o número de requisições que um cliente pode fazer numa janela de tempo, devolvendo 429 quando estoura.",ps:"Proteger o sistema de abuso, de laço infinito de cliente e de um parceiro mal comportado.",cf:"Algoritmos: janela fixa (simples, com pico na virada), janela deslizante (justa, mais cara), token bucket (permite rajada controlada) e leaky bucket (saída constante). <b>Erro comum:</b> limitar por IP quando vários usuários compartilham o mesmo IP.",ex:"HTTP/1.1 429 Too Many Requests\nRetry-After: 30\nX-RateLimit-Remaining: 0"},
 {t:"Throttle x rate limit",x:"recusar ou atrasar",oq:"Rate limiting <em>recusa</em> o que passa do limite. Throttling <em>atrasa</em> ou enfileira para manter um ritmo constante.",ps:"Escolher entre proteger o servidor (recusar) e não perder trabalho (atrasar).",cf:"Recusar dá resposta rápida e clara ao cliente; atrasar preserva o trabalho ao custo de segurar recurso. <b>Erro comum:</b> enfileirar sem teto, o que troca uma falha rápida por uma lenta."},
 {t:"Circuit breaker",x:"parar de bater na porta fechada",oq:"Depois de N falhas seguidas de uma dependência, o disjuntor abre e as chamadas falham imediatamente, sem nem tentar.",ps:"Evitar que um serviço lento consuma todas as suas threads e derrube o que não tinha relação com ele.",cf:"Três estados: fechado (passa), aberto (falha rápido) e meio-aberto (deixa uma chamada testar). <b>Erro comum:</b> disjuntor sem timeout na chamada — sem timeout, ele nunca conta falha, só acumula thread presa."},
 {t:"Defesas e mensageria",x:"at-least-once, gateways e outbox",oq:"Como lidar com mensagens duplicadas de brokers (Kafka, RabbitMQ) e rajadas na borda de API Gateways com chaves ULID/UUID e tabelas de desduplicação.",ps:"Garantir que a repetição inevitável da rede ou do broker não gere efeitos colaterais duplos no banco.",cf:"Brokers garantem at-least-once; o consumidor DEVE ser idempotente via Transactional Outbox ou De-duplication table. Gateways (Kong, AWS) cacheiam respostas por Idempotency-Key. <b>Erro comum:</b> acreditar que mensageria garante entrega única sem deduplicar no receptor."}
]},
{g:"05",n:"Dados",s:"índices, JOINs e a escolha do banco",c:"var(--blue)",cs:"var(--blue-soft)",items:[
 {t:"Índice: a B-tree em 30 segundos",x:"por que a busca fica rápida",dg:"idx",oq:"Estrutura ordenada em árvore que permite achar uma linha em poucos saltos em vez de varrer a tabela inteira.",ps:"A diferença entre varrer 10 milhões de linhas e fazer 3 ou 4 saltos.",cf:"Cada nó guarda valores ordenados e ponteiros; a busca desce comparando. Por ser ordenada, serve também para intervalo, ORDER BY e prefixo de texto. <b>Erro comum:</b> esperar que índice ajude em <code>LIKE '%x'</code> — sem o começo fixo, a ordem não serve."},
 {t:"O preço do índice",x:"não existe almoço grátis",oq:"Todo índice ocupa espaço e precisa ser atualizado a cada INSERT, UPDATE e DELETE.",ps:"Entender por que indexar tudo deixa a escrita lenta sem deixar a leitura rápida.",cf:"Índice serve à consulta que existe, não à que talvez exista. Índice composto obedece a ordem das colunas — <code>(a,b)</code> serve para filtrar por <code>a</code> e por <code>a,b</code>, mas não por <code>b</code> sozinho. <b>Erro comum:</b> criar um índice por coluna em vez de um composto que atenda a consulta real."},
 {t:"EXPLAIN",x:"ver o que o banco vai fazer",oq:"Mostra o plano de execução: se vai usar índice, qual, e quantas linhas espera examinar.",ps:"Trocar achismo por evidência — é o equivalente ao 'medir antes de otimizar' da Parte 01.",cf:"Procure por varredura sequencial em tabela grande, estimativa muito diferente do real e índice não usado. Use EXPLAIN ANALYZE para ver o tempo de verdade. <b>Erro comum:</b> criar índice sem antes olhar o plano — metade das vezes o problema é outro.",ex:"EXPLAIN ANALYZE\nSELECT * FROM pedido WHERE cliente_id = 42;\n-- Seq Scan  → ruim em tabela grande\n-- Index Scan → usou o índice"},
 {t:"Por que JOIN existe",x:"a normalização e o preço dela",oq:"Os dados são separados em tabelas para não repetir informação; o JOIN é o que volta a juntá-las na hora da consulta.",ps:"Entender que JOIN não é complicação gratuita — é a contrapartida de não duplicar dado.",cf:"O banco casa linhas comparando a chave de uma tabela com a da outra. 'Esquerda' é a tabela do FROM; 'direita' é a do JOIN. <b>Erro comum:</b> desnormalizar cedo demais para 'evitar JOIN' e criar um problema de consistência muito pior."},
 {t:"INNER, LEFT e RIGHT",x:"quem sobra e quem some",oq:"INNER traz só quem tem par nas duas tabelas. LEFT traz todos da esquerda, com NULL onde não houve par. RIGHT faz o mesmo pela direita.",ps:"Escolher pelo que você quer que apareça quando não existe correspondência.",cf:"LEFT com <code>WHERE tabela_direita.coluna = x</code> vira INNER sem querer, porque o filtro descarta os NULL — a condição precisa ir no ON. <b>Erro comum:</b> esse exato caso: o LEFT JOIN que silenciosamente virou INNER.",ex:"-- clientes SEM pedido:\nSELECT c.* FROM cliente c\n LEFT JOIN pedido p ON p.cliente_id = c.id\n WHERE p.id IS NULL;"},
 {t:"SQL x NoSQL",x:"escolher pelo acesso, não pelo volume",oq:"Relacional para consultas variadas com junção e transação forte. Chave-valor e documento para acesso previsível por chave e escala extrema.",ps:"Escolher com critério em vez de por moda — e a maioria dos sistemas é melhor servida por relacional.",cf:"A pergunta é: como os dados serão lidos? Se as consultas variam muito, relacional. Se é sempre pela mesma chave e o volume é enorme, chave-valor. <b>Erro comum:</b> escolher documento e reimplementar junção na aplicação — pior e mais lento."},
 {t:"ACID x BASE",x:"uma linha cada",oq:"ACID: atomicidade, consistência, isolamento e durabilidade — a transação ou acontece inteira ou não acontece. BASE: disponível, estado flexível, consistente ao final.",ps:"Nomear a garantia que o seu domínio exige, e negociar isso com o negócio de forma explícita.",cf:"Consistência eventual significa que existe uma janela em que leitores veem valores diferentes. Isso precisa ser aprovado, não descoberto. <b>Erro comum:</b> tratar 'o saldo aparece em alguns segundos' como detalhe técnico."}
]},
{g:"06",n:"Comunicação e arquivos",s:"polling, multiplexação e upload que não derruba a aplicação",c:"var(--cyan)",cs:"var(--arc-soft)",items:[
 {t:"Polling",x:"perguntar de novo até ter resposta",oq:"O cliente consulta o servidor em intervalos para saber se algo mudou.",ps:"É o jeito mais simples de acompanhar um processamento assíncrono — e o mais desperdiçado.",cf:"A maioria das consultas volta 'ainda não'. Long polling melhora: o servidor segura a conexão até ter novidade ou estourar o tempo. Acima disso, WebSocket ou SSE. <b>Erro comum:</b> intervalo curto demais multiplicado por muitos clientes vira ataque contra o próprio servidor."},
 {t:"Long polling, SSE e WebSocket",x:"a escada do tempo real",oq:"Long polling segura a requisição. SSE é um canal do servidor para o cliente. WebSocket é bidirecional e persistente.",ps:"Escolher pelo sentido do tráfego e pela frequência de atualização.",cf:"Notificação só de ida (progresso, feed) resolve com SSE, que é mais simples e passa em qualquer proxy HTTP. Chat e colaboração pedem WebSocket. <b>Erro comum:</b> WebSocket para um caso que era só notificação, herdando reconexão e estado de conexão sem precisar."},
 {t:"Multiplexação",x:"várias conversas no mesmo cano",oq:"Enviar várias requisições simultâneas por uma única conexão TCP, sem esperar uma terminar para começar a outra.",ps:"Eliminar o bloqueio de fila da versão anterior do HTTP e reduzir o custo de abrir conexões.",cf:"É o que o HTTP/2 faz com streams dentro de uma conexão, e é a mesma ideia dos channels do AMQP: transporte caro compartilhado, sessões lógicas baratas dentro dele. <b>Erro comum:</b> manter otimizações antigas de HTTP/1 — juntar arquivos, dividir em domínios — que atrapalham no HTTP/2."},
 {t:"MinIO como S3 local",x:"a mesma API, na sua máquina",oq:"MinIO implementa a API do S3. O mesmo código e o mesmo SDK funcionam apontando para ele ou para a nuvem.",ps:"Desenvolver e testar upload sem depender da nuvem nem gastar — e sem mudar o código depois.",cf:"Sobe em container, tem console web e usa chave e segredo como o S3. A troca entre ambientes é só endpoint e credencial. <b>Erro comum:</b> deixar o endpoint fixo no código em vez de externalizar por configuração.",ex:"docker run -p 9000:9000 -p 9001:9001 \\\n  -e MINIO_ROOT_USER=admin \\\n  -e MINIO_ROOT_PASSWORD=senha123 \\\n  minio/minio server /data --console-address ':9001'"},
 {t:"Upload multipart",x:"arquivo grande em pedaços",oq:"O arquivo é dividido em partes enviadas separadamente e remontadas no final pelo storage.",ps:"Enviar arquivos grandes com retomada por parte, envio paralelo e sem segurar tudo em memória.",cf:"Três fases: iniciar (recebe um id de upload), enviar cada parte (cada uma devolve um ETag) e completar (manda a lista de partes). Falhou uma parte? reenvia só ela. <b>Erro comum:</b> não abortar uploads incompletos, que ficam ocupando espaço e sendo cobrados."},
 {t:"URL pré-assinada",x:"o arquivo não passa pela sua API",oq:"A aplicação gera uma URL temporária e assinada; o cliente envia o arquivo direto para o storage.",ps:"Tirar o tráfego de arquivo da sua aplicação — ela deixa de ser o gargalo de banda e memória.",cf:"A URL carrega a assinatura e expira em minutos. A aplicação só autoriza e registra; os bytes nunca passam por ela. <b>Erro comum:</b> validade longa demais, o que transforma a URL num acesso permanente para quem a copiar."}
]},
{g:"07",n:"Segurança da aplicação",s:"quem é você, o que você pode, e onde guardar isso",c:"var(--pink)",cs:"var(--pink-soft)",items:[
 {t:"Autenticação x autorização",x:"provar quem é × poder o quê",dg:"authz",oq:"Autenticação prova a identidade. Autorização decide o que essa identidade pode fazer. São etapas diferentes e falham de formas diferentes.",ps:"Separar as duas é o que evita o erro de checar o login e esquecer de checar a permissão.",cf:"Os fatores de autenticação: algo que você sabe (senha), algo que você tem (celular, token) e algo que você é (biometria). Dois fatores distintos = 2FA. <b>Erro comum:</b> tratar 'está logado' como se fosse 'pode fazer isso'."},
 {t:"Os três modelos de autorização",x:"do grosso ao fino",oq:"RBAC decide por papel (admin, gerente). ABAC decide por atributo (departamento, valor, horário). ACL decide por recurso individual.",ps:"Escolher a granularidade que o domínio exige, sem construir mais do que precisa.",cf:"RBAC resolve a maioria e é fácil de auditar; ABAC entra quando a regra depende do contexto. <b>Erro comum:</b> explosão de papéis — quando você tem 'gerente-sp-noturno', a resposta era ABAC."},
 {t:"Broken Access Control",x:"a falha nº 1 do mundo real",oq:"Verificar a permissão na interface e não no servidor — ou não verificar se o recurso pertence ao usuário.",ps:"É a categoria de falha mais comum em aplicações web, e a mais fácil de explorar: basta trocar um id na URL.",cf:"Toda requisição verifica no servidor: este usuário pode agir sobre <em>este</em> recurso? Esconder o botão não protege nada. <b>Erro comum:</b> <code>GET /pedidos/42</code> devolvendo o pedido sem conferir de quem ele é.",ex:"// errado: só checa o login\n@GetMapping(\"/pedidos/{id}\")\nPedido get(@PathVariable Long id){ return repo.findById(id); }\n\n// certo: checa a POSSE\nreturn repo.findByIdAndClienteId(id, usuarioLogado.getId());"},
 {t:"Sessão",x:"o estado fica no servidor",oq:"O servidor guarda a sessão e manda ao cliente só um identificador num cookie.",ps:"Revogação imediata: apagou a sessão, o acesso morre na hora.",cf:"Exige armazenamento compartilhado entre réplicas — em memória local, cada réplica vê um estado diferente. Cookie com HttpOnly, Secure e SameSite. <b>Erro comum:</b> sessão em memória com várias réplicas, e o usuário caindo do login a cada requisição."},
 {t:"JWT",x:"o estado viaja com o cliente",oq:"Token assinado que carrega os dados do usuário. O servidor valida a assinatura e não precisa consultar nada.",ps:"Não guardar estado, o que facilita escalar e funciona bem entre serviços diferentes.",cf:"O grande problema é revogar: um token válido continua válido até expirar. As saídas são expiração curta com refresh token, ou uma lista de revogados — que traz o estado de volta. <b>Erro comum:</b> guardar o token em localStorage, exposto a XSS.",ex:"header.payload.assinatura\n// o payload é apenas Base64 — NÃO é criptografado\n// qualquer um lê. Nunca coloque segredo ali."},
 {t:"Sessão ou JWT",x:"a tabela de bolso",oq:"Sessão quando você precisa revogar na hora e o sistema é um monólito ou poucos serviços. JWT quando há muitos serviços ou clientes de terceiros.",ps:"Decidir pelo requisito de revogação e pela topologia, não pela moda.",cf:"É comum e saudável usar os dois: sessão para o navegador do seu próprio site, JWT para a API consumida por outros. <b>Erro comum:</b> JWT com expiração de dias — você abriu mão da revogação sem perceber."},
 {t:"OAuth 2.0, PKCE e OIDC",x:"login social sem entregar a senha",oq:"OAuth 2.0 é sobre <em>autorização delegada</em>: dar a um app acesso limitado a algo seu em outro serviço, sem dar a senha. OIDC é a camada em cima que faz login de fato.",ps:"Entender por que 'entrar com o Google' não passa a sua senha para o site.",cf:"Quatro papéis: dono do recurso (você), cliente (o app), servidor de autorização (Google) e servidor de recurso (a API). O fluxo Authorization Code + PKCE é o recomendado hoje. <b>Erro comum:</b> usar OAuth puro como login — sem OIDC, você recebe uma autorização, não uma identidade verificada."}
]},
{g:"08",n:"Operar o que você construiu",s:"enxergar, publicar, voltar atrás",c:"var(--orange)",cs:"var(--orange-soft)",items:[
 {t:"Os três pilares",x:"log, métrica, rastreamento",oq:"Métrica responde 'está ruim?'. Log responde 'o que aconteceu naquela requisição?'. Rastreamento responde 'por onde passou e onde demorou?'.",ps:"Cada um responde uma pergunta que os outros dois não respondem.",cf:"Log estruturado em JSON, métrica com poucos rótulos e rastreamento com o contexto propagado entre serviços. <b>Erro comum:</b> rótulo de alta cardinalidade — id de usuário ou de requisição vira milhões de séries e multiplica a conta."},
 {t:"Alertar no sintoma",x:"não na causa",oq:"O alarme deve disparar quando o usuário está sendo prejudicado, não quando um número interno oscilou.",ps:"Alarme demais produz cegueira: o time aprende a ignorar, inclusive o legítimo.",cf:"Alarme bom: taxa de erro acima do aceitável, p99 acima do limite, fila crescendo há 15 minutos, zero pedidos em horário comercial. CPU alta quase nunca exige ação. <b>Erro comum:</b> alarmar pela média, que esconde a cauda."},
 {t:"Troubleshooting em 5 passos",x:"o método",oq:"1) Reproduza ou delimite. 2) Olhe os sinais. 3) Formule uma hipótese. 4) Teste-a isoladamente. 5) Corrija e registre o que aprendeu.",ps:"Trocar tentativa e erro por bisseção — cada passo elimina metade das hipóteses.",cf:"Mude <b>uma coisa por vez</b>. Mexer em três lugares e reiniciar resolve por acaso e não ensina nada. <b>Erro comum:</b> pular direto para a correção sem ter formulado a hipótese."},
 {t:"O deploy da minha app",x:"repositório no Azure, execução na AWS",oq:"Código no Azure DevOps, pipeline que constrói o artefato e publica na AWS. Repositório e execução em nuvens diferentes.",ps:"É a arquitetura real do seu trabalho — e o motivo de o diagnóstico atravessar dois painéis.",cf:"O fluxo: commit → pipeline no Azure → build e testes → artefato versionado → deploy na AWS → verificação. Quando trava, o problema está em uma das fronteiras: credencial entre nuvens, versão do artefato ou a verificação de saúde. <b>Erro comum:</b> procurar no lado errado da fronteira."},
 {t:"Rollback",x:"voltar tem que ser um comando",oq:"Retornar rapidamente à versão anterior conhecida como boa, sem depender de uma correção às pressas.",ps:"Se voltar não é trivial, todo deploy vira um evento de risco e o time passa a implantar menos — o que piora tudo.",cf:"Exige artefato versionado e imutável (nunca <code>latest</code>) e migração de banco compatível com as duas versões. <b>Erro comum:</b> migração destrutiva — apagar coluna no mesmo deploy que para de usá-la impede o rollback."},
 {t:"GMUD",x:"a burocracia que tem razão de ser",oq:"Gestão de Mudança: o processo formal de registrar, avaliar risco, aprovar e agendar uma alteração em produção.",ps:"Em ambiente regulado ou crítico, garante rastreabilidade — quem aprovou, quando, e qual era o plano de volta.",cf:"Uma GMUD boa tem: o que muda, o risco, a janela, o plano de rollback e o critério de sucesso. Quando o processo é maduro, mudanças de baixo risco viram pré-aprovadas. <b>Erro comum:</b> tratar como carimbo — aí ela vira atrito sem entregar segurança."},
 {t:"Git squash",x:"limpar o histórico antes de integrar",oq:"Juntar vários commits em um só, para que a branch entre na principal como uma unidade lógica.",ps:"Histórico legível: um commit por mudança de verdade, em vez de vinte 'ajuste' e 'wip'.",cf:"Squash na hora do merge, ou <code>rebase -i</code> antes de abrir o PR. <b>Erro comum:</b> reescrever histórico de branch compartilhada — quem já baixou fica com divergência.",ex:"git rebase -i HEAD~5   # troque pick por squash\n# ou: merge com squash no PR\ngit log --oneline       # confira antes de enviar"},
 {t:"Git hooks",x:"automação nos momentos do git",oq:"Scripts disparados em eventos do git: antes do commit, antes do push, ao receber no servidor.",ps:"Pegar formatação, lint e teste rápido antes de chegar na esteira — feedback em segundos, não em minutos.",cf:"Hook local fica em <code>.git/hooks</code>, que <b>não</b> é versionado — por isso Husky ou pre-commit, que versionam a configuração e instalam para todo mundo. <b>Erro comum:</b> confiar só no hook local: ele pode ser pulado com <code>--no-verify</code>, então a esteira precisa checar de novo."}
]},
{g:"09",n:"War Room & Incidentes",s:"três desastres reais e como desatar os nós sob fogo",c:"var(--rose)",cs:"var(--rose-soft)",items:[
  {t:"OOMKilled fantasma",x:"exit 137 sem OOM no Java",oq:"Pod morre com ExitCode 137 e OOMKilled=true, mas a JVM não lançou OutOfMemoryError. O Linux cgroup matou o processo por excesso de memória Off-Heap (Metaspace, stacks, buffers).",ps:"Evitar crashloop silencioso de contêineres e dimensionar memória nativa além do -Xmx.",cf:"A memória total do container = Heap + Metaspace + (Threads × Stack) + Direct Buffers + GC overhead. Limitar só o Heap com -Xmx deixa a porta aberta para o Kernel OOM-Killer.",ex:"# Flags recomendadas:\njava -XX:MaxRAMPercentage=70.0 \\\n     -XX:+UseContainerSupport -Xss512k -jar app.jar"},
  {t:"Asfixia do HikariCP",x:"HTTP lento dentro de @Transactional",oq:"Chamada HTTP externa dentro de @Transactional segura conexão JDBC ociosamente por segundos; sob carga modesta, o pool esgota e a aplicação inteira trava.",ps:"Evitar Connection Starvation e cascata de timeouts HTTP 500 no checkout.",cf:"Regra sagrada: zero chamadas externas de rede dentro de métodos @Transactional. Use transação estrita apenas para gravação no banco e Circuit Breakers.",ex:"// ERRADO: conexão fica presa no HTTP\n@Transactional void pagar() {\n  http.postAntifraude(); db.gravar();\n}\n// CERTO: HTTP fora da transação"},
  {t:"Avalanche do RabbitMQ",x:"unacked messages e loop de requeue",oq:"Consumidor falha com exceção inesperada e faz basic.nack com requeue=true; a mensagem volta imediatamente para a fila, entra em loop infinito e explode a memória do broker.",ps:"Proteger o broker contra veneno de mensagens malformadas e travamento de publishers.",cf:"Sempre use prefetch_count conservador (10-50), Dead Letter Exchange (DLX) com teto de retries e parking lot. Nunca dê requeue infinito sem backoff.",ex:"# Spring AMQP:\nspring.rabbitmq.listener.simple.prefetch=20\nspring.rabbitmq.listener.simple.retry.enabled=true\nspring.rabbitmq.listener.simple.retry.max-attempts=3"}
]},
{g:"10",n:"Como aprender de verdade",s:"vídeo dá o mapa, doc dá a precisão, lab fixa",c:"var(--java)",cs:"var(--java-soft)",items:[
 {t:"Ciclo de aprendizado",x:"não pare no vídeo",oq:"Ler o nó → ver um vídeo curto → confirmar na documentação → reproduzir num projeto pequeno → escrever uma nota atômica → usar o modo teste.",ps:"Este documento nasceu de dúvidas suas viradas em HTML. O ciclo é para que a próxima dúvida vire nota estruturada em vez de arquivo solto.",cf:"Toda dúvida nova entra aqui: escolha a parte, acrescente o tópico no mesmo formato — direto, analogia, como surgiu, armadilhas, prova de domínio. O documento é o lugar canônico; nota avulsa espalha de novo.",ex:"# quando bater uma dúvida:\n# 1. resolva\n# 2. ache a parte deste documento\n# 3. acrescente o tópico no formato\n# 4. NÃO crie um HTML novo solto"},
 {t:"Canais & cursos PT-BR",x:"onde ver",oq:"Recursos reais em português para backend, dados, segurança e operação.",ps:"Construir o mapa mental no seu idioma antes de encarar a documentação oficial.",cf:"Full Cycle (Wesley Willians) para arquitetura e sistemas distribuídos; Fabrício Veronez e LINUXtips para operação e containers; Rodrigo Branas e Michelli Brito para Java e Spring; Dev Superior para fundamentos. Para banco: canais de PostgreSQL em PT-BR e a documentação oficial, que é excelente.",ex:"# arquitetura/distribuídos: Full Cycle\n# operação/containers: Veronez, LINUXtips\n# Java/Spring: Branas, Michelli Brito\n# segurança: OWASP (em inglês, vale o esforço)"},
 {t:"Como pesquisar",x:"achar a resposta",oq:"Busque pelo nome exato do mecanismo, restrito à documentação oficial. Para erro, cole a mensagem entre aspas sem os seus identificadores.",ps:"Metade da competência é saber o nome da coisa — com ele, a resposta vem em minutos.",cf:"Para banco: EXPLAIN antes de pesquisar. Para segurança: OWASP Top 10 é o índice de tudo que costuma dar errado. Para concorrência: descreva o cenário de duas execuções simultâneas, não o sintoma.",ex:"site:postgresql.org index composite order\n\"SELECT FOR UPDATE\" lock contention\nOWASP broken access control"},
  {t:"Praticar: o laboratório do estoque",x:"o exercício que junta tudo",oq:"Um projeto pequeno que exercita quase toda esta trilha: uma API que vende o último item do estoque.",ps:"Projeto real fixa mais que dez tutoriais — e cada etapa vira um tópico aqui.",cf:"(1) Faça a versão ingênua e prove a race condition com duas requisições simultâneas; (2) corrija com UPDATE condicional; (3) refaça com lock otimista e depois pessimista, comparando; (4) adicione idempotency key; (5) adicione índice e olhe o EXPLAIN; (6) proteja com rate limit e disjuntor; (7) adicione autenticação e a checagem de posse do recurso.",ex:"# prove a race condition:\nab -n 2 -c 2 -p pedido.json \\\n   http://localhost:8080/comprar\n# estoque 1 → vendeu 2? achou o bug.",star:true}
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
var KEYT="conceitos-backend-completo-CL-trilha-v1";
var doneT={};try{doneT=JSON.parse(localStorage.getItem(KEYT)||"{}");}catch(e){}
var track=document.getElementById("track"),lg=document.getElementById("lg");
navHead("A trilha · 10 grupos");
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
  if(it.map)h+='<div class="blk"><h4>Nos cinco provedores</h4><table class="vmap"><tbody>'+it.map.map(function(r){return '<tr><td class="vp">'+r[0]+'</td><td>'+r[1]+'</td></tr>';}).join('')+'</tbody></table></div>';
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
navHead("O conteúdo · 10 partes");
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
var KEYM="conceitos-backend-completo-CL-conteudo-v1";
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
 var RK="conceitos-backend-completo-CL-rev-v1";
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

// War Room Interactive Simulator
(function(){
  var lab=document.getElementById("warLab");
  if(!lab)return;
  var nodes=[
    document.getElementById("wn1"),
    document.getElementById("wn2"),
    document.getElementById("wn3"),
    document.getElementById("wn4"),
    document.getElementById("wn5")
  ];
  var hud=document.getElementById("warHud");
  var btn1=document.getElementById("btnWarInc1");
  var btn2=document.getElementById("btnWarInc2");
  var btn3=document.getElementById("btnWarInc3");
  var btnReset=document.getElementById("btnWarReset");
  var timer=null;

  function clearState(){
    if(timer)clearTimeout(timer);
    nodes.forEach(function(n){
      if(!n)return;
      n.className="wl-node";
    });
  }

  function setHud(lines){
    if(!hud)return;
    hud.innerHTML=lines.map(function(l){
      return '<div class="wh-l '+(l.cls||"wh-info")+'">'+l.txt+'</div>';
    }).join("");
    hud.scrollTop=hud.scrollHeight;
  }

  function runScenario(steps){
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
        timer=setTimeout(next, cur.delay||800);
      }
    }
    next();
  }

  if(btn1) btn1.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"wh-info",txt:"[K8s Pod] orders-api alocado com spec.resources.limits.memory: 1Gi (1024MB)"}], delay:700},
      {node:1, logs:[{cls:"wh-info",txt:"[JVM Launch] Flags: -Xmx768m. Heap sob controle com 420MB em uso (GC G1 normal)."}], delay:750},
      {node:2, status:"warn", logs:[{cls:"wh-warn",txt:"[Off-Heap Leak] WebClient/Netty sob carga aloca 310MB em Direct ByteBuffers + 190MB Metaspace + 85MB Thread Stacks."}], delay:850},
      {node:3, status:"err", logs:[{cls:"wh-err",txt:"☠️ [OOM-KILLER] Memória RSS do processo atinge 1035MB > 1024MB. Linux Kernel envia SIGKILL (9). Pod morre com Exit Code 137 sem Heap Dump!"}], delay:900},
      {node:4, status:"ok", logs:[{cls:"wh-ok",txt:"✅ [Fix War Room] Limitar -XX:MaxDirectMemorySize=256m no Dockerfile e conceder teto de segurança no container (Limit: 1.4Gi) para suportar Off-Heap."}], delay:500}
    ]);
  });

  if(btn2) btn2.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"wh-info",txt:"[HTTP Request] POST /checkout aciona método orquestrador anotado com @Transactional."}], delay:700},
      {node:1, logs:[{cls:"wh-info",txt:"[HikariCP] Spring obtém conexão JDBC ativa do pool (1/10 ocupada) antes de qualquer persistência."}], delay:750},
      {node:2, status:"warn", logs:[{cls:"wh-warn",txt:"[I/O Bloqueante] Código chama WebClient para gateway externo de pagamento dentro da transação. Gateway sofre spike e responde em 4.5s."}], delay:850},
      {node:3, status:"err", logs:[{cls:"wh-err",txt:"💥 [Pool Starvation] 10 requisições concorrentes seguram as 10 conexões do pool em espera de rede ociosa. Novas requisições tomam ConnectionTimeoutException!"}], delay:900},
      {node:4, status:"ok", logs:[{cls:"wh-ok",txt:"✅ [Fix War Room] Nunca faça chamadas de rede dentro de @Transactional! Chame o gateway em método sem transação; abra a transação apenas no save() do banco."}], delay:500}
    ]);
  });

  if(btn3) btn3.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"wh-info",txt:"[Producer] Serviço publica mensagem na fila 'pedidos.v1' com campo numérico contendo string corrupta."}], delay:700},
      {node:1, logs:[{cls:"wh-info",txt:"[Rabbit Consumer] @RabbitListener consome a mensagem e entrega ao MessageConverter (Jackson ObjectMapper)."}], delay:750},
      {node:2, status:"err", logs:[{cls:"wh-err",txt:"[Deserialization Failure] Jackson lança InvalidFormatException. Falha não recuperada na borda do listener."}], delay:800},
      {node:3, status:"err", logs:[{cls:"wh-err",txt:"⚠️ [Poison Pill Loop] Spring AMQP padrão faz reject com requeue=true. Mensagem volta ao topo da fila instantaneamente: 9.000 requeues/segundo e 100% de CPU!"}], delay:900},
      {node:4, status:"ok", logs:[{cls:"wh-ok",txt:"✅ [Fix War Room] Configurar defaultRequeueRejected=false e plugar DeadLetterExchangeRecoverer para desviar erros fatais para 'pedidos.dlq' com alerta."}], delay:500}
    ]);
  });

  if(btnReset) btnReset.addEventListener("click",function(){
    clearState();
    setHud([{cls:"wh-info",txt:"[War Room Aberta] Selecione um incidente para iniciar a telemetria em tempo real..."}]);
  });
})();

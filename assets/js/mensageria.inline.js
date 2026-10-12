/* Extraido de trilhas/mensageria.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 4 ---------- */

function W(h,inner){return '<figure class="dg"><svg viewBox="0 0 340 '+h+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg></figure>';}
var DG={
 amqp:W(150,'<rect x="4" y="10" width="62" height="30" rx="7" class="b2"/><text x="35" y="29" class="bs">producer</text><rect x="88" y="10" width="164" height="112" rx="9" class="b3"/><text x="170" y="24" class="bs">broker · vhost</text><rect x="98" y="34" width="64" height="26" rx="6" class="b4"/><text x="130" y="51" class="bs">exchange</text><rect x="98" y="76" width="64" height="26" rx="6" class="b1"/><text x="130" y="93" class="bs">queue A</text><rect x="176" y="76" width="64" height="26" rx="6" class="b1"/><text x="208" y="93" class="bs">queue B</text><path d="M130,60 L130,74" class="l"/><path d="M130,76 L126,68 L134,68 Z" class="h"/><path d="M150,60 L204,74" class="l"/><path d="M208,76 L199,72 L203,66 Z" class="h"/><text x="170" y="70" class="bs">binding</text><rect x="274" y="76" width="62" height="26" rx="6" class="b2"/><text x="305" y="93" class="bs">consumer</text><path d="M66,25 L86,25" class="l"/><path d="M88,25 L80,21 L80,29 Z" class="h"/><path d="M240,89 L272,89" class="lt"/><path d="M274,89 L266,85 L266,93 Z" class="ht"/><text x="170" y="140" class="bs">o producer NUNCA publica numa fila — publica num exchange</text>'),
 exch:W(160,'<text x="52" y="14" class="bs">direct</text><rect x="10" y="20" width="84" height="22" rx="6" class="b4"/><text x="52" y="35" class="bs">chave = \'pago\'</text><rect x="10" y="52" width="38" height="20" rx="5" class="b1"/><text x="29" y="66" class="bs">pago</text><rect x="56" y="52" width="38" height="20" rx="5" class="bx"/><text x="75" y="66" class="bs">novo</text><path d="M40,42 L31,50" class="lt"/><text x="170" y="14" class="bs">topic</text><rect x="128" y="20" width="84" height="22" rx="6" class="b4"/><text x="170" y="35" class="bs">pedido.*.br</text><rect x="128" y="52" width="38" height="20" rx="5" class="b1"/><text x="147" y="66" class="bs">✓</text><rect x="174" y="52" width="38" height="20" rx="5" class="b1"/><text x="193" y="66" class="bs">✓</text><path d="M158,42 L149,50" class="lt"/><path d="M182,42 L191,50" class="lt"/><text x="288" y="14" class="bs">fanout</text><rect x="246" y="20" width="84" height="22" rx="6" class="b4"/><text x="288" y="35" class="bs">ignora a chave</text><rect x="246" y="52" width="24" height="20" rx="5" class="b1"/><rect x="276" y="52" width="24" height="20" rx="5" class="b1"/><rect x="306" y="52" width="24" height="20" rx="5" class="b1"/><path d="M270,42 L260,50" class="lt"/><path d="M288,42 L288,50" class="lt"/><path d="M306,42 L316,50" class="lt"/><text x="170" y="98" class="bt">a diferença é só a REGRA de casamento</text><text x="170" y="116" class="bs">direct: igualdade exata · topic: * = uma palavra, # = várias</text><text x="170" y="132" class="bs">fanout: copia para todas as filas ligadas</text><text x="170" y="150" class="bs">headers: casa por atributo, não por routing key</text>'),
 ack:W(150,'<rect x="6" y="16" width="56" height="26" rx="6" class="b3"/><text x="34" y="33" class="bs">na fila</text><rect x="84" y="16" width="70" height="26" rx="6" class="b4"/><text x="119" y="33" class="bs">unacked</text><rect x="176" y="16" width="70" height="26" rx="6" class="b1"/><text x="211" y="33" class="bs">processando</text><rect x="268" y="16" width="66" height="26" rx="6" class="b1"/><text x="301" y="33" class="bs">ack → some</text><path d="M62,29 L82,29" class="l"/><path d="M84,29 L76,25 L76,33 Z" class="h"/><path d="M154,29 L174,29" class="l"/><path d="M176,29 L168,25 L168,33 Z" class="h"/><path d="M246,29 L266,29" class="lt"/><path d="M268,29 L260,25 L260,33 Z" class="ht"/><path d="M211,42 C211,66 100,70 119,44" class="lr d"/><path d="M119,42 L115,50 L124,49 Z" class="hr"/><text x="170" y="80" class="bs">morreu aqui? volta para a fila (redelivered=true)</text><rect x="60" y="94" width="220" height="34" rx="8" class="b3"/><text x="170" y="110" class="bt">a janela perigosa</text><text x="170" y="123" class="bs">entre o commit no banco e o ack no broker</text><text x="170" y="144" class="bs">é por isso que o consumidor PRECISA ser idempotente</text>'),
 dlq:W(178,'<rect x="8" y="14" width="76" height="26" rx="7" class="b1"/><text x="46" y="31" class="bs">fila principal</text><rect x="132" y="14" width="76" height="26" rx="7" class="b2"/><text x="170" y="31" class="bs">worker</text><path d="M84,27 L130,27" class="l"/><path d="M132,27 L124,23 L124,31 Z" class="h"/><rect x="252" y="14" width="80" height="26" rx="7" class="b3"/><text x="292" y="31" class="bs">falhou?</text><path d="M208,27 L250,27" class="l"/><path d="M252,27 L244,23 L244,31 Z" class="h"/><rect x="196" y="60" width="136" height="26" rx="7" class="b4"/><text x="264" y="77" class="bs">transitória → retry c/ backoff</text><path d="M292,40 L280,58" class="lt"/><path d="M278,60 L286,57 L284,64 Z" class="ht"/><rect x="196" y="98" width="136" height="26" rx="7" class="b5"/><text x="264" y="115" class="bs">permanente → DLQ direto</text><path d="M300,40 L318,96" class="lr"/><path d="M320,98 L318,90 L312,94 Z" class="hr"/><rect x="8" y="60" width="150" height="26" rx="7" class="b3"/><text x="83" y="77" class="bs">fila de espera (TTL + DLX)</text><path d="M196,73 L160,73" class="l d"/><path d="M158,73 L166,69 L166,77 Z" class="h"/><path d="M46,60 L46,42" class="lt"/><path d="M46,40 L42,48 L51,48 Z" class="ht"/><rect x="8" y="120" width="150" height="26" rx="7" class="b5"/><text x="83" y="137" class="bs">parking lot · investigação humana</text><path d="M196,111 L160,131" class="lr"/><path d="M158,133 L166,129 L166,136 Z" class="hr"/><text x="170" y="168" class="bs">retry infinito não é resiliência — é um laço com alarme desligado</text>'),
 outbox:W(168,'<rect x="8" y="16" width="150" height="76" rx="9" class="b3"/><text x="83" y="32" class="bs">UMA transação local</text><rect x="18" y="40" width="130" height="22" rx="6" class="b1"/><text x="83" y="55" class="bs">INSERT pedido</text><rect x="18" y="66" width="130" height="20" rx="6" class="b1"/><text x="83" y="80" class="bs">INSERT outbox(evento)</text><rect x="8" y="104" width="150" height="26" rx="7" class="b2"/><text x="83" y="121" class="bs">relay lê outbox</text><path d="M83,92 L83,102" class="l"/><path d="M83,104 L79,96 L88,96 Z" class="h"/><rect x="192" y="104" width="66" height="26" rx="7" class="b4"/><text x="225" y="121" class="bs">broker</text><path d="M158,117 L190,117" class="lt"/><path d="M192,117 L184,113 L184,121 Z" class="ht"/><rect x="272" y="104" width="60" height="26" rx="7" class="b1"/><text x="302" y="121" class="bs">consumidor</text><path d="M258,117 L270,117" class="lt"/><rect x="192" y="16" width="140" height="70" rx="9" class="b5"/><text x="262" y="34" class="bt">sem outbox</text><text x="262" y="50" class="bs">commit no banco ✓</text><text x="262" y="64" class="bs">publish falhou ✗</text><text x="262" y="78" class="bs">→ o evento nunca existiu</text><text x="170" y="158" class="bs">o relay publica at-least-once → o consumidor tem que ser idempotente</text>'),
 comp:W(140,'<rect x="8" y="46" width="76" height="30" rx="8" class="b4"/><text x="46" y="65" class="bs">fila pedidos</text><rect x="140" y="12" width="76" height="26" rx="7" class="b1"/><text x="178" y="29" class="bs">worker 1</text><rect x="140" y="48" width="76" height="26" rx="7" class="b1"/><text x="178" y="65" class="bs">worker 2</text><rect x="140" y="84" width="76" height="26" rx="7" class="b1"/><text x="178" y="101" class="bs">worker 3</text><path d="M84,58 L138,26" class="lt"/><path d="M140,25 L131,26 L135,32 Z" class="ht"/><path d="M84,61 L138,61" class="lt"/><path d="M140,61 L132,57 L132,65 Z" class="ht"/><path d="M84,64 L138,98" class="lt"/><path d="M140,99 L132,94 L129,101 Z" class="ht"/><text x="272" y="40" class="bs">cada mensagem vai</text><text x="272" y="54" class="bs">para UM worker só</text><text x="272" y="72" class="bs">dobrar workers ≈</text><text x="272" y="86" class="bs">dobrar a vazão</text><text x="170" y="130" class="bs">e é por isso que ordem global some assim que há mais de um consumidor</text>')
};

var T=[
{g:"01",n:"Por que mensageria existe",s:"quando a fila resolve — e quando ela só adia o problema",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Síncrono versus assíncrono",x:"espere a resposta agora ou aceite processamento posterior",oq:"Síncrono acopla o chamador ao tempo de resposta; assíncrono registra uma mensagem para processamento independente.",ps:"Escolher latência, disponibilidade e feedback compatíveis com a regra de negócio. Use async quando o emissor não precisa do resultado imediato e desacoplamento temporal traz valor.",cf:"No sync, request mantém contexto até reply; no async, broker guarda/entrega e o resultado chega por estado, evento ou consulta <b>Erro comum:</b> Trocar chamada simples por fila e esconder erro que o usuário precisava conhecer na hora.",ex:"POST /orders → 202 Accepted + orderId\norder.created → fila de faturamento"},
 {t:"Comando, evento e mensagem",x:"intenção e fato não são a mesma coisa",oq:"Mensagem é o envelope; comando pede que um destinatário faça algo; evento anuncia um fato já ocorrido.",ps:"Criar contratos com ownership e expectativas de falha claros. Nomeie comandos no imperativo e eventos no passado do domínio.",cf:"Comando tende a um handler e pode falhar; evento pode ter zero ou muitos interessados e não deve ordenar a quem reagir <b>Erro comum:</b> Publicar UserData para tudo, sem semântica, versionamento ou responsabilidade.",ex:"CapturePayment {orderId}\nPaymentAuthorized {paymentId, orderId, occurredAt}"},
 {t:"Broker e desacoplamento temporal",x:"o intermediário que recebe, roteia e entrega",oq:"Broker mantém topologia e mensagens conforme política, mediando produtores e consumidores.",ps:"Permitir ritmos e indisponibilidades independentes, bufferizar picos e rotear uma publicação. Use quando retenção curta/média, roteamento rico e filas de trabalho combinam com o caso.",cf:"Produtor conecta e publica; exchange decide destinos; queue segura; consumer recebe e confirma <b>Erro comum:</b> Achar que broker remove todo acoplamento: schema, semântica e capacidade continuam contratos.",ex:"publisher → exchange → binding → queue → consumer"},
 {t:"Fila e competing consumers",x:"uma mensagem de trabalho é entregue a um consumidor da fila",dg:"comp",oq:"Queue armazena deliveries; vários consumers na mesma fila competem e dividem o trabalho.",ps:"Escalar throughput de um tipo de processamento sem duplicar intencionalmente cada efeito. Use uma fila por necessidade de processamento independente, não por instância.",cf:"Rabbit despacha mensagens entre consumidores ativos respeitando disponibilidade/prefetch; ack remove após sucesso <b>Erro comum:</b> Criar fila por Pod e transformar escala horizontal em fanout acidental.",ex:"billing.q → billing-1 | billing-2 | billing-3"},
 {t:"Garantias de entrega",x:"at-most-once e at-least-once são resultados do protocolo completo",oq:"At-most-once pode perder sem duplicar; at-least-once evita perda reconhecida mas pode redeliver; exactly-once fim a fim exige efeito idempotente/coordenação.",ps:"Projetar o tratamento correto de perda, duplicidade e confirmação. Escolha por impacto de negócio; para pagamentos, aceite redelivery e garanta efeito único.",cf:"A combinação de confirms, persistência, ack e retry define a semântica observada <b>Erro comum:</b> Prometer exactly-once apenas porque a fila é durável.",ex:"confirm publisher + durable quorum queue + manual ack + idempotency"},
 {t:"Quando não usar RabbitMQ",x:"a ferramenta tem formato de trabalho e custo",oq:"RabbitMQ não substitui banco, API de consulta, log analítico durável ou stream massivo por padrão.",ps:"Evitar complexidade distribuída sem benefício mensurável. Prefira chamada direta para resposta imediata simples; banco para estado consultável; avalie log/stream para replay longo.",cf:"Cada fila exige capacidade, retenção, contratos, observabilidade, replay e tratamento de falhas <b>Erro comum:</b> Usar fila para esconder lentidão sem definir prazo, backlog e experiência do usuário.",ex:"Pergunta: preciso buffer, fanout, retry desacoplado ou independência temporal?"}
]},
{g:"02",n:"O modelo AMQP",s:"connection, channel, vhost: as fronteiras que tudo usa",c:"var(--blue)",cs:"var(--blue-soft)",items:[
 {t:"AMQP 0-9-1 e modelo RabbitMQ",x:"o protocolo usado pelos clientes clássicos do rabbitmq",dg:"amqp",oq:"AMQP 0-9-1 define métodos, frames, channels, exchanges, queues, bindings e deliveries.",ps:"Dar semântica interoperável a publicação, roteamento e confirmação. Entenda o modelo mesmo usando Spring, pois exceções e garantias aparecem nesse nível.",cf:"Cliente envia frames sobre TCP; comandos de classe exchange/queue/basic operam recursos no vhost <b>Erro comum:</b> Confundir AMQP 1.0 com 0-9-1 ou acreditar que biblioteca abstrai falhas de protocolo.",ex:"basic.publish(exchange, routingKey, properties, body)\nbasic.deliver → basic.ack"},
 {t:"Node, cluster, vhost e usuário",x:"fronteiras administrativas do broker",oq:"Node é uma instância; cluster coordena nodes; virtual host separa namespace/permissões; user autentica.",ps:"Isolar aplicações e controlar recursos sem instalar um broker por equipe. Use vhosts como fronteira de tenancy/ambiente e contas distintas por workload.",cf:"Conexão aponta a node/vhost; definições e permissões determinam configure/write/read <b>Erro comum:</b> Usar guest em produção ou conceder .* para configure/write/read sem necessidade.",ex:"docker run -d --name rabbit -p 5672:5672 -p 15672:15672 rabbitmq:management\nrabbitmqctl list_vhosts"},
 {t:"TCP connection",x:"recurso caro e duradouro por aplicação",oq:"Connection é sessão TCP autenticada que carrega heartbeat e múltiplos channels.",ps:"Evitar abrir socket/handshake por mensagem e detectar peer indisponível. Mantenha poucas connections long-lived; separe publisher/consumer quando isolamento operacional ajudar.",cf:"Cliente negocia protocolo, autentica no vhost, troca heartbeat e recupera/reconecta conforme biblioteca <b>Erro comum:</b> Criar connection por publish ou configurar heartbeat muito agressivo sem medir rede.",ex:"spring.rabbitmq.addresses=localhost:5672\nspring.rabbitmq.requested-heartbeat=30s"},
 {t:"Channel",x:"sessão lógica multiplexada na connection",oq:"Channel transporta comandos AMQP com estado próprio: confirms, delivery tags e transação.",ps:"Permitir concorrência sem muitas connections pesadas. Não compartilhe channel simultaneamente sem garantia da biblioteca; use cache/pool do cliente Spring.",cf:"Frames carregam channel number; erro de protocolo normalmente fecha o channel, não necessariamente a connection <b>Erro comum:</b> Ack de delivery em channel diferente ou uso concorrente inseguro do mesmo channel.",ex:"rabbitTemplate.execute(channel -> {\n  channel.confirmSelect();\n  return null;\n});"},
 {t:"Anatomia da mensagem",x:"body mais propriedades que viabilizam operação",oq:"Payload carrega dado; contentType/encoding, messageId, correlationId, type, timestamp, headers, expiration e deliveryMode descrevem-no.",ps:"Interpretar, rastrear, versionar, expirar e deduplicar sem adivinhar o body. Defina envelope mínimo e não dependa de header não documentado.",cf:"Publisher cria properties; exchange roteia por routing key/headers; queue entrega envelope + properties + body <b>Erro comum:</b> Enviar entidade JPA serializada ou payload gigante e instável.",ex:"{eventId, type, version, occurredAt, correlationId, data}"},
 {t:"Declaração de topologia",x:"criar recursos de forma idempotente e compatível",oq:"Clientes declaram exchange/queue/binding; se o nome existe com atributos diferentes, Rabbit fecha o channel.",ps:"Garantir que ambiente novo tenha contrato de roteamento e detectar deriva. Defina ownership: aplicação ou IaC; nunca duas fontes divergentes.",cf:"Declare verifica/cria no vhost; durable/exclusive/auto-delete/arguments fazem parte da equivalência <b>Erro comum:</b> Mudar argumento imutável em produção como se fosse update comum.",ex:"@Bean Queue billing(){ return QueueBuilder.durable(\"billing.q\").build(); }"}
]},
{g:"03",n:"Exchanges, bindings e rotas",s:"o produtor publica intenção; a topologia decide quem recebe",c:"var(--teal)",cs:"var(--teal-soft)",items:[
 {t:"Binding e routing key",x:"a regra que liga uma origem a um destino",oq:"Binding associa exchange a queue/exchange e pode carregar binding key/argumentos. Routing key acompanha o publish.",ps:"Separar nome do evento da escolha de consumidores e compor rotas. Trate binding como parte do contrato operacional versionado.",cf:"Exchange compara routing key/headers com bindings segundo seu tipo e produz zero ou mais destinos <b>Erro comum:</b> Achar que routing key é nome da fila em qualquer exchange.",ex:"orders.x --[order.created]--> billing.q\norders.x --[order.*]--> audit.q"},
 {t:"Direct exchange",x:"correspondência exata da routing key",dg:"exch",oq:"Direct envia para bindings cuja binding key é igual à routing key.",ps:"Rotear comandos ou categorias discretas previsíveis. Use quando igualdade expressa a regra inteira.",cf:"Pode haver várias filas com a mesma binding key, cada uma recebe uma cópia <b>Erro comum:</b> Pensar que mesma key para duas filas faz load balance entre elas; isso duplica por fila.",ex:"payments.x: payment.capture → capture.q\npayments.x: payment.refund → refund.q"},
 {t:"Topic exchange",x:"padrões hierárquicos em palavras",oq:"Topic compara palavras separadas por ponto; * casa uma palavra e # casa zero ou mais.",ps:"Inscrever consumidores em famílias de eventos sem listar cada key. Defina taxonomia estável e teste sobreposições.",cf:"Binding order.* casa order.created, não order.payment.authorized; order.# casa ambos <b>Erro comum:</b> Usar # em tudo e criar fanout acidental ou nomes sem hierarquia.",ex:"orders.topic\norder.* → lifecycle.q\norder.# → audit.q\n*.failed → alert.q"},
 {t:"Fanout exchange",x:"uma cópia para cada destino ligado",oq:"Fanout ignora routing key e publica para todas as filas bindings.",ps:"Distribuir o mesmo fato a processamentos independentes. Use para broadcast de eventos quando todos os interessados recebem tudo.",cf:"Cada fila recebe sua cópia; consumidores dentro da mesma fila competem <b>Erro comum:</b> Usar uma única fila para dois sistemas que precisam ambos processar o evento.",ex:"order.events → billing.q + email.q + analytics.q"},
 {t:"Headers exchange",x:"roteamento por propriedades do header",oq:"Headers usa pares do cabeçalho e x-match any/all em vez da routing key.",ps:"Expressar filtros multidimensionais quando uma key hierárquica seria artificial. Use com parcimônia; topic costuma ser mais legível e interoperável.",cf:"Exchange compara headers do publish com argumentos dos bindings <b>Erro comum:</b> Colocar dado de negócio sensível no header ou criar matriz de regras impossível de manter.",ex:"x-match=all, country=BR, tier=gold → vip-br.q"},
 {t:"Default, alternate e rota ausente",x:"toda publicação precisa de destino observável",oq:"Default exchange roteia por nome exato da fila; mandatory retorna publish sem rota; alternate exchange captura unroutable conforme configuração.",ps:"Evitar perda silenciosa por typo, binding ausente ou deploy incompleto. Ative returns/alerta e trate rota ausente como falha de contrato.",cf:"Exchange sem match descarta por padrão; basic.return informa ao publisher quando mandatory; AE recebe a mensagem como fallback <b>Erro comum:</b> Achar que publisher confirm garante que alguma fila recebeu; confirm e roteamento são perguntas diferentes.",ex:"rabbitTemplate.setMandatory(true);\n// ReturnCallback registra exchange, key e replyText"}
]},
{g:"04",n:"Publicação confiável",s:"escrever no socket não prova que o broker aceitou",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"Durabilidade e persistência",x:"topologia e mensagem sobrevivem por condições diferentes",oq:"Exchange/queue durable sobrevivem restart; deliveryMode persistent pede persistência da mensagem; fila quorum replica por consenso.",ps:"Definir o que deve sobreviver a processo/node indisponível. Use com confirms; durabilidade sem confirmação deixa janela no publisher.",cf:"Mensagem persistente em fila durável pode ser gravada; publisher confirm indica aceitação segura conforme tipo da fila <b>Erro comum:</b> Achar que persistent sozinho é garantia fim a fim ou misturar durable exchange com fila transient.",ex:"MessageProperties.setDeliveryMode(PERSISTENT);\nQueueBuilder.durable(\"billing.q\").quorum().build();"},
 {t:"Publisher confirms",x:"o broker confirma aceitação de cada publicação",oq:"Confirm é ack/nack assíncrono do Rabbit ao publisher no channel em confirm mode.",ps:"Fechar a janela entre escrever no socket e saber que o broker tornou a mensagem segura. Correlacione confirm ao eventId e defina retry/outbox para publish não confirmado.",cf:"Cada publish recebe sequence; ack pode confirmar um ou vários. Em quorum, confirm vem após aceitação pelo quorum <b>Erro comum:</b> Usar sleep e presumir entrega ou reenviar sem idempotência após timeout ambíguo.",ex:"spring.rabbitmq.publisher-confirm-type=correlated\nrabbitTemplate.convertAndSend(exchange,key,event,new CorrelationData(eventId));"},
 {t:"Returns e mandatory",x:"aceito pelo exchange não significa roteado",oq:"Com mandatory, publicação sem fila destino gera basic.return com motivo, exchange e routing key.",ps:"Detectar topologia incompleta/typo sem perder evento silenciosamente. Habilite callback e transforme return em alerta + persistência/reprocessamento controlado.",cf:"Return ocorre quando nenhuma rota aceita; confirm ainda pode ser ack porque exchange processou o publish <b>Erro comum:</b> Tratar ack do confirm como prova de consumo ou roteamento.",ex:"spring.rabbitmq.publisher-returns=true\nspring.rabbitmq.template.mandatory=true"},
 {t:"Confirms assíncronos e batching",x:"segurança sem serializar todo throughput",oq:"Esperar confirm individual bloqueia; lote reduz round trips; async associa sequences/correlation e processa callbacks.",ps:"Equilibrar latência, memória e throughput do produtor. Comece com correlated async do cliente; limite inflight para aplicar backpressure.",cf:"Mantém mapa de pendências; callbacks removem acked ou tratam nack/timeout <b>Erro comum:</b> Acumular pendências ilimitadas quando broker degrada ou perder correlação.",ex:"ConcurrentHashMap<String, Pending> inflight;\n// remove no ConfirmCallback; timeout vai ao outbox"},
 {t:"Schema, envelope e evolução",x:"o contrato precisa sobreviver a deploys independentes",oq:"Envelope identifica evento/versão/correlação; schema define campos e compatibilidade.",ps:"Permitir produtor novo conversar com consumidor antigo durante rollout. Prefira evolução aditiva; versione semântica quando significado muda.",cf:"Consumidor ignora campos adicionais, aplica defaults e rejeita mudanças incompatíveis de forma observável <b>Erro comum:</b> Renomear/remover campo em evento existente ou serializar nome de classe Java.",ex:"{\"eventId\":\"...\",\"type\":\"OrderCreated\",\"version\":2,\"data\":{\"orderId\":\"...\"}}"},
 {t:"Conexões, fluxo e backpressure no produtor",x:"se o broker desacelera, o produtor também precisa se proteger",oq:"Connection blocked, alarmes de memória/disco, confirmações lentas e buffer cliente sinalizam pressão.",ps:"Evitar OOM no produtor e avalanche de retries contra broker saturado. Limite concorrência/inflight, use timeout, circuit breaker com outbox e exponha métricas.",cf:"Broker pode bloquear publishers; cliente acumula inflight; timeouts/retry sem limite aumentam carga <b>Erro comum:</b> Retry imediato infinito e buffer sem teto.",ex:"inflight <= 5_000\nconfirm_timeout = 5s\nretry com backoff + jitter"}
]},
{g:"05",n:"Consumo, ack e fluxo",s:"quem decide quando a mensagem sai da fila é o consumidor",c:"var(--amber)",cs:"var(--amber-soft)",items:[
 {t:"Consumer e delivery push",x:"o broker envia mensagens para um consumidor registrado",oq:"basic.consume registra callback; deliveries chegam assincronamente com tag, redelivered, exchange e routing key.",ps:"Processar continuamente sem polling agressivo. Mantenha handler curto ou delegue conscientemente, preservando escopo do channel/ack.",cf:"Consumer permanece ligado ao channel; cancel/connection loss exige recovery; fila distribui conforme consumidores/prefetch <b>Erro comum:</b> Usar basic.get em loop como consumidor principal e perder eficiência.",ex:"@RabbitListener(queues=\"billing.q\")\nvoid handle(OrderCreated event) { ... }"},
 {t:"Ack manual",x:"remova a mensagem somente depois do efeito necessário",dg:"ack",oq:"Ack confirma processamento de delivery; com manual ack, falha/connection close antes do ack causa requeue/redelivery.",ps:"Evitar perda quando o consumidor morre durante o trabalho. Ack depois do commit local e antes apenas se perda for aceitável.",cf:"Delivery tag é válida no channel; basic.ack pode confirmar uma ou várias <b>Erro comum:</b> Ack antes do commit ou ack em outro channel, causando unknown delivery tag.",ex:"channel.basicAck(tag, false);\n// somente após salvar idempotentemente"},
 {t:"Nack, reject e requeue",x:"falha precisa de uma decisão explícita",oq:"basic.reject trata uma delivery; basic.nack pode tratar várias; requeue=true volta à fila, false descarta ou dead-letter.",ps:"Separar erro transitório de mensagem inválida e evitar perda silenciosa. Não requeue indefinidamente no mesmo ponto; conte tentativas e use atraso/DLQ.",cf:"Mensagem requeued pode retornar imediatamente; com false e DLX configurada, segue para dead letter <b>Erro comum:</b> Criar hot loop de requeue que consome CPU e bloqueia mensagens saudáveis.",ex:"channel.basicNack(tag,false,false); // vai para DLX se configurada"},
 {t:"Prefetch",x:"limite de deliveries ainda não confirmadas",oq:"Prefetch cria uma janela máxima de mensagens unacked por consumer/channel conforme cliente/configuração.",ps:"Evitar que um consumidor receba trabalho demais e equilibrar throughput/fairness/memória. Calibre com tempo de processamento, concorrência, tamanho e memória; meça.",cf:"Ao atingir o limite, broker para de enviar até chegar ack; valor 0 significa sem limite no AMQP 0-9-1 <b>Erro comum:</b> Copiar prefetch 250 sem considerar payload de 5 MB ou consumer de 1 thread.",ex:"spring.rabbitmq.listener.simple.prefetch=20\nspring.rabbitmq.listener.simple.concurrency=4"},
 {t:"Concorrência de consumidores",x:"paralelismo dentro de uma fila",oq:"Múltiplos consumers dividem deliveries; Spring pode aumentar consumers por container dentro de limites.",ps:"Aumentar throughput até encontrar CPU, banco, downstream ou ordenação limitante. Aumente com teste de carga e limite de downstream; considere autoscaling por backlog/idade.",cf:"Broker distribui; cada handler usa recursos locais e conexões externas. Escalar demais apenas desloca fila para o banco <b>Erro comum:</b> Usar número de threads como solução universal e saturar banco.",ex:"concurrency=3\nmax-concurrency=12\nprefetch=10"},
 {t:"Ordenação",x:"fifo tem escopo e quebra com paralelismo/redelivery",oq:"Fila preserva ordem de enqueue em condições, mas vários consumers, prioridade, retry e tempos diferentes alteram ordem de conclusão.",ps:"Evitar regra de negócio que depende de promessa inexistente. Particione por chave/entidade, use versão e rejeite evento antigo; serialize apenas onde requisito exige.",cf:"Deliveries sequenciais podem concluir fora de ordem; redelivered volta; Single Active Consumer restringe consumo quando necessário <b>Erro comum:</b> Escalar consumers mantendo suposição de ordem global.",ex:"aggregateId=order-42, sequence=7\nconsumer aplica somente se sequence > lastSequence"}
]},
{g:"06",n:"Retry, DLQ e poison message",s:"classifique a falha antes de repetir",c:"var(--red)",cs:"var(--red-soft)",items:[
 {t:"Taxonomia de falhas",x:"repetir só funciona quando a falha pode mudar",oq:"Transitória pode se resolver; permanente exige correção/dado novo; poison sempre falha naquele consumer; overload pede reduzir ritmo.",ps:"Escolher retry, DLQ, alerta ou descarte com intenção. Mapeie por causa de negócio e técnica, não por catch Exception genérico.",cf:"Handler classifica exceção e preserva contexto; política decide atraso/tentativas/destino <b>Erro comum:</b> Retry de erro de validação ou descarte de timeout transitório.",ex:"TimeoutException → retry\nValidationException → DLQ\nDuplicateEvent → ack sem novo efeito"},
 {t:"Backoff exponencial e jitter",x:"espaçar tentativas para dar tempo de recuperação",oq:"Backoff aumenta atraso; jitter randomiza para evitar que consumidores retryem juntos.",ps:"Reduzir thundering herd e pressão sobre dependência falha. Use para falha transitória e pare no budget definido pelo negócio.",cf:"delay=min(cap,base×2^attempt)+random; total de tentativas e prazo permanecem finitos <b>Erro comum:</b> Backoff dentro do listener dormindo thread e segurando delivery/prefetch.",ex:"1s, 2s, 4s, 8s + jitter; máximo 5 tentativas / 60s"},
 {t:"TTL + DLX para retry atrasado",x:"mover a mensagem para uma fila de espera antes de tentar novamente",oq:"Fila retry recebe mensagem com TTL; ao expirar, dead-letter exchange roteia de volta à fila principal.",ps:"Aguardar sem bloquear thread nem hot-loop de requeue. Use filas por faixa de atraso ou plugin/mecanismo adequado; limite ciclos.",cf:"Mensagem expira conforme política/TTL e é dead-lettered; cabeçalhos x-death registram passagens <b>Erro comum:</b> TTL por mensagem em fila longa causar head-of-line delay ou ciclo infinito de DLX.",ex:"orders.q → orders.retry.10s (TTL) → orders.x → orders.q"},
 {t:"Dead Letter Queue",x:"destino analisável para mensagens não processadas",dg:"dlq",oq:"DLQ recebe mensagens dead-lettered por reject/nack sem requeue, expiração, limite ou política.",ps:"Preservar evidência, alertar e permitir correção/replay controlado. Defina owner, alerta, retenção, dados sensíveis e ferramenta de replay idempotente.",cf:"DLX da fila origem roteia por routing key configurada/original para uma fila de quarentena <b>Erro comum:</b> Tratar DLQ como lixeira silenciosa ou reenviar tudo sem investigar.",ex:"orders.q --nack--> orders.dlx --> orders.dlq"},
 {t:"Poison message e parking lot",x:"a mesma mensagem falha repetidamente de forma determinística",oq:"Poison message dispara falha por dado/schema/bug; parking lot isola após budget para não bloquear fluxo.",ps:"Proteger throughput e tornar falha acionável. Alerte por taxa/idade e agrupe por assinatura de erro sem vazar payload.",cf:"Contador de delivery/x-death ou limite da quorum queue determina quando parar; destino preserva metadados <b>Erro comum:</b> Requeue infinito ou descartar sem eventId/erro/stack sanitizada.",ex:"attempt >= 5 → parking.q\nerrorCode=UNSUPPORTED_CURRENCY"},
 {t:"Timeout, cancelamento e shutdown",x:"processamento tem prazo e precisa sair com segurança",oq:"Timeout limita espera de downstream; cancelamento/shutdown para de aceitar novas deliveries e finaliza/nacka as em voo.",ps:"Evitar consumer preso, deploy com perda e backlog invisível. Alinhe timeout HTTP/DB, grace period, ack e max execution time.",cf:"Listener container cancela consumer; broker requeue unacked na connection fechada; aplicação precisa respeitar interruption/deadline <b>Erro comum:</b> Capturar InterruptedException e continuar ou ackar trabalho incompleto durante shutdown.",ex:"timeout downstream=2s\nshutdown grace=30s\nmanual ack após commit"}
]},
{g:"07",n:"Duplicidade e consistência",s:"at-least-once implica redelivery — desenhe para isso",c:"var(--orange)",cs:"var(--orange-soft)",items:[
 {t:"At-most, at-least e o mito do exactly-once",x:"a garantia precisa incluir broker, banco e efeito externo",oq:"At-least-once é comum com confirms + ack; exactly-once de transporte não impede repetir efeito após crash entre commit e ack.",ps:"Evitar cobrança/e-mail/estoque duplicado sob redelivery. Assuma duplicidade e desenhe chave idempotente desde o contrato.",cf:"A janela commit local → ack permite repetir; resolver no efeito com idempotência, dedup ou protocolo externo <b>Erro comum:</b> Vender exactly-once como checkbox do RabbitMQ.",ex:"eventId 7 → INSERT processed_event UNIQUE\ncrash\nredelivery eventId 7 → conflito → ack"},
 {t:"Idempotência de efeito",x:"repetir a operação produz o mesmo estado observável",oq:"Handler idempotente reconhece a mesma intenção por chave e não duplica efeito.",ps:"Tornar redelivery/retry seguros. Use chave estável do produtor/eventId; não derive apenas do payload mutável.",cf:"Constraint, upsert, state machine ou idempotency key decide se o efeito já ocorreu atomicamente <b>Erro comum:</b> Check-then-act sem constraint: duas threads passam na checagem.",ex:"INSERT INTO payment(idempotency_key,status) VALUES (?,?)\nON CONFLICT (idempotency_key) DO NOTHING"},
 {t:"Inbox e deduplicação",x:"registrar recebimento junto do efeito local",oq:"Inbox guarda eventId/processador e status; constraint evita processar novamente.",ps:"Centralizar dedup e auditoria em consumidores com banco transacional. Defina retenção e escopo da chave (consumer,eventId).",cf:"Na mesma transação, insere inbox e aplica regra; conflito significa já processado; depois ack <b>Erro comum:</b> Salvar inbox depois do efeito ou apagar cedo demais.",ex:"BEGIN;\nINSERT INTO inbox(consumer,event_id) ...;\nUPDATE orders ...;\nCOMMIT;\nACK;"},
 {t:"Transactional Outbox",x:"estado do negócio e intenção de publicar no mesmo commit",dg:"outbox",oq:"Outbox é tabela escrita na transação da regra; relay publica pendências e marca confirmação.",ps:"Fechar dual write banco + broker sem transação distribuída. Use quando perder evento após commit é inaceitável; opere lag/retry/cleanup.",cf:"Commit cria pedido/outbox atomicamente; worker publica com confirm; crash pode duplicar, consumidor é idempotente <b>Erro comum:</b> Marcar sent antes do confirm ou achar que outbox elimina duplicidade.",ex:"BEGIN; INSERT orders...; INSERT outbox(event_id,payload)...; COMMIT;\nrelay → publish confirm → mark sent"},
 {t:"Saga e coreografia",x:"uma transação de negócio atravessa serviços sem commit global",oq:"Saga divide passos locais e compensações; coreografia reage a eventos, orquestração centraliza sequência.",ps:"Manter consistência eventual em fluxo distribuído longo. Use poucos passos, estados explícitos, correlationId e observabilidade ponta a ponta.",cf:"Cada participante persiste estado e publica próximo fato; timeout/falha inicia decisão/compensação idempotente <b>Erro comum:</b> Choreography sem dono vira eventos circulares impossíveis de entender.",ex:"OrderCreated → PaymentAuthorized → StockReserved\nfalha → PaymentRefundRequested"},
 {t:"Request/reply e correlationId",x:"rpc assíncrono continua tendo acoplamento de resposta",oq:"Publisher envia replyTo + correlationId; replier publica resposta; cliente casa correlação e aplica timeout.",ps:"Integrar quando protocolo AMQP é necessário mas existe resultado direto. Use raramente; se request/reply domina, uma API síncrona pode ser mais simples.",cf:"Direct reply-to ou reply queue transporta resposta; ausência precisa expirar e chamadas em voo consomem memória <b>Erro comum:</b> Achar que Rabbit torna RPC desacoplado ou esperar indefinidamente.",ex:"Object reply = rabbitTemplate.convertSendAndReceive(\"calc.x\",\"price\",request);"}
]},
{g:"08",n:"Spring AMQP e operação",s:"Spring AMQP e o broker em produção",c:"var(--pink)",cs:"var(--pink-soft)",items:[
 {t:"Spring AMQP: declarables e converter",x:"configuração explícita da topologia e do contrato java/json",oq:"Queue, Exchange e Binding beans viram declarations via RabbitAdmin; MessageConverter transforma objeto e body/properties.",ps:"Versionar topologia e evitar serialização Java insegura/acoplada. Use DTO de evento imutável e JSON com contentType; revise trusted packages.",cf:"Boot cria ConnectionFactory/RabbitTemplate; admin declara; Jackson converter usa tipo/headers conforme configuração <b>Erro comum:</b> Depender de auto declaration implícita sem ownership ou usar Java serialization.",ex:"@Bean Declarables orders(){ return new Declarables(exchange,queue,binding); }\n@Bean MessageConverter json(){ return new JacksonJsonMessageConverter(); }"},
 {t:"RabbitTemplate, confirms e returns",x:"publicar com correlação e observar todos os resultados",oq:"RabbitTemplate converte/envia; ConfirmCallback recebe ack/nack; ReturnsCallback recebe unroutable mandatory.",ps:"Tornar o publisher Spring confiável e mensurável. Trate callback sem bloquear thread; registre métrica e encaminhe pendência ao outbox/retry.",cf:"CachingConnectionFactory habilita correlated confirms/returns; CorrelationData liga callback ao eventId <b>Erro comum:</b> Logar callback e esquecer estado pendente/reprocessamento.",ex:"rabbitTemplate.setConfirmCallback((data,ack,cause)->...);\nrabbitTemplate.setReturnsCallback(returned->...);"},
 {t:"@RabbitListener e listener container",x:"o container administra consumers, channels e ciclo de vida",oq:"@RabbitListener registra handler; Simple/DirectMessageListenerContainer controlam concurrency, prefetch, ack, recovery e shutdown.",ps:"Consumir com integração Spring sem perder semântica AMQP. Configure ack/concurrency/prefetch conscientemente e exponha container metrics.",cf:"Adapter converte mensagem e invoca método; erro passa por error handler/recoverer; ack depende do modo <b>Erro comum:</b> Achar que AUTO significa ack antes do método sempre ou ignorar defaultRequeueRejected.",ex:"@RabbitListener(queues=\"billing.q\", ackMode=\"MANUAL\")\nvoid handle(Event e, Channel ch, Message m){ ... }"},
 {t:"Retry, recoverer e transação no Spring",x:"a exceção precisa chegar a uma política previsível",oq:"Advice/RetryInterceptor aplica tentativas; MessageRecoverer envia/descarta após esgotar; transação pode coordenar efeito local e rollback do receive.",ps:"Evitar requeue infinito e alinhar commit local ao ack. Prefira idempotência/outbox para dual write; configure recoverer/DLQ explicitamente.",cf:"Retry stateless/stateful tem impactos; external transaction rollback requeuea conforme container/config; Rabbit transaction não torna DB+broker atomicamente globais <b>Erro comum:</b> Misturar retry Spring e DLX retry sem calcular tentativas totais.",ex:"RetryInterceptorBuilder.stateless().maxAttempts(3)\n.recoverer(new RepublishMessageRecoverer(template,\"errors.x\",\"billing.failed\"))"},
 {t:"Quorum queues, segurança e HA",x:"replicação não elimina decisões de cliente",oq:"Quorum queue usa Raft e replica mensagens; TLS protege tráfego; vhost/users/permissões limitam ação.",ps:"Tolerar falha de node para dados importantes e reduzir acesso indevido. Use número ímpar de membros, confirms + manual ack, least privilege e certificados rotacionáveis.",cf:"Leader replica para maioria antes do confirm; reeleição pausa; cliente recupera e pode reenviar pendências <b>Erro comum:</b> Achar que cluster replica classic queue automaticamente ou usar quorum para filas temporárias/milhões de backlog sem avaliar streams.",ex:"QueueBuilder.durable(\"billing.q\").quorum().build();\nconfigure: ^billing\\.\nwrite: ^orders\\.x$\nread: ^billing\\.q$"},
 {t:"Monitoramento, capacidade e troubleshooting",x:"backlog é sintoma; idade e taxas contam a história",oq:"Métricas-chave: ready/unacked, publish/deliver/ack rates, oldest age, consumers, confirm latency, memory/disk alarms, connections/channels e redelivery.",ps:"Detectar antes do SLA, localizar produtor/broker/consumer/downstream e dimensionar. Alerte por idade/SLO e capacidade, não apenas quantidade fixa; preserve margem de disco/memória.",cf:"Balanço de taxas mostra crescimento; unacked alto aponta consumo preso/prefetch; ready alto mostra chegada maior que saída ou falta de consumers <b>Erro comum:</b> Purgar/reiniciar para baixar gráfico sem entender causa ou ignorar idade da mensagem.",ex:"rabbitmq-diagnostics status\nrabbitmq-diagnostics memory_breakdown\nrabbitmqctl list_queues name messages_ready messages_unacknowledged consumers"}
]}
,
{g:"09",n:"Padrões de mensageria",s:"os desenhos que se repetem em todo sistema com fila",c:"var(--violet)",cs:"var(--violet-s)",items:[
 {t:"Publish/subscribe",x:"um publica, muitos recebem",oq:"O produtor publica um fato num exchange fanout ou topic e cada interessado tem a sua própria fila ligada a ele.",ps:"Adicionar um novo consumidor sem tocar no produtor. É o padrão que mais reduz acoplamento em sistemas que crescem.",cf:"Uma fila por consumidor, não uma fila compartilhada: assim cada um processa no seu ritmo e a lentidão de um não afeta os outros. <b>Erro comum:</b> várias aplicações consumindo da mesma fila, o que faz cada mensagem chegar a apenas uma delas.",ex:"# uma exchange, N filas\nexchange: pedidos (topic)\n  → fila faturamento   (pedido.pago)\n  → fila notificacao   (pedido.*)\n  → fila analytics     (pedido.#)"},
 {t:"Competing consumers",x:"muitos workers, uma fila",oq:"Várias instâncias consomem da MESMA fila; o broker entrega cada mensagem a apenas uma delas.",ps:"Escalar o processamento horizontalmente: dobrar os workers aproximadamente dobra a vazão, até o gargalo seguinte.",cf:"É o mecanismo natural de balanceamento do broker. Com prefetch alto, uma instância acumula entregas e as outras ficam ociosas — prefetch baixo distribui melhor. <b>Erro comum:</b> esperar ordem global com vários consumidores concorrentes.",ex:"# 4 réplicas do worker, 1 fila\n# cada mensagem vai para UMA réplica\nkubectl scale deploy worker --replicas=4\n# prefetch=1 → distribuição mais justa"},
 {t:"Request/reply",x:"pergunta e resposta pela fila",oq:"O produtor publica uma requisição com reply-to e correlation-id; o consumidor responde numa fila de retorno e o solicitante correlaciona.",ps:"Obter resposta sem acoplar por HTTP, quando o processamento é longo ou o destino é instável.",cf:"reply-to diz onde responder; correlation-id casa a resposta com quem perguntou. Use fila exclusiva por solicitante ou a direct reply-to do RabbitMQ. <b>Erro comum:</b> transformar o sistema inteiro em RPC sobre fila — você ganhou complexidade e perdeu o desacoplamento.",ex:"props.setReplyTo(\"amq.rabbitmq.reply-to\");\nprops.setCorrelationId(id);\n// consumidor responde para reply-to\n// solicitante casa pelo correlationId"},
 {t:"Transactional Outbox",x:"o padrão que salva a consistência",oq:"Em vez de publicar direto no broker, grave o evento numa tabela outbox na MESMA transação do dado; um processo separado lê a tabela e publica.",ps:"Eliminar a janela em que o banco commitou e a publicação falhou — ou o inverso. É o padrão mais importante de toda esta trilha.",cf:"Uma transação local cobre negócio e intenção de publicar; o relay publica com at-least-once e marca como enviado. O consumidor precisa ser idempotente, porque o relay pode publicar duas vezes. <b>Erro comum:</b> publicar dentro do @Transactional achando que isso é atômico — não é: são dois sistemas.",ex:"@Transactional\nvoid pagar(Pedido p){\n  pedidoRepo.save(p);\n  outboxRepo.save(new Outbox(\"pedido.pago\", json(p)));\n}\n// relay separado lê outbox → publica → marca enviado"},
 {t:"Inbox e deduplicação",x:"o outbox do lado do consumidor",oq:"O consumidor grava o id do evento numa tabela inbox na mesma transação do efeito; se o id já existe, ignora a mensagem.",ps:"Transformar entrega at-least-once em efeito exatamente-uma-vez, que é a única forma prática de 'exactly-once'.",cf:"UNIQUE(evento_id) faz o banco recusar a segunda gravação. Chave e efeito precisam estar na mesma transação, senão você registra sem fazer ou faz sem registrar. Expire linhas antigas por TTL para a tabela não crescer para sempre. <b>Erro comum:</b> deduplicar em cache volátil — se o cache reinicia, o efeito duplica.",ex:"@Transactional\nvoid consumir(Evento e){\n  if(!inbox.registrarSeNovo(e.id())) return;\n  estoque.baixar(e.itens());\n}"},
 {t:"Saga por coreografia",x:"transação distribuída sem 2PC",oq:"Um processo de negócio que atravessa serviços vira uma sequência de eventos, e cada passo que falha dispara uma compensação — não um rollback.",ps:"Manter consistência entre serviços sem transação distribuída, que trava participantes e falha de formas piores.",cf:"Cada serviço reage a um evento e publica o próximo. Não há coordenador; o fluxo emerge das assinaturas. Compensar não é desfazer: é registrar um novo fato ('pagamento estornado'). <b>Erro comum:</b> coreografia com mais de 4 ou 5 passos — ninguém consegue mais desenhar o fluxo; aí use orquestração.",ex:"pedido.criado  → reserva estoque → estoque.reservado\nestoque.reservado → cobra        → pagamento.recusado\npagamento.recusado → COMPENSA: libera estoque\n                    → pedido.cancelado"},
 {t:"Claim check",x:"mensagem magra, payload gordo",oq:"Em vez de trafegar o arquivo ou o objeto grande na mensagem, grave-o num storage e envie apenas a referência.",ps:"Manter a fila rápida e barata. Mensagens grandes enchem a memória do broker, degradam a vazão e estouram limites de tamanho.",cf:"Publique {id, url, checksum}; o consumidor busca o conteúdo. Combine com TTL no storage para não acumular órfãos. <b>Erro comum:</b> mandar o objeto de domínio inteiro serializado, o que também acopla o consumidor ao seu esquema interno.",ex:"// ruim: 4 MB de PDF na mensagem\n// bom:\n{\"notaId\":\"NF-8891\",\n \"url\":\"s3://notas/2026/09/NF-8891.pdf\",\n \"sha256\":\"a3f9...\"}"}
]},
{g:"10",n:"RabbitMQ em produção",s:"o que muda quando não é mais o seu laptop",c:"var(--java)",cs:"var(--java-soft)",items:[
 {t:"Cluster e vhost",x:"um broker, muitos inquilinos",oq:"Um cluster RabbitMQ é um conjunto de nós que compartilham definições de usuários, vhosts e permissões. O vhost é o namespace lógico dentro dele.",ps:"Isolar aplicações e ambientes no mesmo broker, sem que uma enxergue ou colida com a topologia da outra.",cf:"Metadados são replicados a todos os nós; o conteúdo das filas não é, salvo em quorum queues ou streams. Um vhost por aplicação ou por ambiente é a regra prática. <b>Erro comum:</b> usar o vhost padrão '/' para tudo, o que faz nomes de fila colidirem entre times.",ex:"rabbitmqctl add_vhost orderflow-prod\nrabbitmqctl set_permissions -p orderflow-prod app \\\n  \"^orderflow\\.\" \"^orderflow\\.\" \"^orderflow\\.\""},
 {t:"Quorum queues",x:"a fila replicada padrão hoje",oq:"Fila replicada por consenso Raft entre nós do cluster, que substituiu as antigas classic mirrored queues.",ps:"Sobreviver à queda de um nó sem perder mensagens confirmadas. É o tipo recomendado para tudo que importa.",cf:"Escreve num líder e replica para os seguidores; a mensagem só é confirmada depois da maioria. Precisa de número ímpar de réplicas (3 ou 5). Custa mais I/O e latência que uma fila clássica — é o preço da garantia. <b>Erro comum:</b> quorum queue com 2 réplicas, que não forma maioria e não tolera falha nenhuma.",ex:"channel.queueDeclare(\"pedidos\", true, false, false,\n  Map.of(\"x-queue-type\",\"quorum\"));\n# ou por policy no cluster inteiro"},
 {t:"Streams",x:"quando a fila precisa virar log",oq:"Tipo de fila em que as mensagens ficam num log append-only, podem ser relidas do começo e vários consumidores leem a mesma sequência de forma independente.",ps:"Ter comportamento de Kafka dentro do RabbitMQ: reprocessar histórico, ter vários leitores independentes e reter por tempo ou tamanho.",cf:"O consumidor guarda um offset e pode voltar. Retenção é por política, não por ack. Não substitui fila de trabalho: para distribuir tarefas entre workers, quorum queue continua sendo a escolha. <b>Erro comum:</b> escolher stream por moda e depois precisar de ack individual e DLQ, que o modelo de log não oferece do mesmo jeito.",ex:"channel.queueDeclare(\"eventos\", true, false, false,\n  Map.of(\"x-queue-type\",\"stream\",\n         \"x-max-age\",\"7D\"));"},
 {t:"Capacidade e flow control",x:"quando o broker aplica o freio",oq:"Quando memória ou disco passam do limite configurado, o RabbitMQ bloqueia os publishers em vez de estourar. Isso se chama flow control.",ps:"Impedir que um produtor rápido derrube o broker inteiro e, com ele, todos os consumidores.",cf:"O broker é um buffer, não um banco de dados: fila que só cresce é sintoma de consumidor lento ou parado. Monitore profundidade, taxa de entrada e saída juntas. <b>Erro comum:</b> tratar publisher travado como bug de rede — na maioria das vezes é flow control avisando que a fila não está sendo drenada.",ex:"rabbitmqctl status | grep -A3 memory\nrabbitmq-diagnostics check_running\n# alarme: fila crescendo há 15 min + consumers=0"},
 {t:"Lazy, TTL e limites de fila",x:"defesa contra a fila infinita",oq:"Políticas que limitam o que uma fila pode acumular: comprimento máximo, TTL por mensagem e comportamento ao estourar (descartar ou mandar para a DLQ).",ps:"Garantir que um consumidor parado no fim de semana não derrube o broker na segunda-feira.",cf:"x-max-length e x-message-ttl são o cinto de segurança; combine com x-overflow=reject-publish-dlx para não perder em silêncio. <b>Erro comum:</b> não definir limite nenhum e descobrir o problema quando o disco enche — o que derruba todas as filas, não só a culpada.",ex:"Map.of(\"x-max-length\", 100000,\n       \"x-message-ttl\", 86400000,\n       \"x-overflow\", \"reject-publish-dlx\",\n       \"x-dead-letter-exchange\", \"dlx\")"},
 {t:"Segurança: TLS, usuários e permissões",x:"quem pode publicar o quê",oq:"TLS protege o transporte; usuário, vhost e permissões por padrão de nome controlam quem declara, publica e lê o quê.",ps:"Evitar que uma aplicação comprometida leia a fila de outra ou apague topologia alheia.",cf:"Permissão no RabbitMQ é uma regex para configure, write e read. Um usuário por aplicação, com regex restrita ao prefixo dela. <b>Erro comum:</b> todas as aplicações usando o usuário guest ou um admin único — o que torna o isolamento por vhost decorativo.",ex:"rabbitmqctl set_permissions -p prod app-pedidos \\\n  \"^pedidos\\.\" \"^pedidos\\.\" \"^pedidos\\.\"\n# configure | write | read"},
 {t:"Shovel e Federation",x:"ligar brokers",oq:"Plugins que movem mensagens entre brokers: o Shovel puxa de uma fila e publica em outro broker; a Federation liga exchanges ou filas entre clusters.",ps:"Migrar de broker sem parar o sistema, integrar ambientes ou levar eventos entre regiões.",cf:"Shovel é ponto a ponto e ótimo para migração; Federation é contínua e boa para topologia distribuída. Os dois preservam o desacoplamento — a aplicação não sabe que existe outro broker. <b>Erro comum:</b> montar Federation entre regiões sem pensar em latência e custo de tráfego, e depois culpar a fila pela lentidão.",ex:"# migração sem downtime:\n# 1. shovel do broker antigo → novo\n# 2. aponta consumidores para o novo\n# 3. aponta produtores para o novo\n# 4. remove o shovel"}
]},
{g:"11",n:"Kafka e o outro paradigma",s:"fila x log — dois modelos, dois problemas diferentes",c:"var(--cyan)",cs:"var(--arc-soft)",items:[
 {t:"Fila x log de eventos",x:"a diferença que decide tudo",oq:"Na fila, a mensagem é entregue e some depois do ack. No log, a mensagem é anexada e permanece; o consumidor guarda a posição de leitura.",ps:"Escolher a ferramenta certa: fila para distribuir trabalho, log para difundir e reprocessar histórico.",cf:"RabbitMQ é primariamente uma fila com roteamento sofisticado; Kafka é um log particionado com retenção. A pergunta que separa os dois: 'eu preciso reler o passado?'. Se sim, log. Se o objetivo é só executar tarefa uma vez, fila. <b>Erro comum:</b> escolher Kafka por escala e descobrir que o problema real era roteamento — onde o RabbitMQ é muito melhor.",ex:"# fila:  mensagem processada → some\n# log:   mensagem processada → continua lá\n#        offset avança; dá para voltar"},
 {t:"Tópico, partição e chave",x:"como o Kafka paraleliza",oq:"O tópico é dividido em partições; a chave da mensagem determina a partição, e a ordem é garantida apenas dentro de uma partição.",ps:"Escalar e ao mesmo tempo preservar ordem por entidade — todos os eventos do pedido 42 na mesma partição, logo em ordem.",cf:"Número de partições é o teto de paralelismo do consumer group. Aumentar partições depois muda o mapeamento de chaves e quebra a ordem histórica. <b>Erro comum:</b> chave nula, que distribui em rodízio e destrói qualquer garantia de ordem.",ex:"producer.send(new ProducerRecord<>(\n  \"pedidos\", pedido.id(), evento));\n// mesma chave → mesma partição → ordem"},
 {t:"Consumer group e offset",x:"quem leu até onde",oq:"Consumidores do mesmo grupo dividem as partições entre si; cada grupo tem o próprio offset e lê o tópico inteiro de forma independente.",ps:"Ter competing consumers e pub/sub ao mesmo tempo: dentro do grupo divide, entre grupos duplica.",cf:"Commit do offset é o equivalente ao ack — e, como ele, deve vir depois do efeito. Consumidores acima do número de partições ficam ociosos. <b>Erro comum:</b> commit automático, que confirma antes de processar e perde mensagem quando o worker cai.",ex:"props.put(\"enable.auto.commit\",\"false\");\n// processa → grava → consumer.commitSync()\nkafka-consumer-groups --describe --group faturamento"},
 {t:"Quando escolher qual",x:"o critério honesto",oq:"RabbitMQ ganha em roteamento complexo, entrega por mensagem, prioridade, TTL e DLQ nativos. Kafka ganha em vazão muito alta, retenção longa e reprocessamento.",ps:"Decidir com critério em vez de por popularidade — e saber que a maioria dos sistemas de porte médio é melhor servida pelo RabbitMQ.",cf:"Pergunte: preciso reler? preciso de ordem por entidade em escala? o volume é de centenas de milhares por segundo? Se as três respostas forem não, RabbitMQ é mais simples de operar e resolve. <b>Erro comum:</b> adotar Kafka pelo currículo e herdar Zookeeper/KRaft, rebalanceamento e um modelo mental que o time não domina.",ex:"# RabbitMQ: rotear pedido.pago para 3 destinos\n#           com prioridade, TTL e DLQ\n# Kafka:    guardar 30 dias de cliques e\n#           reprocessar quando o modelo mudar"},
 {t:"Os dois juntos",x:"não é ou um ou outro",oq:"É comum e saudável ter RabbitMQ para trabalho transacional e Kafka para o fluxo analítico ou de integração de dados.",ps:"Usar cada um onde ele é bom, em vez de forçar um a fazer o papel do outro.",cf:"Padrão frequente: o serviço publica no RabbitMQ para os consumidores de negócio e um conector espelha os eventos para o Kafka, que alimenta data lake e times de dados. <b>Erro comum:</b> duplicar a lógica de publicação em dois lugares — prefira uma origem só, com uma ponte.",ex:"pedido.pago → RabbitMQ → faturamento, notificação\n            ↘ ponte  → Kafka → analytics, data lake"}
]},
{g:"12",n:"Brokers gerenciados",s:"o mesmo conceito, cinco vocabulários",c:"var(--gold)",cs:"var(--gold-s)",items:[
 {t:"Fila gerenciada",x:"quando você não quer operar broker",oq:"Serviço de fila operado pelo provedor: sem nó para atualizar, sem disco para monitorar, cobrado por requisição.",ps:"Ter fila confiável em minutos, sem herdar a operação de um cluster. É a escolha padrão para quem começa na nuvem.",cf:"O modelo costuma ser mais simples que AMQP: fila, visibility timeout, DLQ e pouco mais. Você perde roteamento sofisticado e ganha zero operação. <b>Erro comum:</b> subir RabbitMQ numa VM 'porque já conheço' e assumir patch, backup e HA sem necessidade.",map:[["AWS","SQS (standard e FIFO)"],["Azure","Service Bus Queue / Storage Queue"],["GCP","Pub/Sub subscription"],["Oracle","OCI Queue"],["Aberto","RabbitMQ · ActiveMQ"]]},
 {t:"Tópico gerenciado",x:"difusão sem operar nada",oq:"Serviço de publicação e assinatura: o produtor publica um fato e cada assinante recebe a própria cópia.",ps:"Implementar pub/sub sem topologia própria — e ligar tópico a fila para cada consumidor ter o seu buffer.",cf:"O padrão recomendado em qualquer provedor é tópico na frente e uma fila por consumidor atrás, exatamente como exchange + queue no RabbitMQ. <b>Erro comum:</b> assinar o tópico direto com um endpoint HTTP: se o consumidor cai, a notificação se perde.",map:[["AWS","SNS → SQS por consumidor"],["Azure","Service Bus Topic + Subscriptions"],["GCP","Pub/Sub topic + subscriptions"],["Oracle","OCI Notifications"],["Aberto","RabbitMQ fanout/topic exchange"]]},
 {t:"Log de eventos gerenciado",x:"Kafka sem operar Kafka",oq:"Serviço de log particionado com retenção, compatível ou equivalente ao Kafka.",ps:"Ter reprocessamento e alta vazão sem operar brokers, Zookeeper ou KRaft.",cf:"Vários deles falam o protocolo Kafka, o que permite usar o cliente padrão e trocar só a configuração de conexão. <b>Erro comum:</b> assumir paridade total de recursos — transações e compactação de log variam entre serviços.",map:[["AWS","Kinesis Data Streams · MSK"],["Azure","Event Hubs (endpoint Kafka)"],["GCP","Pub/Sub Lite · Managed Kafka"],["Oracle","OCI Streaming (Kafka API)"],["Aberto","Apache Kafka · Redpanda"]]},
 {t:"RabbitMQ gerenciado",x:"o mesmo broker, sem a operação",oq:"O próprio RabbitMQ operado pelo provedor, com a mesma API AMQP e o mesmo painel.",ps:"Manter toda a topologia e o código existentes e entregar patch, cluster e backup ao provedor.",cf:"É a rota de migração mais suave: a aplicação não muda uma linha, só a string de conexão. Confirme a versão oferecida e quais plugins estão habilitados antes de migrar. <b>Erro comum:</b> depender de um plugin que o serviço gerenciado não habilita.",map:[["AWS","Amazon MQ for RabbitMQ"],["Azure","via marketplace / VM"],["GCP","via marketplace / VM"],["Oracle","via marketplace / VM"],["Aberto","CloudAMQP (multi-nuvem)"]]},
 {t:"Roteador de eventos",x:"a camada acima da fila",oq:"Serviço que recebe eventos de muitas origens e os roteia por regra de conteúdo para muitos destinos, sem código no meio.",ps:"Integrar sistemas e SaaS sem escrever um serviço de cola para cada par origem-destino.",cf:"É o exchange topic elevado a serviço da nuvem, com filtro por conteúdo do evento e não só por routing key. <b>Erro comum:</b> colocar regra de negócio nas regras de roteamento — vira lógica invisível que ninguém testa.",map:[["AWS","EventBridge"],["Azure","Event Grid"],["GCP","Eventarc"],["Oracle","OCI Events"],["Aberto","RabbitMQ topic + headers"]]}
]},
{g:"13",n:"Como aprender de verdade",s:"vídeo dá o mapa, doc dá a precisão, lab fixa",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Ciclo de aprendizado",x:"não pare no vídeo",oq:"Ler o nó → ver um vídeo curto → confirmar na documentação oficial → subir o broker em Docker e reproduzir → escrever uma nota atômica → usar o modo teste.",ps:"Mensageria é das áreas em que ler mais engana: tudo parece óbvio até você matar o consumidor no meio do processamento e ver o que acontece.",cf:"Para cada nó: veja, confirme em rabbitmq.com, reproduza no seu broker local com o painel aberto, escreva com suas palavras. O que você errar no modo teste volta para o passo 1 — só aquele trecho.",ex:"docker run -d --name rabbit -p 5672:5672 \\\n  -p 15672:15672 rabbitmq:4-management\n# painel em http://localhost:15672 (guest/guest)"},
 {t:"Canais & cursos PT-BR",x:"onde ver",oq:"Recursos reais em português para mensageria, RabbitMQ e sistemas distribuídos.",ps:"Construir o mapa mental no seu idioma antes de encarar a documentação oficial, que é excelente mas é em inglês.",cf:"Full Cycle (Wesley Willians) cobre mensageria, RabbitMQ e Kafka dentro de arquitetura; Fabrício Veronez traz o lado de operação e containers; LINUXtips ajuda na base de Docker e Kubernetes para subir o broker. Depois: rabbitmq.com/docs e docs.spring.io/spring-amqp — a documentação do RabbitMQ é das melhores que existem, com tutoriais oficiais em Java.",ex:"# arquitetura + mensageria: Full Cycle\n# operação e containers: Fabricio Veronez / LINUXtips\n# referência: rabbitmq.com/tutorials (tem Java)\n#            docs.spring.io/spring-amqp"},
 {t:"Como pesquisar",x:"achar a resposta",oq:"Busque pelo nome exato do mecanismo — publisher confirms, dead letter exchange, prefetch — e restrinja a rabbitmq.com.",ps:"Metade da competência aqui é saber o nome da coisa. Com o nome, a documentação responde em minutos.",cf:"Use o painel de gerenciamento antes de pesquisar: profundidade da fila, unacked, consumers e taxa de entrada e saída já dizem qual é o problema na maioria das vezes. Para erro, cole a mensagem exata entre aspas.",ex:"site:rabbitmq.com \"dead letter\"\nrabbitmqctl list_queues name messages consumers\nrabbitmqctl list_consumers\n# unacked alto = consumidor lento ou travado"},
 {t:"Praticar na sua stack",x:"mini-projetos",oq:"Seis exercícios que crescem em dificuldade e terminam com o OrderFlow confiável rodando.",ps:"Projeto real fixa mais que dez tutoriais — e cada etapa vira uma nota no vault.",cf:"(1) Publique e consuma com o cliente Java puro; (2) refaça com Spring AMQP; (3) monte topic exchange com três filas; (4) adicione confirms, ack manual e prefetch; (5) adicione retry com backoff, DLX e parking lot; (6) implemente outbox + inbox e prove a idempotência matando o worker no meio.",ex:"# roteiro de prática:\n# 1. cliente Java puro (amqp-client)\n# 2. Spring AMQP (RabbitTemplate + @RabbitListener)\n# 3. topic exchange + 3 filas\n# 4. confirms + ack manual + prefetch\n# 5. retry/backoff + DLX + parking lot\n# 6. outbox + inbox (mate o worker no meio!)",star:true}
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
var KEYT="mensageria-rabbitmq-completo-CL-trilha-v1";
var doneT={};try{doneT=JSON.parse(localStorage.getItem(KEYT)||"{}");}catch(e){}
var track=document.getElementById("track"),lg=document.getElementById("lg");
navHead("A trilha · 13 grupos");
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
navHead("O conteúdo · 11 partes");
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
var KEYM="mensageria-rabbitmq-completo-CL-conteudo-v1";
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
 var RK="mensageria-rabbitmq-completo-CL-rev-v1";
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

// Outbox Simulator Controller
(function(){
  var lab=document.getElementById("outboxLab");
  if(!lab)return;
  var nodes=[
    document.getElementById("on1"),
    document.getElementById("on2"),
    document.getElementById("on3"),
    document.getElementById("on4"),
    document.getElementById("on5"),
    document.getElementById("on6")
  ];
  var hud=document.getElementById("outboxHud");
  var btn1=document.getElementById("btnOutboxDw1");
  var btn2=document.getElementById("btnOutboxDw2");
  var btn3=document.getElementById("btnOutboxOk");
  var btnReset=document.getElementById("btnOutboxReset");
  var timer=null;

  function clearState(){
    if(timer)clearTimeout(timer);
    nodes.forEach(function(n){
      if(!n)return;
      n.className="ol-node";
    });
  }

  function setHud(lines){
    if(!hud)return;
    hud.innerHTML=lines.map(function(l){
      return '<div class="oh-l '+(l.cls||"oh-info")+'">'+l.txt+'</div>';
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
      {node:0, logs:[{cls:"oh-info",txt:"[Requisicao] POST /pagar: pedido #1042 pago com sucesso."}], delay:700},
      {node:1, status:"ok", logs:[{cls:"oh-ok",txt:"[PostgreSQL] UPDATE pedidos SET status='PAGO' WHERE id=1042 -> COMMIT efetuado!"}], delay:800},
      {node:2, status:"err", logs:[{cls:"oh-err",txt:"[Tabela Outbox] NÃO EXISTE (abordagem dual-write ingênua direta ao broker)."}], delay:600},
      {node:3, status:"err", logs:[{cls:"oh-err",txt:"[Relay] Inexistente."}], delay:500},
      {node:4, status:"err", logs:[{cls:"oh-err",txt:"💥 [Falha de Rede / Crash] Conexão com RabbitMQ caiu ou app sofreu crash antes de rabbitTemplate.convertAndSend()!"}], delay:900},
      {node:5, status:"err", logs:[{cls:"oh-err",txt:"☠️ [INCONSISTÊNCIA FANTASMA] Pedido foi pago e debitado no banco, mas a expedição/faturamento NUNCA recebeu o evento. Cliente pagou e não recebe o produto!"}], delay:500}
    ]);
  });

  if(btn2) btn2.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"oh-info",txt:"[Requisicao] POST /pagar tentando publicar no RabbitMQ antes do commit do banco..."}], delay:700},
      {node:4, status:"ok", logs:[{cls:"oh-warn",txt:"[RabbitMQ] Mensagem 'pedido.pago' publicada no exchange e consumida pela Logística!"}], delay:800},
      {node:1, status:"err", logs:[{cls:"oh-err",txt:"💥 [PostgreSQL Rollback] Falha de constraint ou timeout no commit do banco de dados! Transação abortada."}], delay:900},
      {node:2, status:"err", logs:[{cls:"oh-err",txt:"[Tabela Outbox] Não utilizada."}], delay:500},
      {node:3, status:"err", logs:[{cls:"oh-err",txt:"[Relay] Não utilizado."}], delay:500},
      {node:5, status:"err", logs:[{cls:"oh-err",txt:"☠️ [EVENTO FANTASMA] A logística recebeu o evento e despachou mercadoria para um pedido que NUNCA foi efetivado no banco de dados! Prejuízo financeiro direto."}], delay:500}
    ]);
  });

  if(btn3) btn3.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"oh-info",txt:"[Requisicao] POST /pagar: abrindo @Transactional atômica no PostgreSQL..."}], delay:700},
      {node:1, status:"ok", logs:[{cls:"oh-ok",txt:"[PostgreSQL] UPDATE pedidos SET status='PAGO' WHERE id=1042."}], delay:750},
      {node:2, status:"ok", logs:[{cls:"oh-ok",txt:"[Tabela Outbox] INSERT INTO outbox (id, event, payload, published) VALUES (...); -> COMMIT atômico: ou gravam os dois juntos, ou nenhum!"}], delay:850},
      {node:3, status:"ok", logs:[{cls:"oh-info",txt:"[Relay Poller / Debezium CDC] Processo desacoplado lê registros com published=false na tabela outbox."}], delay:800},
      {node:4, status:"ok", logs:[{cls:"oh-ok",txt:"[RabbitMQ] Mensagem publicada no exchange 'pedidos.v1'. Broker devolve Publisher Confirm (ACK)."}], delay:800},
      {node:5, status:"ok", logs:[{cls:"oh-ok",txt:"🛡️ [CONSISTÊNCIA GARANTIDA] Relay marca published=true. Mesmo que a rede caia, o evento permanece seguro na outbox e é reenviado. 0 eventos perdidos!"}], delay:500}
    ]);
  });

  if(btnReset) btnReset.addEventListener("click",function(){
    clearState();
    setHud([{cls:"oh-info",txt:"[Simulador Pronto] Selecione um cenário para reproduzir a concorrência e consistência..."}]);
  });
})();


/* ---------- bloco 4 de 4 ---------- */

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

/* Extraido de trilhas/spring.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 4 ---------- */

function W(h,inner){return '<figure class="dg"><svg viewBox="0 0 340 '+h+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg></figure>';}
var DG={
 ioc:W(100,'<rect x="6" y="34" width="70" height="34" rx="7" class="bx"/><text x="41" y="49" class="bt">metadados</text><text x="41" y="61" class="bs">anotações</text><path d="M76,51 L94,51" class="ln"/><path d="M94,51 L88,48 L88,54 Z" class="hd"/><rect x="96" y="34" width="82" height="34" rx="7" class="sf"/><text x="137" y="49" class="bt">definitions</text><text x="137" y="61" class="bs">as receitas</text><path d="M178,51 L196,51" class="ln"/><path d="M196,51 L190,48 L190,54 Z" class="hd"/><rect x="198" y="26" width="66" height="50" rx="8" class="sf"/><text x="231" y="44" class="bt">refresh()</text><text x="231" y="57" class="bs">instancia</text><text x="231" y="68" class="bs">+ pós-proc</text><path d="M264,51 L282,51" class="ln"/><path d="M282,51 L276,48 L276,54 Z" class="hd"/><rect x="284" y="34" width="50" height="34" rx="7" class="sf"/><text x="309" y="55" class="bt">beans</text><text x="170" y="92" class="bs">duas fases: primeiro o catálogo, depois os objetos</text>'),
 cond:W(104,'<rect x="6" y="38" width="72" height="30" rx="7" class="bx"/><text x="42" y="52" class="bs">OnClass</text><text x="42" y="63" class="bs">tem a lib?</text><path d="M78,53 L94,53" class="ln"/><path d="M94,53 L88,50 L88,56 Z" class="hd"/><rect x="96" y="38" width="80" height="30" rx="7" class="bx"/><text x="136" y="52" class="bs">OnProperty</text><text x="136" y="63" class="bs">está ligado?</text><path d="M176,53 L192,53" class="ln"/><path d="M192,53 L186,50 L186,56 Z" class="hd"/><rect x="194" y="38" width="92" height="30" rx="7" class="bx"/><text x="240" y="52" class="bs">OnMissingBean</text><text x="240" y="63" class="bs">você declarou?</text><path d="M286,53 L306,53" class="ln"/><path d="M306,53 L300,50 L300,56 Z" class="hd"/><rect x="308" y="38" width="28" height="30" rx="7" class="sf"/><text x="322" y="57" class="bs">✓</text><path d="M240,68 L240,86" class="ln dash"/><path d="M240,86 L237,80 L243,80 Z" class="hd"/><text x="290" y="92" class="bs">sim → recua</text><text x="120" y="92" class="bs">qualquer não derruba a candidata</text>'),
 proxy:W(96,'<rect x="6" y="34" width="62" height="30" rx="7" class="bx"/><text x="37" y="53" class="bs">chamador</text><path d="M68,49 L86,49" class="ln"/><path d="M86,49 L80,46 L80,52 Z" class="hd"/><rect x="88" y="24" width="90" height="50" rx="9" class="sf"/><text x="133" y="42" class="bt">PROXY</text><text x="133" y="56" class="bs">$$SpringCGLIB</text><text x="133" y="68" class="bs">é o que injetam</text><path d="M178,49 L196,49" class="ln"/><path d="M196,49 L190,46 L190,52 Z" class="hd"/><rect x="198" y="30" width="66" height="38" rx="8" class="sf"/><text x="231" y="46" class="bs">advice</text><text x="231" y="58" class="bs">antes/depois</text><path d="M264,49 L282,49" class="ln"/><path d="M282,49 L276,46 L276,52 Z" class="hd"/><rect x="284" y="34" width="50" height="30" rx="7" class="bx"/><text x="309" y="53" class="bs">target</text><text x="170" y="88" class="bs">a anotação só existe no meio do caminho</text>'),
 self:W(92,'<rect x="70" y="18" width="200" height="60" rx="10" class="bx"/><text x="170" y="14" class="bs">o SEU objeto (target)</text><rect x="82" y="30" width="80" height="24" rx="6" class="sf"/><text x="122" y="46" class="bs">outer()</text><rect x="178" y="30" width="80" height="24" rx="6" class="sf"/><text x="218" y="46" class="bs">inner() @Tx</text><path d="M162,42 L176,42" class="ln"/><path d="M176,42 L170,39 L170,45 Z" class="hd"/><text x="170" y="68" class="bs" style="fill:var(--rose)">this.inner() — não sai do objeto</text><rect x="6" y="34" width="52" height="26" rx="6" class="sf"/><text x="32" y="51" class="bs">proxy</text><path d="M58,47 L68,44" class="ln dash"/><text x="30" y="72" class="bs">ignorado</text><text x="170" y="88" class="bs">só chamada que ENTRA pelo proxy é interceptada</text>'),
 disp:W(116,'<rect x="6" y="46" width="52" height="30" rx="7" class="bx"/><text x="32" y="65" class="bs">request</text><path d="M58,61 L74,61" class="ln"/><path d="M74,61 L68,58 L68,64 Z" class="hd"/><rect x="76" y="46" width="62" height="30" rx="7" class="sf"/><text x="107" y="61" class="bs">filters</text><text x="107" y="72" class="bs">segurança</text><path d="M138,61 L154,61" class="ln"/><path d="M154,61 L148,58 L148,64 Z" class="hd"/><rect x="156" y="26" width="110" height="70" rx="9" class="sf"/><text x="211" y="42" class="bt">Dispatcher</text><rect x="163" y="48" width="46" height="18" rx="4" class="bx"/><text x="186" y="61" class="bs">mapping</text><rect x="213" y="48" width="46" height="18" rx="4" class="bx"/><text x="236" y="61" class="bs">adapter</text><rect x="163" y="70" width="46" height="18" rx="4" class="bx"/><text x="186" y="83" class="bs">resolver</text><rect x="213" y="70" width="46" height="18" rx="4" class="bx"/><text x="236" y="83" class="bs">converter</text><path d="M266,61 L282,61" class="ln"/><path d="M282,61 L276,58 L276,64 Z" class="hd"/><rect x="284" y="46" width="50" height="30" rx="7" class="bx"/><text x="309" y="65" class="bs">controller</text><text x="170" y="108" class="bs">o controller é o penúltimo passo, não o primeiro</text>'),
 tx:W(120,'<rect x="6" y="46" width="66" height="32" rx="7" class="sf"/><text x="39" y="62" class="bs">proxy @Tx</text><text x="39" y="73" class="bs">abre/commita</text><rect x="88" y="12" width="150" height="26" rx="7" class="sf"/><text x="163" y="29" class="bs">Connection presa à thread</text><path d="M163,38 L163,46" class="ln dash"/><path d="M72,62 L86,62" class="ln"/><path d="M86,62 L80,59 L80,65 Z" class="hd"/><rect x="88" y="46" width="150" height="32" rx="7" class="bx"/><text x="163" y="66" class="bs">o seu método de serviço</text><path d="M238,54 L258,42" class="ln"/><path d="M238,70 L258,84" class="ln"/><rect x="260" y="28" width="74" height="26" rx="6" class="sf"/><text x="297" y="45" class="bs">PedidoDao</text><rect x="260" y="72" width="74" height="26" rx="6" class="sf"/><text x="297" y="89" class="bs">EstoqueDao</text><text x="170" y="112" class="bs">os dois DAOs acham a MESMA conexão sozinhos</text>'),
 pool:W(96,'<rect x="6" y="34" width="60" height="32" rx="7" class="bx"/><text x="36" y="54" class="bs">seu código</text><path d="M66,50 L82,50" class="ln"/><path d="M82,50 L76,47 L76,53 Z" class="hd"/><rect x="84" y="34" width="66" height="32" rx="7" class="sf"/><text x="117" y="54" class="bs">DataSource</text><path d="M150,50 L166,50" class="ln"/><path d="M166,50 L160,47 L160,53 Z" class="hd"/><rect x="168" y="26" width="76" height="48" rx="8" class="sf"/><text x="206" y="44" class="bt">pool</text><text x="206" y="58" class="bs">N conexões</text><text x="206" y="69" class="bs">emprestadas</text><path d="M244,50 L262,50" class="ln"/><path d="M262,50 L256,47 L256,53 Z" class="hd"/><rect x="264" y="34" width="70" height="32" rx="7" class="bx"/><text x="299" y="54" class="bs">banco</text><text x="170" y="88" class="bs">close() devolve ao pool — não fecha o socket</text>'),
 lost:W(112,'<rect x="6" y="20" width="96" height="26" rx="6" class="bx"/><text x="54" y="37" class="bs">A lê saldo 100</text><rect x="6" y="66" width="96" height="26" rx="6" class="bx"/><text x="54" y="83" class="bs">B lê saldo 100</text><path d="M102,33 L134,44" class="ln"/><path d="M102,79 L134,68" class="ln"/><rect x="136" y="42" width="86" height="28" rx="7" class="sf"/><text x="179" y="60" class="bs">os dois somam</text><path d="M222,56 L250,56" class="ln"/><path d="M250,56 L244,53 L244,59 Z" class="hd"/><rect x="252" y="42" width="82" height="28" rx="7" class="bx" style="stroke:var(--rose)"/><text x="293" y="60" class="bs" style="fill:var(--rose)">um some</text><text x="170" y="104" class="bs">lost update: o padrão READ COMMITTED não impede</text>'),
 sec:W(112,'<rect x="6" y="42" width="46" height="30" rx="7" class="bx"/><text x="29" y="61" class="bs">request</text><path d="M52,57 L66,57" class="ln"/><path d="M66,57 L60,54 L60,60 Z" class="hd"/><rect x="68" y="30" width="164" height="54" rx="9" class="sf"/><text x="150" y="46" class="bt">SecurityFilterChain</text><rect x="76" y="54" width="48" height="22" rx="5" class="bx"/><text x="100" y="69" class="bs">extrai</text><rect x="128" y="54" width="48" height="22" rx="5" class="bx"/><text x="152" y="69" class="bs">autentica</text><rect x="180" y="54" width="46" height="22" rx="5" class="bx"/><text x="203" y="69" class="bs">autoriza</text><path d="M232,57 L248,57" class="ln"/><path d="M248,57 L242,54 L242,60 Z" class="hd"/><rect x="250" y="42" width="84" height="30" rx="7" class="sf"/><text x="292" y="61" class="bs">controller</text><text x="100" y="96" class="bs" style="fill:var(--rose)">401 aqui</text><text x="203" y="96" class="bs" style="fill:var(--rose)">403 aqui</text><text x="170" y="108" class="bs">tudo acontece antes do seu código</text>'),
 amqp:W(124,'<rect x="6" y="48" width="62" height="30" rx="7" class="sf"/><text x="37" y="63" class="bs">produtor</text><text x="37" y="74" class="bs">routing key</text><path d="M68,63 L86,63" class="ln"/><path d="M86,63 L80,60 L80,66 Z" class="hd"/><rect x="88" y="44" width="72" height="38" rx="8" class="sf"/><text x="124" y="60" class="bt">exchange</text><text x="124" y="73" class="bs">topic</text><path d="M160,52 L196,26" class="ln"/><path d="M160,63 L196,63" class="ln"/><path d="M160,74 L196,100" class="ln"/><rect x="198" y="14" width="76" height="24" rx="6" class="bx"/><text x="236" y="30" class="bs">fila A</text><rect x="198" y="51" width="76" height="24" rx="6" class="bx"/><text x="236" y="67" class="bs">fila B</text><rect x="198" y="88" width="76" height="24" rx="6" class="bx"/><text x="236" y="104" class="bs">fila C</text><path d="M274,26 L300,52" class="ln dash"/><path d="M274,63 L300,63" class="ln dash"/><path d="M274,100 L300,74" class="ln dash"/><rect x="302" y="48" width="34" height="30" rx="7" class="sf"/><text x="319" y="67" class="bs">cons</text><text x="170" y="120" class="bs">o produtor nunca fala com a fila — só com a exchange</text>'),
 ack:W(104,'<rect x="6" y="38" width="58" height="30" rx="7" class="sf"/><text x="35" y="57" class="bs">fila</text><path d="M64,53 L82,53" class="ln"/><path d="M82,53 L76,50 L76,56 Z" class="hd"/><rect x="84" y="38" width="76" height="30" rx="7" class="bx"/><text x="122" y="57" class="bs">consumidor</text><path d="M160,44 L192,26" class="ln"/><path d="M160,62 L192,80" class="ln dash"/><rect x="194" y="14" width="66" height="24" rx="6" class="sf"/><text x="227" y="30" class="bs">ack ✓</text><rect x="194" y="68" width="66" height="24" rx="6" class="bx"/><text x="227" y="84" class="bs">nack ✗</text><path d="M260,26 L286,26" class="ln"/><path d="M260,80 L286,80" class="ln"/><rect x="288" y="14" width="48" height="24" rx="6" class="bx"/><text x="312" y="30" class="bs">sai</text><rect x="288" y="68" width="48" height="24" rx="6" class="bx" style="stroke:var(--rose)"/><text x="312" y="84" class="bs" style="fill:var(--rose)">DLQ</text><text x="170" y="100" class="bs">sem limite de tentativas, a fila trava num laço</text>'),
 outbox:W(112,'<rect x="6" y="16" width="150" height="72" rx="10" class="bx"/><text x="81" y="32" class="bs">uma transação local</text><rect x="16" y="40" width="62" height="26" rx="6" class="sf"/><text x="47" y="57" class="bs">pedido</text><rect x="86" y="40" width="62" height="26" rx="6" class="sf"/><text x="117" y="57" class="bs">outbox</text><path d="M156,52 L178,52" class="ln"/><path d="M178,52 L172,49 L172,55 Z" class="hd"/><text x="167" y="44" class="bs">commit</text><rect x="180" y="38" width="62" height="28" rx="7" class="sf"/><text x="211" y="56" class="bs">relay</text><path d="M242,52 L262,52" class="ln"/><path d="M262,52 L256,49 L256,55 Z" class="hd"/><rect x="264" y="38" width="70" height="28" rx="7" class="sf"/><text x="299" y="56" class="bs">broker</text><text x="170" y="104" class="bs">pode publicar 2x — o consumidor idempotente resolve</text>'),
 res:W(100,'<rect x="6" y="36" width="66" height="30" rx="7" class="sf"/><text x="39" y="51" class="bs">timeout</text><text x="39" y="62" class="bs">quanto espero</text><path d="M72,51 L90,51" class="ln"/><path d="M90,51 L84,48 L84,54 Z" class="hd"/><rect x="92" y="36" width="76" height="30" rx="7" class="sf"/><text x="130" y="51" class="bs">retry</text><text x="130" y="62" class="bs">backoff+jitter</text><path d="M168,51 L186,51" class="ln"/><path d="M186,51 L180,48 L180,54 Z" class="hd"/><rect x="188" y="28" width="86" height="46" rx="8" class="bx"/><text x="231" y="45" class="bs">breaker</text><text x="231" y="58" class="bs">fechado→aberto</text><text x="231" y="69" class="bs">→meio-aberto</text><path d="M274,51 L292,51" class="ln"/><path d="M292,51 L286,48 L286,54 Z" class="hd"/><rect x="294" y="36" width="40" height="30" rx="7" class="sf"/><text x="314" y="55" class="bs">fallback</text><text x="170" y="92" class="bs">retry sem idempotência é bug com nome bonito</text>'),
 test:W(112,'<path d="M170,14 L246,50 L94,50 Z" class="sf"/><text x="170" y="42" class="bs">integração</text><rect x="72" y="52" width="196" height="24" rx="4" class="sf"/><text x="170" y="68" class="bs">slices (@WebMvcTest, @JdbcTest)</text><rect x="40" y="78" width="260" height="24" rx="4" class="sf"/><text x="170" y="94" class="bs">unidade, sem Spring — a maioria</text><text x="300" y="30" class="bs">poucos</text><text x="300" y="96" class="bs">muitos</text>'),
 probe:W(104,'<rect x="6" y="20" width="150" height="32" rx="8" class="sf"/><text x="81" y="36" class="bt">liveness</text><text x="81" y="47" class="bs">o processo está sadio?</text><rect x="6" y="62" width="150" height="32" rx="8" class="sf"/><text x="81" y="78" class="bt">readiness</text><text x="81" y="89" class="bs">posso receber tráfego?</text><path d="M156,36 L188,36" class="ln"/><path d="M188,36 L182,33 L182,39 Z" class="hd"/><path d="M156,78 L188,78" class="ln"/><path d="M188,78 L182,75 L182,81 Z" class="hd"/><rect x="190" y="22" width="144" height="28" rx="7" class="bx" style="stroke:var(--rose)"/><text x="262" y="40" class="bs" style="fill:var(--rose)">falhou → MATA e recria</text><rect x="190" y="64" width="144" height="28" rx="7" class="bx"/><text x="262" y="82" class="bs">falhou → sai do balanceador</text>'),
 shut:W(96,'<rect x="6" y="34" width="74" height="32" rx="7" class="sf"/><text x="43" y="49" class="bs">SIGTERM</text><text x="43" y="61" class="bs">chegou</text><path d="M80,50 L96,50" class="ln"/><path d="M96,50 L90,47 L90,53 Z" class="hd"/><rect x="98" y="34" width="80" height="32" rx="7" class="sf"/><text x="138" y="49" class="bs">para de aceitar</text><text x="138" y="61" class="bs">readiness cai</text><path d="M178,50 L194,50" class="ln"/><path d="M194,50 L188,47 L188,53 Z" class="hd"/><rect x="196" y="34" width="70" height="32" rx="7" class="sf"/><text x="231" y="49" class="bs">drena o que</text><text x="231" y="61" class="bs">está no ar</text><path d="M266,50 L282,50" class="ln"/><path d="M282,50 L276,47 L276,53 Z" class="hd"/><rect x="284" y="34" width="50" height="32" rx="7" class="bx"/><text x="309" y="53" class="bs">fecha</text><text x="170" y="88" class="bs">zero requisição perdida a cada deploy</text>'),
 jpa:W(112,'<rect x="6" y="40" width="80" height="34" rx="8" class="bx"/><text x="46" y="57" class="bs">seu objeto</text><text x="46" y="69" class="bs">entidade</text><path d="M86,57 L104,57" class="ln"/><path d="M104,57 L98,54 L98,60 Z" class="hd"/><rect x="106" y="26" width="112" height="62" rx="9" class="sf"/><text x="162" y="44" class="bt">persistence context</text><text x="162" y="58" class="bs">rastreia mudanças</text><text x="162" y="70" class="bs">decide o flush</text><path d="M218,57 L236,57" class="ln"/><path d="M236,57 L230,54 L230,60 Z" class="hd"/><rect x="238" y="40" width="96" height="34" rx="8" class="sf"/><text x="286" y="57" class="bs">SQL gerado</text><text x="286" y="69" class="bs">quando ELE quer</text><text x="170" y="104" class="bs">N+1 e lazy nascem exatamente aqui</text>')
};

var T=[
{g:"01",n:"Por que o Spring existe",s:"o problema antes da solução",c:"var(--teal)",cs:"var(--teal-soft)",items:[
 {t:"O problema do grafo de objetos",x:"quem cria e conecta",oq:"Toda aplicação real é um grafo de objetos: o serviço precisa do repositório, que precisa do DataSource, que precisa da configuração. Alguém tem que criar tudo isso na ordem certa e entregar pronto.",ps:"Tirar essa montagem de dentro da regra de negócio, para que a classe declare o que precisa em vez de sair buscando.",cf:"Sem container, o composition root faz isso à mão no main. Com container, você descreve os componentes e ele monta o grafo no startup.",ex:"// à mão — funciona, e é exatamente o que o Spring automatiza\nvar ds   = new HikariDataSource(cfg);\nvar repo = new JdbcPedidoRepo(ds);\nvar svc  = new CheckoutService(repo, Clock.systemUTC());",dg:"ioc",pr:"Monte um caso de uso com new no main, depois deixe o Spring montar o mesmo grafo e compare o que mudou na regra."},
 {t:"IoC e injeção de dependência",x:"inversão de controle",oq:"Inversão de controle é entregar a outro a decisão de quem constrói e conecta. Injeção de dependência é a forma concreta: a classe recebe o que precisa pelo construtor.",ps:"Trocar implementação sem tocar em quem usa, e testar a regra sem subir infraestrutura.",cf:"O container lê os construtores, resolve cada parâmetro por tipo e entrega o objeto pronto. Quem chama nunca sabe qual implementação chegou.",ex:"class CheckoutService {\n    private final PedidoRepo repo;\n    CheckoutService(PedidoRepo repo) { this.repo = repo; }  // recebe, não busca\n}",ar:"Chamar getBean dentro do domínio transforma IoC em Service Locator — volta ao problema que o Spring veio resolver."},
 {t:"De EJB ao container leve",x:"a origem, 2002",oq:"O Spring nasceu do livro de Rod Johnson que defendia aplicações Java sem EJB: um container que apenas monta objetos comuns, sem exigir servidor de aplicação.",ps:"Entender por que o framework tem a forma que tem — quase toda decisão dele é reação a uma dor do Java EE.",cf:"O container leve roda dentro de qualquer JVM, inclusive num teste JUnit. Foi isso que devolveu a possibilidade de testar sem infraestrutura.",ex:"// hoje isso é banal — em 2002 exigia um servidor de aplicação no ar\ntry (var ctx = new AnnotationConfigApplicationContext(AppConfig.class)) {\n    ctx.getBean(OrderService.class).place();\n}"},
 {t:"Os módulos do ecossistema",x:"o mapa das peças",oq:"Spring não é um produto só: Core (container), MVC/WebFlux (web), Data (persistência), Security, AMQP, Batch, Cloud. Todos usam o mesmo container por baixo.",ps:"Saber o que existe e não reinventar — e não importar módulo que você não vai usar.",cf:"Cada módulo registra beans no mesmo ApplicationContext e se pluga nos mesmos pontos de extensão do núcleo.",ex:"spring-boot-starter-web        # MVC + Tomcat + Jackson\nspring-boot-starter-jdbc       # DataSource + JdbcTemplate\nspring-boot-starter-security   # SecurityFilterChain\nspring-boot-starter-amqp       # RabbitMQ"},
 {t:"Framework, Boot e Cloud",x:"quem é quem",oq:"O Framework é o núcleo. O Boot é uma camada de opinião sobre ele: servidor embutido, defaults condicionais e configuração externalizada. O Cloud é outra camada, para sistemas distribuídos.",ps:"Não confundir o que é do container com o que é opinião do Boot — porque o que quebra costuma ser o segundo.",cf:"Boot não substitui nada: ele só registra configurações que o Framework já sabia aceitar, e recua quando você declara a sua.",ex:"// isto é Framework puro\n@Configuration @Bean\n// isto é opinião do Boot\n@SpringBootApplication  @ConditionalOnMissingBean"},
 {t:"O que estudar e em que ordem",x:"o caminho",oq:"A ordem que funciona: container → Boot → proxies e transações → web → dados → segurança → integração → teste e produção. Cada etapa explica a seguinte.",ps:"Evitar o erro clássico de começar por @RestController e nunca entender por que a anotação às vezes não funciona.",cf:"Os 13 grupos desta trilha seguem exatamente essa ordem, e cada um tem uma parte correspondente no conteúdo abaixo.",ex:"# terça-feira é dia de Spring\n# um grupo da trilha por semana, terminando com código commitado"}
]},
{g:"02",n:"O container IoC",s:"onde os objetos nascem",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"ApplicationContext e refresh()",x:"as duas fases",oq:"O ApplicationContext é o container. Todo o trabalho dele acontece dentro de um método: refresh(), que lê metadados, registra receitas, resolve dependências, instancia e publica.",ps:"Diagnosticar falhas de startup sabendo em qual fase o erro aconteceu.",cf:"Primeiro monta-se o catálogo de BeanDefinitions; entre o catálogo e a criação existe uma janela em que terceiros alteram a composição — dela saem starters, perfis e proxies.",ex:"try (var ctx = new AnnotationConfigApplicationContext(AppConfig.class)) {\n    System.out.println(ctx.getBeanDefinitionCount());\n}",dg:"ioc",pr:"Coloque um breakpoint dentro do refresh e acompanhe as fases uma vez na vida."},
 {t:"BeanDefinition e registry",x:"a receita",oq:"A BeanDefinition é a receita de um bean: tipo, fábrica, escopo, qualifiers, dependências e callbacks. Ela existe e pode ser alterada antes de qualquer instância nascer.",ps:"Entender como um starter registra beans que você nunca declarou.",cf:"Scanners, readers e registrars colocam definições no registry; a BeanFactory só depois transforma cada definição em objeto.",ex:"context.registerBean(Clock.class, Clock::systemUTC);\nvar def = context.getBeanDefinition(\"clock\");\nSystem.out.println(def.getScope());",ar:"Confundir definição com instância: BeanFactoryPostProcessor mexe em receitas, BeanPostProcessor mexe em objetos."},
 {t:"Resolução de dependências",x:"qual bean vence",oq:"Com vários candidatos para o mesmo ponto de injeção, o container decide por tipo, qualifier, @Primary, prioridade, nome e cardinalidade — nessa ordem.",ps:"Resolver NoUniqueBeanDefinitionException com uma decisão, não com um remendo.",cf:"A DefaultListableBeanFactory filtra os candidatos; ponto singular precisa de um vencedor, List injeta todos, ObjectProvider adia.",ex:"Checkout(@Channel(\"pix\") PaymentGateway gateway) { ... }\n// ou, quando você quer todas as estratégias:\nCheckout(List<PaymentGateway> disponiveis) { ... }",ar:"@Primary usado para calar o compilador em vez de expressar uma decisão — seis meses depois ninguém lembra o porquê."},
 {t:"Escopos: singleton e prototype",x:"quanto tempo vive",oq:"Escopo define onde e por quanto tempo a instância existe. Singleton é o padrão (um por container); prototype cria a cada pedido; request e session vivem no ciclo HTTP.",ps:"Alinhar o ciclo do objeto ao dono do estado.",cf:"Singleton é por container, não por JVM. Prototype é criado e solto: o Spring não chama destroy nele.",ex:"@Scope(\"prototype\")\n@Component\nclass ReportBuilder { ... }",ar:"Guardar estado de requisição num singleton: funciona no teste, e em produção um usuário vê o dado do outro."},
 {t:"ObjectProvider e @Lazy",x:"pedir depois",oq:"ObjectProvider injeta a capacidade de pedir o objeto, em vez do objeto. Resolve escopo curto dentro de longo, dependência opcional e criação cara.",ps:"Não travar o startup por causa de um colaborador que talvez nem seja usado.",cf:"O provider resolve o bean no momento da chamada, então a instância obtida é a correta para aquele contexto.",ex:"private final ObjectProvider<ReportContext> contexts;\nReport create() { return contexts.getObject().build(); }"},
 {t:"Lifecycle e BeanPostProcessor",x:"quando vira proxy",oq:"O bean passa por construção, injeção, @PostConstruct e pós-processadores. É depois da inicialização que ele pode ser embrulhado num proxy.",ps:"Saber em que momento o objeto está cru, pronto, interceptado e encerrado.",cf:"O BeanPostProcessor é o gancho que torna o Spring extensível sem tocar no núcleo — transação, cache e segurança saem daí.",ex:"@PostConstruct void validate() { requireNonNull(url); }\n@PreDestroy   void close()    { client.close(); }",ar:"Chamada de rede pesada no @PostConstruct atrasa o startup e derruba o deploy inteiro por causa de uma dependência lenta."},
 {t:"@Configuration, @Bean e eventos",x:"fábricas explícitas",oq:"@Configuration com @Bean registra fábricas para o que você não pode anotar. Eventos desacoplam notificações dentro do mesmo processo.",ps:"Colocar no container clients, codecs e relógios de bibliotecas de terceiros.",cf:"Os parâmetros do método @Bean são resolvidos pelo container. Eventos são síncronos por padrão e participam da sua chamada.",ex:"@Bean Clock clock() { return Clock.systemUTC(); }\npublisher.publishEvent(new OrderPlaced(id));   // síncrono!",ar:"Tratar evento local como mensagem durável: se o processo cai, ele nunca existiu."}
]},
{g:"03",n:"Boot e configuração",s:"convenção com direito de recusa",c:"var(--blue)",cs:"var(--blue-soft)",items:[
 {t:"SpringApplication: o bootstrap",x:"ordem fixa",oq:"O SpringApplication prepara o Environment, decide o tipo de aplicação, cria o contexto, chama refresh e executa os runners — sempre nessa ordem.",ps:"Investigar startup lento ou erro que acontece antes de qualquer bean existir.",cf:"Listeners e initializers atuam antes do refresh; CommandLineRunner e ApplicationRunner atuam com o contexto já pronto.",ex:"var app = new SpringApplication(App.class);\napp.setApplicationStartup(new BufferingApplicationStartup(2048));\napp.run(args);",ar:"Migração indispensável num CommandLineRunner sem idempotência: com três réplicas subindo juntas, as três rodam."},
 {t:"Component scan",x:"por que o bean existe",oq:"O scan encontra estereótipos dentro de um conjunto de pacotes definido pela posição da classe principal. O que estiver fora precisa ser registrado explicitamente.",ps:"Controlar o que entra no contexto e manter fronteiras reais entre módulos.",cf:"@SpringBootApplication combina @Configuration, @ComponentScan a partir do próprio pacote e @EnableAutoConfiguration.",ex:"@SpringBootApplication\nclass OrdersApplication { }\n// o scan começa NO PACOTE desta classe",ar:"Scan de pacote amplo demais puxa beans de outros módulos e esconde a dependência real entre eles."},
 {t:"Auto-configuração e condições",x:"a mágica desmontada",oq:"O Boot oferece defaults condicionais: se a classe existe, se a propriedade está ligada, se você ainda não declarou o bean. A última condição é o que faz o framework recuar.",ps:"Parar de chamar de mágica e passar a ler o relatório de condições.",cf:"@ConditionalOnClass detecta capacidade, OnProperty detecta intenção e OnMissingBean recua diante da sua decisão.",ex:"@Bean @ConditionalOnMissingBean\nClock clock() { return Clock.systemUTC(); }\n\n// java -jar app.jar --debug  → ConditionEvaluationReport",dg:"cond",pr:"Rode com --debug, escolha três auto-configs negativas e explique qual condição falhou em cada uma."},
 {t:"Environment e precedência",x:"de onde veio o valor",oq:"O Environment reúne várias PropertySource numa cadeia ordenada. O valor efetivo é o da primeira fonte que responde, e essa ordem é documentada.",ps:"Rodar a mesma imagem em todos os ambientes mudando só o ambiente.",cf:"Regra prática: quanto mais perto da execução, maior a precedência. CLI vence env, que vence YAML de profile, que vence o application.yml.",ex:"java -jar app.jar --orders.timeout=800ms\ncurl localhost:8080/actuator/env/orders.timeout",ar:"Profiles usados como combinação de features: com quatro flags você tem dezesseis ambientes e nenhum testado."},
 {t:"@ConfigurationProperties",x:"config como contrato",oq:"O binding tipado converte um prefixo inteiro num objeto validável, inclusive Duration, DataSize e URI.",ps:"Fazer configuração inválida derrubar o startup em vez de virar bug às três da manhã.",cf:"O Binder coleta as propriedades, converte os tipos, cria o record e aplica Bean Validation.",ex:"@Validated\n@ConfigurationProperties(\"orders.client\")\nrecord ClientProps(@NotNull URI url, @NotNull Duration timeout) { }",ar:"Default silencioso para campo obrigatório: a aplicação sobe apontando para o lugar errado."},
 {t:"Profiles e @Profile",x:"ambiente, não feature",oq:"Profile liga um conjunto de configurações a um ambiente. Ele decide quais beans e quais arquivos de propriedade entram.",ps:"Separar o que muda entre dev, homologação e produção.",cf:"application-{profile}.yml é carregado por cima do application.yml quando aquele profile está ativo.",ex:"@Profile(\"!prod\")\n@Bean DataSource h2() { ... }\n\n# SPRING_PROFILES_ACTIVE=prod",ar:"Usar profile para ligar feature: feature liga por propriedade; profile é ambiente."},
 {t:"Starter e auto-config própria",x:"estrada pavimentada",oq:"Um starter agrega dependências; o módulo de auto-config registra defaults condicionais. Juntos viram o padrão que todos os serviços do time herdam.",ps:"Parar de copiar a mesma pasta config/ de serviço em serviço.",cf:"AutoConfiguration.imports lista as configurações; ApplicationContextRunner testa a matriz de condições.",ex:"@AutoConfiguration\n@ConditionalOnClass(FraudClient.class)\n@ConditionalOnProperty(prefix=\"fraud\", name=\"enabled\", havingValue=\"true\")\nclass FraudAutoConfiguration { }",ar:"Starter sem @ConditionalOnMissingBean não é estrada pavimentada — é obstáculo que cada time vai contornar."}
]},
{g:"04",n:"Proxies, AOP e transações",s:"a parte que explica os bugs famosos",c:"var(--red)",cs:"var(--red-soft)",items:[
 {t:"Proxy JDK e CGLIB",x:"o objeto não é o seu",oq:"Para aplicar transação, cache ou segurança sem sujar a sua classe, o Spring entrega aos outros beans um embrulho que intercepta cada chamada e delega ao objeto real.",ps:"Entender por que getClass() mostra $$SpringCGLIB e por que método final ignora a anotação.",cf:"Proxy JDK implementa interfaces; CGLIB gera uma subclasse. Método final, private ou static não pode ser sobrescrito — logo, não é interceptado.",ex:"var bean = ctx.getBean(OrderService.class);\nSystem.out.println(bean.getClass());          // ...$$SpringCGLIB$$0\nSystem.out.println(AopUtils.isAopProxy(bean)); // true",dg:"proxy",ar:"Método final ou private com @Transactional: a anotação é ignorada em silêncio, sem nenhum aviso."},
 {t:"AOP: pointcut e advice",x:"onde e o quê",oq:"AOP separa onde aplicar (o pointcut, uma expressão que seleciona métodos) de o que fazer (o advice, o código que roda ao redor da chamada).",ps:"Aplicar telemetria, auditoria e políticas técnicas sem repetir código em cem métodos.",cf:"Um advisor combina pointcut e interceptor; com vários aspectos, a ordem define quem embrulha quem.",ex:"@Around(\"@annotation(com.loja.Audited)\")\nObject audit(ProceedingJoinPoint p) throws Throwable {\n    long t0 = System.nanoTime();\n    try { return p.proceed(); } finally { registra(t0); }\n}",ar:"Pointcut amplo demais intercepta até getters, e o custo aparece no percentil 99."},
 {t:"Self-invocation",x:"o bug clássico",oq:"Quando um método chama outro do mesmo objeto, a chamada é dispatch Java direto: não sai e não volta pelo proxy. A anotação do método interno é ignorada.",ps:"Diagnosticar em segundos o \"@Transactional não funciona\".",cf:"O proxy só intercepta o que entra por ele. this.metodo() nunca entra por ele.",ex:"public void processar() {\n    this.salvar();      // NÃO passa pelo proxy\n}\n@Transactional public void salvar() { ... }",dg:"self",ar:"Injetar o próprio bean ou usar AopContext para contornar: os dois funcionam e escondem que a fronteira está no lugar errado."},
 {t:"@Transactional: a fronteira",x:"quem abre e fecha",oq:"A anotação só declara a política. Quem executa é o TransactionInterceptor: pega a Connection, desliga o autocommit, amarra à thread e decide commit ou rollback.",ps:"Garantir que duas ou mais operações valham como uma unidade só.",cf:"O interceptor consulta o TransactionAttribute, o TransactionManager adquire o recurso e o vincula ao contexto da thread.",ex:"@Transactional\npublic void finalizar(PedidoId id) {\n    pedidos.marcarPago(id);   // DAO 1\n    estoque.baixar(id);       // DAO 2 — mesma Connection\n}",dg:"tx",ar:"Chamada HTTP dentro de transação longa: você segura uma conexão do pool esperando a rede de terceiro."},
 {t:"Propagation",x:"participa ou cria",oq:"Propagation decide como uma chamada se comporta diante de uma transação existente: participa (REQUIRED), suspende e cria outra (REQUIRES_NEW), ou nenhuma.",ps:"Compor operações sem quebrar a atomicidade por acidente.",cf:"REQUIRES_NEW abre uma segunda conexão simultânea para a mesma requisição — o que dobra o consumo do pool.",ex:"@Transactional(propagation = Propagation.REQUIRES_NEW)\npublic void registrarTentativa(PedidoId id) { ... }",ar:"Usar REQUIRES_NEW para garantir tudo: você criou duas unidades que podem terminar em estados diferentes."},
 {t:"Regras de rollback",x:"checked não desfaz",oq:"Por padrão só RuntimeException causa rollback. Exceção checked sobe, a mensagem de erro aparece e o dado é gravado assim mesmo.",ps:"Não descobrir isso em produção.",cf:"A regra veio do EJB e distingue erro de sistema de exceção de negócio — distinção que raramente é a que o time espera.",ex:"@Transactional(rollbackFor = SaldoInsuficienteException.class)\npublic void debitar(ContaId id, Money v) throws SaldoInsuficienteException { ... }",ar:"Capturar a exceção dentro do método transacional e não relançar: a transação foi marcada para rollback e o commit falha depois."},
 {t:"Cache, retry e ordem dos proxies",x:"quem embrulha quem",oq:"Cache evita a execução, retry repete e transação envolve. Os três são advisors sobre o mesmo objeto e a ordem entre eles muda o resultado.",ps:"Combinar as três coisas sem criar efeito duplicado ou dado obsoleto.",cf:"Retry por fora da transação abre uma transação limpa a cada tentativa; por dentro, todas as tentativas herdam o estado sujo.",ex:"@Retryable(retryFor = OptimisticLockException.class, maxAttempts = 3)\n@Transactional\npublic void reservar(SkuId sku) { ... }",ar:"Cachear resultado de erro transforma uma falha momentânea em falha permanente até o TTL expirar."}
]},
{g:"05",n:"Web: a requisição por dentro",s:"da porta de entrada ao JSON",c:"var(--orange)",cs:"var(--orange-soft)",items:[
 {t:"Servlet container e FilterChain",x:"antes do Spring",oq:"Quem recebe a conexão e monta request/response é o servidor embutido. Ele executa uma cadeia de Filters e só no fim entrega ao DispatcherServlet.",ps:"Aplicar correlação, CORS e segurança no ponto mais cedo possível.",cf:"Cada filtro chama chain.doFilter para continuar; se esquecer, a requisição morre ali sem erro no log.",ex:"class CorrelationFilter extends OncePerRequestFilter {\n    protected void doFilterInternal(...) {\n        MDC.put(\"traceId\", id);\n        try { chain.doFilter(req, res); } finally { MDC.clear(); }\n    }\n}",ar:"Não limpar o MDC no finally: a thread volta ao pool e a próxima requisição herda o traceId da anterior."},
 {t:"DispatcherServlet",x:"o front controller",oq:"Uma única servlet recebe tudo e coordena as etapas: escolhe o handler, resolve os argumentos, invoca o método, serializa o retorno e trata exceções.",ps:"Saber onde colocar o breakpoint para cada tipo de falha.",cf:"HandlerMapping escolhe, HandlerAdapter invoca, HttpMessageConverter serializa, ExceptionResolver trata a falha.",ex:"logging.level.org.springframework.web=DEBUG\n# mostra mapping, adapter, converter e resolver de cada requisição",dg:"disp",ar:"Depurar 404, 405 ou 415 no controller: esses erros acontecem antes do seu método e o breakpoint nunca é atingido."},
 {t:"@RestController e binding",x:"HTTP vira comando",oq:"O controller mapeia o contrato HTTP. Os argument resolvers transformam path, query, header e corpo em parâmetros do seu método.",ps:"Traduzir transporte em caso de uso, sem regra de negócio no meio.",cf:"RequestMappingInfo seleciona o método; os resolvers fazem o binding; o converter lê e escreve o corpo.",ex:"@PostMapping(\"/pedidos\")\n@ResponseStatus(HttpStatus.CREATED)\nPedidoView criar(@Valid @RequestBody CriarPedido cmd) {\n    return PedidoView.de(checkout.criar(cmd));\n}",ar:"Usar a entidade de banco como request/response: qualquer renomeação de coluna vira quebra de contrato."},
 {t:"DTO, Jackson e validação",x:"a fronteira",oq:"O DTO define o contrato externo, o Jackson converte JSON e o Bean Validation rejeita o que está estruturalmente errado antes de chegar ao serviço.",ps:"Separar a evolução da API do modelo interno.",cf:"Formato é trabalho do Jackson, constraint é do validator, e invariante de negócio é do domínio. São três coisas diferentes.",ex:"record CriarPedido(@NotBlank String cliente,\n                   @NotEmpty @Valid List<ItemInput> itens) { }",ar:"Não limitar tamanho de payload nem profundidade: parser sem limite é vetor de negação de serviço."},
 {t:"Filter, interceptor e advice",x:"três camadas",oq:"Filter vê qualquer requisição; HandlerInterceptor vê o handler escolhido; ControllerAdvice centraliza binding e tratamento de exceção dos controllers.",ps:"Colocar cada extensão na camada que tem o contexto e a cobertura certos.",cf:"Filtro para segurança e correlação, interceptor para telemetria de handler, advice para transformar exceção em resposta.",ex:"@RestControllerAdvice\nclass ApiErrors {\n    @ExceptionHandler(PedidoNaoEncontrado.class)\n    ProblemDetail naoEncontrado(PedidoNaoEncontrado e) { ... }\n}",ar:"Autorização no interceptor: ele não cobre o que falha antes do mapping e fica fora da cadeia de segurança."},
 {t:"Erros como contrato",x:"ProblemDetail",oq:"A resposta de erro faz parte do contrato: precisa de status coerente, tipo estável, mensagem segura e um identificador rastreável.",ps:"Deixar o cliente agir sozinho e o operador achar a ocorrência.",cf:"A RFC 9457 padroniza type, title, status, detail e instance. O Spring 6 traz isso nativo como ProblemDetail.",ex:"var pd = ProblemDetail.forStatusAndDetail(HttpStatus.CONFLICT, \"estoque insuficiente\");\npd.setType(URI.create(\"https://api.loja.com/erros/estoque-insuficiente\"));\npd.setProperty(\"traceId\", MDC.get(\"traceId\"));",ar:"Devolver 200 com sucesso:false quebra retry automático, cache e todo monitoramento por status."},
 {t:"MVC, WebFlux e virtual threads",x:"qual modelo usar",oq:"MVC é bloqueante com uma thread por requisição. WebFlux é não bloqueante e reativo. Virtual threads mantêm o modelo simples e barateiam a espera.",ps:"Escolher pelo problema real, não por tendência.",cf:"WebFlux só compensa quando a stack inteira é reativa. Com Java 21, virtual threads resolvem a maioria dos casos sem mudar o estilo do código.",ex:"spring.threads.virtual.enabled=true\n# Boot 3.2+: o servidor passa a atender em virtual threads",ar:"block() dentro de stack reativa: você paga a complexidade do modelo e não colhe nenhum benefício."}
]},
{g:"06",n:"Dados: JDBC explícito",s:"o banco à vista, antes do ORM",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"DataSource e HikariCP",x:"o pool",oq:"O DataSource é a fábrica de conexões e o HikariCP mantém um número limitado delas abertas e reutilizáveis. close() devolve ao pool, não fecha o socket.",ps:"Controlar o custo de conexão e proteger o banco da concorrência da aplicação.",cf:"O limite real é réplicas × tamanho do pool contra o max_connections do banco — e quase ninguém faz essa conta.",ex:"spring.datasource.hikari.maximum-pool-size=10\nspring.datasource.hikari.connection-timeout=3000\nspring.datasource.hikari.leak-detection-threshold=20000",dg:"pool",ar:"Aumentar o pool como primeira reação à lentidão só move a fila para dentro do banco, onde você não a enxerga."},
 {t:"JdbcTemplate",x:"sem boilerplate",oq:"Executa o ciclo JDBC — pegar conexão, preparar statement, iterar, fechar — e traduz SQLException. O que ele não faz é esconder o SQL.",ps:"Tirar a cerimônia sem perder o controle do que vai para o banco.",cf:"Padrão template method: o framework roda a cerimônia e chama de volta o seu código no ponto que interessa, o mapeamento.",ex:"jdbc.query(\"select id, status, total from pedido where id = ?\",\n    (rs, n) -> new Pedido(rs.getObject(\"id\", UUID.class),\n                          Status.valueOf(rs.getString(\"status\")),\n                          rs.getBigDecimal(\"total\")), id);",ar:"Achar que o template abre transação sozinho: sem transação, cada comando é um commit isolado."},
 {t:"Parâmetros nomeados e batch",x:"legível e rápido",oq:"Parâmetros nomeados acabam com a contagem de interrogações; batchUpdate troca mil viagens de rede por duas.",ps:"Consultas com muitos filtros e importações em massa.",cf:"O NamedParameterJdbcTemplate expande os nomes para posicionais antes de enviar; o batch agrupa os binds.",ex:"jdbc.batchUpdate(\"insert into item (pedido_id, sku, qtd) values (?,?,?)\",\n    itens, 500, (ps, item) -> { ps.setObject(1, item.pedidoId());\n                                ps.setString(2, item.sku());\n                                ps.setInt(3, item.qtd()); });",ar:"Batch sem limite de tamanho estoura a memória do driver e o timeout da transação."},
 {t:"Sincronização transacional",x:"a mesma conexão",oq:"O Spring guarda a Connection da transação atual num contexto ligado à thread. Todo acesso que passar pelo template encontra essa conexão sozinho.",ps:"Ter atomicidade sem passar Connection de método em método.",cf:"O DataSourceTransactionManager adquire o recurso e o vincula; DataSourceUtils e o template o reutilizam.",ex:"@Transactional\nvoid place(Pedido p) {\n    orders.insert(p);    // mesma Connection\n    stock.reserve(p);    // mesma Connection\n}",dg:"tx",ar:"Pegar a conexão direto do DataSource: você recebe uma conexão nova, fora da transação, e o rollback não desfaz o que ela gravou."},
 {t:"Lost update e locking",x:"concorrência real",oq:"Duas requisições lendo e gravando o mesmo registro é rotina. O nível de isolamento padrão não impede que uma sobrescreva a outra.",ps:"Proteger saldo, estoque e contadores sem travar a tabela inteira.",cf:"Três saídas: update atômico no SQL, lock pessimista com FOR UPDATE, ou lock otimista com coluna de versão e re-tentativa.",ex:"-- atômico: sem race, sem lock\nupdate estoque set qtd = qtd - 1 where sku = ? and qtd > 0;\n-- 0 linhas afetadas = não tinha saldo",dg:"lost",ar:"check-then-act: ler o saldo em Java, decidir e gravar. Entre a leitura e a escrita cabe outra requisição inteira."},
 {t:"Idempotência na borda",x:"repetir sem estragar",oq:"Idempotência torna a repetição inofensiva. Vem do retry, do duplo clique e da mensagem entregue duas vezes.",ps:"Evitar cobrar o cliente duas vezes por um timeout de rede.",cf:"Uma chave única registra o comando já processado; a segunda tentativa é reconhecida e descartada.",ex:"insert into processado (chave) values (?) on conflict do nothing;\n-- afetou 0 linhas? já processei. Descarte.",ar:"Retry cego em POST sem chave de idempotência é a origem clássica do pagamento duplicado."},
 {t:"Migrations com Flyway",x:"schema versionado",oq:"O schema do banco é código: cada mudança vira um script versionado que roda uma vez e fica registrado numa tabela de controle.",ps:"Ter o mesmo schema em todos os ambientes, com histórico e ordem garantidos.",cf:"O Flyway compara os scripts com a tabela de histórico e aplica só o que falta, em ordem, dentro de transação quando o banco permite.",ex:"src/main/resources/db/migration/\n  V1__cria_pedido.sql\n  V2__adiciona_indice_status.sql",ar:"Editar um script já aplicado: o checksum muda e o Flyway recusa subir — corrija com um script novo."}
]},
{g:"07",n:"JPA por dentro",s:"depois de dominar o JDBC",c:"var(--yellow)",cs:"var(--yellow-soft)",items:[
 {t:"Por que o ORM existe",x:"impedance mismatch",oq:"Objetos têm herança, grafos e referências; tabelas têm linhas, chaves e joins. O ORM automatiza a tradução entre os dois mundos.",ps:"Eliminar centenas de DAOs repetitivos em modelos ricos em relações.",cf:"O Hibernate mapeia entidades para tabelas e mantém um contexto que rastreia as mudanças de cada objeto carregado.",ex:"@Entity\nclass Pedido {\n    @Id UUID id;\n    @OneToMany(mappedBy=\"pedido\") List<Item> itens;\n}",ar:"Achar que JPA elimina SQL: ele gera SQL, e você continua responsável — agora indiretamente."},
 {t:"Persistence context",x:"o cache de primeiro nível",oq:"É o mapa de entidades gerenciadas dentro de uma transação. Buscar o mesmo id duas vezes devolve o mesmo objeto, sem ir ao banco de novo.",ps:"Entender por que uma alteração foi salva sem você chamar save().",cf:"O contexto guarda o estado original de cada entidade; no flush, compara e gera UPDATE só do que mudou.",ex:"@Transactional\nvoid renomear(UUID id) {\n    var p = em.find(Pedido.class, id);\n    p.setNome(\"novo\");     // sem save(): o dirty checking grava\n}",dg:"jpa"},
 {t:"Dirty checking e flush",x:"quando o SQL sai",oq:"O Hibernate adia os comandos e escolhe sozinho a hora de enviá-los: antes de uma consulta que possa ser afetada, ou no commit.",ps:"Explicar por que o SQL apareceu no log num momento inesperado.",cf:"O flush automático acontece no commit e antes de queries que tocam as mesmas tabelas. Você pode forçar com flush().",ex:"em.persist(p);\n// nada foi ao banco ainda\nem.createQuery(\"from Pedido\").getResultList();  // dispara o flush",ar:"Contar com a ordem dos comandos: o Hibernate reordena inserts e updates por tipo de entidade."},
 {t:"Lazy loading e a sessão",x:"o erro mais comum",oq:"Relações lazy só carregam quando acessadas — e só funcionam enquanto a sessão está aberta. Fora dela, estoura LazyInitializationException.",ps:"Não carregar meio banco a cada consulta, e ainda assim ter o dado quando precisa.",cf:"O Hibernate devolve um proxy no lugar da coleção; o acesso dispara a consulta se a sessão ainda existir.",ex:"var p = repo.findById(id).orElseThrow();\n// fora da transação:\np.getItens().size();   // LazyInitializationException",ar:"Ligar Open Session in View para resolver: esconde o problema fazendo consulta durante a renderização da resposta."},
 {t:"N+1 e fetch plan",x:"101 consultas",oq:"Carregar cem pedidos e acessar os itens de cada um gera cento e uma consultas. O ORM não avisa — só o log de SQL mostra.",ps:"Transformar uma tela lenta em uma consulta só.",cf:"JOIN FETCH, @EntityGraph ou batch fetching resolvem, cada um com um efeito diferente na quantidade de linhas retornadas.",ex:"@Query(\"select p from Pedido p join fetch p.itens where p.status = :s\")\nList<Pedido> buscarComItens(Status s);   // 1 query",pr:"Ligue spring.jpa.show-sql=true, provoque o N+1 e conte as consultas antes e depois do JOIN FETCH."},
 {t:"Quando NÃO usar ORM",x:"critério, sem religião",oq:"CRUD rico em relações com acesso previsível: o JPA economiza muito código. Consultas complexas, relatórios e alto volume: SQL explícito é mais simples e mais rápido.",ps:"Escolher por caso de uso em vez de padronizar por gosto.",cf:"Os dois convivem no mesmo projeto: JPA para o agregado, JdbcTemplate para a consulta de relatório.",ex:"// mesmo projeto, ferramentas diferentes\ninterface PedidoRepository extends JpaRepository<Pedido, UUID> { }\nclass RelatorioDao { private final JdbcTemplate jdbc; }",ar:"Expor a entidade na API acorda relações lazy dentro do serializador e vaza o modelo interno."}
]},
{g:"08",n:"Spring Security",s:"identidade, acesso e ameaça",c:"var(--pink)",cs:"var(--pink-soft)",items:[
 {t:"SecurityFilterChain",x:"antes do controller",oq:"O Spring Security é uma cadeia de filtros que roda antes do DispatcherServlet: extrai credenciais, autentica, guarda o contexto e autoriza.",ps:"Centralizar a proteção no limite HTTP em vez de espalhar checagens.",cf:"O FilterChainProxy escolhe a PRIMEIRA chain compatível com a requisição e executa os filtros dela em ordem.",ex:"@Bean\nSecurityFilterChain api(HttpSecurity http) throws Exception {\n    return http.securityMatcher(\"/api/**\")\n        .authorizeHttpRequests(a -> a.anyRequest().authenticated())\n        .build();\n}",dg:"sec",ar:"Várias chains com matchers sobrepostos: só a primeira executa e as regras da segunda são ignoradas."},
 {t:"Authentication",x:"quem está chamando",oq:"Autenticação transforma credencial em identidade autenticada com authorities. O resultado fica no SecurityContext daquela requisição.",ps:"Estabelecer quem é, antes de decidir o que pode.",cf:"Um filtro extrai a credencial, um AuthenticationProvider valida e o resultado entra no contexto.",ex:"var auth = SecurityContextHolder.getContext().getAuthentication();\nString usuario = auth.getName();",ar:"Hash rápido para senha (MD5, SHA-256 puro): hash de senha precisa ser lento de propósito. Use BCrypt."},
 {t:"Authorization",x:"o que pode fazer",oq:"Autorização decide se aquela identidade pode executar aquela ação sobre aquele recurso. Rota resolve o caso genérico; método resolve o que depende do dado.",ps:"Aplicar menor privilégio e proteger a regra, não só a URL.",cf:"Method security usa o mesmo mecanismo de proxy: o interceptor recebe os argumentos e consulta o AuthorizationManager.",ex:"@PreAuthorize(\"hasAuthority('orders:write')\")\nvoid cancelar(PedidoId id) { ... }\n\n@PreAuthorize(\"@pedidos.ehDono(#id, authentication.name)\")\nvoid cancelarProprio(PedidoId id) { ... }",ar:"Testar só o caminho permitido: a suíte fica verde enquanto o endpoint abre para todo mundo."},
 {t:"Sessão, CSRF e CORS",x:"três coisas distintas",oq:"Sessão mantém a autenticação com cookie. CSRF explora o fato de o browser mandar esse cookie automaticamente. CORS controla quem pode ler a resposta de outra origem.",ps:"Escolher a defesa certa conforme o tipo de cliente.",cf:"A regra que organiza tudo: se a credencial viaja automática (cookie), precisa de CSRF; se viaja explícita (header), não se aplica.",ex:"http.csrf(csrf -> csrf.csrfTokenRepository(...));\n// numa chain bearer stateless, desligar CSRF é decisão justificada",ar:"Desabilitar CSRF e liberar CORS geral para funcionar: funciona inclusive para quem você não quer."},
 {t:"OAuth2 Resource Server",x:"validar bearer",oq:"Como resource server, sua aplicação não emite token: recebe um bearer, valida assinatura, emissor e validade, e converte claims em authorities.",ps:"Delegar a emissão de identidade ao provedor e validar localmente.",cf:"O JwtDecoder busca o JWKS do emissor e valida a assinatura sem uma chamada de rede por requisição.",ex:"spring.security.oauth2.resourceserver.jwt.issuer-uri=https://idp.example",ar:"Apenas decodificar o JWT e confiar: sem validar assinatura, qualquer um forja um token de administrador."},
 {t:"JWT: o que conferir",x:"assinado, não secreto",oq:"JWT é um token assinado com claims. O conteúdo é público — base64, não criptografia. O que protege é a assinatura.",ps:"Saber exatamente o que precisa ser verificado além de decodificar.",cf:"Confira algoritmo esperado, issuer, expiração, audience (foi emitido para a SUA API?) e o escopo da operação.",ex:"// o payload é legível por qualquer um:\necho $TOKEN | cut -d. -f2 | base64 -d",ar:"Colocar dado sensível no payload achando que está protegido."},
 {t:"Headers, segredos e testes",x:"fechar as frestas",oq:"Headers de segurança fecham brechas do browser, segredos ficam fora do código, e testes de negação impedem que uma refatoração abra um endpoint.",ps:"Evitar regressão de acesso e vazamento de credencial.",cf:"spring-security-test injeta identidades controladas, permitindo testar o caso negativo com precisão.",ex:"mockMvc.perform(get(\"/api/admin\")\n        .with(jwt().authorities(new SimpleGrantedAuthority(\"orders:read\"))))\n       .andExpect(status().isForbidden());",ar:"Logar o token completo: ele vira credencial permanente para quem tiver acesso ao log."}
]},
{g:"09",n:"Integração e resiliência",s:"falar com o mundo lá fora",c:"var(--java)",cs:"var(--java-soft)",items:[
 {t:"RestClient e WebClient",x:"o cliente HTTP",oq:"Traduzem uma chamada Java em protocolo remoto. RestClient é síncrono e cabe em quase tudo; WebClient é não bloqueante e faz sentido em stack reativa.",ps:"Isolar a integração para que o modelo do parceiro não vaze no seu domínio.",cf:"Ambos precisam de codecs, limites de tamanho, timeout e observação — nada disso vem certo por padrão.",ex:"restClient.get().uri(\"/precos/{id}\", id)\n          .retrieve()\n          .body(PrecoResposta.class);",ar:"Client sem timeout: uma dependência lenta segura suas threads e derruba a aplicação inteira por tabela."},
 {t:"Timeout e deadline",x:"quanto você espera",oq:"Todo request precisa de dois limites: tempo para conectar e tempo para o request inteiro. Sem eles, a thread fica pendurada indefinidamente.",ps:"Conter o dano quando o outro lado para de responder.",cf:"O deadline precisa diminuir a cada salto: se você promete responder em 2s, quem você chama não pode ter timeout de 3s.",ex:"var f = new SimpleClientHttpRequestFactory();\nf.setConnectTimeout(3000);\nf.setReadTimeout(5000);",ar:"Timeout maior que o SLA que você promete: você garante estourar o próprio prazo antes de desistir."},
 {t:"Retry com backoff e jitter",x:"tentar de novo, com juízo",oq:"Retry repete a chamada esperando um pouco mais a cada tentativa, com uma variação aleatória para evitar que todos re-tentem no mesmo instante.",ps:"Absorver falha transitória sem amplificar a carga do outro lado.",cf:"Retry multiplica carga: três tentativas em três serviços encadeados são vinte e sete chamadas para uma requisição.",ex:"@Retry(name = \"catalogo\")   // backoff exponencial + jitter\nPreco buscar(SkuId sku) { ... }",dg:"res",ar:"Retry em operação não idempotente: repetir um POST de pagamento cobra duas vezes."},
 {t:"Circuit breaker",x:"parar de insistir",oq:"O breaker mede a taxa de falha e, ao ultrapassar o limiar, abre: para de tentar por um tempo e falha rápido, dando espaço para a dependência se recuperar.",ps:"Evitar falha em cascata quando um serviço abaixo cai.",cf:"Três estados: fechado (passa), aberto (falha rápido) e meio-aberto (deixa algumas passarem para testar se voltou).",ex:"@CircuitBreaker(name = \"catalogo\", fallbackMethod = \"semPreco\")\nPreco buscar(SkuId sku) { ... }\n\nPreco semPreco(SkuId sku, Throwable e) { return Preco.indisponivel(sku); }",ar:"Fallback que mente: devolver preço zero em vez de indisponível transforma erro visível em prejuízo silencioso."},
 {t:"Bulkhead e isolamento",x:"compartimentar",oq:"Limitar quantas chamadas simultâneas cada dependência pode consumir, para que uma integração lenta não tome todos os recursos da aplicação.",ps:"Garantir que o serviço continue atendendo o que não depende do parceiro problemático.",cf:"Um semáforo ou pool dedicado por integração cria compartimentos — como as antepadas de um navio.",ex:"@Bulkhead(name = \"catalogo\", maxConcurrentCalls = 20)\nPreco buscar(SkuId sku) { ... }"},
 {t:"Adapter e o modelo do parceiro",x:"tradução na borda",oq:"O DTO do parceiro deve morrer na borda: um adapter traduz para o seu modelo e é o único lugar que muda quando o contrato dele muda.",ps:"Impedir que uma mudança externa se espalhe pelo seu código.",cf:"O domínio define a interface (port) e o adapter a implementa usando o client HTTP — mesma ideia de ports e adapters.",ex:"interface TabelaDePrecos { Preco de(SkuId sku); }          // port, no domínio\nclass CatalogoHttpAdapter implements TabelaDePrecos { ... }  // adapter, na borda",ar:"Deixar o DTO externo circular pelo domínio: quando o parceiro renomear um campo, a mudança atinge tudo."}
]},
{g:"10",n:"Mensageria com RabbitMQ",s:"conversa assíncrona",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Por que uma fila",x:"desacoplar no tempo",oq:"Fila permite que o produtor siga em frente sem esperar o consumidor, absorve pico e deixa acrescentar novos consumidores sem tocar em quem publica.",ps:"Tirar da resposta HTTP o trabalho que não precisa acontecer agora.",cf:"O broker guarda a mensagem de forma durável; o consumidor drena no ritmo dele. O custo é a consistência deixar de ser imediata.",ex:"// síncrono: o cliente espera o e-mail sair\n// assíncrono: publica o evento e responde 201 na hora",ar:"Usar fila para o que precisa de resposta imediata: você trocou latência previsível por complexidade."},
 {t:"Exchange, binding e fila",x:"a topologia AMQP",oq:"O produtor nunca publica numa fila: publica numa exchange com uma routing key. Os bindings decidem em quais filas a mensagem cai.",ps:"Acrescentar consumidores novos sem alterar o produtor.",cf:"Direct casa a chave exata, topic casa por padrão com curingas, fanout entrega a todas. O produtor não sabe quem escuta.",ex:"@Bean TopicExchange ordersExchange() { return new TopicExchange(\"orders.x\"); }\nrabbitTemplate.convertAndSend(\"orders.x\", \"order.created\", evento);",dg:"amqp",ar:"Publicar usando o nome da fila na exchange default: funciona e joga fora todo o desacoplamento."},
 {t:"Durabilidade e confirmação",x:"não perder mensagem",oq:"Fila durável sobrevive ao restart do broker; publisher confirms avisam o produtor de que a mensagem foi realmente aceita.",ps:"Garantir que o evento não some entre o publish e o disco.",cf:"Sem confirms, convertAndSend retorna sem erro mesmo quando o broker recusou ou caiu no meio.",ex:"spring.rabbitmq.publisher-confirm-type=correlated\nspring.rabbitmq.publisher-returns=true",ar:"Fila não durável em produção: um restart do broker e as mensagens somem sem rastro."},
 {t:"@RabbitListener e ack",x:"consumir de verdade",oq:"O container consome, controla concorrência e confirma ou rejeita cada entrega. O ack é o que decide se a mensagem sai da fila.",ps:"Processar com capacidade controlada e política de falha explícita.",cf:"Ack automático acontece após o retorno normal do método; exceção vira nack. Prefetch limita quantas o consumidor segura.",ex:"@RabbitListener(queues = \"orders.estoque.q\", concurrency = \"4\")\nvoid handle(OrderCreated e) { estoque.reservar(e.sku(), e.qtd()); }",dg:"ack",ar:"Ack antes de o efeito ser durável: o consumidor cai antes do commit e a mensagem não existe mais."},
 {t:"DLQ e mensagem envenenada",x:"o depósito de não-entregues",oq:"Mensagem que sempre falha precisa sair do caminho, senão volta para a fila para sempre e impede as boas de serem processadas.",ps:"Isolar o defeito e manter a fila fluindo.",cf:"Depois de N rejeições, o dead-letter routing manda a mensagem para uma fila separada, que alguém precisa monitorar.",ex:"@Bean Queue estoqueQueue() {\n    return QueueBuilder.durable(\"orders.estoque.q\")\n                       .deadLetterExchange(\"orders.dlx\").build();\n}",ar:"DLQ sem alerta é só uma lixeira com nome bonito."},
 {t:"Transactional outbox",x:"o dual write",oq:"Gravar no banco e publicar no broker são duas operações que não cabem numa transação confiável. O outbox grava o evento na MESMA transação do dado.",ps:"Nunca publicar um evento de algo que deu rollback, nem perder um evento de algo que foi salvo.",cf:"Um processo separado (relay) lê a tabela outbox e publica. Ele pode publicar duas vezes — por isso o consumidor precisa ser idempotente.",ex:"@Transactional\nvoid criar(Pedido p) {\n    pedidos.insert(p);\n    outbox.insert(new OrderCreated(p.id()));   // mesma transação\n}",dg:"outbox",ar:"Assumir exactly-once ponta a ponta: não existe. O que existe é at-least-once com consumidor idempotente."},
 {t:"Consumidor idempotente",x:"repetir sem efeito",oq:"O consumidor registra o que já processou por uma chave e descarta a repetição. É o que torna a entrega \"pelo menos uma vez\" segura.",ps:"Sobreviver a redelivery, a retry do produtor e a duplicata do relay.",cf:"A chave pode ser o id da mensagem ou o id do comando de negócio, gravada na mesma transação do efeito.",ex:"insert into processado (msg_id) values (?) on conflict do nothing;\n-- 0 linhas = já vi esta mensagem: dá ack e não faz nada",pr:"Publique a mesma mensagem duas vezes de propósito e prove que o efeito de negócio aconteceu uma vez só."}
]},
{g:"11",n:"Async, agendamento e threads",s:"trabalho fora da requisição",c:"var(--blue)",cs:"var(--blue-soft)",items:[
 {t:"@Async e executores",x:"delegar",oq:"@Async submete o trabalho a um executor e devolve o controle imediatamente. O retorno vira CompletableFuture ou void.",ps:"Não segurar a resposta HTTP por causa de um e-mail ou de um relatório.",cf:"Passa pelo mesmo mecanismo de proxy — inclusive com o problema da self-invocation.",ex:"@Async(\"relatorios\")\nCompletableFuture<Relatorio> gerar(PedidoId id) { ... }",ar:"@Async chamado internamente roda na mesma thread, síncrono, sem nenhum aviso."},
 {t:"Fila e política de rejeição",x:"backpressure",oq:"Um pool é threads mais uma fila, e o comportamento sob pico é definido pela fila. Fila ilimitada esconde o problema até virar falta de memória.",ps:"Falhar de forma visível em vez de acumular trabalho invisível.",cf:"Com fila limitada e CallerRunsPolicy, quem envia executa a tarefa e desacelera sozinho.",ex:"var pool = new ThreadPoolExecutor(8, 8, 0, SECONDS,\n        new ArrayBlockingQueue<>(100),\n        new ThreadPoolExecutor.CallerRunsPolicy());",ar:"Executor sem limite de fila: a memória vai embora antes de qualquer alerta disparar."},
 {t:"@Scheduled e cron",x:"trabalho periódico",oq:"Dispara um método por tempo: intervalo fixo, atraso fixo ou expressão cron.",ps:"Reconciliação, limpeza e relatórios periódicos.",cf:"Por padrão roda num scheduler de uma thread só; com várias réplicas, todas executam ao mesmo tempo.",ex:"@Scheduled(cron = \"0 */5 * * * *\")\nvoid reconciliar() { ... }   // precisa ser idempotente",ar:"@Scheduled como substituto de mensageria confiável: se a réplica cair no meio, ninguém reprocessa."},
 {t:"Virtual threads no Boot",x:"escalar a espera",oq:"Com Java 21 e Boot 3.2, o servidor pode atender cada requisição numa virtual thread: bloquear deixou de ser caro e o código continua simples.",ps:"Atender muito mais requisições simultâneas sem migrar para programação reativa.",cf:"A virtual thread se desmonta ao bloquear em I/O e libera a thread real. O funil passa a ser o pool do banco, não as threads.",ex:"spring.threads.virtual.enabled=true",ar:"Virtual threads sem limitar o acesso ao banco: dez mil requisições brigando por dez conexões. O funil só mudou de lugar."},
 {t:"Propagação de contexto",x:"o que se perde na troca",oq:"MDC, SecurityContext e transação vivem presos à thread. Ao passar o trabalho para outra thread, eles não vão junto por padrão.",ps:"Não perder o traceId e a identidade do usuário no trabalho assíncrono.",cf:"É preciso decorar o executor para copiar o contexto, ou passar os dados explicitamente como argumento.",ex:"// o traceId some no @Async se o executor não for decorado\nexecutor.setTaskDecorator(new ContextPropagatingTaskDecorator());",ar:"Assumir que a transação continua na thread assíncrona: ela não continua, e o rollback não alcança o trabalho de lá."}
]},
{g:"12",n:"Testes",s:"o menor contexto que prova",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"A pirâmide na prática",x:"qual teste para quê",oq:"Muitos testes de unidade rápidos, alguns slices de integração com o framework, poucos testes ponta a ponta com dependência real.",ps:"Ter feedback em segundos e ainda assim cobrir o que só quebra integrado.",cf:"Cada camada testa uma coisa: a regra, a integração com o framework, e o comportamento contra a dependência de verdade.",ex:"// regra: new, sem Spring\n// contrato web: @WebMvcTest\n// SQL de verdade: @Testcontainers",dg:"test"},
 {t:"Unidade sem Spring",x:"new e pronto",oq:"Regra de negócio em Java puro se testa instanciando a classe. Se o teste do domínio precisa de @SpringBootTest, o problema é o acoplamento do desenho.",ps:"Rodar a suíte inteira a cada mudança, em segundos.",cf:"Injete fakes pelo construtor e controle o tempo com um Clock fixo para eliminar instabilidade.",ex:"var service = new Reservar(new EstoqueFake(...), Clock.fixed(AGORA, UTC));\nassertThrows(EstoqueInsuficiente.class, () -> service.executar(\"SKU-1\", 1));",ar:"@SpringBootTest para classe pura: cinco segundos por classe, e a suíte deixa de ser rodada."},
 {t:"Test slices",x:"só a fatia",oq:"Um slice sobe apenas a parte do contexto que aquele teste precisa: web, JDBC, JSON ou client.",ps:"Validar a integração com o framework sem pagar o custo da aplicação inteira.",cf:"A anotação restringe o scan e liga um subconjunto conhecido de auto-configurações.",ex:"@WebMvcTest(PedidoController.class)\nclass PedidoWebTest {\n    @Autowired MockMvc mvc;\n    @MockitoBean Checkout checkout;\n}",ar:"Mockar justamente o componente que o slice deveria integrar: o teste deixa de provar qualquer coisa."},
 {t:"MockMvc e contrato HTTP",x:"status e corpo",oq:"Exercita o pipeline do MVC sem subir servidor: mapping, binding, validação, converter e tratamento de erro.",ps:"Testar o contrato que o cliente enxerga, inclusive os casos de falha.",cf:"A requisição percorre o DispatcherServlet real; só o transporte de rede é simulado.",ex:"mvc.perform(post(\"/pedidos\").contentType(APPLICATION_JSON).content(\"{}\"))\n   .andExpect(status().isBadRequest())\n   .andExpect(jsonPath(\"$.detail\").exists());",pr:"Teste os quatro casos do mesmo endpoint: sucesso, corpo malformado, campo ausente e content-type errado."},
 {t:"Testcontainers",x:"a dependência real",oq:"Sobe PostgreSQL ou RabbitMQ num container efêmero com a versão de produção, e derruba no fim do teste.",ps:"Pegar o que nenhum dublê reproduz: dialeto de SQL, migration, redelivery.",cf:"@ServiceConnection faz o Boot apontar as propriedades para o container automaticamente.",ex:"@Container @ServiceConnection\nstatic PostgreSQLContainer<?> db = new PostgreSQLContainer<>(\"postgres:16\");",ar:"Usar H2 para validar SQL específico de Postgres: o teste passa e a produção quebra."},
 {t:"Testes determinísticos",x:"nada de flaky",oq:"Teste instável é pior que teste ausente: o time começa a ignorar o vermelho e a suíte perde a função.",ps:"Manter a confiança de que vermelho significa problema real.",cf:"As quatro fontes de instabilidade: relógio real, ordem de execução, sleep arbitrário e rede externa.",ex:"// em vez de Thread.sleep(500):\nawait().atMost(2, SECONDS).until(() -> repo.contar() == 1);",ar:"Depender de dados deixados por outro teste: passa isolado e falha em ordem aleatória."}
]},
{g:"13",n:"Produção e operação",s:"o que separa quem escreve de quem sustenta",c:"var(--teal)",cs:"var(--teal-soft)",items:[
 {t:"Actuator",x:"a porta de operação",oq:"Expõe endpoints operacionais: saúde, métricas, propriedades efetivas, mapeamentos e passos do startup.",ps:"Responder perguntas sobre a aplicação em execução sem adivinhar.",cf:"Cada endpoint é um bean; a exposição é opt-in e precisa de proteção quando sai do localhost.",ex:"management.endpoints.web.exposure.include=health,info,metrics,prometheus",ar:"Expor /actuator/env ou /configprops sem autenticação: é o mapa da sua configuração, segredos incluídos."},
 {t:"Liveness e readiness",x:"perguntas diferentes",oq:"Liveness responde se o processo está sadio; readiness responde se ele pode receber tráfego agora. O orquestrador reage de formas opostas a cada uma.",ps:"Evitar restart em cascata quando uma dependência oscila.",cf:"Readiness falhando tira o pod do balanceador. Liveness falhando MATA e recria o container.",ex:"management.endpoint.health.probes.enabled=true\n# /actuator/health/liveness  e  /actuator/health/readiness",dg:"probe",ar:"Colocar dependência externa no liveness: o banco oscila e o orquestrador mata todos os pods de uma vez."},
 {t:"Métricas com Micrometer",x:"taxa, erro, duração",oq:"Micrometer é a camada de abstração de métricas — o SLF4J desse mundo. Você instrumenta uma vez e exporta para qualquer backend.",ps:"Responder quatro perguntas: quantas requisições, quantas falharam, quanto demoraram e quão perto do limite estamos.",cf:"Contadores, timers e gauges viram séries temporais; cada valor distinto de label cria uma série nova.",ex:"registry.counter(\"orders.created\", \"canal\", canal).increment();",ar:"ID de usuário como label: com um milhão de usuários você derruba o sistema de monitoramento."},
 {t:"Logs estruturados e traceId",x:"achar a ocorrência",oq:"Log com placeholders e nível correto, mais um identificador de correlação em toda linha da mesma requisição.",ps:"Investigar um caso específico entre milhares.",cf:"O MDC guarda o traceId por thread; o padrão de log o inclui em cada linha automaticamente.",ex:"log.info(\"pedido {} mudou para {}\", id, status);\nMDC.put(\"traceId\", traceId);",ar:"Log de stack trace duplicado, no catch e de novo no advice: o volume explode e a informação some."},
 {t:"Tracing distribuído",x:"onde o tempo foi",oq:"Trace conecta os spans de uma requisição que atravessa vários serviços, mostrando onde o tempo foi gasto.",ps:"Provar que a lentidão veio da dependência, não do seu código.",cf:"O contexto de trace é propagado por header; cada serviço acrescenta seus spans à mesma árvore.",ex:"// HTTP → JDBC → RabbitMQ com o mesmo traceId nos três\nmanagement.tracing.sampling.probability=0.1"},
 {t:"Startup e performance",x:"subir rápido",oq:"Tempo de startup importa em orquestrador: ele mede readiness e reinicia o que demora. Boa parte do tempo costuma estar em poucos passos.",ps:"Reduzir janela de indisponibilidade em rolling update e em escala automática.",cf:"BufferingApplicationStartup mostra os passos caros; lazy initialization e AOT/native atacam o problema por caminhos diferentes.",ex:"spring.main.lazy-initialization=true   # dev; em produção, meça antes",ar:"Ligar lazy initialization em produção sem medir: o custo só se move para a primeira requisição de cada caminho."},
 {t:"Shutdown gracioso",x:"fechar a loja direito",oq:"No SIGTERM, a aplicação para de aceitar conexões novas, drena as em andamento, encerra listeners e só então fecha os recursos.",ps:"Fazer deploy sem cortar requisição de cliente.",cf:"O readiness cai primeiro para o balanceador parar de mandar tráfego; depois o servidor drena dentro do timeout configurado.",ex:"server.shutdown=graceful\nspring.lifecycle.timeout-per-shutdown-phase=20s",dg:"shut",ar:"Encerrar o listener do broker antes de drenar: mensagens em voo voltam para a fila sem ack e podem ser processadas duas vezes."}
]}
,
{g:"14",n:"Como aprender de verdade",s:"o ciclo que fixa, fontes que valem e laboratórios reais",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"O ciclo que faz o conhecimento grudar",x:"desmonte a abstração",oq:"Alternar entre consumo teórico ativo, inspeção de código-fonte na IDE e construção com falha provocada.",ps:"Evitar a ilusão de competência do tutorial hell e entender a mecânica interna real por trás das anotações.",cf:"Desmonte a abstração escrevendo na mão primeiro; provoque o bug intencionalmente (ex: auto-invocação no @Transactional); e anote com suas próprias palavras. Erro comum: achar que entender o vídeo equivale a saber diagnosticar bugs em produção.",ex:"// ciclo:\n// 1. ler o conceito\n// 2. abrir a classe do Spring na IDE\n// 3. provocar a falha de propósito\n// 4. explicar com suas palavras"},
 {t:"Canais e cursos em português",x:"fontes de alta densidade",oq:"Curadoria das melhores referências técnicas em português e internacional focadas na mecânica interna do Spring e JVM.",ps:"Construir o modelo mental no seu idioma com criadores que ensinam a arquitetura real em vez de CRUD superficial.",cf:"RinaldoDev (JVM, concorrência e boas práticas), Alexandre Aquiles / Alura (arquitetura e clean code), Michelli Brito (ecossistema Spring Boot na prática) e Baeldung (guias pontuais de referência). Erro comum: colecionar cursos inacabados sem digitar uma única linha de código autoral.",ex:"# referências:\n# RinaldoDev: JVM, concorrência e Java moderno\n# Michelli Brito: Spring Boot e microsserviços na prática\n# Alexandre Aquiles: arquitetura e boas práticas\n# docs: spring.io/guides, baeldung.com"},
 {t:"Como pesquisar e o que praticar",x:"diagnóstico e 3 projetos reais",oq:"Formulação de buscas cirúrgicas com nomes de classes e exceptions nativas, e 3 mini-projetos de padrão sênior no GitHub.",ps:"Desenvolver autonomia para resolver incidentes em produção e comprovar senioridade prática no portfólio.",cf:"Combine classe interna + exception + versão do Boot na busca. Para portfólio: 1) Checkout com idempotência e lock pessimista; 2) Worker resiliente RabbitMQ/DLQ com Toxiproxy; 3) Starter customizado com autoconfiguração. Erro comum: só ter projetos de CRUD padrão sem tratamento de concorrência ou falhas de rede.",ex:"# busca cirúrgica:\n\"TransactionInterceptor\" \"UnexpectedRollbackException\" \"Spring Boot 3.2\"\n# projetos:\n# 1. Checkout idempotente + Redis/Postgres\n# 2. Worker RabbitMQ + DLQ + retry\n# 3. Custom starter com OpenTelemetry"}
]}
];

/* ================== NAVEGAÇÃO (trilha + conteúdo) ================== */
var nav=document.getElementById("nav");
var navMap={};
function navHead(txt){var a=document.createElement("a");a.className="sec";a.style.color="var(--soft)";a.style.marginTop="18px";a.style.fontSize=".68rem";a.textContent=txt;nav.appendChild(a);}
/* ================== TRILHA ================== */
var flat=[];T.forEach(function(g){g.items.forEach(function(it){it._g=g;flat.push(it);});});
flat.forEach(function(it,i){it._i=i;it._id=it.t.toLowerCase().replace(/[^a-z0-9]+/g,'-');});
var KEYT="spring-completo-CL-trilha-v1";
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
  if(it.ar)h+='<div class="blk"><h4>Armadilha</h4><p class="warn">'+it.ar+'</p></div>';
  if(it.pr)h+='<div class="blk"><h4>Pratique</h4><p>'+it.pr+'</p></div>';
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
var KEYM="spring-completo-CL-conteudo-v1";
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
 var RK="spring-completo-CL-rev-v1";
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

// Spring Proxy Simulator Controller
(function(){
  var lab=document.getElementById("proxyLab");
  if(!lab)return;
  var nodes=[
    document.getElementById("pn1"),
    document.getElementById("pn2"),
    document.getElementById("pn3"),
    document.getElementById("pn4"),
    document.getElementById("pn5")
  ];
  var hud=document.getElementById("proxyHud");
  var btn1=document.getElementById("btnProxyOk");
  var btn2=document.getElementById("btnProxyBypass");
  var btn3=document.getElementById("btnProxyRollback");
  var btnReset=document.getElementById("btnProxyReset");
  var timer=null;

  function clearState(){
    if(timer)clearTimeout(timer);
    nodes.forEach(function(n){
      if(!n)return;
      n.className="pl-node";
    });
  }

  function setHud(lines){
    if(!hud)return;
    hud.innerHTML=lines.map(function(l){
      return '<div class="ph-l '+(l.cls||"ph-info")+'">'+l.txt+'</div>';
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
      {node:0, logs:[{cls:"ph-info",txt:"[Client] OrderController invoca método orderService.processarPagamento()."}], delay:700},
      {node:1, status:"ok", logs:[{cls:"ph-ok",txt:"[CGLIB Proxy] A referência injetada é OrderService$SpringCGLIB$0. A interceptação captura a chamada!"}], delay:800},
      {node:2, status:"ok", logs:[{cls:"ph-ok",txt:"[TransactionInterceptor] DataSourceTransactionManager obtém conexão JDBC e desativa auto-commit (BEGIN TRANSACTION)."}], delay:850},
      {node:3, status:"ok", logs:[{cls:"ph-info",txt:"[Target Object] Delega ao método real na instância alvo. Regra de negócio executa insert/update no banco."}], delay:800},
      {node:4, status:"ok", logs:[{cls:"ph-ok",txt:"✅ [Commit Transacional] Sucesso. Proxy retoma o controle e comita a transação com segurança no PostgreSQL!"}], delay:500}
    ]);
  });

  if(btn2) btn2.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"ph-info",txt:"[Client] Chama orderService.criarPedido() (método público SEM @Transactional)."}], delay:700},
      {node:1, status:"warn", logs:[{cls:"ph-warn",txt:"[CGLIB Proxy] criarPedido() não tem anotações ativas. Proxy repassa diretamente ao target."}], delay:750},
      {node:3, status:"err", logs:[{cls:"ph-err",txt:"⚠️ [AUTO-INVOCAÇÃO / THIS] Dentro de criarPedido(), o código faz: this.salvarComTransacao()!"}], delay:850},
      {node:2, status:"err", logs:[{cls:"ph-err",txt:"💥 [PROXY BYPASSED] 'this' aponta para o objeto cru na memória heap, NÃO para o Proxy CGLIB! TransactionInterceptor NUNCA foi chamado."}], delay:900},
      {node:4, status:"err", logs:[{cls:"ph-err",txt:"☠️ [FALHA SILENCIOSA] salvarComTransacao() rodou com auto-commit=true da conexão JDBC. Nenhuma transação gerenciada pelo Spring foi aberta! Em caso de erro, nenhum rollback ocorrerá."}], delay:500}
    ]);
  });

  if(btn3) btn3.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"ph-info",txt:"[Client] Chama orderService.atualizarRegistro() anotado com @Transactional default."}], delay:700},
      {node:1, status:"ok", logs:[{cls:"ph-ok",txt:"[CGLIB Proxy] Interceptação normal ativa. Transação iniciada com sucesso."}], delay:750},
      {node:3, status:"warn", logs:[{cls:"ph-warn",txt:"[Target Object] Método lança SQLException ou IOException (Checked Exception)."}], delay:800},
      {node:2, status:"warn", logs:[{cls:"ph-warn",txt:"⚠️ [Regra do Spring] Por padrão, o Spring só faz rollback para RuntimeException e Error! Para exceções checadas, ele prossegue com COMMIT!"}], delay:900},
      {node:4, status:"warn", logs:[{cls:"ph-warn",txt:"🔍 [Pegadinha de Produção] O dado com erro foi persistido no banco! Correção: use sempre @Transactional(rollbackFor = Exception.class)."}], delay:500}
    ]);
  });

  if(btnReset) btnReset.addEventListener("click",function(){
    clearState();
    setHud([{cls:"ph-info",txt:"[Spring IoC Ativo] Escolha um cenário para rastrear a execução do Dynamic Proxy em runtime..."}]);
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

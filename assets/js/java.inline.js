/* Extraido de trilhas/java.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 4 ---------- */

function W(h,inner){return '<figure class="dg"><svg viewBox="0 0 340 '+h+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg></figure>';}
var DG={
 jvm:W(96,'<rect x="6" y="30" width="62" height="34" rx="7" class="sf"/><text x="37" y="45" class="bt">.java</text><text x="37" y="57" class="bs">código</text><path d="M68,47 L88,47" class="ln"/><path d="M88,47 L82,44 L82,50 Z" class="hd"/><text x="78" y="38" class="bs">javac</text><rect x="90" y="30" width="66" height="34" rx="7" class="sf"/><text x="123" y="45" class="bt">.class</text><text x="123" y="57" class="bs">bytecode</text><path d="M156,47 L176,47" class="ln"/><path d="M176,47 L170,44 L170,50 Z" class="hd"/><rect x="178" y="22" width="70" height="50" rx="8" class="sf"/><text x="213" y="40" class="bt">JVM</text><text x="213" y="53" class="bs">interpreta</text><text x="213" y="64" class="bs">+ JIT</text><path d="M248,47 L268,47" class="ln"/><path d="M268,47 L262,44 L262,50 Z" class="hd"/><rect x="270" y="30" width="64" height="34" rx="7" class="sf"/><text x="302" y="51" class="bt">nativo</text><text x="170" y="88" class="bs">mesmo .class roda em qualquer SO com JVM</text>'),
 mem:W(120,'<rect x="8" y="20" width="96" height="86" rx="9" class="sf"/><text x="56" y="38" class="bt">STACK</text><text x="56" y="54" class="bs">por thread</text><text x="56" y="70" class="bs">locais,</text><text x="56" y="84" class="bs">primitivos</text><text x="56" y="99" class="bs">some no return</text><rect x="120" y="20" width="120" height="86" rx="9" class="sf"/><text x="180" y="38" class="bt">HEAP</text><text x="180" y="56" class="bs">todos os objetos</text><text x="180" y="72" class="bs">compartilhado</text><text x="180" y="88" class="bs">domínio do GC</text><rect x="252" y="20" width="80" height="86" rx="9" class="sf"/><text x="292" y="38" class="bt">METASPACE</text><text x="292" y="58" class="bs">metadados</text><text x="292" y="74" class="bs">de classe</text><path d="M104,64 L118,64" class="ln dash"/><text x="111" y="58" class="bs">ref</text>'),
 hash:W(120,'<rect x="8" y="46" width="86" height="30" rx="7" class="sf"/><text x="51" y="60" class="bt">hashCode()</text><text x="51" y="71" class="bs">+ espalha</text><path d="M94,61 L112,61" class="ln"/><path d="M112,61 L106,58 L106,64 Z" class="hd"/><rect x="114" y="22" width="44" height="18" rx="4" class="bx"/><text x="136" y="35" class="bs">[0]</text><rect x="114" y="44" width="44" height="18" rx="4" class="sf"/><text x="136" y="57" class="bs">[1]</text><rect x="114" y="66" width="44" height="18" rx="4" class="bx"/><text x="136" y="79" class="bs">[2]</text><rect x="114" y="88" width="44" height="18" rx="4" class="bx"/><text x="136" y="101" class="bs">[3]</text><path d="M158,53 L176,53" class="ln"/><path d="M176,53 L170,50 L170,56 Z" class="hd"/><rect x="178" y="40" width="52" height="26" rx="6" class="sf"/><text x="204" y="57" class="bs">par A</text><path d="M230,53 L246,53" class="ln"/><path d="M246,53 L240,50 L240,56 Z" class="hd"/><rect x="248" y="40" width="52" height="26" rx="6" class="sf"/><text x="274" y="57" class="bs">par B</text><text x="236" y="82" class="bs">colisão = lista → vira árvore se ≥8</text>'),
 stream:W(96,'<rect x="6" y="34" width="52" height="30" rx="7" class="sf"/><text x="32" y="53" class="bt">fonte</text><path d="M58,49 L76,49" class="ln"/><path d="M76,49 L70,46 L70,52 Z" class="hd"/><rect x="78" y="34" width="60" height="30" rx="7" class="bx"/><text x="108" y="53" class="bt">filter</text><path d="M138,49 L156,49" class="ln"/><path d="M156,49 L150,46 L150,52 Z" class="hd"/><rect x="158" y="34" width="58" height="30" rx="7" class="bx"/><text x="187" y="53" class="bt">map</text><path d="M216,49 L234,49" class="ln"/><path d="M234,49 L228,46 L228,52 Z" class="hd"/><rect x="236" y="28" width="98" height="42" rx="8" class="sf"/><text x="285" y="46" class="bt">collect()</text><text x="285" y="60" class="bs">TERMINAL: dispara</text><text x="170" y="86" class="bs">preguiçoso: nada roda antes do terminal</text>'),
 vt:W(110,'<rect x="8" y="30" width="86" height="34" rx="8" class="sf"/><text x="51" y="46" class="bt">virtual thread</text><text x="51" y="58" class="bs">no carrier</text><path d="M94,47 L112,47" class="ln"/><path d="M112,47 L106,44 L106,50 Z" class="hd"/><text x="103" y="38" class="bs">I/O</text><rect x="114" y="30" width="90" height="34" rx="8" class="sf"/><text x="159" y="46" class="bt">desmonta</text><text x="159" y="58" class="bs">pilha → heap</text><path d="M204,47 L222,47" class="ln"/><path d="M222,47 L216,44 L216,50 Z" class="hd"/><rect x="224" y="30" width="108" height="34" rx="8" class="sf"/><text x="278" y="46" class="bt">carrier livre</text><text x="278" y="58" class="bs">roda outra VT</text><path d="M278,64 C278,88 51,88 51,66" class="ln dash"/><path d="M51,66 L48,72 L54,72 Z" class="hd"/><text x="165" y="100" class="bs">terminou o I/O → remonta e continua</text>'),
 jmm:W(110,'<rect x="6" y="28" width="94" height="46" rx="8" class="sf"/><text x="53" y="46" class="bt">Thread A</text><text x="53" y="62" class="bs">pronto = true</text><rect x="122" y="34" width="96" height="34" rx="8" class="bx"/><text x="170" y="49" class="bt">memória</text><text x="170" y="61" class="bs">principal</text><rect x="240" y="28" width="94" height="46" rx="8" class="sf"/><text x="287" y="46" class="bt">Thread B</text><text x="287" y="62" class="bs">cache: false</text><path d="M100,50 L120,50" class="ln dash"/><path d="M218,50 L238,50" class="ln dash"/><text x="170" y="94" class="bs">sem volatile/lock: B pode nunca ver a mudança</text>'),
 cas:W(104,'<rect x="8" y="20" width="104" height="26" rx="6" class="sf"/><text x="60" y="37" class="bs">lê valor atual (X)</text><path d="M60,46 L60,58" class="ln"/><path d="M60,58 L57,52 L63,52 Z" class="hd"/><rect x="8" y="58" width="104" height="26" rx="6" class="sf"/><text x="60" y="75" class="bs">CAS(X → Y)</text><path d="M112,66 L146,44" class="ln"/><path d="M112,74 L146,90" class="ln dash"/><rect x="148" y="30" width="100" height="26" rx="6" class="sf"/><text x="198" y="47" class="bs">sucesso ✓</text><rect x="148" y="78" width="100" height="26" rx="6" class="bx"/><text x="198" y="95" class="bs">falhou → repete</text><path d="M248,91 C300,91 300,33 60,20" class="ln dash"/>'),
 gc:W(104,'<rect x="8" y="30" width="150" height="46" rx="9" class="sf"/><text x="83" y="24" class="bs">YOUNG (coleta barata)</text><rect x="16" y="40" width="80" height="26" rx="5" class="bx"/><text x="56" y="57" class="bs">Eden</text><rect x="102" y="40" width="24" height="26" rx="4" class="bx"/><text x="114" y="57" class="bs">S0</text><rect x="130" y="40" width="22" height="26" rx="4" class="bx"/><text x="141" y="57" class="bs">S1</text><path d="M158,53 L180,53" class="ln"/><path d="M180,53 L174,50 L174,56 Z" class="hd"/><text x="169" y="44" class="bs">sobreviveu</text><rect x="182" y="30" width="150" height="46" rx="9" class="sf"/><text x="257" y="24" class="bs">OLD (coleta cara)</text><text x="257" y="57" class="bs">vida longa · full GC</text><text x="170" y="94" class="bs">a maioria dos objetos morre jovem</text>'),
 erase:W(96,'<rect x="8" y="18" width="140" height="24" rx="6" class="sf"/><text x="78" y="34" class="bs">List&lt;String&gt;</text><rect x="8" y="48" width="140" height="24" rx="6" class="sf"/><text x="78" y="64" class="bs">List&lt;Integer&gt;</text><path d="M150,30 L182,42" class="ln"/><path d="M150,60 L182,48" class="ln"/><rect x="186" y="32" width="146" height="26" rx="7" class="sf"/><text x="259" y="49" class="bt">List (crua)</text><text x="170" y="86" class="bs">em runtime o tipo some — daí as limitações</text>'),
 cl:W(90,'<rect x="6" y="30" width="70" height="30" rx="7" class="sf"/><text x="41" y="49" class="bt">loading</text><path d="M76,45 L92,45" class="ln"/><path d="M92,45 L86,42 L86,48 Z" class="hd"/><rect x="94" y="30" width="76" height="30" rx="7" class="sf"/><text x="132" y="45" class="bt">linking</text><text x="132" y="56" class="bs">verifica</text><path d="M170,45 L186,45" class="ln"/><path d="M186,45 L180,42 L180,48 Z" class="hd"/><rect x="188" y="30" width="86" height="30" rx="7" class="sf"/><text x="231" y="45" class="bt">initialization</text><text x="231" y="56" class="bs">static{}</text><text x="170" y="80" class="bs">sob demanda, na 1ª vez que a classe é usada</text>'),
 jit:W(90,'<rect x="6" y="32" width="72" height="30" rx="7" class="sf"/><text x="42" y="51" class="bt">interpreta</text><path d="M78,47 L94,47" class="ln"/><path d="M94,47 L88,44 L88,50 Z" class="hd"/><rect x="96" y="32" width="52" height="30" rx="7" class="sf"/><text x="122" y="51" class="bt">C1</text><path d="M148,47 L164,47" class="ln"/><path d="M164,47 L158,44 L158,50 Z" class="hd"/><rect x="166" y="32" width="52" height="30" rx="7" class="sf"/><text x="192" y="51" class="bt">C2</text><path d="M218,47 L234,47" class="ln"/><path d="M234,47 L228,44 L228,50 Z" class="hd"/><rect x="236" y="32" width="96" height="30" rx="7" class="sf"/><text x="284" y="51" class="bt">nativo otimizado</text><text x="170" y="80" class="bs">quanto mais roda, mais rápido fica (warm-up)</text>'),
 twr:W(84,'<rect x="8" y="24" width="140" height="40" rx="8" class="sf"/><text x="78" y="42" class="bt">try (var r = open())</text><text x="78" y="56" class="bs">usa o recurso</text><path d="M148,44 L176,44" class="ln"/><path d="M176,44 L170,41 L170,47 Z" class="hd"/><rect x="178" y="24" width="154" height="40" rx="8" class="sf"/><text x="255" y="42" class="bt">close() automático</text><text x="255" y="56" class="bs">mesmo com exceção</text><text x="170" y="76" class="bs">sem finally manual, sem vazar recurso</text>'),
 opt:W(80,'<rect x="8" y="26" width="94" height="34" rx="8" class="sf"/><text x="55" y="42" class="bt">Optional&lt;User&gt;</text><text x="55" y="54" class="bs">pode ter ou não</text><path d="M102,36 L128,30" class="ln"/><path d="M102,50 L128,58" class="ln dash"/><rect x="130" y="18" width="90" height="24" rx="6" class="sf"/><text x="175" y="34" class="bs">.map().orElse()</text><rect x="130" y="48" width="90" height="24" rx="6" class="bx"/><text x="175" y="64" class="bs">empty → default</text><text x="272" y="44" class="bs">sem NPE</text>'),
 di:W(112,'<rect x="8" y="20" width="96" height="30" rx="7" class="bx"/><text x="56" y="39" class="bs">new Repo()</text><text x="56" y="62" class="bs" style="fill:var(--red)">acoplado ✗</text><rect x="8" y="72" width="96" height="30" rx="7" class="sf"/><text x="56" y="91" class="bs">inject(Repo)</text><path d="M104,87 L128,87" class="ln"/><path d="M128,87 L122,84 L122,90 Z" class="hd"/><rect x="130" y="52" width="104" height="46" rx="9" class="sf"/><text x="182" y="72" class="bt">CONTAINER</text><text x="182" y="88" class="bs">cria e entrega</text><path d="M234,75 L258,75" class="ln"/><path d="M258,75 L252,72 L252,78 Z" class="hd"/><rect x="260" y="60" width="72" height="30" rx="7" class="sf"/><text x="296" y="79" class="bs">instância</text><text x="180" y="110" class="bs">a classe declara o que precisa; alguém entrega</text>'),
 proxy:W(96,'<rect x="6" y="34" width="66" height="30" rx="7" class="sf"/><text x="39" y="53" class="bs">chamador</text><path d="M72,49 L92,49" class="ln"/><path d="M92,49 L86,46 L86,52 Z" class="hd"/><rect x="94" y="26" width="104" height="46" rx="9" class="sf"/><text x="146" y="44" class="bt">PROXY</text><text x="146" y="59" class="bs">antes / depois</text><path d="M198,49 L218,49" class="ln"/><path d="M218,49 L212,46 L212,52 Z" class="hd"/><rect x="220" y="34" width="112" height="30" rx="7" class="bx"/><text x="276" y="53" class="bs">objeto real</text><text x="170" y="88" class="bs">é assim que @Transactional, log e cache entram</text>'),
 refs:W(104,'<rect x="6" y="24" width="78" height="26" rx="6" class="sf"/><text x="45" y="41" class="bs">strong</text><text x="45" y="62" class="bs">nunca coleta</text><rect x="90" y="24" width="76" height="26" rx="6" class="bx"/><text x="128" y="41" class="bs">soft</text><text x="128" y="62" class="bs">coleta se faltar</text><text x="128" y="74" class="bs">memória</text><rect x="172" y="24" width="76" height="26" rx="6" class="bx"/><text x="210" y="41" class="bs">weak</text><text x="210" y="62" class="bs">coleta no</text><text x="210" y="74" class="bs">próximo GC</text><rect x="254" y="24" width="78" height="26" rx="6" class="bx"/><text x="293" y="41" class="bs">phantom</text><text x="293" y="62" class="bs">só avisa que</text><text x="293" y="74" class="bs">foi coletado</text><text x="170" y="96" class="bs">← mais forte · mais fácil de coletar →</text>'),
 build:W(112,'<rect x="8" y="18" width="120" height="26" rx="6" class="sf"/><text x="68" y="35" class="bs">seu pom/gradle</text><path d="M128,31 L150,31" class="ln"/><path d="M150,31 L144,28 L144,34 Z" class="hd"/><rect x="152" y="18" width="90" height="26" rx="6" class="bx"/><text x="197" y="35" class="bs">lib A v2</text><path d="M197,44 L197,62" class="ln"/><path d="M197,62 L194,56 L200,56 Z" class="hd"/><rect x="140" y="62" width="114" height="24" rx="6" class="bx"/><text x="197" y="78" class="bs">transitiva: lib C v1</text><rect x="262" y="62" width="70" height="24" rx="6" class="sf" style="stroke:var(--red)"/><text x="297" y="78" class="bs" style="fill:var(--red)">conflito!</text><path d="M254,74 L260,74" class="ln"/><text x="170" y="104" class="bs">mvn dependency:tree resolve quem trouxe o quê</text>'),
 fj:W(104,'<rect x="8" y="20" width="94" height="24" rx="6" class="sf"/><text x="55" y="36" class="bs">tarefa grande</text><path d="M55,44 L30,58 M55,44 L80,58" class="ln"/><rect x="4" y="58" width="52" height="22" rx="5" class="bx"/><text x="30" y="73" class="bs">sub 1</text><rect x="60" y="58" width="52" height="22" rx="5" class="bx"/><text x="86" y="73" class="bs">sub 2</text><rect x="140" y="30" width="60" height="22" rx="5" class="sf"/><text x="170" y="45" class="bs">fila W1</text><rect x="140" y="60" width="60" height="22" rx="5" class="bx"/><text x="170" y="75" class="bs">fila W2</text><path d="M200,45 L246,60" class="ln dash"/><path d="M246,60 L239,58 L241,65 Z" class="hd"/><rect x="248" y="48" width="84" height="26" rx="6" class="sf"/><text x="290" y="65" class="bs">rouba trabalho</text><text x="170" y="96" class="bs">work-stealing: quem ficou ocioso pega da fila alheia</text>')
};

var T=[
{g:"01",n:"Plataforma & execução",s:"o chão: como seu código vira programa",c:"var(--teal)",cs:"var(--teal-soft)",items:[
 {t:"JVM · JDK · JRE",x:"a base",oq:"JVM é a máquina virtual que executa bytecode. JDK = ferramentas de desenvolvimento (javac, jcmd) + JRE. JRE = o que basta para rodar.",ps:"Escrever uma vez e rodar em qualquer sistema que tenha uma JVM.",cf:"O javac gera bytecode (.class); a JVM lê esse bytecode, interpreta e compila em nativo o que for quente.",ex:"javac App.java   # gera App.class\njava App         # a JVM executa\njavap -c App     # ver o bytecode gerado",dg:"jvm"},
 {t:"Bytecode",x:"o meio-termo",oq:"Conjunto de instruções da JVM (aload, invokevirtual, ireturn…), guardado no .class.",ps:"Ser portável: o mesmo .class roda em Windows, Linux, Mac.",cf:"Cada instrução opera numa pilha de operandos. É o que a JVM realmente executa.",ex:"javap -c MinhaClasse.class\n// 0: aload_0\n// 1: invokevirtual #7"},
 {t:"ClassLoader",x:"carregamento",oq:"Componente que encontra e carrega classes na JVM, sob demanda.",ps:"Carregar só o necessário e isolar código (plugins, containers, app servers).",cf:"Três fases: loading (lê o .class) → linking (verifica, prepara estáticos, resolve) → initialization (roda o bloco static). Usa delegação: pergunta ao loader pai antes.",ex:"// erro clássico: classe não achada em runtime\n// ClassNotFoundException  -> não estava no classpath\n// NoClassDefFoundError    -> estava na compilação, sumiu depois",dg:"cl"},
 {t:"JIT",x:"performance",oq:"Just-In-Time: compilador que transforma bytecode quente em código nativo enquanto o programa roda.",ps:"Ter a portabilidade do bytecode com velocidade próxima de código nativo.",cf:"Camadas: interpretador → C1 (compila rápido) → C2 (otimiza pesado: inlining, escape analysis). Se uma suposição falha, desotimiza e recompila.",ex:"// por isso benchmark ingênuo mente:\n// as 1as execuções ainda estão interpretadas (warm-up)\n// use JMH para medir de verdade",dg:"jit"},
 {t:"Memória: stack/heap",x:"onde tudo mora",oq:"Stack: uma por thread, guarda locais e primitivos. Heap: compartilhado, guarda todos os objetos. Metaspace: metadados de classe.",ps:"Entender GC, concorrência e vazamentos.",cf:"A variável guarda uma referência (endereço); o objeto vive no heap. Passar objeto = passar a referência.",ex:"int x = 10;              // valor na stack\nPedido p = new Pedido(); // ref na stack, objeto no heap",dg:"mem"},
 {t:"Garbage Collector",x:"memória",oq:"Processo que libera automaticamente objetos sem referência.",ps:"Você não precisa dar free(); o GC recolhe o que ninguém mais aponta.",cf:"Hipótese geracional: objetos morrem jovens. Heap dividido em young (coleta barata/frequente) e old (coleta cara). Coletores: G1 (padrão), ZGC (pausa mínima), Parallel (throughput).",ex:"// 'memory leak' em Java = referência esquecida\nstatic List<Pedido> cache = new ArrayList<>(); // nunca limpo = vaza",dg:"gc"},
 {t:"Escape analysis",x:"otimização",oq:"Análise do JIT que descobre se um objeto 'escapa' do método onde foi criado.",ps:"Evitar alocação no heap — objetos que não escapam podem ir para a stack ou sumir.",cf:"Se o objeto não é visível fora do método, o JIT pode eliminá-lo (scalar replacement). Por isso criar objetos pequenos e curtos é barato.",ex:"// esse Point provavelmente nem é alocado:\ndouble dist(){ var p = new Point(1,2); return p.norm(); }"},
 {t:"invokedynamic",x:"como lambda vira código",oq:"Instrução de bytecode que resolve a chamada na primeira execução, em vez de na compilação.",ps:"É como lambdas e concatenação de String são implementadas — sem gerar uma classe por lambda.",cf:"O javac emite invokedynamic apontando para um bootstrap (LambdaMetafactory). Na 1ª chamada, ele constrói o objeto da função e amarra o call site. Por isso lambda ≠ classe anônima.",ex:"// javap -c mostra:\n// invokedynamic #2, 0  // apply()Ljava/util/function/Function;\nFunction<Integer,Integer> f = x -> x*2;"},
 {t:"javaagent & instrumentation",x:"bytecode em runtime",oq:"Mecanismo que permite um agente interceptar e reescrever classes no momento em que são carregadas.",ps:"É como APMs (New Relic, Datadog), profilers e algumas libs de mock funcionam sem você mudar código.",cf:"O agente registra um ClassFileTransformer via java.lang.instrument; a JVM chama o transformer antes de definir a classe.",ex:"java -javaagent:/opt/apm.jar -jar app.jar\n// premain(String args, Instrumentation inst)"},
 {t:"Flags da JVM & container",x:"produção",oq:"Parâmetros que controlam heap, GC e comportamento da JVM.",ps:"Evitar OOM e desperdício de memória em container (Docker/ECS/K8s).",cf:"A JVM moderna respeita limites do container (UseContainerSupport). Prefira MaxRAMPercentage a -Xmx fixo em container, deixando margem para memória nativa (Metaspace, threads, buffers).",ex:"java -XX:MaxRAMPercentage=75 \\\n     -XX:+UseG1GC \\\n     -Xlog:gc*:file=gc.log -jar app.jar"},
 {t:"jlink · jpackage · Native",x:"distribuição",oq:"jlink monta um runtime mínimo; jpackage gera instalador; GraalVM native-image gera binário nativo.",ps:"Imagens menores, startup mais rápido, menos memória — importante em serverless e containers.",cf:"jlink usa os módulos (JPMS) para incluir só o necessário. Native image faz AOT: compila tudo antes, sobe em milissegundos, mas exige configuração para reflection.",ex:"jlink --add-modules java.base,java.net.http \\\n      --output runtime-min\n# native-image -jar app.jar"}
]},
{g:"02",n:"Tipos & objetos",s:"como o compilador pensa",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"equals & hashCode",x:"contrato",oq:"equals compara valor; hashCode devolve um int usado por coleções hash. == compara referência.",ps:"Fazer objetos funcionarem corretamente em HashMap, HashSet e comparações.",cf:"Contrato: se a.equals(b), então a.hashCode()==b.hashCode(). Quebrar isso faz o objeto 'sumir' do HashMap.",ex:"// bug clássico: mutar campo do hashCode depois de inserir\nSet<P> s = new HashSet<>(); s.add(p);\np.setId(99);           // hash mudou\ns.contains(p);         // false! virou fantasma"},
 {t:"Imutabilidade",x:"design",oq:"Objeto cujo estado não muda após criado.",ps:"Thread-safety de graça, seguro como chave de mapa, cacheável sem medo.",cf:"Campos final e privados, sem setters, cópia defensiva de coleções/datas na entrada e saída. Ou simplesmente use record.",ex:"record Cpf(String valor) {\n  Cpf { if (valor.length()!=11) throw new IllegalArgumentException(); }\n}"},
 {t:"Record",x:"dados",oq:"Classe de dados imutável: o compilador gera construtor, acessores, equals, hashCode e toString.",ps:"Eliminar boilerplate em DTOs, chaves, retornos de múltiplos valores.",cf:"É final, os campos são final. Compact constructor permite validar sem repetir os campos.",ex:"record Pedido(Long id, BigDecimal total) {\n  Pedido { Objects.requireNonNull(total); }\n}\nvar p = new Pedido(1L, TEN);\np.total();   // acessor tem o nome do campo"},
 {t:"Sealed classes",x:"hierarquia",oq:"Classe/interface que declara exatamente quem pode estendê-la (permits).",ps:"Fechar o conjunto de casos possíveis — o compilador passa a conhecer todos.",cf:"Combina com switch: com hierarquia selada, o switch é exaustivo e dispensa default. Adicionou um caso? o compilador acusa onde falta tratar.",ex:"sealed interface Forma permits Circulo, Quadrado {}\nrecord Circulo(double r) implements Forma {}\nrecord Quadrado(double l) implements Forma {}"},
 {t:"Pattern matching",x:"expressividade",oq:"Casar o objeto por tipo/forma, extraindo os dados no mesmo passo.",ps:"Substituir cadeias de instanceof + cast por código direto e seguro.",cf:"Funciona em instanceof e em switch, com desconstrução de record e guardas (when).",ex:"String d = switch (f) {\n  case Circulo(var r) when r > 10 -> \"círculo grande\";\n  case Circulo(var r) -> \"círculo \" + r;\n  case Quadrado(var l) -> \"quadrado \" + l;\n};"},
 {t:"Generics",x:"tipos",oq:"Parâmetros de tipo (&lt;T&gt;) que deixam classes e métodos funcionarem com vários tipos sem perder a checagem.",ps:"Reuso com segurança de tipo — diferente de Object/any, o tipo atravessa a chamada.",cf:"O compilador checa e insere casts. Restrições com extends: &lt;T extends Number&gt;.",ex:"static <T extends Comparable<T>> T maior(T a, T b){\n  return a.compareTo(b) >= 0 ? a : b;\n}"},
 {t:"Type erasure",x:"pegadinha",oq:"Os tipos genéricos são apagados na compilação: List&lt;String&gt; e List&lt;Integer&gt; viram a mesma List em runtime.",ps:"Foi a escolha para manter compatibilidade com código pré-Java 5.",cf:"Consequências: não dá new T[], nem instanceof List&lt;String&gt;, nem sobrecarregar métodos que só diferem no genérico.",ex:"// por isso frameworks usam esse truque:\nnew TypeReference<List<User>>(){}   // a subclasse anônima grava o tipo",dg:"erase"},
 {t:"Wildcards (PECS)",x:"variância",oq:"? extends T (só leitura) e ? super T (só escrita) para flexibilizar genéricos com segurança.",ps:"Aceitar List&lt;Integer&gt; onde se espera 'lista de números', sem abrir buraco de tipo.",cf:"PECS: Producer Extends, Consumer Super. Você lê de quem produz, escreve em quem consome.",ex:"static <T> void copiar(List<? extends T> origem, List<? super T> destino){\n  for (T x : origem) destino.add(x);\n}"},
 {t:"Optional",x:"ausência",oq:"Contêiner que representa 'pode ter um valor, pode não ter'.",ps:"Tornar a ausência explícita no tipo, em vez de devolver null silencioso.",cf:"Encadeia com map/filter/orElse. Use como retorno de método — não como campo nem parâmetro.",ex:"repo.findById(id)\n    .map(Pedido::total)\n    .orElse(BigDecimal.ZERO);",dg:"opt"},
 {t:"Enum",x:"tipos fixos",oq:"Tipo com conjunto fixo de instâncias, que pode ter campos e métodos.",ps:"Representar estados/opções finitas com segurança (em vez de String ou int).",cf:"Cada constante é um objeto singleton. Funciona em switch e é ideal em EnumMap/EnumSet.",ex:"enum Status {\n  PAGO(true), PENDENTE(false);\n  private final boolean fechado;\n  Status(boolean f){ this.fechado = f; }\n  boolean fechado(){ return fechado; }\n}"},
 {t:"Annotations",x:"metadados",oq:"Marcações (@Override, @Entity) que anexam metadados a classes, métodos e campos.",ps:"Deixar frameworks configurarem comportamento sem XML.",cf:"A anotação sozinha não faz nada: alguém a lê (compilador, processador de anotação, ou o framework via reflection em runtime).",ex:"@Retention(RUNTIME) @Target(METHOD)\n@interface Auditar { String valor(); }"},
 {t:"Reflection",x:"runtime",oq:"API para inspecionar e manipular classes, métodos e campos em tempo de execução.",ps:"É como Spring, Jackson e JUnit descobrem seu código e agem sobre ele.",cf:"Class.forName, getDeclaredMethods, setAccessible. Custa performance e quebra encapsulamento — use com parcimônia no seu código.",ex:"for (Method m : c.getDeclaredMethods())\n  if (m.isAnnotationPresent(Auditar.class))\n    m.invoke(instancia);"},
 {t:"Métodos de Object",x:"herdado por tudo",oq:"Toda classe herda equals, hashCode, toString, getClass, clone, wait/notify.",ps:"São o contrato mínimo que coleções, debug e concorrência assumem.",cf:"toString bom acelera debug e log; clone é problemático (prefira construtor de cópia ou record); wait/notify é a API antiga de coordenação (hoje use Lock/Condition).",ex:"@Override public String toString(){\n  return \"Pedido[id=%d, total=%s]\".formatted(id, total);\n}"},
 {t:"Sobrecarga vs sobrescrita",x:"dispatch",oq:"Sobrecarga (overload) = mesmo nome, parâmetros diferentes, resolvida na COMPILAÇÃO pelo tipo declarado. Sobrescrita (override) = mesma assinatura na subclasse, resolvida em RUNTIME pelo tipo real.",ps:"Explica resultados 'estranhos' quando você passa null ou usa tipo declarado genérico.",cf:"Overload olha o tipo estático da variável; override olha o objeto de verdade (dispatch dinâmico via tabela de métodos).",ex:"void f(Object o){}\nvoid f(String s){}\nObject x = \"txt\";\nf(x);   // chama f(Object) — decidido na compilação!"},
 {t:"Cópia defensiva",x:"proteção",oq:"Copiar coleções/objetos mutáveis ao receber e ao devolver.",ps:"Impedir que quem chamou altere o estado interno do seu objeto por fora.",cf:"Sem isso, a imutabilidade é falsa: guardar a mesma referência que veio de fora deixa o objeto exposto a mudanças.",ex:"Pedido(List<Item> itens){\n  this.itens = List.copyOf(itens);   // cópia imutável\n}\nList<Item> itens(){ return itens; }  // já é imutável"},
 {t:"null & Objects",x:"defesa",oq:"Utilitários e práticas para lidar com ausência: Objects.requireNonNull, requireNonNullElse, Optional.",ps:"Falhar cedo e com mensagem clara, em vez de um NPE no meio do fluxo.",cf:"Valide na fronteira (construtor/entrada da API). Nunca retorne null em coleção — devolva lista vazia.",ex:"this.nome = Objects.requireNonNull(nome, \"nome é obrigatório\");\nreturn itens == null ? List.of() : itens;"}
]},
{g:"03",n:"Coleções",s:"as estruturas do dia a dia",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"List · Set · Map",x:"a base",oq:"List: ordenada, aceita repetidos. Set: sem repetidos. Map: pares chave→valor.",ps:"Escolher a estrutura pela pergunta que você mais faz nos dados.",cf:"List por índice, Set por pertencimento, Map por chave. Cada uma tem implementações com custos diferentes.",ex:"List<String> l = new ArrayList<>();\nSet<String> s = new HashSet<>();\nMap<Long,Pedido> m = new HashMap<>();"},
 {t:"ArrayList vs LinkedList",x:"custo",oq:"ArrayList usa array interno; LinkedList usa nós encadeados.",ps:"ArrayList vence quase sempre na prática.",cf:"ArrayList: O(1) por índice, ótimo para CPU (memória contígua). LinkedList: bom só em inserção/remoção no meio com iterador — e ainda perde para ArrayDeque em fila/pilha.",ex:"// fila/pilha: use ArrayDeque, não LinkedList\nDeque<Task> fila = new ArrayDeque<>();"},
 {t:"HashMap por dentro",x:"internals",oq:"Array de buckets onde a chave é localizada pelo hash.",ps:"Entender custo, colisões e por que o hashCode importa.",cf:"hash → índice do bucket. Colisão vira lista encadeada; lista ≥8 (com capacidade suficiente) vira árvore (O(log n)). Passou de 75% da capacidade → resize (dobra e re-espalha).",ex:"// se você sabe o tamanho, evite resizes:\nvar m = new HashMap<Long,Pedido>(10_000);",dg:"hash"},
 {t:"TreeMap · ordenação",x:"ordem",oq:"Map baseado em árvore balanceada que mantém as chaves ordenadas.",ps:"Consultas por faixa (de X até Y), primeiro/último, ordem natural.",cf:"O(log n) nas operações. Usa Comparable da chave ou um Comparator fornecido.",ex:"var t = new TreeMap<LocalDate,Venda>();\nt.subMap(inicio, fim);   // faixa\nt.firstKey();"},
 {t:"Comparable vs Comparator",x:"ordenar",oq:"Comparable: a ordem natural, dentro da própria classe. Comparator: uma ordem externa, feita sob medida.",ps:"Ordenar listas e alimentar estruturas ordenadas.",cf:"Comparator compõe: comparing().thenComparing().reversed().",ex:"lista.sort(Comparator.comparing(Pedido::data)\n        .thenComparing(Pedido::total).reversed());"},
 {t:"Coleções concorrentes",x:"threads",oq:"Implementações seguras para uso simultâneo: ConcurrentHashMap, BlockingQueue, CopyOnWriteArrayList.",ps:"Compartilhar dados entre threads sem escrever locks na mão.",cf:"ConcurrentHashMap trava por nó/segmento (não o mapa todo) e tem operações atômicas (compute, merge). BlockingQueue resolve produtor-consumidor.",ex:"var contagem = new ConcurrentHashMap<String,Integer>();\ncontagem.merge(chave, 1, Integer::sum);   // atômico"},
 {t:"Iterator & fail-fast",x:"percorrer",oq:"Objeto que percorre uma coleção; fail-fast lança ConcurrentModificationException se a coleção mudar durante a iteração.",ps:"Detectar cedo um bug de modificação concorrente/indevida.",cf:"Para remover durante a iteração, use it.remove() ou removeIf.",ex:"lista.removeIf(p -> p.cancelado());   // certo\n// for (P p : lista) lista.remove(p);  // CME!"},
 {t:"Coleções imutáveis",x:"segurança",oq:"List.of, Map.of, Set.of e List.copyOf criam coleções que não podem ser alteradas.",ps:"Compartilhar sem risco, usar como constante, garantir imutabilidade real.",cf:"Lançam UnsupportedOperationException em qualquer modificação e não aceitam null. São mais compactas em memória que as mutáveis.",ex:"static final Set<String> UF = Set.of(\"SP\",\"RJ\",\"MG\");\nvar copia = List.copyOf(originais);   // snapshot imutável"},
 {t:"EnumMap & EnumSet",x:"performance",oq:"Implementações especializadas para chaves enum.",ps:"Muito mais rápidas e compactas que HashMap/HashSet quando a chave é enum.",cf:"EnumMap usa um array indexado pelo ordinal; EnumSet usa bitmask. Operações viram aritmética de bits.",ex:"var porStatus = new EnumMap<Status,List<Pedido>>(Status.class);\nvar abertos = EnumSet.of(NOVO, PENDENTE);"},
 {t:"Coleções + referências fracas",x:"cache",oq:"WeakHashMap guarda chaves com referência fraca: se ninguém mais aponta para a chave, a entrada some no GC.",ps:"Caches e metadados que não devem impedir a coleta do objeto.",cf:"Cuidado: o valor guarda referência forte — se o valor apontar de volta para a chave, nada é coletado. Para cache de verdade, prefira Caffeine.",ex:"Map<Classe,Metadados> cache = new WeakHashMap<>();"}
]},
{g:"04",n:"Funcional & Streams",s:"comportamento como valor",c:"var(--blue)",cs:"var(--blue-soft)",items:[
 {t:"Lambda",x:"sintaxe",oq:"Função anônima curta: (a, b) -> a + b.",ps:"Passar comportamento como argumento, sem classe anônima.",cf:"Só funciona onde se espera uma interface funcional (um único método abstrato).",ex:"Runnable r = () -> System.out.println(\"oi\");\nlista.sort((a,b) -> a.idade() - b.idade());"},
 {t:"Interfaces funcionais",x:"contratos",oq:"Interfaces com um método abstrato: Function, Predicate, Consumer, Supplier, BiFunction.",ps:"Dar tipo às lambdas — cada forma de função tem sua interface.",cf:"Function<T,R> transforma; Predicate<T> testa; Consumer<T> consome; Supplier<T> produz.",ex:"Predicate<Pedido> pago = p -> p.status() == PAGO;\nFunction<Pedido,BigDecimal> total = Pedido::total;"},
 {t:"Method reference",x:"atalho",oq:"Forma curta de lambda que só chama um método existente: Pedido::total.",ps:"Deixar o código mais limpo quando a lambda é só um encaminhamento.",cf:"Quatro formas: static, de instância, de um tipo arbitrário, e construtor (Pedido::new).",ex:"lista.forEach(System.out::println);\nlista.stream().map(Pedido::total);"},
 {t:"Stream API",x:"pipeline",oq:"Pipeline de operações sobre uma sequência: filter, map, sorted, limit + uma operação terminal.",ps:"Processar coleções de forma declarativa (o quê, não como).",cf:"Intermediárias são preguiçosas; nada roda até a terminal (collect, reduce, count). Cada elemento atravessa todo o pipeline — permitindo curto-circuito.",ex:"var receita = pedidos.stream()\n    .filter(Pedido::isPago)\n    .map(Pedido::total)\n    .reduce(BigDecimal.ZERO, BigDecimal::add);",dg:"stream"},
 {t:"Collectors",x:"o poder",oq:"Receitas de como juntar o resultado de um stream: toList, groupingBy, toMap, joining, counting.",ps:"É onde o stream deixa de ser 'for bonito' e vira ferramenta.",cf:"Aceitam downstream: agrupar e já contar/somar dentro de cada grupo.",ex:"Map<Status,Long> porStatus = pedidos.stream()\n  .collect(groupingBy(Pedido::status, counting()));"},
 {t:"Streams primitivos",x:"performance",oq:"IntStream, LongStream, DoubleStream — sem boxing.",ps:"Evitar criar milhões de Integer em cálculos numéricos.",cf:"Trazem operações prontas: sum, average, summaryStatistics, range.",ex:"int soma = IntStream.rangeClosed(1, 100).sum();\nitens.stream().mapToInt(Item::qtd).sum();"},
 {t:"parallelStream",x:"cuidado",oq:"Executa o pipeline em paralelo usando o ForkJoinPool comum.",ps:"Acelerar processamento pesado de CPU sobre muitos dados.",cf:"Só ganha com coleção grande, operação independente e CPU-bound. Para I/O ou coleção pequena, costuma piorar — e concorre com o resto da aplicação.",ex:"// bom: cálculo puro em 1 milhão de itens\n// ruim: chamada HTTP dentro do map"},
 {t:"CompletableFuture",x:"assíncrono",oq:"Representa um resultado que ficará pronto no futuro, e que você pode compor.",ps:"Coordenar chamadas assíncronas sem callback hell.",cf:"thenApply (transforma), thenCompose (encadeia outro future), thenCombine (junta dois), allOf (espera todos).",ex:"var preco = supplyAsync(() -> buscaPreco(id));\nvar estoque = supplyAsync(() -> buscaEstoque(id));\npreco.thenCombine(estoque, Oferta::new);"},
 {t:"flatMap",x:"achatar",oq:"Transforma cada elemento em um stream e junta todos num só.",ps:"Trabalhar com listas dentro de listas (pedido → itens) sem loop aninhado.",cf:"map devolve Stream<Stream<T>>; flatMap achata para Stream<T>. Existe também em Optional.",ex:"pedidos.stream()\n  .flatMap(p -> p.itens().stream())\n  .map(Item::sku).distinct().toList();"},
 {t:"Collector customizado",x:"avançado",oq:"Criar sua própria receita de coleta com Collector.of (supplier, accumulator, combiner, finisher).",ps:"Quando groupingBy/toMap não expressam o que você precisa.",cf:"O combiner só é usado em paralelo. Collectors.teeing aplica dois collectors e combina os resultados numa passada só.",ex:"var r = pedidos.stream().collect(\n  Collectors.teeing(counting(),\n    summingDouble(Pedido::valor),\n    (qtd, soma) -> new Resumo(qtd, soma)));"},
 {t:"Spliterator",x:"internals",oq:"O objeto que sabe percorrer e dividir uma fonte de dados — a base de todo stream.",ps:"Entender como o parallelStream reparte o trabalho e como criar uma fonte customizada.",cf:"tryAdvance percorre um item; trySplit divide a fonte em duas. Características (SIZED, ORDERED, DISTINCT) permitem otimizações.",ex:"StreamSupport.stream(meuSpliterator, true)  // paralelo\n  .forEach(System.out::println);"},
 {t:"Streams infinitos",x:"lazy",oq:"Stream.iterate e Stream.generate produzem elementos sem fim.",ps:"Gerar sequências sob demanda (páginas, retries, números) sem materializar tudo.",cf:"Só funcionam por causa da preguiça — precisam de um limit/takeWhile para terminar.",ex:"Stream.iterate(1, n -> n*2)\n      .takeWhile(n -> n < 1000)\n      .toList();"}
]},
{g:"05",n:"Concorrência",s:"várias coisas ao mesmo tempo",c:"var(--red)",cs:"var(--red-soft)",items:[
 {t:"Thread & Runnable",x:"o básico",oq:"Thread é uma linha de execução; Runnable/Callable é a tarefa que ela executa.",ps:"Executar trabalho em paralelo ou sem travar a thread principal.",cf:"Thread de plataforma é cara (~1MB de stack, atrelada ao SO). Por isso não se cria uma por requisição no modelo antigo.",ex:"new Thread(() -> processa()).start();   // raramente é o certo\n// prefira um executor (ou virtual threads)"},
 {t:"ExecutorService",x:"pool",oq:"Serviço que gerencia um pool de threads e recebe tarefas.",ps:"Reaproveitar threads e limitar o paralelismo.",cf:"submit devolve um Future. Sempre feche (shutdown) — try-with-resources funciona a partir do Java 19.",ex:"try (var ex = Executors.newFixedThreadPool(8)) {\n  Future<Integer> f = ex.submit(() -> calcula());\n  f.get();\n}"},
 {t:"Java Memory Model",x:"visibilidade",oq:"Regras que definem quando uma escrita feita por uma thread fica visível para outra.",ps:"Explica o bug em que a thread B nunca enxerga o que A escreveu.",cf:"Cada núcleo tem cache e o compilador reordena. A relação happens-before garante a visibilidade: quem vem depois enxerga tudo do que veio antes.",ex:"// sem volatile isso pode girar para sempre:\nwhile (!pronto) { }   // B\npronto = true;        // A",dg:"jmm"},
 {t:"volatile",x:"visibilidade",oq:"Modificador que garante que leituras e escritas do campo vão à memória principal.",ps:"Publicar uma flag/estado entre threads.",cf:"Garante visibilidade e impede reordenação — mas NÃO dá atomicidade: count++ continua com race.",ex:"private volatile boolean pronto;   // ok para flag\nprivate volatile int contador;     // NÃO resolve contador++"},
 {t:"synchronized",x:"exclusão",oq:"Bloco/método em que só uma thread entra por vez.",ps:"Proteger uma seção crítica e garantir visibilidade.",cf:"Usa o monitor do objeto. Ao sair, tudo que você fez fica visível para quem entrar depois. Atenção: prende virtual threads (pinning).",ex:"synchronized (this) {\n  saldo += valor;   // agora é atômico e visível\n}"},
 {t:"Lock & ReentrantLock",x:"controle",oq:"Lock explícito, com mais recursos que synchronized.",ps:"Quando você precisa de timeout, tentativa, interrupção ou lock justo.",cf:"tryLock(timeout), lockInterruptibly, Condition. Sempre libere em finally. É o preferido com virtual threads.",ex:"lock.lock();\ntry { saldo += v; } finally { lock.unlock(); }"},
 {t:"Atomic & CAS",x:"otimista",oq:"Classes Atomic* que atualizam valores sem bloquear, via Compare-And-Swap.",ps:"Contadores e referências compartilhadas com alta performance.",cf:"CAS: 'se ainda for X, troque por Y; senão me avise' — e o código tenta de novo. Sem bloquear ninguém. LongAdder é melhor sob altíssima disputa.",ex:"var c = new AtomicInteger();\nc.incrementAndGet();          // atômico, sem lock\nref.compareAndSet(velho, novo);",dg:"cas"},
 {t:"Deadlock",x:"armadilha",oq:"Duas threads travadas, cada uma esperando o lock que a outra segura.",ps:"Reconhecer e prevenir o travamento mais clássico.",cf:"Prevenção: adquira múltiplos locks sempre na mesma ordem global; use tryLock com timeout. Diagnóstico: jcmd <pid> Thread.print.",ex:"// A: lock(x) -> lock(y)\n// B: lock(y) -> lock(x)   <- inverteu = deadlock"},
 {t:"ThreadLocal",x:"contexto",oq:"Variável com um valor separado por thread.",ps:"Carregar contexto (usuário, traceId, transação) sem passar parâmetro.",cf:"Cuidado em pool de threads: se não limpar (remove), o valor vaza para a próxima tarefa. Com virtual threads, prefira ScopedValue.",ex:"static final ThreadLocal<String> TRACE = new ThreadLocal<>();\ntry { TRACE.set(id); ... } finally { TRACE.remove(); }"},
 {t:"Virtual Threads",x:"Java 21",oq:"Threads leves gerenciadas pela JVM — milhões cabem na memória.",ps:"Escrever código bloqueante simples que escala como código assíncrono.",cf:"Rodam sobre poucas carrier threads do SO. Ao bloquear em I/O, a virtual thread desmonta e libera o carrier. Ajudam em I/O-bound, não em CPU-bound. synchronized causa pinning.",ex:"try (var ex = Executors.newVirtualThreadPerTaskExecutor()) {\n  for (int i=0;i<100_000;i++) ex.submit(() -> chamaApi());\n}",dg:"vt"},
 {t:"Structured Concurrency",x:"o futuro",oq:"Tratar um grupo de tarefas concorrentes como uma unidade.",ps:"Se uma falha ou a principal é cancelada, as irmãs são canceladas juntas — sem thread vazando.",cf:"StructuredTaskScope: você abre o escopo, dispara as subtarefas e faz join. Ainda em preview.",ex:"try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {\n  var a = scope.fork(() -> buscaUser());\n  var b = scope.fork(() -> buscaPedidos());\n  scope.join().throwIfFailed();\n}"},
 {t:"ForkJoinPool",x:"dividir",oq:"Pool desenhado para dividir uma tarefa grande em subtarefas recursivas.",ps:"É o motor do parallelStream e de cálculos que se dividem naturalmente.",cf:"Work-stealing: cada worker tem sua fila; quem termina rouba trabalho da fila de outro. Nunca faça I/O bloqueante no pool comum — ele é compartilhado por toda a aplicação.",ex:"class Soma extends RecursiveTask<Long> {\n  protected Long compute(){\n    if (pequeno()) return direto();\n    var e = new Soma(esq); e.fork();\n    return new Soma(dir).compute() + e.join();\n  }\n}",dg:"fj"},
 {t:"Latches, barreiras & semáforos",x:"coordenar",oq:"CountDownLatch (espera N eventos), CyclicBarrier (todos se encontram), Semaphore (limita acessos simultâneos), Phaser (fases dinâmicas).",ps:"Coordenar threads sem inventar lógica de espera com wait/notify.",cf:"Latch é de uso único; barrier reinicia; semáforo mantém permissões (útil para rate limit interno).",ex:"var limite = new Semaphore(10);\nlimite.acquire();\ntry { chamaApiExterna(); } finally { limite.release(); }"},
 {t:"ReadWriteLock & StampedLock",x:"leitura x escrita",oq:"Locks que permitem vários leitores simultâneos, mas escrita exclusiva.",ps:"Estruturas lidas muito mais do que escritas.",cf:"ReadWriteLock separa readLock/writeLock. StampedLock vai além com leitura otimista (tryOptimisticRead + validate) — mais rápido, porém não reentrante.",ex:"long stamp = lock.tryOptimisticRead();\nvar v = valor;\nif (!lock.validate(stamp)) { /* releia com readLock */ }"},
 {t:"False sharing",x:"hardware",oq:"Duas variáveis independentes caem na mesma linha de cache da CPU; threads diferentes escrevendo nelas invalidam o cache uma da outra.",ps:"Explica por que um código paralelo fica MAIS lento que o sequencial.",cf:"A linha de cache tem ~64 bytes. A solução é espaçar os dados (padding) — @Contended (interno) ou usar LongAdder, que já resolve isso.",ex:"// contador muito disputado:\nvar c = new LongAdder();   // evita false sharing\nc.increment(); c.sum();"},
 {t:"ScopedValue",x:"contexto moderno",oq:"Substituto do ThreadLocal pensado para virtual threads: valor imutável, válido dentro de um escopo.",ps:"Propagar contexto (usuário, traceId) sem vazamento e sem custo em milhões de threads.",cf:"O valor é amarrado a um bloco (where/run) e some ao sair. Herdado automaticamente por tarefas filhas na structured concurrency.",ex:"ScopedValue.where(USUARIO, user)\n           .run(() -> processaPedido());"}
]},
{g:"06",n:"I/O & dados",s:"entrada, saída e formatos",c:"var(--orange)",cs:"var(--orange-soft)",items:[
 {t:"Streams de I/O",x:"clássico",oq:"InputStream/OutputStream (bytes) e Reader/Writer (caracteres).",ps:"Ler e escrever arquivos, rede, memória.",cf:"São encadeáveis (decorator): BufferedReader envolve FileReader para bufferizar. Sempre feche o recurso.",ex:"try (var br = new BufferedReader(new FileReader(f))) {\n  br.lines().forEach(System.out::println);\n}"},
 {t:"NIO · Files & Path",x:"moderno",oq:"API moderna de arquivos: Path (caminho) e Files (operações).",ps:"Substituir o velho File com uma API mais completa e clara.",cf:"Files.readString, writeString, lines (stream preguiçoso), walk, copy, delete. Path compõe caminhos de forma segura.",ex:"Path p = Path.of(\"dados\",\"pedidos.csv\");\nString txt = Files.readString(p);\ntry (var linhas = Files.lines(p)) { linhas.count(); }"},
 {t:"Buffers & Channels",x:"baixo nível",oq:"Channel lê/escreve blocos de dados; Buffer é a área de memória usada nessa troca.",ps:"I/O de alta performance, non-blocking, arquivos grandes.",cf:"ByteBuffer com posição/limite/capacidade; FileChannel pode mapear arquivo em memória (mmap).",ex:"try (var ch = FileChannel.open(p)) {\n  var buf = ByteBuffer.allocate(8192);\n  ch.read(buf); buf.flip();\n}"},
 {t:"try-with-resources",x:"segurança",oq:"Sintaxe que fecha automaticamente recursos que implementam AutoCloseable.",ps:"Nunca vazar arquivo, conexão ou stream — mesmo com exceção.",cf:"Fecha na ordem inversa da abertura e registra suppressed exceptions.",ex:"try (var conn = ds.getConnection();\n     var st = conn.prepareStatement(sql)) {\n  st.execute();\n}   // fecha os dois, garantido",dg:"twr"},
 {t:"Serialização",x:"formato",oq:"Converter objeto ↔ bytes/texto. A nativa (Serializable) e as modernas (JSON via Jackson).",ps:"Persistir, enviar pela rede, integrar sistemas.",cf:"Serializable nativa é frágil e insegura (desserializar dado não confiável é vetor de ataque). Na prática use JSON/protobuf.",ex:"var json = mapper.writeValueAsString(pedido);\nvar p = mapper.readValue(json, Pedido.class);"},
 {t:"java.time",x:"datas",oq:"API de data/hora imutável: LocalDate, LocalDateTime, Instant, Duration, ZonedDateTime.",ps:"Substituir Date/Calendar, que eram mutáveis e confusos.",cf:"LocalDate = data sem fuso; Instant = ponto na linha do tempo (UTC); ZonedDateTime = com fuso. Duration/Period para intervalos.",ex:"var vence = LocalDate.now().plusDays(30);\nvar dur = Duration.between(inicio, fim);"},
 {t:"HttpClient",x:"rede",oq:"Cliente HTTP do JDK (Java 11+): HTTP/2, WebSocket, síncrono e assíncrono.",ps:"Chamar APIs sem depender de biblioteca externa para o básico.",cf:"send bloqueia; sendAsync devolve CompletableFuture. Configure SEMPRE timeout de conexão e de request.",ex:"var c = HttpClient.newBuilder()\n  .connectTimeout(Duration.ofSeconds(2)).build();\nvar req = HttpRequest.newBuilder(uri)\n  .timeout(Duration.ofSeconds(5)).build();\nc.send(req, BodyHandlers.ofString());"},
 {t:"Charset & encoding",x:"texto",oq:"Como caracteres viram bytes (UTF-8, ISO-8859-1).",ps:"Evitar o clássico 'acentuação virou ?' ao ler arquivo ou responder HTTP.",cf:"Desde o Java 18 o padrão é UTF-8. Nunca dependa do encoding padrão do sistema: declare explicitamente.",ex:"Files.readString(p, StandardCharsets.UTF_8);\nnew String(bytes, StandardCharsets.UTF_8);"},
 {t:"Regex & performance",x:"cuidado",oq:"Expressões regulares via Pattern/Matcher.",ps:"Validar e extrair texto — com atenção ao custo.",cf:"Compile o Pattern uma vez (static final), não a cada chamada. Cuidado com backtracking catastrófico: (a+)+ em entrada grande trava a CPU (vetor de DoS).",ex:"static final Pattern CPF = Pattern.compile(\"\\\\d{11}\");\nCPF.matcher(txt).matches();"}
]},
{g:"07",n:"Erros & módulos",s:"robustez e organização",c:"var(--yellow)",cs:"var(--yellow-soft)",items:[
 {t:"Checked vs unchecked",x:"exceções",oq:"Checked (herda Exception) o compilador obriga a tratar; unchecked (RuntimeException) não.",ps:"Checked para condição recuperável esperada; unchecked para erro de programação.",cf:"Excesso de checked polui assinaturas e leva ao catch vazio. Na prática moderna, unchecked domina no domínio.",ex:"class SaldoInsuficiente extends RuntimeException {\n  SaldoInsuficiente(String m, Throwable causa){ super(m, causa); }\n}"},
 {t:"Boas práticas de exceção",x:"craft",oq:"Regras de como lançar, converter e propagar erros.",ps:"Não transformar um erro claro num bug fantasma.",cf:"Nunca engula (catch vazio); preserve a causa ao converter; inclua contexto na mensagem; não use exceção para fluxo normal.",ex:"catch (SQLException e) {\n  throw new PedidoException(\"falha ao salvar id=\"+id, e); // causa preservada\n}"},
 {t:"JPMS (módulos)",x:"organização",oq:"Sistema de módulos do Java 9: module-info.java com requires/exports.",ps:"Encapsulamento forte entre pacotes e imagens de runtime menores (jlink).",cf:"Um pacote só é visível se exportado. Foi por causa disso que o Java 11 removeu módulos EE — daí dependências extras ao migrar do 8.",ex:"module com.app {\n  requires java.net.http;\n  exports com.app.api;\n}"},
 {t:"Classpath & jar",x:"build",oq:"Classpath é onde a JVM procura classes; jar é o pacote zipado do seu código.",ps:"Entender erros de dependência e como sua app é empacotada.",cf:"Ordem no classpath importa (a primeira classe encontrada vence) — origem do 'jar hell'. Maven/Gradle gerenciam isso.",ex:"java -cp app.jar:libs/* com.app.Main\njar tf app.jar   # ver conteúdo"}
]},
{g:"08",n:"Testes & performance",s:"provar e medir",c:"var(--pink)",cs:"var(--pink-soft)",items:[
 {t:"JUnit 5",x:"testes",oq:"Framework padrão de testes: @Test, @BeforeEach, @ParameterizedTest, assertions.",ps:"Rede de segurança para mudar código sem medo.",cf:"Cada teste é isolado. @ParameterizedTest roda o mesmo teste com vários dados; @Nested organiza cenários.",ex:"@ParameterizedTest @ValueSource(ints={-1,0})\nvoid rejeitaValorInvalido(int v){\n  assertThrows(IllegalArgumentException.class, () -> new Item(v));\n}"},
 {t:"Mockito",x:"dublês",oq:"Biblioteca para criar mocks: objetos falsos que simulam dependências.",ps:"Testar uma classe isolada, sem banco nem rede.",cf:"when(...).thenReturn(...) define comportamento; verify(...) checa interação. Injeção por construtor torna isso trivial.",ex:"when(repo.findById(1L)).thenReturn(Optional.of(pedido));\nvar s = new PedidoService(repo);\nassertEquals(TEN, s.total(1L));"},
 {t:"JMH",x:"benchmark",oq:"Ferramenta oficial para microbenchmark na JVM.",ps:"Medir performance de verdade — nanoTime num loop mente.",cf:"Faz warm-up (por causa do JIT), roda em forks isolados e usa Blackhole para o compilador não eliminar seu código.",ex:"@Benchmark\npublic void concat(Blackhole bh){\n  bh.consume(sb.toString());\n}"},
 {t:"Profiling (JFR)",x:"diagnóstico",oq:"Java Flight Recorder: gravador de eventos embutido na JVM, de baixíssimo overhead.",ps:"Descobrir onde o tempo e a memória realmente vão — inclusive em produção.",cf:"Grava alocação, GC, threads, I/O, exceções. Abra o .jfr no JDK Mission Control. Para CPU, flame graph com async-profiler.",ex:"jcmd <pid> JFR.start duration=60s filename=app.jfr\njcmd <pid> Thread.print     # deadlock\njcmd <pid> GC.heap_info"},
 {t:"Heap dump & MAT",x:"vazamento",oq:"Fotografia da memória + ferramenta para analisá-la (Eclipse MAT).",ps:"Achar quem está segurando objetos que deveriam ter sido coletados.",cf:"O MAT mostra os maiores retentores e o caminho de referências que impede a coleta.",ex:"jcmd <pid> GC.heap_dump /tmp/app.hprof\n# abrir no Eclipse MAT -> Dominator Tree"},
 {t:"Testcontainers",x:"integração",oq:"Sobe dependências reais (Postgres, Kafka, Redis) em container durante o teste.",ps:"Testar contra o banco de verdade em vez de H2 — dialeto, tipos e locks diferentes escondem bugs.",cf:"O container sobe antes dos testes e é destruído no fim. Reutilize a instância entre classes para não pagar o boot toda vez.",ex:"@Container static PostgreSQLContainer<?> db =\n  new PostgreSQLContainer<>(\"postgres:16\");"},
 {t:"AssertJ",x:"legibilidade",oq:"Biblioteca de asserções fluentes.",ps:"Mensagens de falha muito mais claras que assertEquals.",cf:"Encadeia: assertThat(x).isNotNull().hasSize(3).contains(...). Tem asserções específicas para exceção, data, arquivo.",ex:"assertThat(pedidos)\n  .hasSize(2)\n  .extracting(Pedido::status)\n  .containsExactly(PAGO, PENDENTE);"},
 {t:"Cobertura & mutação",x:"qualidade real",oq:"Cobertura (JaCoCo) mede linhas executadas; teste de mutação (PIT) altera seu código e verifica se algum teste falha.",ps:"Cobertura alta não significa teste bom — mutação mostra se seus testes realmente verificam algo.",cf:"O PIT troca > por >=, remove chamadas etc. Se nenhum teste quebra, aquele teste não estava testando nada.",ex:"mvn test jacoco:report\nmvn org.pitest:pitest-maven:mutationCoverage"}
]},
{g:"09",n:"Linguagem: cantos avançados",s:"as pegadinhas que separam quem sabe",c:"var(--java)",cs:"var(--java-soft)",items:[
 {t:"String pool & intern",x:"memória",oq:"Literais de String são compartilhados num pool interno da JVM.",ps:"Explica por que == às vezes 'funciona' com String — e por que não dá para confiar nisso.",cf:"Literais iguais apontam para o mesmo objeto; String criada com new ou concatenada em runtime é outro objeto. intern() força o uso do pool.",ex:"\"ab\" == \"ab\";               // true  (pool)\nnew String(\"ab\") == \"ab\";   // false (objeto novo)\n// SEMPRE compare com equals"},
 {t:"Concatenação de String",x:"performance",oq:"String é imutável: cada concatenação cria um novo objeto.",ps:"Evitar o clássico gargalo de montar texto dentro de um loop.",cf:"Fora de loop, o compilador otimiza (invokedynamic/StringConcatFactory). Dentro de loop, use StringBuilder explicitamente.",ex:"var sb = new StringBuilder();\nfor (var i : itens) sb.append(i).append(';');\nsb.toString();"},
 {t:"Autoboxing & cache",x:"pegadinha",oq:"Conversão automática entre int e Integer — e um cache de -128 a 127.",ps:"Explica o bug em que dois Integer iguais são == em um caso e não em outro.",cf:"Valores no cache retornam a mesma instância; fora dele, objetos diferentes. Autoboxing em loop também gera lixo (use IntStream/primitivos).",ex:"Integer a=127, b=127;  a==b;  // true  (cache)\nInteger c=128, d=128;  c==d;  // false!\n// use equals ou primitivos"},
 {t:"Ponto flutuante & BigDecimal",x:"dinheiro",oq:"double/float são binários e não representam 0.1 exatamente; BigDecimal é decimal exato.",ps:"Nunca use double para dinheiro.",cf:"Pegadinha do BigDecimal: equals compara valor E escala (2.0 ≠ 2.00); use compareTo. E construa a partir de String, não de double.",ex:"0.1 + 0.2 == 0.3;                      // false!\nnew BigDecimal(\"2.0\").equals(new BigDecimal(\"2.00\")); // false\nnew BigDecimal(\"2.0\").compareTo(new BigDecimal(\"2.00\")) == 0; // true"},
 {t:"Overflow & Math.*Exact",x:"limites",oq:"int estoura silenciosamente ao passar de ~2,1 bilhões, virando negativo.",ps:"Evitar bug numérico silencioso em contadores, somas e cálculos de tempo.",cf:"Math.addExact/multiplyExact lançam ArithmeticException em vez de estourar em silêncio.",ex:"Integer.MAX_VALUE + 1;        // -2147483648 (!)\nMath.addExact(Integer.MAX_VALUE, 1);  // lança exceção"},
 {t:"Classes internas & captura",x:"escopo",oq:"Inner (não estática, guarda referência à externa), static nested, anônima e local.",ps:"Entender vazamento de memória e a regra do 'effectively final'.",cf:"Inner class segura a instância externa — em cache/coleção isso vaza. Lambdas e anônimas só capturam variáveis efetivamente finais (o valor é copiado).",ex:"int x = 10;\nRunnable r = () -> System.out.println(x); // x deve ser efetivamente final\n// x = 20;  // isso quebraria a compilação"},
 {t:"Ordem de inicialização",x:"sutil",oq:"Sequência: estáticos (na 1ª vez que a classe é usada) → campos de instância → bloco de inicialização → construtor.",ps:"Explica NullPointerException 'impossível' no construtor e problemas com herança.",cf:"Chamar método sobrescrito dentro do construtor da superclasse executa a versão da subclasse antes dos campos dela existirem.",ex:"class A { A(){ init(); } void init(){} }\nclass B extends A { String s = \"x\";\n  void init(){ s.length(); } }  // NPE: s ainda é null"},
 {t:"varargs & heap pollution",x:"generics",oq:"Método com número variável de argumentos (T... args) vira um array — e array de genérico não é seguro.",ps:"Explica o warning 'unchecked generic array creation' e o @SafeVarargs.",cf:"Por causa do erasure, T[] vira Object[]; alguém pode inserir o tipo errado. @SafeVarargs afirma que você não faz isso.",ex:"@SafeVarargs\nstatic <T> List<T> de(T... itens){ return List.of(itens); }"},
 {t:"Default methods & diamante",x:"interfaces",oq:"Interfaces podem ter métodos com corpo (default).",ps:"Permitiu evoluir interfaces do JDK (forEach, stream) sem quebrar implementações.",cf:"Se duas interfaces trazem o mesmo default, a classe é obrigada a resolver o conflito explicitamente com Interface.super.metodo().",ex:"interface A { default String n(){ return \"A\"; } }\ninterface B { default String n(){ return \"B\"; } }\nclass C implements A,B { public String n(){ return A.super.n(); } }"},
 {t:"Cleaner (fim do finalize)",x:"recursos",oq:"finalize() foi deprecado; Cleaner é o mecanismo para agir quando um objeto é coletado.",ps:"Liberar recurso nativo como rede de segurança — não como estratégia principal.",cf:"Não há garantia de quando roda. O certo continua sendo AutoCloseable + try-with-resources.",ex:"static final Cleaner CLEANER = Cleaner.create();\nCLEANER.register(this, () -> liberaRecursoNativo());"}
]},
{g:"10",n:"Anotações & metaprogramação",s:"como os frameworks fazem o que fazem",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Anotações a fundo",x:"metadados",oq:"@Retention define até quando a anotação existe (SOURCE, CLASS, RUNTIME); @Target onde ela pode ser usada.",ps:"Só RUNTIME é visível por reflection — é isso que permite Spring/Jackson lerem suas anotações.",cf:"Meta-anotações compõem: uma anotação sua pode ser anotada com outras (é assim que @RestController = @Controller + @ResponseBody).",ex:"@Retention(RUNTIME) @Target({METHOD,TYPE})\n@interface Auditado { String acao(); }"},
 {t:"Annotation Processor",x:"compile-time",oq:"Plugin do compilador que lê anotações e GERA código durante a compilação.",ps:"Zero custo em runtime (diferente de reflection) e erros detectados na compilação.",cf:"Roda em rodadas: lê os elementos anotados e escreve novos arquivos-fonte. É a base de Lombok, MapStruct, Dagger e do processador do @ConfigurationProperties.",ex:"// MapStruct gera a implementação do mapper:\n@Mapper interface PedidoMapper {\n  PedidoDTO toDto(Pedido p);\n}"},
 {t:"Lombok & MapStruct",x:"geradores",oq:"Lombok injeta código (getters, builder, equals) no bytecode durante a compilação; MapStruct gera mappers.",ps:"Menos boilerplate — com a diferença de que o código gerado é real e depurável (MapStruct) ou implícito (Lombok).",cf:"Lombok manipula a AST do compilador (por isso exige plugin na IDE). Com records, boa parte do Lombok deixa de ser necessária.",ex:"@Builder @Getter\nclass Pedido { private final Long id; }\nPedido.builder().id(1L).build();"},
 {t:"Dynamic Proxy",x:"interceptação",oq:"java.lang.reflect.Proxy cria, em runtime, uma implementação de uma interface que delega tudo para um InvocationHandler.",ps:"É o mecanismo por trás de @Transactional, repositórios do Spring Data e mocks.",cf:"Só funciona com interfaces. Para classes concretas, frameworks usam CGLIB/ByteBuddy (subclasse gerada). Daí a regra: self-invocation não passa pelo proxy.",ex:"var repo = (Repo) Proxy.newProxyInstance(cl,\n  new Class[]{Repo.class},\n  (p, m, args) -> { log(m); return exec(m,args); });",dg:"proxy"},
 {t:"ByteBuddy & ASM",x:"bytecode",oq:"Bibliotecas para gerar e transformar bytecode programaticamente.",ps:"Criar proxies de classes, agentes de instrumentação, mocks (Mockito usa ByteBuddy).",cf:"ASM é baixo nível (visita instruções); ByteBuddy é uma API fluente por cima. Combinam com javaagent para reescrever classes no load.",ex:"new ByteBuddy().subclass(Servico.class)\n  .method(named(\"salvar\")).intercept(...)\n  .make().load(cl);"},
 {t:"MethodHandles & VarHandle",x:"reflection rápida",oq:"API moderna e performática para acessar métodos e campos — e para operações atômicas de baixo nível.",ps:"Alternativa à reflection clássica (mais rápida, otimizável pelo JIT) e substituto seguro do Unsafe.",cf:"MethodHandle é um ponteiro tipado para um método. VarHandle dá acesso a campos com semântica de memória explícita (volatile, acquire/release, CAS).",ex:"var vh = MethodHandles.lookup()\n  .findVarHandle(Contador.class, \"n\", int.class);\nvh.compareAndSet(obj, 0, 1);"},
 {t:"ServiceLoader (SPI)",x:"plugins",oq:"Mecanismo do JDK para descobrir implementações de uma interface em runtime.",ps:"Arquitetura de plugin sem framework: o JDBC descobre drivers assim.",cf:"O provedor declara a implementação em META-INF/services (ou 'provides' no module-info); o consumidor usa ServiceLoader.load.",ex:"ServiceLoader.load(PagamentoProvider.class)\n  .forEach(p -> registrar(p));"}
]},
{g:"11",n:"Injeção de dependência & design",s:"como montar código que se sustenta",c:"var(--teal)",cs:"var(--teal-soft)",items:[
 {t:"Inversão de Controle (IoC)",x:"princípio",oq:"Em vez de a sua classe criar e controlar suas dependências, ela recebe o controle invertido: o framework cria e coordena.",ps:"Desacoplar quem usa de quem constrói — a base de Spring, CDI, Guice.",cf:"'Não me chame, eu te chamo': você declara o que precisa; o container monta o grafo de objetos e entrega pronto.",ex:"// sem IoC: você monta a cadeia inteira\nnew Service(new Repo(new DataSource(...)))\n// com IoC: você declara e recebe",dg:"di"},
 {t:"Injeção de dependência",x:"a prática",oq:"Entregar as dependências prontas para a classe: por construtor, setter ou campo.",ps:"Tornar a classe testável (passa um mock) e explícita sobre o que precisa.",cf:"Construtor é a forma preferida: dependência obrigatória, objeto imutável, e testável com um simples new. Campo (@Autowired direto) esconde dependências e dificulta teste.",ex:"class PedidoService {\n  private final PedidoRepo repo;\n  PedidoService(PedidoRepo repo){ this.repo = repo; }  // ✓\n}\nnew PedidoService(mockRepo);   // teste sem framework"},
 {t:"Container & ciclo de vida",x:"como funciona",oq:"O container lê metadados (anotações/config), instancia os beans, injeta as dependências e gerencia o ciclo de vida.",ps:"Entender quando seu objeto é criado, quando está pronto e quando morre.",cf:"Fases: instanciar → injetar → pós-processar (proxies AOP) → callback de init (@PostConstruct) → uso → destroy. Dependência circular entre construtores falha no start.",ex:"@PostConstruct void aquecer(){ cache.load(); }\n@PreDestroy void fechar(){ pool.close(); }"},
 {t:"Escopos",x:"tempo de vida",oq:"Singleton (um por aplicação, padrão), prototype (um por injeção), request/session (web).",ps:"Escolher errado gera bug sutil: estado compartilhado onde deveria ser por requisição.",cf:"Cuidado ao injetar um bean de escopo curto dentro de um singleton — precisa de proxy de escopo, senão a instância 'congela'.",ex:"@Scope(\"prototype\")   // nova instância a cada injeção\nclass Rascunho { }"},
 {t:"Service Locator (antipadrão)",x:"contraste",oq:"Em vez de receber a dependência, a classe pede ao um 'localizador' global.",ps:"Saber por que DI é preferível.",cf:"O locator esconde as dependências (não aparecem na assinatura), acopla ao framework e dificulta teste. DI deixa tudo explícito.",ex:"// ruim: dependência invisível\nvar repo = Locator.get(Repo.class);\n// bom: dependência no construtor"},
 {t:"SOLID",x:"princípios",oq:"Cinco princípios: responsabilidade única, aberto/fechado, substituição de Liskov, segregação de interface, inversão de dependência.",ps:"Critérios para decidir onde cortar classes e como reduzir acoplamento.",cf:"O 'D' (inversão de dependência) é justamente o que a DI implementa: dependa de abstração, não de implementação concreta.",ex:"interface Notificador { void enviar(Msg m); }\nclass Email implements Notificador {}\n// o serviço depende de Notificador, não de Email"},
 {t:"Builder",x:"padrão",oq:"Constrói um objeto complexo passo a passo, com API fluente.",ps:"Evitar construtor com 8 parâmetros e combinações opcionais.",cf:"Ideal quando há muitos campos opcionais e você quer o objeto imutável no fim. Records + builder gerado (Lombok) resolvem bem.",ex:"Pedido.builder()\n  .cliente(c).item(i1).item(i2)\n  .desconto(TEN).build();"},
 {t:"Strategy",x:"padrão",oq:"Encapsula algoritmos intercambiáveis atrás de uma interface comum.",ps:"Trocar comportamento sem if/else espalhado — e adicionar novos casos sem tocar no código existente.",cf:"Em Java moderno, muitas vezes uma lambda ou um Map<Tipo, Function> já é a estratégia. Com Spring, injete uma List<Strategy> e selecione.",ex:"interface Frete { BigDecimal calc(Pedido p); }\nMap<Tipo,Frete> estrategias;\nestrategias.get(p.tipo()).calc(p);"},
 {t:"Factory",x:"padrão",oq:"Centraliza a criação de objetos, escondendo qual implementação concreta é usada.",ps:"Quando a escolha do objeto depende de configuração, tipo ou contexto.",cf:"Factory method (um método que cria) ou Abstract Factory (família de objetos). Em Java, métodos estáticos de fábrica (List.of, Optional.of) também são isso.",ex:"static Pagamento de(Tipo t){\n  return switch(t){ case PIX -> new Pix(); case CARTAO -> new Cartao(); };\n}"},
 {t:"Decorator & Proxy",x:"padrão",oq:"Decorator adiciona comportamento envolvendo o objeto; Proxy controla o acesso a ele.",ps:"Adicionar log, cache, transação, retry sem alterar a classe original.",cf:"Ambos implementam a mesma interface do alvo e delegam. É exatamente o que o Spring AOP faz por baixo. BufferedReader envolvendo FileReader é decorator.",ex:"new BufferedReader(new FileReader(f));   // decorator\n// @Transactional -> proxy gerado"},
 {t:"Observer & eventos",x:"padrão",oq:"Um objeto publica acontecimentos; interessados se inscrevem e reagem.",ps:"Desacoplar quem gera o fato de quem reage a ele.",cf:"Em Spring: ApplicationEventPublisher + @EventListener (e @TransactionalEventListener para disparar só após o commit). Em Java puro: Flow (reactive streams).",ex:"publisher.publishEvent(new PedidoPago(id));\n@EventListener void aoPagar(PedidoPago e){ enviaNota(e); }"},
 {t:"Singleton (com enum)",x:"padrão",oq:"Garantir uma única instância.",ps:"Recursos verdadeiramente únicos — mas cuidado: singleton com estado mutável é acoplamento global.",cf:"A forma mais segura em Java é um enum de um elemento (serialização e reflection-safe). Na prática, deixe o container gerenciar (bean singleton).",ex:"enum Config {\n  INSTANCE;\n  private final Props p = carrega();\n  Props props(){ return p; }\n}"},
 {t:"Composição > herança",x:"design",oq:"Preferir montar comportamento combinando objetos, em vez de estender classes.",ps:"Herança acopla à implementação do pai e quebra fácil quando o pai muda.",cf:"Herança só quando há relação 'é um' verdadeira e estável. Caso contrário, componha (delegue) — ou use interfaces com default para compartilhar contrato.",ex:"// em vez de: class ServicoLogado extends Servico\nclass ServicoLogado implements Servico {\n  private final Servico alvo;   // compõe e delega\n}"}
]},
{g:"12",n:"Build & ecossistema",s:"como o projeto é montado e distribuído",c:"var(--yellow)",cs:"var(--yellow-soft)",items:[
 {t:"Maven",x:"build",oq:"Ferramenta de build declarativa: você descreve o projeto no pom.xml e ela executa um ciclo padronizado.",ps:"Compilar, testar, empacotar e resolver dependências de forma reprodutível.",cf:"Ciclo de vida: validate → compile → test → package → verify → install → deploy. Convenção sobre configuração (src/main/java).",ex:"mvn clean package        # gera o jar\nmvn dependency:tree      # ver dependências\nmvn -DskipTests package"},
 {t:"Gradle",x:"build",oq:"Build baseado em script (Kotlin/Groovy DSL), com build incremental e cache.",ps:"Builds mais rápidos e configuração mais flexível que o XML do Maven.",cf:"Modela tarefas e dependências entre elas; reaproveita resultados (incremental + build cache). Curva de aprendizado maior.",ex:"dependencies {\n  implementation(\"org.springframework.boot:spring-boot-starter-web\")\n  testImplementation(\"org.junit.jupiter:junit-jupiter\")\n}"},
 {t:"Dependências transitivas",x:"o problema real",oq:"Suas dependências trazem as dependências delas — e às vezes em versões conflitantes.",ps:"Diagnosticar NoSuchMethodError e comportamento inesperado por versão errada no classpath.",cf:"Maven resolve pela 'menor distância' na árvore (nem sempre a maior versão). Use dependency:tree para ver quem trouxe o quê e exclusions/dependencyManagement para fixar.",ex:"mvn dependency:tree -Dincludes=com.fasterxml.jackson\n# gradle: ./gradlew dependencies",dg:"build"},
 {t:"Scopes & BOM",x:"controle",oq:"Scope define onde a dependência vale (compile, provided, runtime, test). BOM é uma lista central de versões compatíveis.",ps:"Manter versões coerentes e não vazar dependência de teste para produção.",cf:"O spring-boot-dependencies é um BOM: você declara a dependência sem versão e ele decide. Isso evita o 'inferno de versões'.",ex:"<dependency>\n  <groupId>org.postgresql</groupId>\n  <artifactId>postgresql</artifactId>\n  <scope>runtime</scope>\n</dependency>"},
 {t:"Fat jar & empacotamento",x:"distribuição",oq:"Jar que inclui suas dependências, executável com java -jar.",ps:"Distribuir a aplicação como um único artefato (essencial em container).",cf:"Spring Boot usa um layout próprio (BOOT-INF) com um loader; o shade plugin funde tudo (cuidado com arquivos duplicados em META-INF/services).",ex:"java -jar app.jar\n# camadas para cache de imagem Docker:\njava -Djarmode=layertools -jar app.jar extract"},
 {t:"Versionamento semântico",x:"contrato",oq:"MAJOR.MINOR.PATCH: major quebra compatibilidade, minor adiciona, patch corrige.",ps:"Saber o risco de subir uma dependência — e comunicar o risco da sua biblioteca.",cf:"Atualizar patch/minor deveria ser seguro; major exige leitura de release notes. SNAPSHOT = versão instável, nunca em produção.",ex:"2.4.1 -> 2.4.2  (patch: seguro)\n2.4.1 -> 3.0.0  (major: pode quebrar)"},
 {t:"Repositórios & reprodutibilidade",x:"confiança",oq:"Central, Nexus/Artifactory privados, cache local (~/.m2).",ps:"Build previsível e proteção contra dependência sumindo ou sendo comprometida.",cf:"Fixe versões (nada de ranges), use repositório interno como espelho, e verifique vulnerabilidades das dependências.",ex:"mvn versions:display-dependency-updates\nmvn dependency-check:check   # CVEs conhecidas"}
]},
{g:"13",n:"Persistência, logs & segurança",s:"o que toda aplicação real precisa",c:"var(--pink)",cs:"var(--pink-soft)",items:[
 {t:"JDBC & PreparedStatement",x:"a base",oq:"API de baixo nível para falar com bancos relacionais.",ps:"Tudo (JPA, jOOQ, Spring Data) roda sobre JDBC — e SQL injection se previne aqui.",cf:"PreparedStatement envia SQL e parâmetros separados: o valor nunca é interpretado como comando. Concatenar string em SQL é a vulnerabilidade nº 1.",ex:"var ps = c.prepareStatement(\"select * from p where id=?\");\nps.setLong(1, id);          // ✓ seguro\n// \"... id=\" + id           // ✗ SQL injection"},
 {t:"Pool de conexões",x:"recurso escasso",oq:"Conjunto de conexões reutilizadas (HikariCP é o padrão).",ps:"Abrir conexão é caro; o pool amortiza e limita a carga sobre o banco.",cf:"Pool pequeno = requisições esperando; pool gigante = banco sofrendo. Configure timeout curto para falhar rápido em vez de empilhar.",ex:"spring.datasource.hikari.maximum-pool-size=20\nspring.datasource.hikari.connection-timeout=3000"},
 {t:"Transações & isolamento",x:"consistência",oq:"Transação agrupa operações em tudo-ou-nada (ACID). Isolamento define o que uma transação enxerga de outra.",ps:"Evitar dado inconsistente e entender leitura suja/fantasma.",cf:"Níveis: READ COMMITTED (padrão em Postgres), REPEATABLE READ, SERIALIZABLE. Quanto mais isolado, mais lock e menos concorrência.",ex:"@Transactional(isolation = REPEATABLE_READ,\n               readOnly = true)"},
 {t:"ORM & persistence context",x:"JPA",oq:"Mapeia objetos para tabelas. O persistence context é um cache por transação com dirty checking.",ps:"Entender por que UPDATE acontece sem você chamar save, e por que dá LazyInitializationException.",cf:"Entidade carregada fica 'managed'; ao commitar, o Hibernate compara com o snapshot e emite os UPDATEs. Fora da transação vira detached.",ex:"@Transactional void pagar(Long id){\n  var p = repo.findById(id).orElseThrow();\n  p.setStatus(PAGO);   // sem save(): dirty checking persiste\n}"},
 {t:"N+1 queries",x:"o vilão",oq:"Uma consulta traz N registros e cada acesso a um relacionamento lazy dispara outra query.",ps:"É a causa mais comum de lentidão em aplicações Java.",cf:"Resolva com JOIN FETCH, @EntityGraph ou projeção (traga só as colunas usadas). Diagnostique ligando o log de SQL e contando queries.",ex:"@EntityGraph(attributePaths = \"itens\")\nList<Pedido> findByStatus(Status s);"},
 {t:"Migrations (Flyway)",x:"schema",oq:"Versionamento do banco em scripts aplicados em ordem.",ps:"Schema previsível e revisável, igual em todos os ambientes.",cf:"Cada script tem versão e é aplicado uma vez (registrado numa tabela de controle). Nunca use ddl-auto=update em produção.",ex:"V1__cria_pedido.sql\nV2__adiciona_indice_status.sql"},
 {t:"SLF4J & Logback",x:"logs",oq:"SLF4J é a fachada (a API que você usa); Logback/Log4j2 é a implementação.",ps:"Trocar a implementação sem mexer no código e evitar conflito de libs de log.",cf:"Use placeholders {} em vez de concatenar: a string só é montada se aquele nível estiver ativo.",ex:"log.debug(\"pedido {} status {}\", id, status);  // ✓\n// log.debug(\"pedido \" + id);                  // ✗ concatena sempre"},
 {t:"Logs estruturados & MDC",x:"observabilidade",oq:"Log em JSON com campos, e MDC para carregar contexto (traceId, userId) automaticamente em cada linha.",ps:"Buscar e correlacionar logs entre serviços — impossível com texto solto.",cf:"MDC é um mapa por thread; o appender inclui os campos em todas as mensagens daquela requisição. Com virtual threads/ScopedValue o padrão está mudando.",ex:"MDC.put(\"traceId\", id);\ntry { processa(); } finally { MDC.clear(); }"},
 {t:"Hash de senha & cripto",x:"segurança",oq:"Senha nunca é criptografada — é hasheada com algoritmo lento e salt (BCrypt, Argon2).",ps:"Se o banco vazar, as senhas não podem ser recuperadas.",cf:"MD5/SHA são rápidos demais (fáceis de quebrar por força bruta). Para dados que precisam voltar ao original, use criptografia (AES) com chave gerenciada em cofre.",ex:"var enc = new BCryptPasswordEncoder();\nvar hash = enc.encode(senha);\nenc.matches(digitada, hash);"},
 {t:"Desserialização insegura",x:"vulnerabilidade",oq:"Desserializar dado vindo de fonte não confiável pode executar código.",ps:"Foi a raiz de várias CVEs graves no ecossistema Java.",cf:"Nunca use a serialização nativa em dado externo. Com JSON, desabilite tipagem polimórfica automática e valide o payload. Mantenha as libs atualizadas.",ex:"// evite: ObjectInputStream.readObject() em dado externo\n// prefira JSON com tipo fixo:\nmapper.readValue(json, PedidoDTO.class);"},
 {t:"Segredos & configuração",x:"produção",oq:"Senhas, tokens e chaves não vão no código nem no repositório.",ps:"Segredo commitado é incidente de segurança — e fica no histórico do Git para sempre.",cf:"Use variáveis de ambiente, Secrets Manager/Vault ou config server. Rotacione periodicamente e restrinja o acesso por papel (IAM).",ex:"spring.datasource.password=${DB_PASSWORD}\n# valor vem do ambiente/cofre, nunca do arquivo"}
]}
,
{g:"14",n:"Como aprender de verdade",s:"o ciclo que fixa, fontes que valem e laboratórios reais",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"O ciclo de aprendizado",x:"IDE e evidências",oq:"Ciclo metódico: leitura dos mecanismos da JVM → vídeo curto de visão geral → validação nos JEPs do OpenJDK → teste e debug na IDE → nota técnica no vault → revisão ativa.",ps:"Garantir que a mecânica de memória e concorrência da JVM seja assimilada com experimentação real.",cf:"Isole a dúvida num teste unitário; inspecione bytecode com javap -c ou breakpoints no debugger; simule falhas de NullPointerException e contenção de travas; anote com suas palavras. Erro comum: assistir aulas passivamente sem rodar o profiler ou debugger.",ex:"# ciclo:\n# 1. ler o conceito\n# 2. abrir a classe no debugger da IDE\n# 3. forçar exceção e inspecionar stacktrace\n# 4. sintetizar em nota atômica"},
 {t:"Canais e cursos em português",x:"fontes de credibilidade",oq:"Curadoria rigorosa de referências técnicas em língua portuguesa e internacional dedicadas ao Java moderno e padrões corporativos.",ps:"Acelerar o aprendizado com criadores que ensinam a mecânica da JVM e boas práticas de código limpo.",cf:"RinaldoDev (concorrência, JVM e Java moderno); DevDojo (fundamentos e práticas completas); Loiane Groner (estruturas de dados e engenharia); Michelli Brito (Java com Spring); dev.java e openjdk.org como portais oficiais. Erro comum: estudar conteúdos defasados de Java 8 ignorando records e virtual threads.",ex:"# referências:\n# RinaldoDev: concorrência e Java moderno\n# DevDojo: fundamentos e estruturas de dados\n# Loiane Groner: algoritmos e Java corporativo\n# docs: dev.java, openjdk.org/jeps, baeldung.com"},
 {t:"Como pesquisar e o que praticar",x:"diagnóstico e portfólio",oq:"Consultas cirúrgicas combinando termos da JVM e desenvolvimento de projetos práticos que testam concorrência, I/O e persistência.",ps:"Desenvolver autonomia para investigar vazamentos de memória e comprovar senioridade no GitHub.",cf:"Use termos técnicos exatos da JVM nas buscas (ex: 'Virtual threads pinning synchronized OpenJDK 21'); analise incidentes com JFR e Eclipse MAT. No portfólio: servidor HTTP minimalista concorrente, mini pool JDBC com Semaphore, motor de mensageria em memória e o Capstone OrderFlow puro. Erro comum: achar que só saber CRUD sem banco ou concorrência comprova domínio de Java.",ex:"# busca cirúrgica:\n\"Virtual threads pinning synchronized OpenJDK 21\"\n# projetos:\n# 1. Servidor HTTP com NIO e Virtual Threads\n# 2. Mini pool JDBC com timeouts\n# 3. Motor thread-safe em memória\n# 4. Capstone OrderFlow completo"}
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
var KEYT="trilha-java-CL-v1";
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
var KEYM="roadmap-java-mestre-CL-v3";
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
 var RK="trilha-java-CL-rev-v1";
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

  /* o fio condutor genérico: o caminho sai da geometria das setas que já existem */
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

// Java Concurrency Simulator Controller
(function(){
  var lab=document.getElementById("concurrLab");
  if(!lab)return;
  var nodes=[
    document.getElementById("jn1"),
    document.getElementById("jn2"),
    document.getElementById("jn3"),
    document.getElementById("jn4"),
    document.getElementById("jn5")
  ];
  var hud=document.getElementById("concurrHud");
  var btn1=document.getElementById("btnJmmVolatile");
  var btn2=document.getElementById("btnJmmCas");
  var btn3=document.getElementById("btnJmmLoom");
  var btnReset=document.getElementById("btnJmmReset");
  var timer=null;

  function clearState(){
    if(timer)clearTimeout(timer);
    nodes.forEach(function(n){
      if(!n)return;
      n.className="cl-node";
    });
  }

  function setHud(lines){
    if(!hud)return;
    hud.innerHTML=lines.map(function(l){
      return '<div class="ch-l '+(l.cls||"ch-info")+'">'+l.txt+'</div>';
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
      {node:0, logs:[{cls:"ch-info",txt:"[Thread 1] Executa flag = true; sem volatile. Dado gravado no cache L1 local do Core 0."}], delay:700},
      {node:1, status:"warn", logs:[{cls:"ch-warn",txt:"[Core 1 / Thread 2] Executa while (!flag). Lê seu próprio cache L1 local onde flag ainda é false!"}], delay:800},
      {node:2, status:"err", logs:[{cls:"ch-err",txt:"⚠️ [Visibilidade Quebrada] Sem Memory Barrier (Happens-Before), o compilador JIT e a CPU reordenam leituras e não sincronizam os caches."}], delay:850},
      {node:3, status:"ok", logs:[{cls:"ch-ok",txt:"[Solução: volatile] Gera instrução de CPU 'lock addl' (StoreLoad barrier), forçando flush para a RAM e invalidando o cache L1 dos outros cores!"}], delay:850},
      {node:4, status:"ok", logs:[{cls:"ch-ok",txt:"✅ [Happens-Before Atendido] Thread 2 imediatamente enxerga flag == true e encerra o loop com segurança!"}], delay:500}
    ]);
  });

  if(btn2) btn2.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"ch-info",txt:"[100 Threads Concorrentes] Disparam incremento contador++ simultaneamente."}], delay:700},
      {node:1, status:"err", logs:[{cls:"ch-err",txt:"[Race Condition] count++ são 3 operações de máquina (READ, ADD, WRITE). Múltiplas threads leem o mesmo valor 42."}], delay:800},
      {node:2, status:"err", logs:[{cls:"ch-err",txt:"💥 [Lost Updates] Duas threads gravam 43 ao mesmo tempo. 1 incremento é silenciosamente perdido!"}], delay:800},
      {node:3, status:"ok", logs:[{cls:"ch-ok",txt:"[Solução: AtomicInteger] Usa Compare-And-Swap (instrução nativa 'lock cmpxchg' da CPU x86)."}], delay:850},
      {node:4, status:"ok", logs:[{cls:"ch-ok",txt:"✅ [Lock-Free Atomic] Se houver conflito, o CAS repete em loop em nanossegundos sem suspender thread no SO. Contagem final = 100 exata!"}], delay:500}
    ]);
  });

  if(btn3) btn3.addEventListener("click",function(){
    runScenario([
      {node:0, logs:[{cls:"ch-info",txt:"[Carga: 10.000 Conexões] Cada requisição faz consulta JDBC bloqueante que leva 1.5 segundo."}], delay:700},
      {node:1, status:"err", logs:[{cls:"ch-err",txt:"⚠️ [Platform Threads Legadas] 1 thread do SO = 1MB de stack nativo. 10.000 threads = 10GB RAM! SO entra em colapso com OutOfMemoryError."}], delay:850},
      {node:2, status:"ok", logs:[{cls:"ch-ok",txt:"[Java 21 Virtual Threads / Loom] Cria 10.000 virtual threads leves no heap (apenas ~1KB cada continuação)."}], delay:800},
      {node:3, status:"ok", logs:[{cls:"ch-ok",txt:"[Unmount em Blocking I/O] Ao bloquear no socket JDBC, a Virtual Thread é desmontada do Carrier Thread do SO. O Carrier Thread atende outra task!"}], delay:850},
      {node:4, status:"ok", logs:[{cls:"ch-ok",txt:"✅ [Throughput Máximo] 10.000 requisições simultâneas atendidas consumindo menos de 30MB de memória sem reatividade complexa!"}], delay:500}
    ]);
  });

  if(btnReset) btnReset.addEventListener("click",function(){
    clearState();
    setHud([{cls:"ch-info",txt:"[JVM Runtime] Escolha um cenário para disparar a análise de memória e threads..."}]);
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

/* Extraido de cadernos/linux.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 2 ---------- */

function W(h,inner){return '<figure class="dg"><svg viewBox="0 0 340 '+h+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg></figure>';}
var DG={
 shell:W(156,'<text x="170" y="16" class="bt">o que acontece quando você aperta Enter</text><rect x="6" y="34" width="66" height="30" rx="8" class="b2"/><text x="39" y="53" class="bs">você digita</text><path d="M74,49 L96,49" class="l"/><path d="M96,49 L88,45 L88,53 Z" class="h"/><rect x="98" y="34" width="70" height="30" rx="8" class="b2"/><text x="133" y="49" class="bs">shell separa</text><text x="133" y="60" class="bs">palavras</text><path d="M170,49 L192,49" class="l"/><path d="M192,49 L184,45 L184,53 Z" class="h"/><rect x="194" y="34" width="66" height="30" rx="8" class="b4"/><text x="227" y="49" class="bs">expande</text><text x="227" y="60" class="bs">* $VAR ~</text><path d="M262,49 L284,49" class="l"/><path d="M284,49 L276,45 L276,53 Z" class="h"/><rect x="286" y="34" width="48" height="30" rx="8" class="b1"/><text x="310" y="53" class="bs">executa</text><text x="170" y="84" class="bs">a expansão acontece ANTES do programa existir</text><text x="170" y="100" class="bs">por isso o programa nunca vê o asterisco — vê a lista de arquivos</text><text x="170" y="124" class="bt">e é por isso que aspas mudam tudo</text><text x="170" y="140" class="bs">rm *.txt e rm "*.txt" fazem coisas diferentes</text>'),
 perm:W(164,'<text x="170" y="16" class="bt">-rwxr-xr--  1 thallys devs</text><rect x="16" y="32" width="34" height="26" rx="6" class="b3"/><text x="33" y="49" class="bs">tipo</text><rect x="56" y="32" width="60" height="26" rx="6" class="b1"/><text x="86" y="49" class="bs">rwx dono</text><rect x="122" y="32" width="60" height="26" rx="6" class="b2"/><text x="152" y="49" class="bs">r-x grupo</text><rect x="188" y="32" width="60" height="26" rx="6" class="b5"/><text x="218" y="49" class="bs">r-- outros</text><text x="86" y="74" class="bs">7</text><text x="152" y="74" class="bs">5</text><text x="218" y="74" class="bs">4</text><text x="152" y="92" class="bt">754</text><text x="170" y="116" class="bs">r=4  w=2  x=1 — some e pronto</text><text x="170" y="134" class="bs">em diretório, x significa ATRAVESSAR, não executar</text><text x="170" y="154" class="bt">sem x no diretório, você não entra nem sabendo o caminho</text>'),
 sinal:W(176,'<text x="170" y="16" class="bt">SIGTERM pede · SIGKILL arranca</text><rect x="10" y="34" width="96" height="46" rx="9" class="b1"/><text x="58" y="52" class="bs">SIGTERM (15)</text><text x="58" y="65" class="bs">o processo escuta</text><text x="58" y="76" class="bs">e decide o que fazer</text><rect x="126" y="34" width="96" height="46" rx="9" class="b5"/><text x="174" y="52" class="bs">SIGKILL (9)</text><text x="174" y="65" class="bs">o kernel mata</text><text x="174" y="76" class="bs">ninguém escuta</text><rect x="242" y="34" width="92" height="46" rx="9" class="b2"/><text x="288" y="52" class="bs">SIGINT (2)</text><text x="288" y="65" class="bs">o seu Ctrl+C</text><text x="288" y="76" class="bs">vai para o grupo</text><text x="170" y="104" class="bs">SIGKILL não deixa fechar arquivo, gravar buffer nem devolver conexão</text><text x="170" y="128" class="bt">por isso o grace period existe</text><text x="170" y="144" class="bs">o Kubernetes manda TERM, espera, e só então KILL</text><text x="170" y="164" class="bs">se a sua app ignora TERM, você tem 30 s de espera inútil a cada deploy</text>'),
 pid1:W(172,'<text x="86" y="16" class="bt">✗ shell form</text><text x="254" y="16" class="bt">✓ exec form</text><line x1="170" y1="24" x2="170" y2="146" class="l d"/><rect x="14" y="32" width="144" height="24" rx="6" class="b5"/><text x="86" y="48" class="bs">CMD java -jar app.jar</text><rect x="30" y="64" width="112" height="26" rx="7" class="b5"/><text x="86" y="81" class="bs">PID 1 = /bin/sh</text><rect x="46" y="96" width="96" height="26" rx="7" class="bx"/><text x="94" y="113" class="bs">PID 7 = java</text><path d="M86,90 L86,94" class="l"/><text x="86" y="138" class="bs">o sh não repassa o sinal</text><rect x="182" y="32" width="144" height="24" rx="6" class="b1"/><text x="254" y="48" class="bs">CMD ["java","-jar","app.jar"]</text><rect x="198" y="70" width="112" height="30" rx="7" class="b1"/><text x="254" y="89" class="bs">PID 1 = java</text><text x="254" y="126" class="bs">o sinal chega direto</text><text x="254" y="140" class="bs">shutdown limpo</text><text x="170" y="166" class="bt">a diferença aparece só no deploy — e some no teste local</text>'),
 fd:W(168,'<text x="170" y="16" class="bt">os três descritores</text><rect x="120" y="60" width="100" height="44" rx="10" class="b2"/><text x="170" y="80" class="bs">o programa</text><text x="170" y="95" class="bs">não sabe para onde vai</text><path d="M60,50 L118,66" class="lt"/><path d="M118,66 L110,64 L112,71 Z" class="ht"/><rect x="6" y="36" width="52" height="26" rx="7" class="b1"/><text x="32" y="53" class="bs">0 stdin</text><path d="M222,66 L286,44" class="lt"/><path d="M286,44 L278,45 L280,52 Z" class="ht"/><rect x="288" y="30" width="46" height="26" rx="7" class="b1"/><text x="311" y="47" class="bs">1 out</text><path d="M222,96 L286,116" class="lr"/><path d="M286,116 L278,113 L277,120 Z" class="hr"/><rect x="288" y="102" width="46" height="26" rx="7" class="b5"/><text x="311" y="119" class="bs">2 err</text><text x="170" y="134" class="bs">cmd &gt; log.txt redireciona só o 1 — o erro continua na tela</text><text x="170" y="152" class="bs">2&gt;&amp;1 manda o 2 para onde o 1 JÁ está: a ordem importa</text>'),
 pipe:W(150,'<text x="170" y="16" class="bt">cada programa faz uma coisa e passa adiante</text><rect x="6" y="40" width="62" height="30" rx="8" class="b2"/><text x="37" y="59" class="bs">cat log</text><path d="M70,55 L88,55" class="lt"/><path d="M88,55 L80,51 L80,59 Z" class="ht"/><rect x="90" y="40" width="62" height="30" rx="8" class="b2"/><text x="121" y="59" class="bs">grep ERRO</text><path d="M154,55 L172,55" class="lt"/><path d="M172,55 L164,51 L164,59 Z" class="ht"/><rect x="174" y="40" width="54" height="30" rx="8" class="b2"/><text x="201" y="59" class="bs">sort</text><path d="M230,55 L248,55" class="lt"/><path d="M248,55 L240,51 L240,59 Z" class="ht"/><rect x="250" y="40" width="84" height="30" rx="8" class="b1"/><text x="292" y="55" class="bs">uniq -c</text><text x="292" y="66" class="bs">contagem</text><text x="170" y="92" class="bs">nenhum deles sabe que os outros existem</text><text x="170" y="112" class="bt">o pipe é um cano na memória, não um arquivo</text><text x="170" y="130" class="bs">e roda tudo ao mesmo tempo — não um depois do outro</text>'),
 disco:W(168,'<text x="170" y="16" class="bt">df diz cheio · du não acha nada</text><rect x="14" y="34" width="140" height="62" rx="9" class="b5"/><text x="84" y="54" class="bs">df -h  →  100% usado</text><text x="84" y="70" class="bs">du -sh * →  2 GB só</text><text x="84" y="86" class="bs">onde estão os outros 48?</text><path d="M156,66 L186,66" class="l"/><path d="M186,66 L178,62 L178,70 Z" class="h"/><rect x="188" y="34" width="146" height="62" rx="9" class="b1"/><text x="261" y="52" class="bs">arquivo APAGADO</text><text x="261" y="66" class="bs">com processo ainda segurando</text><text x="261" y="82" class="bs">lsof +L1 mostra</text><text x="170" y="118" class="bs">o inode só some quando o último descritor fecha</text><text x="170" y="136" class="bt">apagar o log não devolve o disco</text><text x="170" y="154" class="bs">é preciso reiniciar o processo — ou truncar em vez de apagar</text>'),
 conta:W(160,'<text x="170" y="16" class="bt">"a memória acabou" quase nunca é verdade</text><rect x="14" y="34" width="312" height="34" rx="8" class="bx"/><rect x="16" y="36" width="110" height="30" rx="7" class="b2"/><text x="71" y="55" class="bs">apps</text><rect x="128" y="36" width="150" height="30" rx="7" class="b1"/><text x="203" y="51" class="bs">cache de página</text><text x="203" y="63" class="bs">devolvível na hora</text><rect x="280" y="36" width="44" height="30" rx="7" class="b3"/><text x="302" y="55" class="bs">livre</text><text x="170" y="88" class="bs">o Linux usa toda RAM ociosa como cache de disco</text><text x="170" y="106" class="bt">olhe available, não free</text><text x="170" y="124" class="bs">free baixo é saúde; available baixo é problema</text><text x="170" y="146" class="bs">e dentro do container, o free mente: ele mostra a máquina inteira</text>'),
 ns:W(180,'<text x="170" y="16" class="bt">o container é o mesmo kernel, com a vista recortada</text><rect x="10" y="30" width="320" height="104" rx="10" class="b3"/><text x="170" y="46" class="bs">kernel do host — um só</text><rect x="26" y="56" width="134" height="66" rx="9" class="b2"/><text x="93" y="74" class="bs">container A</text><text x="93" y="90" class="bs">PID 1, 7, 12</text><text x="93" y="106" class="bs">/ próprio · rede própria</text><rect x="180" y="56" width="134" height="66" rx="9" class="b1"/><text x="247" y="74" class="bs">container B</text><text x="247" y="90" class="bs">PID 1, 5</text><text x="247" y="106" class="bs">/ próprio · rede própria</text><text x="170" y="152" class="bs">namespace = o que você ENXERGA · cgroup = quanto você PODE usar</text><text x="170" y="172" class="bt">top e free leem /proc do host: por isso mentem lá dentro</text>'),
 ciclo:W(150,'<text x="170" y="16" class="bt">o ciclo que fixa</text><rect x="10" y="34" width="66" height="30" rx="8" class="b2"/><text x="43" y="53" class="bs">ler aqui</text><path d="M78,49 L96,49" class="l"/><path d="M96,49 L88,45 L88,53 Z" class="h"/><rect x="98" y="34" width="66" height="30" rx="8" class="b2"/><text x="131" y="53" class="bs">man / --help</text><path d="M166,49 L184,49" class="l"/><path d="M184,49 L176,45 L176,53 Z" class="h"/><rect x="186" y="34" width="66" height="30" rx="8" class="b2"/><text x="219" y="53" class="bs">quebrar</text><path d="M254,49 L272,49" class="l"/><path d="M272,49 L264,45 L264,53 Z" class="h"/><rect x="274" y="34" width="60" height="30" rx="8" class="b1"/><text x="304" y="53" class="bs">consertar</text><path d="M304,66 L304,88 L43,88 L43,66" class="lt d"/><path d="M43,66 L39,74 L47,74 Z" class="ht"/><text x="170" y="104" class="bs">num container descartável, quebrar é de graça</text><text x="170" y="126" class="bt">esta é a única área em que o laboratório não tem risco</text><text x="170" y="142" class="bs">docker run --rm -it debian bash — e destrua à vontade</text>')
};

var T=[
{g:"01",n:"O shell",s:"o que acontece entre o Enter e o programa rodar",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Terminal, shell e programa",x:"três coisas que ninguém separa",dg:"shell",oq:"O terminal é a janela; o shell é o programa que lê o que você digita e decide o que executar; o comando é um terceiro programa que o shell chama.",ps:"Sem essa separação, metade do comportamento estranho do terminal fica inexplicável.",cf:"Quando você aperta Enter, o shell separa a linha em palavras, <b>expande</b> o que precisa ser expandido (curinga, variável, til, subcomando) e só então executa. O programa nunca vê o <code class=\"i\">*</code> — vê a lista de arquivos que o shell já resolveu. <b>Erro comum:</b> achar que o programa interpreta o asterisco. É por isso que aspas mudam o resultado.",ex:"ls *.txt          # o shell vira: ls a.txt b.txt c.txt\nls \"*.txt\"        # o programa recebe o asterisco literal\n\necho $HOME        # expande\necho '$HOME'      # nao expande: aspas simples travam tudo"},
 {t:"PATH e command not found",x:"onde o shell procura",oq:"<code class=\"i\">PATH</code> é a lista de diretórios, separados por dois-pontos, onde o shell procura um executável pelo nome.",ps:"Explicar de uma vez o erro mais comum de quem começa — e o segundo mais comum, que é o programa errado rodando.",cf:"Se o nome não tem barra, o shell varre o PATH na ordem e usa o <b>primeiro</b> que encontrar. <code class=\"i\">which</code> mostra qual seria; <code class=\"i\">type -a</code> mostra todos, inclusive apelidos e funções que têm prioridade sobre o PATH. <b>Erro comum:</b> instalar uma versão nova e continuar rodando a antiga, porque ela aparece antes no PATH.",ex:"echo $PATH | tr ':' '\\n'   # uma por linha, na ordem de busca\ntype -a python             # TODOS os candidatos, na ordem\nwhich -a java\n\n# o ./ existe por seguranca: sem ele, o shell nao\n# procura no diretorio atual — e isso e proposital\n./meu-script.sh"},
 {t:"Aspas e expansão",x:"a fonte de metade dos bugs de script",oq:"Aspas duplas preservam espaços mas ainda expandem variáveis; aspas simples travam tudo; sem aspas, o shell divide por espaço e expande curinga.",ps:"Um script sem aspas funciona até o dia em que um caminho tem espaço — e aí faz algo destrutivo em outro lugar.",cf:"A regra prática é simples: <b>sempre use aspas duplas em volta de variável</b>, salvo quando você quer a divisão por espaço de propósito. <b>Erro comum:</b> <code class=\"i\">rm -rf $DIR/</code> com <code class=\"i\">DIR</code> vazio vira <code class=\"i\">rm -rf /</code>.",ex:"arq=\"meu relatorio.pdf\"\nrm $arq      # vira: rm meu   relatorio.pdf  → dois arquivos\nrm \"$arq\"    # certo\n\n# e a protecao que todo script serio tem na primeira linha:\nset -euo pipefail"},
 {t:"Onde pedir ajuda",x:"man, --help e o resto",oq:"<code class=\"i\">man</code> traz o manual completo; <code class=\"i\">--help</code> traz o resumo; <code class=\"i\">tldr</code> traz exemplos de uso real.",ps:"Saber consultar vale mais que decorar flag — e o manual está na máquina, offline.",cf:"Dentro do <code class=\"i\">man</code>, <code class=\"i\">/palavra</code> busca, <code class=\"i\">n</code> vai para a próxima ocorrência, <code class=\"i\">q</code> sai. As seções importam: <code class=\"i\">man 1 printf</code> é o comando, <code class=\"i\">man 3 printf</code> é a função em C. <b>Erro comum:</b> procurar no navegador o que o <code class=\"i\">man</code> responderia mais rápido e para a sua versão exata."}
]},
{g:"02",n:"Tudo é arquivo",s:"permissões, donos e o container que não escreve",c:"var(--cyan)",cs:"var(--arc-soft)",items:[
 {t:"Permissões e o octal",x:"rwx, e por que 754",dg:"perm",oq:"Cada arquivo tem três conjuntos de permissão — dono, grupo e outros — com três bits cada: ler, escrever, executar.",ps:"É o mecanismo que decide se o seu container consegue gravar, e a causa da metade dos <i>permission denied</i>.",cf:"Some os valores: r=4, w=2, x=1. <code class=\"i\">rwx</code>=7, <code class=\"i\">r-x</code>=5, <code class=\"i\">r--</code>=4, daí 754. <b>Em diretório o x significa outra coisa:</b> atravessar. Sem x no diretório você não entra nem sabendo o caminho completo; sem r você não lista, mas ainda acessa um arquivo cujo nome você já conhece. <b>Erro comum:</b> resolver tudo com 777, que é abrir escrita para qualquer processo da máquina.",ex:"chmod 640 config.yml    # dono le/escreve, grupo le, resto nada\nchmod +x script.sh      # adiciona x para todos\nchmod u+x script.sh     # so para o dono\n\nls -l\n# -rw-r--r--  1 thallys devs  1240 config.yml\n#  ^tipo ^dono ^grupo ^outros"},
 {t:"Dono, grupo e o container non-root",x:"o volume que aparece só-leitura",oq:"Todo arquivo tem um dono numérico (UID) e um grupo (GID). O nome é só uma tradução feita pela máquina que está olhando.",ps:"Entender por que um volume montado no container aparece sem permissão mesmo estando certo no host.",cf:"O kernel compara <b>números</b>, não nomes. Um arquivo do UID 1000 no host, montado num container cujo processo roda como UID 1001, é de outra pessoa — e o container não escreve. <b>Erro comum:</b> rodar o container como root para resolver, o que funciona e é exatamente o que o A03 do Laboratório manda não fazer.",caso:"Você monta <code class=\"i\">./dados</code> no container, a aplicação tenta gravar e recebe <i>permission denied</i>. No host o <code class=\"i\">ls -l</code> mostra o seu usuário como dono e tudo parece certo. O que está errado é o número: dentro do container o processo é outro UID. A saída limpa é alinhar o UID na build (<code class=\"i\">useradd -u 1000</code>) ou ajustar o dono do diretório montado.",ex:"id                       # seu UID/GID no host\ndocker run --rm -it -u \"$(id -u):$(id -g)\" \\\n  -v \"$PWD/dados:/app/dados\" minha-app\n\n# no Dockerfile, o usuario com UID fixo:\n# RUN useradd -u 1000 -m app\n# USER app"},
 {t:"Links: simbólico e duro",x:"atalho contra segundo nome",oq:"O link simbólico guarda um caminho de texto. O link duro é um segundo nome para o mesmo inode — o mesmo arquivo, com dois nomes igualmente reais.",ps:"Explica por que apagar um não apaga o outro, e por que o simbólico quebra quando o alvo sai do lugar.",cf:"Apagar o alvo deixa o simbólico apontando para o vazio (<i>dangling</i>); apagar um dos nomes do link duro não apaga nada, porque o inode só some quando o último nome e o último descritor somem. <b>Erro comum:</b> copiar uma árvore com links simbólicos relativos e não entender por que quebraram do outro lado.",ex:"ln -s /opt/app/config.yml config.yml   # simbolico\nln  arquivo.txt outro-nome.txt         # duro\n\nls -l config.yml    # mostra -> /opt/app/config.yml\nls -i arquivo.txt outro-nome.txt   # MESMO numero de inode"},
 {t:"Encontrar arquivos",x:"find, e por que ele é diferente",oq:"<code class=\"i\">find</code> percorre a árvore aplicando testes e ações — não é uma busca por nome, é um percurso com filtros.",ps:"É a ferramenta para as perguntas que o <code class=\"i\">ls</code> não responde: o que mudou nas últimas 24 horas, o que é maior que 100 MB, o que ninguém abriu em um ano.",cf:"Combine com <code class=\"i\">-exec</code> ou com <code class=\"i\">xargs</code> para agir sobre o resultado. Use <code class=\"i\">-print0</code> com <code class=\"i\">xargs -0</code> quando os nomes puderem ter espaço. <b>Erro comum:</b> <code class=\"i\">find . -name *.log</code> sem aspas — o shell expande o curinga antes e o find recebe outra coisa.",ex:"find /var/log -name \"*.log\" -size +100M\nfind . -type f -mtime -1            # mudou nas ultimas 24h\nfind . -name \"*.tmp\" -delete\n\n# com espacos no nome, o par seguro:\nfind . -name \"*.log\" -print0 | xargs -0 gzip"}
]},
{g:"03",n:"Processos e sinais",s:"SIGTERM contra SIGKILL — e o PID 1 do seu container",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"O que é um processo",x:"PID, PPID e o pai que some",oq:"Um programa em execução, com identificador próprio (PID), um pai (PPID), memória isolada e uma tabela de arquivos abertos.",ps:"É a unidade que você mata, observa e limita — tudo em operação gira em torno dela.",cf:"Todo processo nasce de um <code class=\"i\">fork</code> do pai seguido de <code class=\"i\">exec</code>. Se o pai morre antes, o filho é adotado pelo PID 1. Processo que terminou e cujo pai não recolheu o código de saída vira <b>zumbi</b>: não consome CPU, mas ocupa uma entrada na tabela. <b>Erro comum:</b> tentar matar um zumbi — o alvo certo é o pai que não está recolhendo.",ex:"ps -ef --forest         # a arvore de processos\nps -o pid,ppid,stat,cmd -p 1234\n\n# STAT: S dormindo · R rodando · Z zumbi · D I/O ininterrompivel\n# D e o estado que nem kill -9 resolve — ele espera o disco"},
 {t:"Sinais",x:"TERM pede, KILL arranca",dg:"sinal",oq:"Sinal é uma notificação assíncrona que o kernel entrega a um processo. O processo pode tratar quase todos — menos <code class=\"i\">SIGKILL</code> e <code class=\"i\">SIGSTOP</code>.",ps:"É o mecanismo por trás de todo encerramento, e a diferença entre um deploy limpo e um deploy que corta conexões pela metade.",cf:"<b>SIGTERM (15)</b> é um pedido: a aplicação escuta, para de aceitar requisição nova, termina as em andamento, fecha conexões e sai. <b>SIGKILL (9)</b> não chega à aplicação — o kernel a remove. Nada é salvo, nenhum buffer é gravado, nenhuma conexão é devolvida. <b>SIGINT (2)</b> é o seu Ctrl+C, e vai para o grupo de processos em primeiro plano. <b>Erro comum:</b> usar <code class=\"i\">kill -9</code> por reflexo e culpar o banco pela conexão órfã.",caso:"O Kubernetes manda SIGTERM, espera o <i>grace period</i> (30 s por padrão) e então manda SIGKILL. Se a sua aplicação não trata TERM, você paga 30 segundos de espera inútil em cada pod, a cada deploy — e mesmo assim morre de forma suja no fim.",ex:"kill 1234        # TERM: o padrao, e o educado\nkill -9 1234     # KILL: ultimo recurso\nkill -l           # lista todos os sinais\n\n# no shell script, capturar para limpar antes de sair:\ntrap 'echo limpando; rm -f \"$tmp\"' EXIT INT TERM"},
 {t:"PID 1 e o entrypoint",x:"onde o sinal se perde",dg:"pid1",oq:"Dentro do container, o processo do entrypoint é o PID 1 — e o PID 1 tem tratamento especial do kernel: sinais sem handler explícito são <b>ignorados</b>.",ps:"É a causa número um de container que não responde ao Ctrl+C nem ao TERM do orquestrador.",cf:"Na forma shell (<code class=\"i\">CMD java -jar app.jar</code>), o Docker roda <code class=\"i\">/bin/sh -c</code>, que vira o PID 1 e <b>não repassa</b> o sinal ao filho. Na forma exec (<code class=\"i\">CMD [\"java\",\"-jar\",\"app.jar\"]</code>), a sua aplicação é o PID 1 e recebe direto. <b>Erro comum:</b> o problema só aparece no deploy — localmente você fecha o terminal e nem nota.",map:[["Docker e Kubernetes","O ciclo de vida do pod, o grace period e o preStop no detalhe."],["Spring","Graceful shutdown do Spring Boot e o que ele fecha."]],ex:"# ERRADO — sh vira PID 1 e engole o sinal\nCMD java -jar app.jar\n\n# CERTO — a JVM e o PID 1\nCMD [\"java\",\"-jar\",\"app.jar\"]\n\n# quando precisar mesmo de shell, passe a bola com exec:\n# CMD [\"sh\",\"-c\",\"exec java -jar app.jar\"]"},
 {t:"Primeiro e segundo plano",x:"jobs, nohup e o processo que morreu junto",oq:"O shell organiza os processos que ele iniciou em <i>jobs</i>: em primeiro plano (segurando o terminal) ou em segundo (liberando o prompt).",ps:"Explica por que o processo morre quando você fecha a sessão SSH — e como evitar.",cf:"Ao encerrar a sessão, o shell manda <code class=\"i\">SIGHUP</code> aos jobs. <code class=\"i\">nohup</code> ignora esse sinal; <code class=\"i\">disown</code> tira o job da lista do shell. Para algo que precisa sobreviver de verdade, a resposta certa não é nenhum dos dois: é <b>um serviço do systemd</b>. <b>Erro comum:</b> deixar processo de produção rodando em <code class=\"i\">nohup</code> dentro de um <code class=\"i\">screen</code> que ninguém sabe que existe.",ex:"comando &          # segundo plano\njobs               # lista os jobs deste shell\nfg %1              # traz para o primeiro plano\nCtrl+Z             # suspende (SIGTSTP)\nbg                 # continua em segundo plano\n\nnohup ./demorado.sh > saida.log 2>&1 &"},
 {t:"Limites e o OOM killer",x:"quem escolhe quem morre",oq:"Quando a memória acaba, o kernel escolhe um processo e o mata. A escolha usa uma pontuação por consumo e por ajuste configurado.",ps:"É a explicação do <i>Exit Code 137</i> e do container que some sem log de erro nenhum.",cf:"137 = 128 + 9, ou seja, morreu por SIGKILL — e quando vem do OOM, não há chance de gravar nada. Em container, o limite é do cgroup, não da máquina. <b>Erro comum:</b> procurar exceção no log da aplicação. Não vai ter: ela não foi avisada. O rastro está no <code class=\"i\">dmesg</code> do host ou no <code class=\"i\">kubectl describe pod</code>.",ex:"dmesg -T | grep -i \"killed process\"\nkubectl describe pod meu-pod | grep -A3 \"Last State\"\n\n# Exit Code 137 = 128 + 9 (SIGKILL)\n# Exit Code 143 = 128 + 15 (SIGTERM)"}
]},
{g:"04",n:"Entrada, saída e pipes",s:"os três descritores e a filosofia que sustenta tudo",c:"var(--orange)",cs:"var(--orange-soft)",items:[
 {t:"Os três descritores",x:"0, 1 e 2",dg:"fd",oq:"Todo processo nasce com três canais abertos: entrada padrão (0), saída padrão (1) e saída de erro (2).",ps:"Separar dado de diagnóstico — para que um possa ser processado enquanto o outro é lido por uma pessoa.",cf:"O programa não sabe para onde eles apontam: pode ser o terminal, um arquivo, um pipe. Quem decide é quem chamou. <b>Erro comum:</b> <code class=\"i\">cmd &gt; log.txt</code> e estranhar que o erro continua na tela — o <code class=\"i\">&gt;</code> redireciona só o descritor 1.",ex:"cmd > saida.txt        # so o stdout\ncmd 2> erros.txt       # so o stderr\ncmd > tudo.txt 2>&1    # os dois no mesmo lugar\ncmd &> tudo.txt        # atalho do bash para o de cima\ncmd 2>/dev/null        # descarta o erro"},
 {t:"A ordem do 2>&1",x:"o detalhe que inverte o resultado",oq:"<code class=\"i\">2&gt;&amp;1</code> significa: mande o descritor 2 para onde o descritor 1 <b>está agora</b>.",ps:"É a pegadinha clássica de shell, e ela silenciosamente joga fora o log de erro.",cf:"<code class=\"i\">cmd &gt; f 2&gt;&amp;1</code> manda o 1 para o arquivo e depois o 2 para o mesmo arquivo: funciona. <code class=\"i\">cmd 2&gt;&amp;1 &gt; f</code> manda o 2 para o terminal (onde o 1 ainda está) e só depois muda o 1 para o arquivo: o erro fica na tela. <b>Erro comum:</b> escrever a segunda forma achando que é a mesma coisa.",ex:"cmd > f 2>&1     # OS DOIS no arquivo\ncmd 2>&1 > f     # erro na TELA, saida no arquivo\n\n# e o caso que aparece em cron:\n0 3 * * * /script.sh >> /var/log/s.log 2>&1"},
 {t:"Pipes",x:"a filosofia Unix em um caractere",dg:"pipe",oq:"O pipe liga a saída de um programa à entrada do próximo, em memória, sem arquivo intermediário.",ps:"Permite compor ferramentas pequenas em soluções que ninguém programou — que é a ideia central do Unix.",cf:"Os programas rodam <b>ao mesmo tempo</b>, não um depois do outro: o segundo já começa a consumir enquanto o primeiro ainda produz. Se o segundo morre, o primeiro recebe <code class=\"i\">SIGPIPE</code>. <b>Erro comum:</b> esquecer que só o stdout entra no pipe — para canalizar erro também, <code class=\"i\">2&gt;&amp;1 |</code> ou <code class=\"i\">|&amp;</code>.",ex:"cat app.log | grep ERRO | sort | uniq -c | sort -rn | head\n\n# o codigo de saida do pipe e o do ULTIMO comando.\n# para pegar a falha de qualquer etapa:\nset -o pipefail"},
 {t:"tee e /dev/null",x:"ver e gravar ao mesmo tempo",oq:"<code class=\"i\">tee</code> escreve na saída padrão <b>e</b> num arquivo. <code class=\"i\">/dev/null</code> é o descarte oficial do sistema.",ps:"Acompanhar um processo demorado sem perder o registro dele.",cf:"Combine com <code class=\"i\">sudo</code> para resolver o caso em que o redirecionamento falha: o <code class=\"i\">&gt;</code> é executado pelo <b>seu</b> shell, não pelo sudo. <b>Erro comum:</b> <code class=\"i\">sudo echo x &gt; /etc/arquivo</code> — o echo roda como root, mas quem abre o arquivo é o seu shell, sem permissão.",ex:"./build.sh 2>&1 | tee build.log        # ve e grava\n./build.sh | tee -a build.log          # acrescenta\n\n# o caso do sudo:\necho \"linha\" | sudo tee -a /etc/hosts > /dev/null"}
]},
{g:"05",n:"O trio do texto",s:"grep, sed e awk — e a montagem que resolve",c:"var(--pink)",cs:"var(--pink-soft)",items:[
 {t:"grep",x:"o primeiro passo de toda investigação",oq:"Filtra linhas que casam com um padrão. É a ferramenta mais usada de toda a lista, e a que mais rende quando você aprende quatro flags.",ps:"Reduzir milhões de linhas ao punhado que interessa, antes de olhar com atenção.",cf:"As quatro que mudam tudo: <code class=\"i\">-i</code> ignora maiúsculas, <code class=\"i\">-v</code> inverte, <code class=\"i\">-r</code> percorre diretórios, e <code class=\"i\">-C 3</code> mostra três linhas de contexto em volta — essencial em log, porque o erro raramente está sozinho. <b>Erro comum:</b> esquecer as aspas no padrão e deixar o shell expandir antes.",ex:"grep -i \"erro\" app.log\ngrep -C 3 \"OutOfMemory\" app.log     # com contexto\ngrep -rn \"TODO\" src/                # recursivo, com linha\ngrep -v \"DEBUG\" app.log             # tudo MENOS debug\ngrep -c \"ERRO\" app.log              # so conta"},
 {t:"sed",x:"substituição em fluxo",oq:"Editor de fluxo: lê linha a linha, aplica um comando, escreve. O uso dominante é a substituição.",ps:"Trocar em massa, extrair um trecho, apagar linhas — sem abrir editor e sem carregar o arquivo na memória.",cf:"A forma é <code class=\"i\">s/procura/troca/</code>, com <code class=\"i\">g</code> para todas as ocorrências da linha. O separador não precisa ser <code class=\"i\">/</code>: com caminhos, use <code class=\"i\">|</code> e evite a cerca de barras escapadas. <b>Erro comum:</b> <code class=\"i\">-i</code> sem backup. Ele altera o arquivo no lugar, e não há desfazer.",ex:"sed 's/antigo/novo/g' arquivo.txt          # imprime\nsed -i.bak 's/antigo/novo/g' arquivo.txt   # altera, com backup\nsed -n '10,20p' arquivo.txt                # so as linhas 10 a 20\nsed '/^#/d' config.conf                    # remove comentarios\n\nsed 's|/caminho/antigo|/caminho/novo|g' f  # separador alternativo"},
 {t:"awk",x:"colunas e agregação",oq:"Uma linguagem pequena orientada a linhas e campos: divide cada linha em colunas e executa uma ação por linha.",ps:"Somar, contar, agrupar e formatar direto no terminal, sem exportar para lugar nenhum.",cf:"<code class=\"i\">$1</code> é a primeira coluna, <code class=\"i\">$NF</code> a última, <code class=\"i\">NR</code> o número da linha. Blocos <code class=\"i\">BEGIN</code> e <code class=\"i\">END</code> rodam antes e depois de tudo — e é no END que a agregação é impressa. <b>Erro comum:</b> usar <code class=\"i\">cut</code> para colunas separadas por múltiplos espaços; o awk lida com isso naturalmente e o cut não.",ex:"awk '{print $1, $NF}' arquivo\nawk -F',' '{soma+=$3} END {print soma}' vendas.csv\nawk '$3 > 100 {print}' dados.txt\nawk '{c[$1]++} END {for(k in c) print c[k], k}' log | sort -rn"},
 {t:"A montagem",x:"sort, uniq, cut, wc, xargs",oq:"Os utilitários pequenos que ligam os grandes: ordenar, contar repetição, recortar coluna, contar linhas, transformar lista em argumento.",ps:"É a composição que transforma três comandos numa resposta.",cf:"<code class=\"i\">uniq</code> só junta linhas <b>adjacentes</b> — por isso quase sempre vem depois de <code class=\"i\">sort</code>. <code class=\"i\">sort -rn</code> ordena por número, do maior para o menor, que é o par natural de <code class=\"i\">uniq -c</code>. <b>Erro comum:</b> <code class=\"i\">uniq</code> sem <code class=\"i\">sort</code> antes, e concluir que não havia duplicata.",caso:"A pergunta “quais os 10 IPs que mais bateram na API hoje” é uma linha só, e ela resume esta parte inteira: recorta a coluna, ordena, conta repetição, ordena pelo contador, pega os dez primeiros.",ex:"awk '{print $1}' access.log | sort | uniq -c | sort -rn | head -10\n\nwc -l app.log                    # quantas linhas\ncut -d',' -f1,3 dados.csv        # colunas 1 e 3\nls *.log | xargs gzip            # lista vira argumento"}
]},
{g:"06",n:"Disco, memória e rede",s:"os três sintomas que você vai encontrar de madrugada",c:"var(--yellow)",cs:"var(--yellow-soft)",items:[
 {t:"O disco encheu",x:"e o du não acha o culpado",dg:"disco",oq:"<code class=\"i\">df</code> pergunta ao sistema de arquivos quanto está ocupado; <code class=\"i\">du</code> soma o tamanho dos arquivos que consegue ver.",ps:"Quando os dois discordam, a diferença é a resposta — e é sempre a mesma resposta.",cf:"Um arquivo apagado cujo processo ainda mantém aberto continua ocupando disco: o <code class=\"i\">du</code> não o vê, porque o nome sumiu; o <code class=\"i\">df</code> vê, porque o inode continua lá. O espaço só volta quando o último descritor fecha. <b>Erro comum:</b> apagar o log gigante e o disco continuar cheio.",caso:"<code class=\"i\">df -h</code> diz 100% em <code class=\"i\">/var</code>. <code class=\"i\">du -sh /var/*</code> soma 2 GB num disco de 50. O <code class=\"i\">lsof +L1</code> mostra o culpado: um log de 46 GB apagado por um script de limpeza, com a aplicação ainda segurando o descritor. A correção é reiniciar o processo — ou, da próxima vez, <b>truncar em vez de apagar</b>.",ex:"df -h                    # por sistema de arquivos\ndf -i                    # INODES: enchem antes do espaco\n                         # em diretorio com milhoes de arquivos pequenos\ndu -sh /var/* | sort -h  # os maiores\nlsof +L1                 # apagados e ainda abertos\n\n# truncar em vez de apagar devolve o espaco na hora:\n: > /var/log/app.log"},
 {t:"A memória que parece ter acabado",x:"free baixo é saúde",dg:"conta",oq:"O Linux usa toda RAM ociosa como cache de disco. Memória livre é memória desperdiçada, e o sistema devolve o cache na hora em que alguém precisar.",ps:"Parar de diagnosticar errado o servidor que “está sem memória”.",cf:"A coluna que importa é <b>available</b>, não <b>free</b>: available é o que uma aplicação nova conseguiria, incluindo o cache que seria devolvido. <b>Erro comum:</b> dentro do container, o <code class=\"i\">free</code> mostra a memória da <b>máquina inteira</b>, não o limite do cgroup — e a JVM antiga dimensionava o heap por esse número, o que gerava o OOM misterioso.",ex:"free -h\n#         total  usado  livre  buff/cache  disponivel\n#                              ^devolvivel  ^o que importa\n\n# o limite REAL dentro do container:\ncat /sys/fs/cgroup/memory.max          # cgroup v2\n\n# e a flag que ensinou a JVM a respeitar o cgroup:\njava -XX:MaxRAMPercentage=75 -jar app.jar"},
 {t:"A porta que não responde",x:"ss, curl, dig e lsof",oq:"Quatro perguntas em sequência: alguém está escutando? o nome resolve? a conexão fecha? quem é o dono da porta?",ps:"Transformar “não conecta” numa das quatro causas possíveis, em menos de um minuto.",cf:"Faça na ordem: <code class=\"i\">ss -tlnp</code> mostra quem escuta e em qual interface — escutar em <code class=\"i\">127.0.0.1</code> em vez de <code class=\"i\">0.0.0.0</code> é a causa clássica de container inacessível. <code class=\"i\">dig</code> resolve o nome. <code class=\"i\">curl -v</code> mostra onde parou. <b>Erro comum:</b> culpar o firewall antes de olhar a interface.",caso:"O serviço sobe, o log diz <i>Started on port 8080</i>, e de fora nada responde. O <code class=\"i\">ss -tlnp</code> revela <code class=\"i\">127.0.0.1:8080</code>: ele está escutando só no loopback. Dentro do container isso significa que nem o mapeamento de porta do Docker alcança.",ex:"ss -tlnp                 # TCP, escutando, numerico, com processo\nss -tnp | grep 8080      # conexoes nessa porta\n\ncurl -v http://localhost:8080/health\ncurl -sS -o /dev/null -w \"%{http_code} %{time_total}s\\n\" URL\n\ndig +short api.exemplo.com\nlsof -i :8080            # quem e o dono da porta"},
 {t:"Quem está segurando",x:"lsof, o canivete",oq:"Lista arquivos abertos — e como quase tudo é arquivo, isso inclui sockets, pipes, bibliotecas e diretórios.",ps:"Responder “quem está usando isso?” para porta, arquivo, ponto de montagem ou disco que não desmonta.",cf:"<code class=\"i\">-i</code> filtra rede, <code class=\"i\">-p</code> filtra por processo, <code class=\"i\">+L1</code> mostra os apagados-mas-abertos. Em sistema com muitos processos ele é lento: filtre sempre. <b>Erro comum:</b> rodar sem <code class=\"i\">sudo</code> e ver só os seus processos, concluindo que ninguém está segurando.",ex:"sudo lsof -i :5432          # quem usa a porta do Postgres\nsudo lsof -p 1234           # tudo que o processo 1234 abriu\nsudo lsof +D /mnt/dados     # quem impede o umount\nsudo lsof +L1               # apagados, ainda ocupando disco"}
]},
{g:"07",n:"systemd e logs",s:"serviço, unit e journalctl",c:"var(--blue)",cs:"var(--blue-soft)",items:[
 {t:"Serviço e unit",x:"a resposta certa para 'precisa subir sozinho'",oq:"O systemd é o PID 1 da máquina. Uma <i>unit</i> descreve um serviço: o que executar, como reiniciar, de que depende e com qual usuário rodar.",ps:"É o que substitui o <code class=\"i\">nohup</code> dentro de um <code class=\"i\">screen</code> — com reinício automático, log centralizado e ordem de dependência.",cf:"<code class=\"i\">Restart=on-failure</code> reinicia só quando sai com erro; <code class=\"i\">always</code> reinicia sempre. <code class=\"i\">enable</code> faz subir no boot, <code class=\"i\">start</code> sobe agora — são coisas diferentes. <b>Erro comum:</b> dar <code class=\"i\">start</code> e não dar <code class=\"i\">enable</code>, e descobrir no próximo reboot.",ex:"systemctl status app\nsystemctl start app        # agora\nsystemctl enable app       # no boot\nsystemctl enable --now app # os dois\n\nsystemctl daemon-reload    # depois de EDITAR a unit\nsystemctl restart app      # depois de trocar o BINARIO"},
 {t:"journalctl",x:"as cinco flags que resolvem",oq:"O journal é o log estruturado do systemd: guarda a saída dos serviços com carimbo de tempo, prioridade e unidade de origem.",ps:"Investigar sem saber de antemão em qual arquivo o serviço resolveu escrever.",cf:"<code class=\"i\">-u</code> filtra a unidade, <code class=\"i\">-f</code> acompanha ao vivo, <code class=\"i\">--since</code> corta por tempo em linguagem natural, <code class=\"i\">-p err</code> filtra por prioridade, <code class=\"i\">-b</code> limita ao boot atual. <b>Erro comum:</b> não configurar persistência e perder tudo no reboot — por padrão, em muitas distribuições, o journal é volátil.",ex:"journalctl -u app -f                 # ao vivo\njournalctl -u app --since \"1 hour ago\"\njournalctl -u app -p err             # so erro e acima\njournalctl -b -1                     # o boot ANTERIOR\njournalctl --disk-usage\n\n# tornar persistente:\n# /etc/systemd/journald.conf → Storage=persistent"},
 {t:"Onde o log realmente está",x:"journal, /var/log e o stdout do container",oq:"Três destinos diferentes, com regras diferentes de rotação e retenção.",ps:"Saber onde procurar antes de procurar.",cf:"Serviço do systemd vai para o journal. Aplicações antigas escrevem em <code class=\"i\">/var/log</code>, com rotação pelo <code class=\"i\">logrotate</code>. <b>Container escreve no stdout</b> — e o certo é exatamente esse: quem coleta é a plataforma. <b>Erro comum:</b> aplicação em container gravando em arquivo dentro do contêiner; o log some junto com ele, e ainda enche o disco do nó no caminho.",map:[["Docker e Kubernetes","Por que o log do container vai para stdout e quem o recolhe."],["Conceitos de Backend","Observabilidade: logs, métricas e traces, e o que cada um responde."]]}
]},
{g:"08",n:"Dentro do container",s:"por que as ferramentas mentem lá dentro",c:"var(--red)",cs:"var(--red-soft)",items:[
 {t:"Namespaces e cgroups",x:"o que você vê contra o que você pode",dg:"ns",oq:"Namespace recorta o que o processo <b>enxerga</b> — processos, rede, sistema de arquivos, usuários. Cgroup limita o que ele <b>pode consumir</b> — CPU, memória, I/O.",ps:"Entender que container não é máquina virtual: é o mesmo kernel, com a vista recortada e a cota aplicada.",cf:"É por isso que não existe <i>boot</i> de container, que ele sobe em milissegundos, e que uma falha de kernel derruba todos. <b>Erro comum:</b> tratar o container como VM e esperar isolamento de segurança equivalente — não é, e é por isso que rodar como root lá dentro importa.",map:[["Docker e Kubernetes","Namespaces, cgroups e camadas de imagem no detalhe."]]},
 {t:"As ferramentas que mentem",x:"top, free e nproc",oq:"<code class=\"i\">top</code>, <code class=\"i\">free</code> e <code class=\"i\">nproc</code> leem <code class=\"i\">/proc</code>, que na maioria das montagens ainda reflete a <b>máquina inteira</b> — não o limite do seu cgroup.",ps:"Evitar o diagnóstico errado mais caro que existe em container: dimensionar pelo número da máquina.",cf:"Leia o limite real no cgroup, não na ferramenta. <b>Erro comum:</b> um pod com limite de 512 MB, num nó de 64 GB, com uma JVM que dimensionava o heap por esses 64 GB — e morria com 137 sem nenhuma exceção no log.",ex:"# o que a ferramenta diz (a maquina toda)\nfree -h ; nproc\n\n# o que voce REALMENTE tem (cgroup v2)\ncat /sys/fs/cgroup/memory.max\ncat /sys/fs/cgroup/cpu.max\n\n# a JVM moderna ja respeita, mas confirme:\njava -XX:+PrintFlagsFinal -version | grep MaxHeapSize"},
 {t:"Depurar sem ferramenta",x:"a imagem mínima que não tem shell",oq:"Imagens <i>distroless</i> ou <code class=\"i\">scratch</code> não têm shell, nem <code class=\"i\">ps</code>, nem <code class=\"i\">curl</code>. É proposital: menos superfície de ataque.",ps:"Saber investigar quando <code class=\"i\">docker exec ... bash</code> responde <i>executable file not found</i>.",cf:"Três saídas, em ordem de preferência: <b>container efêmero de depuração</b> compartilhando os namespaces do alvo (<code class=\"i\">kubectl debug</code>); <code class=\"i\">nsenter</code> a partir do host; ou, no pior caso, uma imagem de build separada com as ferramentas. <b>Erro comum:</b> adicionar <code class=\"i\">bash</code> e <code class=\"i\">curl</code> à imagem de produção para facilitar a depuração — e manter para sempre.",ex:"# entra ao lado do pod, com ferramentas, sem alterar a imagem\nkubectl debug -it meu-pod --image=busybox --target=app\n\n# a partir do host, nos namespaces do processo\nsudo nsenter -t <pid> -n ss -tlnp\n\n# e o basico que quase toda imagem tem, mesmo minima:\ncat /proc/1/cmdline | tr '\\0' ' '"},
 {t:"O sistema de arquivos em camadas",x:"e o dado que some",oq:"A imagem é um empilhamento de camadas somente-leitura; o container acrescenta uma camada de escrita por cima, que morre com ele.",ps:"Entender por que o arquivo gravado dentro do container desaparece — e por que isso é a regra, não o defeito.",cf:"Tudo que precisa sobreviver vai para volume ou para serviço externo. <b>Erro comum:</b> gravar upload, cache ou log em disco dentro do container e descobrir na primeira reinicialização. É o mesmo princípio que o de <i>aplicação sem estado</i> do System Design, visto de baixo.",map:[["System Design","Os três fatores que você quebra sem perceber — e o terceiro é sempre este."],["Nuvem","Armazenamento de objetos: onde o arquivo deveria estar."]]}
]},
{g:"09",n:"Como aprender de verdade",s:"a única área em que quebrar é de graça",c:"var(--amber)",cs:"var(--amber-soft)",items:[
 {t:"O ciclo",x:"ler, consultar, quebrar, consertar",dg:"ciclo",oq:"Ler aqui → conferir no <code class=\"i\">man</code> → quebrar de propósito num container descartável → consertar → escrever o que aprendeu.",ps:"Terminal é a única área do acervo em que o laboratório não tem risco nenhum: o container morre e você recomeça.",cf:"Um <code class=\"i\">docker run --rm -it debian bash</code> é um ambiente onde você pode apagar o que quiser. Use isso: encha o disco de propósito, mate o PID 1, tire a permissão de um diretório, veja o que acontece. <b>Erro comum:</b> estudar comando de terminal lendo lista de comandos — o que fixa é a sequência sintoma → hipótese → verificação."},
 {t:"Canais e cursos em português",x:"para este assunto",oq:"Fontes em PT-BR que tratam de Linux e linha de comando com profundidade.",ps:"Ter o vocabulário em português antes de atravessar o <code class=\"i\">man</code>, que é em inglês e denso.",cf:"<b>Diolinux</b> é a referência em português para Linux em geral, com bom material de fundamentos. <b>Linux Tips</b> (Jeferson Fernando) trata de Linux com foco em operação e DevOps, que é exatamente o recorte deste documento. <b>Fabio Akita</b> tem material sobre o funcionamento por baixo. Em texto, o <b>Linux Journey</b> e o <b>Guia Foca</b> (em português) cobrem o básico de forma organizada. <b>Regra:</b> confirme toda flag no <code class=\"i\">man</code> da sua versão — as opções variam entre distribuições e entre GNU e BusyBox."},
 {t:"Praticar",x:"o laboratório dos sintomas",oq:"Reproduzir, num container descartável, os quatro sintomas deste documento.",ps:"Você não aprende a investigar lendo sobre investigação.",cf:"(1) Crie um arquivo grande, apague-o com um processo segurando e reproduza o <code class=\"i\">df</code>/<code class=\"i\">du</code> divergente; (2) suba um container com <code class=\"i\">CMD</code> em forma shell e outro em forma exec, mande TERM nos dois e compare; (3) suba um serviço escutando em <code class=\"i\">127.0.0.1</code> e descubra pelo <code class=\"i\">ss</code> por que não responde de fora; (4) ponha um limite de memória baixo e provoque o 137.",ex:"# 1 — o disco que nao volta\ndocker run --rm -it debian bash\n  dd if=/dev/zero of=/tmp/g bs=1M count=500\n  tail -f /tmp/g &        # segura o descritor\n  rm /tmp/g\n  df -h /tmp ; du -sh /tmp   # discordam\n  lsof +L1                   # o culpado\n\n# 2 — o sinal que se perde\ndocker run --name a -d imagem   # CMD shell form\ndocker stop a                   # cronometre: 10 s de espera\n\n# 4 — o 137\ndocker run --rm -m 64m imagem-java\n# morre sem excecao; o rastro esta no dmesg do host",star:true},
 {t:"Do shell ao kernel: syscalls e execução",x:"da tecla à interrupção",oq:"O ciclo completo de um comando: o terminal captura, o shell faz o parsing e expansões, o kernel cria o processo via fork/execve e gerencia CPU, VFS e descritores.",ps:"Entender o caminho exato que um comando percorre para diagnosticar travamentos e erros de permissão.",cf:"O shell não executa binários diretamente: ele invoca chamadas de sistema (syscalls). O kernel agenda a execução, aloca páginas de memória virtual e canaliza stdout/stderr pelos file descriptors 1 e 2. <b>Erro comum:</b> achar que o terminal interpreta comandos — quem interpreta é o shell."},
 {t:"Matriz de ferramentas, tmux e homelab",x:"produtividade e infraestrutura",oq:"A seleção essencial de utilitários de produção: emuladores modernos (Alacritty, WezTerm), editores (Vim/Neovim), multiplexadores (tmux), pipelines com jq/rsync e homelabs.",ps:"Sair do uso pontual do terminal para um fluxo de trabalho profissional, automatizado e resiliente a quedas de SSH.",cf:"O tmux mantém processos vivos mesmo se a conexão cair e permite janelas divididas. Utilitários como jq filtram dados estruturados em uma linha e rsync sincroniza deltas com eficiência criptográfica. <b>Erro comum:</b> rodar jobs longos via SSH direto sem multiplexador ou nohup."}
]}
];


/* ---------- render ---------- */
var nav=document.getElementById("nav");
var navMap={};
function navHead(txt){var a=document.createElement("a");a.className="sec";a.style.color="var(--soft)";a.style.marginTop="18px";a.style.fontSize=".68rem";a.textContent=txt;nav.appendChild(a);}
var flat=[];T.forEach(function(g){g.items.forEach(function(it){it._g=g;flat.push(it);});});
flat.forEach(function(it,i){it._i=i;it._id=it.t.toLowerCase().replace(/[^a-z0-9]+/g,'-');});
var KEYT="linux-terminal-completo-CL-trilha-v1";
var doneT={};try{doneT=JSON.parse(localStorage.getItem(KEYT)||"{}");}catch(e){}
var track=document.getElementById("track"),lg=document.getElementById("lg");
navHead("A trilha · 9 marcos");
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
  e=e.replace(/(#[^\n]*)/g,'<span class="c">$1</span>');
  e=e.replace(/"([^"\n]*)"/g,'<span class="s">"$1"</span>');
  e=e.replace(/\b(if|then|else|fi|for|do|done|while|case|esac|function|return|export|local|echo|cd|exec|trap|kill|sudo|chmod|chown|grep|sed|awk|sort|uniq|cut|wc|find|xargs|ps|top|df|du|free|lsof|ss|curl|dig|systemctl|journalctl|docker|kubectl)\b/g,'<span class="k">$1</span>');
  e=e.replace(/(\$[A-Za-z_]\w*|\$\{[^}]*\})/g,'<span class="t">$1</span>');
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
var parts=[].slice.call(document.querySelectorAll("section.part"));
var entries=[];
navHead("O conteúdo · 9 partes");
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
var KEYM="linux-terminal-completo-CL-conteudo-v1";
var doneM={};try{doneM=JSON.parse(localStorage.getItem(KEYM)||"{}");}catch(e){}
var botoes=[].slice.call(document.querySelectorAll(".done"));
botoes.forEach(function(b){
  b.addEventListener("click",function(){
    var k=b.dataset.k;
    if(doneM[k])delete doneM[k];else doneM[k]=1;
    localStorage.setItem(KEYM,JSON.stringify(doneM));paint();
  });
});
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
function hl(el){
  var e=el.textContent.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  var store=[];
  function keep(cls,txt){store.push('<span class="'+cls+'">'+txt+'</span>');return "§"+(store.length-1)+"§";}
  e=e.replace(/(#[^\n]*)/g,function(m){return keep("c",m);});
  e=e.replace(/("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')/g,function(m){return keep("s",m);});
  e=e.replace(/(\$[A-Za-z_]\w*|\$\{[^}]*\})/g,function(m){return keep("t",m);});
  e=e.replace(/\b(if|then|else|elif|fi|for|do|done|while|until|case|esac|function|return|export|local|readonly|set|trap|exec|source|echo|printf|cd|kill|sudo|su|chmod|chown|chgrp|umask|ln|ls|cat|less|head|tail|grep|egrep|sed|awk|sort|uniq|cut|tr|wc|find|xargs|tee|ps|top|htop|kill|pkill|nohup|jobs|bg|fg|df|du|free|lsof|ss|netstat|curl|wget|dig|ping|systemctl|journalctl|mount|umount|tar|gzip|docker|kubectl|nsenter)\b/g,'<span class="k">$1</span>');
  e=e.replace(/\b(\d[\d_]*)\b/g,'<span class="n">$1</span>');
  e=e.replace(/§(\d+)§/g,function(_,i){return store[+i];});
  el.innerHTML=e;
}
document.querySelectorAll("section.part pre code").forEach(hl);
paint();onScroll();
(function(){
 var RK="linux-terminal-completo-CL-rev-v1";
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

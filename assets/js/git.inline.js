/* Extraido de cadernos/git.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 2 ---------- */

function W(h,inner){return '<figure class="dg"><svg viewBox="0 0 340 '+h+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg></figure>';}
var DG={
 dag:W(150,'<text x="170" y="16" class="bt">cada commit aponta para o PAI — a seta vai para trás</text><circle cx="40" cy="60" r="13" class="b2"/><text x="40" y="64" class="bs">C1</text><circle cx="110" cy="60" r="13" class="b2"/><text x="110" y="64" class="bs">C2</text><circle cx="180" cy="60" r="13" class="b2"/><text x="180" y="64" class="bs">C3</text><circle cx="250" cy="40" r="13" class="b1"/><text x="250" y="44" class="bs">C4</text><circle cx="250" cy="86" r="13" class="b4"/><text x="250" y="90" class="bs">C5</text><path d="M97,60 L55,60" class="l"/><path d="M55,60 L63,56 L63,64 Z" class="h"/><path d="M167,60 L125,60" class="l"/><path d="M125,60 L133,56 L133,64 Z" class="h"/><path d="M238,44 L194,56" class="lt"/><path d="M194,56 L202,54 L201,61 Z" class="ht"/><path d="M238,82 L194,66" class="l"/><path d="M194,66 L202,68 L200,74 Z" class="h"/><text x="285" y="44" class="bs">main</text><text x="285" y="90" class="bs">feature</text><text x="170" y="116" class="bs">o commit e imutavel: mudar qualquer coisa gera um NOVO hash</text><text x="170" y="138" class="bt">por isso rebase nao "move" commits — ele recria</text>'),
 tres:W(156,'<text x="170" y="16" class="bt">as três áreas</text><rect x="8" y="36" width="96" height="48" rx="9" class="b3"/><text x="56" y="56" class="bs">working tree</text><text x="56" y="70" class="bs">seus arquivos</text><path d="M108,60 L136,60" class="lt"/><path d="M136,60 L128,56 L128,64 Z" class="ht"/><text x="122" y="50" class="bs">add</text><rect x="138" y="36" width="88" height="48" rx="9" class="b6"/><text x="182" y="56" class="bs">index</text><text x="182" y="70" class="bs">o proximo commit</text><path d="M230,60 L258,60" class="lt"/><path d="M258,60 L250,56 L250,64 Z" class="ht"/><text x="245" y="50" class="bs">commit</text><rect x="260" y="36" width="72" height="48" rx="9" class="b1"/><text x="296" y="56" class="bs">repositorio</text><text x="296" y="70" class="bs">.git</text><path d="M296,90 L296,104 L56,104 L56,90" class="lr d"/><path d="M56,90 L52,98 L60,98 Z" class="hr"/><text x="176" y="118" class="bs">restore · reset · checkout — cada um volta de um lugar diferente</text><text x="170" y="142" class="bt">o index existe para você escolher O QUE entra no commit</text>'),
 mr:W(170,'<text x="86" y="16" class="bt">merge</text><text x="254" y="16" class="bt">rebase</text><line x1="170" y1="24" x2="170" y2="144" class="l d"/><circle cx="30" cy="52" r="10" class="b2"/><circle cx="66" cy="52" r="10" class="b2"/><circle cx="102" cy="52" r="10" class="b2"/><circle cx="66" cy="92" r="10" class="b4"/><circle cx="102" cy="92" r="10" class="b4"/><circle cx="138" cy="70" r="11" class="b1"/><path d="M40,52 L56,52 M76,52 L92,52" class="l"/><path d="M60,84 L36,58" class="l"/><path d="M76,92 L92,92" class="l"/><path d="M130,64 L110,54 M130,78 L110,88" class="lt"/><text x="86" y="122" class="bs">o grafo guarda que houve dois caminhos</text><text x="86" y="136" class="bs">historico verdadeiro, leitura mais dificil</text><circle cx="200" cy="70" r="10" class="b2"/><circle cx="236" cy="70" r="10" class="b2"/><circle cx="272" cy="70" r="10" class="b1"/><circle cx="308" cy="70" r="10" class="b1"/><path d="M210,70 L226,70 M246,70 L262,70 M282,70 L298,70" class="l"/><text x="290" y="50" class="bs">recriados</text><text x="254" y="122" class="bs">linha reta — e hashes NOVOS</text><text x="254" y="136" class="bs">leitura facil, historico reescrito</text><text x="170" y="162" class="bt">regra: rebase no que é só seu · merge no que já é de todos</text>'),
 cherry:W(150,'<text x="170" y="16" class="bt">cherry-pick: o commit é COPIADO, não movido</text><circle cx="40" cy="52" r="11" class="b2"/><circle cx="88" cy="52" r="11" class="b2"/><circle cx="136" cy="52" r="11" class="b5"/><text x="136" y="34" class="bs">a correcao</text><circle cx="184" cy="52" r="11" class="b2"/><path d="M51,52 L77,52 M99,52 L125,52 M147,52 L173,52" class="l"/><text x="30" y="76" class="bs">main</text><circle cx="88" cy="106" r="11" class="b1"/><circle cx="136" cy="106" r="11" class="b1"/><circle cx="184" cy="106" r="11" class="b5"/><text x="184" y="130" class="bs">copia — hash NOVO</text><path d="M99,106 L125,106 M147,106 L173,106" class="lt"/><path d="M136,64 L184,94" class="lr d"/><path d="M184,94 L176,92 L178,99 Z" class="hr"/><text x="60" y="130" class="bs">release/1.4</text><text x="170" y="146" class="bs">use -x: ele grava no corpo qual commit foi a origem</text>'),
 reflog:W(160,'<text x="170" y="16" class="bt">o reflog é a rede de segurança</text><rect x="10" y="34" width="140" height="56" rx="9" class="b5"/><text x="80" y="52" class="bs">reset --hard errado</text><text x="80" y="68" class="bs">"perdi 3 commits"</text><text x="80" y="83" class="bs">o branch nao aponta mais</text><path d="M152,62 L182,62" class="lt"/><path d="M182,62 L174,58 L174,66 Z" class="ht"/><rect x="184" y="34" width="148" height="56" rx="9" class="b1"/><text x="258" y="52" class="bs">git reflog</text><text x="258" y="68" class="bs">todo movimento de HEAD</text><text x="258" y="83" class="bs">com o SHA anterior</text><text x="170" y="112" class="bs">os commits continuam no repositorio — so ficaram sem nome</text><text x="170" y="134" class="bt">o coletor so remove depois de ~30 dias</text><text x="170" y="150" class="bs">git branch resgate &lt;sha&gt; e pronto</text>'),
 bisect:W(150,'<text x="170" y="16" class="bt">busca binária: 1000 commits em ~10 testes</text><rect x="10" y="38" width="320" height="18" rx="5" class="b3"/><text x="30" y="51" class="bs">bom</text><text x="310" y="51" class="bs">ruim</text><rect x="10" y="64" width="160" height="18" rx="5" class="b1"/><rect x="172" y="64" width="158" height="18" rx="5" class="b5"/><text x="170" y="77" class="bs">|</text><rect x="92" y="90" width="78" height="18" rx="5" class="b1"/><rect x="172" y="90" width="80" height="18" rx="5" class="b5"/><text x="170" y="126" class="bs">cada teste corta o espaço pela metade</text><text x="170" y="142" class="bt">e com um script, git bisect run faz sozinho</text>'),
 forca:W(164,'<text x="86" y="16" class="bt">--force</text><text x="254" y="16" class="bt">--force-with-lease</text><line x1="170" y1="24" x2="170" y2="132" class="l d"/><rect x="14" y="34" width="140" height="72" rx="9" class="b5"/><text x="84" y="54" class="bs">sobrescreve o remoto</text><text x="84" y="70" class="bs">sem olhar o que tem la</text><text x="84" y="88" class="bs">o commit do colega</text><text x="84" y="100" class="bs">simplesmente some</text><rect x="184" y="34" width="142" height="72" rx="9" class="b1"/><text x="255" y="54" class="bs">so sobrescreve se o remoto</text><text x="255" y="70" class="bs">ainda estiver onde voce viu</text><text x="255" y="88" class="bs">se alguem empurrou,</text><text x="255" y="100" class="bs">o push e RECUSADO</text><text x="170" y="146" class="bt">nunca use --force num branch compartilhado</text><text x="170" y="160" class="bs">e prefira --force-with-lease mesmo no seu</text>'),
 ciclo:W(150,'<text x="170" y="16" class="bt">o ciclo que fixa</text><rect x="10" y="34" width="66" height="30" rx="8" class="b2"/><text x="43" y="53" class="bs">ler aqui</text><path d="M78,49 L96,49" class="l"/><path d="M96,49 L88,45 L88,53 Z" class="h"/><rect x="98" y="34" width="66" height="30" rx="8" class="b2"/><text x="131" y="53" class="bs">repo de teste</text><path d="M166,49 L184,49" class="l"/><path d="M184,49 L176,45 L176,53 Z" class="h"/><rect x="186" y="34" width="66" height="30" rx="8" class="b2"/><text x="219" y="53" class="bs">quebrar</text><path d="M254,49 L272,49" class="l"/><path d="M272,49 L264,45 L264,53 Z" class="h"/><rect x="274" y="34" width="60" height="30" rx="8" class="b1"/><text x="304" y="53" class="bs">recuperar</text><path d="M304,66 L304,88 L43,88 L43,66" class="lt d"/><path d="M43,66 L39,74 L47,74 Z" class="ht"/><text x="170" y="104" class="bs">num repositorio descartavel, destruir e de graca</text><text x="170" y="126" class="bt">e o reflog quase sempre traz de volta</text><text x="170" y="142" class="bs">e essa confianca que te deixa usar o Git de verdade</text>')
};

var T=[
{g:"01",n:"Modelo mental",s:"o grafo — e por que ele explica quase tudo",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Commit é snapshot, não diferença",x:"e o DAG que ele forma",dg:"dag",oq:"Cada commit guarda o estado <b>inteiro</b> do projeto naquele instante, mais um ponteiro para o pai. O diferencial que você vê é calculado na hora da exibição.",ps:"É a fundação: entendendo isso, merge, rebase e cherry-pick deixam de ser mágica.",cf:"Os commits formam um grafo dirigido acíclico — as setas apontam para <b>trás</b>, para os pais. Um merge tem dois pais; o commit inicial não tem nenhum. O identificador é o hash do conteúdo, então mudar qualquer coisa — inclusive a mensagem ou a data — produz um commit <b>novo</b>. <b>Erro comum:</b> achar que rebase move commits. Ele os recria, com hashes diferentes.",ex:"git log --oneline --graph --all\n# * a1b2c3 (HEAD -> main) corrige calculo\n# |\\\n# | * d4e5f6 (feature) adiciona relatorio"},
 {t:"Os quatro objetos",x:"blob, tree, commit e tag",oq:"<b>Blob</b> é o conteúdo de um arquivo. <b>Tree</b> é um diretório: lista nomes apontando para blobs e outras trees. <b>Commit</b> aponta para uma tree e para os pais. <b>Tag</b> anotada é um objeto que aponta para um commit.",ps:"Tornar concreto o que o <code class=\"i\">.git</code> guarda — e explicar por que o repositório não incha tanto quanto se espera.",cf:"Tudo é endereçado por hash do conteúdo. Dois arquivos idênticos em lugares diferentes são <b>um</b> blob só. Arquivo que não mudou entre commits não é duplicado: a tree nova aponta para o mesmo blob. <b>Erro comum:</b> imaginar que cada commit guarda uma cópia completa em disco — guarda logicamente, não fisicamente.",ex:"git cat-file -t HEAD        # commit\ngit cat-file -p HEAD        # tree, parent, author, mensagem\ngit cat-file -p HEAD^{tree} # o diretorio raiz daquele commit"},
 {t:"Working tree, index e repositório",x:"as três áreas",dg:"tres",oq:"<b>Working tree</b> são os seus arquivos. <b>Index</b> (ou stage) é a montagem do próximo commit. <b>Repositório</b> é o <code class=\"i\">.git</code>, com o histórico.",ps:"Explicar a diferença entre <code class=\"i\">restore</code>, <code class=\"i\">reset</code> e <code class=\"i\">checkout</code> — que voltam de lugares diferentes.",cf:"O index existe para você <b>escolher</b> o que entra no commit, inclusive partes de um arquivo (<code class=\"i\">add -p</code>). <b>Erro comum:</b> <code class=\"i\">git add .</code> sem olhar, e commitar um arquivo de configuração local junto.",ex:"git status            # mostra as tres areas de uma vez\ngit add -p arquivo    # escolhe PEDACOS, nao o arquivo inteiro\ngit diff              # working tree x index\ngit diff --staged     # index x ultimo commit"},
 {t:"HEAD, refs e revision syntax",x:"como nomear qualquer commit",oq:"<b>HEAD</b> aponta para onde você está. <b>Branch</b> é um arquivo de texto com um hash — um ponteiro móvel. <b>Revision syntax</b> é a linguagem para nomear commits relativos.",ps:"Parar de copiar hash na mão e passar a navegar pelo grafo com expressões.",cf:"<code class=\"i\">HEAD~2</code> é dois commits atrás pela primeira linhagem; <code class=\"i\">HEAD^2</code> é o <b>segundo pai</b> (só existe em merge); <code class=\"i\">main@{1.week.ago}</code> usa o reflog. <b>Erro comum:</b> confundir <code class=\"i\">~</code> com <code class=\"i\">^</code> — o primeiro anda para trás, o segundo escolhe qual pai.",ex:"git show HEAD~3          # tres commits atras\ngit show HEAD^2          # o segundo pai de um merge\ngit log main..feature    # o que tem em feature e nao em main\ngit log feature...main   # a diferenca simetrica"}
]},
{g:"02",n:"Integrar",s:"merge, rebase e o conflito como decisão",c:"var(--cyan)",cs:"var(--arc-soft)",items:[
 {t:"Remote, fetch, pull e tracking",x:"o que cada um realmente faz",oq:"<code class=\"i\">fetch</code> baixa e <b>não</b> mexe no seu trabalho. <code class=\"i\">pull</code> é fetch seguido de merge (ou rebase). <i>Tracking branch</i> é a associação entre o seu branch local e o remoto.",ps:"Separar 'ver o que mudou' de 'incorporar o que mudou' — que é a primeira coisa que dá errado.",cf:"<code class=\"i\">origin/main</code> é a sua <b>cópia local</b> de onde o remoto estava no último fetch. Ele não se atualiza sozinho. <b>Erro comum:</b> dar <code class=\"i\">pull</code> com trabalho não commitado e criar um merge acidental no meio.",ex:"git fetch --all --prune   # atualiza e remove branches remotos mortos\ngit log HEAD..origin/main # o que chegou e voce ainda nao tem\ngit pull --rebase         # sem merge automatico\ngit config --global pull.rebase true"},
 {t:"Merge",x:"integrar preservando o grafo",dg:"mr",oq:"Cria um commit com <b>dois pais</b>, unindo as duas linhas sem alterar nenhum commit existente.",ps:"Preservar o histórico como realmente aconteceu — e é a operação segura em branch compartilhado.",cf:"Quando não há divergência, o Git faz <i>fast-forward</i>: só move o ponteiro, sem commit de merge. <code class=\"i\">--no-ff</code> força o commit de merge, o que deixa visível que houve um ramo. <b>Erro comum:</b> discutir merge contra rebase como questão de gosto. A regra é sobre <b>compartilhamento</b>, não sobre estética."},
 {t:"Conflito é decisão",x:"não é 'apagar os marcadores'",oq:"O Git marca o conflito quando os dois lados mudaram as mesmas linhas e ele não tem critério para escolher.",ps:"Trocar o pânico por um procedimento: entender os dois lados e decidir com intenção.",cf:"Os marcadores delimitam <b>seu</b> lado (HEAD) e o <b>outro</b>. A resolução raramente é escolher um: costuma ser escrever uma terceira versão que preserva as duas intenções. Depois, <code class=\"i\">add</code> e <code class=\"i\">continue</code>. <b>Erro comum:</b> apagar os marcadores e ficar com o código de um lado só — perdendo em silêncio o que o colega fez.",ex:"git status                 # lista os arquivos em conflito\ngit diff --name-only --diff-filter=U\ngit checkout --ours  arq   # o lado de quem esta integrando\ngit checkout --theirs arq  # o que esta chegando\ngit merge --abort          # desistir e voltar ao estado anterior"},
 {t:"Rebase",x:"reaplicar sobre nova base",oq:"Pega os commits que só existem no seu branch, encontra a base comum, e os <b>reaplica</b> um a um sobre a ponta do outro branch.",ps:"Deixar o histórico linear e legível antes de abrir o pull request.",cf:"Os commits reaplicados são <b>novos objetos</b>, com hashes diferentes — mesmo que o conteúdo seja idêntico. Conflitos aparecem por commit, e você resolve, dá <code class=\"i\">add</code> e <code class=\"i\">rebase --continue</code>; para desistir, <code class=\"i\">--abort</code>. <b>Erro comum:</b> rebasear um branch que outras pessoas já puxaram — o histórico delas diverge do seu e o próximo pull vira um nó.",caso:"A regra prática que resolve a discussão: <b>rebase no que ainda é só seu, merge no que já é de todos</b>. Enquanto o branch não foi compartilhado, reescrever é de graça. Depois que alguém puxou, reescrever é transferir o problema para essa pessoa.",ex:"git fetch origin\ngit rebase origin/main\n# conflito? resolva, depois:\ngit add arquivo && git rebase --continue\n# desistir:\ngit rebase --abort\n\n# ver se a reaplicacao mudou algo alem da base:\ngit range-diff origin/main@{1} origin/main HEAD"}
]},
{g:"03",n:"Cirurgia",s:"o que quase ninguém usa e resolve muito",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"Cherry-pick",x:"transportar UM commit",dg:"cherry",oq:"Aplica a mudança introduzida por um commit específico sobre o branch atual, criando um commit <b>novo</b> — o original continua onde estava.",ps:"Levar uma correção para um branch de release sem arrastar junto tudo o que veio depois dela.",cf:"Use <code class=\"i\">-x</code>: ele acrescenta ao corpo da mensagem a linha <i>cherry picked from commit &lt;sha&gt;</i>, que é o rastro de onde aquilo veio. Sem isso, meses depois ninguém sabe que os dois commits são a mesma correção. <b>Erro comum:</b> usar cherry-pick em série para o que era um merge — você duplica o histórico e cria conflito na integração seguinte.",caso:"Uma correção crítica entrou na <code class=\"i\">main</code>, junto com três funcionalidades novas. O cliente está na <code class=\"i\">release/1.4</code> e precisa só da correção. Merge traria tudo; cherry-pick leva o commit isolado.",ex:"git checkout release/1.4\ngit cherry-pick -x a1b2c3d\n# o corpo da mensagem agora registra a origem\n\n# um intervalo (cuidado com a ordem):\ngit cherry-pick -x a1b2c3d^..f7e8d9c"},
 {t:"Stash e worktree",x:"trocar de contexto sem perder estado",oq:"<b>Stash</b> guarda mudanças locais numa pilha para retomar depois. <b>Worktree</b> cria outra pasta ligada ao mesmo repositório, com outro branch em paralelo.",ps:"Atender uma interrupção sem commitar trabalho pela metade nem perder o que estava fazendo.",cf:"<code class=\"i\">stash</code> serve a interrupções <b>curtas</b>. Se o contexto vai coexistir por horas — um hotfix enquanto a feature continua —, <code class=\"i\">worktree</code> é melhor: os dois ficam abertos ao mesmo tempo, sem trocar de branch. <b>Erro comum:</b> acumular stashes sem mensagem, e meses depois não saber o que é cada um.",ex:"git stash push -u -m \"meio do refactor do checkout\"\ngit stash list\ngit stash pop            # aplica e remove da pilha\n\n# para o hotfix que coexiste:\ngit worktree add ../hotfix hotfix/urgente\n# duas pastas, dois branches, um repositorio so\ngit worktree remove ../hotfix"},
 {t:"Bisect",x:"busca binária no histórico",dg:"bisect",oq:"Encontra o commit que introduziu uma regressão, dividindo o intervalo entre um commit bom conhecido e um ruim.",ps:"Transformar 'quebrou em algum momento do último mês' num commit específico, em poucos testes.",cf:"Mil commits viram cerca de dez testes, porque cada resposta corta o espaço pela metade. Com um script que retorna 0 para bom e diferente de 0 para ruim, <code class=\"i\">git bisect run</code> faz tudo sozinho. Ao terminar, <code class=\"i\">git bisect reset</code> volta ao estado original. <b>Erro comum:</b> esquecer o reset e continuar trabalhando em HEAD destacado.",caso:"O relatório começou a sair com valor errado 'faz umas semanas'. Ninguém sabe quando. São 800 commits no intervalo. Com um teste que reproduz o erro, o bisect entrega o commit culpado em nove execuções.",ex:"git bisect start\ngit bisect bad                 # o atual esta quebrado\ngit bisect good v1.3.0         # aqui funcionava\n# teste, e a cada rodada:  git bisect good|bad\n\n# automatico, com um script que retorna 0 = bom:\ngit bisect run ./testa.sh\ngit bisect reset"},
 {t:"Patch e format-patch",x:"mudança como arquivo",oq:"<code class=\"i\">format-patch</code> transforma commits em arquivos; <code class=\"i\">am</code> os aplica preservando autoria e mensagem. <code class=\"i\">diff</code> e <code class=\"i\">apply</code> lidam com a mudança textual crua.",ps:"Mover trabalho entre repositórios sem remoto comum — e é assim que o próprio kernel do Linux é mantido.",cf:"<code class=\"i\">apply</code> aplica o texto sem criar commit; <code class=\"i\">am</code> cria o commit com o autor original. <b>Erro comum:</b> usar <code class=\"i\">apply</code> quando queria preservar autoria, e aparecer como autor do trabalho de outra pessoa.",ex:"git format-patch -3            # os 3 ultimos commits viram arquivos\ngit am 0001-corrige.patch      # aplica preservando autoria\n\ngit diff > mudanca.patch       # so o texto\ngit apply --check mudanca.patch  # testa antes de aplicar"}
]},
{g:"04",n:"Desfazer e recuperar",s:"a parte que dá coragem para usar o resto",c:"var(--orange)",cs:"var(--orange-soft)",items:[
 {t:"Restore, reset e revert",x:"três intenções diferentes",oq:"<b>restore</b> devolve arquivos. <b>reset</b> move o ponteiro do branch. <b>revert</b> cria um commit novo que desfaz outro.",ps:"Escolher pelo que você quer que aconteça com o histórico — e com o trabalho dos outros.",cf:"<code class=\"i\">reset --soft</code> move o ponteiro e mantém tudo no index; <code class=\"i\">--mixed</code> (padrão) mantém no working tree; <code class=\"i\">--hard</code> descarta. <b>revert é a única segura em branch compartilhado</b>, porque não reescreve nada. <b>Erro comum:</b> <code class=\"i\">reset --hard</code> com trabalho não commitado — isso o reflog <b>não</b> recupera, porque nunca virou commit.",ex:"git restore arquivo             # descarta a alteracao local\ngit restore --staged arquivo    # tira do index, mantem no disco\n\ngit reset --soft HEAD~1   # desfaz o commit, mantem tudo staged\ngit reset --mixed HEAD~1  # desfaz e tira do index\ngit reset --hard HEAD~1   # desfaz e DESCARTA\n\ngit revert a1b2c3d        # commit novo que desfaz — seguro no compartilhado"},
 {t:"Reflog e fsck",x:"a rede de segurança",dg:"reflog",oq:"O reflog registra <b>todo movimento</b> local de HEAD e das refs, com o SHA anterior — mesmo os que ficaram sem nome.",ps:"Recuperar commits que um reset, um rebase ou uma exclusão de branch deixaram órfãos.",cf:"Commits sem nenhuma referência continuam no repositório até o coletor de lixo passar — tipicamente após cerca de 30 dias. Se o reflog já expirou, <code class=\"i\">fsck --lost-found</code> ainda pode achar. <b>Erro comum:</b> entrar em pânico e clonar de novo. Quase sempre o trabalho está a dois comandos de distância.",caso:"Você deu <code class=\"i\">reset --hard HEAD~3</code> no branch errado e três commits sumiram. Eles não sumiram: o branch parou de apontar para eles. O reflog tem o SHA anterior, e um <code class=\"i\">git branch resgate &lt;sha&gt;</code> traz tudo de volta.",ex:"git reflog\n# a1b2c3d HEAD@{0}: reset: moving to HEAD~3\n# f7e8d9c HEAD@{1}: commit: o trabalho que 'sumiu'\n\ngit branch resgate f7e8d9c     # salva antes de qualquer coisa\n\n# se o reflog nao tem mais:\ngit fsck --lost-found"},
 {t:"Amend, fixup e rebase interativo",x:"arrumar antes de mostrar",oq:"<code class=\"i\">amend</code> refaz o último commit. <code class=\"i\">rebase -i</code> permite reordenar, juntar, editar e remover commits de um intervalo.",ps:"Entregar um pull request com histórico limpo, em que cada commit tem um propósito.",cf:"<code class=\"i\">commit --fixup=&lt;sha&gt;</code> cria um commit marcado; depois <code class=\"i\">rebase -i --autosquash</code> o posiciona e funde automaticamente. É muito melhor que reordenar na mão. <b>Erro comum:</b> fazer <code class=\"i\">amend</code> num commit já enviado — o hash muda e o remoto diverge.",ex:"git commit --amend --no-edit        # só acrescenta ao ultimo\ngit commit --fixup=a1b2c3d          # marca como correcao daquele\ngit rebase -i --autosquash origin/main\n\n# no editor: pick, squash, fixup, reword, edit, drop"},
 {t:"Force-with-lease",x:"nunca --force num branch compartilhado",dg:"forca",oq:"<code class=\"i\">--force</code> sobrescreve o remoto sem olhar. <code class=\"i\">--force-with-lease</code> só sobrescreve se o remoto ainda estiver onde você viu pela última vez.",ps:"Publicar um branch reescrito sem apagar o trabalho de quem empurrou enquanto isso.",cf:"Se alguém empurrou depois do seu último fetch, o <i>lease</i> falha e o push é <b>recusado</b> — que é exatamente o que você quer. <b>Erro comum:</b> usar <code class=\"i\">--force</code> por hábito e apagar commits de outra pessoa; do lado dela, o trabalho simplesmente desaparece do remoto.",ex:"git fetch origin                    # atualize o lease primeiro\ngit push --force-with-lease origin minha-branch\n\n# e o alias que evita o dedo pesado:\ngit config --global alias.pushf \"push --force-with-lease\""}
]},
{g:"05",n:"Segredos e confiança",s:"o vazamento e a identidade",c:"var(--red)",cs:"var(--red-soft)",items:[
 {t:"Segredo no histórico",x:"apagar o arquivo não basta",oq:"Um segredo commitado continua no histórico mesmo depois de o arquivo ser apagado — qualquer clone antigo ainda o tem.",ps:"Responder a um vazamento na ordem certa, que começa por onde quase ninguém começa.",cf:"A ordem é: <b>(1) rotacione a credencial imediatamente</b> — é a única ação que realmente resolve; (2) só então limpe o histórico com <code class=\"i\">git filter-repo</code>; (3) force o push e avise todo mundo a reclonar; (4) acrescente o padrão ao <code class=\"i\">.gitignore</code> e um hook que barre o próximo. <b>Erro comum:</b> gastar horas limpando o histórico antes de rotacionar — enquanto isso a credencial continua válida.",caso:"Se o repositório é público, considere a credencial comprometida no <b>minuto</b> em que foi publicada: existem varredores automáticos que a encontram em segundos. Limpar o histórico depois é higiene, não contenção.",ex:"# 1. ROTACIONE. sempre primeiro.\n# 2. so entao:\ngit filter-repo --path config/secrets.yml --invert-paths\n# 3. force com lease e avise o time para reclonar\n# 4. previna:\necho \"*.env\" >> .gitignore"},
 {t:"Assinatura e identidade",x:"quem realmente fez aquele commit",oq:"O campo <i>author</i> é texto livre: qualquer pessoa pode commitar com o seu nome e e-mail. A assinatura criptográfica é o que prova autoria.",ps:"Ter garantia real de quem assinou, em repositório que exige rastreabilidade.",cf:"Com GPG ou SSH, o commit ganha uma assinatura verificável e o serviço mostra o selo. Tags de release assinadas são a forma mais comum de começar. <b>Erro comum:</b> confiar no nome exibido como se fosse identidade — sem assinatura, ele não prova nada.",ex:"git config --global commit.gpgsign true\ngit config --global gpg.format ssh\ngit config --global user.signingkey ~/.ssh/id_ed25519.pub\n\ngit tag -s v1.4.0 -m \"release 1.4.0\"\ngit log --show-signature -1"}
]},
{g:"06",n:"Colaborar",s:"pull request, versão e o fluxo do time",c:"var(--pink)",cs:"var(--pink-soft)",items:[
 {t:"Pull request como unidade",x:"o tamanho é a variável que importa",oq:"O PR é a unidade de mudança revisável: um propósito, um conjunto coerente de commits, uma descrição que explica a decisão.",ps:"Revisão que encontra problema de verdade — o que só acontece quando o PR cabe na cabeça de quem revisa.",cf:"PR grande recebe aprovação sem leitura; PR pequeno recebe comentário útil. A descrição deve responder <b>por que</b>, não repetir o <i>o quê</i> (que o diff já mostra). <b>Erro comum:</b> juntar refatoração e mudança de comportamento no mesmo PR — ninguém consegue revisar os dois ao mesmo tempo."},
 {t:"Conventional Commits, hooks e CI",x:"o que a máquina verifica",oq:"Padrão de mensagem (<code class=\"i\">feat:</code>, <code class=\"i\">fix:</code>, <code class=\"i\">chore:</code>) que permite gerar changelog e decidir a versão automaticamente. Hooks rodam verificações locais; a CI repete no servidor.",ps:"Tirar da revisão humana tudo que uma máquina verifica melhor.",cf:"Hook local dá retorno rápido, mas é <b>opcional</b> — pode ser pulado com <code class=\"i\">--no-verify</code> e não existe em clone novo. Por isso a CI precisa repetir: o hook é conveniência, a CI é garantia. <b>Erro comum:</b> confiar só no hook e descobrir que metade do time nunca o instalou.",ex:"feat(pedido): aceita pagamento parcelado\nfix(estoque): corrige contagem em compra simultanea\nchore(deps): atualiza spring-boot para 3.3.4\n\n# pre-commit que barra segredo e formata\n# .git/hooks/pre-commit  — ou, melhor, via pre-commit/husky"},
 {t:"Tags, SemVer e release",x:"o que o número comunica",oq:"<b>MAIOR.MENOR.CORREÇÃO</b>: maior quebra compatibilidade, menor acrescenta compatível, correção conserta.",ps:"Permitir que quem consome decida se pode atualizar sem ler o changelog inteiro.",cf:"Use tag <b>anotada</b> (<code class=\"i\">-a</code> ou <code class=\"i\">-s</code>), que é um objeto com autor, data e mensagem — a tag leve é só um ponteiro solto. Tags não vão no push por padrão. <b>Erro comum:</b> subir MENOR quando a mudança quebra contrato — e quebrar quem atualizou confiando no número.",ex:"git tag -a v1.4.0 -m \"suporte a pagamento parcelado\"\ngit push origin v1.4.0        # tags NAO vao no push normal\n\ngit describe --tags           # v1.4.0-12-ga1b2c3d\n#                                tag-commits depois-hash"},
 {t:"Trunk-based, GitHub Flow e GitFlow",x:"escolha pela frequência de entrega",oq:"<b>Trunk-based</b>: todos integram na main várias vezes ao dia, com branches de horas. <b>GitHub Flow</b>: branch curto por mudança, merge após revisão. <b>GitFlow</b>: develop, release e hotfix separados.",ps:"Escolher pelo ritmo de entrega, não por hábito.",cf:"GitFlow foi desenhado para software com versões lançadas periodicamente e várias versões suportadas ao mesmo tempo. Para quem entrega continuamente, ele adiciona cerimônia sem benefício. <b>Erro comum:</b> adotar GitFlow por padrão e conviver com merges intermináveis entre develop e main."}
]},
{g:"07",n:"Investigar",s:"arqueologia responsável no histórico",c:"var(--blue)",cs:"var(--blue-soft)",items:[
 {t:"Log, show, diff e range-diff",x:"as perguntas que o histórico responde",oq:"<code class=\"i\">log</code> lista commits, <code class=\"i\">show</code> abre um, <code class=\"i\">diff</code> compara estados, <code class=\"i\">range-diff</code> compara <b>duas versões de uma mesma série</b>.",ps:"Responder 'o que mudou, quando e por quê' sem sair do terminal.",cf:"O <code class=\"i\">range-diff</code> é o menos conhecido e o mais útil em revisão: depois de um rebase, ele mostra o que mudou <b>além</b> da mudança de base — separando o que você realmente alterou do ruído da reaplicação. <b>Erro comum:</b> revisar um PR rebaseado comparando os diffs completos, e não achar a alteração real.",ex:"git log --oneline --graph --all\ngit log -S \"nomeDaFuncao\"      # commits que ADICIONARAM ou REMOVERAM o termo\ngit log -p -- caminho/arquivo  # o historico de um arquivo, com diff\ngit range-diff main..@{1} main..HEAD"},
 {t:"Blame e pickaxe",x:"quem mudou, e quando entrou",oq:"<code class=\"i\">blame</code> mostra o último commit que tocou cada linha. O <i>pickaxe</i> (<code class=\"i\">-S</code>) procura commits que introduziram ou removeram um trecho.",ps:"Encontrar o contexto de uma decisão — a mensagem do commit e o PR que a explicam.",cf:"<code class=\"i\">blame -w -C</code> ignora espaço em branco e segue código movido entre arquivos, o que evita atribuir tudo a quem reformatou. <b>Erro comum:</b> usar blame para achar culpado. O objetivo é achar <b>contexto</b>: o que a pessoa estava resolvendo, e se aquilo ainda vale.",ex:"git blame -w -C -L 40,60 arquivo.java\ngit log -S \"taxaJuros\" --oneline    # quando esse termo entrou\ngit log --follow -- arquivo.java    # atravessa renomeacoes"},
 {t:"Ignore, attributes e fim de linha",x:"o ruído que polui todo diff",oq:"<code class=\"i\">.gitignore</code> impede que arquivos entrem. <code class=\"i\">.gitattributes</code> define como tratar conteúdo — fim de linha, diff, merge.",ps:"Evitar o diff em que o arquivo inteiro aparece alterado porque alguém trocou de sistema operacional.",cf:"<code class=\"i\">.gitignore</code> não afeta o que <b>já</b> está versionado: é preciso <code class=\"i\">git rm --cached</code>. Para fim de linha, <code class=\"i\">* text=auto</code> no <code class=\"i\">.gitattributes</code> normaliza no repositório e resolve de uma vez para todo o time — melhor que depender da configuração local de cada máquina. <b>Erro comum:</b> resolver por <code class=\"i\">core.autocrlf</code> individual e o problema voltar com o próximo integrante.",ex:"# .gitattributes\n* text=auto\n*.sh text eol=lf\n*.bat text eol=crlf\n*.png binary\n\n# ja versionado por engano:\ngit rm --cached config/local.yml"}
]},
{g:"08",n:"Internos",s:"o que acontece no disco",c:"var(--yellow)",cs:"var(--yellow-soft)",items:[
 {t:"Packfiles e GC",x:"por que o repositório não incha",oq:"Objetos soltos são periodicamente compactados em <i>packfiles</i>, com compressão por delta entre objetos parecidos.",ps:"Explicar por que um histórico de dez anos ocupa menos que a pasta de trabalho.",cf:"O <code class=\"i\">gc</code> roda sozinho de tempos em tempos: compacta, e remove objetos sem referência cujo reflog já expirou. <b>Erro comum:</b> rodar <code class=\"i\">gc --prune=now</code> logo depois de um acidente — isso apaga exatamente os objetos órfãos que o reflog recuperaria.",ex:"git count-objects -vH       # quanto ocupa, solto e empacotado\ngit gc                      # compacta\n\n# encontrar os maiores objetos do historico:\ngit rev-list --objects --all |\n  git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' |\n  sort -k3 -rn | head"},
 {t:"O commit é imutável",x:"e o que isso implica",oq:"O hash é calculado sobre o conteúdo <b>inteiro</b> do commit: árvore, pais, autor, data e mensagem. Mudar qualquer campo produz outro commit.",ps:"Fechar o raciocínio do documento — é daqui que vêm quase todas as regras.",cf:"Por isso <code class=\"i\">amend</code> não edita: cria outro. Por isso rebase recria. Por isso reescrever histórico compartilhado quebra o de quem já puxou. E por isso nada se perde de imediato: o objeto antigo continua lá, sem nome, até o coletor passar. <b>Erro comum:</b> pensar em Git como banco de dados mutável; ele é um repositório de objetos endereçados por conteúdo."}
]},
{g:"09",n:"Como aprender de verdade",s:"num repositório descartável, destruir é de graça",c:"var(--amber)",cs:"var(--amber-soft)",items:[
 {t:"O ciclo",x:"quebrar e recuperar",dg:"ciclo",oq:"Ler aqui → criar um repositório de teste → destruir de propósito → recuperar pelo reflog → escrever o que aprendeu.",ps:"A confiança de saber recuperar é o que permite usar as ferramentas boas — rebase interativo, bisect, cherry-pick.",cf:"Quase todo mundo usa três comandos de Git por medo dos outros. O antídoto é um repositório descartável: faça <code class=\"i\">reset --hard</code> errado, apague um branch, rebaseie o que não devia, e traga tudo de volta. Depois de recuperar três vezes, o medo passa. <b>Erro comum:</b> aprender Git só em repositório de trabalho, onde errar custa caro — e por isso nunca experimentar."},
 {t:"Canais e cursos em português",x:"para este assunto",oq:"Fontes em PT-BR que tratam de Git além dos três comandos básicos.",ps:"Ter o vocabulário do grafo antes de atravessar a documentação oficial.",cf:"<b>Rodrigo Branas</b> tem material sólido de Git em português, incluindo fluxos de trabalho. <b>Fabio Akita</b> explica o funcionamento interno, que é o recorte dos marcos 01 e 08. <b>Willian Justen</b> e <b>Código Fonte TV</b> cobrem bem o básico e o fluxo de PR. Em texto, o <b>Pro Git</b> (Chacon e Straub) está <b>traduzido para o português e é gratuito</b> no site oficial — é a melhor referência única que existe, e a que eu consultaria antes de qualquer vídeo."},
 {t:"Praticar",x:"o laboratório dos cinco acidentes",oq:"Reproduzir, num repositório de teste, os cinco acidentes mais comuns — e recuperar de cada um.",ps:"Você não aprende a recuperar lendo sobre recuperação.",cf:"(1) <code class=\"i\">reset --hard</code> perdendo três commits, e o resgate pelo reflog; (2) commit no branch errado, movido com cherry-pick e removido da origem; (3) uma regressão plantada de propósito, encontrada com bisect; (4) um histórico bagunçado, limpo com <code class=\"i\">rebase -i --autosquash</code>; (5) um segredo commitado, com a resposta completa na ordem certa.",ex:"# o laboratorio inteiro cabe em um diretorio\nmkdir lab-git && cd lab-git && git init\nfor i in 1 2 3 4 5; do\n  echo \"linha $i\" >> arquivo.txt\n  git add . && git commit -m \"commit $i\"\ndone\n\ngit reset --hard HEAD~3     # 'perdeu' tres\ngit reflog                  # eles estao aqui\ngit branch resgate <sha>    # de volta",star:true},
 {t:"O ciclo do arquivo ao remoto",x:"as 7 etapas operacionais",oq:"A travessia completa do código: do Working Directory ao Staging, Commit local, Branches, Push/Pull, Merge com Pull Request e Histórico imutável no DAG.",ps:"Compreender a mecânica exata de cada etapa antes de abrir PRs ou integrar com a equipe.",cf:"O arquivo nasce solto no disco, é indexado pelo <code>git add</code>, vira snapshot criptográfico com <code>git commit</code>, viaja pela rede no <code>git push</code> e é auditado coletivamente no PR antes de entrar na branch de produção. <b>Erro comum:</b> usar <code>git add .</code> às cegas sem revisar o que está sendo empacotado."},
 {t:"Ecossistema, GitOps e governança",x:"ferramentas, CI/CD e regras",oq:"A matriz de plataformas (GitHub, GitLab, Azure DevOps), clientes visuais (GitLens, GitKraken), sincronização GitOps (ArgoCD) e compliance (CODEOWNERS e branch protection).",ps:"Operar o Git como espinha dorsal da engenharia de software moderna e da entrega contínua.",cf:"Git não é apenas CLI: é a fonte da verdade para infraestrutura (IaC/Terraform) e Kubernetes via GitOps. Em times maduros, regras de CODEOWNERS e commits assinados impedem código vulnerável em produção. <b>Erro comum:</b> tratar Git apenas como repositório de backup em vez de esteira de governança."}
]}
];

/* ---------- render ---------- */
var nav=document.getElementById("nav");
var navMap={};
function navHead(txt){var a=document.createElement("a");a.className="sec";a.style.color="var(--soft)";a.style.marginTop="18px";a.style.fontSize=".68rem";a.textContent=txt;nav.appendChild(a);}
var flat=[];T.forEach(function(g){g.items.forEach(function(it){it._g=g;flat.push(it);});});
flat.forEach(function(it,i){it._i=i;it._id=it.t.toLowerCase().replace(/[^a-z0-9]+/g,'-');});
var KEYT="git-completo-CL-trilha-v1";
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
  e=e.replace(/\b(git|checkout|switch|restore|reset|revert|rebase|merge|cherry|pick|stash|worktree|bisect|reflog|fsck|commit|push|pull|fetch|branch|tag|log|show|diff|blame|add|status|clone|remote|init)\b/g,'<span class="k">$1</span>');
  e=e.replace(/(--[a-z-]+)/g,'<span class="t">$1</span>');
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
var KEYM="git-completo-CL-conteudo-v1";
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
  e=e.replace(/(--?[a-zA-Z][a-zA-Z0-9-]*)/g,function(m){return keep("t",m);});
  e=e.replace(/\b(git|add|commit|push|pull|fetch|clone|init|remote|branch|checkout|switch|restore|reset|revert|merge|rebase|tag|log|show|diff|status|stash|worktree|bisect|reflog|fsck|blame|apply|format|patch|gc|config|submodule|cherry)\b/g,'<span class="k">$1</span>');
  e=e.replace(/\b([0-9a-f]{7,40})\b/g,'<span class="n">$1</span>');
  e=e.replace(/§(\d+)§/g,function(_,i){return store[+i];});
  el.innerHTML=e;
}
document.querySelectorAll("section.part pre code").forEach(hl);
paint();onScroll();
(function(){
 var RK="git-completo-CL-rev-v1";
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

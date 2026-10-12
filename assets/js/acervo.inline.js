/* Extraido de acervo.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 1 ---------- */

var DOCS=[
 {n:"01",nome:"Java completo",curto:"Java",file:"trilhas/java.html",cor:"var(--cyan)",hex:"#8be9fd",nos:134,top:49,
  desc:"Da plataforma ao runtime em produção: escolha entre a Versão V1 (Vault) ou a Versão V2 (7 Pilares Didáticos & Lab Interativo de Concorrência: JMM, JIT C1/C2, Virtual Threads e GC). Ao clicar, abre o modal de escolha.",
  tags:["JMM","Virtual Threads","GC"],
  chaves:"java v1 v2 jvm generics coleções collections list map set stream lambda equals hashcode imutabilidade referência exceção try-with-resources jdbc sql pool concorrência thread synchronized volatile atomic executor java memory model jmm garbage collector gc heap performance bytecode classloader record optional"},
 {n:"02",nome:"Spring completo",curto:"Spring",file:"trilhas/spring.html",cor:"var(--purple)",hex:"#bd93f9",nos:85,top:52,
  desc:"Do container de IoC à produção: escolha entre a Versão V1 (Vault) ou a Versão V2 (7 Pilares Didáticos: Spring Boot 3, CGLIB internals, Testcontainers e observabilidade). Ao clicar, abre o modal de escolha.",
  tags:["IoC","CGLIB","Testcontainers"],
  chaves:"spring v1 v2 boot ioc injeção dependência bean escopo ciclo de vida configuration component autowired aop proxy cglib transactional transação jpa hibernate repository mvc controller requisição filtro interceptor validação exception handler actuator profile properties teste mockmvc"},
 {n:"03",nome:"Arquitetura completa",curto:"Arquitetura",file:"trilhas/arquitetura.html",cor:"var(--gold)",hex:"#f1fa8c",nos:101,top:51,
  desc:"O que arquitetura é de verdade: escolha entre a Versão V1 (Vault) ou a Versão V2 (7 Pilares Didáticos & Simulador Circuit Breaker com estados CLOSED/OPEN/HALF-OPEN, Saga e Outbox). Ao clicar, abre o modal de escolha.",
  tags:["SOLID","Circuit Breaker","C4"],
  chaves:"arquitetura v1 v2 solid conway acoplamento coesão hexagonal clean camadas monolito microserviço ddd domínio agregado bounded context evento consistência eventual saga cap escala resiliência disjuntor circuit breaker segurança observabilidade adr decisão documentação c4 trade-off"},
 {n:"04",nome:"Docker e Kubernetes completo",curto:"Docker e Kubernetes",file:"trilhas/docker-kubernetes.html",cor:"var(--lime)",hex:"#50fa7b",nos:74,top:36,
  desc:"Do processo isolado ao cluster: escolha entre a Versão V1 (Vault) ou a Versão V2 (7 Pilares Didáticos & Simulador Interativo de Probes Liveness/Readiness, multi-stage e cgroups). Ao clicar, abre o modal de escolha.",
  tags:["cgroups","Probes","HPA"],
  chaves:"docker v1 v2 container namespace cgroup imagem camada layer cache dockerfile entrypoint cmd pid 1 sinal volume rede bridge compose kubernetes k8s pod deployment replicaset service ingress configmap secret probe liveness readiness recurso request limit rollout rollback hpa autoescalonamento kubectl linux terminal"},
 {n:"05",nome:"Nuvem completo",curto:"Nuvem",file:"trilhas/nuvem.html",cor:"var(--orange)",hex:"#ffb86c",nos:51,top:48,
  desc:"Conceitual e sem vendor: escolha entre a Versão V1 (Vault) ou a Versão V2 (7 Pilares Didáticos & Simulador Interativo de Subnets VPC/CIDR, matriz comparativa e FinOps). Ao clicar, abre o modal de escolha.",
  tags:["VPC/CIDR","IAM","FinOps"],
  chaves:"nuvem v1 v2 cloud aws azure google gcp oracle vmware compute vm instância serverless lambda função rede vpc subnet balanceador storage bucket s3 blob banco rds identidade iam papel role mensageria fila sqs observabilidade métrica log terraform iac infraestrutura como código nuvem privada custo billing região zona"},
 {n:"06",nome:"Mensageria e RabbitMQ completo",curto:"Mensageria",file:"trilhas/mensageria.html",cor:"var(--pink)",hex:"#ff79c6",nos:76,top:35,
  desc:"Da fila à operação confiável: escolha entre a Versão V1 (Vault) ou a Versão V2 (7 Pilares Didáticos: AMQP, Dead Letter Queue, Outbox Pattern e Kafka). Ao clicar, abre o modal de escolha.",
  tags:["AMQP","DLQ","Outbox"],
  chaves:"mensageria v1 v2 mensagem rabbitmq amqp exchange direct topic fanout headers routing key fila queue binding publisher confirm ack nack manual prefetch qos retry dlq dead letter idempotência outbox saga spring amqp listener quorum queue kafka partição offset ordem entrega duplicada"},
 {n:"07",nome:"Conceitos de Backend completo",curto:"Conceitos de Backend",file:"cadernos/conceitos-backend.html",cor:"var(--gold)",hex:"#f1fa8c",nos:64,top:31,
  desc:"O caderno de dúvidas, fora da sequência: gargalos e escala, race condition, locks pessimista/otimista/distribuído, idempotência, rate limit e disjuntor, índices e JOINs, sessão versus JWT, OAuth2 e PKCE, upload, observabilidade, deploy e rollback.",
  tags:["locks","JWT","índices"],
  chaves:"gargalo escala vertical horizontal race condition condição de corrida lock pessimista otimista distribuído idempotência rate limit disjuntor circuit breaker índice index join sql query n+1 sessão cookie jwt token oauth2 pkce autenticação autorização upload arquivo observabilidade log métrica trace deploy rollback blue green canário cache war room oomkilled exit 137 connection starvation poison pill deadlock livelock starvation threadsanitizer visualvm jconsole redlock shedlock ulid idempotency-key"},
 {n:"08",nome:"Biblioteca completa",curto:"Biblioteca",file:"cadernos/biblioteca.html",cor:"var(--purple)",hex:"#bd93f9",nos:38,top:17,
  desc:"A estante: os cinco livros que formaram o critério, num documento só. Fundamentals of Software Architecture, The Hard Parts, Learning DDD, System Design Interview e Entendendo Algoritmos — com a síntese de cada um, a ordem de leitura e a tabela de onde os autores discordam.",
  tags:["trade-off","quantum","Big-O"],
  chaves:"biblioteca livro livros leitura fundamentals software architecture richards ford hard parts sadalage dehghani learning domain driven design khononov ddd system design interview alex xu entendendo algoritmos bhargava trade-off característica estilo conway adr architecture quantum decomposição granularidade saga contrato core supporting generic bounded context linguagem ubíqua agregado transaction script active record domain model event sourcing framework quatro passos estimativa consistent hashing big-o busca binária ordenação tabela hash grafo dijkstra três passes divergência ordem de leitura"},
  {n:"09",nome:"System Design completo",curto:"System Design",file:"trilhas/system-design.html",cor:"var(--lime)",hex:"#50fa7b",nos:67,top:45,
   desc:"Projetar com número na mão: mapa mental principal interativo, framework de 8 passos, fórmulas de guardanapo, o catálogo prático dos 17 sistemas do mundo real (URL Shortener, WhatsApp, Uber, Netflix, YouTube, Spotify, E-Commerce, Twitter, Drive, Stripe) e o módulo de System Design para IA e LLM Engineering 2026 (Continuous Batching, PagedAttention, Enterprise RAG Híbrido, MCP e Agentes).",
   tags:["8 Passos","17 Sistemas","IA & RAG"],
   chaves:"system design projetar escala escalar leitura escrita 10k rps 1 milhão eventos capacidade estimativa guardanapo lei de little concorrência pool comporta contrato workload gargalo slo p99 zipf distribuição escada degrau gate prova índice covering estrutura de acesso plano de execução réplica lag read your writes monotonic reads cache stampede freshness invalidação cdn borda sharding partition key hot shard cassandra dynamodb clickhouse fila amortecedor buffer pico batching lote agregação hierárquica edge bloom filter falso positivo índice único username existência paginação offset keyset cursor opaco tupla desempate snapshot watermark export assíncrono url pré-assinada multipart quarentena polling long polling sse websocket soap rest graphql grpc falha parcial timeout retry jitter disjuntor backpressure degradação readiness liveness health check 8 passos pacelc jeff dean latencias 17 sistemas url shortener tinyurl kgs base62 whatsapp presence geohash uber quadtree netflix abr hls dash contraction hierarchies google maps inverted index pagerank search flash sale redlock saga idempotency key twitter fanout hybrid notificacoes apns fcm dropbox google drive chunking delta sync rate limiter token bucket sliding window consistent hashing trie typeahead autocomplete gorilla tsdb stripe ledger double entry partida dobrada youtube vitess transcoding dag gop slicing view count hyperloglog spotify audio prefetch ogg aac cache criptografado spotify connect websocket ia 2026 llm inference serving continuous batching pagedattention vllm ttft itl rag hibrido hnsw bm25 reranker cross-encoder mcp model context protocol react loop semantic cache prompt cache"},
  {n:"10",nome:"Linux e terminal completo",curto:"Linux",file:"cadernos/linux.html",cor:"var(--orange)",hex:"#ffb86c",nos:37,top:17,
   desc:"O térreo que os outros nove pressupõem: o shell e a expansão antes do programa, PATH, permissões e o UID que o container não reconhece, processos e sinais, SIGTERM contra SIGKILL, o PID 1 que engole o sinal, os três descritores e os pipes, grep/sed/awk, o disco que não volta, a memória que não acabou, a porta que não responde, systemd e journalctl, e por que top e free mentem dentro do container.",
   tags:["PID 1","2>&1","cgroup"],
   chaves:"linux terminal shell bash prompt expansão curinga aspas path command not found which type alias script set -euo pipefail permissão permissoes rwx octal chmod chown umask uid gid dono grupo container non-root volume permission denied link simbólico hard link inode find xargs processo pid ppid fork exec zumbi ps top sinal signal sigterm sigkill sigint sighup trap grace period pid 1 entrypoint exec form shell form tini init exit code 137 143 oom killer dmesg descritor stdin stdout stderr redirecionamento 2>&1 dev null pipe tee filosofia unix grep sed awk sort uniq cut wc contexto substituição coluna agregação disco cheio df du lsof apagado aberto truncar inode logrotate memória free available cache de página cgroup memory.max porta ss netstat curl dig bind address loopback 0.0.0.0 systemd unit service systemctl enable daemon-reload journalctl namespace cgroups distroless nsenter kubectl debug proc distribuicoes ubuntu debian centos fedora arch rhel alacritty kitty wezterm neovim tmux htop btop rsync homelab lpic rhcsa"},
  {n:"11",nome:"Git completo",curto:"Git",file:"cadernos/git.html",cor:"var(--pink)",hex:"#ff79c6",nos:32,top:16,
   desc:"Unifica os quatro roadmaps de Git que estavam concorrendo no vault. A tese: quase todo problema vem de tratar o Git como histórico linear, quando ele é um grafo de snapshots imutáveis — e quase toda recuperação é possível porque nada é apagado de imediato. Commit e DAG, as três áreas, merge contra rebase e a regra que encerra a discussão, conflito como decisão, cherry-pick com -x, bisect, restore/reset/revert, reflog, rebase interativo com fixup, force-with-lease, segredo vazado na ordem certa, PR, SemVer e arqueologia responsável.",
   tags:["cherry-pick -x","reflog","--force-with-lease"],
   chaves:"git grafo dag commit snapshot imutavel hash objeto blob tree tag working tree index stage area add -p diff staged head refs revision syntax remote fetch pull tracking branch merge fast-forward no-ff conflito ours theirs rebase reaplicar base comum linear cherry-pick transportar release -x patch format-patch am apply stash worktree bisect busca binaria regressao restore reset soft mixed hard revert reflog fsck lost-found recuperar orfao amend fixup squash autosquash rebase interativo reword drop force force-with-lease lease segredo credencial vazamento filter-repo rotacionar reclonar assinatura gpg ssh pull request conventional commits hooks pre-commit ci tag anotada semver versao trunk-based github flow gitflow log show diff range-diff blame pickaxe -S follow gitignore gitattributes fim de linha eol packfile gc prune pro git github gitlab azure devops bitbucket gitkraken sourcetree gitlens gitops iac codeowners branch protection"},
  {n:"12",nome:"Inglês técnico completo",curto:"Inglês",file:"cadernos/ingles.html",cor:"var(--cyan)",hex:"#8be9fd",nos:34,top:16,
   desc:"O que faz os outros renderem: toda fonte primária citada no acervo está em inglês. Calibrado para quem lê com esforço e tem escuta fraca, começa pela entrada — CEFR e o EF SET gratuito, input compreensível e a regra dos 95%, a escada da legenda, a documentação como treino, vocabulário por frequência e repetição espaçada, shadowing e inteligibilidade — e só então a produção: code review sem soar rude, mensagem assíncrona, e o que dizer quando não entendeu na reunião ao vivo.",
   tags:["EF SET","regra dos 95%","shadowing"],
   chaves:"ingles english idioma cefr a1 a2 b1 b2 c1 c2 nivel ef set gratuito certificado toefl ielts duolingo english test certificacao input compreensivel krashen i+1 regra dos 95 por cento extensiva intensiva escuta listening legenda subtitle escada material no seu nivel tres passadas leitura reading documentacao conectivo albeit whereas provided that unless vocabulario frequencia zipf duas mil palavras anki repeticao espacada cartao falsos amigos actually eventually pretend realize pronuncia shadowing inteligibilidade sotaque silaba tonica vogal curta longa ship sheep th aspirado escrita writing code review nit blocking lgtm ptal wdyt suavizador could would mensagem assincrona contexto primeiro standup daily reuniao ao vivo could you repeat that confirmar tomar a vez jump in ganhar tempo entrevista tell me about yourself system design narrar em voz alta think out loud rachel's english funil conceitual cake cambly languagetool"},
  {n:"13",nome:"Oratória e comunicação",curto:"Oratória",file:"cadernos/oratoria.html",cor:"var(--gold)",hex:"#f1fa8c",nos:35,top:15,
   desc:"A camada que faz os outros doze pagarem: eles ensinam a decidir certo, este a fazer a decisão acontecer. Com evidência — renomear a ansiedade como empolgação bate tentar se acalmar, e a exposição gradual reduz o medo de forma mensurável em poucas sessões. Cobre os quatro contextos: defender uma decisão técnica na ordem restrição/opções/escolha/preço, conduzir postmortem sem culpado, a entrevista de System Design como prova oral, palco e conteúdo público, e a conversa difícil com o modelo SBI.",
   tags:["reavaliação","SBI","narrar"],
   chaves:"oratoria comunicacao falar em publico ansiedade nervosismo reavaliacao reappraisal estou empolgado alison wood brooks exposicao gradual evitacao gravacao respiracao estrutura frase unica tese tres apoios slide por ultimo tempo cronometro decisao tecnica adr restricao opcoes escolha preco trade-off nao tecnico risco custo prazo postmortem sem culpado blameless timeline entrevista prova oral narrar em voz alta pensar sem narrar perguntar antes pergunta hostil nao sei conduzir o tempo palco palestra meetup abertura problema uma ideia video comecar pequeno conversa dificil sbi situacao comportamento impacto intencao feedback discordar de quem decide discordar e comprometer-se receber critica reuniao tomar a vez conduzir recapitular decisao dono prazo escrita rfc proposta leitura em diagonal toastmasters pathways clube prep cnv marshall rosenberg linguagem nao verbal storytelling loom"},
  {n:"14",nome:"Inteligência Artificial",curto:"IA",file:"trilhas/ia.html",cor:"var(--purple)",hex:"#bd93f9",nos:61,top:33,
   desc:"Toda a área de IA do vault e a engenharia moderna: escolha entre a Versão V1 (fundações, notas atômicas do vault, prompt, embedding e ofício) ou a Versão V4 (6 grandes níveis didáticos com mapas conceituais: Transformers & RoPE, Speculative Decoding & MoE, SDD, Spring AI, pgvector, Topologias Multi-Agente e Evals com Test Harness). Ao clicar, abre o modal de escolha.",
   tags:["6 Grandes Níveis","Didática Visual"],
   chaves:"ia v1 v4 inteligencia artificial ai engineering modelo llm token previsao proximo token janela de contexto alucinacao transformer attention qkv rope rotary position embedding scaled dot product speculative decoding draft model moe mixture of experts embedding pgvector qdrant hnsw ann busca semantica rag semantic chunking hyde query rewriting prompt engineering saida estruturada json schema function calling tool calling sdd spec driven development agentes subagentes react loop multi agente supervisor debate consenso checkpointing langgraph crewai mcp test harness quality gate eval recall mrr llm as a judge prompt injection dual llm caching semantico redis"},
 {n:"15",nome:"Governança e segurança de TI",curto:"Governança",file:"cadernos/governanca-seguranca.html",cor:"var(--cyan)",hex:"#8be9fd",nos:0,top:0,radar:false,
  meta:"Caderno de fundamentos · governança, risco e segurança",
  desc:"Fundamentos de governança de TI, alinhamento com o negócio, risco, controles, IAM, privacidade e LGPD, desenvolvimento seguro, resposta a incidentes e continuidade. Inclui aplicação prática em uma API Java/Spring com RabbitMQ.",
  tags:["governança","risco","segurança"],
  chaves:"governança governanca segurança seguranca ti tecnologia da informação alinhamento estratégico valor negócio risco controles COBIT ITIL ISO IAM identidade acesso autenticação autorização privacidade LGPD dados pessoais desenvolvimento seguro OWASP incidentes continuidade fornecedores auditoria conformidade evidências políticas responsabilidades NIST ANPD"},
 {n:"16",nome:"Laboratório de projetos",curto:"Bancada",file:"lab/projetos.html",cor:"var(--lime)",hex:"#50fa7b",nos:18,top:18,
   meta:"18 projetos em 6 oficinas · 18 aquecimentos de 20 a 40 min",radar:false,
   desc:"A bancada: a única peça que não se lê, se constrói. Seis oficinas — Java puro, Spring, Cloud agnóstica, AWS, RabbitMQ e IA — com problema real, arquitetura, etapas, critérios de aceite, falhas para injetar de propósito e evidências no repositório. Cada projeto liga de volta ao documento que explica a teoria dele.",
   tags:["18 projetos","aquecimentos","OrderFlow"],
   chaves:"projeto projetos prática práticas laboratório lab bancada workshop missão missões exercício exercícios aquecimento capstone orderflow outbox inbox relay cofre cli bigdecimal ledger jdbc importador extrato virtual threads api orçamento keyset transferência corrida idempotência sala de incidente actuator toxiproxy presigned s3 localstack eventbridge sqs terraform opentofu efêmera teardown budget storage porta adapter minio ports and adapters runtime portátil segredo secret 12-factor kind kubernetes probes rag ollama pgvector embeddings citação classificador saída estruturada json schema evals guardrails prompt injection topologia exchange binding prefetch ack dlq quorum queue testcontainers game day runbook adr"}
];

var FIO=[
 {u:"01",b:"Implementado em Java",s:"O pedido nasce como código: modelo, persistência com JDBC e as restrições de concorrência.",file:"trilhas/java.html",cor:"var(--cyan)"},
 {u:"02",b:"Migrado para Spring",s:"O mesmo código vira serviço: injeção de dependência, transações e a anatomia da requisição.",file:"trilhas/spring.html",cor:"var(--purple)"},
 {u:"03",b:"Projetado em Arquitetura",s:"As fronteiras aparecem: estilos, DDD, consistência e as decisões que ficam documentadas.",file:"trilhas/arquitetura.html",cor:"var(--gold)"},
 {u:"04",b:"Empacotado em containers",s:"Vira imagem e Pod: camadas, PID 1, probes, recursos e rollout no cluster.",file:"trilhas/docker-kubernetes.html",cor:"var(--lime)"},
 {u:"05",b:"Implantado numa nuvem",s:"Ganha compute, rede, identidade e conta no fim do mês — em qualquer provedor.",file:"trilhas/nuvem.html",cor:"var(--orange)"},
 {u:"06",b:"Desacoplado com mensageria",s:"A fila entra no meio: confirms, ack, DLQ, idempotência e o preço da entrega duplicada.",file:"trilhas/mensageria.html",cor:"var(--pink)"}
];

var ORD=[
 {u:"comece aqui",b:"Java completo",s:"É a base dos outros seis: sem valores e referências, concorrência e JDBC, o resto vira decoreba.",file:"trilhas/java.html",cor:"var(--cyan)"},
 {u:"depois",b:"Spring completo",s:"Cada mecanismo do Spring resolve um problema que o Java puro deixa na sua mão.",file:"trilhas/spring.html",cor:"var(--purple)"},
 {u:"depois",b:"Mensageria e RabbitMQ",s:"Entra melhor com Spring na cabeça: o listener e as transações são metade do assunto.",file:"trilhas/mensageria.html",cor:"var(--pink)"},
 {u:"depois",b:"Arquitetura completa",s:"Só faz sentido quando você já sentiu o acoplamento doer no código dos anteriores.",file:"trilhas/arquitetura.html",cor:"var(--gold)"},
 {u:"depois",b:"Docker e Kubernetes",s:"Empacotar exige saber o que a aplicação precisa: portas, sinais, memória, saúde.",file:"trilhas/docker-kubernetes.html",cor:"var(--lime)"},
 {u:"por fim",b:"Nuvem completo",s:"É o mapa por cima de tudo. Lido antes, é vocabulário; lido depois, é decisão.",file:"trilhas/nuvem.html",cor:"var(--orange)"},
 {u:"em qualquer ponto",b:"Conceitos de Backend",s:"O caderno de dúvidas não tem lugar na fila: é consulta, sempre que travar.",file:"cadernos/conceitos-backend.html",cor:"var(--gold)"},
 {u:"em paralelo",b:"Biblioteca",s:"A estante acompanha tudo: leia um livro por vez, no ritmo dos outros seis. Comece pelo Fundamentals.",file:"cadernos/biblioteca.html",cor:"var(--purple)"},
 {u:"sábado, e 20 min por dia",b:"Inglês técnico",s:"Já tem dia marcado: o sábado. Mas o ganho vem da constância diária — o bloco de sábado é para shadowing e gravação, que pedem tempo seguido.",file:"cadernos/ingles.html",cor:"var(--cyan)"},
 {u:"sábado, uma gravação",b:"Oratória e comunicação",s:"Divide o sábado com o inglês. Não depende de saber mais nada: o material das falas sai das decisões que você já tomou.",file:"cadernos/oratoria.html",cor:"var(--gold)"},
 {u:"em paralelo, desde já",b:"Git completo",s:"Ferramenta de todo dia. O marco 04 — desfazer e recuperar — é o que muda a relação com a ferramenta; faça esse primeiro.",file:"cadernos/git.html",cor:"var(--pink)"},
 {u:"em paralelo, desde já",b:"Linux e terminal",s:"É o térreo: todos os outros pressupõem terminal. Não precisa terminar antes de começar o resto — mas quanto antes entrar, menos coisa fica inexplicada.",file:"cadernos/linux.html",cor:"var(--orange)"},
 {u:"depois dos seis",b:"System Design completo",s:"Faz sentido quando você já tem os mecanismos na cabeça: aqui eles aparecem sendo escolhidos sob restrição e número.",file:"trilhas/system-design.html",cor:"var(--lime)"},
 {u:"domingo, projeto próprio",b:"Inteligência Artificial",s:"O documento de IA é para domingo: escolha no modal entre a Versão V1 (Fundações & Vault) ou a Versão V4 (Didática, Visual & 6 Níveis de Engenharia).",file:"trilhas/ia.html",cor:"var(--purple)"},
 {u:"do começo ao fim",b:"Laboratório de projetos",s:"A bancada não espera a fila terminar: cada documento lido pede o projeto correspondente na mesma semana, senão vira reconhecimento.",file:"lab/projetos.html",cor:"var(--lime)"}
];

function q(id){return document.getElementById(id)}
function esc(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function sn(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
function snMap(t){var o="";for(var i=0;i<t.length;i++){var c=sn(t[i]);o+=c.length?c[0]:" "}return o}
function marcar(txt,termo){
  if(!termo)return esc(txt);
  var base=snMap(txt),out="",i=0,pos;
  while((pos=base.indexOf(termo,i))>-1){
    out+=esc(txt.slice(i,pos))+"<mark>"+esc(txt.slice(pos,pos+termo.length))+"</mark>";
    i=pos+termo.length;
  }
  return out+esc(txt.slice(i));
}
var reduz=window.matchMedia("(prefers-reduced-motion:reduce)").matches;

/* radar dos seis */
var AX=DOCS.slice(0,6);
/* a bancada entra no índice e na busca, mas não tem "nós de trilha": fica fora da soma */
var totalNos=DOCS.reduce(function(a,d){return d.radar===false?a:a+d.nos},0);
var maxNos=Math.max.apply(null,AX.map(function(d){return d.nos}));
var CX=170,CY=152,RMAX=98,RMIN=26;
function pt(i,r){var a=(-90+i*(360/AX.length))*Math.PI/180;return[CX+Math.cos(a)*r,CY+Math.sin(a)*r]}
function poly(r){return AX.map(function(_,i){return pt(i,r).map(function(v){return v.toFixed(1)}).join(",")}).join(" ")}
function blob(ps){
  var d="M"+ps[0][0].toFixed(1)+","+ps[0][1].toFixed(1);
  for(var i=0;i<ps.length;i++){
    var p0=ps[(i-1+ps.length)%ps.length],p1=ps[i],p2=ps[(i+1)%ps.length],p3=ps[(i+2)%ps.length];
    d+="C"+(p1[0]+(p2[0]-p0[0])/6).toFixed(1)+","+(p1[1]+(p2[1]-p0[1])/6).toFixed(1)
      +" "+(p2[0]-(p3[0]-p1[0])/6).toFixed(1)+","+(p2[1]-(p3[1]-p1[1])/6).toFixed(1)
      +" "+p2[0].toFixed(1)+","+p2[1].toFixed(1);
  }
  return d+"Z";
}
var pontos=AX.map(function(d,i){return pt(i,RMIN+(RMAX-RMIN)*(d.nos/maxNos))});
var svg="";
[1,.72,.44].forEach(function(k){svg+='<polygon class="grid" points="'+poly(RMAX*k)+'"></polygon>'});
AX.forEach(function(_,i){var p=pt(i,RMAX);svg+='<line class="spoke" x1="'+CX+'" y1="'+CY+'" x2="'+p[0].toFixed(1)+'" y2="'+p[1].toFixed(1)+'"></line>'});
svg+='<text class="ghost" id="ghost" x="'+CX+'" y="'+(CY-8)+'">0</text>';
svg+='<path class="blob" id="blob" d="'+blob(pontos)+'"></path>';
pontos.forEach(function(p,i){svg+='<circle class="dot" data-i="'+i+'" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="4.5"></circle>'});
AX.forEach(function(d,i){
  var p=pt(i,RMAX+34),an=p[0]>CX+8?"start":p[0]<CX-8?"end":"middle";
  var dx=an==="start"?4:an==="end"?-4:0;
  svg+='<a class="lb" data-i="'+i+'" href="'+d.file+'">'
    +'<text class="lb-n" text-anchor="'+an+'" x="'+(p[0]+dx).toFixed(1)+'" y="'+p[1].toFixed(1)+'">'+d.curto+'</text>'
    +'<text class="lb-v" text-anchor="'+an+'" x="'+(p[0]+dx).toFixed(1)+'" y="'+(p[1]+18).toFixed(1)+'">'+d.nos+'</text></a>';
});
q("rad").innerHTML=svg;
q("radMax").textContent=totalNos+" nós no total · o radar mostra os 6 da sequência";


var bl=q("blob"),L=bl.getTotalLength();
if(!reduz){
  bl.style.strokeDasharray=L;bl.style.strokeDashoffset=L;bl.style.fillOpacity=0;
  requestAnimationFrame(function(){
    bl.style.transition="stroke-dashoffset 1.5s var(--ease),fill-opacity 1.1s .5s var(--ease)";
    bl.style.strokeDashoffset=0;bl.style.fillOpacity=1;
  });
  [].slice.call(q("rad").querySelectorAll(".dot")).forEach(function(c,i){
    setTimeout(function(){c.style.transition="opacity .4s var(--ease)";c.style.opacity=1},450+i*110);
  });
  [].slice.call(q("rad").querySelectorAll(".lb")).forEach(function(a,i){
    setTimeout(function(){a.classList.add("in")},600+i*110);
  });
  var g=q("ghost"),t0=null;
  requestAnimationFrame(function passo(t){
    if(!t0)t0=t;
    var k=Math.min(1,(t-t0)/1400),e=1-Math.pow(1-k,3);
    g.textContent=Math.round(totalNos*e);
    if(k<1)requestAnimationFrame(passo);
  });
}else{
  q("ghost").textContent=totalNos;
  [].slice.call(q("rad").querySelectorAll(".dot")).forEach(function(c){c.style.opacity=1});
  [].slice.call(q("rad").querySelectorAll(".lb")).forEach(function(a){a.classList.add("in")});
}
[].slice.call(q("rad").querySelectorAll(".lb")).forEach(function(a,i){
  var dot=q("rad").querySelector('.dot[data-i="'+i+'"]');
  a.addEventListener("mouseenter",function(){dot.setAttribute("r","7")});
  a.addEventListener("mouseleave",function(){dot.setAttribute("r","4.5")});
});

/* índice */
q("idx").innerHTML=DOCS.map(function(d){
  return '<a class="row" data-k="'+sn(d.nome+" "+d.chaves+" "+d.desc)+'" href="'+d.file+'" style="--c:'+d.cor+'">'
    +'<span class="num">'+d.n+'</span>'
    +'<span><h3>'+d.nome+'</h3><div class="meta">'+(d.meta||d.nos+' nós de trilha · '+d.top+' tópicos em profundidade')+'</div>'
    +'<p class="desc" data-txt="'+esc(d.desc).replace(/"/g,"&quot;")+'">'+esc(d.desc)+'</p></span>'
    +'<span class="tags">'+d.tags.map(function(t){return '<em>'+t+'</em>'}).join("")+'</span>'
    +'<span class="go">↗</span></a>';
}).join("");

/* fio, nós e ordem */
q("nodes").innerHTML=FIO.map(function(f,i){return '<i style="--c:'+f.cor+';--d:'+i+'s"></i>'}).join("");
q("fio").innerHTML=FIO.map(function(f){
  return '<a class="st" href="'+f.file+'" style="--c:'+f.cor+'"><u>'+f.u+'</u><b>'+f.b+'</b><span>'+f.s+'</span></a>';
}).join("");
q("ord").innerHTML=ORD.map(function(o){
  return '<a href="'+o.file+'" style="--c:'+o.cor+'"><u>'+o.u+'</u><b>'+o.b+'</b><span>'+o.s+'</span></a>';
}).join("");

/* entrada ao rolar */
if(!reduz&&"IntersectionObserver" in window){
  var alvos=[].slice.call(document.querySelectorAll("h2.sec,.findbar,.idx,.fio,.ord,.obs"));
  alvos.forEach(function(el){el.classList.add("rise")});
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}});
  },{rootMargin:"0px 0px -12% 0px",threshold:.08});
  alvos.forEach(function(el){io.observe(el)});
}

/* busca */
var rows=[].slice.call(document.querySelectorAll(".row"));
q("find").addEventListener("input",function(){
  var t=sn(this.value.trim()),n=0;
  rows.forEach(function(r){
    var hit=!t||r.getAttribute("data-k").indexOf(t)>-1;
    r.classList.toggle("off",!hit);
    r.classList.toggle("hit",!!t&&hit);
    if(hit){n++;var p=r.querySelector(".desc");if(p)p.innerHTML=marcar(p.getAttribute("data-txt"),t)}
  });
  q("findn").textContent=t?(n===1?"1 documento":n+" documentos"):"";
  q("none").classList.toggle("on",!!t&&n===0);
});

/* ================= BACKUP & RESTAURAÇÃO JSON ================= */
var BKP_MODAL = q("backupModal");
function abrirBackup(){
  if(!BKP_MODAL) return;
  BKP_MODAL.hidden = false;
  BKP_MODAL.classList.add("open");
  document.documentElement.style.overflow = "hidden";
}
function fecharBackup(){
  if(!BKP_MODAL) return;
  BKP_MODAL.classList.remove("open");
  BKP_MODAL.hidden = true;
  document.documentElement.style.overflow = "";
}

var btnBackup = q("btnBackup");
if(btnBackup) btnBackup.addEventListener("click", abrirBackup);
var btnFecharBkp = q("btnFecharBackup");
if(btnFecharBkp) btnFecharBkp.addEventListener("click", fecharBackup);
if(BKP_MODAL){
  BKP_MODAL.addEventListener("click", function(e){
    if(e.target === BKP_MODAL) fecharBackup();
  });
}

var btnExportar = q("btnExportarJson");
if(btnExportar){
  btnExportar.addEventListener("click", function(){
    var backup = {
      versao: 1,
      exportadoEm: new Date().toISOString(),
      origem: "site-estudos",
      dados: {}
    };
    try {
      for(var i = 0; i < localStorage.length; i++){
        var k = localStorage.key(i);
        // Proteção estrita: NUNCA exportar chaves de API, senhas ou tokens
        if(!k || /api_key|token|secret|credential|password|gemini/i.test(k)) continue;
        if(k.startsWith("site.") || k.startsWith("pratica.") || k.includes("-completo-") || k.includes("-trilha-") || k.includes("-conteudo-") || k.includes("-rev-") || k.startsWith("ml.") || k === "quiz_xp"){
          backup.dados[k] = localStorage.getItem(k);
        }
      }
    } catch(err){
      var em = q("backupMsg");
      if(em){ em.textContent = "Não foi possível acessar o armazenamento local (navegação privativa?)."; em.style.display = "block"; }
      return;
    }
    var blob = new Blob([JSON.stringify(backup, null, 2)], {type:"application/json"});
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    var d = new Date();
    a.download = "estudos-backup-" + d.toISOString().slice(0,10) + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    var msg = q("backupMsg");
    if(msg){
      msg.textContent = "✓ Backup exportado com sucesso (sem credenciais)!";
      msg.style.display = "block";
      setTimeout(function(){ msg.style.display = "none"; }, 4000);
    }
  });
}

var btnRestaurar = q("btnRestaurarJson");
var fileInput = q("backupFileInput");
if(btnRestaurar && fileInput){
  btnRestaurar.addEventListener("click", function(){ fileInput.click(); });
  fileInput.addEventListener("change", function(){
    if(!fileInput.files || !fileInput.files[0]) return;
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function(e){
      try {
        var raw = e.target.result;
        if(typeof raw !== "string" || raw.length > 5000000){
          alert("Arquivo excede o tamanho máximo seguro suportado (5MB).");
          return;
        }
        var json = JSON.parse(raw);
        if(!json || typeof json !== "object" || Array.isArray(json) || !json.dados || typeof json.dados !== "object" || Array.isArray(json.dados)){
          alert("Estrutura do arquivo de backup inválida ou corrompida.");
          return;
        }
        var keys = Object.keys(json.dados);
        if(keys.length > 2500){
          alert("Quantidade de registros no arquivo excede o limite aceito.");
          return;
        }
        var count = 0;
        for(var i = 0; i < keys.length; i++){
          var k = keys[i];
          // Blindagem contra Prototype Pollution e injeção de credenciais
          if(k === "__proto__" || k === "constructor" || k === "prototype") continue;
          if(/api_key|token|secret|credential|password|gemini/i.test(k)) continue;
          // Validação de escopo de chaves e tipo primitivo seguro
          if(k.startsWith("site.") || k.startsWith("pratica.") || k.includes("-completo-") || k.includes("-trilha-") || k.includes("-conteudo-") || k.includes("-rev-") || k.startsWith("ml.") || k === "quiz_xp"){
            var val = json.dados[k];
            if(typeof val === "string" && val.length <= 500000){
              localStorage.setItem(k, val);
              count++;
            }
          }
        }
        var msg = q("backupMsg");
        if(msg){
          msg.textContent = "✓ " + count + " chaves restauradas com validação de esquema! Atualizando...";
          msg.style.display = "block";
        }
        setTimeout(function(){ location.reload(); }, 1200);
      } catch(err){
        alert("Erro ao validar e ler arquivo JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  });
}

/* ================= UNIVERSAL COMMAND PALETTE (Ctrl+K) ================= */
var PALETTE_DATA = [
  {t:"Java completo (V1)",sub:"Plataforma, JMM, concorrência, JDBC sem ORM e JVM (Vault)",cat:"DOC",url:"trilhas/java.html",cor:"var(--cyan)"},
  {t:"Java completo (V2 - 7 Pilares)",sub:"Java 21, JMM, Virtual Threads, HikariCP, GC e simulador de concorrência",cat:"DOC V2",url:"trilhas/java.html",cor:"var(--cyan)"},
  {t:"Spring completo (V1)",sub:"IoC, proxies CGLIB, @Transactional, MVC e Actuator (Vault)",cat:"DOC",url:"trilhas/spring.html",cor:"var(--purple)"},
  {t:"Spring completo (V2 - 7 Pilares)",sub:"Spring Boot 3, arquitetura interna, Testcontainers e observabilidade",cat:"DOC V2",url:"trilhas/spring.html",cor:"var(--purple)"},
  {t:"Mensageria e RabbitMQ (V1)",sub:"AMQP, confirms, ack, prefetch, DLQ, outbox e Kafka (Vault)",cat:"DOC",url:"trilhas/mensageria.html",cor:"var(--pink)"},
  {t:"Mensageria e RabbitMQ (V2 - 7 Pilares)",sub:"Topologia AMQP, Dead Letter Queue, Outbox Pattern e resiliência",cat:"DOC V2",url:"trilhas/mensageria.html",cor:"var(--pink)"},
  {t:"Nuvem completo (V1)",sub:"Nuvem agnóstica: AWS, Azure, GCP, FinOps e redes (Vault)",cat:"DOC",url:"trilhas/nuvem.html",cor:"var(--orange)"},
  {t:"Nuvem completo (V2 - 7 Pilares)",sub:"VPC CIDR Simulator, AWS/Azure/GCP matrix, IAM Least Privilege e FinOps",cat:"DOC V2",url:"trilhas/nuvem.html",cor:"var(--orange)"},
  {t:"Docker e Kubernetes (V1)",sub:"Namespaces, cgroups, PID 1, probes, rollout e HPA (Vault)",cat:"DOC",url:"trilhas/docker-kubernetes.html",cor:"var(--lime)"},
  {t:"Docker e Kubernetes (V2 - 7 Pilares)",sub:"Probe Simulator (Liveness/Readiness), multi-stage builds e cgroups",cat:"DOC V2",url:"trilhas/docker-kubernetes.html",cor:"var(--lime)"},
  {t:"Arquitetura completa (V1)",sub:"SOLID, Conway, DDD, Saga, consistência e ADRs (Vault)",cat:"DOC",url:"trilhas/arquitetura.html",cor:"var(--gold)"},
  {t:"Arquitetura completa (V2 - 7 Pilares)",sub:"Circuit Breaker Simulator, Saga, Outbox, C4 Model e consistência",cat:"DOC V2",url:"trilhas/arquitetura.html",cor:"var(--gold)"},
  {t:"Conceitos de Backend completo",sub:"Locks, race conditions, índices, JWT e War Room",cat:"DOC",url:"cadernos/conceitos-backend.html",cor:"var(--gold)"},
  {t:"Biblioteca completa",sub:"5 livros fundamentais de arquitetura e algoritmos",cat:"DOC",url:"cadernos/biblioteca.html",cor:"var(--purple)"},
  {t:"System Design completo",sub:"Little's Law, sharding, chaves, Bloom filter e SLAs",cat:"DOC",url:"trilhas/system-design.html",cor:"var(--lime)"},
  {t:"Linux e terminal completo",sub:"Processos, sinais, descritores, pipes e systemd",cat:"DOC",url:"cadernos/linux.html",cor:"var(--orange)"},
  {t:"Git completo",sub:"Grafo DAG, reflog, rebase, squash e recuperação",cat:"DOC",url:"cadernos/git.html",cor:"var(--pink)"},
  {t:"Inglês técnico completo",sub:"Input compreensível, vocabulário e reuniões",cat:"DOC",url:"cadernos/ingles.html",cor:"var(--cyan)"},
  {t:"Oratória e comunicação",sub:"Defesa técnica de decisões, postmortems e SBI",cat:"DOC",url:"cadernos/oratoria.html",cor:"var(--gold)"},
  {t:"Governança e segurança de TI",sub:"Governança, risco, controles, IAM, privacidade e continuidade",cat:"DOC",url:"cadernos/governanca-seguranca.html",cor:"var(--cyan)"},
  {t:"Inteligência Artificial completo (V1)",sub:"Tokens, embeddings, RAG, tool calling, MCP e evals (Vault)",cat:"DOC",url:"trilhas/ia.html",cor:"var(--purple)"},
  {t:"AI Engineering completo (V4 - Didática & Visual)",sub:"Os 6 Grandes Níveis com mapas conceituais: Transformers Q/K/V, RoPE, Speculative Decoding, pgvector, Multi-Agente e Evals",cat:"DOC V4",url:"trilhas/ia.html",cor:"var(--teal)"},
  {t:"Laboratório de projetos",sub:"Bancada de 18 projetos práticos e OrderFlow",cat:"DOC",url:"lab/projetos.html",cor:"var(--lime)"},
  {t:"Transactional Outbox & Relay",sub:"Garantia de publicação sem dual-write e at-least-once",cat:"TEMA",url:"trilhas/mensageria.html#g2",cor:"var(--pink)"},
  {t:"Connection Starvation no HikariCP",sub:"HTTP síncrono lento dentro de @Transactional",cat:"WAR ROOM",url:"cadernos/conceitos-backend.html#j2",cor:"var(--rose)"},
  {t:"OOMKilled Fantasma (Exit 137)",sub:"Limite do container cgroup vs memória Off-Heap JVM",cat:"WAR ROOM",url:"cadernos/conceitos-backend.html#j1",cor:"var(--rose)"},
  {t:"Avalanche e Poison Pill no RabbitMQ",sub:"Requeue infinito, prefetch e Dead Letter Queue",cat:"WAR ROOM",url:"cadernos/conceitos-backend.html#j3",cor:"var(--rose)"},
  {t:"Pool de Conexões e HPA no K8s",sub:"Multiplicação perigosa de conexões sob autoescalonamento",cat:"PONTE",url:"trilhas/java.html#g2",cor:"var(--orange)"},
  {t:"PID 1, Sinais POSIX e Graceful Shutdown",sub:"Forma shell vs exec e terminação limpa no Kubernetes",cat:"PONTE",url:"trilhas/docker-kubernetes.html#b3",cor:"var(--orange)"},
  {t:"Java Memory Model & Concorrência",sub:"Volatile, happens-before, atomics e Virtual Threads",cat:"TEMA",url:"trilhas/java.html#p9",cor:"var(--cyan)"},
  {t:"Proxies Spring, CGLIB e Self-Invocation",sub:"Por que @Transactional falha quando chamado internamente",cat:"TEMA",url:"trilhas/spring.html#c4",cor:"var(--purple)"},
  {t:"Locks Pessimista, Otimista e Distribuído",sub:"SELECT FOR UPDATE, @Version e Redis Redlock",cat:"TEMA",url:"cadernos/conceitos-backend.html#p3",cor:"var(--gold)"},
  {t:"Saga e Transações Compensatórias",sub:"Orquestração vs Coreografia e consistência eventual",cat:"TEMA",url:"trilhas/arquitetura.html#f3",cor:"var(--gold)"},
  {t:"RAG, Embeddings e Bancos Vetoriais",sub:"Busca semântica híbrida com pgvector / Qdrant",cat:"IA",url:"trilhas/ia.html#t4-rag",cor:"var(--purple)"},
  {t:"Constrained Decoding e Gramáticas BNF",sub:"Saída JSON estruturada estrita contra alucinações",cat:"IA",url:"trilhas/ia.html#t4-structured",cor:"var(--purple)"},
  {t:"Protocolo MCP (Model Context Protocol)",sub:"Arquitetura de servidores de ferramentas stdio/SSE",cat:"IA",url:"trilhas/ia.html#t5-mcp",cor:"var(--purple)"},
  {t:"Test Harness & Evals para Agentes (V4)",sub:"Benchmarking determinístico e suites de regressão em CI/CD",cat:"IA V4",url:"trilhas/ia.html#t6-harness",cor:"var(--teal)"},
  {t:"SDD (Spec-Driven Development) & Prompts (V4)",sub:"As 4 camadas de steering e redução drástica de tokens",cat:"IA V4",url:"trilhas/ia.html#t3-sdd",cor:"var(--teal)"},
  {t:"Agentes Autônomos & Loop ReAct (V4)",sub:"Ciclo Pensamento-Ação-Observação e padrão Orchestrator-Workers",cat:"IA V4",url:"trilhas/ia.html#t5-react",cor:"var(--teal)"},
  {t:"Projeto R03 · OrderFlow Capstone",sub:"Microsserviços com Saga, Outbox, RabbitMQ e K8s",cat:"PROJETO",url:"lab/projetos.html",cor:"var(--lime)"},
  {t:"Projeto P01 · CLI de Conciliação Financeira",sub:"Java puro, streaming e tratamento de arquivos",cat:"PROJETO",url:"lab/projetos.html",cor:"var(--lime)"},
  {t:"Projeto P02 · Motor de Pagamentos com JDBC",sub:"Transações manuais e contenção de pool HikariCP",cat:"PROJETO",url:"lab/projetos.html",cor:"var(--lime)"},
  {t:"Projeto P05 · Checkout com Idempotência e Outbox",sub:"Spring Boot, PostgreSQL e RabbitMQ",cat:"PROJETO",url:"lab/projetos.html",cor:"var(--lime)"},
  {t:"Projeto P16 · Agente RAG com Tool Calling",sub:"Spring AI / LangChain4j e banco vetorial",cat:"PROJETO",url:"lab/projetos.html",cor:"var(--lime)"}
];

var PALETTE_MODAL = q("paletteScrim");
var PALETTE_INP = q("paletteInput");
var PALETTE_RES = q("paletteResults");
var palSelectedIndex = 0;
var palFiltered = [];

function abrirPaleta(){
  if(!PALETTE_MODAL) return;
  PALETTE_MODAL.hidden = false;
  PALETTE_MODAL.classList.add("open");
  document.documentElement.style.overflow = "hidden";
  PALETTE_INP.value = "";
  renderPaletaResults("");
  setTimeout(function(){ PALETTE_INP.focus(); }, 50);
}
function fecharPaleta(){
  if(!PALETTE_MODAL) return;
  PALETTE_MODAL.classList.remove("open");
  PALETTE_MODAL.hidden = true;
  document.documentElement.style.overflow = "";
}

function renderPaletaResults(query){
  var qNorm = query.toLowerCase().trim();
  palFiltered = PALETTE_DATA.filter(function(item){
    if(!qNorm) return true;
    return item.t.toLowerCase().includes(qNorm) || item.sub.toLowerCase().includes(qNorm) || item.cat.toLowerCase().includes(qNorm);
  });
  palSelectedIndex = 0;
  if(palFiltered.length === 0){
    PALETTE_RES.innerHTML = '<div class="palette-empty">Nenhum resultado encontrado para "' + esc(query) + '".</div>';
    return;
  }
  var html = "";
  palFiltered.forEach(function(item, idx){
    var activeClass = idx === 0 ? " active" : "";
    html += '<a href="' + item.url + '" class="palette-item' + activeClass + '" data-idx="' + idx + '">'
      + '<span class="p-tag" style="background:color-mix(in srgb,' + item.cor + ' 16%,transparent);color:' + item.cor + ';border:1px solid color-mix(in srgb,' + item.cor + ' 36%,transparent)">' + item.cat + '</span>'
      + '<div class="p-text"><span class="p-title">' + esc(item.t) + '</span><span class="p-sub">' + esc(item.sub) + '</span></div>'
      + '<span class="palette-kbd" style="font-size:.6rem">↵</span>'
      + '</a>';
  });
  PALETTE_RES.innerHTML = html;
}

if(PALETTE_INP){
  PALETTE_INP.addEventListener("input", function(){
    renderPaletaResults(this.value);
  });
  PALETTE_INP.addEventListener("keydown", function(e){
    if(!palFiltered.length) return;
    var items = PALETTE_RES.querySelectorAll(".palette-item");
    if(e.key === "ArrowDown"){
      e.preventDefault();
      palSelectedIndex = (palSelectedIndex + 1) % palFiltered.length;
      items.forEach(function(el, i){ el.classList.toggle("active", i === palSelectedIndex); });
      if(items[palSelectedIndex]) items[palSelectedIndex].scrollIntoView({block:"nearest"});
    } else if(e.key === "ArrowUp"){
      e.preventDefault();
      palSelectedIndex = (palSelectedIndex - 1 + palFiltered.length) % palFiltered.length;
      items.forEach(function(el, i){ el.classList.toggle("active", i === palSelectedIndex); });
      if(items[palSelectedIndex]) items[palSelectedIndex].scrollIntoView({block:"nearest"});
    } else if(e.key === "Enter"){
      e.preventDefault();
      if(palFiltered[palSelectedIndex]){
        location.href = palFiltered[palSelectedIndex].url;
      }
    }
  });
}

var btnPal = q("btnPalette");
if(btnPal) btnPal.addEventListener("click", abrirPaleta);
if(PALETTE_MODAL){
  PALETTE_MODAL.addEventListener("click", function(e){
    if(e.target === PALETTE_MODAL) fecharPaleta();
  });
}

document.addEventListener("keydown", function(e){
  if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k"){
    e.preventDefault();
    if(PALETTE_MODAL && !PALETTE_MODAL.hidden) fecharPaleta();
    else abrirPaleta();
  } else if(e.key === "Escape"){
    if(PALETTE_MODAL && !PALETTE_MODAL.hidden) fecharPaleta();
    if(BKP_MODAL && !BKP_MODAL.hidden) fecharBackup();
    if(MD_IA && !MD_IA.hidden) fecharModalIA();
  }
});

/* ---------- Modal de Escolha de IA (V1 vs V2/V3) no Acervo ---------- */
var RK = "site.index.alternancia.v1";
function lerRegIA(){try{return JSON.parse(localStorage.getItem(RK))||{}}catch(e){return {}}}
function gravarIA(slot,file){
  try{
    var r=lerRegIA(),a=r[slot]||[];
    a.unshift({f:file,t:Date.now()});
    r[slot]=a.slice(0,12);
    localStorage.setItem(RK,JSON.stringify(r));
  }catch(e){}
}
function quandoIA(ts,pass){
  var a=new Date(ts);a.setHours(0,0,0,0);
  var b=new Date();b.setHours(0,0,0,0);
  var n=Math.round((b-a)/864e5);
  var dt=new Date(ts).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});
  if(n<=0)return "hoje mesmo";
  if(n===1)return "ontem";
  if(n<6)return "há "+n+" dias, em "+dt;
  if(n<=10)return pass+", em "+dt;
  return "há "+Math.round(n/7)+" semanas, em "+dt;
}

var CFG_MODAIS = {};
var cfgAtiva = null;

function doDocAcervo(cfg, f){
  return f===cfg.doc?{f:cfg.doc,nome:cfg.label,nota:cfg.n1}:{f:cfg.doc2,nome:cfg.label2,nota:cfg.n2};
}
function ultimaDeIA(h,f){for(var i=0;i<h.length;i++)if(h[i].f===f)return h[i];return null}

var MD_IA=q("mdlIA"),BOX_IA=q("mdlIABox"),voltarFocoIA=null;

function getMDIA(){
  if(!MD_IA) MD_IA = q("mdlIA");
  if(!BOX_IA) BOX_IA = q("mdlIABox");
  return MD_IA;
}

function abrirModalAcervo(cfg, el){
  cfgAtiva = cfg;
  voltarFocoIA = el || null;
  var md = getMDIA(), box = BOX_IA;
  if(!md || !box) return;
  box.style.setProperty("--c", cfg.cor);
  md.hidden = false;
  document.documentElement.style.overflow = "hidden";
  telaEscolhaAcervo(cfg);
}

function fecharModalIA(){
  var md=getMDIA(), box=BOX_IA;
  if(!md)return;
  md.hidden=true;
  document.documentElement.style.overflow="";
  if(box) box.innerHTML="";
  if(voltarFocoIA&&voltarFocoIA.focus)voltarFocoIA.focus();
  voltarFocoIA=null;
}
function irParaAcervo(cfg, f){gravarIA(cfg.slot, f); location.href = f;}

function cartaoAcervo(cfg, f, h, selo, mudo){
  var o = doDocAcervo(cfg, f), u = ultimaDeIA(h, f);
  var isAlt = (f === cfg.doc2 || f.includes("_v2") || f.includes("-v2") || f.includes("_v4") || f.includes("-v4"));
  var ver = isAlt ? (cfg.doc2.includes("v4") || f.includes("v4") ? "V4" : "V2") : "V1";
  var badgeTexto = (selo && (selo.includes("V1") || selo.includes("V2") || selo.includes("V4"))) ? selo : (ver + " · " + selo);
  return '<button class="opt" type="button" data-f="'+o.f+'">'
    +'<span class="bg'+(mudo?" mudo":"")+'">'+esc(badgeTexto)+'</span>'
    +'<strong>'+esc(o.nome)+'</strong>'
    +'<em>'+esc(o.nota)+'</em>'
    +'<span class="qd">'+(u?"última vez: "+esc(quandoIA(u.t,cfg.passado)):"nunca aberto por aqui")+'</span>'
    +'</button>';
}

function telaEscolhaAcervo(cfg){
  var box = BOX_IA;
  if(!box) return;
  var h = lerRegIA()[cfg.slot] || [], ult = h[0] || null;
  var sug = ult ? (ult.f === cfg.doc ? cfg.doc2 : cfg.doc) : cfg.doc;
  var outro = sug === cfg.doc ? cfg.doc2 : cfg.doc;

  var hist = ult
    ? "Você abriu <b>"+esc(doDocAcervo(cfg, ult.f).nome)+"</b> "+esc(quandoIA(ult.t, cfg.passado))
      +". Pela alternância, a vez é de <b>"+esc(doDocAcervo(cfg, sug).nome)+"</b> — mas quem decide é você."
    : "Nada registrado ainda para este assunto. Escolha qual versão deseja estudar agora:";

  var c1=0, c2=0;
  h.forEach(function(e){ e.f === cfg.doc ? c1++ : c2++; });
  var tally = h.length
    ? esc(cfg.label)+" "+c1+" × "+esc(cfg.label2)+" "+c2+" · últimas "+h.length+" vez"+(h.length>1?"es":"")
    : "";

  var rotuloVer = (cfg.doc2 && cfg.doc2.includes("v4")) ? "versão v1 ou v4" : "versão v1 ou v2";
  box.innerHTML = '<button class="x" type="button" data-fechar aria-label="fechar">×</button>'
    +'<span class="kk">'+esc(cfg.sig)+' · '+rotuloVer+'</span>'
    +'<h3 id="mdlIAT">Qual versão você quer estudar?</h3>'
    +'<p class="hist">'+hist+'</p>'
    +'<div class="opts">'+cartaoAcervo(cfg, sug, h, "a vez é deste")+cartaoAcervo(cfg, outro, h, ult&&ult.f===outro?"foi o último":"também dá", true)+'</div>'
    +(tally?'<p class="tally">'+tally+'</p>':'')
    +'<div class="pe"><button type="button" data-fechar>fechar</button>'
    +'<span class="nb">sincronizado com o cronograma do início</span></div>';

  box.querySelectorAll(".opt").forEach(function(b){
    b.addEventListener("click", function(){
      var f = this.dataset.f;
      irParaAcervo(cfg, f);
    });
  });
  var pri = box.querySelector(".opt"); if(pri) pri.focus();
}

/* Interceptar cliques em links do acervo que possuem V2 para abrir o modal */
document.addEventListener("click", function(e){
  var md = getMDIA();
  if(md && !md.hidden){
    if(e.target === md || (e.target.closest && e.target.closest("[data-fechar]"))){
      fecharModalIA();
      return;
    }
  }
  var a = e.target.closest ? e.target.closest("a") : null;
  if(!a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  var h = a.getAttribute("href");
  if(!h) return;
  var baseH = h.split("#")[0];
  var cfg = CFG_MODAIS[baseH];
  if(cfg){
    e.preventDefault();
    abrirModalAcervo(cfg, a);
  }
});

import fs from 'node:fs';

console.log('Iniciando atualização de index.html e assets/js/index.inline.js...');

// 1. Atualizar index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// 1a. Adicionar --teal no :root se não estiver
if (!indexHtml.includes('--teal:')) {
  indexHtml = indexHtml.replace(
    '--lime:#50fa7b;',
    '--lime:#50fa7b;--teal:#50fa7b;'
  );
}

// 1b. Adicionar CSS de .opts.opts-3 e .outros-grid
const cssOptsTarget = '.opts{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:22px}';
const cssOptsReplacement = `.opts{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:22px}
.opts.opts-3{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:22px}
@media(max-width:768px){
  .opts.opts-3{grid-template-columns:1fr}
}`;

if (!indexHtml.includes('.opts.opts-3') && indexHtml.includes(cssOptsTarget)) {
  indexHtml = indexHtml.replace(cssOptsTarget, cssOptsReplacement);
}

// 1c. Estilos de .outros-grid
const cssOutrosTarget = '/* ---------- outros ---------- */\n.outros{margin:clamp(50px,8vh,84px) 0 0}';
const cssOutrosTargetCRLF = '/* ---------- outros ---------- */\r\n.outros{margin:clamp(50px,8vh,84px) 0 0}';
const cssOutrosExtra = `
.outros-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:20px}
.outros-grid .duv{margin-top:0;display:flex;flex-direction:column;align-items:flex-start;padding:24px 22px;border-radius:22px;gap:14px;height:100%}
.outros-grid .duv .mk{width:62px;height:62px;border-radius:20px;font-size:1.85rem}
.outros-grid .duv .bd{display:flex;flex-direction:column;flex:1;width:100%}
.outros-grid .duv h3{font-size:1.32rem;margin:6px 0 8px}
.outros-grid .duv p{font-size:.83rem;line-height:1.55;flex:1}
.outros-grid .duv .chips{margin-top:14px}
.outros-grid .duv .go{align-self:flex-end;margin-top:auto;font-size:1.3rem;padding-top:10px}
@media(max-width:960px){
  .outros-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media(max-width:640px){
  .outros-grid{grid-template-columns:1fr}
}
`;

if (!indexHtml.includes('.outros-grid')) {
  if (indexHtml.includes(cssOutrosTargetCRLF)) {
    indexHtml = indexHtml.replace(cssOutrosTargetCRLF, cssOutrosTargetCRLF + cssOutrosExtra);
  } else if (indexHtml.includes(cssOutrosTarget)) {
    indexHtml = indexHtml.replace(cssOutrosTarget, cssOutrosTarget + cssOutrosExtra);
  }
}

// 1d. Substituir markup de <section class="outros">
const outrosRegex = /<section class="outros">[\s\S]*?<\/section>/;
const novoOutrosHtml = `<section class="outros">
    <div class="hd">
      <h2>Cadernos complementares</h2>
      <span class="kick" style="color:var(--muted)">fora da rotina semanal</span>
    </div>

    <div class="outros-grid">
      <a class="duv" href="cadernos/financas-investimentos.html" style="--dv:var(--teal)">
        <span class="mk">R$</span>
        <span class="bd">
          <span class="kk">objetivos, risco e escolhas</span>
          <h3>Finanças e investimentos</h3>
          <p>Um caderno para entender como começar: organizar orçamento, definir objetivo e prazo, formar reserva, comparar renda fixa, conhecer ações e FIIs, avaliar um plano educacional em três fases e entender aportes, custos e riscos. Sem carteira recomendada ou dados financeiros pessoais.</p>
          <span class="chips"><i>reserva</i><i>renda fixa</i><i>ações e FIIs</i><i>plano por fases</i><i>aportes</i><i>fontes oficiais</i></span>
        </span>
        <span class="go">↗</span>
      </a>

      <a class="duv" href="cadernos/governanca-seguranca.html" style="--dv:var(--cyan)">
        <span class="mk">G</span>
        <span class="bd">
          <span class="kk">decisão, risco e proteção</span>
          <h3>Governança e segurança de TI</h3>
          <p>Um caderno para entender como decisões, responsabilidades e controles se conectam: gestão de riscos, IAM, privacidade e conformidade com LGPD, desenvolvimento seguro, incidentes, continuidade e fornecedores.</p>
          <span class="chips"><i>governança</i><i>risco</i><i>segurança</i><i>privacidade</i><i>continuidade</i></span>
        </span>
        <span class="go">↗</span>
      </a>

      <a class="duv" href="cadernos/biblioteca.html" style="--dv:var(--purple)">
        <span class="mk">▤</span>
        <span class="bd">
          <span class="kk">a estante</span>
          <h3>Biblioteca</h3>
          <p>Os cinco livros que formaram o critério, num documento só — com a síntese de cada um e, principalmente, <b>onde os autores discordam</b>: é ali que mora o trade-off, e era invisível quando cada livro vivia no seu arquivo.</p>
          <span class="chips"><i>Fundamentals of Software Architecture</i><i>The Hard Parts</i><i>Learning DDD</i><i>System Design Interview</i><i>Entendendo Algoritmos</i></span>
        </span>
        <span class="go">↗</span>
      </a>
    </div>
  </section>`;

indexHtml = indexHtml.replace(outrosRegex, novoOutrosHtml);
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('index.html atualizado com sucesso!');

// 2. Atualizar assets/js/index.inline.js
let js = fs.readFileSync('assets/js/index.inline.js', 'utf8');

// 2a. Atualizar SEM
const semRegex = /var\s+SEM\s*=\s*\[[\s\S]*?\n\];/;
const novoSem = `var SEM=[
 {sig:"seg",tema:"Java e Prática",cor:"var(--cyan)",doc:"trilhas/java.html",label:"Java (7 Pilares)",ini:"19:30",fim:"22:30",
  slot:"seg",passado:"na segunda passada",
  opcoes:[
    {f:"trilhas/java.html",nome:"Java (7 Pilares)",tag:"Teoria & Runtime",nota:"Java 21 Moderno: JMM, JIT C1/C2, Virtual Threads, HikariCP, GC e simulador interativo de concorrência."},
    {f:"lab/projetos.html",nome:"Laboratório de Projetos",tag:"Prática & Bancada",nota:"Prática com a mão na massa: 19 projetos em seis oficinas e 18 aquecimentos locais de código (R$ 0 obrigatório)."}
  ],
  n1:"Plataforma e runtime: valores, referências, generics, coleções, falhas, JDBC sem ORM, concorrência e JVM.",
  n2:"Bancada prática de projetos: 19 projetos em seis oficinas e 18 aquecimentos de código.",
  nota:"Comece a semana com Java: escolha entre os 7 Pilares de teoria e runtime ou a bancada prática de projetos."},
 {sig:"ter",tema:"Spring e Mensageria",cor:"var(--purple)",doc:"trilhas/spring.html",label:"Spring Boot 3",ini:"19:30",fim:"22:30",
  slot:"ter",passado:"na terça passada",
  opcoes:[
    {f:"trilhas/spring.html",nome:"Spring Boot 3 (7 Pilares)",tag:"Framework & IoC",nota:"Spring Boot 3 em 7 Pilares: arquitetura interna, CGLIB internals, Testcontainers e observabilidade."},
    {f:"trilhas/mensageria.html",nome:"Mensageria & RabbitMQ",tag:"Assíncrono & Filas",nota:"Mensageria & RabbitMQ em 7 Pilares: topologia AMQP, Dead Letter Queue, Outbox Pattern e Kafka."}
  ],
  n1:"O container de IoC até a produção: ciclo de vida do bean, AOP e proxies, transação, Boot e configuração.",
  n2:"Spring Boot 3 em 7 Pilares: arquitetura interna, CGLIB internals, Testcontainers e observabilidade.",
  nota:"Do container de IoC à mensageria resiliente: escolha entre Spring Boot 3 e Mensageria & RabbitMQ."},
 {sig:"qua",tema:"Nuvem e Linux",cor:"var(--orange)",doc:"trilhas/nuvem.html",label:"Nuvem",ini:"19:30",fim:"22:30",
  slot:"qua",passado:"na quarta passada",
  opcoes:[
    {f:"trilhas/nuvem.html",nome:"Nuvem Multicloud (7 Pilares)",tag:"Infra & Cloud",nota:"Arquitetura agnóstica AWS/GCP/Azure, simulador interativo de VPC/CIDR, IAM Least Privilege e FinOps."},
    {f:"cadernos/linux.html",nome:"Linux e Terminal",tag:"Térreo & SO",nota:"O que roda embaixo de tudo: PID 1, SIGTERM vs SIGKILL, cgroups, grep/sed/awk e diagnóstico em produção."}
  ],
  n1:"Conceitual e sem vendor: mapa de tradução entre AWS, Azure, Google, Oracle e VMware. Compute, rede, storage e IaC.",
  n2:"O térreo: processos, sinais POSIX, PID 1, cgroups e comandos fundamentais de terminal.",
  nota:"Infraestrutura moderna e fundamentos de SO: escolha entre Nuvem Multicloud e Linux & Terminal."},
 {sig:"qui",tema:"Docker e Git",cor:"var(--lime)",doc:"trilhas/docker-kubernetes.html",label:"Docker & K8s",ini:"19:30",fim:"22:30",
  slot:"qui",passado:"na quinta passada",
  opcoes:[
    {f:"trilhas/docker-kubernetes.html",nome:"Docker & Kubernetes (7 Pilares)",tag:"Containers & K8s",nota:"Do processo isolado ao cluster: simulador de Probes (Liveness/Readiness), namespaces, cgroups e HPA."},
    {f:"cadernos/git.html",nome:"Git (Snapshots & Grafo)",tag:"Controle & Grafo",nota:"Grafo de snapshots imutáveis: reflog, bisect, cherry-pick, rebase interativo e recuperação sem medo."}
  ],
  n1:"Do processo isolado ao cluster: namespaces e cgroups, camadas do Dockerfile, Probes e HPA.",
  n2:"O histórico em grafo: snapshots imutáveis, reflog, bisect e rebase interativo.",
  nota:"Containers e controle de versão: escolha entre Docker & Kubernetes e o grafo do Git."},
 {sig:"sex",tema:"Arquitetura e System Design",cor:"var(--gold)",doc:"trilhas/arquitetura.html",label:"Arquitetura",ini:"19:30",fim:"21:00",
  slot:"sex",passado:"na sexta passada",
  opcoes:[
    {f:"trilhas/arquitetura.html",nome:"Arquitetura de Software (7 Pilares)",tag:"Padrões & Decisão",nota:"Circuit Breaker interativo, Saga, Outbox, C4 Model, SOLID, Conway e consistência eventual."},
    {f:"trilhas/system-design.html",nome:"System Design",tag:"Escala & Restrições",nota:"Escolha sob restrição e escala: Lei de Little, escada de leitura, paginação keyset e trade-offs reais."}
  ],
  n1:"O que arquitetura é de verdade: SOLID e a lei de Conway, estilos, DDD, comunicação, dados e consistência.",
  n2:"System Design sob restrição: Lei de Little, partition key, Bloom filter e números reais.",
  nota:"Decisão e escala de software: escolha entre Arquitetura de Sistemas e System Design."},
 {sig:"sáb",tema:"Comunicação e Dúvidas",cor:"var(--pink)",doc:"cadernos/ingles.html",doc2:"cadernos/oratoria.html",label:"Inglês",label2:"Oratória",livre:"60 a 90 min, quando der",
  slot:"sab",passado:"no sábado passado",
  opcoes:[
    {f:"cadernos/ingles.html",nome:"Inglês para Devs",tag:"Comunicação Global",nota:"Entrada antes de saída: escuta, leitura, shadowing e preparação para reuniões ao vivo em inglês."},
    {f:"cadernos/oratoria.html",nome:"Oratória & Expressão",tag:"Postura & Defesa",nota:"Reavaliação da ansiedade, modelo SBI, defesa de ADRs e postura técnica em entrevistas."},
    {f:"cadernos/conceitos-backend.html",nome:"Caderno de Dúvidas",tag:"Fundamentos & Dúvidas",nota:"Conceitos de Backend: race conditions, idempotência, rate limit, locks, JWT vs sessão e observabilidade."}
  ],
  n1:"Entrada antes de saída: escuta, leitura, shadowing e a reunião ao vivo em inglês.",
  n2:"Gravar a própria voz, estruturar antes do slide e defender uma decisão técnica.",
  nota:"Sábado de consolidação: escolha entre Inglês, Oratória ou o Caderno de Dúvidas de Backend."},
 {sig:"dom",tema:"Inteligência Artificial",cor:"var(--purple)",doc:"trilhas/ia.html",label:"AI Engineering",livre:"projeto próprio e IA",
  slot:"dom",passado:"no domingo passado",
  opcoes:[
    {f:"trilhas/ia.html",nome:"AI Engineering (6 Níveis)",tag:"Engenharia de IA",nota:"Didática visual em 6 Níveis: Fundamentos, Tokens, SDD, Spring AI, pgvector, Agentes e Test Harness."},
    {f:"trilhas/ia.html#t_01",nome:"Projetos de IA & Agentes",tag:"Prática & Agentes",nota:"Criação prática de agentes autônomos, avaliação com Ragas, function calling e tool use."}
  ],
  n1:"Toda a base e vault: do token ao agente, RAG, prompt engineering, embeddings, pgvector e guardrails.",
  n2:"AI Engineering V4 em 6 Níveis com Mapas Conceituais e Didática Visual.",
  nota:"Domingo de IA e projetos: escolha entre a trilha completa de AI Engineering ou foco direto em Agentes."}
];`;

js = js.replace(semRegex, novoSem);

// 2b. Atualizar pintarActs
const pintarActsRegex = /function pintarActs\(dia\)[\s\S]*?\n\}/;
const novoPintarActs = `function pintarActs(dia){
  var acts=[];
  if(dia.opcoes && dia.opcoes.length > 1){
    acts.push('<button class="act" type="button" id="btEscolher">escolher: '+dia.tema.toLowerCase()+' →</button>');
  } else if(dia.doc2){
    acts.push('<button class="act" type="button" id="btEscolher">escolher: '+dia.label.toLowerCase()+' ou '+dia.label2.toLowerCase()+' →</button>');
  } else if(dia.doc){
    acts.push('<a class="act" href="'+dia.doc+'">abrir '+dia.label.toLowerCase()+' →</a>');
  }
  acts.push('<a class="act ghost" href="acervo.html">ver o acervo</a>');
  acts.push('<a class="act ghost" href="cadernos/conceitos-backend.html">caderno de dúvidas</a>');
  q("acts").innerHTML=acts.join("");
  var bt=q("btEscolher");
  if(bt)bt.addEventListener("click",function(){abrirModal(dia,bt)});
}`;
js = js.replace(pintarActsRegex, novoPintarActs);

// 2c. Atualizar renderização da semana (q("wk").innerHTML)
const wkRegex = /q\("wk"\)\.innerHTML\s*=\s*SEM\.map[\s\S]*?\}\)\.join\(""\);/;
const novoWk = `q("wk").innerHTML=SEM.map(function(x,i){
  var temOpcoes = !!(x.opcoes && x.opcoes.length > 1) || !!x.doc2;
  var cls="day"+(i===dow?" now":"")+((x.descanso||x.livre)?" rest":"");
  var estilo='style="--c:'+x.cor+';--d:'+(.35+i*.07).toFixed(2)+'s"';
  var htxt=x.descanso?"sem pauta":(x.livre?x.livre:(x.ini+" — "+x.fim));
  var miolo='<span class="sig">'+x.sig+'</span>'
    +'<span class="mid"><span class="tm">'+x.tema+(i===dow?'<span class="tag">hoje</span>':'')+'<span class="horario">'+htxt+'</span></span>'
    +'<span class="sub">'+x.nota+'</span></span>';

  /* dia sem documento não é link */
  if(!x.doc) return '<div class="'+cls+' sem" '+estilo+'>'+miolo
    +'<span class="rt"><span class="sel">'+(x.descanso?"sem pauta":x.livre)+'</span></span></div>';

  /* dia com múltiplas opções: clique normal abre o modal */
  var tagTexto = (x.opcoes && x.opcoes.length === 3) ? "3 opções · escolher" : "2 opções · escolher";
  var rt='<span class="rt">'
    +(temOpcoes?'<span class="sel dois">'+tagTexto+'</span>':'')
    +'<span class="ar">↗</span></span>';
  return '<a class="'+cls+(temOpcoes?" duplo":"")+'" href="'+x.doc+'" data-dia="'+i+'" '+estilo+'>'+miolo+rt+'</a>';
}).join("");`;
js = js.replace(wkRegex, novoWk);

// 2d. Atualizar telaEscolha(x)
const telaEscolhaRegex = /function telaEscolha\(x\)[\s\S]*?\n  var pri=BOX\.querySelector\("\.opt"\);if\(pri\)pri\.focus\(\);\n\}/;
const novaTelaEscolha = `function telaEscolha(x){
  var h=lerReg()[x.slot]||[],ult=h[0]||null;

  if(x.opcoes && x.opcoes.length > 0){
    var gridClass = (x.opcoes.length === 3) ? "opts opts-3" : ((x.opcoes.length >= 4) ? "opts opts-4" : "opts");
    var cardsHtml = x.opcoes.map(function(op){
      var u = ultimaDe(h, op.f);
      var tag = op.tag || op.versao || "Trilha";
      var selo = (ult && ult.f === op.f) ? (tag + " · foi o último") : (tag + " · escolher");
      var mudo = !(ult && ult.f === op.f);
      return '<button class="opt" type="button" data-f="'+op.f+'">'
        +'<span class="bg'+(mudo?" mudo":"")+'">'+esc(selo)+'</span>'
        +'<strong>'+esc(op.nome)+'</strong>'
        +'<em>'+esc(op.nota)+'</em>'
        +'<span class="qd">'+(u?"última vez: "+esc(quando(u.t,x.passado)):"nunca aberto por aqui")+'</span>'
        +'</button>';
    }).join("");

    var histOp = ult
      ? "Você abriu <b>"+esc(doDoc(x,ult.f).nome)+"</b> "+esc(quando(ult.t,x.passado))
        +". Escolha o que deseja focar hoje:"
      : "Nada registrado ainda para este dia. Escolha uma das opções para estudar:";

    var contagemTexto = x.opcoes.length === 3 ? "três opções" : (x.opcoes.length === 2 ? "duas opções" : (x.opcoes.length + " opções"));

    BOX.innerHTML='<button class="x" type="button" data-fechar aria-label="fechar">×</button>'
      +'<span class="kk">'+esc(x.sig)+' · '+contagemTexto+'</span>'
      +'<h3 id="mdlT">O que estudar hoje?</h3>'
      +'<p class="hist">'+histOp+'</p>'
      +'<div class="'+gridClass+'">'+cardsHtml+'</div>'
      +'<div class="pe"><button type="button" data-fechar>fechar</button>'
      +'<a href="acervo.html">ver o acervo completo</a>'
      +'<span class="nb">fica só neste navegador</span></div>';

    BOX.querySelectorAll(".opt").forEach(function(b){
      b.addEventListener("click",function(){
        irPara(x,this.dataset.f);
      });
    });
    var pri=BOX.querySelector(".opt");if(pri)pri.focus();
    return;
  }

  var sug=ult?(ult.f===x.doc?x.doc2:x.doc):x.doc;
  var outro=sug===x.doc?x.doc2:x.doc;

  var hist=ult
    ? "Você abriu <b>"+esc(doDoc(x,ult.f).nome)+"</b> "+esc(quando(ult.t,x.passado))
      +". Pela alternância, a vez é de <b>"+esc(doDoc(x,sug).nome)+"</b> — mas quem decide é você."
    : "Nada registrado ainda para este dia. Escolha qual versão deseja abrir:";

  var c1=0,c2=0;
  h.forEach(function(e){e.f===x.doc?c1++:c2++});
  var tally=h.length
    ? esc(x.label)+" "+c1+" × "+esc(x.label2)+" "+c2+" · últimas "+h.length+" vez"+(h.length>1?"es":"")
    : "";

  var verTag = (x.doc2 && x.doc2.includes("v4")) ? "Versão V1 ou V4" : ((x.label2 && x.label2.includes("V2")) ? "Versão V1 ou V2" : "Escolha de Versão");

  BOX.innerHTML='<button class="x" type="button" data-fechar aria-label="fechar">×</button>'
    +'<span class="kk">'+esc(x.sig)+' · '+verTag+'</span>'
    +'<h3 id="mdlT">Qual versão estudar hoje?</h3>'
    +'<p class="hist">'+hist+'</p>'
    +'<div class="opts">'+cartao(x,sug,h,"a vez é deste")+cartao(x,outro,h,ult&&ult.f===outro?"foi o último":"também dá",true)+'</div>'
    +(tally?'<p class="tally">'+tally+'</p>':'')
    +'<div class="pe"><button type="button" data-fechar>fechar</button>'
    +'<a href="acervo.html">ver os dois no acervo</a>'
    +'<span class="nb">fica só neste navegador</span></div>';

  BOX.querySelectorAll(".opt").forEach(function(b){
    b.addEventListener("click",function(){
      irPara(x,this.dataset.f);
    });
  });
  var pri=BOX.querySelector(".opt");if(pri)pri.focus();
}`;
js = js.replace(telaEscolhaRegex, novaTelaEscolha);

fs.writeFileSync('assets/js/index.inline.js', js, 'utf8');
console.log('assets/js/index.inline.js atualizado com sucesso!');

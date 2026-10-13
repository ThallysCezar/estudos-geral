/* Extraido de index.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 1 ---------- */

var SEM=[
 {sig:"seg",tema:"Java",cor:"var(--cyan)",doc:"trilhas/java.html",label:"Java (7 Pilares)",ini:"19:30",fim:"22:30",
  slot:"seg",passado:"na segunda passada",
  n1:"Plataforma e runtime: valores, referências, generics, coleções, falhas, JDBC sem ORM, concorrência e JVM.",
  n2:"Java 21 Moderno em 7 Pilares: JMM, JIT C1/C2, Virtual Threads, HikariCP, GC e simulador interativo de concorrência.",
  nota:"Da plataforma ao runtime em produção: escolha entre a versão V1 (Vault) ou a versão V2 (7 Pilares Didáticos & Lab Interativo)."},
 {sig:"ter",tema:"Spring e Mensageria",cor:"var(--purple)",doc:"trilhas/spring.html",label:"Spring Boot 3 (7 Pilares)",ini:"19:30",fim:"22:30",
  slot:"ter",passado:"na terça passada",
  opcoes:[{f:"trilhas/spring.html",nome:"Spring Boot 3 (7 Pilares)",nota:"Spring Boot 3 em 7 Pilares: arquitetura interna, CGLIB internals, Testcontainers e observabilidade."},{f:"trilhas/mensageria.html",nome:"Mensageria & RabbitMQ (7 Pilares)",nota:"Mensageria & RabbitMQ em 7 Pilares: topologia AMQP, Dead Letter Queue, Outbox Pattern e Kafka."}],
  n1:"O container de IoC até a produção: ciclo de vida do bean, AOP e proxies, transação, Boot e configuração.",
  n2:"Spring Boot 3 em 7 Pilares: arquitetura interna, CGLIB internals, Testcontainers e observabilidade.",
  nota:"Do container de IoC à mensageria resiliente: escolha entre as versões V1 e V2 de Spring e Mensageria."},
 {sig:"qua",tema:"Nuvem",cor:"var(--orange)",doc:"trilhas/nuvem.html",label:"Nuvem (7 Pilares)",ini:"19:30",fim:"22:30",
  slot:"qua",passado:"na quarta passada",
  n1:"Conceitual e sem vendor: mapa de tradução entre AWS, Azure, Google, Oracle e VMware. Compute, rede, storage e IaC.",
  n2:"Nuvem Multicloud em 7 Pilares: simulador interativo de VPC/CIDR, matriz comparativa AWS/Azure/GCP, IAM Least Privilege, S3 storage tiers e FinOps.",
  nota:"Arquitetura de nuvem agnóstica: escolha entre a versão V1 (Vault) ou a versão V2 (7 Pilares Didáticos & Simulador VPC)."},
 {sig:"qui",tema:"Docker e Kubernetes",cor:"var(--lime)",doc:"trilhas/docker-kubernetes.html",label:"Docker & K8s (7 Pilares)",ini:"19:30",fim:"22:30",
  slot:"qui",passado:"na quinta passada",
  n1:"Do processo isolado ao cluster: namespaces e cgroups, camadas e cache do Dockerfile, ENTRYPOINT e PID 1, Pod, Service, Ingress e HPA.",
  n2:"Containers e Kubernetes em 7 Pilares: simulador interativo de Probes (Liveness/Readiness/Startup), multi-stage builds, isolamento cgroups e autoescalonamento.",
  nota:"Do processo isolado ao cluster em produção: escolha entre a versão V1 (Vault) ou a versão V2 (7 Pilares & Simulador de Probes)."},
 {sig:"sex",tema:"Arquitetura",cor:"var(--gold)",doc:"trilhas/arquitetura.html",label:"Arquitetura (7 Pilares)",ini:"19:30",fim:"21:00",
  slot:"sex",passado:"na sexta passada",
  n1:"O que arquitetura é de verdade: SOLID e a lei de Conway, estilos, DDD, comunicação, dados e consistência, escala e resiliência, e como decidir, documentar e influenciar.",
  n2:"Arquitetura de Software em 7 Pilares: simulador interativo de Circuit Breaker com estados CLOSED/OPEN/HALF-OPEN, Saga, Outbox, C4 Model e consistência eventual.",
  nota:"Arquitetura de sistemas em produção: escolha entre a versão V1 (Vault) ou a versão V2 (7 Pilares & Simulador Circuit Breaker)."},
 {sig:"sáb",tema:"Inglês e oratória",cor:"var(--pink)",doc:"cadernos/ingles.html",doc2:"cadernos/oratoria.html",label:"Inglês",label2:"Oratória",livre:"60 a 90 min, quando der",
  slot:"sab",passado:"no sábado passado",
  n1:"Entrada antes de saída: escuta, leitura, shadowing e a reunião ao vivo em inglês.",
  n2:"Gravar a própria voz, estruturar antes do slide e defender uma decisão técnica.",
  nota:"Sábado sai da sequência técnica: inglês e oratória. O inglês pede 20 min por dia; o sábado é para a parte que precisa de bloco — shadowing, gravação da própria voz e as falas do laboratório."},
 {sig:"dom",tema:"Inteligência Artificial",cor:"var(--purple)",doc:"trilhas/ia.html",label:"AI Engineering (Didática & Visual)",livre:"projeto próprio e IA",
  slot:"dom",passado:"no domingo passado",
  n1:"Toda a base e vault: do token ao agente, RAG, prompt engineering, embeddings, pgvector, MCP e guardrails.",
  n2:"AI Engineering V4 em 6 Níveis com Mapas Conceituais e Didática Visual: Fundamentos, Tokens, SDD, Spring AI, Agentes e Test Harness.",
  nota:"Domingo é para IA e projeto próprio: escolha entre a versão V1 (Fundações & Vault) ou a versão V4 (Didática, Visual & 6 Níveis de Engenharia)."}
];

function q(id){return document.getElementById(id)}
function min(h){var p=h.split(":");return +p[0]*60+ +p[1]}
function dur(m){var h=Math.floor(m/60),r=m%60;return h?(h+" h"+(r?" "+r+" min":"")):(r+" min")}

var dow=(new Date().getDay()+6)%7,d=SEM[dow];
document.body.style.setProperty("--accent",d.cor);

q("dt").textContent=new Date().toLocaleDateString("pt-BR",{weekday:"long",day:"2-digit",month:"long"});
q("clk").textContent=d.descanso?"sem pauta":(d.livre?"livre":"à noite");

/* título, palavra por palavra */
var frase=d.descanso?["Hoje","é","<em>descanso</em>."]:["Hoje","é","<em>"+d.tema+"</em>."];
q("h1").innerHTML=frase.map(function(w,i){
  return '<span class="w"><span style="--d:'+(.12+i*.11).toFixed(2)+'s">'+w+'</span></span>';
}).join(" ");
q("lede").textContent=d.nota;

/* amanhã */
var nx=SEM[(dow+1)%7];
q("morrow").style.setProperty("--nx",nx.cor);
q("mtxt").innerHTML=(nx.descanso?"Amanhã é <b>descanso</b>.":"Amanhã é <b>"+nx.tema+"</b>.");

/* ações — dia de documentos alternativos abre a escolha */
function pintarActs(dia){
  var acts=[];
  if(dia.opcoes)acts.push('<button class="act" type="button" id="btEscolher">escolher: spring ou mensageria (v1 / v2) →</button>');
  else if(dia.doc2)acts.push('<button class="act" type="button" id="btEscolher">escolher: '+dia.label.toLowerCase()+' ou '+dia.label2.toLowerCase()+' →</button>');
  else if(dia.doc)acts.push('<a class="act" href="'+dia.doc+'">abrir '+dia.label.toLowerCase()+' →</a>');
  acts.push('<a class="act ghost" href="acervo.html">ver o acervo</a>');
  acts.push('<a class="act ghost" href="cadernos/conceitos-backend.html">caderno de dúvidas</a>');
  q("acts").innerHTML=acts.join("");
  var bt=q("btEscolher");
  if(bt)bt.addEventListener("click",function(){abrirModal(dia,bt)});
}
pintarActs(d);

/* a aura segue o ponteiro, devagar (acelerado por GPU, sem reflow) */
if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
  var auWrap=q("auraWrap"),ax=0,ay=0,tx=0,ty=0,raf=null;
  window.addEventListener("pointermove",function(e){
    tx=(e.clientX/window.innerWidth-.5)*34;
    ty=(e.clientY/window.innerHeight-.5)*24;
    if(!raf)raf=requestAnimationFrame(seguir);
  },{passive:true});
  function seguir(){
    ax+=(tx-ax)*.045;ay+=(ty-ay)*.045;
    if(auWrap) auWrap.style.transform="translate3d("+ax.toFixed(2)+"px,"+ay.toFixed(2)+"px,0)";
    raf=(Math.abs(tx-ax)>.2||Math.abs(ty-ay)>.2)?requestAnimationFrame(seguir):null;
  }
}

/* a semana */
q("wk").innerHTML=SEM.map(function(x,i){
  var cls="day"+(i===dow?" now":"")+((x.descanso||x.livre)?" rest":"");
  var estilo='style="--c:'+x.cor+';--d:'+(.35+i*.07).toFixed(2)+'s"';
  var htxt=x.descanso?"sem pauta":(x.livre?x.livre:(x.ini+" — "+x.fim));
  var miolo='<span class="sig">'+x.sig+'</span>'
    +'<span class="mid"><span class="tm">'+x.tema+(i===dow?'<span class="tag">hoje</span>':'')+'<span class="horario">'+htxt+'</span></span>'
    +'<span class="sub">'+x.nota+'</span></span>';

  /* dia sem documento não é link */
  if(!x.doc) return '<div class="'+cls+' sem" '+estilo+'>'+miolo
    +'<span class="rt"><span class="sel">'+(x.descanso?"sem pauta":x.livre)+'</span></span></div>';

  /* dia com versões v1/v2: o href existe para o ctrl+clique, mas o clique normal abre o modal */
  var tagTexto = x.sig==="sáb" ? "dois · escolher" : "v1 / v2 · escolher";
  var rt='<span class="rt">'
    +(x.doc2?'<span class="sel dois">'+tagTexto+'</span>':'')
    +'<span class="ar">↗</span></span>';
  return '<a class="'+cls+(x.doc2?" duplo":"")+'" href="'+x.doc+'" data-dia="'+i+'" '+estilo+'>'+miolo+rt+'</a>';
}).join("");

/* ---------- a escolha dos dias com múltiplos documentos ---------- */
var RK="site.index.alternancia.v1";
function lerReg(){try{return JSON.parse(localStorage.getItem(RK))||{}}catch(e){return {}}}
function gravar(slot,file){
  try{
    var r=lerReg(),a=r[slot]||[];
    a.unshift({f:file,t:Date.now()});
    r[slot]=a.slice(0,12);
    localStorage.setItem(RK,JSON.stringify(r));
  }catch(e){}
}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}

/* "há quanto tempo" em palavras, sem nunca chutar a data */
function quando(ts,pass){
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
function doDoc(x,f){
  if(x.opcoes){
    for(var i=0;i<x.opcoes.length;i++){
      if(x.opcoes[i].f===f) return {f:x.opcoes[i].f,nome:x.opcoes[i].nome,nota:x.opcoes[i].nota};
    }
  }
  return f===x.doc?{f:x.doc,nome:x.label,nota:x.n1}:{f:x.doc2,nome:x.label2,nota:x.n2};
}
function ultimaDe(h,f){for(var i=0;i<h.length;i++)if(h[i].f===f)return h[i];return null}

var MD=q("mdl"),BOX=q("mdlBox"),voltarFoco=null;

function abrirModal(x,el){
  voltarFoco=el||null;
  BOX.style.setProperty("--c",x.cor);
  MD.hidden=false;
  document.documentElement.style.overflow="hidden";
  telaEscolha(x);
}
function fecharModal(){
  MD.hidden=true;
  document.documentElement.style.overflow="";
  BOX.innerHTML="";
  if(voltarFoco&&voltarFoco.focus)voltarFoco.focus();
  voltarFoco=null;
}
function irPara(x,f){gravar(x.slot,f);location.href=f;}

function cartao(x,f,h,selo,mudo){
  var o=doDoc(x,f),u=ultimaDe(h,f);
  var badgeTexto = selo;
  if(x.sig !== "sáb"){
    var ver = (f === x.doc2 || f.includes("_v2") || f.includes("-v2") || (o.nome && o.nome.includes("V2"))) ? "V2" : "V1";
    badgeTexto = (selo && (selo.includes("V1") || selo.includes("V2"))) ? selo : (ver + " · " + selo);
  }
  return '<button class="opt" type="button" data-f="'+o.f+'">'
    +'<span class="bg'+(mudo?" mudo":"")+'">'+esc(badgeTexto)+'</span>'
    +'<strong>'+esc(o.nome)+'</strong>'
    +'<em>'+esc(o.nota)+'</em>'
    +'<span class="qd">'+(u?"última vez: "+esc(quando(u.t,x.passado)):"nunca aberto por aqui")+'</span>'
    +'</button>';
}

function telaEscolha(x){
  var h=lerReg()[x.slot]||[],ult=h[0]||null;

  if(x.opcoes){
    var cardsHtml = x.opcoes.map(function(op){
      var u = ultimaDe(h, op.f);
      var selo = (ult && ult.f === op.f) ? (op.versao + " · foi o último") : (op.versao + " · escolher");
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
        +". Escolha qual versão deseja estudar agora:"
      : "Nada registrado ainda para este dia. Escolha entre as versões V1 e V2 de Spring e Mensageria:";

    BOX.innerHTML='<button class="x" type="button" data-fechar aria-label="fechar">×</button>'
      +'<span class="kk">'+esc(x.sig)+' · quatro opções (V1 / V2)</span>'
      +'<h3 id="mdlT">Qual versão estudar hoje?</h3>'
      +'<p class="hist">'+histOp+'</p>'
      +'<div class="opts opts-4">'+cardsHtml+'</div>'
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
}

/* escolheu o mesmo da última vez: confirma antes, sem impedir */
function telaRepetir(x,f,ult){
  var o=doDoc(x,f);
  var altDoc = null;
  if(x.opcoes){
    if(f === "spring.html") altDoc = "spring_v2.html";
    else if(f === "spring_v2.html") altDoc = "spring.html";
    else if(f === "mensageria.html") altDoc = "mensageria_v2.html";
    else if(f === "mensageria_v2.html") altDoc = "mensageria.html";
    else {
      for(var i=0; i<x.opcoes.length; i++){
        if(x.opcoes[i].f !== f){ altDoc = x.opcoes[i].f; break; }
      }
    }
  } else {
    altDoc = (f === x.doc ? x.doc2 : x.doc);
  }
  var alt = doDoc(x, altDoc);

  BOX.innerHTML='<button class="x" type="button" data-fechar aria-label="fechar">×</button>'
    +'<span class="kk">'+esc(x.sig)+' · confirmação</span>'
    +'<h3>Repetir '+esc(o.nome)+'?</h3>'
    +'<p class="hist">Foi exatamente isso que você abriu '+esc(quando(ult.t,x.passado))
    +'. Repetir é legítimo quando o assunto ficou pela metade — mas se foi só o caminho mais curto, '
    +'<b>'+esc(alt.nome)+'</b> está parado desde então.</p>'
    +'<div class="opts">'
    +'<button class="opt" type="button" data-f="'+alt.f+'"><span class="bg">trocar</span>'
      +'<strong>'+esc(alt.nome)+'</strong><em>'+esc(alt.nota)+'</em>'
      +'<span class="qd">mantém as duas trilhas andando</span></button>'
    +'<button class="opt" type="button" data-f="'+o.f+'"><span class="bg mudo">repetir</span>'
      +'<strong>'+esc(o.nome)+'</strong><em>'+esc(o.nota)+'</em>'
      +'<span class="qd">sim, quero o mesmo de novo</span></button>'
    +'</div>'
    +'<div class="pe"><button type="button" data-voltar>voltar</button>'
    +'<button type="button" data-fechar>fechar</button></div>';

  BOX.querySelectorAll(".opt").forEach(function(b){
    b.addEventListener("click",function(){irPara(x,this.dataset.f)});
  });
  BOX.querySelector("[data-voltar]").addEventListener("click",function(){telaEscolha(x)});
  BOX.querySelector(".opt").focus();
}

/* o clique normal na terça, sábado ou domingo abre a escolha; ctrl/cmd+clique segue o href */
q("wk").addEventListener("click",function(e){
  var a=e.target.closest?e.target.closest("a.duplo"):null;
  if(!a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  e.preventDefault();
  abrirModal(SEM[+a.getAttribute("data-dia")],a);
});

var cIA=q("cardIA");
if(cIA){
  cIA.addEventListener("click",function(e){
    if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    e.preventDefault();
    abrirModal(SEM[6],cIA);
  });
}
MD.addEventListener("click",function(e){
  if(e.target===MD||(e.target.closest&&e.target.closest("[data-fechar]")))fecharModal();
});
document.addEventListener("keydown",function(e){
  if(e.key==="Escape"&&!MD.hidden)fecharModal();
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
        atualizarProgressoGlobal();
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
  {t:"Técnica Pomodoro",sub:"Configurar períodos de foco, pausas e ciclo",cat:"FERRAMENTA",url:"ferramentas/pomodoro.html",cor:"var(--cyan)"},
  {t:"Java completo (7 Pilares)",sub:"Java 21, JMM, Virtual Threads, HikariCP, GC e simulador de concorrência",cat:"TRILHA",url:"trilhas/java.html",cor:"var(--cyan)"},
  {t:"Spring Boot 3 (7 Pilares)",sub:"Spring Boot 3, arquitetura interna, Testcontainers e observabilidade",cat:"TRILHA",url:"trilhas/spring.html",cor:"var(--purple)"},
  {t:"Mensageria e RabbitMQ (7 Pilares)",sub:"Topologia AMQP, Dead Letter Queue, Outbox Pattern e resiliência",cat:"TRILHA",url:"trilhas/mensageria.html",cor:"var(--pink)"},
  {t:"Nuvem Multicloud (7 Pilares)",sub:"VPC CIDR Simulator, AWS/Azure/GCP matrix, IAM Least Privilege e FinOps",cat:"TRILHA",url:"trilhas/nuvem.html",cor:"var(--orange)"},
  {t:"Docker e Kubernetes (7 Pilares)",sub:"Probe Simulator (Liveness/Readiness), multi-stage builds e cgroups",cat:"TRILHA",url:"trilhas/docker-kubernetes.html",cor:"var(--lime)"},
  {t:"Arquitetura de Software (7 Pilares)",sub:"Circuit Breaker Simulator, Saga, Outbox, C4 Model e consistência",cat:"TRILHA",url:"trilhas/arquitetura.html",cor:"var(--gold)"},
  {t:"System Design completo",sub:"17 Sistemas reais, Little's Law, sharding, chaves, Bloom filter e SLAs",cat:"TRILHA",url:"trilhas/system-design.html",cor:"var(--lime)"},
  {t:"AI Engineering completo",sub:"Os 6 Grandes Níveis com mapas conceituais: Transformers, RoPE, Speculative Decoding, pgvector, agentes e Test Harness",cat:"TRILHA",url:"trilhas/ia.html",cor:"var(--teal)"},
  {t:"Conceitos de Backend completo",sub:"Locks, race conditions, índices, JWT e War Room",cat:"CADERNO",url:"cadernos/conceitos-backend.html",cor:"var(--gold)"},
  {t:"Biblioteca clássica",sub:"5 livros fundamentais de arquitetura e algoritmos",cat:"CADERNO",url:"cadernos/biblioteca.html",cor:"var(--purple)"},
  {t:"Linux e terminal completo",sub:"Processos, sinais, descritores, pipes e systemd",cat:"CADERNO",url:"cadernos/linux.html",cor:"var(--orange)"},
  {t:"Git em profundidade",sub:"Grafo DAG, reflog, rebase, squash e recuperação",cat:"CADERNO",url:"cadernos/git.html",cor:"var(--pink)"},
  {t:"Inglês técnico completo",sub:"Input compreensível, vocabulário e reuniões",cat:"CADERNO",url:"cadernos/ingles.html",cor:"var(--cyan)"},
  {t:"Oratória e comunicação",sub:"Defesa técnica de decisões, postmortems e SBI",cat:"CADERNO",url:"cadernos/oratoria.html",cor:"var(--gold)"},
  {t:"Governança e segurança de TI",sub:"Governança, risco, controles, IAM, privacidade e continuidade",cat:"CADERNO",url:"cadernos/governanca-seguranca.html",cor:"var(--cyan)"},
  {t:"Laboratório de projetos",sub:"Bancada de 18 projetos práticos e OrderFlow",cat:"LAB",url:"lab/projetos.html",cor:"var(--lime)"},
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
  {t:"Test Harness & Evals para Agentes",sub:"Benchmarking determinístico e suites de regressão em CI/CD",cat:"IA",url:"trilhas/ia.html#t6-harness",cor:"var(--teal)"},
  {t:"SDD (Spec-Driven Development) & Prompts",sub:"As 4 camadas de steering e redução drástica de tokens",cat:"IA",url:"trilhas/ia.html#t3-sdd",cor:"var(--teal)"},
  {t:"Agentes Autônomos & Loop ReAct",sub:"Ciclo Pensamento-Ação-Observação e padrão Orchestrator-Workers",cat:"IA",url:"trilhas/ia.html#t5-react",cor:"var(--teal)"},
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
  }
});

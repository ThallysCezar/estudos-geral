/* Extraido de cadernos/python-para-java.html para tirar o JS do caminho critico de renderizacao.
 * Carregado com <script defer>: roda depois do HTML ser analisado, na mesma
 * ordem em que os blocos apareciam no documento.
 * Gerado por scripts/extrai-js-inline.mjs. Edite o HTML de origem, nao aqui. */

/* ---------- bloco 1 de 2 ---------- */

function W(h,inner){return '<figure class="dg"><svg viewBox="0 0 340 '+h+'" xmlns="http://www.w3.org/2000/svg">'+inner+'</svg></figure>';}
var DG={
 "amb":W(150,"<text x=\"170\" y=\"16\" class=\"bt\">um ambiente por projeto</text><rect x=\"8\" y=\"34\" width=\"92\" height=\"28\" rx=\"8\" class=\"b1\"/><text x=\"54\" y=\"52\" class=\"bs\">pyproject.toml</text><path d=\"M102,48 L124,48\" class=\"l\"/><path d=\"M124,48 L117,44 L117,52 Z\" class=\"h\"/><rect x=\"126\" y=\"34\" width=\"90\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"171\" y=\"52\" class=\"bs\">uv sync</text><path d=\"M218,48 L240,48\" class=\"l\"/><path d=\"M240,48 L233,44 L233,52 Z\" class=\"h\"/><rect x=\"242\" y=\"34\" width=\"90\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"287\" y=\"52\" class=\"bs\">.venv/</text><text x=\"170\" y=\"92\" class=\"bs\">pom.xml → mvn → ~/.m2 (no Java)</text><text x=\"170\" y=\"122\" class=\"bs\">o .venv fica no projeto, não no sistema</text>"),
 "cls":W(150,"<text x=\"170\" y=\"16\" class=\"bt\">três formas de modelar um dado</text><rect x=\"8\" y=\"34\" width=\"100\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"58\" y=\"52\" class=\"bs\">classe comum</text><rect x=\"120\" y=\"34\" width=\"100\" height=\"28\" rx=\"8\" class=\"b1\"/><text x=\"170\" y=\"52\" class=\"bs\">@dataclass</text><rect x=\"232\" y=\"34\" width=\"100\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"282\" y=\"52\" class=\"bs\">Pydantic</text><text x=\"58\" y=\"84\" class=\"bs\">tudo à mão</text><text x=\"170\" y=\"84\" class=\"bs\">≈ record</text><text x=\"282\" y=\"84\" class=\"bs\">≈ DTO + validação</text><text x=\"170\" y=\"122\" class=\"bs\">dataclass não valida; Pydantic valida</text>"),
 "api":W(150,"<text x=\"170\" y=\"16\" class=\"bt\">um pedido no FastAPI</text><rect x=\"6\" y=\"34\" width=\"70\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"41\" y=\"52\" class=\"bs\">HTTP</text><path d=\"M78,48 L96,48\" class=\"l\"/><path d=\"M96,48 L89,44 L89,52 Z\" class=\"h\"/><rect x=\"98\" y=\"34\" width=\"78\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"137\" y=\"52\" class=\"bs\">Pydantic</text><path d=\"M178,48 L196,48\" class=\"l\"/><path d=\"M196,48 L189,44 L189,52 Z\" class=\"h\"/><rect x=\"198\" y=\"34\" width=\"66\" height=\"28\" rx=\"8\" class=\"b1\"/><text x=\"231\" y=\"52\" class=\"bs\">rota</text><path d=\"M266,48 L284,48\" class=\"l\"/><path d=\"M284,48 L277,44 L277,52 Z\" class=\"h\"/><rect x=\"286\" y=\"34\" width=\"48\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"310\" y=\"52\" class=\"bs\">JSON</text><text x=\"170\" y=\"88\" class=\"bs\">Depends() injeta o que a rota pede</text><text x=\"170\" y=\"120\" class=\"bs\">/docs gera o OpenAPI sozinho</text>"),
 "ciclo":W(148,"<text x=\"170\" y=\"16\" class=\"bt\">o ciclo que fixa</text><rect x=\"10\" y=\"34\" width=\"62\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"41\" y=\"52\" class=\"bs\">ler</text><path d=\"M74,48 L92,48\" class=\"l\"/><path d=\"M92,48 L85,44 L85,52 Z\" class=\"h\"/><rect x=\"94\" y=\"34\" width=\"62\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"125\" y=\"52\" class=\"bs\">vídeo</text><path d=\"M158,48 L176,48\" class=\"l\"/><path d=\"M176,48 L169,44 L169,52 Z\" class=\"h\"/><rect x=\"178\" y=\"34\" width=\"68\" height=\"28\" rx=\"8\" class=\"b2\"/><text x=\"212\" y=\"52\" class=\"bs\">doc</text><path d=\"M248,48 L266,48\" class=\"l\"/><path d=\"M266,48 L259,44 L259,52 Z\" class=\"h\"/><rect x=\"268\" y=\"34\" width=\"62\" height=\"28\" rx=\"8\" class=\"b1\"/><text x=\"299\" y=\"52\" class=\"bs\">portar</text><path d=\"M299,64 L176,98\" class=\"l dash\"/><text x=\"170\" y=\"114\" class=\"bs\">portar um endpoint seu é a volta que fixa</text>")
};

var T=[
{g:"01",n:"Ambiente e projeto",s:"Antes de escrever código: onde o Python mora, onde ficam as dependências e como ",c:"var(--orange)",cs:"var(--orange-soft)",items:[
 {t:"Ambiente, dependências e pyproject.toml",x:"o pom.xml do Python",dg:"amb",oq:"pyproject.toml descreve o projeto e as dependências; o .venv guarda as bibliotecas de cada projeto; o lock trava as versões.",ps:"Builds reproduzíveis, sem misturar dependências de projetos diferentes.",cf:"uv init cria o projeto, uv add adiciona e trava, uv sync recria o ambiente, uv run executa dentro dele. Erro comum: instalar no Python do sistema."}
]},
{g:"02",n:"Modelando dados",s:"Onde o Java usa POJO, record e DTO com Bean Validation, o Python tem classe comu",c:"var(--purple)",cs:"var(--purple-soft)",items:[
 {t:"Classes, dataclass e duck typing",x:"record, interface e DTO em Python",dg:"cls",oq:"Classe comum, @dataclass (≈ record) e Pydantic (≈ DTO validado); Protocol faz o papel de interface.",ps:"Modelar dados com pouco código e validar só onde o dado vem de fora.",cf:"Anotação de tipo não é verificada pelo interpretador; dataclass gera métodos; Pydantic valida e converte. Erro comum: lista como valor padrão."}
]},
{g:"03",n:"API com FastAPI",s:"O Spring MVC do Python: rotas, validação, injeção de dependência e documentação,",c:"var(--green)",cs:"var(--green-soft)",items:[
 {t:"FastAPI: rotas, validação e injeção de dependência",x:"o Spring MVC do Python",dg:"api",oq:"Framework web em que a rota é uma função, os tipos validam e documentam, e Depends() injeta as dependências.",ps:"Servir modelos e agentes de IA por HTTP com validação e OpenAPI automáticos.",cf:"Lê a assinatura das rotas ao subir; Pydantic valida o corpo; Depends chama a dependência por pedido; uvicorn é o servidor. Erro comum: bloquear dentro de async def."}
]},
{g:"04",n:"Como aprender de verdade",s:"Para quem já programa, Python se aprende portando código.",c:"var(--amber)",cs:"var(--amber-soft)",items:[
 {t:"O ciclo, as fontes e como praticar",x:"portar um endpoint seu",dg:"ciclo",oq:"Ler o tópico, ver um vídeo que dê o mapa, conferir na documentação e portar um pedaço do seu código Java.",ps:"Ficar produtivo em Python sem refazer um curso para iniciantes.",cf:"Pesquise pela ponte com o Java e confira na documentação oficial. Mini-projeto: portar um CRUD Spring para FastAPI e comparar."}
]}
];

/* ---------- render ---------- */
var nav=document.getElementById("nav");
var navMap={};
function navHead(txt){var a=document.createElement("a");a.className="sec";a.style.color="var(--soft)";a.style.marginTop="18px";a.style.fontSize=".68rem";a.textContent=txt;nav.appendChild(a);}
var flat=[];T.forEach(function(g){g.items.forEach(function(it){it._g=g;flat.push(it);});});
flat.forEach(function(it,i){it._i=i;it._id=it.t.toLowerCase().replace(/[^a-z0-9]+/g,'-');});
var KEYT="python-para-java-CL-trilha-v1";
var doneT={};try{doneT=JSON.parse(localStorage.getItem(KEYT)||"{}");}catch(e){}
var track=document.getElementById("track"),lg=document.getElementById("lg");
navHead("A trilha · 4 marcos");
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
navHead("O conteúdo · 4 partes");
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
var KEYM="python-para-java-CL-conteudo-v1";
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
 var RK="python-para-java-CL-rev-v1";
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

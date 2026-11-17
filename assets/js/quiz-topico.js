/* Teste por tópico na página de certificações: 20 questões de múltipla escolha, uma por vez,
   com correção e explicação. Os erros vão para o mesmo caderno da página de simulados (simulados-v1). */
(function(){
  var KEY="simulados-v1",BANCO=window.SIMULADOS||{};
  function ler(){try{var s=JSON.parse(localStorage.getItem(KEY)||"null");return{erros:(s&&s.erros)||{},hist:(s&&s.hist)||[],top:(s&&s.top)||{}};}catch(e){return{erros:{},hist:[],top:{}};}}
  function gravar(st){try{localStorage.setItem(KEY,JSON.stringify(st));}catch(e){}}
  function emb(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
  function esc(t){var d=document.createElement("div");d.textContent=t;return d.innerHTML;}
  document.querySelectorAll(".top-quiz").forEach(function(box){
    var prova=BANCO[box.dataset.prova];if(!prova)return;
    var t=box.dataset.t,qs=prova.qs.filter(function(q){return q.t===t;});
    if(!qs.length)return;
    function inicio(){
      var st=ler(),ult=st.top[box.dataset.prova+":"+t],nErr=qs.filter(function(q){return st.erros[q.id];}).length;
      box.innerHTML='<p class="tq-txt">'+qs.length+' questões de múltipla escolha sobre este tópico, no estilo da prova. A correção aparece depois de cada resposta.'+(ult!=null?' Último resultado: <b>'+ult+'%</b>.':'')+'</p>'+
        '<div class="tq-bts"><button type="button" class="tq-bt" data-m="todas">Testar este tópico ('+qs.length+' questões)</button>'+(nErr?'<button type="button" class="tq-bt leve" data-m="erros">Refazer as '+nErr+' que errei</button>':'')+'</div>';
      box.querySelectorAll(".tq-bt").forEach(function(b){b.addEventListener("click",function(){comecar(b.dataset.m);});});
    }
    var s=null;
    function comecar(m){var st=ler();var lista=m==="erros"?qs.filter(function(q){return st.erros[q.id];}):qs;s={m:m,qs:emb(lista),i:0,ac:0};mostrar();}
    function mostrar(){
      var q=s.qs[s.i],ops=emb(q.o.map(function(x,k){return{x:x,k:k};}));
      box.innerHTML='<div class="tq-top"><span>Questão '+(s.i+1)+' de '+s.qs.length+'</span><span>'+s.ac+' certas</span></div><p class="tq-enun">'+esc(q.q)+'</p><div class="tq-ops">'+
        ops.map(function(o,j){return '<button type="button" class="tq-op" data-k="'+o.k+'"><b>'+"ABCD"[j]+'</b> '+esc(o.x)+'</button>';}).join("")+'</div><div class="tq-fb"></div>';
      box.querySelectorAll(".tq-op").forEach(function(b){b.addEventListener("click",function(){responder(+b.dataset.k,b);});});
    }
    function responder(k,b){
      var q=s.qs[s.i],ok=k===q.c,st=ler();
      if(ok){s.ac++;if(s.m==="erros")delete st.erros[q.id];}else st.erros[q.id]=true;
      gravar(st);
      box.querySelectorAll(".tq-op").forEach(function(x){x.disabled=true;if(+x.dataset.k===q.c)x.classList.add("certa");});
      if(!ok)b.classList.add("errada");
      var fim=s.i+1>=s.qs.length;
      box.querySelector(".tq-fb").innerHTML='<p class="'+(ok?"ok":"no")+'"><b>'+(ok?"Certo.":"Errado.")+'</b> '+esc(q.e)+'</p><button type="button" class="tq-bt">'+(fim?"Ver resultado":"Próxima")+'</button>';
      var nx=box.querySelector(".tq-fb .tq-bt");nx.addEventListener("click",function(){s.i++;if(s.i<s.qs.length)mostrar();else resultado();});nx.focus({preventScroll:true});
    }
    function resultado(){
      var pc=Math.round(s.ac*100/s.qs.length),st=ler();
      if(s.m==="todas"){st.top[box.dataset.prova+":"+t]=pc;gravar(st);}
      box.innerHTML='<p class="tq-nota '+(pc>=85?"top":pc>=70?"ok":"no")+'"><b>'+pc+'%</b> '+s.ac+' de '+s.qs.length+' certas</p><p class="tq-txt">'+
        (pc>=85?"Tópico dominado. Siga para o próximo e volte aqui daqui a uma semana.":pc>=70?"Quase. Releia \"Não confunda\" e refaça só as que errou.":"Releia o tópico inteiro e faça o laboratório antes de testar de novo.")+' As erradas foram para o caderno de erros dos <a href="simulados.html">simulados</a>.</p><div class="tq-bts"><button type="button" class="tq-bt">Voltar</button></div>';
      box.querySelector(".tq-bt").addEventListener("click",inicio);
    }
    inicio();
  });
})();

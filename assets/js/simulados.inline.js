/* Simulados: treino com correção imediata, simulado cronometrado e caderno de erros.
   Dados em simulados-dados.js. Histórico e erros ficam só neste navegador (localStorage). */
(function(){
  var KEY="simulados-v1", BANCO=window.SIMULADOS||{};
  var st={erros:{},hist:[]};
  try{var s=JSON.parse(localStorage.getItem(KEY)||"null");if(s){st.erros=s.erros||{};st.hist=s.hist||[];}}catch(e){}
  function salvar(){try{localStorage.setItem(KEY,JSON.stringify(st));}catch(e){}}
  var $=function(id){return document.getElementById(id);};
  var selProva=$("smProva"),selDom=$("smDom"),selQtd=$("smQtd"),area=$("smArea"),info=$("smInfo");
  var ids=Object.keys(BANCO);
  ids.forEach(function(id){var o=document.createElement("option");o.value=id;o.textContent=BANCO[id].nome+" ("+BANCO[id].qs.length+" questões)";selProva.appendChild(o);});
  function prova(){return BANCO[selProva.value];}
  function embaralhar(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
  function esc(t){var d=document.createElement("div");d.textContent=t;return d.innerHTML;}
  function preencherDominios(){
    var p=prova();selDom.innerHTML='<option value="">Todos os domínios</option>';
    var g=document.createElement("optgroup");g.label="Por domínio";p.dominios.forEach(function(d,i){var o=document.createElement("option");o.value=i;o.textContent=d;g.appendChild(o);});selDom.appendChild(g);
    if(p.topicos){var g2=document.createElement("optgroup");g2.label="Por tópico";Object.keys(p.topicos).forEach(function(t){var o=document.createElement("option");o.value="t:"+t;o.textContent=t.slice(1)+" · "+p.topicos[t];g2.appendChild(o);});selDom.appendChild(g2);}
    var nErr=p.qs.filter(function(q){return st.erros[q.id];}).length;
    $("smErrosN").textContent=nErr;
    $("smOficial").href=p.oficial.url;$("smOficial").textContent=p.oficial.rotulo+" ↗";
    historico();
  }
  function historico(){
    var p=prova(),h=st.hist.filter(function(x){return x.p===selProva.value;}).slice(-5).reverse();
    $("smHist").innerHTML=h.length?h.map(function(x){return "<li><b>"+x.nota+"%</b> em "+x.n+" questões · "+x.data+"</li>";}).join(""):"<li>Nenhum simulado feito ainda.</li>";
  }
  function filtrar(modo){
    var p=prova(),d=selDom.value,qs=p.qs;
    if(modo==="erros")qs=qs.filter(function(q){return st.erros[q.id];});
    else if(d.indexOf("t:")===0)qs=qs.filter(function(q){return q.t===d.slice(2);});
    else if(d!=="")qs=qs.filter(function(q){return String(q.d)===d;});
    return qs;
  }
  var sessao=null,relogio=null;
  function iniciar(modo){
    var qs=filtrar(modo);
    if(!qs.length){area.innerHTML='<p class="sm-vazio">'+(modo==="erros"?"O caderno de erros desta prova está vazio. Ótimo sinal.":"Nenhuma questão para esse filtro.")+'</p>';return;}
    var n=modo==="simulado"?Math.min(+selQtd.value,qs.length):qs.length;
    sessao={modo:modo,qs:embaralhar(qs).slice(0,n),i:0,resp:[],ini:Date.now()};
    clearInterval(relogio);
    if(modo==="simulado"){var lim=n*60;relogio=setInterval(function(){var r=lim-Math.floor((Date.now()-sessao.ini)/1000);info.textContent="Tempo restante: "+Math.floor(r/60)+":"+String(Math.max(r%60,0)).padStart(2,"0");if(r<=0){clearInterval(relogio);fim();}},1000);}
    else info.textContent=modo==="erros"?"Refazendo o caderno de erros. Acertou, a questão sai do caderno.":"Treino: a correção aparece depois de cada resposta.";
    mostrar();
  }
  function mostrar(){
    var s=sessao,q=s.qs[s.i],p=prova();
    var ops=embaralhar(q.o.map(function(t,k){return{t:t,k:k};}));
    area.innerHTML='<div class="sm-q"><div class="sm-top"><span>Questão '+(s.i+1)+' de '+s.qs.length+'</span><span>'+esc(p.dominios[q.d])+'</span></div>'+
      '<p class="sm-enun">'+esc(q.q)+'</p><div class="sm-ops">'+ops.map(function(o,j){return '<button type="button" class="sm-op" data-k="'+o.k+'"><b>'+"ABCD"[j]+'</b> '+esc(o.t)+'</button>';}).join("")+'</div><div class="sm-fb" id="smFb"></div></div>';
    area.querySelectorAll(".sm-op").forEach(function(b){b.addEventListener("click",function(){responder(+b.dataset.k,b);});});
    area.querySelector(".sm-op").focus({preventScroll:true});
  }
  function responder(k,botao){
    var s=sessao,q=s.qs[s.i],ok=k===q.c;
    s.resp.push({q:q,k:k,ok:ok});
    if(s.modo==="erros"&&ok)delete st.erros[q.id];
    if(!ok)st.erros[q.id]=true;
    salvar();
    if(s.modo==="simulado"){proxima();return;}
    area.querySelectorAll(".sm-op").forEach(function(b){b.disabled=true;if(+b.dataset.k===q.c)b.classList.add("certa");});
    if(!ok)botao.classList.add("errada");
    $("smFb").innerHTML='<p class="'+(ok?"ok":"no")+'"><b>'+(ok?"Certo.":"Errado.")+'</b> '+esc(q.e)+'</p><button type="button" class="sm-bt" id="smProx">'+(s.i+1<s.qs.length?"Próxima questão":"Ver resultado")+'</button>';
    $("smProx").addEventListener("click",proxima);$("smProx").focus({preventScroll:true});
  }
  function proxima(){sessao.i++;if(sessao.i<sessao.qs.length)mostrar();else fim();}
  function fim(){
    clearInterval(relogio);
    var s=sessao,p=prova(),r=s.resp,ac=r.filter(function(x){return x.ok;}).length,tot=s.qs.length,nota=Math.round(ac*100/tot);
    var porDom=p.dominios.map(function(d,i){var x=r.filter(function(y){return y.q.d===i;});return{d:d,n:x.length,a:x.filter(function(y){return y.ok;}).length};}).filter(function(x){return x.n;});
    if(s.modo==="simulado"){var dt=new Date();st.hist.push({p:selProva.value,nota:nota,n:tot,data:dt.toLocaleDateString("pt-BR")});salvar();}
    var erradas=r.filter(function(x){return !x.ok;});
    var semResp=tot-r.length;
    area.innerHTML='<div class="sm-res"><div class="sm-nota '+(nota>=85?"top":nota>=p.corte?"ok":"no")+'"><b>'+nota+'%</b><span>'+ac+' de '+tot+' certas'+(semResp?' · '+semResp+' sem resposta (tempo esgotado)':'')+'</span></div>'+
      '<p class="sm-dica">'+(nota>=85?"Acima de 85%: repita com outras questões e, se mantiver, está pronto para o simulado oficial.":nota>=p.corte?"Passaria, mas sem margem. Estude os domínios abaixo de 80% e refaça o caderno de erros.":"Abaixo do corte. Volte aos tópicos dos domínios mais fracos antes de outro simulado.")+'</p>'+
      '<h4>Por domínio</h4><ul class="sm-dom">'+porDom.map(function(x){var pc=Math.round(x.a*100/x.n);return '<li><span>'+esc(x.d)+'</span><i><em style="transform:scaleX('+pc/100+')"></em></i><b>'+pc+'%</b></li>';}).join("")+'</ul>'+
      (s.modo==="simulado"&&erradas.length?'<h4>Revise as erradas</h4>'+erradas.map(function(x){return '<details class="sm-rev"><summary>'+esc(x.q.q)+'</summary><p><b>Resposta:</b> '+esc(x.q.o[x.q.c])+'</p><p>'+esc(x.q.e)+'</p></details>';}).join(""):"")+
      '<p class="sm-dica">As questões erradas foram para o caderno de erros.</p></div>';
    info.textContent="";preencherDominios();
  }
  selProva.addEventListener("change",preencherDominios);
  $("smTreino").addEventListener("click",function(){iniciar("treino");});
  $("smSim").addEventListener("click",function(){iniciar("simulado");});
  $("smErros").addEventListener("click",function(){iniciar("erros");});
  $("smZerar").addEventListener("click",function(){if(!confirm("Apagar o histórico e o caderno de erros desta prova?"))return;prova().qs.forEach(function(q){delete st.erros[q.id];});st.hist=st.hist.filter(function(x){return x.p!==selProva.value;});salvar();preencherDominios();});
  var alvo=location.hash.replace("#","");if(BANCO[alvo])selProva.value=alvo;
  preencherDominios();
  var qt=new URLSearchParams(location.search).get("t");if(qt&&selDom.querySelector('option[value="t:'+qt+'"]'))selDom.value="t:"+qt;
})();

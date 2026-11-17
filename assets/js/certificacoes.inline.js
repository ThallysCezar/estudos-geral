/* Certificações: marca semanas e provas concluídas e guarda no navegador. */
(function(){
  var KEY="certificacoes-v1";
  var feitos={};try{feitos=JSON.parse(localStorage.getItem(KEY)||"{}");}catch(e){}
  var caixas=document.querySelectorAll(".marco-feito input");
  var semanas=document.querySelectorAll(".semana .marco-feito input");
  var provas=document.querySelectorAll(".prova-top");
  function pintar(){
    var n=0;
    caixas.forEach(function(c){
      var ok=!!feitos[c.dataset.k];c.checked=ok;
      var alvo=c.closest(".marco, .topico");if(alvo)alvo.classList.toggle("feito",ok);
    });
    semanas.forEach(function(c){if(feitos[c.dataset.k])n++;});
    document.getElementById("ctFeitas").textContent=n;
    document.getElementById("ctLabel").textContent=n+" de "+semanas.length+" semanas";
    document.getElementById("ctBar").style.transform="scaleX("+(semanas.length?n/semanas.length:0)+")";
    provas.forEach(function(p){
      var cx=p.querySelectorAll(".topico .marco-feito input"),t=0,id=p.id.slice(4);
      cx.forEach(function(c){if(feitos[c.dataset.k])t++;});
      var lab=p.querySelector('[data-lab="'+id+'"]'),bar=p.querySelector('[data-bar="'+id+'"]');
      if(lab)lab.textContent=t+" de "+cx.length+" tópicos";
      if(bar)bar.style.transform="scaleX("+(cx.length?t/cx.length:0)+")";
    });
  }
  caixas.forEach(function(c){
    c.addEventListener("change",function(){
      if(c.checked)feitos[c.dataset.k]=true;else delete feitos[c.dataset.k];
      try{localStorage.setItem(KEY,JSON.stringify(feitos));}catch(e){}
      pintar();
    });
  });
  pintar();
})();

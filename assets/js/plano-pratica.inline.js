/* Plano de prática: marca os marcos concluídos e guarda no navegador. */
(function(){
  var KEY="plano-pratica-v1";
  var feitos={};try{feitos=JSON.parse(localStorage.getItem(KEY)||"{}");}catch(e){}
  var caixas=document.querySelectorAll(".marco .marco-feito input");
  var extras=document.querySelectorAll(".pia-feito input");
  function pintar(){
    var n=0;
    caixas.forEach(function(c){
      var ok=!!feitos[c.dataset.k];c.checked=ok;if(ok)n++;
      c.closest(".marco").classList.toggle("feito",ok);
    });
    document.getElementById("plFeitos").textContent=n;
    document.getElementById("plLabel").textContent=n+" de "+caixas.length+" marcos";
    document.getElementById("plBar").style.transform="scaleX("+(caixas.length?n/caixas.length:0)+")";
  }
  caixas.forEach(function(c){
    c.addEventListener("change",function(){
      if(c.checked)feitos[c.dataset.k]=true;else delete feitos[c.dataset.k];
      try{localStorage.setItem(KEY,JSON.stringify(feitos));}catch(e){}
      pintar();
    });
  });
  extras.forEach(function(c){
    c.checked=!!feitos[c.dataset.k];
    c.addEventListener("change",function(){
      if(c.checked)feitos[c.dataset.k]=true;else delete feitos[c.dataset.k];
      try{localStorage.setItem(KEY,JSON.stringify(feitos));}catch(e){}
    });
  });
  pintar();
})();

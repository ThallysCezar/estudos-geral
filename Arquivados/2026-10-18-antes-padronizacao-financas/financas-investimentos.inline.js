/* Interações locais do caderno de finanças. Sem dados pessoais: apenas IDs de estudo. */
(function(){
  "use strict";
  var key="site.financas-investimentos.progress.v1";
  var done={};
  try{done=JSON.parse(localStorage.getItem(key)||"{}");}catch(e){done={};}
  var buttons=[].slice.call(document.querySelectorAll("[data-done]"));
  var ring=document.getElementById("ring"),pct=document.getElementById("pct"),count=document.getElementById("count");
  function paint(){
    var total=buttons.length,finished=0;
    buttons.forEach(function(b){var id=b.dataset.done,on=!!done[id];if(on)finished++;b.classList.toggle("is-done",on);b.textContent=on?"Estudado ✓":"Marcar como estudado";var link=document.querySelector('nav a[href="#'+id+'"]');if(link)link.classList.toggle("done",on);});
    var percent=total?Math.round(finished/total*100):0;
    pct.textContent=percent+"%";count.textContent=finished+" de "+total+" assuntos";ring.style.setProperty("--deg",(percent*3.6)+"deg");
    document.getElementById("progress").style.width=percent+"%";
  }
  buttons.forEach(function(b){b.addEventListener("click",function(){var id=b.dataset.done;if(done[id])delete done[id];else done[id]=1;try{localStorage.setItem(key,JSON.stringify(done));}catch(e){}paint();});});
  document.getElementById("reset").addEventListener("click",function(){if(!window.confirm("Zerar apenas o progresso deste caderno neste navegador?"))return;done={};try{localStorage.removeItem(key);}catch(e){}paint();});
  document.getElementById("top").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});
  document.getElementById("up").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"});});
  var search=document.getElementById("search"),topics=[].slice.call(document.querySelectorAll("article.topic")),navLinks=[].slice.call(document.querySelectorAll("nav a.top"));
  search.addEventListener("input",function(){var term=search.value.trim().toLocaleLowerCase("pt-BR");topics.forEach(function(t){var match=!term||((t.dataset.search||"")+" "+t.innerText).toLocaleLowerCase("pt-BR").indexOf(term)>=0;t.classList.toggle("hide",!match);var link=navLinks.find(function(a){return a.getAttribute("href")==="#"+t.id;});if(link)link.classList.toggle("hide",!match);});});
  var observed=[].slice.call(document.querySelectorAll("article.topic[id]"));
  if("IntersectionObserver" in window){var io=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(!entry.isIntersecting)return;navLinks.forEach(function(a){a.classList.toggle("active",a.hash==="#"+entry.target.id);});});},{rootMargin:"-15% 0px -70% 0px"});observed.forEach(function(t){io.observe(t);});}
  document.querySelectorAll(".quiz").forEach(function(card){var opts=[].slice.call(card.querySelectorAll("button[data-ok]")),feedback=card.querySelector(".feedback");opts.forEach(function(b){b.addEventListener("click",function(){if(card.dataset.answered)return;card.dataset.answered="1";var ok=b.dataset.ok==="true";b.classList.add(ok?"correct":"wrong");if(!ok){var answer=opts.find(function(x){return x.dataset.ok==="true";});if(answer)answer.classList.add("correct");}feedback.textContent=ok?"Isso. Leia as condições e riscos antes de comparar produtos.":"Reveja o passo correspondente da trilha e tente explicar o risco que ficou de fora.";});});});
  paint();
})();

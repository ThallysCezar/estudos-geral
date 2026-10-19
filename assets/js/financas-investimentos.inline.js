/* ==================== FINANÇAS E INVESTIMENTOS — SCRIPT INLINE ====================
 * Gerencia progresso de estudo (.done com data-k), navegação, busca em tempo real,
 * scrollspy e atualização do meter lateral. Compatível com quiz-engine.js.
 * ================================================================================== */
(function() {
  "use strict";

  var KEY = "site.financas-investimentos.progress.v1";
  var done = {};
  try {
    done = JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch (e) {
    done = {};
  }

  var buttons = [].slice.call(document.querySelectorAll(".done[data-k]"));
  var ring = document.getElementById("ring");
  var rpct = document.getElementById("rpct");
  var rdone = document.getElementById("rdone");
  var rsub = document.getElementById("rsub");
  var tp = document.getElementById("tp");
  var up = document.getElementById("up");
  var topBtn = document.getElementById("top");
  var resetBtn = document.getElementById("reset");
  var modeBtn = document.getElementById("mode");
  var q = document.getElementById("q");
  var nores = document.getElementById("nores");
  var navLinks = [].slice.call(document.querySelectorAll("nav a.top[data-k]"));
  var topics = [].slice.call(document.querySelectorAll("article.topic[id]"));
  var parts = [].slice.call(document.querySelectorAll("section.part[id]"));

  function paint() {
    var total = buttons.length;
    var finished = 0;

    buttons.forEach(function(b) {
      var k = b.dataset.k;
      var isDone = !!done[k];
      if (isDone) finished++;
      b.classList.toggle("is", isDone);
      b.textContent = isDone ? "✓ dominado" : "marcar dominado";

      var navLink = document.querySelector('nav a.top[data-k="' + k + '"]');
      if (navLink) {
        navLink.classList.toggle("ok", isDone);
      }
    });

    var pct = total ? Math.round((finished / total) * 100) : 0;
    if (rpct) rpct.textContent = pct + "%";
    if (rdone) rdone.textContent = finished + " de " + total;
    if (rsub) rsub.textContent = finished + " dominados";
    if (ring) ring.style.setProperty("--deg", (pct * 3.6) + "deg");
  }

  // Toggle de estudo nos botões .done
  buttons.forEach(function(b) {
    b.addEventListener("click", function() {
      var k = b.dataset.k;
      if (done[k]) {
        delete done[k];
      } else {
        done[k] = 1;
      }
      try {
        localStorage.setItem(KEY, JSON.stringify(done));
      } catch (e) {}
      paint();
    });
  });

  // Botão zerar progresso
  if (resetBtn) {
    resetBtn.addEventListener("click", function() {
      if (!window.confirm("Zerar todo o progresso deste caderno neste navegador?")) return;
      done = {};
      try {
        localStorage.removeItem(KEY);
      } catch (e) {}
      paint();
    });
  }

  // Botões de rolagem ao topo
  if (topBtn) {
    topBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  if (up) {
    up.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Alternar modo estudo vs revisão
  var isReviewMode = false;
  if (modeBtn) {
    modeBtn.addEventListener("click", function() {
      isReviewMode = !isReviewMode;
      document.body.classList.toggle("modo-revisao", isReviewMode);
      modeBtn.classList.toggle("on", isReviewMode);
      modeBtn.textContent = isReviewMode ? "revisão" : "estudo";
    });
  }

  // Busca em tempo real
  if (q) {
    q.addEventListener("input", function() {
      var term = q.value.trim().toLowerCase();
      var visibleCount = 0;

      topics.forEach(function(t) {
        var text = (t.textContent || "") + " " + (t.dataset.search || "");
        var match = !term || text.toLowerCase().indexOf(term) >= 0;
        t.classList.toggle("hide", !match);
        if (match && term) visibleCount++;

        var navLink = document.querySelector('nav a.top[data-k="' + t.id + '"]');
        if (navLink) {
          navLink.classList.toggle("hide", !match);
        }
      });

      parts.forEach(function(p) {
        var anyVisible = p.querySelector("article.topic:not(.hide)");
        p.style.display = anyVisible ? "" : "none";
        var partLink = document.querySelector('nav a.sec[href="#' + p.id + '"]');
        if (partLink) {
          partLink.classList.toggle("hide", !anyVisible);
        }
      });

      if (nores) {
        nores.classList.toggle("on", !!term && visibleCount === 0);
      }
    });
  }

  // Barra de progresso de leitura no topo e botão up
  var ticking = false;
  function onScroll() {
    var scrollY = window.scrollY || window.pageYOffset;
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    var progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;

    if (tp) tp.style.width = Math.min(100, Math.max(0, progress)) + "%";
    if (up) up.classList.toggle("on", scrollY > 600);

    // Scrollspy simples e confiável
    var scrollPos = scrollY + 160;
    var currentTopic = null;

    for (var i = 0; i < topics.length; i++) {
      var t = topics[i];
      if (t.offsetTop <= scrollPos) {
        currentTopic = t;
      }
    }

    if (currentTopic) {
      navLinks.forEach(function(a) {
        a.classList.toggle("active", a.dataset.k === currentTopic.id);
      });
    }
  }

  window.addEventListener("scroll", function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  paint();
})();

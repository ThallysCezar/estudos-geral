/* ==================== MICRO FRONTENDS & NATIVE FEDERATION — SCRIPT INLINE ====================
 * Gerencia progresso de estudo (.done com data-k), navegação, busca em tempo real,
 * scrollspy e atualização do meter lateral. Compatível com quiz-engine.js.
 * ============================================================================================== */
(function() {
  "use strict";

  var KEY = "site.micro-frontends.progress.v1";
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

  var isReviewMode = false;
  if (modeBtn) {
    modeBtn.addEventListener("click", function() {
      isReviewMode = !isReviewMode;
      document.body.classList.toggle("review-mode", isReviewMode);
      modeBtn.classList.toggle("on", isReviewMode);
      modeBtn.textContent = isReviewMode ? "🎯 revisão" : "📖 estudo";
    });
  }

  if (q) {
    q.addEventListener("input", function() {
      var term = q.value.toLowerCase().trim();
      var visibleCount = 0;

      topics.forEach(function(t) {
        var text = t.textContent.toLowerCase();
        var match = !term || text.indexOf(term) !== -1;
        t.classList.toggle("hide", !match);
        if (match) visibleCount++;

        var k = t.id;
        var navLink = document.querySelector('nav a.top[data-k="' + k + '"]');
        if (navLink) {
          navLink.classList.toggle("hide", !match);
        }
      });

      parts.forEach(function(p) {
        var hasVisibleTopic = !!p.querySelector("article.topic:not(.hide)");
        p.style.display = (!term || hasVisibleTopic) ? "" : "none";
      });

      if (nores) {
        nores.style.display = (visibleCount === 0 && term) ? "block" : "none";
      }
    });
  }

  window.addEventListener("scroll", function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = height ? (winScroll / height) * 100 : 0;
    if (tp) tp.style.width = scrolled + "%";

    var fromTop = window.scrollY + 140;
    var currentTopic = null;
    topics.forEach(function(t) {
      if (t.offsetTop <= fromTop) {
        currentTopic = t;
      }
    });

    navLinks.forEach(function(link) {
      link.classList.remove("active");
      if (currentTopic && link.dataset.k === currentTopic.id) {
        link.classList.add("active");
      }
    });
  }, { passive: true });

  paint();
})();

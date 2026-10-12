/* ==================== INSTANT NAVIGATION & SPECULATIVE PREFETCH ====================
 * Acelera a navegação entre trilhas, cadernos e portal para latência perceptível de 0ms.
 * - Monitora intenção do usuário (hover no desktop, foco via teclado ou toque no mobile).
 * - Pré-carrega o documento de destino via <link rel="prefetch"> com prioridade ociosa.
 * - Respeita rigorosamente preferências de economia de dados (Save-Data e redes 2G).
 * =================================================================================== */
(function() {
  if (typeof window === 'undefined' || !document.head) return;

  // Respeita modo economia de dados do usuário e conexões excessivamente lentas
  if (navigator.connection && (navigator.connection.saveData || /2g/.test(navigator.connection.effectiveType))) {
    return;
  }

  var prefetched = new Set();
  var currentPath = window.location.pathname.toLowerCase().replace(/\\/g, '/');

  function prefetchUrl(url) {
    if (!url || prefetched.has(url)) return;
    prefetched.add(url);

    try {
      var link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      link.as = 'document';
      document.head.appendChild(link);
    } catch (e) {
      // Fallback gracioso para navegadores que não suportem injeção dinâmica de prefetch
    }
  }

  function handleIntent(target) {
    var a = target && target.closest ? target.closest('a[href]') : null;
    if (!a || !a.href) return;

    // Apenas links dentro do mesmo domínio
    if (a.origin !== window.location.origin) return;

    // Ignora âncoras locais puras (#) ou protocolos especiais
    var href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:')) return;

    var path = a.pathname.toLowerCase().replace(/\\/g, '/');

    // Apenas páginas HTML do acervo
    if (!path.endsWith('.html') && !path.endsWith('/')) return;

    // Evita pré-carregar a própria página ativa
    if (path === currentPath) return;

    prefetchUrl(a.href);
  }

  // Hover no Desktop (com 35ms de debounce natural de intenção)
  document.addEventListener('mouseover', function(e) {
    handleIntent(e.target);
  }, { passive: true });

  // Toque inicial no Mobile (ocorre 100-300ms antes do evento de clique)
  document.addEventListener('touchstart', function(e) {
    handleIntent(e.target);
  }, { passive: true });

  // Foco via Teclado (acessibilidade para quem navega por Tab)
  document.addEventListener('focusin', function(e) {
    handleIntent(e.target);
  }, { passive: true });
})();

/* ==================== FLOATING HOME BUTTON CONTROLLER ====================
 * Injeta um botão elegante, flutuante e discreto no canto inferior direito
 * em todas as páginas para retornar à tela inicial (index.html) sem precisar
 * rolar até o topo.
 * - Estilo: Dracula Glassmorphism (blur + borda sutil com acento roxo/verde).
 * - Inteligente: Detecta automaticamente o caminho relativo (../index.html ou index.html).
 * - Responsivo: Totalmente adaptado para Mobile, Tablets e Telas Retina com Safe Area.
 * - Seguro: Não é renderizado na própria tela inicial (index.html).
 * ========================================================================= */

(function() {
  function isHomePage() {
    // 1. Checagem por elementos característicos da home
    if (document.getElementById('microlearningMount') ||
        document.querySelector('.hero-hub') ||
        document.querySelector('.semana-banner')) {
      return true;
    }

    // 2. Checagem por pathname
    var p = window.location.pathname.toLowerCase().replace(/\\/g, '/');
    if (p.endsWith('/index.html') || p.endsWith('/site-estudos/') || p.endsWith('/site-estudos') || p === '/') {
      if (!p.includes('/trilhas/') && !p.includes('/cadernos/') && !p.includes('/lab/') && !p.includes('/ferramentas/')) {
        return true;
      }
    }
    return false;
  }

  function getHomeUrl() {
    var existingHome = document.querySelector('a[href="../index.html"]');
    if (existingHome) return '../index.html';
    var rootHome = document.querySelector('a[href="index.html"]');
    if (rootHome) return 'index.html';

    var p = window.location.pathname.toLowerCase().replace(/\\/g, '/');
    if (p.includes('/trilhas/') || p.includes('/cadernos/') || p.includes('/lab/') || p.includes('/ferramentas/')) {
      return '../index.html';
    }
    return 'index.html';
  }

  function injectStyles() {
    if (document.getElementById('styleFloatingHome')) return;
    var style = document.createElement('style');
    style.id = 'styleFloatingHome';
    style.textContent = [
      '/* Botão Flutuante Início - Responsivo para Desktop, Tablet e Mobile */',
      '.btn-floating-home {',
      '  position: fixed;',
      '  bottom: calc(18px + env(safe-area-inset-bottom, 0px));',
      '  right: calc(18px + env(safe-area-inset-right, 0px));',
      '  z-index: 9985;',
      '  display: inline-flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '  gap: 8px;',
      '  padding: 8px 16px 8px 12px;',
      '  min-height: 40px;',
      '  background: rgba(33, 34, 44, 0.88);',
      '  color: #f8f8f2 !important;',
      '  text-decoration: none !important;',
      '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif;',
      '  font-size: 0.82rem;',
      '  font-weight: 600;',
      '  letter-spacing: 0.02em;',
      '  border-radius: 9999px;',
      '  border: 1px solid rgba(189, 147, 249, 0.4);',
      '  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45), 0 2px 6px rgba(0, 0, 0, 0.3);',
      '  backdrop-filter: blur(12px);',
      '  -webkit-backdrop-filter: blur(12px);',
      '  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);',
      '  cursor: pointer;',
      '  user-select: none;',
      '  opacity: 0.94;',
      '  -webkit-tap-highlight-color: transparent;',
      '  touch-action: manipulation;',
      '}',
      '@media (hover: hover) and (pointer: fine) {',
      '  .btn-floating-home:hover {',
      '    opacity: 1;',
      '    transform: translateY(-2px) scale(1.02);',
      '    background: rgba(40, 42, 54, 0.98);',
      '    border-color: #bd93f9;',
      '    box-shadow: 0 12px 28px rgba(189, 147, 249, 0.28), 0 4px 12px rgba(0, 0, 0, 0.5);',
      '    color: #ffffff !important;',
      '  }',
      '  .btn-floating-home:hover .btn-fh-icon {',
      '    stroke: #50fa7b;',
      '    transform: scale(1.08);',
      '  }',
      '}',
      '.btn-floating-home:active {',
      '  transform: translateY(0) scale(0.96);',
      '  background: rgba(50, 52, 68, 0.98);',
      '}',
      '.btn-floating-home .btn-fh-icon {',
      '  width: 17px;',
      '  height: 17px;',
      '  stroke: #bd93f9;',
      '  transition: stroke 0.2s ease, transform 0.2s ease;',
      '  flex-shrink: 0;',
      '}',
      '.btn-floating-home .btn-fh-label {',
      '  display: inline-block;',
      '  line-height: 1;',
      '}',
      '/* Harmonização com o botão Voltar ao Topo (.up) para evitar sobreposição */',
      '.up {',
      '  bottom: calc(68px + env(safe-area-inset-bottom, 0px)) !important;',
      '  right: calc(18px + env(safe-area-inset-right, 0px)) !important;',
      '  z-index: 9980 !important;',
      '  transition: opacity .2s ease, transform .2s ease !important;',
      '}',
      '/* Otimização para Telas Pequenas (Celular <= 640px) */',
      '@media (max-width: 640px) {',
      '  .btn-floating-home {',
      '    bottom: calc(14px + env(safe-area-inset-bottom, 0px));',
      '    right: calc(14px + env(safe-area-inset-right, 0px));',
      '    padding: 7px 13px 7px 10px;',
      '    font-size: 0.78rem;',
      '    gap: 6px;',
      '    min-height: 38px;',
      '    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.5);',
      '  }',
      '  .btn-floating-home .btn-fh-icon {',
      '    width: 15px;',
      '    height: 15px;',
      '  }',
      '  .up {',
      '    bottom: calc(60px + env(safe-area-inset-bottom, 0px)) !important;',
      '    right: calc(14px + env(safe-area-inset-right, 0px)) !important;',
      '    width: 38px !important;',
      '    height: 38px !important;',
      '    font-size: .9rem !important;',
      '  }',
      '}',
      '/* Tablets (641px a 1024px) */',
      '@media (min-width: 641px) and (max-width: 1024px) {',
      '  .btn-floating-home {',
      '    bottom: calc(20px + env(safe-area-inset-bottom, 0px));',
      '    right: calc(20px + env(safe-area-inset-right, 0px));',
      '    min-height: 42px;',
      '  }',
      '  .up {',
      '    bottom: calc(72px + env(safe-area-inset-bottom, 0px)) !important;',
      '    right: calc(20px + env(safe-area-inset-right, 0px)) !important;',
      '  }',
      '}',
      '/* Ocultação em Impressão */',
      '@media print {',
      '  .btn-floating-home, .up {',
      '    display: none !important;',
      '  }',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function initFloatingHome() {
    if (isHomePage()) return;
    if (document.getElementById('btnFloatingHome')) return;

    injectStyles();

    var homeUrl = getHomeUrl();
    var btn = document.createElement('a');
    btn.id = 'btnFloatingHome';
    btn.className = 'btn-floating-home';
    btn.href = homeUrl;
    btn.setAttribute('title', 'Voltar para a tela inicial (Hoje)');
    btn.setAttribute('aria-label', 'Voltar para a tela inicial');

    btn.innerHTML = '<svg class="btn-fh-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">'
      + '<path d="M3 9.5L12 3l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>'
      + '<polyline points="9 22 9 12 15 12 15 22"></polyline>'
      + '</svg>'
      + '<span class="btn-fh-label">Início</span>';

    document.body.appendChild(btn);
  }

  // Exportar globalmente para que responsive-drawer possa chamá-lo
  window.initFloatingHome = initFloatingHome;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingHome);
  } else {
    initFloatingHome();
  }
})();

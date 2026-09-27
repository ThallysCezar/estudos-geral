/* ==================== RESPONSIVE DRAWER CONTROLLER ==================== */
(function() {
  function initDrawer() {
    var side = document.querySelector('.side');
    if (!side) return;

    var brandEl = side.querySelector('.brand b');
    var brandIconEl = side.querySelector('.brand i');
    var guideTitle = brandEl ? brandEl.textContent.trim() : document.title.split('—')[0].trim();
    var guideIcon = brandIconEl ? brandIconEl.textContent.trim() : '📖';

    // 1. Create Mobile Topbar
    var header = document.createElement('header');
    header.className = 'mobile-header';
    header.innerHTML = '<div class="mh-left">'
      + '<span class="mh-brand-icon">' + guideIcon + '</span>'
      + '<span class="mh-title">' + guideTitle + '</span>'
      + '</div>'
      + '<div class="mh-right">'
      + '<button class="mh-btn-menu" type="button" aria-label="Abrir menu de tópicos">'
      + '<span>☰</span> <span>Tópicos</span>'
      + '</button>'
      + '</div>';
    document.body.insertBefore(header, document.body.firstChild);

    // 2. Create Backdrop
    var backdrop = document.createElement('div');
    backdrop.className = 'drawer-backdrop';
    document.body.appendChild(backdrop);

    // 3. Create Close bar inside sidebar
    var closeBar = document.createElement('div');
    closeBar.className = 'drawer-close-bar';
    closeBar.innerHTML = '<span>' + guideTitle + '</span>'
      + '<button class="drawer-close-btn" type="button" aria-label="Fechar navegação">✕</button>';
    side.insertBefore(closeBar, side.firstChild);

    var btnOpen = header.querySelector('.mh-btn-menu');
    var btnClose = closeBar.querySelector('.drawer-close-btn');

    function openDrawer() {
      side.classList.add('drawer-open');
      backdrop.classList.add('active');
      document.documentElement.style.overflow = 'hidden';
    }

    function closeDrawer() {
      side.classList.remove('drawer-open');
      backdrop.classList.remove('active');
      document.documentElement.style.overflow = '';
    }

    if (btnOpen) btnOpen.addEventListener('click', openDrawer);
    if (btnClose) btnClose.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);

    // Close when tapping any link inside nav on mobile
    var navLinks = side.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 991) {
          closeDrawer();
        }
      });
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && side.classList.contains('drawer-open')) {
        closeDrawer();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDrawer);
  } else {
    initDrawer();
  }
})();

/* ==========================================================================
   ServiceOS AppShell Component Nativo & Web Component <app-shell>
   ========================================================================== */

(function (window) {
  function initAppShellRuntime() {
    var header = document.querySelector(".app-shell-header, .site-header");
    var hamburgerBtn = document.getElementById("hamburger-btn");
    var drawerCloseBtn = document.getElementById("drawer-close-btn");
    var drawer = document.getElementById("mobile-drawer");
    var backdrop = document.getElementById("drawer-backdrop");

    // 1. Efeito de Scroll no Header (Shrink & Backdrop Glass)
    if (header) {
      window.addEventListener("scroll", function() {
        if (window.scrollY > 20) {
          header.setAttribute("data-scroll-active", "true");
        } else {
          header.setAttribute("data-scroll-active", "false");
        }
      }, { passive: true });
    }

    // 2. Controle de Abertura / Fechamento da Gaveta Mobile (Drawer)
    function openDrawer() {
      if (drawer) drawer.setAttribute("data-drawer-state", "open");
      if (backdrop) backdrop.classList.add("active");
    }

    function closeDrawer() {
      if (drawer) drawer.setAttribute("data-drawer-state", "closed");
      if (backdrop) backdrop.classList.remove("active");
    }

    if (hamburgerBtn) hamburgerBtn.addEventListener("click", openDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeDrawer);
    if (backdrop) backdrop.addEventListener("click", closeDrawer);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAppShellRuntime);
  } else {
    initAppShellRuntime();
  }
})(window);

/* ==========================================================================
   ServiceOS AppShell Navigation & Section Manifest Engine
   Alimenta Header, Drawer, Footer e Seções Responsivas a partir de landing.manifest.json
   ========================================================================== */

(function (window) {
  var manifestData = null;

  function loadLandingManifest(callback) {
    fetch("src/manifest/landing.manifest.json")
      .then(function(res) { return res.json(); })
      .then(function(data) {
        manifestData = data;
        if (callback) callback(data);
      })
      .catch(function(err) {
        console.warn("ServiceOS Manifest Engine: usando fallback de navegacao", err);
      });
  }

  function renderAppShellFromManifest(data) {
    if (!data || !data.sections) return;

    // Filtra apenas as seções que declaram showInNav: true
    var navSections = data.sections.filter(function(sec) {
      return sec.showInNav !== false;
    });

    // 1. RENDERIZA HEADER DESKTOP SLOT
    var desktopNavSlot = document.querySelector(".desktop-nav");
    if (desktopNavSlot) {
      desktopNavSlot.innerHTML = navSections.map(function(item) {
        return '<ui-button appearance="transparent" size="sm" key="' + item.navKey + '" href="#' + item.id + '" class="nav-link-anchor"></ui-button>';
      }).join("");
    }

    // 2. RENDERIZA MOBILE DRAWER NAV SLOT
    var drawerNavSlot = document.querySelector(".drawer-nav");
    if (drawerNavSlot) {
      drawerNavSlot.innerHTML = navSections.map(function(item) {
        return '<ui-button appearance="transparent" size="md" key="' + item.navKey + '" href="#' + item.id + '" icon="' + item.navIcon + '" class="drawer-link nav-link-anchor"></ui-button>';
      }).join("");
    }

    // 3. RENDERIZA FOOTER NAV SLOT
    var footerNavSlot = document.querySelector(".footer-links-slot");
    if (footerNavSlot) {
      footerNavSlot.innerHTML = navSections.map(function(item) {
        return '<li><ui-button appearance="transparent" size="sm" key="' + item.navKey + '" href="#' + item.id + '" class="nav-link-anchor"></ui-button></li>';
      }).join("");
    }

    // 4. APLICA AS RECEITAS RESPONSIVAS NAS SEÇÕES DO DOM
    data.sections.forEach(function(sec) {
      var sectionEl = document.getElementById(sec.id);
      if (sectionEl) {
        if (sec.layoutRecipe) sectionEl.setAttribute("data-recipe-section", sec.layoutRecipe);
        if (sec.surfaceRecipe) sectionEl.setAttribute("data-recipe-surface", sec.surfaceRecipe);
        
        var container = sectionEl.querySelector(".container");
        if (container && sec.responsive && sec.responsive.desktop) {
          container.setAttribute("data-recipe-grid", sec.responsive.desktop.cols);
        }
      }
    });

    // Re-inicia os botões e textos i18n
    if (window.renderAllUiButtons) window.renderAllUiButtons();

    // Ativa o motor de Smooth Scroll (Rolagem Suave)
    attachSmoothScrollEngine();
  }

  function attachSmoothScrollEngine() {
    document.querySelectorAll(".nav-link-anchor, a[href^='#']").forEach(function(anchor) {
      anchor.addEventListener("click", function(e) {
        var href = this.getAttribute("href") || (this.querySelector("a") && this.querySelector("a").getAttribute("href"));
        if (href && href.startsWith("#") && href.length > 1) {
          var targetSection = document.querySelector(href);
          if (targetSection) {
            e.preventDefault();
            
            var drawer = document.getElementById("mobile-drawer");
            var backdrop = document.getElementById("drawer-backdrop");
            if (drawer) drawer.setAttribute("data-drawer-state", "closed");
            if (backdrop) backdrop.classList.remove("active");

            var headerOffset = 80;
            var elementPosition = targetSection.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }
      });
    });
  }

  window.AppShellManifestEngine = {
    load: loadLandingManifest,
    render: renderAppShellFromManifest
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      loadLandingManifest(renderAppShellFromManifest);
    });
  } else {
    loadLandingManifest(renderAppShellFromManifest);
  }
})(window);

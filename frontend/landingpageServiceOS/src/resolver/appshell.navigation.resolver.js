/* ==========================================================================
   ServiceOS AppShell Navigation & Section Manifest Engine
   ========================================================================== */

(function (window) {
  var defaultLandingManifest = {
    pageId: "ana-nascimento-landing",
    appshell: {
      headerLayout: "attached",
      headerHeightRecipe: "fluid-header-height",
      headerSurfaceRecipe: "solid-navy",
      headerNavigationMode: "links"
    },
    assets: {
      brandLogo: "assets/ana-logo-dark.png",
      heroBg: "assets/hero-bg.jpg",
      aboutBg: "assets/about-bg.jpg",
      anaHeroPhoto: "assets/ana-hero.png",
      officePhoto: "assets/ana-office.jpg"
    },
    navigation: [
      { id: "inicio", key: "header.nav.inicio", icon: "home" },
      { id: "area", key: "header.nav.area", icon: "briefcase" },
      { id: "sobre", key: "header.nav.sobre", icon: "user" },
      { id: "depoimentos", key: "header.nav.depoimentos", icon: "message-square" },
      { id: "faq", key: "header.nav.faq", icon: "help-circle" },
      { id: "contato", key: "header.nav.contato", icon: "phone" }
    ],
    sections: [
      {
        id: "inicio",
        layout: { type: "hero-peek", viewportHeightRatio: "90vh" },
        background: {
          type: "image",
          imageToken: "heroBg",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          overlay: { enabled: true, colorStartToken: "overlay-start", colorEndToken: "overlay-end" }
        },
        responsive: { desktop: { totalMasterCols: 20, outerOffset: 1.5, usefulContentCols: 17 } }
      },
      {
        id: "area",
        layout: { type: "default", paddingTopToken: "spacing-3xl", paddingBottomToken: "spacing-3xl" },
        background: { type: "solid", colorToken: "navy" },
        responsive: { desktop: { totalMasterCols: 20, outerOffset: 1.5, usefulContentCols: 17 } }
      },
      {
        id: "sobre",
        layout: { type: "default", paddingTopToken: "spacing-3xl", paddingBottomToken: "spacing-3xl" },
        background: { type: "image", imageToken: "aboutBg", backgroundPosition: "center", backgroundAttachment: "fixed", overlay: { enabled: true, colorStartToken: "overlay-start", colorEndToken: "overlay-end" } },
        responsive: { desktop: { totalMasterCols: 20, outerOffset: 1.5, usefulContentCols: 17 } }
      },
      {
        id: "depoimentos",
        layout: { type: "standard-section", paddingY: "100px" },
        background: { type: "solid", colorToken: "navy" },
        header: { titleKey: "depoimentos.title", leadKey: "depoimentos.lead" },
        testimonials: [
          { author: "Mariana Souza", quote: "Excelente atendimento e condução impecável do meu caso trabalhista. Dra. Ana foi extremamente estratégica.", tag: "Direito do Trabalho" },
          { author: "Roberto Mendes", quote: "Consegui regularizar meu imóvel e fazer o planejamento da minha família com total segurança jurídica.", tag: "Direito Imobiliário & Patrimonial" },
          { author: "Camila Alencar", quote: "Acolhimento humanizado em um momento muito delicado de partilha de bens. Recomendo de olhos fechados.", tag: "Direito de Família" }
        ]
      },
      {
        id: "atendimento",
        layout: { type: "default", paddingTopToken: "spacing-3xl", paddingBottomToken: "spacing-3xl" },
        background: { type: "solid", colorToken: "white" },
        responsive: { desktop: { totalMasterCols: 20, outerOffset: 1.5, usefulContentCols: 17 } }
      },
      {
        id: "faq",
        layout: { type: "default", paddingTopToken: "spacing-3xl", paddingBottomToken: "spacing-3xl" },
        background: {
          type: "image",
          imageToken: "aboutBg",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          overlay: { enabled: true, colorStartToken: "overlay-start", colorEndToken: "overlay-end" }
        },
        responsive: { desktop: { totalMasterCols: 20, outerOffset: 3.0, usefulContentCols: 14 } }
      },
      {
        id: "contato",
        layout: { type: "default", paddingTopToken: "spacing-3xl", paddingBottomToken: "spacing-3xl" },
        background: { type: "solid", colorToken: "white" },
        responsive: { desktop: { totalMasterCols: 20, outerOffset: 1.5, usefulContentCols: 17 } }
      }
    ]
  };

  function loadLandingManifest(callback) {
    fetch("src/manifest/landing.manifest.json")
      .then(function(res) { return res.json(); })
      .then(function(data) {
        manifestData = data;
        if (callback) callback(data);
      })
      .catch(function(err) {
        console.warn("ServiceOS Manifest Engine: aplicando manifesto de fallback síncrono", err);
        manifestData = defaultLandingManifest;
        if (callback) callback(defaultLandingManifest);
      });
  }

  function renderAppShellFromManifest(data) {
    if (!data) return;

    var assets = data.assets || {};
    var navList = data.navigation || [];
    var appshellConfig = data.appshell || {};

    // 1. CONFIGURA O APPSHELL HEADER A PARTIR DO MANIFESTO (Zero Hardcoded!)
    var headerEl = document.getElementById("main-header") || document.querySelector(".site-header");
    if (headerEl) {
      if (appshellConfig.headerLayout) headerEl.setAttribute("data-header-layout", appshellConfig.headerLayout);
      if (appshellConfig.headerSurfaceRecipe) {
        headerEl.setAttribute("data-header-surface", appshellConfig.headerSurfaceRecipe);
        headerEl.setAttribute("data-recipe-background-solid", appshellConfig.headerSurfaceRecipe.replace("solid-", ""));
      }
    }

    // 2. RENDERIZA HEADER DESKTOP SLOT A PARTIR DO BLOCO NAVIGATION ISOLADO
    var desktopNavSlot = document.querySelector(".desktop-nav");
    if (desktopNavSlot && navList.length > 0) {
      desktopNavSlot.innerHTML = navList.map(function(item) {
        return '<ui-button appearance="transparent" size="sm" key="' + item.key + '" href="#' + item.id + '" class="nav-link-anchor"></ui-button>';
      }).join("");
    }

    // 3. RENDERIZA MOBILE DRAWER NAV SLOT
    var drawerNavSlot = document.querySelector(".drawer-nav");
    if (drawerNavSlot && navList.length > 0) {
      drawerNavSlot.innerHTML = navList.map(function(item) {
        return '<ui-button appearance="transparent" size="md" key="' + item.key + '" href="#' + item.id + '" icon="' + item.icon + '" class="drawer-link nav-link-anchor"></ui-button>';
      }).join("");
    }

    // 4. RENDERIZA FOOTER NAV SLOT
    var footerNavSlot = document.querySelector(".footer-links-slot");
    if (footerNavSlot && navList.length > 0) {
      footerNavSlot.innerHTML = navList.map(function(item) {
        return '<li><ui-button appearance="transparent" size="sm" key="' + item.key + '" href="#' + item.id + '" class="nav-link-anchor"></ui-button></li>';
      }).join("");
    }

    // 5. APLICA AS REGRAS DE LAYOUT (HEIGHT/SPACING) E BACKGROUND DAS SEÇÕES DO DOM
    if (data.sections) {
      data.sections.forEach(function(sec) {
        var sectionEl = document.getElementById(sec.id);
        
        // MONTAGEM AUTOMÁTICA DE SEÇÃO (Se a seção não existir no HTML estático, o manifesto a cria!)
        if (!sectionEl) {
          sectionEl = document.createElement("section");
          sectionEl.id = sec.id;
          sectionEl.className = "dynamic-manifest-section reveal";
          sectionEl.style.padding = (sec.layout && sec.layout.paddingY) ? (sec.layout.paddingY + " 0") : "100px 0";
          
          var containerDiv = document.createElement("div");
          containerDiv.className = "container";
          
          var titleDiv = document.createElement("div");
          titleDiv.className = "section-title-center";
          var titleText = document.createElement("ui-text");
          titleText.setAttribute("recipe", "sectionTitle");
          titleText.setAttribute("key", (sec.header && sec.header.titleKey) || (sec.id + ".title"));
          titleDiv.appendChild(titleText);
          
          if (sec.header && sec.header.leadKey) {
            var subText = document.createElement("ui-text");
            subText.setAttribute("recipe", "bodyText");
            subText.setAttribute("key", sec.header.leadKey);
            subText.className = "difference-lead";
            titleDiv.appendChild(subText);
          }
          containerDiv.appendChild(titleDiv);
          
          if (sec.testimonials) {
            var gridDiv = document.createElement("div");
            gridDiv.className = "areas-grid";
            sec.testimonials.forEach(function(t) {
              var cardDiv = document.createElement("div");
              cardDiv.className = "area-card";
              cardDiv.innerHTML = '<div class="area-icon"><i data-lucide="star"></i></div>' +
                '<h3 style="margin-bottom: 12px;">' + t.author + '</h3>' +
                '<p style="font-size: 15px; line-height: 1.6; margin-bottom: 24px; color: rgba(255,255,255,0.92); font-style: italic;">"' + t.quote + '"</p>' +
                '<span style="color: var(--theme--color-gold); font-size: 12.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">' + t.tag + '</span>';
              gridDiv.appendChild(cardDiv);
            });
            containerDiv.appendChild(gridDiv);
          }
          
          sectionEl.appendChild(containerDiv);
          
          var anchorTarget = document.getElementById("faq") || document.getElementById("contato") || document.querySelector(".site-footer");
          if (anchorTarget && anchorTarget.parentNode) {
            anchorTarget.parentNode.insertBefore(sectionEl, anchorTarget);
          } else {
            document.body.appendChild(sectionEl);
          }
        }

        if (sectionEl) {
          
          // RESOLUÇÃO DO PILAR 1: LAYOUT & ALTURA UNIVERSAL
          if (sec.layout) {
            if (sec.layout.type === "hero-peek" || sec.layout.type === "hero") {
              sectionEl.setAttribute("data-recipe-section", "hero-peek");
            } else if (sec.layout.paddingTopToken) {
              sectionEl.setAttribute("data-recipe-section", sec.layout.type || "default");
            }
          }
          
          // RESOLUÇÃO DO PILAR 3: BACKGROUNDS TOKENIZADOS
          if (sec.background) {
            if (sec.background.type === "image") {
              var imageUrl = assets[sec.background.imageToken] || sec.background.imageUrl || "";
              var startToken = sec.background.overlay && sec.background.overlay.colorStartToken 
                ? "var(--theme--" + sec.background.overlay.colorStartToken + ")" 
                : "var(--theme--overlay-start)";
              var endToken = sec.background.overlay && sec.background.overlay.colorEndToken 
                ? "var(--theme--" + sec.background.overlay.colorEndToken + ")" 
                : "var(--theme--overlay-end)";
              
              sectionEl.style.backgroundImage = 
                "linear-gradient(90deg, " + startToken + ", " + endToken + "), url('" + imageUrl + "')";
              sectionEl.style.backgroundPosition = sec.background.backgroundPosition || "center";
              sectionEl.style.backgroundSize = "cover";
              sectionEl.style.backgroundAttachment = sec.background.backgroundAttachment || "scroll";
            } else if (sec.background.type === "solid") {
              sectionEl.style.backgroundColor = "var(--theme--color-" + (sec.background.colorToken || "navy") + ")";
            } else if (sec.background.type === "glass") {
              sectionEl.setAttribute("data-recipe-background-glass", sec.background.glassToken || "dark");
            }
          }

          // RESOLUÇÃO DE PERSON IMAGE DECLARATIVA (Zero Hardcode / 100% Manifesto)
          if (sec.personImage) {
            var personImg = sectionEl.querySelector(".hero-person-img");
            if (personImg) {
              var pSrc = assets[sec.personImage.assetKey] || sec.personImage.src;
              if (pSrc) personImg.src = pSrc;
              if (sec.personImage.altText) personImg.alt = sec.personImage.altText;
              personImg.setAttribute("data-size", sec.personImage.size || "lg");

              if (sec.personImage.customWidth) {
                personImg.style.setProperty("--hero-person-width", sec.personImage.customWidth);
              }
              if (sec.personImage.customMaxHeight) {
                personImg.style.setProperty("--hero-person-max-height", sec.personImage.customMaxHeight);
              }
            }
          }

          var container = sectionEl.querySelector(".container");
          if (container && sec.responsive && sec.responsive.desktop) {
            container.setAttribute("data-recipe-grid", "hero-17");
          }
        }
      });
    }

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

            var elementPosition = targetSection.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - 70;

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

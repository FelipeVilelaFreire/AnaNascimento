/* ==========================================================================
   Foundation UI Primitive: Button - ServiceOS Native Web Component
   Injeta a receita de superficie data-recipe-surface-* para que o CSS de
   Semi-Composed emita as variaveis --semicomposed--surface--* perfeitamente
   ========================================================================== */

function renderAllUiButtons() {
  var buttons = document.querySelectorAll("ui-button");
  buttons.forEach(function(btn) {
    var size = btn.getAttribute("size") || "md";
    var appearance = btn.getAttribute("appearance") || btn.getAttribute("tone") || "solid";
    var key = btn.getAttribute("key");
    var icon = btn.getAttribute("icon");
    var href = btn.getAttribute("href");

    btn.setAttribute("data-size", size);
    btn.setAttribute("data-appearance", appearance);

    // Conecta o atributo data-recipe-surface-* do semi-composed
    if (appearance === "solid") {
      btn.setAttribute("data-recipe-surface-solid", size);
    } else if (appearance === "glass") {
      btn.setAttribute("data-recipe-surface-glass", size);
    } else if (appearance === "soft") {
      btn.setAttribute("data-recipe-surface-soft", size);
    } else if (appearance === "transparent") {
      btn.setAttribute("data-recipe-surface-transparent", size);
    } else if (appearance === "outline") {
      btn.setAttribute("data-recipe-surface-outline", size);
    }

    var labelText = key && window.LandingResolverRuntime ? window.LandingResolverRuntime.getStrings(key) : (btn.getAttribute("label") || btn.textContent.trim());
    var iconHTML = icon ? '<i data-lucide="' + icon + '"></i> ' : '';

    btn.innerHTML = iconHTML + '<span>' + labelText + '</span>';

    if (href) {
      btn.style.cursor = "pointer";
      btn.onclick = function(e) {
        if (href.startsWith("#")) {
          var target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        } else {
          window.open(href, "_blank");
        }
      };
    }
  });

  if (window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderAllUiButtons);
} else {
  renderAllUiButtons();
}

if (typeof customElements !== "undefined" && !customElements.get("ui-button")) {
  customElements.define("ui-button", class extends HTMLElement {
    connectedCallback() {
      renderAllUiButtons();
    }
  });
}

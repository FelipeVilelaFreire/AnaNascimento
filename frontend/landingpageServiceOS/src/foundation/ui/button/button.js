/* Web Component Nativo ui-button com Motor de Direct Token Props (Zero Fricção) */
function renderAllUiButtons() {
  var buttonElements = document.querySelectorAll("ui-button");
  buttonElements.forEach(function(el) {
    var appearance = el.getAttribute("appearance") || "solid";
    var size = el.getAttribute("size") || "md";
    var key = el.getAttribute("key");
    var iconName = el.getAttribute("icon");
    var iconPos = el.getAttribute("icon-pos") || "right"; // "left" ou "right" (padrão)
    var href = el.getAttribute("href");

    el.setAttribute("data-recipe-surface-" + appearance, size);
    el.setAttribute("data-size", size);

    // Motor de Direct Token Props: resolve qualquer token do Theme (color, bg, radius, shadow, border)
    var color = el.getAttribute("color");
    var bg = el.getAttribute("bg");
    var radius = el.getAttribute("radius");
    var shadow = el.getAttribute("shadow");
    var border = el.getAttribute("border");

    if (color) {
      el.style.setProperty("--semicomposed--surface--color", "var(--theme--color-" + color + ", " + color + ")");
    }
    if (bg) {
      el.style.setProperty("--semicomposed--surface--bg", "var(--theme--color-" + bg + ", var(--theme--" + bg + ", " + bg + "))");
    }
    if (radius) {
      el.style.setProperty("--semicomposed--surface--radius", "var(--theme--radius-" + radius + ", " + radius + ")");
    }
    if (shadow) {
      el.style.setProperty("--semicomposed--outer-elevation--button", "var(--theme--elevation-" + shadow + ", " + shadow + ")");
    }
    if (border) {
      el.style.setProperty("--semicomposed--surface--border", "var(--theme--borders-" + border + ", " + border + ")");
    }

    var labelText = key && window.LandingResolverRuntime ? window.LandingResolverRuntime.getStrings(key) : el.textContent.trim();

    var iconHtml = "";
    if (iconName) {
      iconHtml = '<span class="ui-button-icon"><i data-lucide="' + iconName + '"></i></span>';
    }

    var contentHtml = "";
    if (iconPos === "left" && iconHtml) {
      contentHtml = iconHtml + '<span>' + labelText + '</span>';
    } else {
      contentHtml = '<span>' + labelText + '</span>' + iconHtml;
    }

    if (href) {
      var targetAttr = href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : '';
      el.innerHTML = '<a href="' + href + '" class="ui-button-link"' + targetAttr + '>' + contentHtml + '</a>';
    } else {
      el.innerHTML = contentHtml;
    }
  });

  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
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

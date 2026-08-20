/* Web Component Nativo ui-icon com Motor de Direct Token Props (Zero Fricção) */
function renderAllUiIcons() {
  var iconElements = document.querySelectorAll("ui-icon");
  iconElements.forEach(function(el) {
    var recipe = el.getAttribute("recipe");
    var name = el.getAttribute("name");

    if (recipe) {
      el.setAttribute("data-recipe-icon", recipe);
    }

    // Motor de Direct Token Props: resolve qualquer token do Theme (color, size, opacity)
    var color = el.getAttribute("color");
    var size = el.getAttribute("size");
    var opacity = el.getAttribute("opacity");

    if (color) {
      el.style.setProperty("color", "var(--theme--color-" + color + ", " + color + ")");
    }
    if (size) {
      el.style.setProperty("width", "var(--theme--sizing-icon-" + size + ", " + size + ")");
      el.style.setProperty("height", "var(--theme--sizing-icon-" + size + ", " + size + ")");
    }
    if (opacity) {
      el.style.setProperty("opacity", opacity);
    }

    if (name) {
      el.innerHTML = '<i data-lucide="' + name + '"></i>';
    }
  });

  if (window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderAllUiIcons);
} else {
  renderAllUiIcons();
}

if (typeof customElements !== "undefined" && !customElements.get("ui-icon")) {
  customElements.define("ui-icon", class extends HTMLElement {
    connectedCallback() {
      renderAllUiIcons();
    }
  });
}

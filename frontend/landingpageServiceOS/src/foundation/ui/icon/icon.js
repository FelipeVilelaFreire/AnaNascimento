/* Web Component Nativo ui-icon */
function renderAllUiIcons() {
  var iconElements = document.querySelectorAll("ui-icon");
  iconElements.forEach(function(el) {
    var recipe = el.getAttribute("recipe");
    var name = el.getAttribute("name");

    if (recipe) {
      el.setAttribute("data-recipe-icon", recipe);
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

/* Web Component Nativo ui-text com Motor de Direct Token Props (Zero Fricção) */
function renderAllUiTexts() {
  var textElements = document.querySelectorAll("ui-text");
  textElements.forEach(function(el) {
    var recipe = el.getAttribute("recipe");
    var key = el.getAttribute("key");
    
    if (recipe) {
      el.setAttribute("data-recipe-text", recipe);
    }

    // Motor de Direct Token Props: resolve qualquer token do Theme (color, size, weight, opacity)
    var color = el.getAttribute("color");
    var size = el.getAttribute("size");
    var weight = el.getAttribute("weight");
    var opacity = el.getAttribute("opacity");

    if (color) {
      el.style.setProperty("--semicomposed--text--color", "var(--theme--color-" + color + ", " + color + ")");
    }
    if (size) {
      el.style.setProperty("--semicomposed--text--font-size", "var(--theme--typography-sizes-" + size + ", " + size + ")");
    }
    if (weight) {
      el.style.setProperty("font-weight", "var(--theme--typography-weights-" + weight + ", " + weight + ")");
    }
    if (opacity) {
      el.style.setProperty("opacity", opacity);
    }

    var textContent = key && window.LandingResolverRuntime ? window.LandingResolverRuntime.getStrings(key) : el.textContent.trim();
    if (textContent) {
      el.innerHTML = textContent;
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderAllUiTexts);
} else {
  renderAllUiTexts();
}

if (typeof customElements !== "undefined" && !customElements.get("ui-text")) {
  customElements.define("ui-text", class extends HTMLElement {
    connectedCallback() {
      renderAllUiTexts();
    }
  });
}

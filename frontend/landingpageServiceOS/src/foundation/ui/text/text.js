/* Web Component Nativo ui-text */
function renderAllUiTexts() {
  var textElements = document.querySelectorAll("ui-text");
  textElements.forEach(function(el) {
    var recipe = el.getAttribute("recipe");
    var key = el.getAttribute("key");

    if (recipe) {
      el.setAttribute("data-recipe-text", recipe);
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

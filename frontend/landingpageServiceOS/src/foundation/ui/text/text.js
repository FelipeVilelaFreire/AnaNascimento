/* ==========================================================================
   ServiceOS Foundation UI Component Runtime: Text (<ui-text>)
   ========================================================================== */

(function (window) {
  function renderAllUiTexts() {
    var textElements = document.querySelectorAll("ui-text");
    textElements.forEach(function (el) {
      var key = el.getAttribute("key");
      var recipe = el.getAttribute("recipe");
      var color = el.getAttribute("color");
      var inline = el.getAttribute("inline");

      if (recipe) {
        el.setAttribute("data-recipe-text", recipe);
      }

      if (color) {
        el.style.setProperty("--semicomposed--text--color", "var(--theme--color-" + color + ", " + color + ")");
        el.style.color = "var(--theme--color-" + color + ", " + color + ")";
      }

      if (inline === "true") {
        el.style.display = "inline";
        el.style.marginBottom = "0";
      }

      var textContent = "";
      if (key && window.LandingResolverRuntime) {
        textContent = window.LandingResolverRuntime.getStrings(key);
      } else {
        textContent = el.textContent.trim();
      }

      if (textContent) {
        el.textContent = textContent;
      }
    });
  }

  window.renderAllUiTexts = renderAllUiTexts;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderAllUiTexts);
  } else {
    renderAllUiTexts();
  }
})(window);

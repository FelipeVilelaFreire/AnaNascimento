import { LandingResolver } from "../../../resolver/landing.resolver.js";

// Registra os Web Components para GridFrame, GridCell e HeaderCell
if (!customElements.get("ui-grid-frame")) {
  customElements.define("ui-grid-frame", class extends HTMLElement {
    connectedCallback() {
      const size = this.getAttribute("size") || "md";
      this.setAttribute("data-size", size);
      this.classList.add("ui-grid-frame");
    }
  });
}

if (!customElements.get("ui-grid-cell")) {
  customElements.define("ui-grid-cell", class extends HTMLElement {
    connectedCallback() {
      const size = this.getAttribute("size") || "md";
      this.setAttribute("data-size", size);
      this.classList.add("ui-grid-cell");
    }
  });
}

if (!customElements.get("ui-grid-header-cell")) {
  customElements.define("ui-grid-header-cell", class extends HTMLElement {
    connectedCallback() {
      const size = this.getAttribute("size") || "md";
      this.setAttribute("data-size", size);
      this.classList.add("ui-grid-header-cell");
    }
  });
}

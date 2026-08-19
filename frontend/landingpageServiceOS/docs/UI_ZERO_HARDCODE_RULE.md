# Regra Canônica da Camada UI: React & HTML (Zero Hardcode Supremacy)

Este documento registra a **Lei Suprema da Camada de UI** para todas as aplicações do workspace (React e HTML).

---

## 🏛️ A Regra Sagrada da UI

> **"Tanto em React (`.tsx`) quanto em HTML (`.js` / Web Components): ZERO HARDCODE."**

- **Tudo vive no `ui.manifest.js`**: Cores, gaps, alturas, sombras e tipografia pertencem exclusivamente às chaves conhecidas do `theme` e `semi-composed`.
- **O Componente é apenas a Casca**: O componente de UI (seja `<Button />` em React ou `<ui-button>` em HTML) não possui nenhuma propriedade de CSS solta ou fixa.
- **O Resolver faz a Física**: O componente apenas consulta o `LandingResolver` para obter o preset do tamanho (`size="2xs"` a `size="3xl"`) e aplicar na renderização.

---

## 🔄 Paridade Exata de Implementação (React vs HTML)

### 1. No React Web (`platform/foundation/design-system/ui/web/src/Button/Button.tsx`)
```tsx
import { resolveButtonMetrics } from "@serviceos/ui-core";

export function Button({ size = "md", tone = "primary", children }: ButtonProps) {
  const metrics = resolveButtonMetrics(ui, buttonMaterial);
  return (
    <button data-size={size} data-tone={tone} className={styles.button}>
      {children}
    </button>
  );
}

// Uso na Aplicação React:
<Button size="2xl" tone="primary">{strings.hero.cta}</Button>
```

### 2. No HTML / Web Components (`platform/foundation/design-system/ui/html/src/Button/Button.js`)
```javascript
import { LandingResolver } from "../../resolver/landing.resolver.js";

customElements.define("ui-button", class extends HTMLElement {
  connectedCallback() {
    const size = this.getAttribute("size") || "md";
    const tone = this.getAttribute("tone") || "primary";
    const preset = LandingResolver.getUIPreset("buttons", size);

    this.classList.add("ui-button");
    this.setAttribute("data-size", size);
    this.setAttribute("data-tone", tone);
  }
});

// Uso na Aplicação HTML Puro:
<ui-button size="2xl" tone="primary">FALE COM ADVOGADA</ui-button>
```

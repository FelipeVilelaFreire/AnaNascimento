# Arquitetura e Contrato Canônico da UI Primitive: Button (ServiceOS Standard)

Este documento registra a implementação canônica do **Primitive Button** no ServiceOS, demonstrando como a UI é 100% tokenizada, declarativa, i18n-first e zero-hardcode.

---

## 🏛️ O Fluxo da Verdade (Manifest -> Semi-Composed -> Primitive UI)

```text
1. MANIFEST & TOKENS SUPREMOS
   ├── theme.manifest.js         (--color-gold, --color-navy, --spacing-*, --radius-*)
   ├── semiComposed.manifest.js  (Receitas: surface.solid, surface.glass, surface.transparent)
   └── ui.manifest.js            (Escalas 2XS -> 3XL por chaves conhecidas)
   
        ▼ (Consumido pelo Maestro Resolver)

2. RESOLVER & LOCALES (i18n-First)
   ├── landing.resolver.js       (getRecipe(), getStrings(), getUIPreset())
   └── pt-BR.js                  (Hero, Header, Navigation, Cards, Footer, Process)

        ▼ (Passagem de Variáveis)

3. PRIMITIVE UI (HTML Web Component)
   ├── src/foundation/ui/button.css (Túneis de Passagem de Variáveis)
   └── src/foundation/ui/button.js  (Web Component <ui-button>)
```

---

## 🔌 Os 3 Túneis de Passagem de Variáveis no `button.css`

O CSS do botão **não possui cores ou tamanhos hardcoded**. Ele atua como uma **ponte de passagem** para escutar as variáveis injetadas pelo Manifest:

```css
ui-button {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  box-sizing: border-box;

  /* 1. TÚNEL DE TRANSIÇÃO & MOTION (Do Manifest) */
  transition: all var(--motion-fast, 180ms ease);

  /* 2. TÚNEL DE ELEVAÇÃO & SOMBRA (Do Manifest) */
  box-shadow: var(--ui-outer-elevation, var(--elevation-none, none));

  /* 3. TÚNEL DE SUPERFÍCIE & BORDA (Do Manifest) */
  background-color: var(--ui-surface-bg, transparent);
  color: var(--ui-surface-color, inherit);
  border: var(--ui-surface-border, none);
  border-radius: var(--ui-surface-radius, var(--radius-2xs));
}
```

---

## 💻 Exemplo de Declaração no HTML (Zero Hardcode & i18n-First)

```html
<!-- Botão Principal de CTA (Hero) -->
<ui-button size="2xl" appearance="solid" key="hero.cta" icon="arrow-up-right" href="https://..."></ui-button>

<!-- Botão Glass de Superfície (Header) -->
<ui-button size="xs" appearance="glass" key="header.themeButtonText" icon="palette" id="theme-modal-btn"></ui-button>

<!-- Link de Navegação Transparente (Menu Header & Footer) -->
<ui-button appearance="transparent" size="sm" key="header.nav.inicio" href="#inicio"></ui-button>
```

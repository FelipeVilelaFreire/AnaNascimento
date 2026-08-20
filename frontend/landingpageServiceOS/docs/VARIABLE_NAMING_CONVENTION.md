# Convenção de Nomenclatura Explícita das Variáveis CSS do ServiceOS

Este documento estabelece o padrão canônico de nomenclatura para variáveis CSS no ServiceOS, tornando a origem e o módulo de cada token imediatamente identificáveis no código.

---

## 🏛️ A Gramática dos Namespaces (`--[camada]--[módulo]--[propriedade]`)

```text
1. THEME TOKENS (Brutos)
   └── --theme--[categoria]--[token]
       Exemplos:
       - --theme--color-gold
       - --theme--typography-sizes-4xl
       - --theme--radius-sm
       - --theme--motion-fast

2. SEMI-COMPOSED RECIPES (Receitas Compostas)
   └── --semicomposed--[módulo]--[propriedade]
       Exemplos:
       - --semicomposed--surface--bg
       - --semicomposed--surface--border
       - --semicomposed--motion--button
       - --semicomposed--outer-elevation--button
       - --semicomposed--state-layer--hover
```

---

## 💻 Exemplo de Consumo no `button.css`

```css
ui-button {
  display: inline-flex !important;
  font-family: var(--theme--font-body);

  /* Transição vem da receita do módulo motion */
  transition: var(--semicomposed--motion--button);

  /* Sombra vem da receita do módulo outer-elevation */
  box-shadow: var(--semicomposed--outer-elevation--button);

  /* Superfície e cor vêm da receita do módulo surface */
  background-color: var(--semicomposed--surface--bg);
  color: var(--semicomposed--surface--color);
  border: var(--semicomposed--surface--border);
}
```

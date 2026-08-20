# Estrutura Canônica de Composição por Chaves Conhecidas do UI Manifest

Este documento registra como **todas as 16 Famílias de UI** e sub-estruturas (como a família `Grid`) são compostas puramente por **chaves conhecidas** de Theme e Semi-Composed.

---

## 🏛️ Exemplo de Composição Canônica no `ui.manifest.js`

### 1. Família `Button` (`2XS -> 3XL`)
```javascript
buttons: {
  "2xs": { height: "2xs", minWidth: "2xs", gap: "2xs", text: "2xs", icon: "2xs", surface: "xs", stateLayer: "xs", motion: "xs" },
  "xs":  { height: "xs",  minWidth: "xs",  gap: "xs",  text: "xs",  icon: "xs",  surface: "xs", stateLayer: "xs", motion: "xs" },
  "sm":  { height: "sm",  minWidth: "sm",  gap: "sm",  text: "sm",  icon: "sm",  surface: "sm", stateLayer: "sm", motion: "sm" },
  "md":  { height: "md",  minWidth: "md",  gap: "md",  text: "md",  icon: "md",  surface: "md", stateLayer: "md", motion: "md" }
}
```

### 2. Família `Grid` (Composta por `GridFrame`, `GridCell`, `HeaderCell`)
```javascript
gridFrame: {
  "2xs": { surface: "xs", padding: "2xs", divider: "horizontalLine", motion: "xs" },
  "xs":  { surface: "xs", padding: "xs",  divider: "horizontalLine", motion: "xs" },
  "sm":  { surface: "sm", padding: "sm",  divider: "horizontalLine", motion: "sm" }
},

gridCell: {
  "2xs": { padding: "2xs", text: "2xs", align: "start" },
  "xs":  { padding: "xs",  text: "xs",  align: "start" }
},

headerCell: {
  "2xs": { padding: "2xs", text: "2xs", stroke: "cardBorder", background: "surface" }
}
```

---

## 📁 Isolamento Físico em Pastas Dedicadas (`src/foundation/ui/`)

- `src/foundation/ui/button.css` & `button.js`
- `src/foundation/ui/grid/grid.css` & `grid.js` (Isolado em subpasta dedicada)

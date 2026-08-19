# Arquitetura Suprema de Manifests - ServiceOS (landingpageServiceOS)

Este documento registra a consolidação final de **todos os Manifests Supremor** no projeto `landingpageServiceOS`.

---

## 🏛️ Árvore de Manifests Consolidados (`src/manifest/`)

1. **`manifest.config.js`** (Container Supremo da Aplicação):
   - Unifica `theme`, `palettes`, `semiComposed`, `ui`, `appShell`, `sections`, `strings` e `assets`.

2. **`design-system/theme.manifest.js`**:
   - As **15 Capacidades Oficiais do Theme**: `colors`, `layout`, `typography`, `spacing`, `radius`, `sizing`, `opacity`, `elevation`, `glass`, `ambientEffects`, `gradients`, `blur`, `motion`, `layers`, `borders`.
   - Grid Matemático de Colunas (`12` no Desktop, `8` no Tablet, `4` no Mobile) com `colGap` e `gutter`.

3. **`design-system/themePresets.js`**:
   - Catálogo dos **20 Combos Oficiais de Cores** (numerados de 1 a 20) com `key` única, `label`, `description`, `swatches` e `tokens`.

4. **`design-system/semiComposed.manifest.js`**:
   - Os **20 Módulos de Receita de Interface**: `text`, `icon`, `field`, `outerElevation`, `innerElevation`, `stroke`, `motion`, `glass`, `gradient`, `overlay`, `focusRing`, `disabled`, `stateLayer`, `divider`, `surface`, `background`, `ambient`, `dropdownPanel`, `listbox`, `listboxOption`.

5. **`design-system/ui.manifest.js`**:
   - As **16 Famílias Primárias de UI**: `buttons`, `inputs`, `dropdownPickers`, `selects`, `segmentedControls`, `checkboxes`, `toggles`, `cards`, `modals`, `alerts`, `toasts`, `badges`, `progresses`, `grids`, `tables`, `loadings`.
   - Escala oficial de **`2xs` a `3xl`** montada **exclusivamente por chaves conhecidas** de `theme` e `semi-composed` (Zero CSS hardcoded solto!).

---

## ⚙️ O Maestro Resolver (`src/resolver/landing.resolver.js`)

Expõe métodos puros de consulta para a aplicação:
- `LandingResolver.getThemeConfig()`
- `LandingResolver.getThemePalettesCatalog()`
- `LandingResolver.getPalette(key)`
- `LandingResolver.getSemiComposedManifest()`
- `LandingResolver.getRecipe(moduleKey, recipeKey)`
- `LandingResolver.getUIManifest()`
- `LandingResolver.getUIPreset(familyKey, sizeKey)`
- `LandingResolver.resolveColumnSpan(cols, breakpoint)`

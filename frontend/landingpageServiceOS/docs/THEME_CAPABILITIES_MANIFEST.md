# Contrato Completo de Theme (As 15 Capacidades do ServiceOS)

Este documento detalha o contrato completo de **Theme** baseado na arquitetura canônica do ServiceOS.

---

## 🏛️ Conceito Central: Tokens de Perfil vs Tokens Customizados

No ServiceOS, o **Theme** não utiliza escalas rígidas ou engessadas. Cada cliente (como o escritório da Dra. Ana Nascimento) possui o seu próprio **Perfil Visual Declarativo**:

- **Autonomia do Cliente**: Se a Dra. Ana prefere uma estética tradicional e pontuda (corte reto jurídico), a escala de `radius` pode ser declarada com valores muito pequenos (ex: `sm: 2px`, `md: 4px`), enquanto um cliente moderno pode ter `md: 16px`.
- **Valores Personalizados**: O Manifest aceita personalização livre por chave (`2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `full`).

---

## 📐 As 15 Capacidades Oficiais do Theme e Exemplos de Tokens

### 1. 🎨 `colors` (Cores & 20 Temas de Advocacia)
- **`brand`**: `#2E3454` (Azul Marinho Principal)
- **`accent`**: `#F2C455` (Dourado de Destaque)
- **`surface`**: `#13241e` (Verde Esmeralda), `#18191e` (Grafite), etc.

### 2. 📐 `layout` (Grid, Colunas & Spacing Física)
- **`desktop`**: `cols: 12`, `colGap: 24px`, `gutter: 24px`, `maxWidth: 1620px`
- **`tablet`**: `cols: 8`, `colGap: 16px`, `gutter: 20px`
- **`mobile`**: `cols: 4`, `colGap: 12px`, `gutter: 16px`

### 3. ✍️ `typography` (Tipografia & Hierarquia)
- **`fontFamilies`**: `{ heading: '"Marcellus", serif', body: '"Karla", sans-serif' }`
- **`sizes`**: `{ xs: '12px', sm: '14px', md: '16px', lg: '20px', xl: '26px', 2xl: '34px', 3xl: '40px', 4xl: '46px' }`
- **`weights`**: `{ regular: 400, medium: 500, bold: 700 }`
- **`lineHeights`**: `{ tight: 1.15, normal: 1.45, relaxed: 1.6 }`

### 4. 📏 `spacing` (Escala Espacial Interna & Externa)
- **`tokens`**: `{ 3xs: '2px', 2xs: '4px', xs: '8px', sm: '12px', md: '16px', lg: '24px', xl: '32px', 2xl: '48px', 3xl: '64px', 4xl: '100px' }`

### 5. 🔲 `radius` (Arredondamento de Cantos — Perfil Sobrio/Pontudo da Ana)
- **`tokens`**: `{ none: '0px', 3xs: '1px', 2xs: '2px', xs: '2px', sm: '4px', md: '6px', lg: '8px', xl: '12px', full: '9999px' }`

### 6. 📏 `sizing` (Dimensões de Primitives)
- **`tokens`**: `{ buttonHeightMd: '44px', buttonHeightLg: '54px', iconSm: '18px', iconMd: '24px', avatarLg: '64px' }`

### 7. 🌫️ `opacity` (Opacidades & Transparências)
- **`tokens`**: `{ disabled: 0.4, hover: 0.9, overlay: 0.96, subtle: 0.12 }`

### 8. 🏔️ `elevation` (Sombras & Profundidade Tridimensional)
- **`tokens`**: `{ flat: 'none', low: '0 2px 8px rgba(0,0,0,0.08)', md: '0 10px 30px rgba(0,0,0,0.18)', floating: '0 20px 40px rgba(0,0,0,0.3)' }`

### 9. 🪟 `glass` (Efeito Glassmorphism)
- **`tokens`**: `{ light: 'rgba(255, 255, 255, 0.1)', dark: 'rgba(0, 0, 0, 0.4)', blur: '8px' }`

### 10. ✨ `ambientEffects` (Iluminação, Glow & Ruído)
- **`tokens`**: `{ glowColor: 'var(--color-gold)', bloomIntensity: '0.15', noiseOpacity: '0.03' }`

### 11. 🌈 `gradients` (Receitas de Gradiente Dinâmico)
- **`tokens`**: `{ heroOverlay: 'linear-gradient(90deg, var(--color-overlay-start), var(--color-overlay-end))' }`

### 12. 🌁 `blur` (Filtros de Desfoque de Fundo)
- **`tokens`**: `{ sm: '4px', md: '8px', lg: '16px', xl: '24px' }`

### 13. 🎬 `motion` (Animações & Easing Curves)
- **`tokens`**: `{ fast: '180ms ease', normal: '300ms ease', slow: '900ms cubic-bezier(0.16, 1, 0.3, 1)' }`

### 14. 📑 `layers` (Z-Index / Camadas)
- **`tokens`**: `{ base: 1, header: 100, drawer: 999, modal: 1000, tooltip: 2000 }`

### 15. 🖼️ `borders` (Linhas & Traços)
- **`tokens`**: `{ thin: '1px solid var(--color-border)', goldDivider: '1.5px solid var(--color-gold)' }`

# Guia Master: Padronização de Seções & Manifesto Declarativo (ServiceOS Standard)

Este documento é a referência canônica para criação, manutenção e evolução de Landing Pages e Seções de Produto no ServiceOS.

---

## 🏛️ Os 4 Pilares Invioláveis

Toda Landing Page é construída sobre 4 pilares desacoplados:

```text
┌────────────────────────────────────────────────────────────────────────┐
│ 1. MANIFESTO DECLARATIVO UNIFICADO (landing.manifest.json)             │
│    - Fonte única de verdade para assets, navegação e seções.           │
│    - Estruturado em 3 blocos isolados: assets, navigation e sections. │
├────────────────────────────────────────────────────────────────────────┤
│ 2. MATRIZ MASTER GLOBAL DE 20 COLUNAS (layout.desktop.cols: 20)        │
│    - Definida exclusivamente no theme.manifest.js.                     │
│    - As seções escolhem apenas quantas colunas úteis preenchem:        │
│      * Seções Amplas (Hero/Sobre): 17 Colunas Úteis (1.5 offset).      │
│      * Seções de Leitura (FAQ)  : 14 Colunas Úteis (3.0 offset).      │
│      * Divisão do Hero          : 10.5 Cols (Texto) vs 6.5 Cols (Foto). │
├────────────────────────────────────────────────────────────────────────┤
│ 3. ATMOSFERA & BACKGROUNDS TOKENIZADOS (semi-composed/background/)     │
│    - Módulo separado para atmosferas de página.                        │
│    - solid.css  : Fundos sólidos lendo var(--theme--color-*).         │
│    - image.css  : Fotos com gradiente de sobreposição lendo tokens.    │
│    - glass.css  : Fundos transparentes de vidro com backdrop blur.     │
├────────────────────────────────────────────────────────────────────────┤
│ 4. UX DE ALTURA & FOLD PEEKING (hero-peek)                             │
│    - Seções Hero usam min-height: calc(90vh - headerOffset).           │
│    - Exibe 90% da Seção 1 e 10% da Seção 2 no rodapé do monitor como  │
│      pista visual de rolagem (Fold Peeking).                           │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 📊 Matriz Canônica De/Para (Tokens Fluidos Portáveis com Fallback Nativo)

Abaixo está o registro oficial da transição dos Tokens do Theme Manifest para o formato portável **`FluidToken`** com ampliação de Gaps e Fallbacks Estáticos:

### 1. Tipografia (`typography.sizes`)
- `"4xl"` : `fluidLength(28, 46)` | Fallback: `46px` (Transita de 28px no mobile/notebook 125% até 46px no 4K)
- `"3xl"` : `fluidLength(28, 40)` | Fallback: `40px` (Transita de 28px até 40px)
- `"2xl"` : `fluidLength(24, 34)` | Fallback: `34px` (Transita de 24px até 34px)
- `"xl"`  : `fluidLength(19, 26)` | Fallback: `26px` (Transita de 19px até 26px)
- `"lg"`  : `fluidLength(16, 20)` | Fallback: `20px` (Transita de 16px até 20px)
- `"md"`  : `fluidLength(14.5, 16.5)` | Fallback: `16.5px` (Transita de 14.5px até 16.5px)

### 2. Espaçamentos & Paddings de Seção (`spacing`)
- `"3xl"` : `fluidLength(40, 100)` | Fallback: `100px` (Transita dinamicamente de 40px no notebook 125% até 100px no 4K)
- `"2xl"` : `fluidLength(28, 60)`  | Fallback: `60px` (Transita de 28px até 60px)
- `"xl"`  : `fluidLength(18, 32)`  | Fallback: `32px` (Transita de 18px até 32px)
- `"lg"`  : `fluidLength(14, 24)`  | Fallback: `24px` (Transita de 14px até 24px)
- `"md"`  : `fluidLength(10, 16)`  | Fallback: `16px` (Transita de 10px até 16px)

### 3. Componentes & Imagens (`sizing`)
- `buttonHeightLg` : `fluidLength(44, 54)` | Fallback: `54px`
- `buttonHeightMd` : `fluidLength(36, 44)` | Fallback: `44px`
- `buttonHeightSm` : `fluidLength(30, 36)` | Fallback: `36px`
- `avatar2xl`       : `fluidLength(380, 560)`| Fallback: `560px`
- `avatarXl`        : `fluidLength(300, 420)`| Fallback: `420px`

---

## 🔒 Tokens Estruturais Fixos (Zero Oscilação)

- `colors` (Paleta de cores).
- `radius` (Bordas de 4px, 6px, 8px e 9999px).
- `layers` (Z-index de 100, 999, 1000).
- `opacity` (Níveis de transparência).
- `motion` (Curvas de animação).

# Registro Completo de Tokens (As 15 Capacidades no LandingPage Ana Nascimento)

Este documento registra a extração completa de todos os tokens de Design System das **15 capacidades do ServiceOS**, mapeando os valores reais da landing page da Dra. Ana Nascimento.

---

## 🏛️ Tabela Completa de Tokens (`src/manifest/design-system/tokens.js`)

| Capacidade | Chaves Semânticas | Valores Extraídos do Projeto da Dra. Ana |
| :--- | :--- | :--- |
| **1. Colors** | `navy`, `gold`, `white`, `overlayStart`, etc. | `#2E3454`, `#F2C455`, 20 Paletas de Advocacia |
| **2. Layout** | `desktop`, `tablet`, `mobile` | `cols: 12/8/4`, `colGap: 24/16/12px`, `gutter: 24/20/16px` |
| **3. Typography** | `sizes`, `weights`, `lineHeights`, `tracking` | `fontHeading: Marcellus`, `fontBody: Karla`, `sizes: 12.5px -> 46px` |
| **4. Spacing** | `3xs` até `6xl` | `2px`, `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `60px`, `90px`, `110px`, `135px` |
| **5. Radius** | `none`, `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `full` | `Perfil Sóbrio Jurídico`: `2xs: 2px`, `sm: 4px`, `md: 6px`, `xl: 16px`, `full: 9999px` |
| **6. Sizing** | `buttonHeight`, `iconSize`, `avatarSize` | `buttonHeight: 44px/54px`, `avatarLg: 420px (Hero)`, `avatar2xl: 560px (Sobre)` |
| **7. Opacity** | `disabled`, `subtle`, `faint`, `overlay`, `solid` | `subtle: 0.08`, `faint: 0.12`, `overlay: 0.96`, `solid: 1` |
| **8. Elevation** | `flat`, `low`, `md`, `high`, `floating` | `md: 0 10px 30px rgba(0,0,0,0.18)` (PhoneBox), `floating: -5px 0 25px rgba(0,0,0,0.4)` (Drawer) |
| **9. Glass** | `light`, `card`, `dark` | `rgba(255,255,255,0.12)`, `rgba(0,0,0,0.65)` |
| **10. Ambient Effects** | `glowColor`, `bloomIntensity`, `backdropBlur` | `glowColor: var(--color-gold)`, `backdropBlur: blur(4px)` |
| **11. Gradients** | `heroOverlay` | `linear-gradient(90deg, var(--color-overlay-start), var(--color-overlay-end))` |
| **12. Blur** | `sm`, `md`, `lg`, `xl` | `4px`, `8px`, `16px`, `24px` |
| **13. Motion** | `fast`, `normal`, `fluid`, `heroEntrance`, `slow` | `fast: 180ms ease`, `fluid: 450ms cubic-bezier(0.16,1,0.3,1)`, `slow: 1100ms` |
| **14. Layers** | `base`, `phoneBox`, `header`, `drawer`, `modal` | `base: 1`, `phoneBox: 2`, `header: 100`, `drawer: 999`, `modal: 1000` |
| **15. Borders** | `thin`, `light`, `goldDivider`, `activeCard` | `thin: 1px solid #e1e1e1`, `goldDivider: 1.5px solid var(--color-gold)` |

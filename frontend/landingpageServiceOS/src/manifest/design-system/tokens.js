export const defaultTokens = {
  // 1. Colors & 20 Palette Themes
  colors: {
    navy: "#2e3454",
    navyDark: "#222741",
    navyLight: "#373d61",
    gold: "#f2c455",
    goldHover: "#dcb044",
    text: "#2e3454",
    textMuted: "#626884",
    white: "#ffffff",
    border: "#e1e1e1",
    borderLight: "rgba(255, 255, 255, 0.12)",
    overlayStart: "rgba(46, 52, 84, 0.93)",
    overlayEnd: "rgba(46, 52, 84, 0.85)"
  },
  
  // 2. Layout & Physics (Grids & Columns)
  layout: {
    desktop: { cols: 12, colGap: "24px", gutter: "24px", maxWidth: "1620px" },
    tablet: { cols: 8, colGap: "16px", gutter: "20px", maxWidth: "992px" },
    mobile: { cols: 4, colGap: "12px", gutter: "16px", maxWidth: "576px" }
  },

  // 3. Typography (Full Scale)
  typography: {
    fontHeading: '"Marcellus", Georgia, serif',
    fontBody: '"Karla", Arial, sans-serif',
    sizes: {
      "3xs": "11px",
      "2xs": "12.5px",
      xs: "13.5px",
      sm: "15px",
      md: "16px.5",
      lg: "20px",
      xl: "26px",
      "2xl": "34px",
      "3xl": "40px",
      "4xl": "46px"
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeights: {
      none: 1.0,
      tight: 1.15,
      snug: 1.45,
      normal: 1.6,
      relaxed: 1.8
    },
    tracking: {
      tighter: "-0.04em",
      normal: "0",
      wide: "0.02em",
      wider: "0.08em"
    }
  },

  // 4. Spacing (Full Scale 2px -> 135px)
  spacing: {
    "3xs": "2px",
    "2xs": "4px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "60px",
    "4xl": "90px",
    "5xl": "110px",
    "6xl": "135px"
  },

  // 5. Radius (Perfil Sobrio / Pontudo Juridico da Dra. Ana Nascimento)
  radius: {
    none: "0px",
    "3xs": "1px",
    "2xs": "2px", // --radius-sm oficial (2px)
    xs: "2px",
    sm: "4px",   // Cards e Iframe (4px)
    md: "6px",   // Theme Modal (6px a 12px)
    lg: "8px",
    xl: "16px",  // Modal Mobile Bottom Sheet (16px a 20px)
    full: "9999px" // Buttons Pills, Badges e Circulo do Telefone
  },

  // 6. Sizing (Alturas & Dimensões de Componentes)
  sizing: {
    buttonHeightSm: "36px",
    buttonHeightMd: "44px",
    buttonHeightLg: "54px",
    iconSm: "18px",
    iconMd: "24px",
    iconLg: "28px",
    iconXl: "44px",
    avatarSm: "36px",
    avatarMd: "56px",
    avatarLg: "290px", // Foto Ana Hero Mobile (290px a 324px)
    avatarXl: "420px", // Foto Ana Hero Desktop (420px)
    avatar2xl: "560px" // Foto Ana Sobre Nós Desktop (560px)
  },

  // 7. Opacity (Níveis de Transparência)
  opacity: {
    transparent: 0,
    subtle: 0.08,
    faint: 0.12,
    medium: 0.4,
    dimmed: 0.65,
    overlay: 0.96,
    solid: 1
  },

  // 8. Elevation (Sombras & Profundidade)
  elevation: {
    flat: "none",
    low: "0 2px 8px rgba(0,0,0,0.08)",
    md: "0 10px 30px rgba(0, 0, 0, 0.18)", // Phone Box
    high: "0 20px 40px rgba(0, 0, 0, 0.3)", // Modal Box
    floating: "-5px 0 25px rgba(0, 0, 0, 0.4)" // Drawer Mobile
  },

  // 9. Glass (Efeitos Glassmorphism)
  glass: {
    light: "rgba(255, 255, 255, 0.1)",
    card: "rgba(255, 255, 255, 0.12)",
    dark: "rgba(0, 0, 0, 0.65)"
  },

  // 10. Ambient Effects (Iluminação & Glow)
  ambientEffects: {
    glowColor: "var(--color-gold)",
    bloomIntensity: "0.15",
    backdropBlur: "blur(4px)"
  },

  // 11. Gradients (Receitas de Gradiente Dinâmico)
  gradients: {
    heroOverlay: "linear-gradient(90deg, var(--color-overlay-start), var(--color-overlay-end))"
  },

  // 12. Blur (Backdrop Filters)
  blur: {
    none: "0px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px"
  },

  // 13. Motion (Animações & Transições)
  motion: {
    fast: "180ms ease",
    normal: "300ms ease",
    fluid: "450ms cubic-bezier(0.16, 1, 0.3, 1)",
    heroEntrance: "900ms cubic-bezier(0.16, 1, 0.3, 1)",
    slow: "1100ms cubic-bezier(0.22, 1, 0.36, 1)"
  },

  // 14. Layers (Z-Index / Camadas)
  layers: {
    base: 1,
    phoneBox: 2,
    header: 100,
    drawer: 999,
    modal: 1000,
    tooltip: 2000
  },

  // 15. Borders (Linhas, Divisores & Traços)
  borders: {
    none: "none",
    thin: "1px solid var(--color-border)",
    light: "1px solid var(--color-border-light)",
    goldDivider: "1.5px solid var(--color-gold)",
    activeCard: "2px solid var(--color-navy)"
  }
};

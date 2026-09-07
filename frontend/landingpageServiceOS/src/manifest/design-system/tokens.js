export function fluidLength(min, max, options = {}) {
  return Object.freeze({
    kind: "fluid-length",
    min,
    max,
    viewportMin: options.viewportMin ?? 360,
    viewportMax: options.viewportMax ?? 1440,
    outputUnit: options.outputUnit ?? "rem"
  });
}

export const defaultTokens = {
  // 1. Colors & 20 Palette Themes (FIXO)
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
  
  // 2. Layout & Physics
  layout: {
    desktop: { cols: 20, colGap: fluidLength(16, 24), gutter: fluidLength(20, 36), maxWidth: "100%" },
    tablet: { cols: 8, colGap: "16px", gutter: "20px", maxWidth: "992px" },
    mobile: { cols: 4, colGap: "12px", gutter: "16px", maxWidth: "576px" }
  },

  // 3. Typography (ESCALA ELEGANTE PRODUÇÃO)
  typography: {
    fontHeading: '"Marcellus", Georgia, serif',
    fontBody: '"Karla", Arial, sans-serif',
    sizes: {
      "3xs": "11px",
      "2xs": fluidLength(11, 12.5),
      xs: fluidLength(12, 13.5),
      sm: fluidLength(13.5, 15),
      md: fluidLength(14.5, 16.5),
      lg: fluidLength(16, 18),
      xl: fluidLength(20, 24),
      "2xl": fluidLength(24, 30),
      "3xl": fluidLength(28, 36),
      "4xl": fluidLength(30, 42)
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

  // 4. Spacing
  spacing: {
    none: "0px",
    "3xs": fluidLength(2, 4),
    "2xs": fluidLength(4, 6),
    xs: fluidLength(6, 8),
    sm: fluidLength(8, 12),
    md: fluidLength(10, 14),
    lg: fluidLength(14, 20),
    xl: fluidLength(18, 26),
    "2xl": fluidLength(28, 48),
    "3xl": fluidLength(40, 80)
  },

  // 5. Radius
  radius: {
    none: "0px",
    "3xs": "1px",
    "2xs": "2px",
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "16px",
    full: "9999px"
  },

  // 6. Sizing
  sizing: {
    buttonHeightSm: fluidLength(30, 34),
    buttonHeightMd: fluidLength(36, 42),
    buttonHeightLg: fluidLength(44, 50),
    iconSm: "18px",
    iconMd: "24px",
    iconLg: "28px",
    iconXl: "44px",
    avatarSm: "36px",
    avatarMd: "56px",
    avatarLg: fluidLength(420, 520),
    avatarXl: fluidLength(520, 680),
    avatar2xl: fluidLength(640, 780)
  },

  // 7. Opacity
  opacity: {
    transparent: 0,
    subtle: 0.08,
    faint: 0.12,
    medium: 0.4,
    dimmed: 0.65,
    overlay: 0.96,
    opaque: 1
  },

  // 8. Elevation
  elevation: {
    flat: "none",
    low: "0 2px 8px rgba(0,0,0,0.08)",
    md: "0 10px 30px rgba(0, 0, 0, 0.18)",
    high: "0 20px 40px rgba(0, 0, 0, 0.3)",
    floating: "-5px 0 25px rgba(0, 0, 0, 0.4)"
  },

  // 9. Glass
  glass: {
    light: "rgba(255, 255, 255, 0.1)",
    card: "rgba(255, 255, 255, 0.12)",
    dark: "rgba(0, 0, 0, 0.65)"
  },

  // 10. Motion
  motion: {
    fast: "180ms ease",
    normal: "300ms ease",
    fluid: "450ms cubic-bezier(0.16, 1, 0.3, 1)",
    heroEntrance: "900ms cubic-bezier(0.16, 1, 0.3, 1)",
    slow: "1100ms cubic-bezier(0.22, 1, 0.36, 1)"
  }
};

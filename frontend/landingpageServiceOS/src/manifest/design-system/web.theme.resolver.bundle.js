/* ==========================================================================
   ServiceOS Web Theme Resolver Standalone Bundle (Zero CORS / Runs on file:// and http://)
   ========================================================================== */

(function (window) {
  function fluidLength(min, max, options) {
    options = options || {};
    return Object.freeze({
      kind: "fluid-length",
      min: min,
      max: max,
      viewportMin: options.viewportMin || 360,
      viewportMax: options.viewportMax || 1440,
      outputUnit: options.outputUnit || "rem"
    });
  }

  var defaultTokens = {
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
    
    // 2. Layout & Physics
    layout: {
      desktop: { cols: 20, colGap: fluidLength(16, 24), gutter: fluidLength(20, 36), maxWidth: "100%" },
      tablet: { cols: 8, colGap: "16px", gutter: "20px", maxWidth: "992px" },
      mobile: { cols: 4, colGap: "12px", gutter: "16px", maxWidth: "576px" }
    },

    // 3. Typography (ESCALA ELEGANTE PRODUÇÃO COM TESTE 72PX)
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

  function resolveFluidTokenToClamp(fluidToken) {
    var min = fluidToken.min;
    var max = fluidToken.max;
    var viewportMin = fluidToken.viewportMin || 360;
    var viewportMax = fluidToken.viewportMax || 1440;
    var useVh = fluidToken.useVh || false;
    
    var minRem = (min / 16).toFixed(4);
    var maxRem = (max / 16).toFixed(4);
    
    var slope = (max - min) / (viewportMax - viewportMin);
    var yAxisIntersection = -viewportMin * slope + min;
    var yAxisIntersectionRem = (yAxisIntersection / 16).toFixed(4);
    var vValue = (slope * 100).toFixed(4);
    var unit = useVh ? "vh" : "vw";

    return "clamp(" + minRem + "rem, " + yAxisIntersectionRem + "rem + " + vValue + unit + ", " + maxRem + "rem)";
  }

  function resolveValue(val) {
    if (val && typeof val === "object" && val.kind === "fluid-length") {
      return resolveFluidTokenToClamp(val);
    }
    return val;
  }

  function toKebab(str) {
    if (!str) return "";
    return str.includes("xs") || str.includes("xl") || !isNaN(str[0])
      ? str
      : str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }

  function resolveTokensToCssVariables(tokens) {
    tokens = tokens || defaultTokens;
    var cssVars = [];

    // 1. Colors
    if (tokens.colors) {
      for (var key in tokens.colors) {
        var val = tokens.colors[key];
        var kebab = toKebab(key);
        cssVars.push("--theme--color-" + kebab + ": " + val + ";");
        cssVars.push("--theme--colors-" + kebab + ": " + val + ";");
        cssVars.push("--theme-colors-" + kebab + ": " + val + ";");
        cssVars.push("--color-" + kebab + ": " + val + ";");
      }
    }

    // 2. Layout
    if (tokens.layout) {
      if (tokens.layout.desktop) {
        cssVars.push("--theme--layout-desktop-cols: " + tokens.layout.desktop.cols + ";");
        cssVars.push("--theme--layout-desktop-col-gap: " + resolveValue(tokens.layout.desktop.colGap) + ";");
        cssVars.push("--theme--layout-desktop-gutter: " + resolveValue(tokens.layout.desktop.gutter) + ";");
        cssVars.push("--theme--layout-desktop-max-width: " + tokens.layout.desktop.maxWidth + ";");
        cssVars.push("--theme-layout-desktop-cols: " + tokens.layout.desktop.cols + ";");
        cssVars.push("--theme-layout-desktop-col-gap: " + resolveValue(tokens.layout.desktop.colGap) + ";");
        cssVars.push("--theme-layout-desktop-gutter: " + resolveValue(tokens.layout.desktop.gutter) + ";");
      }
      if (tokens.layout.tablet) {
        cssVars.push("--theme--layout-tablet-cols: " + tokens.layout.tablet.cols + ";");
        cssVars.push("--theme--layout-tablet-gutter: " + tokens.layout.tablet.gutter + ";");
      }
      if (tokens.layout.mobile) {
        cssVars.push("--theme--layout-mobile-cols: " + tokens.layout.mobile.cols + ";");
        cssVars.push("--theme--layout-mobile-gutter: " + tokens.layout.mobile.gutter + ";");
      }
    }

    // 3. Typography
    if (tokens.typography) {
      if (tokens.typography.fontHeading) {
        cssVars.push("--theme--font-heading: " + tokens.typography.fontHeading + ";");
        cssVars.push("--theme--typography-font-heading: " + tokens.typography.fontHeading + ";");
        cssVars.push("--font-heading: " + tokens.typography.fontHeading + ";");
      }
      if (tokens.typography.fontBody) {
        cssVars.push("--theme--font-body: " + tokens.typography.fontBody + ";");
        cssVars.push("--theme--typography-font-body: " + tokens.typography.fontBody + ";");
        cssVars.push("--font-body: " + tokens.typography.fontBody + ";");
      }
      if (tokens.typography.sizes) {
        for (var sizeKey in tokens.typography.sizes) {
          var sizeVal = resolveValue(tokens.typography.sizes[sizeKey]);
          cssVars.push("--theme--typography-sizes-" + sizeKey + ": " + sizeVal + ";");
          cssVars.push("--theme-typography-sizes-" + sizeKey + ": " + sizeVal + ";");
        }
      }
      if (tokens.typography.weights) {
        for (var wKey in tokens.typography.weights) {
          cssVars.push("--theme--typography-weights-" + wKey + ": " + tokens.typography.weights[wKey] + ";");
        }
      }
    }

    // 4. Spacing
    if (tokens.spacing) {
      for (var spKey in tokens.spacing) {
        var spVal = resolveValue(tokens.spacing[spKey]);
        cssVars.push("--theme--spacing-" + spKey + ": " + spVal + ";");
        cssVars.push("--theme-spacing-" + spKey + ": " + spVal + ";");
      }
    }

    // 5. Radius
    if (tokens.radius) {
      for (var radKey in tokens.radius) {
        cssVars.push("--theme--radius-" + radKey + ": " + tokens.radius[radKey] + ";");
        cssVars.push("--theme-radius-" + radKey + ": " + tokens.radius[radKey] + ";");
      }
    }

    // 6. Sizing
    if (tokens.sizing) {
      for (var szKey in tokens.sizing) {
        var szVal = resolveValue(tokens.sizing[szKey]);
        var szKebab = toKebab(szKey);
        cssVars.push("--theme--sizing-" + szKey + ": " + szVal + ";");
        cssVars.push("--theme--sizing-" + szKebab + ": " + szVal + ";");
        cssVars.push("--theme-sizing-" + szKebab + ": " + szVal + ";");
      }
    }

    // 7. Opacity
    if (tokens.opacity) {
      for (var opKey in tokens.opacity) {
        cssVars.push("--theme--opacity-" + opKey + ": " + tokens.opacity[opKey] + ";");
      }
    }

    // 8. Elevation
    if (tokens.elevation) {
      for (var elKey in tokens.elevation) {
        cssVars.push("--theme--elevation-" + elKey + ": " + tokens.elevation[elKey] + ";");
        cssVars.push("--theme-elevation-" + elKey + ": " + tokens.elevation[elKey] + ";");
      }
    }

    // 9. Glass
    if (tokens.glass) {
      for (var glKey in tokens.glass) {
        cssVars.push("--theme--glass-" + glKey + ": " + tokens.glass[glKey] + ";");
        cssVars.push("--theme-glass-" + glKey + ": " + tokens.glass[glKey] + ";");
      }
    }

    // 10. Motion
    if (tokens.motion) {
      for (var motKey in tokens.motion) {
        var motKebab = toKebab(motKey);
        cssVars.push("--theme--motion-" + motKebab + ": " + tokens.motion[motKey] + ";");
        cssVars.push("--theme-motion-" + motKebab + ": " + tokens.motion[motKey] + ";");
      }
    }

    // Special Overlays / Aliases
    cssVars.push("--theme--overlay-start: var(--theme--color-overlay-start, rgba(46, 52, 84, 0.93));");
    cssVars.push("--theme--overlay-end: var(--theme--color-overlay-end, rgba(46, 52, 84, 0.85));");
    cssVars.push("--theme--borders-light: var(--theme--color-border-light, rgba(255, 255, 255, 0.12));");
    cssVars.push("--theme--ambient-backdrop-blur: blur(4px);");

    return cssVars.join("\n");
  }

  function injectThemeVariablesIntoRoot(tokens) {
    var cssText = resolveTokensToCssVariables(tokens || defaultTokens);
    var styleEl = document.getElementById("serviceos-theme-root");
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "serviceos-theme-root";
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = ":root {\n" + cssText + "\n}";
  }

  // Executa imediatamente para evitar qualquer flash
  injectThemeVariablesIntoRoot();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      injectThemeVariablesIntoRoot();
    });
  }

  window.ServiceOSThemeResolver = {
    tokens: defaultTokens,
    resolve: resolveTokensToCssVariables,
    inject: injectThemeVariablesIntoRoot
  };
})(window);

import { defaultTokens, fluidLength } from "./tokens.js";

/**
 * ServiceOS Web Theme Resolver (Universal Canonical Engine)
 * Injeta variáveis CSS :root emitindo tanto o padrão canônico duplo hífen (--theme--*)
 * quanto os aliases de compatibilidade (--color-*, --font-*, etc.)
 */
export function resolveTokensToCssVariables(tokens = defaultTokens) {
  const cssVars = [];

  function toKebab(str) {
    if (!str) return "";
    return str.includes("xs") || str.includes("xl") || !isNaN(str[0])
      ? str
      : str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }

  // 1. Colors
  if (tokens.colors) {
    for (const [key, val] of Object.entries(tokens.colors)) {
      const kebab = toKebab(key);
      cssVars.push(`--theme--color-${kebab}: ${val};`);
      cssVars.push(`--theme--colors-${kebab}: ${val};`);
      cssVars.push(`--theme-colors-${kebab}: ${val};`);
      cssVars.push(`--color-${kebab}: ${val};`);
    }
  }

  // 2. Layout
  if (tokens.layout) {
    if (tokens.layout.desktop) {
      cssVars.push(`--theme--layout-desktop-cols: ${tokens.layout.desktop.cols};`);
      cssVars.push(`--theme--layout-desktop-col-gap: ${resolveValue(tokens.layout.desktop.colGap)};`);
      cssVars.push(`--theme--layout-desktop-gutter: ${resolveValue(tokens.layout.desktop.gutter)};`);
      cssVars.push(`--theme--layout-desktop-max-width: ${tokens.layout.desktop.maxWidth};`);
      // Aliases
      cssVars.push(`--theme-layout-desktop-cols: ${tokens.layout.desktop.cols};`);
      cssVars.push(`--theme-layout-desktop-col-gap: ${resolveValue(tokens.layout.desktop.colGap)};`);
      cssVars.push(`--theme-layout-desktop-gutter: ${resolveValue(tokens.layout.desktop.gutter)};`);
    }
    if (tokens.layout.tablet) {
      cssVars.push(`--theme--layout-tablet-cols: ${tokens.layout.tablet.cols};`);
      cssVars.push(`--theme--layout-tablet-gutter: ${tokens.layout.tablet.gutter};`);
      cssVars.push(`--theme-layout-tablet-gutter: ${tokens.layout.tablet.gutter};`);
    }
    if (tokens.layout.mobile) {
      cssVars.push(`--theme--layout-mobile-cols: ${tokens.layout.mobile.cols};`);
      cssVars.push(`--theme--layout-mobile-gutter: ${tokens.layout.mobile.gutter};`);
      cssVars.push(`--theme-layout-mobile-gutter: ${tokens.layout.mobile.gutter};`);
    }
  }

  // 3. Typography
  if (tokens.typography) {
    if (tokens.typography.fontHeading) {
      cssVars.push(`--theme--font-heading: ${tokens.typography.fontHeading};`);
      cssVars.push(`--theme--typography-font-heading: ${tokens.typography.fontHeading};`);
      cssVars.push(`--font-heading: ${tokens.typography.fontHeading};`);
    }
    if (tokens.typography.fontBody) {
      cssVars.push(`--theme--font-body: ${tokens.typography.fontBody};`);
      cssVars.push(`--theme--typography-font-body: ${tokens.typography.fontBody};`);
      cssVars.push(`--font-body: ${tokens.typography.fontBody};`);
    }
    if (tokens.typography.sizes) {
      for (const [key, val] of Object.entries(tokens.typography.sizes)) {
        const valStr = resolveValue(val);
        cssVars.push(`--theme--typography-sizes-${key}: ${valStr};`);
        cssVars.push(`--theme-typography-sizes-${key}: ${valStr};`);
      }
    }
    if (tokens.typography.weights) {
      for (const [key, val] of Object.entries(tokens.typography.weights)) {
        cssVars.push(`--theme--typography-weights-${key}: ${val};`);
        cssVars.push(`--theme-typography-weights-${key}: ${val};`);
      }
    }
    if (tokens.typography.lineHeights) {
      for (const [key, val] of Object.entries(tokens.typography.lineHeights)) {
        cssVars.push(`--theme--typography-line-heights-${key}: ${val};`);
      }
    }
    if (tokens.typography.tracking) {
      for (const [key, val] of Object.entries(tokens.typography.tracking)) {
        cssVars.push(`--theme--typography-tracking-${key}: ${val};`);
      }
    }
  }

  // 4. Spacing
  if (tokens.spacing) {
    for (const [key, val] of Object.entries(tokens.spacing)) {
      const valStr = resolveValue(val);
      cssVars.push(`--theme--spacing-${key}: ${valStr};`);
      cssVars.push(`--theme-spacing-${key}: ${valStr};`);
    }
  }

  // 5. Radius
  if (tokens.radius) {
    for (const [key, val] of Object.entries(tokens.radius)) {
      cssVars.push(`--theme--radius-${key}: ${val};`);
      cssVars.push(`--theme-radius-${key}: ${val};`);
    }
  }

  // 6. Sizing
  if (tokens.sizing) {
    for (const [key, val] of Object.entries(tokens.sizing)) {
      const valStr = resolveValue(val);
      const kebab = toKebab(key);
      cssVars.push(`--theme--sizing-${key}: ${valStr};`);
      cssVars.push(`--theme--sizing-${kebab}: ${valStr};`);
      cssVars.push(`--theme-sizing-${kebab}: ${valStr};`);
    }
  }

  // 7. Opacity
  if (tokens.opacity) {
    for (const [key, val] of Object.entries(tokens.opacity)) {
      cssVars.push(`--theme--opacity-${key}: ${val};`);
    }
  }

  // 8. Elevation
  if (tokens.elevation) {
    for (const [key, val] of Object.entries(tokens.elevation)) {
      cssVars.push(`--theme--elevation-${key}: ${val};`);
      cssVars.push(`--theme-elevation-${key}: ${val};`);
    }
  }

  // 9. Glass
  if (tokens.glass) {
    for (const [key, val] of Object.entries(tokens.glass)) {
      cssVars.push(`--theme--glass-${key}: ${val};`);
      cssVars.push(`--theme-glass-${key}: ${val};`);
    }
  }

  // 10. Motion
  if (tokens.motion) {
    for (const [key, val] of Object.entries(tokens.motion)) {
      const kebab = toKebab(key);
      cssVars.push(`--theme--motion-${kebab}: ${val};`);
      cssVars.push(`--theme-motion-${kebab}: ${val};`);
    }
  }

  // Special Overlays / Aliases
  cssVars.push(`--theme--overlay-start: var(--theme--color-overlay-start, rgba(46, 52, 84, 0.93));`);
  cssVars.push(`--theme--overlay-end: var(--theme--color-overlay-end, rgba(46, 52, 84, 0.85));`);
  cssVars.push(`--theme--borders-light: var(--theme--color-border-light, rgba(255, 255, 255, 0.12));`);
  cssVars.push(`--theme--ambient-backdrop-blur: blur(4px);`);

  return cssVars.join("\n");
}

function resolveValue(val) {
  if (val && typeof val === "object" && val.kind === "fluid-length") {
    return resolveFluidTokenToClamp(val);
  }
  return val;
}

/**
 * Converte o FluidToken { min, max, viewportMin, viewportMax } na formula clamp() de CSS
 */
export function resolveFluidTokenToClamp(fluidToken) {
  const { min, max, viewportMin = 360, viewportMax = 1440, useVh = false } = fluidToken;
  
  const minRem = (min / 16).toFixed(4);
  const maxRem = (max / 16).toFixed(4);
  
  const slope = (max - min) / (viewportMax - viewportMin);
  const yAxisIntersection = -viewportMin * slope + min;
  const yAxisIntersectionRem = (yAxisIntersection / 16).toFixed(4);
  const vValue = (slope * 100).toFixed(4);
  const unit = useVh ? "vh" : "vw";

  return `clamp(${minRem}rem, ${yAxisIntersectionRem}rem + ${vValue}${unit}, ${maxRem}rem)`;
}

// Injeta automaticamente no :root da página Web
export function injectThemeVariablesIntoRoot() {
  const cssText = resolveTokensToCssVariables(defaultTokens);
  let styleEl = document.getElementById("serviceos-theme-root");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "serviceos-theme-root";
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = `:root {\n${cssText}\n}`;
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectThemeVariablesIntoRoot);
  } else {
    injectThemeVariablesIntoRoot();
  }
}

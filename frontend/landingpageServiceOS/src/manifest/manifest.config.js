import { assetsRegistry } from "./assets/assets.registry.js";
import { ptBR } from "./locales/pt-BR.js";
import { themeManifest } from "./design-system/theme.manifest.js";
import { themePalettesCatalog } from "./design-system/themePresets.js";
import { semiComposedManifest } from "./design-system/semiComposed.manifest.js";
import { uiManifest } from "./design-system/ui.manifest.js";

export const landingManifest = {
  activeTheme: "default",
  locale: "pt-BR",
  strings: ptBR,
  assets: assetsRegistry,
  theme: themeManifest,
  palettes: themePalettesCatalog,
  semiComposed: semiComposedManifest,
  ui: uiManifest,
  appShell: {
    header: {
      sticky: true,
      logoPosition: "left",
      navigationMode: "center",
      showEmail: true,
      showThemeToggle: true
    },
    layout: {
      containerMaxWidth: "1620px",
      containerGutter: "24px",
      heroHeightDesktop: "86vh",
      heroPaddingTopMobile: "90px"
    },
    footer: {
      showSocials: true,
      showLinks: true
    }
  },
  sections: [
    { id: "hero", enabled: true, type: "hero" },
    { id: "area", enabled: true, type: "difference-section" },
    { id: "sobre", enabled: true, type: "about-section" },
    { id: "faq", enabled: true, type: "faq-section" },
    { id: "contato", enabled: true, type: "contact-section" }
  ]
};

import { DEFAULT_SURFACE_UI_CONFIG } from "@/serviceos/ui-web";
import { anaSemiComposed } from "./semicomposed";
import { anaTheme } from "./theme";
import { anaUi } from "./ui";

const theme = {
  ...DEFAULT_SURFACE_UI_CONFIG.theme,
  ...anaTheme,
  modes: {
    ...DEFAULT_SURFACE_UI_CONFIG.theme?.modes,
    ...anaTheme.modes,
  },
  tokens: {
    ...DEFAULT_SURFACE_UI_CONFIG.theme?.tokens,
    ...anaTheme.tokens,
    ...anaSemiComposed,
  },
};

export const anaFoundationConfig = {
  theme: anaTheme,
  semiComposed: anaSemiComposed,
  ui: {
    ...DEFAULT_SURFACE_UI_CONFIG,
    ...anaUi,
    theme,
  },
};

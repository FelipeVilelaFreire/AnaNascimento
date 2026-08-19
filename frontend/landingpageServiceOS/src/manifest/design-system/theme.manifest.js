import { defaultTokens } from "./tokens.js";

export const themeManifest = {
  activeTheme: "default",
  tokens: defaultTokens,
  layout: {
    desktop: {
      minWidth: "993px",
      maxWidth: "1620px",
      cols: 12,
      colGap: "24px",
      gutter: "24px",
      headerCols: { logo: 3, nav: 6, actions: 3 }
    },
    tablet: {
      minWidth: "577px",
      maxWidth: "992px",
      cols: 8,
      colGap: "16px",
      gutter: "20px",
      headerCols: { logo: 4, actions: 4 }
    },
    mobile: {
      maxWidth: "576px",
      cols: 4,
      colGap: "12px",
      gutter: "16px",
      headerCols: { logo: 2, actions: 2 }
    }
  }
};

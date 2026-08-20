import { defaultTokens } from "./tokens.js";

export const themeManifest = {
  activeTheme: "default",
  tokens: defaultTokens,
  layout: {
    desktop: {
      minWidth: "993px",
      maxWidth: "100%",
      cols: 20,
      colGap: "24px",
      gutter: "36px",
      headerCols: { logo: 5, nav: 10, actions: 5 }
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

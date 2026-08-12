import { createUiColorTokens } from "@/serviceos/ui-web";

export const anaTheme = {
  defaultMode: "light",
  modes: {
    light: createUiColorTokens({
      primary: "#2f3658",
      accent: "#f2c455",
      background: "#ffffff",
      backgroundMuted: "#ffffff",
      surface: "#ffffff",
      surfaceMuted: "#f4f4f4",
      text: "#2e3454",
      muted: "#2e3454",
      border: "#e1e1e1",
      borderStrong: "#c8c8c8",
      confirmation: "#2f7d68",
      success: "#3f8d57",
      successText: "#ffffff",
      warning: "#b47f2c",
      danger: "#a33a3a",
      info: "#376b86",
    }),
    dark: createUiColorTokens({
      primary: "#f7f7f5",
      accent: "#f2c455",
      background: "#2e3454",
      backgroundMuted: "#252b48",
      surface: "#2e3454",
      surfaceMuted: "#2f3658",
      text: "#f7f7f5",
      muted: "#cfd2dc",
      border: "rgba(247, 247, 245, 0.16)",
      borderStrong: "rgba(247, 247, 245, 0.3)",
      confirmation: "#65c6a5",
      success: "#79d89b",
      successText: "#ffffff",
      warning: "#e5b96b",
      danger: "#ee8b8b",
      info: "#8cc4dc",
    }),
  },
  tokens: {
    typography: {
      fontFamilyBody: "Arial, Helvetica, ui-sans-serif, system-ui, sans-serif",
      fontFamilyHeading: "var(--font-marcellus), Marcellus, Arial, Helvetica, sans-serif",
    },
    dimensions: {
      minHeight: {
        "3xl": 280,
      },
    },
    strokes: {
      xs: {
        borderToken: "2xs",
        opacityToken: "md",
      },
    },
    layout: {
      columns: {
        desktop: 20,
        tablet: 8,
        mobile: 4,
      },
      spacing: {
        none: 0,
        "2xs": 2,
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        "2xl": 32,
        "3xl": 48,
      },
      sizing: {
        height: {
          md: 64,
          lg: 74,
          xl: 96,
        },
      },
      container: {
        maxWidth: 1920,
        gutter: {
          desktop: 32,
          tablet: 24,
          mobile: 16,
        },
      },
      gap: {
        "2xs": 10,
        xs: 12,
        sm: 14,
        md: 16,
        lg: 24,
        xl: 28,
        "2xl": 56,
      },
      presets: {
        "section.default": {
          container: {
            maxWidth: 1180,
            gutter: { desktop: 16, tablet: 16, mobile: 12 },
          },
        },
        "appShell.header": {
          grid: "company",
          container: {
            maxWidth: "100%",
            gutter: { desktop: 32, tablet: 24, mobile: 16 },
          },
          box: {
            columns: { desktop: 20, tablet: 8, mobile: 4 },
          },
          content: {
            columns: { desktop: 16, tablet: 8, mobile: 4 },
          },
          spacing: {
            marginX: "none",
            marginY: "none",
            paddingX: "none",
            paddingY: "2xs",
            height: "xl",
          },
          areas: {
            brand: {
              span: { desktop: 5, tablet: 4, mobile: 2 },
            },
            navigation: {
              span: { desktop: 6, tablet: 0, mobile: 0 },
            },
            actions: {
              span: { desktop: 5, tablet: 4, mobile: 2 },
            },
          },
        },
        "appShell.footer": {
          grid: "company",
          container: {
            maxWidth: "100%",
            gutter: { desktop: 32, tablet: 24, mobile: 16 },
          },
          box: {
            columns: { desktop: 20, tablet: 8, mobile: 4 },
          },
          content: {
            columns: { desktop: 16, tablet: 8, mobile: 4 },
          },
          spacing: {
            marginX: "none",
            marginY: "none",
            paddingX: "none",
            paddingY: "lg",
            height: "auto",
          },
          areas: {
            brand: {
              span: { desktop: 5, tablet: 8, mobile: 4 },
            },
            navigation: {
              span: { desktop: 5, tablet: 4, mobile: 4 },
            },
            practiceAreas: {
              span: { desktop: 6, tablet: 4, mobile: 4 },
            },
          },
        },
        "hero.split": {
          container: {
            maxWidth: 1180,
            gutter: { desktop: 16, tablet: 16, mobile: 16 },
          },
          grid: {
            columns: { desktop: 16, tablet: 8, mobile: 4 },
            gap: { desktop: 56, tablet: 28, mobile: 24 },
          },
          content: {
            span: { desktop: 9, tablet: 8, mobile: 4 },
          },
          media: {
            span: { desktop: 7, tablet: 8, mobile: 4 },
          },
        },
        "content.single": {
          container: {
            maxWidth: 1060,
            gutter: { desktop: 16, tablet: 16, mobile: 12 },
          },
          grid: {
            columns: { desktop: 16, tablet: 8, mobile: 4 },
            gap: { desktop: 16, tablet: 14, mobile: 12 },
          },
          item: {
            span: { desktop: 16, tablet: 8, mobile: 4 },
          },
        },
        "cards.threeUp": {
          grid: {
            columns: { desktop: 15, tablet: 8, mobile: 4 },
            gap: { desktop: 10, tablet: 10, mobile: 10 },
          },
          item: {
            span: { desktop: 5, tablet: 4, mobile: 4 },
          },
        },
        "cards.fourUp": {
          grid: {
            columns: { desktop: 16, tablet: 8, mobile: 4 },
            gap: { desktop: 10, tablet: 10, mobile: 10 },
          },
          item: {
            span: { desktop: 4, tablet: 4, mobile: 4 },
          },
        },
        "split.profile": {
          grid: {
            columns: { desktop: 16, tablet: 8, mobile: 4 },
            gap: { desktop: 28, tablet: 24, mobile: 18 },
          },
          media: {
            span: { desktop: 7, tablet: 8, mobile: 4 },
          },
          content: {
            span: { desktop: 9, tablet: 8, mobile: 4 },
          },
        },
        "contact.threeUp": {
          grid: {
            columns: { desktop: 15, tablet: 8, mobile: 4 },
            gap: { desktop: 14, tablet: 12, mobile: 10 },
          },
          item: {
            span: { desktop: 5, tablet: 4, mobile: 4 },
          },
        },
      },
    },
  },
};

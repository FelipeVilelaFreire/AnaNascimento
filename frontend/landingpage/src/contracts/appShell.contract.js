export const anaAppShellContract = {
  mode: "local-thin-shell",
  futureOwner: "ServiceOS AppShell",
  slots: {
    header: {
      brand: {
        kind: "brand",
        source: "app.brand",
        presentation: "image",
        logoAsHome: true,
        fallback: "monogram-label",
      },
      navigation: {
        kind: "navigation",
        source: "app.navigation",
        item: {
          component: "button",
          appearance: "transparent",
          tone: "secondary",
          size: "xs",
          width: "content",
        },
      },
      actions: {
        kind: "actions",
        items: [
          {
            id: "theme-toggle",
            kind: "themeToggle",
            appearance: "outline",
            tone: "secondary",
            size: "sm",
            iconPosition: "only",
          },
          {
            id: "whatsapp",
            kind: "linkButton",
            appearance: "solid",
            tone: "accent",
            size: "sm",
            iconPosition: "start",
          },
        ],
      },
    },
    footer: {
      brand: {
        kind: "brand",
        source: "app.brand",
        presentation: "mark-label",
        logoAsHome: true,
      },
      navigation: {
        kind: "navigation",
        source: "app.navigation",
        item: {
          component: "button",
          appearance: "transparent",
          tone: "secondary",
          size: "xs",
          width: "content",
        },
      },
      legal: {
        source: "app.legal",
      },
    },
  },
  header: {
    enabled: true,
    behavior: "sticky",
    surface: "solid.sm",
    tone: "primary",
    borderEdges: "bottom",
    layout: {
      grid: "company",
      container: {
        maxWidth: "100%",
      },
      box: {
        columns: {
          desktop: 20,
          tablet: 8,
          mobile: 4,
        },
      },
      content: {
        columns: {
          desktop: 16,
          tablet: 8,
          mobile: 4,
        },
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
    scroll: {
      behavior: "move",
      transition: "slow",
      startAfter: {
        mode: "immediate",
        offset: "none",
      },
      structure: {
        height: {
          mode: "decrease",
          target: "lg",
        },
        paddingX: {
          mode: "none",
        },
        paddingY: {
          mode: "decrease",
          target: "none",
        },
        marginX: {
          mode: "none",
        },
        marginTop: {
          mode: "none",
        },
      },
    },
    brand: {
      presentation: "image",
      logoAsHome: true,
      fallback: "monogram-label",
    },
    navigation: {
      placement: "desktop-center",
      mobileMode: "drawer",
    },
    drawer: {
      surface: "solid.sm",
      tone: "primary",
      borderEdges: "left",
      radiusCorners: "left",
    },
    actions: {
      themeToggle: true,
      whatsapp: true,
    },
  },
  footer: {
    enabled: true,
    variant: "simple-navigation",
    surface: "solid.2xs",
    tone: "primary",
    borderEdges: "top",
    layout: {
      grid: "company",
      container: {
        maxWidth: "100%",
      },
      box: {
        columns: {
          desktop: 20,
          tablet: 8,
          mobile: 4,
        },
      },
      content: {
        columns: {
          desktop: 10,
          tablet: 8,
          mobile: 4,
        },
      },
      spacing: {
        marginX: "none",
        marginY: "none",
        paddingX: "none",
        paddingY: "2xl",
        areaGap: "lg",
        height: "auto",
      },
      areas: {
        brand: {
          span: { desktop: 3, tablet: 8, mobile: 4 },
          align: { desktop: "center", tablet: "center", mobile: "start" },
          justify: { desktop: "between", tablet: "start", mobile: "start" },
          direction: "column",
          spacing: {
            stackGap: "md",
            itemGap: "sm",
          },
        },
        navigation: {
          span: { desktop: 3, tablet: 4, mobile: 4 },
          align: "start",
          direction: "column",
          spacing: {
            stackGap: "sm",
          },
        },
        practiceAreas: {
          span: { desktop: 3, tablet: 4, mobile: 4 },
          align: "start",
          direction: "column",
          spacing: {
            stackGap: "sm",
          },
        },
      },
    },
    brand: {
      show: true,
      presentation: "mark-label",
    },
    navigation: {
      show: true,
    },
    practiceAreas: {
      show: true,
    },
    contact: {
      showEmail: true,
    },
    social: {
      show: true,
      button: {
        appearance: "outline",
        tone: "secondary",
        size: "lg",
        iconPosition: "only",
        geometry: {
          radius: 999,
        },
      },
      items: [
        { type: "instagram", href: "#", label: "Instagram" },
        { type: "facebook", href: "#", label: "Facebook" },
        { type: "linkedin", href: "#", label: "LinkedIn" },
      ],
    },
    legal: {
      text: "Copyright (c) 2025 Ana Nascimento Advocacia Todos os direitos reservados | Site desenvolvido por LRG Criativo",
    },
  },
  floatingAction: {
    enabled: true,
    action: "whatsapp",
    surface: "transparent.2xs",
    tone: "success",
    borderEdges: "none",
    button: {
      appearance: "solid",
      tone: "success",
      size: "xl",
      iconPosition: "only",
      icon: {
        colorMode: "currentColor",
        size: "2xl",
      },
      geometry: {
        radius: 12,
      },
    },
  },
};

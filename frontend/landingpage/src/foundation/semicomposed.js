export const anaSemiComposed = {
  layoutRecipes: {
    appShellHeader: "appShell.header",
    heroSplit: "hero.split",
    sectionSingle: "content.single",
    threeCards: "cards.threeUp",
    fourCards: "cards.fourUp",
    profileSplit: "split.profile",
    contactCards: "contact.threeUp",
  },
  surfaceSlots: {
    "appShell.mobileDrawer": {
      appearance: "solid",
      tone: "neutral",
    },
    "hero.stat": {
      appearance: "soft",
      tone: "neutral",
    },
    "hero.badge": {
      appearance: "glass",
      tone: "neutral",
    },
    "legal.primaryCard": {
      appearance: "solid",
      tone: "primary",
    },
    "legal.panelSoft": {
      appearance: "soft",
      tone: "neutral",
    },
    "legal.panelSolid": {
      appearance: "solid",
      tone: "neutral",
    },
  },
  surfaceRecipes: {
    solid: {
      "2xs": { outerElevation: "none", paddingToken: "spaceXs", radiusToken: "2xs", stroke: "xs" },
      xs: { outerElevation: "none", paddingToken: "spaceSm", radiusToken: "2xs", stroke: "xs" },
      sm: { outerElevation: "none", paddingToken: "spaceMd", radiusToken: "2xs", stroke: "xs" },
      md: { outerElevation: "2xs", paddingToken: "spaceLg", radiusToken: "2xs" },
      lg: { outerElevation: "xs" },
      xl: { outerElevation: "sm" },
    },
    transparent: {
      "2xs": { outerElevation: "none", paddingToken: "space2xs", radiusToken: "2xs", stroke: "none" },
      xs: { outerElevation: "none", paddingToken: "spaceXs", radiusToken: "2xs", stroke: "none" },
      sm: { outerElevation: "none", paddingToken: "spaceXs", radiusToken: "2xs", stroke: "none" },
      md: { outerElevation: "none", paddingToken: "spaceSm", radiusToken: "2xs", stroke: "none" },
    },
    soft: {
      sm: { outerElevation: "none" },
      md: { outerElevation: "2xs" },
      lg: { outerElevation: "xs" },
    },
    glass: {
      md: { outerElevation: "sm" },
      lg: { outerElevation: "md" },
      xl: { outerElevation: "lg" },
    },
    outline: {
      "2xs": { outerElevation: "none", paddingToken: "spaceXs", radiusToken: "2xs", stroke: "xs" },
      xs: { outerElevation: "none", paddingToken: "spaceSm", radiusToken: "2xs", stroke: "xs" },
      sm: { outerElevation: "none", paddingToken: "spaceMd", radiusToken: "2xs", stroke: "xs" },
      md: { outerElevation: "none", paddingToken: "spaceLg", radiusToken: "2xs", stroke: "xs" },
      lg: { outerElevation: "2xs" },
    },
  },
};

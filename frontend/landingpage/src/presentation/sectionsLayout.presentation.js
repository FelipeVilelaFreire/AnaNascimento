export const sectionsLayoutPresentation = {
  screen: "landing.home",
  order: [
    "hero",
    "differenceAreas",
    "about",
    "process",
    "faq",
    "contact",
  ],
  sections: {
    hero: {
      enabled: true,
      id: "inicio",
      presentation: "full-bleed-navy-hero",
      layout: "hero.split",
      surfaces: {
        stat: "hero.stat",
        badge: "hero.badge",
      },
    },
    differenceAreas: {
      enabled: true,
      id: "areas",
      presentation: "difference-and-areas",
      layout: "cards.threeUp",
      surfaces: {
        card: "legal.primaryCard",
      },
    },
    about: {
      enabled: true,
      id: "sobre",
      presentation: "profile-editorial-split",
      layout: "split.profile",
      surfaces: {
        portrait: "legal.panelSoft",
      },
    },
    process: {
      enabled: true,
      id: "atendimento",
      presentation: "numbered-step-grid",
      layout: "cards.fourUp",
      surfaces: {
        step: "legal.panelSolid",
      },
    },
    faq: {
      enabled: true,
      id: "faq",
      presentation: "accordion-list",
    },
    contact: {
      enabled: true,
      id: "contato",
      presentation: "contact-grid-final-cta",
      layout: "contact.threeUp",
      surfaces: {
        item: "legal.panelSoft",
      },
    },
  },
};

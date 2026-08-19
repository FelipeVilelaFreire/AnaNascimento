// Declaração Canônica do Semi-Composed (Superfícies & Receitas de UI)
export const semiComposedManifest = {
  // 1. Receitas de Texto (Títulos, Eyebrows, Subtítulos)
  text: {
    heroEyebrow: { fontFamily: "var(--font-heading)", fontSize: "var(--typography-sizes-3xl)", color: "var(--color-gold)" },
    heroTitle: { fontFamily: "var(--font-heading)", fontSize: "var(--typography-sizes-4xl)", color: "var(--color-white)", lineHeight: "1.15" },
    sectionTitle: { fontFamily: "var(--font-heading)", fontSize: "var(--typography-sizes-2xl)", color: "var(--color-navy)" }
  },

  // 2. Receitas de Superfície Universais (Surface Recipes do ServiceOS)
  surface: {
    solid: {
      backgroundColor: "var(--color-gold)",
      color: "var(--color-navy)",
      border: "none",
      hoverBg: "var(--color-gold-hover)"
    },
    glass: {
      backgroundColor: "rgba(255, 255, 255, 0.12)",
      color: "var(--color-gold)",
      border: "1px solid var(--color-border-light)",
      backdropFilter: "blur(4px)"
    },
    outline: {
      backgroundColor: "transparent",
      color: "var(--color-white)",
      border: "1px solid rgba(255, 255, 255, 0.4)"
    },
    transparent: {
      backgroundColor: "transparent",
      color: "var(--color-white)",
      border: "none",
      hoverColor: "var(--color-gold)"
    },
    serviceCard: {
      backgroundColor: "var(--color-navy)",
      color: "var(--color-white)",
      padding: "36px 28px",
      borderRadius: "var(--radius-sm)",
      minHeight: "480px"
    }
  },

  // 3. Receitas de Ícones (PhoneBadge circular)
  icon: {
    phoneBadge: { width: "38px", height: "38px", borderRadius: "var(--radius-full)", border: "1.5px solid var(--color-gold)", color: "var(--color-gold)" }
  },

  // 4. Receitas de Campos & Inputs
  field: {
    contactInput: { borderRadius: "var(--radius-sm)", border: "1px solid var(--color-border)", padding: "12px 16px" }
  },

  // 5. Receitas de Elevação Externa (Outer Elevation)
  outerElevation: {
    phoneBoxShadow: "0 10px 30px rgba(0, 0, 0, 0.18)",
    modalBoxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    drawerShadow: "-5px 0 25px rgba(0, 0, 0, 0.4)"
  },

  // 6. Receitas de Elevação Interna (Inner Elevation)
  innerElevation: {
    insetCard: "inset 0 2px 4px rgba(0, 0, 0, 0.06)"
  },

  // 7. Receitas de Contorno (Stroke)
  stroke: {
    cardBorder: "1px solid var(--color-border)",
    goldBorder: "1.5px solid var(--color-gold)",
    lightBorder: "1px solid var(--color-border-light)"
  },

  // 8. Receitas de Animação (Motion)
  motion: {
    revealEntrance: "opacity 1100ms cubic-bezier(0.22, 1, 0.36, 1), transform 1100ms cubic-bezier(0.22, 1, 0.36, 1)",
    modalEntrance: "transform 300ms cubic-bezier(0.16, 1, 0.3, 1), opacity 250ms ease"
  },

  // 9. Receitas de Overlay
  overlay: {
    darkOverlay: { opacity: "0.96", backgroundColor: "var(--color-navy)" }
  },

  // 10. Receita de Anel de Foco (FocusRing)
  focusRing: {
    outlineFocus: "2px solid var(--color-gold)"
  },

  // 11. Receita de Desabilitado (Disabled)
  disabled: {
    inactiveState: { opacity: "0.4", cursor: "not-allowed", pointerEvents: "none" }
  },

  // 12. Camadas de Estado (StateLayer / Hover)
  stateLayer: {
    buttonHover: { transform: "translateY(-2px)", filter: "brightness(1.05)" }
  },

  // 13. Divisores (Divider)
  divider: {
    horizontalLine: { borderBottom: "1px solid var(--color-border-light)" }
  },

  // 14. Planos de Fundo de Seções (Background)
  background: {
    heroSection: { position: "relative", backgroundColor: "var(--color-navy)", paddingTop: "110px", paddingBottom: "40px" },
    differenceSection: { backgroundColor: "var(--color-white)", padding: "100px 0" }
  },

  // 15. Efeitos de Luz & Glow (Ambient)
  ambient: {
    goldGlow: { filter: "drop-shadow(0 0 10px var(--color-gold))" }
  },

  // 16. Container do Modal / Bottom Sheet (DropdownPanel)
  dropdownPanel: {
    modalBox: { backgroundColor: "var(--color-white)", borderRadius: "16px", maxWidth: "520px", maxHeight: "85vh" }
  },

  // 17. Receita de Listas Estruturadas (Listbox)
  listbox: {
    faqContainer: { maxWidth: "820px", display: "flex", flexDirection: "column", gap: "16px" }
  },

  // 18. Receita do Item Expansível (ListboxOption)
  listboxOption: {
    faqItem: { backgroundColor: "rgba(255, 255, 255, 0.08)", border: "1px solid var(--color-border-light)", padding: "20px 24px" }
  }
};

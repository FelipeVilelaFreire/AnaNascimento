// Declaração Canônica do Default UI Manifest Completo (As 16 Famílias Primárias do ServiceOS)
// Seleção exclusiva de CHAVES CONHECIDAS de Theme e Semi-Composed (sem CSS solto)

export const uiManifest = {
  // 1. Buttons
  buttons: {
    "2xs": { height: "2xs", minWidth: "2xs", gap: "2xs", text: "2xs", icon: "2xs", surface: "xs", stateLayer: "xs", motion: "xs" },
    "xs":  { height: "xs",  minWidth: "xs",  gap: "xs",  text: "xs",  icon: "xs",  surface: "xs", stateLayer: "xs", motion: "xs" },
    "sm":  { height: "sm",  minWidth: "sm",  gap: "sm",  text: "sm",  icon: "sm",  surface: "sm", stateLayer: "sm", motion: "sm" },
    "md":  { height: "md",  minWidth: "md",  gap: "md",  text: "md",  icon: "md",  surface: "md", stateLayer: "md", motion: "md" },
    "lg":  { height: "lg",  minWidth: "lg",  gap: "lg",  text: "lg",  icon: "lg",  surface: "lg", stateLayer: "lg", motion: "lg" },
    "xl":  { height: "xl",  minWidth: "xl",  gap: "xl",  text: "xl",  icon: "xl",  surface: "xl", stateLayer: "xl", motion: "xl" },
    "2xl": { height: "2xl", minWidth: "2xl", gap: "2xl", text: "2xl", icon: "2xl", surface: "2xl", stateLayer: "2xl", motion: "2xl" },
    "3xl": { height: "3xl", minWidth: "3xl", gap: "3xl", text: "3xl", icon: "3xl", surface: "3xl", stateLayer: "3xl", motion: "3xl" }
  },

  // 2. Inputs
  inputs: {
    "2xs": { height: "2xs", gap: "2xs", text: "2xs", surface: "xs", focusRing: "outlineFocus", motion: "xs" },
    "xs":  { height: "xs",  gap: "xs",  text: "xs",  surface: "xs", focusRing: "outlineFocus", motion: "xs" },
    "sm":  { height: "sm",  gap: "sm",  text: "sm",  surface: "sm", focusRing: "outlineFocus", motion: "sm" },
    "md":  { height: "md",  gap: "md",  text: "md",  surface: "md", focusRing: "outlineFocus", motion: "md" },
    "lg":  { height: "lg",  gap: "lg",  text: "lg",  surface: "lg", focusRing: "outlineFocus", motion: "lg" },
    "xl":  { height: "xl",  gap: "xl",  text: "xl",  surface: "xl", focusRing: "outlineFocus", motion: "xl" },
    "2xl": { height: "2xl", gap: "2xl", text: "2xl", surface: "2xl", focusRing: "outlineFocus", motion: "2xl" },
    "3xl": { height: "3xl", gap: "3xl", text: "3xl", surface: "3xl", focusRing: "outlineFocus", motion: "3xl" }
  },

  // 3. DropdownPicker
  dropdownPickers: {
    "2xs": { height: "2xs", gap: "2xs", text: "2xs", dropdownPanel: "modalBox", motion: "xs" },
    "xs":  { height: "xs",  gap: "xs",  text: "xs",  dropdownPanel: "modalBox", motion: "xs" },
    "sm":  { height: "sm",  gap: "sm",  text: "sm",  dropdownPanel: "modalBox", motion: "sm" },
    "md":  { height: "md",  gap: "md",  text: "md",  dropdownPanel: "modalBox", motion: "md" },
    "lg":  { height: "lg",  gap: "lg",  text: "lg",  dropdownPanel: "modalBox", motion: "lg" },
    "xl":  { height: "xl",  gap: "xl",  text: "xl",  dropdownPanel: "modalBox", motion: "xl" },
    "2xl": { height: "2xl", gap: "2xl", text: "2xl", dropdownPanel: "modalBox", motion: "2xl" },
    "3xl": { height: "3xl", gap: "3xl", text: "3xl", dropdownPanel: "modalBox", motion: "3xl" }
  },

  // 4. Select
  selects: {
    "2xs": { height: "2xs", gap: "2xs", text: "2xs", surface: "xs", motion: "xs" },
    "xs":  { height: "xs",  gap: "xs",  text: "xs",  surface: "xs", motion: "xs" },
    "sm":  { height: "sm",  gap: "sm",  text: "sm",  surface: "sm", motion: "sm" },
    "md":  { height: "md",  gap: "md",  text: "md",  surface: "md", motion: "md" },
    "lg":  { height: "lg",  gap: "lg",  text: "lg",  surface: "lg", motion: "lg" },
    "xl":  { height: "xl",  gap: "xl",  text: "xl",  surface: "xl", motion: "xl" },
    "2xl": { height: "2xl", gap: "2xl", text: "2xl", surface: "2xl", motion: "2xl" },
    "3xl": { height: "3xl", gap: "3xl", text: "3xl", surface: "3xl", motion: "3xl" }
  },

  // 5. SegmentedControl
  segmentedControls: {
    "2xs": { height: "2xs", gap: "2xs", text: "2xs", surface: "xs", motion: "xs" },
    "xs":  { height: "xs",  gap: "xs",  text: "xs",  surface: "xs", motion: "xs" },
    "sm":  { height: "sm",  gap: "sm",  text: "sm",  surface: "sm", motion: "sm" },
    "md":  { height: "md",  gap: "md",  text: "md",  surface: "md", motion: "md" },
    "lg":  { height: "lg",  gap: "lg",  text: "lg",  surface: "lg", motion: "lg" },
    "xl":  { height: "xl",  gap: "xl",  text: "xl",  surface: "xl", motion: "xl" },
    "2xl": { height: "2xl", gap: "2xl", text: "2xl", surface: "2xl", motion: "2xl" },
    "3xl": { height: "3xl", gap: "3xl", text: "3xl", surface: "3xl", motion: "3xl" }
  },

  // 6. Checkbox
  checkboxes: {
    "2xs": { height: "2xs", gap: "2xs", text: "2xs", stroke: "cardBorder", motion: "xs" },
    "xs":  { height: "xs",  gap: "xs",  text: "xs",  stroke: "cardBorder", motion: "xs" },
    "sm":  { height: "sm",  gap: "sm",  text: "sm",  stroke: "cardBorder", motion: "sm" },
    "md":  { height: "md",  gap: "md",  text: "md",  stroke: "cardBorder", motion: "md" },
    "lg":  { height: "lg",  gap: "lg",  text: "lg",  stroke: "cardBorder", motion: "lg" },
    "xl":  { height: "xl",  gap: "xl",  text: "xl",  stroke: "cardBorder", motion: "xl" },
    "2xl": { height: "2xl", gap: "2xl", text: "2xl", stroke: "cardBorder", motion: "2xl" },
    "3xl": { height: "3xl", gap: "3xl", text: "3xl", stroke: "cardBorder", motion: "3xl" }
  },

  // 7. Toggle
  toggles: {
    "2xs": { height: "2xs", gap: "2xs", surface: "xs", motion: "xs" },
    "xs":  { height: "xs",  gap: "xs",  surface: "xs", motion: "xs" },
    "sm":  { height: "sm",  gap: "sm",  surface: "sm", motion: "sm" },
    "md":  { height: "md",  gap: "md",  surface: "md", motion: "md" },
    "lg":  { height: "lg",  gap: "lg",  surface: "lg", motion: "lg" },
    "xl":  { height: "xl",  gap: "xl",  surface: "xl", motion: "xl" },
    "2xl": { height: "2xl", gap: "2xl", surface: "2xl", motion: "2xl" },
    "3xl": { height: "3xl", gap: "3xl", surface: "3xl", motion: "3xl" }
  },

  // 8. Card
  cards: {
    "2xs": { minHeight: "2xs", padding: "2xs", surface: "xs", outerElevation: "phoneBoxShadow", motion: "xs" },
    "xs":  { minHeight: "xs",  padding: "xs",  surface: "xs", outerElevation: "phoneBoxShadow", motion: "xs" },
    "sm":  { minHeight: "sm",  padding: "sm",  surface: "sm", outerElevation: "phoneBoxShadow", motion: "sm" },
    "md":  { minHeight: "md",  padding: "md",  surface: "md", outerElevation: "phoneBoxShadow", motion: "md" },
    "lg":  { minHeight: "lg",  padding: "lg",  surface: "serviceCard", outerElevation: "phoneBoxShadow", motion: "lg" },
    "xl":  { minHeight: "xl",  padding: "xl",  surface: "xl", outerElevation: "phoneBoxShadow", motion: "xl" },
    "2xl": { minHeight: "2xl", padding: "2xl", surface: "2xl", outerElevation: "phoneBoxShadow", motion: "2xl" },
    "3xl": { minHeight: "3xl", padding: "3xl", surface: "3xl", outerElevation: "phoneBoxShadow", motion: "3xl" }
  },

  // 9. Modal
  modals: {
    "2xs": { maxWidth: "2xs", dropdownPanel: "modalBox", motion: "modalEntrance" },
    "xs":  { maxWidth: "xs",  dropdownPanel: "modalBox", motion: "modalEntrance" },
    "sm":  { maxWidth: "sm",  dropdownPanel: "modalBox", motion: "modalEntrance" },
    "md":  { maxWidth: "md",  dropdownPanel: "modalBox", motion: "modalEntrance" },
    "lg":  { maxWidth: "lg",  dropdownPanel: "modalBox", motion: "modalEntrance" },
    "xl":  { maxWidth: "xl",  dropdownPanel: "modalBox", motion: "modalEntrance" },
    "2xl": { maxWidth: "2xl", dropdownPanel: "modalBox", motion: "modalEntrance" },
    "3xl": { maxWidth: "3xl", dropdownPanel: "modalBox", motion: "modalEntrance" }
  },

  // 10. Alert
  alerts: {
    "2xs": { gap: "2xs", text: "2xs", surface: "xs", motion: "xs" },
    "xs":  { gap: "xs",  text: "xs",  surface: "xs", motion: "xs" },
    "sm":  { gap: "sm",  text: "sm",  surface: "sm", motion: "sm" },
    "md":  { gap: "md",  text: "md",  surface: "md", motion: "md" },
    "lg":  { gap: "lg",  text: "lg",  surface: "lg", motion: "lg" },
    "xl":  { gap: "xl",  text: "xl",  surface: "xl", motion: "xl" },
    "2xl": { gap: "2xl", text: "2xl", surface: "2xl", motion: "2xl" },
    "3xl": { gap: "3xl", text: "3xl", surface: "3xl", motion: "3xl" }
  },

  // 11. Toast
  toasts: {
    "2xs": { gap: "2xs", text: "2xs", outerElevation: "phoneBoxShadow", motion: "xs" },
    "xs":  { gap: "xs",  text: "xs",  outerElevation: "phoneBoxShadow", motion: "xs" },
    "sm":  { gap: "sm",  text: "sm",  outerElevation: "phoneBoxShadow", motion: "sm" },
    "md":  { gap: "md",  text: "md",  outerElevation: "phoneBoxShadow", motion: "md" },
    "lg":  { gap: "lg",  text: "lg",  outerElevation: "phoneBoxShadow", motion: "lg" },
    "xl":  { gap: "xl",  text: "xl",  outerElevation: "phoneBoxShadow", motion: "xl" },
    "2xl": { gap: "2xl", text: "2xl", outerElevation: "phoneBoxShadow", motion: "2xl" },
    "3xl": { gap: "3xl", text: "3xl", outerElevation: "phoneBoxShadow", motion: "3xl" }
  },

  // 12. Badge
  badges: {
    "2xs": { height: "2xs", gap: "2xs", text: "2xs", surface: "xs", motion: "xs" },
    "xs":  { height: "xs",  gap: "xs",  text: "xs",  surface: "xs", motion: "xs" },
    "sm":  { height: "sm",  gap: "sm",  text: "sm",  surface: "sm", motion: "sm" },
    "md":  { height: "md",  gap: "md",  text: "md",  surface: "md", motion: "md" },
    "lg":  { height: "lg",  gap: "lg",  text: "lg",  surface: "lg", motion: "lg" },
    "xl":  { height: "xl",  gap: "xl",  text: "xl",  surface: "xl", motion: "xl" },
    "2xl": { height: "2xl", gap: "2xl", text: "2xl", surface: "2xl", motion: "2xl" },
    "3xl": { height: "3xl", gap: "3xl", text: "3xl", surface: "3xl", motion: "3xl" }
  },

  // 13. Progress
  progresses: {
    "2xs": { height: "2xs", surface: "xs", motion: "xs" },
    "xs":  { height: "xs",  surface: "xs", motion: "xs" },
    "sm":  { height: "sm",  surface: "sm", motion: "sm" },
    "md":  { height: "md",  surface: "md", motion: "md" },
    "lg":  { height: "lg",  surface: "lg", motion: "lg" },
    "xl":  { height: "xl",  surface: "xl", motion: "xl" },
    "2xl": { height: "2xl", surface: "2xl", motion: "2xl" },
    "3xl": { height: "3xl", surface: "3xl", motion: "3xl" }
  },

  // 14. Grid
  grids: {
    "2xs": { gap: "2xs", cols: 4 },
    "xs":  { gap: "xs",  cols: 4 },
    "sm":  { gap: "sm",  cols: 8 },
    "md":  { gap: "md",  cols: 8 },
    "lg":  { gap: "lg",  cols: 12 },
    "xl":  { gap: "xl",  cols: 12 },
    "2xl": { gap: "2xl", cols: 12 },
    "3xl": { gap: "3xl", cols: 12 }
  },

  // 15. Table / DataTable
  tables: {
    "2xs": { gap: "2xs", text: "2xs", stroke: "cardBorder" },
    "xs":  { gap: "xs",  text: "xs",  stroke: "cardBorder" },
    "sm":  { gap: "sm",  text: "sm",  stroke: "cardBorder" },
    "md":  { gap: "md",  text: "md",  stroke: "cardBorder" },
    "lg":  { gap: "lg",  text: "lg",  stroke: "cardBorder" },
    "xl":  { gap: "xl",  text: "xl",  stroke: "cardBorder" },
    "2xl": { gap: "2xl", text: "2xl", stroke: "cardBorder" },
    "3xl": { gap: "3xl", text: "3xl", stroke: "cardBorder" }
  },

  // 16. Loading
  loadings: {
    "2xs": { icon: "2xs", motion: "xs" },
    "xs":  { icon: "xs",  motion: "xs" },
    "sm":  { icon: "sm",  motion: "sm" },
    "md":  { icon: "md",  motion: "md" },
    "lg":  { icon: "lg",  motion: "lg" },
    "xl":  { icon: "xl",  motion: "xl" },
    "2xl": { icon: "2xl", motion: "2xl" },
    "3xl": { icon: "3xl", motion: "3xl" }
  }
};

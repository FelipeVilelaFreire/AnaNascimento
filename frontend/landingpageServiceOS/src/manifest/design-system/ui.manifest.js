// Declaração Canônica do Default UI Manifest Completo (As 16 Famílias Primárias do ServiceOS)
// Seleção exclusiva de CHAVES CONHECIDAS de Theme e Semi-Composed (sem CSS solto)

export const uiManifest = {
  // 1. Buttons (Composição pura por chaves conhecidas)
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

  // 14. Grid (GridFrame, GridCell, HeaderCell compostos por receitas do semi-composed)
  grids: {
    "2xs": {
      frameSurface: "xs",
      framePadding: "2xs",
      divider: "horizontalLine",
      motion: "xs",
      gap: "2xs",
      cols: 4
    },
    "xs": {
      frameSurface: "xs",
      framePadding: "xs",
      divider: "horizontalLine",
      motion: "xs",
      gap: "xs",
      cols: 4
    },
    "sm": {
      frameSurface: "sm",
      framePadding: "sm",
      divider: "horizontalLine",
      motion: "sm",
      gap: "sm",
      cols: 8
    },
    "md": {
      frameSurface: "md",
      framePadding: "md",
      divider: "horizontalLine",
      motion: "md",
      gap: "md",
      cols: 8
    },
    "lg": {
      frameSurface: "lg",
      framePadding: "lg",
      divider: "horizontalLine",
      motion: "lg",
      gap: "lg",
      cols: 12
    },
    "xl": {
      frameSurface: "xl",
      framePadding: "xl",
      divider: "horizontalLine",
      motion: "xl",
      gap: "xl",
      cols: 12
    },
    "2xl": {
      frameSurface: "2xl",
      framePadding: "2xl",
      divider: "horizontalLine",
      motion: "2xl",
      gap: "2xl",
      cols: 12
    },
    "3xl": {
      frameSurface: "3xl",
      framePadding: "3xl",
      divider: "horizontalLine",
      motion: "3xl",
      gap: "3xl",
      cols: 12
    }
  },

  // Sub-componentes do Grid (GridFrame, GridCell, HeaderCell)
  gridFrame: {
    "2xs": { surface: "xs", padding: "2xs", divider: "2xs", motion: "xs" },
    "xs":  { surface: "xs", padding: "xs",  divider: "xs",  motion: "xs" },
    "sm":  { surface: "sm", padding: "sm",  divider: "sm",  motion: "sm" },
    "md":  { surface: "md", padding: "md",  divider: "md",  motion: "md" },
    "lg":  { surface: "lg", padding: "lg",  divider: "lg",  motion: "lg" },
    "xl":  { surface: "xl", padding: "xl",  divider: "xl",  motion: "xl" },
    "2xl": { surface: "2xl", padding: "2xl", divider: "2xl", motion: "2xl" },
    "3xl": { surface: "3xl", padding: "3xl", divider: "3xl", motion: "3xl" }
  },

  gridCell: {
    "2xs": { padding: "2xs", text: "2xs", align: "start" },
    "xs":  { padding: "xs",  text: "xs",  align: "start" },
    "sm":  { padding: "sm",  text: "sm",  align: "start" },
    "md":  { padding: "md",  text: "md",  align: "start" },
    "lg":  { padding: "lg",  text: "lg",  align: "start" },
    "xl":  { padding: "xl",  text: "xl",  align: "start" },
    "2xl": { padding: "2xl", text: "2xl", align: "start" },
    "3xl": { padding: "3xl", text: "3xl", align: "start" }
  },

  headerCell: {
    "2xs": { padding: "2xs", text: "2xs", stroke: "cardBorder", background: "surface" },
    "xs":  { padding: "xs",  text: "xs",  stroke: "cardBorder", background: "surface" },
    "sm":  { padding: "sm",  text: "sm",  stroke: "cardBorder", background: "surface" },
    "md":  { padding: "md",  text: "md",  stroke: "cardBorder", background: "surface" },
    "lg":  { padding: "lg",  text: "lg",  stroke: "cardBorder", background: "surface" },
    "xl":  { padding: "xl",  text: "xl",  stroke: "cardBorder", background: "surface" },
    "2xl": { padding: "2xl", text: "2xl", stroke: "cardBorder", background: "surface" },
    "3xl": { padding: "3xl", text: "3xl", stroke: "cardBorder", background: "surface" }
  }
};

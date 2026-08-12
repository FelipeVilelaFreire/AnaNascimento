import { anaTheme } from "./theme";

const px = (value) => (typeof value === "number" ? `${value}px` : value);
const resolveToken = (scale, value) => px(scale?.[value] ?? value);
const modes = ["desktop", "tablet", "mobile"];

const transitionDurations = {
  none: "0ms",
  fast: "140ms",
  smooth: "220ms",
  slow: "340ms",
};

const alignValues = {
  center: "center",
  end: "flex-end",
  start: "flex-start",
  stretch: "stretch",
};

const justifyValues = {
  between: "space-between",
  center: "center",
  end: "flex-end",
  start: "flex-start",
};

const directionValues = {
  column: "column",
  row: "row",
  "row-wrap": "row",
};

function resolveByMode(value, mode, fallback) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[mode] ?? value.desktop ?? fallback;
  }

  return value ?? fallback;
}

function normalizeAreaSpans(areas = {}, columns = {}, mode) {
  const areaKeys = Object.keys(areas);
  const visibleAreas = areaKeys
    .map((key) => ({ key, requested: Math.max(0, Number(areas[key]?.span?.[mode] ?? 0) || 0) }))
    .filter((area) => area.requested > 0);
  const availableColumns = Math.max(1, Number(columns?.[mode] ?? 1) || 1);
  const requestedTotal = visibleAreas.reduce((total, area) => total + area.requested, 0);

  if (requestedTotal <= availableColumns) {
    return Object.fromEntries(areaKeys.map((key) => [key, Math.max(0, Number(areas[key]?.span?.[mode] ?? 0) || 0)]));
  }

  if (visibleAreas.length >= availableColumns) {
    const visibleKeys = new Set(visibleAreas.slice(0, availableColumns).map((area) => area.key));
    return Object.fromEntries(areaKeys.map((key) => [key, visibleKeys.has(key) ? 1 : 0]));
  }

  const floors = visibleAreas.map((area) => ({
    ...area,
    exact: area.requested / requestedTotal * availableColumns,
  }));
  const base = floors.map((area) => ({
    ...area,
    normalized: Math.max(1, Math.floor(area.exact)),
    remainder: area.exact - Math.floor(area.exact),
  }));
  const remaining = availableColumns - base.reduce((total, area) => total + area.normalized, 0);
  const extraKeys = new Set(
    base
      .slice()
      .sort((a, b) => b.remainder - a.remainder)
      .slice(0, remaining)
      .map((area) => area.key),
  );

  return Object.fromEntries(areaKeys.map((key) => {
    const area = base.find((item) => item.key === key);
    if (!area) return [key, 0];

    const shouldReceiveExtra = remaining > 0 && extraKeys.has(key);
    return [key, area.normalized + (shouldReceiveExtra ? 1 : 0)];
  }));
}

function areaVariables(areas = {}, normalizedAreas, spacing) {
  const entries = [];
  for (const mode of modes) {
    for (const [key, span] of Object.entries(normalizedAreas[mode])) {
      const area = areas[key] ?? {};
      const align = resolveByMode(area.align, mode, "start");
      const direction = resolveByMode(area.direction, mode, "column");
      const justify = resolveByMode(area.justify, mode, "start");
      const stackGap = resolveByMode(area.spacing?.stackGap, mode, "md");
      const itemGap = resolveByMode(area.spacing?.itemGap, mode, "sm");

      entries.push([`--ana-layout-area-${key}-span-${mode}`, span]);
      entries.push([`--ana-layout-area-${key}-align-${mode}`, alignValues[align] ?? align]);
      entries.push([`--ana-layout-area-${key}-justify-${mode}`, justifyValues[justify] ?? justify]);
      entries.push([`--ana-layout-area-${key}-direction-${mode}`, directionValues[direction] ?? direction]);
      entries.push([`--ana-layout-area-${key}-stack-gap-${mode}`, resolveToken(spacing, stackGap)]);
      entries.push([`--ana-layout-area-${key}-item-gap-${mode}`, resolveToken(spacing, itemGap)]);
      entries.push([`--ana-layout-area-${key}-wrap-${mode}`, direction === "row-wrap" ? "wrap" : "nowrap"]);
    }
  }
  return Object.fromEntries(entries);
}

export function resolveLayoutPreset(layout, fallback = "section.default") {
  const presets = anaTheme.tokens.layout.presets;
  const requested = typeof layout === "string" ? { preset: layout } : layout;
  const preset = presets[requested?.preset] ?? presets[fallback] ?? {};
  const presetGrid = typeof preset.grid === "object" ? preset.grid : {};
  const requestedGrid = typeof requested?.grid === "object" ? requested.grid : {};

  return {
    ...preset,
    ...requested,
    grid: typeof requested?.grid === "string" ? requested.grid : typeof preset.grid === "string" ? preset.grid : "company",
    container: {
      ...anaTheme.tokens.layout.container,
      ...preset.container,
      ...requested?.container,
    },
    box: {
      ...preset.box,
      ...requested?.box,
      columns: {
        ...anaTheme.tokens.layout.columns,
        ...preset.box?.columns,
        ...requested?.box?.columns,
      },
    },
    content: {
      ...preset.content,
      ...requested?.content,
      columns: {
        ...anaTheme.tokens.layout.columns,
        ...presetGrid.columns,
        ...preset.content?.columns,
        ...requestedGrid.columns,
        ...requested?.content?.columns,
      },
    },
    contentGrid: {
      ...preset.contentGrid,
      ...requested?.contentGrid,
      gap: {
        desktop: anaTheme.tokens.layout.gap.md,
        tablet: anaTheme.tokens.layout.gap.md,
        mobile: anaTheme.tokens.layout.gap.xs,
        ...presetGrid.gap,
        ...preset.contentGrid?.gap,
        ...requestedGrid.gap,
        ...requested?.contentGrid?.gap,
      },
    },
    spacing: {
      ...preset.spacing,
      ...requested?.spacing,
    },
    areas: {
      ...preset.areas,
      ...requested?.areas,
    },
    item: {
      ...preset.item,
      ...requested?.item,
      span: {
        ...preset.item?.span,
        ...requested?.item?.span,
      },
    },
  };
}

export function layoutStyle(layout) {
  const resolved = resolveLayoutPreset(layout);
  const spacing = anaTheme.tokens.layout.spacing;
  const height = anaTheme.tokens.layout.sizing.height;
  const boxStart = (mode) => Math.max(1, Math.floor(((anaTheme.tokens.layout.columns[mode] ?? 1) - (resolved.box?.columns?.[mode] ?? anaTheme.tokens.layout.columns[mode] ?? 1)) / 2) + 1);
  const contentStart = (mode) => Math.max(1, Math.floor(((resolved.box?.columns?.[mode] ?? 1) - (resolved.content?.columns?.[mode] ?? resolved.box?.columns?.[mode] ?? 1)) / 2) + 1);
  const normalizedAreas = Object.fromEntries(modes.map((mode) => [mode, normalizeAreaSpans(resolved.areas, resolved.content?.columns, mode)]));

  return {
    "--ana-container-max-width": px(resolved.container?.maxWidth),
    "--ana-container-gutter-desktop": px(resolved.container?.gutter?.desktop),
    "--ana-container-gutter-tablet": px(resolved.container?.gutter?.tablet),
    "--ana-container-gutter-mobile": px(resolved.container?.gutter?.mobile),
    "--ana-grid-columns-desktop": resolved.content?.columns?.desktop,
    "--ana-grid-columns-tablet": resolved.content?.columns?.tablet,
    "--ana-grid-columns-mobile": resolved.content?.columns?.mobile,
    "--ana-grid-gap-desktop": px(resolved.contentGrid?.gap?.desktop),
    "--ana-grid-gap-tablet": px(resolved.contentGrid?.gap?.tablet),
    "--ana-grid-gap-mobile": px(resolved.contentGrid?.gap?.mobile),
    "--ana-company-grid-columns-desktop": anaTheme.tokens.layout.columns.desktop,
    "--ana-company-grid-columns-tablet": anaTheme.tokens.layout.columns.tablet,
    "--ana-company-grid-columns-mobile": anaTheme.tokens.layout.columns.mobile,
    "--ana-layout-box-columns-desktop": resolved.box?.columns?.desktop,
    "--ana-layout-box-columns-tablet": resolved.box?.columns?.tablet,
    "--ana-layout-box-columns-mobile": resolved.box?.columns?.mobile,
    "--ana-layout-box-start-desktop": boxStart("desktop"),
    "--ana-layout-box-start-tablet": boxStart("tablet"),
    "--ana-layout-box-start-mobile": boxStart("mobile"),
    "--ana-layout-content-start-desktop": contentStart("desktop"),
    "--ana-layout-content-start-tablet": contentStart("tablet"),
    "--ana-layout-content-start-mobile": contentStart("mobile"),
    "--ana-layout-margin-x": resolveToken(spacing, resolved.spacing?.marginX),
    "--ana-layout-margin-y": resolveToken(spacing, resolved.spacing?.marginY),
    "--ana-layout-padding-x": resolveToken(spacing, resolved.spacing?.paddingX),
    "--ana-layout-padding-y": resolveToken(spacing, resolved.spacing?.paddingY),
    "--ana-layout-area-gap": resolveToken(spacing, resolved.spacing?.areaGap ?? "md"),
    "--ana-layout-height": resolveToken(height, resolved.spacing?.height),
    ...areaVariables(resolved.areas, normalizedAreas, spacing),
    "--ana-grid-item-span-desktop": resolved.item?.span?.desktop,
    "--ana-grid-item-span-tablet": resolved.item?.span?.tablet,
    "--ana-grid-item-span-mobile": resolved.item?.span?.mobile,
  };
}

function resolveStructureValue(resolved, target, key, mode) {
  if (target === "pageGutter" || target === "gutter") {
    return px(resolved.container?.gutter?.[mode] ?? anaTheme.tokens.layout.container.gutter[mode]);
  }

  if (key === "height") {
    if (target === "auto") return "auto";
    return resolveToken(anaTheme.tokens.layout.sizing.height, target);
  }

  return resolveToken(anaTheme.tokens.layout.spacing, target);
}

function resolveScrollEffect(resolved, scroll, key, mode) {
  const effect = scroll?.structure?.[key];
  const baseByKey = {
    height: resolved.spacing?.height,
    marginTop: resolved.spacing?.marginY,
    marginX: resolved.spacing?.marginX,
    paddingX: resolved.spacing?.paddingX,
    paddingY: resolved.spacing?.paddingY,
  };
  const baseValue = resolveStructureValue(resolved, baseByKey[key], key, mode);

  if (!effect || effect.mode === "none") {
    return baseValue;
  }

  if (effect.mode === "increase" || effect.mode === "decrease" || effect.mode === "set") {
    return resolveStructureValue(resolved, effect.target ?? baseByKey[key], key, mode);
  }

  return baseValue;
}

export function headerLayoutStyle(layout, scroll) {
  const resolved = resolveLayoutPreset(layout, "appShell.header");
  const style = layoutStyle(resolved);

  for (const mode of modes) {
    style[`--ana-scroll-height-${mode}`] = resolveScrollEffect(resolved, scroll, "height", mode);
    style[`--ana-scroll-margin-x-${mode}`] = resolveScrollEffect(resolved, scroll, "marginX", mode);
    style[`--ana-scroll-margin-top-${mode}`] = resolveScrollEffect(resolved, scroll, "marginTop", mode);
    style[`--ana-scroll-padding-x-${mode}`] = resolveScrollEffect(resolved, scroll, "paddingX", mode);
    style[`--ana-scroll-padding-y-${mode}`] = resolveScrollEffect(resolved, scroll, "paddingY", mode);
  }

  return {
    ...style,
    "--ana-scroll-transition-duration": transitionDurations[scroll?.transition] ?? transitionDurations.smooth,
  };
}

export function resolveScrollStart(scroll) {
  if (!scroll || scroll.startAfter?.mode === "immediate") {
    return 0;
  }

  return Number(anaTheme.tokens.layout.spacing[scroll.startAfter?.offset] ?? scroll.startAfter?.offset ?? 0) || 0;
}

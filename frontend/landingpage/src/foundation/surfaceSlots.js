import { anaSemiComposed } from "./semicomposed";

export function resolveSurfaceSlot(surface, fallback = "legal.panelSoft") {
  const slots = anaSemiComposed.surfaceSlots;
  const requested = typeof surface === "string" ? { slot: surface } : surface;
  const slot = slots[requested?.slot] ?? slots[fallback] ?? {};
  const { slot: _slot, ...overrides } = requested ?? {};

  return {
    ...slot,
    ...overrides,
  };
}

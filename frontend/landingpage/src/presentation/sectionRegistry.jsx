import {
  AboutSection,
  ContactSection,
  DifferenceAreasSection,
  FaqSection,
  HeroSection,
  ProcessSection,
} from "@/sections";
import { sectionsLayoutPresentation } from "./sectionsLayout.presentation";

const sectionComponents = {
  about: AboutSection,
  contact: ContactSection,
  differenceAreas: DifferenceAreasSection,
  faq: FaqSection,
  hero: HeroSection,
  process: ProcessSection,
};

export function getVisibleLandingSections() {
  return sectionsLayoutPresentation.order
    .map((key) => {
      const config = sectionsLayoutPresentation.sections[key];
      const Component = sectionComponents[key];
      if (!config?.enabled || !Component) return null;
      return { Component, config, key };
    })
    .filter(Boolean);
}

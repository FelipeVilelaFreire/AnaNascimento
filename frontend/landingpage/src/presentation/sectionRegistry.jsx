import {
  AboutSection,
  ContactSection,
  DifferenceSection,
  FaqSection,
  HeroSection,
  PracticeAreasSection,
  ProcessSection,
} from "@/sections";
import { sectionsLayoutPresentation } from "./sectionsLayout.presentation";

const sectionComponents = {
  about: AboutSection,
  contact: ContactSection,
  difference: DifferenceSection,
  faq: FaqSection,
  hero: HeroSection,
  practiceAreas: PracticeAreasSection,
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

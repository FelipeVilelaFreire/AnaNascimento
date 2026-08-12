import { BriefcaseBusiness, CreditCard, FileText, Home, Landmark, Scale, Users } from "lucide-react";
import { BrandIcon, Button, Card, Icon, Text, layoutStyle, resolveSurfaceSlot } from "@/foundation";
import { SectionShell } from "./SectionShell";

const areaIcons = {
  "Direito do Trabalho": BriefcaseBusiness,
  "Direito Civil": Scale,
  "Direito Imobiliário": Home,
  "Direito Patrimonial": Landmark,
  "Direito de Família": Users,
  "Direito do Consumidor": CreditCard,
};

export function DifferenceAreasSection({ content, presentation }) {
  const cardSurface = resolveSurfaceSlot(presentation?.surfaces?.card, "legal.primaryCard");

  return (
    <SectionShell className="differenceAreas" id="areas" layout={presentation?.layout} title={content.differenceAreas.title}>
      <div className="differenceIntro">
        {content.differenceAreas.paragraphs.map((paragraph) => (
          <Text as="p" key={paragraph}>{paragraph}</Text>
        ))}
      </div>
      <div className="practiceGrid layoutGrid" style={layoutStyle(presentation?.layout)}>
        {content.differenceAreas.areas.map((area) => {
          const AreaIcon = areaIcons[area.title] || FileText;
          return (
            <Card {...cardSurface} className="practiceCard" data-layout-item key={area.title}>
              <div className="practiceIcon">
                <Icon source={AreaIcon} size={38} strokeWidth={1.7} tone="inherit" />
              </div>
              <h3>{area.title}</h3>
              <ul>
                {area.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a href={content.contact.whatsappHref}>
                <Button
                  appearance="transparent"
                  icon={<BrandIcon name="whatsapp" size="xs" />}
                  size="xs"
                  tone="accent"
                >
                  {content.differenceAreas.cta}
                </Button>
              </a>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}

import { BriefcaseBusiness, CreditCard, FileText, Home, Landmark, Scale, Users } from "lucide-react";
import { Card, Icon, Text, layoutStyle, resolveSurfaceSlot } from "@/foundation";
import { SectionShell } from "./SectionShell";

const areaIcons = {
  "Direito do Trabalho": BriefcaseBusiness,
  "Direito Civil": Scale,
  "Direito Imobiliário": Home,
  "Direito Patrimonial": Landmark,
  "Direito de Família": Users,
  "Direito do Consumidor": CreditCard,
};

export function PracticeAreasSection({ content, presentation }) {
  const cardSurface = resolveSurfaceSlot(presentation?.surfaces?.card, "legal.primaryCard");

  return (
    <SectionShell description={content.practiceAreas.description} eyebrow={content.practiceAreas.eyebrow} id="areas" layout={presentation?.layout} title={content.practiceAreas.title}>
      <div className="practiceGrid layoutGrid" style={layoutStyle(presentation?.layout)}>
        {content.practiceAreas.items.map((area) => {
          const AreaIcon = areaIcons[area.title] || FileText;
          return (
          <Card {...cardSurface} className="practiceCard" data-layout-item key={area.title}>
            <div className="practiceIcon"><Icon source={AreaIcon} size={44} strokeWidth={1.7} tone="inherit" /></div>
            <h3>{area.title}</h3>
            <Text as="p" tone="muted">{area.description}</Text>
            <a href={content.contact.whatsappHref}>
              saiba mais
            </a>
          </Card>
        );
        })}
      </div>
    </SectionShell>
  );
}

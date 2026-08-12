import { ClipboardCheck, FileSearch, Handshake, MessagesSquare } from "lucide-react";
import { BrandIcon, Button, Icon, Surface, Text, layoutStyle, resolveSurfaceSlot } from "@/foundation";
import { SectionShell } from "./SectionShell";

const processIcons = [MessagesSquare, FileSearch, Handshake, ClipboardCheck];

export function ProcessSection({ content, presentation }) {
  const stepSurface = resolveSurfaceSlot(presentation?.surfaces?.step, "legal.panelSolid");

  return (
    <SectionShell id="atendimento" layout={presentation?.layout} title={content.process.title}>
      <div className="processGrid layoutGrid" style={layoutStyle(presentation?.layout)}>
        {content.process.steps.map((step, index) => {
          const StepIcon = processIcons[index] || ClipboardCheck;
          return (
          <Surface {...stepSurface} className="processCard" data-layout-item key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <Icon source={StepIcon} size={30} strokeWidth={1.6} />
            <h3>{step.title}</h3>
            <Text as="p" tone="muted">{step.description}</Text>
          </Surface>
        );
        })}
      </div>
      <div className="processClosing">
        <Text as="p">{content.process.location}</Text>
        <a href={content.contact.whatsappHref}>
          <Button icon={<BrandIcon name="whatsapp" size="sm" />}>{content.process.cta}</Button>
        </a>
        <div className="processHighlights">
          {content.process.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

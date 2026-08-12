import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Icon, Surface, Text, layoutStyle, resolveSurfaceSlot } from "@/foundation";
import { SectionShell } from "./SectionShell";

const highlightIcons = [HeartHandshake, Sparkles, ShieldCheck];

export function DifferenceSection({ content, presentation }) {
  const highlightSurface = resolveSurfaceSlot(presentation?.surfaces?.highlight, "legal.panelSoft");

  return (
    <SectionShell className="difference" eyebrow={content.difference.eyebrow} id="diferencial" layout={presentation?.layout} title={content.difference.title}>
      <div className="differenceGrid">
        <div className="paragraphStack">
          {content.difference.paragraphs.map((paragraph) => (
            <Text as="p" key={paragraph}>{paragraph}</Text>
          ))}
        </div>
        <div className="highlightList">
          {content.difference.highlights.map((item, index) => {
            const HighlightIcon = highlightIcons[index] || ShieldCheck;
            return (
            <Surface {...highlightSurface} className="highlightItem" data-layout-item key={item}>
              <Icon source={HighlightIcon} size={24} strokeWidth={1.7} />
              <span>{item}</span>
            </Surface>
          );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

import { BrandIcon, Button, Surface, Text, layoutStyle, resolveLayoutPreset, resolveSurfaceSlot } from "@/foundation";
import { SectionShell } from "./SectionShell";

export function AboutSection({ content, presentation }) {
  const layout = resolveLayoutPreset(presentation?.layout, "split.profile");
  const portraitSurface = resolveSurfaceSlot(presentation?.surfaces?.portrait, "legal.panelSoft");

  return (
    <SectionShell className="about" eyebrow={content.about.eyebrow} id="sobre" layout={layout} title={content.about.title}>
      <div className="aboutGrid layoutGrid" style={layoutStyle(layout)}>
        <Surface
          {...portraitSurface}
          className="portraitPanel"
          style={{
            "--ana-grid-item-span-desktop": layout.media?.span?.desktop,
            "--ana-grid-item-span-tablet": layout.media?.span?.tablet,
            "--ana-grid-item-span-mobile": layout.media?.span?.mobile,
          }}
        >
          <img alt="Dra. Ana Nascimento" src={content.assets.portraitImage} />
        </Surface>
        <div
          className="paragraphStack"
          style={{
            "--ana-grid-item-span-desktop": layout.content?.span?.desktop,
            "--ana-grid-item-span-tablet": layout.content?.span?.tablet,
            "--ana-grid-item-span-mobile": layout.content?.span?.mobile,
          }}
        >
          {content.about.paragraphs.map((paragraph) => (
            <Text as="p" key={paragraph}>{paragraph}</Text>
          ))}
          <a href={content.contact.whatsappHref}>
            <Button icon={<BrandIcon name="whatsapp" size="sm" />}>{content.about.cta}</Button>
          </a>
        </div>
      </div>
    </SectionShell>
  );
}

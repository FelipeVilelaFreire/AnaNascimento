import { ArrowRight, Scale } from "lucide-react";
import { BrandIcon, Button, Heading, Surface, Text, layoutStyle, resolveLayoutPreset, resolveSurfaceSlot } from "@/foundation";

export function HeroSection({ content, presentation }) {
  const layout = resolveLayoutPreset(presentation?.layout, "hero.split");
  const statSurface = resolveSurfaceSlot(presentation?.surfaces?.stat, "hero.stat");
  const badgeSurface = resolveSurfaceSlot(presentation?.surfaces?.badge, "hero.badge");

  return (
    <section className="hero section" id="inicio" style={layoutStyle(layout)}>
      <div
        className="heroCopy"
        style={{
          "--ana-grid-item-span-desktop": layout.content?.span?.desktop,
          "--ana-grid-item-span-tablet": layout.content?.span?.tablet,
          "--ana-grid-item-span-mobile": layout.content?.span?.mobile,
        }}
      >
        <Text as="span" className="eyebrow">{content.hero.eyebrow}</Text>
        <Heading level={1}>{content.hero.title}</Heading>
        <Text as="p" className="heroDescription">{content.hero.description}</Text>
        <div className="heroActions">
          <a href={content.contact.whatsappHref}>
            <Button appearance="solid" icon={<BrandIcon name="whatsapp" size="xs" />} size="lg">{content.hero.primaryCta}</Button>
          </a>
          <a className="secondaryLink" href="#areas">
            {content.hero.secondaryCta}
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="heroStats">
          {content.hero.stats.map((item) => (
            <Surface className="statCard" key={item.label} {...statSurface}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </Surface>
          ))}
        </div>
      </div>
      <Surface
        className="heroMedia"
        {...badgeSurface}
        style={{
          "--ana-grid-item-span-desktop": layout.media?.span?.desktop,
          "--ana-grid-item-span-tablet": layout.media?.span?.tablet,
          "--ana-grid-item-span-mobile": layout.media?.span?.mobile,
        }}
      >
        <img alt="Estatua da Justica" src={content.assets.heroImage} />
        <Surface className="heroBadge" {...badgeSurface}>
          <Scale size={22} />
          <span>Atendimento estrategico e humanizado</span>
        </Surface>
      </Surface>
    </section>
  );
}

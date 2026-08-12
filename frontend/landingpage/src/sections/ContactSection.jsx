import { Mail, MapPin, Phone } from "lucide-react";
import { BrandIcon, Button, Surface, layoutStyle, resolveSurfaceSlot } from "@/foundation";
import { SectionShell } from "./SectionShell";

export function ContactSection({ content, presentation }) {
  const itemSurface = resolveSurfaceSlot(presentation?.surfaces?.item, "legal.panelSoft");
  const items = [
    { icon: <Phone size={18} />, label: "Telefone", value: content.contact.phone, href: content.contact.whatsappHref },
    { icon: <Mail size={18} />, label: "E-mail", value: content.contact.email, href: `mailto:${content.contact.email}` },
    { icon: <MapPin size={18} />, label: "Endereco", value: content.contact.address, href: content.contact.mapsHref },
  ];

  return (
    <SectionShell className="contact" id="contato" layout={presentation?.layout} title={content.finalCta.title} description={content.finalCta.description}>
      <div className="contactGrid layoutGrid" style={layoutStyle(presentation?.layout)}>
        {items.map((item) => (
          <Surface {...itemSurface} className="contactItem" data-layout-item key={item.label}>
            {item.icon}
            <span>{item.label}</span>
            <a href={item.href}>{item.value}</a>
          </Surface>
        ))}
      </div>
      <a href={content.contact.whatsappHref}>
        <Button icon={<BrandIcon name="whatsapp" size="sm" />} size="lg">{content.finalCta.cta}</Button>
      </a>
    </SectionShell>
  );
}

import { Heading, Text, layoutStyle } from "@/foundation";

export function SectionShell({ children, className = "", description, eyebrow, id, layout, title }) {
  return (
    <section className={`section ${className}`} data-reveal id={id} style={layoutStyle(layout)}>
      <div className="sectionHeader">
        {eyebrow ? <Text as="span" className="eyebrow">{eyebrow}</Text> : null}
        {title ? <Heading level={2}>{title}</Heading> : null}
        {description ? <Text as="p" tone="muted">{description}</Text> : null}
      </div>
      {children}
    </section>
  );
}

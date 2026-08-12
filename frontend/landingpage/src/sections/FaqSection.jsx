import { Text } from "@/foundation";
import { SectionShell } from "./SectionShell";

export function FaqSection({ content }) {
  return (
    <SectionShell className="faq" eyebrow={content.faq.eyebrow} id="faq" title={content.faq.title}>
      <div className="faqList">
        {content.faq.items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <Text as="p" tone="muted">{item.answer}</Text>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}

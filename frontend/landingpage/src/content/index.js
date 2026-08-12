import { enUSContent } from "./en-US";
import { ptBRContent } from "./pt-BR";

const contentByLocale = {
  "pt-BR": ptBRContent,
  "en-US": enUSContent,
};

export function getLandingContent(locale = "pt-BR") {
  return contentByLocale[locale] || ptBRContent;
}

export { ptBRContent };

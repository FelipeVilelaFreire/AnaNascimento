import { LandingPage } from "@/LandingPage";
import { getLandingContent } from "@/content";

export default function Page() {
  return <LandingPage content={getLandingContent("pt-BR")} />;
}

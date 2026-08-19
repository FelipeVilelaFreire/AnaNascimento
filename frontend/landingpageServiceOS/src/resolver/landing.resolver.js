import { ptBR } from "../manifest/locales/pt-BR.js";
import { semiComposedManifest } from "../manifest/design-system/semiComposed.manifest.js";
import { uiManifest } from "../manifest/design-system/ui.manifest.js";

export class LandingResolver {
  static getStrings(keyPath) {
    if (!keyPath) return "";
    const keys = keyPath.split(".");
    return keys.reduce((acc, key) => (acc && acc[key] ? acc[key] : keyPath), ptBR);
  }

  static getRecipe(category, recipeKey) {
    if (semiComposedManifest[category] && semiComposedManifest[category][recipeKey]) {
      return semiComposedManifest[category][recipeKey];
    }
    return null;
  }

  static getUIPreset(familyKey, sizeKey = "md") {
    if (uiManifest[familyKey] && uiManifest[familyKey][sizeKey]) {
      return uiManifest[familyKey][sizeKey];
    }
    return { height: sizeKey, size: sizeKey };
  }
}

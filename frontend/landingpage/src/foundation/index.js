export { AnaFoundationProvider } from "./AnaFoundationProvider";
export { anaAppShell } from "./appShell";
export { anaFoundationConfig } from "./config";
export { anaSemiComposed } from "./semicomposed";
export { anaTheme } from "./theme";
export { anaUi } from "./ui";
export { headerLayoutStyle, layoutStyle, resolveLayoutPreset, resolveScrollStart } from "./layout";
export { resolveSurfaceSlot } from "./surfaceSlots";
import { headerLayoutStyle, layoutStyle, resolveLayoutPreset, resolveScrollStart } from "./layout";
import { resolveSurfaceSlot } from "./surfaceSlots";

export const anaAppShellRuntime = {
  headerLayoutStyle,
  layoutStyle,
  resolveLayoutPreset,
  resolveScrollStart,
  resolveSurfaceSlot,
};

export {
  Badge,
  BrandIcon,
  Button,
  Card,
  CardButton,
  Divider,
  EmptyState,
  FoundationUiProvider,
  Heading,
  Icon,
  Input,
  Surface,
  Text,
  Textarea,
  Toggle,
} from "@/serviceos/ui-web";

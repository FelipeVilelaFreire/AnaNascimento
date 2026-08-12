"use client";

import { FoundationUiProvider } from "@/serviceos/ui-web";
import { anaFoundationConfig } from "./config";

export function AnaFoundationProvider({ children, mode = "light" }) {
  const ui = {
    ...anaFoundationConfig.ui,
    theme: {
      ...anaFoundationConfig.ui.theme,
      defaultMode: mode,
    },
  };

  return <FoundationUiProvider ui={ui}>{children}</FoundationUiProvider>;
}

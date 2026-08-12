"use client";

import { useState } from "react";
import { AnaFoundationProvider, anaAppShell, anaAppShellRuntime } from "@/foundation";
import { anaAppShellContract } from "@/contracts/appShell.contract";
import { getVisibleLandingSections } from "@/presentation/sectionRegistry";
import { ContractAppShell } from "@serviceos/app-shell-web/contract-shell";

export function LandingPage({ content }) {
  const [mode, setMode] = useState("light");
  const visibleSections = getVisibleLandingSections();
  const appShell = {
    brand: anaAppShell.brand,
    navigation: anaAppShell.navigation,
    contract: anaAppShellContract,
  };

  return (
    <AnaFoundationProvider mode={mode}>
      <div className="page" data-theme-mode={mode}>
        <ContractAppShell
          brand={appShell.brand}
          contact={content.contact}
          contract={appShell.contract}
          mode={mode}
          navigation={appShell.navigation}
          onThemeModeChange={setMode}
          practiceAreas={content.practiceAreas.items}
          runtime={anaAppShellRuntime}
        >
          <main>
            {visibleSections.map(({ Component, config, key }) => (
              <Component content={content} key={key} presentation={config} />
            ))}
          </main>
        </ContractAppShell>
      </div>
    </AnaFoundationProvider>
  );
}

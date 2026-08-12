"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal-visible", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

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

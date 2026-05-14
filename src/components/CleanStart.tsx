"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CleanStart() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Disable browser scroll restoration to prevent the "jump"
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Force scroll to top on EVERY route change
    // This ensures all KineticReveal observers are correctly triggered
    window.scrollTo(0, 0);

    // 3. Special handling for the "Back" button (popstate)
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [pathname]);

  return null;
}

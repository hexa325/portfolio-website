"use client";

import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    // 1. Disable the browser's automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Force scroll to the very top on mount/refresh
    // We use a small timeout to ensure the browser has finished its initial layout
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

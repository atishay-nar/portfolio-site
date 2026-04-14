"use client";

import { useEffect, useRef, useState } from "react";

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? "");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    function findActive(): string {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 4) {
        return sectionIds[sectionIds.length - 1] ?? sectionIds[0] ?? "";
      }

      const midpoint = window.innerHeight / 2;
      let closest = sectionIds[0] ?? "";
      let closestDist = Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const sectionMid = (rect.top + rect.bottom) / 2;
        const dist = Math.abs(sectionMid - midpoint);
        if (dist < closestDist) {
          closestDist = dist;
          closest = id;
        }
      }
      return closest;
    }

    function onScroll() {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        setActiveSection(findActive());
      });
    }

    setActiveSection(findActive());
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [sectionIds]);

  return activeSection;
}

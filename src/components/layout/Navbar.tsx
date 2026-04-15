"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Navbar() {
  const activeSection = useActiveSection(
    NAV_LINKS.map((l) => l.href.replace("#", ""))
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[var(--background)]/80 border-b border-neutral-200 dark:border-neutral-800 shadow-[var(--shadow-sm)]">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="#hero"
          className="font-semibold text-sm tracking-tight hover:opacity-70 transition-opacity"
        >
          Atishay Narayanan.
        </Link>

        <ul className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors relative ${
                    isActive
                      ? "text-[var(--accent)] font-medium"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-[var(--foreground)]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}

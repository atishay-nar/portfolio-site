import * as Fa from "react-icons/fa6";
import * as Si from "react-icons/si";
import type { SocialLink } from "@/types";

interface SocialIconProps {
  link: SocialLink;
  size?: "sm" | "md";
}

export default function SocialIcon({ link, size = "sm" }: SocialIconProps) {
  const iconSize = size === "md" ? "w-5 h-5" : "w-4 h-4";

  const allIcons = {
    ...Fa,
    ...Si,
  } as Record<string, React.ComponentType<{ className?: string }>>;

  const Icon = allIcons[link.iconKey];

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className="text-[var(--accent)] hover:opacity-70 transition-opacity"
    >
      {Icon ? <Icon className={iconSize} /> : <span className="text-xs">{link.label}</span>}
    </a>
  );
}

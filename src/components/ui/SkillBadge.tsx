import * as Si from "react-icons/si";
import type { Skill } from "@/types";

interface SkillBadgeProps {
  skill: Skill;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  // Dynamically resolve the icon from react-icons/si
  const Icon = (Si as Record<string, React.ComponentType<{ className?: string }>>)[skill.iconKey];

  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800/60 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
      {Icon ? <Icon className="w-4 h-4 shrink-0 text-[var(--accent)]" /> : null}
      <span>{skill.label}</span>
    </div>
  );
}

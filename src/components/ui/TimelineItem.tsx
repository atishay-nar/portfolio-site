interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  bullets?: string[];
  notes?: string;
  isLast?: boolean;
  logo?: string;
}

export default function TimelineItem({
  title,
  subtitle,
  period,
  location,
  bullets,
  notes,
  isLast = false,
  logo,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[7px] top-6 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />
      )}
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-neutral-400 dark:border-neutral-600 bg-[var(--background)]" />

      <div className="pb-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <div className="flex items-center gap-2">
            {logo && (
              <img src={logo} alt="" aria-hidden="true" className="w-7 h-7 object-contain rounded-sm" />
            )}
            <h3 className="font-medium text-[var(--foreground)]">{title}</h3>
          </div>
          <span className="text-xs text-neutral-500 dark:text-neutral-400 shrink-0">{period}</span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
          {subtitle}
          {location && <span className="text-neutral-400 dark:text-neutral-500"> · {location}</span>}
        </p>
        {notes && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 italic">{notes}</p>
        )}
        {bullets && bullets.length > 0 && (
          <ul className="mt-3 space-y-1.5 list-none">
            {bullets.map((b, i) => (
              <li key={i} className="text-sm text-neutral-600 dark:text-neutral-400 flex gap-2">
                <span className="text-neutral-400 shrink-0">—</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

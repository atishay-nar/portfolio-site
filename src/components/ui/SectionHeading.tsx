interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-neutral-500 dark:text-neutral-400 text-sm">{subtitle}</p>
      )}
      <div className="mt-3 h-0.5 w-12 bg-[var(--accent)]" />
    </div>
  );
}

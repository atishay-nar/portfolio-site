import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import type { ResearchPaper } from "@/types";

interface ResearchCardProps {
  paper: ResearchPaper;
}

export default function ResearchCard({ paper }: ResearchCardProps) {
  return (
    <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 shadow-[var(--shadow-sm)] hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-[var(--shadow-card-hover)] transition-[border-color,box-shadow] duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
        <div className="flex items-start gap-2">
          <h3 className="font-medium text-sm text-[var(--foreground)] leading-snug">
            {paper.title}
          </h3>
        </div>
        <span className="text-xs text-neutral-400 shrink-0">{paper.year}</span>
      </div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{paper.authors}</p>
      <p className="text-xs font-medium text-neutral-600 dark:text-neutral-300 italic mb-3">
        {paper.venue}
      </p>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">
        {paper.abstract}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
        {paper.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {paper.paperUrl && (
          <a
            href={paper.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs hover:opacity-70 transition-opacity"
            style={{ color: "var(--accent)" }}
          >
            <FaArrowUpRightFromSquare className="w-3 h-3" />
            Paper
          </a>
        )}
        {paper.codeUrl && (
          <a
            href={paper.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 hover:text-[var(--foreground)] transition-colors"
          >
            <FaGithub className="w-3 h-3 text-[var(--accent)]" />
            Code
          </a>
        )}
      </div>
      {paper.status === "in-progress" && (
        <div className="flex items-center gap-2 mt-3">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--accent)" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--accent)" }} />
          </span>
          <span className="text-xs" style={{ color: "var(--accent)" }}>In Progress</span>
        </div>
      )}
    </div>
  );
}

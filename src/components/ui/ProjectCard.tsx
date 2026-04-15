"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="group flex flex-col p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 shadow-[var(--shadow-sm)] hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-[var(--shadow-card-hover)] transition-[border-color,box-shadow] duration-200 h-full"
    >
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-medium text-sm text-[var(--foreground)]">{project.title}</h3>
          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub: ${project.title}`}
                className="text-[var(--accent)] hover:opacity-70 transition-opacity"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live site: ${project.title}`}
                className="hover:opacity-70 transition-opacity"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="16" rx="3" fill="#C49A3C"/>
                  <text x="8" y="11.5" fontFamily="Georgia, serif" fontSize="7" fontWeight="700" fill="#0e2318" textAnchor="middle">RS</text>
                </svg>
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.techTags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

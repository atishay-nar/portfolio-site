import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillBadge from "@/components/ui/SkillBadge";
import TimelineItem from "@/components/ui/TimelineItem";
import { skills } from "@/data/skills";
import { education } from "@/data/education";
import { SOCIAL_LINKS } from "@/lib/constants";
import SocialIcon from "@/components/ui/SocialIcon";
import { HiArrowDownTray } from "react-icons/hi2";

export default function Hero() {
  return (
    <SectionWrapper id="hero" className="pt-32 relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--hero-glow)" }}
      />
      {/* Name & tagline */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-3">
          Atishay Narayanan
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
          Math student at Princeton working on cooperative game theory and quantum machine learning.
          Devoted to pushing the frontier at the intersection of math and computer science.
        </p>
        {/* Social links + Resume */}
        <div className="flex items-center gap-4 mt-6">
          {SOCIAL_LINKS.map((link) => (
            <SocialIcon key={link.label} link={link} size="md" />
          ))}
          <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700" />
          <a
            href="/Narayanan_Atishay_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <HiArrowDownTray className="w-4 h-4 text-[var(--accent)]" />
            Resume
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Skills */}
        <div>
          <h2 className="text-base font-semibold mb-5">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill.label} skill={skill} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-base font-semibold mb-5">Education</h2>
          <div>
            {education.map((edu, i) => (
              <TimelineItem
                key={edu.id}
                title={edu.institution}
                subtitle={edu.degree}
                period={edu.period}
                location={edu.location}
                notes={edu.notes}
                logo={edu.logo}
                isLast={i === education.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

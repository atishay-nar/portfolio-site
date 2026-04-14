import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        title="Work Experience"
      />
      <div>
        {experience.map((job, i) => (
          <TimelineItem
            key={job.id}
            title={job.role}
            subtitle={job.company}
            period={job.period}
            location={job.location}
            bullets={job.bullets}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

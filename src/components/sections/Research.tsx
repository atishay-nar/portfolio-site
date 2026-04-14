import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ResearchCard from "@/components/ui/ResearchCard";
import { research } from "@/data/research";

export default function Research() {
  return (
    <SectionWrapper id="research">
      <SectionHeading
        title="Research"
      />
      <div className="grid gap-5">
        {research.map((paper) => (
          <ResearchCard key={paper.id} paper={paper} />
        ))}
      </div>
    </SectionWrapper>
  );
}

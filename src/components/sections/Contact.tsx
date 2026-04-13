import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import SocialIcon from "@/components/ui/SocialIcon";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Get in touch"
        subtitle="I'm always open to interesting conversations and opportunities."
      />
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <ContactForm />
        </div>
        <div className="md:col-span-2">
          <div>
            <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-4">
              Find me on
            </p>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => (
                <div key={link.label} className="flex items-center gap-3">
                  <SocialIcon link={link} size="md" />
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-[var(--foreground)] transition-colors"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

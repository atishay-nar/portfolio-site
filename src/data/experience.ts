import type { WorkExperience } from "@/types";

export const experience: WorkExperience[] = [
  {
    id: "sensip",
    company: "SenSIP Lab, Arizona State University",
    role: "Quantum Machine Learning Researcher",
    period: "May 2025 – Jul 2025",
    location: "Tempe, AZ",
    bullets: [
      "Developed Quantum-Classical hybrid GPT models for image generation using PyTorch and Pennylane.",
      "Demonstrated feasibility of quantum self-attention for transformer models.",
      "Created one of the first applications to integrate a Quantum Mixed-State Attention Network.",
      "Observed a 10% increase in PSNR compared to classical baseline models.",
    ],
  },
  {
    id: "princeton-ta",
    company: "Princeton University Computer Science Lab",
    role: "Teaching Assistant",
    period: "Sep 2024 – Present",
    location: "Princeton, NJ",
    bullets: [
      "Teach 250+ new CS students algorithms and data structures concepts in Java.",
      "Guide students through object-oriented design principles.",
      "Assist students with debugging and project architecture.",
    ],
  },
  {
    id: "sphere",
    company: "SPHERE Investments",
    role: "Investment Associate Intern",
    period: "May 2024 – Jul 2024",
    location: "Miami, FL",
    bullets: [
      "Designed an exhaustive database of 1000+ potential limited partners for a healthcare real estate asset management firm.",
      "Surveyed international clinical services and formulated an extensive report on investments into patient care hotels.",
      "Conducted due diligence with healthcare executives to evaluate hospital resource allocation and patient outcomes.",
    ],
  },
];

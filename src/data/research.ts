import type { ResearchPaper } from "@/types";

export const research: ResearchPaper[] = [
  {
    id: "shapley-jp",
    title: "Weighted Shapley Value Without Symmetry or Exogenous Weights",
    authors: "Atishay Narayanan",
    venue: "Princeton University — Junior Paper, Mathematics",
    year: 2026,
    status: "in-progress",
    abstract:
      "An axiomatization of the weighted Shapley value that avoids assuming symmetry or exogenously supplied weights. Using Efficiency, Consistency, Null Player, and Linearity on totally monotone cooperative games, I prove that any conforming allocation is the weighted Shapley value for some endogenously determined weight vector — with the proof proceeding via the Möbius transform.",
    tags: ["Game Theory", "Cooperative Games", "Mathematics", "Shapley Value"],
  },
  {
    id: "quantum-gpt",
    title: "Quantum-Classical Hybrid GPT Models for Image Generation",
    authors: "Atishay Narayanan",
    venue: "SenSIP Lab, Arizona State University",
    year: 2025,
    abstract:
      "Developed Quantum-Classical hybrid GPT architectures for image generation, integrating a novel Quantum Mixed-State Attention Network. Demonstrated the feasibility of quantum self-attention within transformer models and achieved a 10% improvement in PSNR over purely classical baselines using PyTorch and Pennylane.",
    paperUrl: "/papers/REU_Summer2025_Final_Report.pdf",
    tags: ["Quantum Computing", "Machine Learning", "Transformers", "Image Generation", "PyTorch"],
  },
  {
    id: "confirmation-bias",
    title: "Advantages of Confirmation Bias in Bayesian Inference",
    authors: "Atishay Narayanan",
    venue: "Princeton University — Independent Research",
    year: 2025,
    abstract:
      "Designed and simulated Bayesian agents with asymmetric learning rates to model confirmation bias in learning stationary and non-stationary Bernoulli distributions. Evaluated agents on convergence speed and accuracy via MSE over 1000+ trials. Demonstrated that low-degree confirmation bias (10–25%) improves short-term convergence but degrades long-term accuracy, showing that its advantages are time-scale dependent.",
    paperUrl: "/papers/PSY_360_Final_Paper.pdf",
    tags: ["Bayesian Inference", "Cognitive Modeling", "Python", "Simulation"],
  },
];

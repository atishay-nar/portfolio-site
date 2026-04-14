import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "momentum-trading",
    title: "Momentum Trading System",
    description:
      "Built a mid-frequency momentum signal trading system in Python with 20+ years of historical DJIA data. Designed a backtester to evaluate Sharpe ratios, drawdown, and turnover across multiple strategies and signals.",
    techTags: ["Python", "Pandas", "Backtesting", "Finance"],
    githubUrl: "https://github.com/atishay-nar/momentum",
    featured: true,
  },
  {
    id: "rs-trace",
    title: "rs-trace",
    description:
      "A full-stack research paper tracking app with AI-powered relevance scoring via embeddings and semantic recommendations. Integrates with the Semantic Scholar and OpenAI APIs.",
    techTags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI"],
    githubUrl: "https://github.com/atishay-nar/rs-trace",
    featured: true,
  },
];

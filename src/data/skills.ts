import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Languages
  { label: "Python", iconKey: "SiPython", category: "language" },
  { label: "Java", iconKey: "SiJava", category: "language" },
  { label: "JavaScript", iconKey: "SiJavascript", category: "language" },
  { label: "SQL", iconKey: "SiMysql", category: "language" },
  { label: "HTML / CSS", iconKey: "SiHtml5", category: "language" },

  // Libraries
  { label: "PyTorch", iconKey: "SiPytorch", category: "framework" },
  { label: "Pennylane", iconKey: "SiAtom", category: "framework" },
  { label: "Pandas", iconKey: "SiPandas", category: "framework" },
  { label: "NumPy", iconKey: "SiNumpy", category: "framework" },
  { label: "Scikit-learn", iconKey: "SiScikitlearn", category: "framework" },

  // Tools
  { label: "Git", iconKey: "SiGit", category: "tool" },
  { label: "AWS", iconKey: "SiAmazonwebservices", category: "tool" },
  { label: "Jupyter", iconKey: "SiJupyter", category: "tool" },
  { label: "VS Code", iconKey: "SiVisualstudiocode", category: "tool" },
  { label: "IntelliJ", iconKey: "SiIntellijidea", category: "tool" },
];

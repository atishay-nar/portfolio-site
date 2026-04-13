import type { NavLink, SocialLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/atishay-nar",
    iconKey: "FaGithub",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/atishay-narayanan",
    iconKey: "FaLinkedin",
  },
];

export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";

export const SITE_META = {
  name: "Atishay Narayanan",
  title: "Atishay Narayanan — Portfolio",
  description:
    "Math & CS student at Princeton researching quantum machine learning, building software, and teaching algorithms.",
  url: "https://atishay.dev",
  ogImage: "/og-image.png",
};

export const EMAIL = "atishay@princeton.edu";

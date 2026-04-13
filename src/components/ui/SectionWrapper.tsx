"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SectionWrapper({ id, className = "", children }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`py-20 max-w-5xl mx-auto px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({
  id,
  children,
  className = "",
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 ${
        dark ? "bg-surface" : "bg-background"
      } ${className}`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeInUp} className="mb-4">
      <span className="inline-block border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        {children}
      </span>
    </motion.div>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      variants={fadeInUp}
      className={`heading-font text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export function SectionDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.p
      variants={fadeInUp}
      className={`mt-5 max-w-2xl text-lg leading-relaxed text-muted ${className}`}
    >
      {children}
    </motion.p>
  );
}

export function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

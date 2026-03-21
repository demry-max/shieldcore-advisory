"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Calculator,
  Split,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Section, {
  SectionLabel,
  SectionHeading,
  SectionDescription,
} from "@/components/ui/Section";
import { fadeInUp } from "@/lib/animations";

const pillars = [
  {
    icon: Layers,
    title: "Structure Design",
    desc: "Build the right corporate architecture for control, liability separation, and SEC compliance in the Philippines.",
  },
  {
    icon: Calculator,
    title: "Tax Positioning",
    desc: "Optimize your tax posture through BIR-compliant and defensible entity frameworks that minimize exposure.",
  },
  {
    icon: Split,
    title: "Asset Separation",
    desc: "Create clear boundaries between personal wealth and business obligations under Philippine law.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Continuity Planning",
    desc: "Anticipate threats and build resilience into your ownership, governance, and succession systems.",
  },
];

export default function Solution() {
  return (
    <Section id="solution">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left Content */}
        <div>
          <SectionLabel>Our Methodology</SectionLabel>
          <SectionHeading>The ShieldCore System</SectionHeading>
          <SectionDescription>
            We create integrated protection systems designed to prevent problems
            before they emerge. Built specifically for the Philippine business
            environment — our approach combines structure, tax strategy, and
            legal architecture into a unified defense framework.
          </SectionDescription>

          {/* Video embed placeholder */}
          <motion.div variants={fadeInUp} className="mt-8">
            <div className="relative aspect-video overflow-hidden border border-border/40 bg-surface">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="How ShieldCore Advisory protects Philippine businesses"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4">
                <p className="text-xs font-medium text-gold/70">
                  Watch: How Business Structuring Protects Philippine
                  Entrepreneurs
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:text-gold-light"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Right Pillars */}
        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={fadeInUp}
              className="group relative border border-border/50 bg-surface p-6 transition-all duration-300 hover:border-gold/20"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-gold/20 bg-gold/5">
                  <pillar.icon className="h-5 w-5 text-gold" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

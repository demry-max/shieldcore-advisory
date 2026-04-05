"use client";

import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Building,
  Calculator,
  Lock,
  Users,
  ArrowUpRight,
} from "lucide-react";
import Section, { SectionLabel, SectionHeading, SectionDescription } from "@/components/ui/Section";
import { fadeInUp } from "@/lib/animations";

const services = [
  {
    icon: Search,
    title: "Business Risk Scan",
    description:
      "Identify hidden structural, tax, and exposure risks before they become problems — aligned with Philippine regulatory requirements.",
    detail: "BIR, SEC, and liability diagnostic for your business.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Immunity Blueprint",
    description:
      "A full strategic framework for protecting your business, assets, and long-term interests in the Philippine market.",
    detail: "Your complete defense roadmap, from structure to succession.",
  },
  {
    icon: Building,
    title: "Corporate Structuring",
    description:
      "Build the right entity framework — sole proprietorship, partnership, or corporation — for control, efficiency, and resilience under Philippine law.",
    detail: "SEC-compliant structures designed for your goals.",
  },
  {
    icon: Calculator,
    title: "Tax Optimization",
    description:
      "Reduce unnecessary BIR exposure while maintaining compliant and defensible structures under the Philippine Tax Code.",
    detail: "Legally sound strategies aligned with CREATE Act benefits.",
  },
  {
    icon: Lock,
    title: "Asset Protection",
    description:
      "Separate personal wealth from business liability through intelligent structuring under the Revised Corporation Code.",
    detail: "Ensure your family wealth remains protected.",
  },
  {
    icon: Users,
    title: "Family Business Structuring",
    description:
      "Design long-term ownership and continuity systems for foreign-owned family businesses and generational enterprises.",
    detail: "Governance, succession, and transition frameworks.",
  },
];

export default function Services() {
  return (
    <Section id="services" dark>
      <div className="text-center">
        <SectionLabel>What We Do</SectionLabel>
        <SectionHeading className="mx-auto">
          Advisory Services Built for
          <br />
          Philippine Business Protection
        </SectionHeading>
        <SectionDescription className="mx-auto">
          Each engagement is designed around your specific business, risk
          profile, and long-term objectives — whether you are a local
          entrepreneur, a family conglomerate, or a foreign investor
          operating in the Philippines.
        </SectionDescription>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeInUp}
            className="group relative overflow-hidden border border-border/40 bg-background/40 p-8 transition-all duration-500 hover:border-gold/30 hover:bg-charcoal/20"
          >
            {/* Arrow accent */}
            <div className="absolute right-4 top-4">
              <ArrowUpRight className="h-4 w-4 text-border/60 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-gold/60" />
            </div>

            <div className="mb-5 flex h-12 w-12 items-center justify-center border border-gold/20 bg-gold/5 transition-colors duration-300 group-hover:border-gold/40 group-hover:bg-gold/10">
              <service.icon className="h-5 w-5 text-gold" />
            </div>

            <h3 className="mb-3 text-lg font-semibold tracking-tight text-foreground">
              {service.title}
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
            <p className="text-xs font-medium tracking-wide text-gold/60">
              {service.detail}
            </p>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold/60 to-transparent transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

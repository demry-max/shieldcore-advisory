"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Calculator, Scale } from "lucide-react";
import Section, {
  SectionLabel,
  SectionHeading,
  SectionDescription,
} from "@/components/ui/Section";
import { fadeInUp } from "@/lib/animations";

const founders = [
  {
    name: "Demry Cheng",
    role: "Strategy & Business Development",
    credential: "Co-Founder",
    focus: "Ecosystem Architecture, Growth Strategy, Market Positioning",
    icon: Briefcase,
    image: "/images/team-demry.jpg",
    description:
      "Leads strategic direction and business development, building the client ecosystem across the Philippines. Demry ensures every engagement delivers measurable structural value and long-term protection for clients navigating the complexities of Philippine commerce.",
  },
  {
    name: "CPA Jomari Gervacio",
    role: "Taxation & Structuring",
    credential: "Certified Public Accountant",
    focus: "BIR Tax Structuring, Compliance Logic, Financial Architecture",
    icon: Calculator,
    image: "/images/team-joma.jpg",
    description:
      "A licensed Certified Public Accountant who designs tax-efficient structures aligned with the Philippine Tax Code and CREATE Act. Jomari ensures every framework meets BIR compliance standards while maximizing protection and minimizing unnecessary tax exposure.",
  },
  {
    name: "Atty. James Earl Chew",
    role: "Legal Architecture & Risk",
    credential: "Attorney-at-Law",
    focus: "Revised Corporation Code, SEC Compliance, Corporate Documentation",
    icon: Scale,
    image: "/images/team-james.jpg",
    description:
      "A practicing Attorney-at-Law who architects the legal foundation of every structure under Philippine corporate law. Atty. Chew ensures airtight documentation, SEC compliance, risk protection, and full regulatory adherence for every client engagement.",
  },
];

export default function About() {
  return (
    <Section id="about" dark>
      <SectionLabel>Our Team</SectionLabel>
      <SectionHeading>
        Built on Strategic, Legal,
        <br />
        and Financial Expertise
      </SectionHeading>
      <SectionDescription>
        Vanguard Advisory brings together Philippine business strategy, tax
        intelligence, and legal structuring to help entrepreneurs and foreign
        investors operate with confidence and protection in the Philippine
        market.
      </SectionDescription>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {founders.map((founder) => (
          <motion.div
            key={founder.name}
            variants={fadeInUp}
            className="group relative overflow-hidden border border-border/40 bg-background/30 transition-all duration-500 hover:border-gold/20"
          >
            {/* Team image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={founder.image}
                alt={`${founder.name} — ${founder.role}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-background/80 backdrop-blur-sm">
                  <founder.icon className="h-4 w-4 text-gold" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">
                {founder.role}
              </p>
              <p className="mt-1.5 inline-block border border-gold/20 bg-gold/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-gold/70">
                {founder.credential}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {founder.description}
              </p>
              <div className="mt-4 border-t border-border/30 pt-4">
                <p className="text-xs font-medium tracking-wide text-muted/70">
                  {founder.focus}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

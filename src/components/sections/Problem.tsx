"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AlertTriangle, Scale, Building2, UserX } from "lucide-react";
import Section, {
  SectionLabel,
  SectionHeading,
  SectionDescription,
} from "@/components/ui/Section";
import { fadeInUp } from "@/lib/animations";

const risks = [
  {
    icon: Scale,
    title: "Legal Exposure",
    desc: "Business liabilities that extend to personal assets due to weak corporate separation — a common issue under Philippine corporate law.",
  },
  {
    icon: AlertTriangle,
    title: "Tax Vulnerability",
    desc: "Inefficient structures that create unnecessary BIR scrutiny, penalties, and compliance risks that could have been prevented.",
  },
  {
    icon: UserX,
    title: "Partner & Dispute Risk",
    desc: "Ownership and governance gaps that leave businesses exposed during internal conflicts or family succession disagreements.",
  },
  {
    icon: Building2,
    title: "Structural Fragility",
    desc: "Business setups that cannot withstand economic shifts, SEC regulatory changes, or succession events unique to the Philippine market.",
  },
];

export default function Problem() {
  return (
    <Section id="problem" dark>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Left content */}
        <div>
          <SectionLabel>The Risk You Do Not See</SectionLabel>
          <SectionHeading>
            Most Businesses in the
            <br />
            Philippines Are Structurally Exposed
          </SectionHeading>
          <SectionDescription>
            Many foreign entrepreneurs and investors focus on growth but
            overlook the structural risks that can silently erode wealth. Tax
            exposure from the BIR, legal claims under the Revised Corporation
            Code, partner disputes, or even business success itself can threaten
            personal assets when the foundation is weak.
          </SectionDescription>

          {/* Highlighted Quote */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 border-l-2 border-gold pl-6"
          >
            <p className="heading-font text-xl italic leading-relaxed text-foreground sm:text-2xl">
              The biggest risk is not your business.
              <br />
              <span className="text-gold">
                It is how your business is structured.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Right — Manila skyline image + risk cards */}
        <div>
          <motion.div variants={fadeInUp} className="relative mb-8 overflow-hidden">
            <Image
              src="/images/manila-skyline.png"
              alt="Manila business district skyline"
              width={1200}
              height={400}
              className="w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
          </motion.div>

          {/* Risk Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {risks.map((risk) => (
              <motion.div
                key={risk.title}
                variants={fadeInUp}
                className="group border border-border/50 bg-background/50 p-5 transition-all duration-300 hover:border-gold/20 hover:bg-charcoal/30"
              >
                <risk.icon className="mb-3 h-5 w-5 text-gold/70 transition-colors group-hover:text-gold" />
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  {risk.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted">{risk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

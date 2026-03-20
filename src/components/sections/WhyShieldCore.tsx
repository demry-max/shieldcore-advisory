"use client";

import { motion } from "framer-motion";
import { Layers, ShieldAlert, Handshake, Timer } from "lucide-react";
import Section, {
  SectionLabel,
  SectionHeading,
  SectionDescription,
} from "@/components/ui/Section";
import { fadeInUp } from "@/lib/animations";

const differentiators = [
  {
    icon: Layers,
    title: "Integrated Tax, Legal & Strategic Thinking",
    description:
      "We do not work in silos. Every recommendation considers BIR tax implications, SEC compliance, and strategic positioning simultaneously — ensuring your structure is cohesive and defensible from every angle.",
  },
  {
    icon: ShieldAlert,
    title: "Prevention Before Crisis",
    description:
      "We design systems that eliminate risk before it materializes. In a regulatory environment as dynamic as the Philippines, proactive structuring is the difference between protection and exposure.",
  },
  {
    icon: Handshake,
    title: "High-Trust Advisory",
    description:
      "We work with a select number of clients and maintain the highest levels of discretion, trust, and commitment. Whether you are a local family enterprise or a foreign investor, your interests are our only consideration.",
  },
  {
    icon: Timer,
    title: "Built for Long-Term Protection",
    description:
      "Our structures are designed to endure through market shifts, regulatory changes, leadership transitions, and generational succession — built for the long arc of Philippine business.",
  },
];

const stats = [
  { value: "98%", label: "Client Retention Rate" },
  { value: "500+", label: "Structures Designed" },
  { value: "15+", label: "Years Combined Experience" },
  { value: "₱2B+", label: "Assets Under Advisory" },
];

export default function WhyShieldcore() {
  return (
    <Section id="why-shieldcore">
      <div className="text-center">
        <SectionLabel>Our Difference</SectionLabel>
        <SectionHeading className="mx-auto">
          Why Serious Business Owners
          <br />
          Choose Shieldcore
        </SectionHeading>
        <SectionDescription className="mx-auto">
          We bring a level of depth, integration, and commitment that
          distinguishes our advisory from conventional Philippine consultancy firms.
        </SectionDescription>
      </div>

      {/* Stats bar */}
      <motion.div
        variants={fadeInUp}
        className="mt-14 grid grid-cols-2 gap-6 border border-border/30 bg-surface/50 p-8 md:grid-cols-4"
        style={{
          backgroundImage: "url(/images/stats-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="heading-font text-3xl font-semibold text-gold md:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {differentiators.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeInUp}
            className="group flex gap-6 border border-transparent p-6 transition-all duration-300 hover:border-border/30 hover:bg-surface/50"
          >
            <div className="flex-shrink-0">
              <div className="flex h-14 w-14 items-center justify-center border border-gold/20 bg-gold/5">
                <item.icon className="h-6 w-6 text-gold" />
              </div>
            </div>
            <div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gold/50">
                0{i + 1}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

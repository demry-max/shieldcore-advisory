"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt=""
          fill
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative mx-auto max-w-4xl px-6 text-center lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-block border border-gold/20 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Take Action
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="heading-font text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          Don&apos;t Wait for a Problem
          <br />
          <span className="text-gold">to Discover Your Risk</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          In the Philippines, the cost of fixing a structural problem is always
          higher than preventing one. Take the first step toward comprehensive
          protection for your business and personal wealth.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#contact" size="lg">
            Get Your Risk Scan
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            Speak With Our Team
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

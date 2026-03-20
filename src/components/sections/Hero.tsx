"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const supportPoints = [
  "Tax Efficiency",
  "Asset Protection",
  "Corporate Structuring",
  "Family Business Planning",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Multi-layer overlay for premium dark look */}
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Gold glow accent */}
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center lg:px-8"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-flex items-center gap-2 border border-gold/20 bg-gold/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
            <Shield className="h-3.5 w-3.5" />
            Business Structuring &amp; Risk Advisory
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="max-w-5xl heading-font text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Protect Your Wealth
          <br />
          <span className="text-gold">Before Problems Begin</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          We design business structures that reduce tax exposure, protect
          personal assets, and ensure business risk stays contained —
          built for entrepreneurs across the Philippines.
        </motion.p>

        {/* Location badge */}
        <motion.div variants={fadeInUp} className="mt-4">
          <span className="inline-flex items-center gap-1.5 text-sm text-gold/70">
            <MapPin className="h-3.5 w-3.5" />
            Based in Metro Manila, serving clients nationwide
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#contact" size="lg">
            Get a Risk Scan
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            Book Consultation
          </Button>
        </motion.div>

        {/* Support Points */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {supportPoints.map((point, i) => (
            <div key={point} className="flex items-center gap-3">
              {i > 0 && (
                <div className="hidden h-4 w-px bg-border sm:block" />
              )}
              <span className="text-sm font-medium tracking-wide text-muted">
                {point}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeInUp}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-border/60 pt-2"
          >
            <div className="h-1.5 w-1 rounded-full bg-gold/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

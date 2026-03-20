"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import Section, { SectionLabel, SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: integrate with form service
    console.log("Form submitted:", formData);
  };

  return (
    <Section id="contact" dark>
      <div className="grid gap-16 lg:grid-cols-5">
        {/* Left Info */}
        <div className="lg:col-span-2">
          <SectionLabel>Get In Touch</SectionLabel>
          <SectionHeading>
            Start Your
            <br />
            Protection Journey
          </SectionHeading>

          <motion.p
            variants={fadeInUp}
            className="mt-5 text-base leading-relaxed text-muted"
          >
            Whether you need a risk assessment, a structural review, or a
            comprehensive protection framework, we are here to help you take the
            first step.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center border border-gold/20 bg-gold/5">
                <Mail className="h-4 w-4 text-gold" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Email
                </p>
                <p className="text-sm text-foreground">
                  consult@vanguardadvisory.ph
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center border border-gold/20 bg-gold/5">
                <Phone className="h-4 w-4 text-gold" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Phone / WhatsApp
                </p>
                <p className="text-sm text-foreground">+63 XXX XXX XXXX</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center border border-gold/20 bg-gold/5">
                <MapPin className="h-4 w-4 text-gold" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Location
                </p>
                <p className="text-sm text-foreground">
                  Metro Manila, Philippines
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Form */}
        <motion.div variants={fadeInUp} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="border border-border/40 bg-background/30 p-8 md:p-10"
          >
            <h3 className="mb-8 text-lg font-semibold text-foreground">
              Request a Consultation
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-border/60 bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/40 focus:border-gold/40"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-border/60 bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/40 focus:border-gold/40"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
                >
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-border/60 bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/40 focus:border-gold/40"
                  placeholder="+63 XXX XXX XXXX"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border border-border/60 bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/40 focus:border-gold/40"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full resize-none border border-border/60 bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/40 focus:border-gold/40"
                placeholder="Tell us about your business and what you'd like to discuss..."
              />
            </div>

            <div className="mt-6">
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Send className="mr-2 h-4 w-4" />
                Send Inquiry
              </Button>
            </div>

            <p className="mt-4 text-xs text-muted/60">
              All inquiries are treated with strict confidentiality.
            </p>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

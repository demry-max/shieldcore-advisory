"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import WhyShieldCore from "@/components/sections/WhyShieldCore";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { Divider } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Problem />
        <Divider />
        <Solution />
        <Divider />
        <Services />
        <Divider />
        <WhyShieldCore />
        <Divider />
        <About />
        <Divider />
        <CTA />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

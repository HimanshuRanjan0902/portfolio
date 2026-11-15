 "use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, ArrowUpRight, Download, Github } from "lucide-react";
import { ThreeHero } from "@/components/three-hero";

export function Hero() {
  return (
    <section id="top" className="reference-hero relative min-h-[100svh] overflow-hidden px-6 pb-24 pt-32">
      <ThreeHero />
      <div className="hero-grid" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-9rem)] max-w-[1440px] flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hero-intro"
        >
          <div className="hero-eyebrow"><span className="hero-status-dot" /> Available for opportunities <span className="hero-eyebrow-divider" /> India · 2026</div>
          <p className="mb-5 mt-10 text-xs uppercase tracking-[0.38em] text-sky-200/75">Full-stack developer / Creative technologist</p>
          <h1 className="hero-name font-display text-6xl font-semibold uppercase leading-[0.82] tracking-[-0.075em] sm:text-7xl md:text-8xl xl:text-[8.7rem]">
            Himanshu<br />
            <span className="hero-name-outline">Ranjan<span className="hero-name-period">.</span></span>
          </h1>
          <p className="mt-8 max-w-lg text-base leading-8 text-zinc-400 sm:text-lg">
            I turn ideas into thoughtful digital products — from refined interfaces to dependable full-stack systems.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="reference-primary-link">Explore selected work <ArrowUpRight size={17} /></a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="reference-secondary-link"><Download size={16} /> View résumé</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hero-role"
        >
          <p className="hero-role-kicker">Currently focused on</p>
          <div className="mt-3 min-h-[3.5rem] font-display text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            <TypeAnimation
              sequence={["Building for the web.", 2400, "Engineering useful products.", 2400, "Exploring applied AI.", 2400]}
              wrapper="span"
              repeat={Infinity}
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
            React · Node.js · TypeScript · MongoDB
          </p>
          <a href="https://github.com/HimanshuRanjan0902" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-300 transition hover:text-sky-200">
            <Github size={16} /> GitHub <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <div className="hero-centerpiece" aria-hidden="true">
          <div className="hero-ring hero-ring-a" />
          <div className="hero-ring hero-ring-b" />
          <div className="hero-monogram">HR<span>.</span></div>
        </div>

        <div className="hero-bottom-note"><span className="h-px w-10 bg-sky-200/60" /><span>Scroll to explore <span className="hero-bottom-separator">/</span> Selected work, capabilities &amp; journey</span></div>
        <a href="#about" className="hero-scroll" aria-label="Scroll to about section"><ArrowDown size={17} /></a>
      </div>
    </section>
  );
}

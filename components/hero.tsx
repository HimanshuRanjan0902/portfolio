"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, ArrowUpRight, Download, Github } from "lucide-react";
import { ThreeHero } from "@/components/three-hero";

export function Hero() {
  return (
    <section id="top" className="reference-hero relative min-h-[100svh] overflow-hidden px-6 pb-24 pt-32">
      <ThreeHero />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-grid" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-9rem)] max-w-[1440px] flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-intro"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.42em] text-fuchsia-300">Hello, I&apos;m</p>
          <h1 className="font-display text-6xl font-semibold uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl xl:text-[7.5rem]">
            Himanshu<br />
            <span className="text-gradient">Ranjan</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-8 text-zinc-400 sm:text-lg">
            Computer Science graduate crafting useful digital products through thoughtful design and full-stack development.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="reference-primary-link">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="reference-secondary-link">
              <Download size={16} /> Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hero-role"
        >
          <p className="text-lg font-light tracking-[0.28em] text-fuchsia-300 sm:text-xl">A Full Stack</p>
          <div className="mt-2 min-h-[5.5rem] font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            <TypeAnimation
              sequence={["Developer", 2200, "Problem Solver", 2200, "Builder", 2200]}
              wrapper="span"
              repeat={Infinity}
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400 sm:text-base">
            Building responsive interfaces, reliable APIs, and data-driven applications with React, Node.js, and modern web technologies.
          </p>
          <a href="https://github.com/HimanshuRanjan0902" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-zinc-200 transition hover:text-fuchsia-300">
            <Github size={17} /> GitHub <ArrowUpRight size={15} />
          </a>
        </motion.div>

        <div className="hero-centerpiece" aria-hidden="true">
          <div className="hero-ring hero-ring-a" />
          <div className="hero-ring hero-ring-b" />
          <div className="hero-monogram">HR<span>.</span></div>
          <div className="hero-center-caption">DESIGN · DEVELOP · DEPLOY</div>
        </div>

        <div className="hero-bottom-note">
          <span className="h-px w-10 bg-fuchsia-400/70" />
          <span>Based in India · Open to opportunities</span>
        </div>
        <a href="#about" className="hero-scroll" aria-label="Scroll to about section">
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}

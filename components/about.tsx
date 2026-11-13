"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="reference-section mx-auto grid max-w-[1440px] gap-12 px-6 py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-12 lg:py-36">
      <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <p className="section-kicker">01 / A little introduction</p>
        <h2 className="section-heading mt-5">About <span>Me</span></h2>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <p className="max-w-3xl font-display text-2xl font-medium leading-relaxed text-zinc-100 sm:text-3xl lg:text-[2.1rem]">
          I&apos;m Himanshu Ranjan, a Full Stack Developer and Computer Science graduate from Lovely Professional University.
        </p>
        <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400">
          I enjoy turning ideas into practical web applications — from polished user interfaces to backend services and database-driven features. I focus on writing maintainable code, learning continuously, and building products that solve real problems.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          {["React", "JavaScript", "Node.js", "Express", "MongoDB", "MySQL", "Python", "Java"].map((skill) => (
            <span key={skill} className="reference-chip">{skill}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

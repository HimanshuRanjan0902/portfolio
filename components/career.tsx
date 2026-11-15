"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    date: "2026",
    title: "B.Tech — Computer Science & Engineering",
    place: "Lovely Professional University",
    description: "Graduated with a focus on software development, programming fundamentals, databases, and modern application development.",
  },
  {
    date: "2025 — 2026",
    title: "StockSense AI",
    place: "Full-Stack Project",
    description: "Built a stock market platform with Angel One SmartAPI live market data, watchlists, portfolio tracking, and virtual-only paper trading.",
  },
  {
    date: "NOW",
    title: "Open to Opportunities",
    place: "Full Stack / Software Developer",
    description: "Looking to contribute to a development team, strengthen engineering skills, and build useful products in a professional environment.",
  },
];

export function Career() {
  return (
    <section id="career" className="mx-auto max-w-[1440px] px-6 py-28 lg:px-12 lg:py-36">
      <div className="mb-16 text-center">
        <p className="section-kicker">03 / The path so far</p>
        <h2 className="section-heading mt-5">My Journey <span>&amp; Focus</span></h2>
      </div>
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute bottom-5 left-[7px] top-5 w-px bg-gradient-to-b from-sky-100 via-violet-500/60 to-transparent md:left-1/2" />
        <div className="space-y-12">
          {milestones.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }} className={`relative grid gap-4 pl-9 md:grid-cols-2 md:gap-14 md:pl-0 ${index % 2 ? "" : ""}`}>
              <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-sky-200 bg-[#0a0810] shadow-[0_0_22px_rgba(232,121,249,0.75)] md:left-1/2 md:-translate-x-1/2" />
              <div className={`md:text-right ${index % 2 ? "md:col-start-2" : ""}`}>
                <p className="font-mono text-sm tracking-[0.18em] text-sky-200">{item.date}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.place}</p>
              </div>
              <p className={`max-w-lg text-sm leading-7 text-zinc-400 ${index % 2 ? "md:col-start-1 md:row-start-1 md:ml-auto md:text-right" : ""}`}>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

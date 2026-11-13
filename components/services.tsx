"use client";

import { motion } from "framer-motion";
import { Code2, PanelsTopLeft, DatabaseZap } from "lucide-react";

const services = [
  {
    number: "01",
    title: "DEVELOP",
    description: "Building responsive, accessible web experiences with clean component architecture and modern frontend tools.",
    tools: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
    icon: Code2,
  },
  {
    number: "02",
    title: "ENGINEER",
    description: "Creating backend services, REST APIs, authentication flows, and integrations that connect products end to end.",
    tools: ["Node.js", "Express.js", "Python", "Django", "REST APIs"],
    icon: DatabaseZap,
  },
  {
    number: "03",
    title: "SHIP",
    description: "Taking projects from local development to deployment, with responsive layouts and practical testing.",
    tools: ["MongoDB", "MySQL", "Git", "GitHub", "Vercel"],
    icon: PanelsTopLeft,
  },
];

export function Services() {
  return (
    <section id="services" className="reference-services border-y border-white/10 py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">02 / Capabilities</p>
            <h2 className="section-heading mt-5">What I <span>Do</span></h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400">A practical mix of frontend, backend, and product delivery skills to bring web ideas to life.</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article key={service.number} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group bg-[#0c0a11] p-7 transition-colors hover:bg-[#15101d] sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-fuchsia-300">{service.number} / 03</span>
                  <Icon className="text-fuchsia-300 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={25} />
                </div>
                <h3 className="mt-14 font-display text-2xl font-semibold tracking-[0.12em] text-white">{service.title}</h3>
                <p className="mt-5 min-h-24 text-sm leading-7 text-zinc-400">{service.description}</p>
                <p className="mt-7 text-[10px] uppercase tracking-[0.25em] text-zinc-500">Tools & skillset</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.tools.map((tool) => <span key={tool} className="reference-chip">{tool}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

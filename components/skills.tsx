 "use client";

import { motion } from "framer-motion";
import { Atom, Server, Database, Braces, Wrench, Globe } from "lucide-react";

const groups = [
  { title: "Frontend", icon: Atom, items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML & CSS"] },
  { title: "Backend", icon: Server, items: ["Node.js", "Express.js", "Django", "REST APIs", "JWT Authentication"] },
  { title: "Databases", icon: Database, items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase / Firestore"] },
  { title: "Languages", icon: Braces, items: ["C", "C++", "Java", "JavaScript", "Python", "TypeScript"] },
  { title: "Tools", icon: Wrench, items: ["Git", "GitHub", "VS Code", "Postman", "Vite"] },
  { title: "Deployment", icon: Globe, items: ["Vercel", "Render", "Netlify", "Cloud fundamentals"] },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
      <div>
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">06 / Toolkit</p>
            <h2 className="section-heading mt-5">Tools of the <span>trade.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400">A practical toolkit for designing interfaces, engineering APIs, working with data, and shipping products.</p>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                className="skill-panel group min-h-[220px] bg-[#0b0e12] p-7 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-sky-200/65">0{index + 1} / 06</span>
                  <Icon size={21} strokeWidth={1.4} className="text-sky-200/70 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="mt-10 font-display text-2xl font-medium tracking-tight text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => <span key={item} className="reference-chip">{item}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

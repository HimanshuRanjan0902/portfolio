"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Server,
  Database,
  Braces,
  Wrench,
  Globe,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: Atom,
    color: "from-cyan-400 to-blue-500",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-violet-500 to-fuchsia-500",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Django", level: 85 },
      { name: "REST API", level: 92 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-green-400 to-emerald-500",
    items: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 82 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    title: "Languages",
    icon: Braces,
    color: "from-orange-400 to-red-500",
    items: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Java", level: 85 },
      { name: "Python", level: 82 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-pink-500 to-rose-500",
    items: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 94 },
      { name: "VS Code", level: 98 },
      { name: "Postman", level: 90 },
    ],
  },
  {
    title: "Deployment",
    icon: Globe,
    color: "from-indigo-500 to-cyan-500",
    items: [
      { name: "Vercel", level: 90 },
      { name: "Netlify", level: 88 },
      { name: "Render", level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-center uppercase tracking-[0.3em] text-cyan-400 font-semibold">
          Skills
        </p>

        <h2 className="mt-3 text-center text-4xl font-bold md:text-5xl">
          My
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            {" "}
            Technical Skills
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-400">
          Technologies and tools I use to build fast, scalable,
          and responsive web applications.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              >
                <div className="mb-8 flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${group.color}`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {group.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
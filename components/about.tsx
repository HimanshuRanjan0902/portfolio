"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Rocket,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    number: "15+",
    title: "Projects",
  },
  {
    number: "6+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Learning",
  },
];

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "B.Tech in Computer Science at Lovely Professional University (LPU).",
  },
  {
    icon: Code2,
    title: "Tech Stack",
    text: "React, Next.js, Node.js, Express, MongoDB, Django, TypeScript and Java.",
  },
  {
    icon: Rocket,
    title: "Passion",
    text: "Building modern, responsive and scalable web applications.",
  },
  {
    icon: Briefcase,
    title: "Goal",
    text: "Looking for Full Stack Developer and Software Engineer opportunities.",
  },
];

const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Django",
  "TypeScript",
  "Java",
];

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
      >
        <p className="text-center text-cyan-400 font-semibold uppercase tracking-[0.3em]">
          About Me
        </p>

        <h2 className="mt-3 text-center text-4xl font-bold md:text-5xl">
          Turning Ideas Into
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            {" "}
            Real Products
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-400 leading-8">
          I'm <span className="font-semibold text-white">Himanshu Ranjan</span>,
          a passionate Full Stack Developer and Computer Science student at
          Lovely Professional University. I enjoy designing modern user
          interfaces, building scalable backend systems, and solving real-world
          problems using the MERN stack, Next.js, Django, and TypeScript.
        </p>

        {/* Stats */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-400">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
              >
                <Icon className="mb-5 h-10 w-10 text-cyan-400" />

                <h3 className="text-2xl font-semibold">
                  {card.title}
                </h3>

                <p className="mt-3 text-gray-400 leading-7">
                  {card.text}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* Skills */}

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <h3 className="text-2xl font-semibold">
            Technologies I Work With
          </h3>

          <div className="mt-6 flex flex-wrap gap-4">

            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{
                  scale: 1.08,
                }}
                className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3"
              >
                <CheckCircle2
                  size={18}
                  className="text-cyan-400"
                />

                <span>{skill}</span>
              </motion.div>
            ))}

          </div>

        </div>
      </motion.div>
    </section>
  );
}
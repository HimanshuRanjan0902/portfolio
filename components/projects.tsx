"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

const filters = [
  "All",
  "React",
  "Next.js",
  "Node.js",
  "Django",
  "AI",
];

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-center uppercase tracking-[0.3em] text-cyan-400 font-semibold">
          Portfolio
        </p>

        <h2 className="mt-3 text-center text-4xl font-bold md:text-5xl">
          Featured
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            {" "}
            Projects
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-center text-gray-400">
          A collection of full-stack applications showcasing modern web
          development, responsive UI, scalable backend systems, and clean
          software architecture.
        </p>
      </motion.div>

      {/* Search */}

      <div className="mx-auto mt-12 max-w-xl">
        <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
          <Search
            className="mr-3 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search projects..."
            className="w-full bg-transparent outline-none placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Filters */}

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {filters.map((item) => (
          <button
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm transition hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cards */}

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section id="projects" className="reference-projects overflow-hidden border-y border-white/10 py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">04 / Selected work</p>
            <h2 className="section-heading mt-5">Featured <span>Work</span></h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400">A selection of full-stack applications I have designed and developed, from market insights and link management to food ordering experiences.</p>
        </div>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <a href="https://github.com/HimanshuRanjan0902" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 transition hover:text-sky-200">
          More on GitHub <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}

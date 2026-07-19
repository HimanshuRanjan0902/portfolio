"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Star,
  Clock,
} from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-2xl"
    >
      {/* Header */}

      <div
        className={`relative h-44 bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute left-6 top-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-lg font-bold text-white backdrop-blur">
            {String(index + 1).padStart(2, "0")}
          </div>

          {project.featured && (
            <span className="flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
              <Star size={14} />
              Featured
            </span>
          )}
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="min-h-[70px] text-3xl font-bold leading-tight text-white">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-white/80">
            {project.year} • {project.role}
          </p>
        </div>
      </div>

      {/* Body */}

      <div className="flex flex-1 flex-col p-6">

        {/* Description */}

        <p className="min-h-[150px] text-[15px] leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Tags */}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-auto pt-8">

          <div className="flex flex-wrap gap-3">

            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
            >
              Case Study
              <ArrowUpRight size={17} />
            </Link>

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm transition hover:bg-white/10"
              >
                <Github size={17} />
                GitHub
              </a>
            )}

          </div>

          <div className="mt-3">

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 px-5 py-3 text-sm transition hover:bg-cyan-500/10"
              >
                <ExternalLink size={17} />
                Live Demo
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 text-sm text-yellow-300">
                <Clock size={17} />
                Coming Soon
              </span>
            )}

          </div>

        </div>
      </div>
    </motion.article>
  );
}
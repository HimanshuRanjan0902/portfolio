"use client";

import { Download, FileText } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
          <FileText className="mx-auto mb-5 h-14 w-14 text-cyan-400" />

          <h2 className="text-4xl font-bold">
            Resume
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Download my latest resume to learn more about my education,
            technical skills, projects and experience.
          </p>

          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-600"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
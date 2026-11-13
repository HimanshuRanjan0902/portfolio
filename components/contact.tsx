"use client";

import { motion } from "framer-motion";
import { Github, Mail, ArrowUpRight, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1440px] px-6 py-28 lg:px-12 lg:py-36">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-kicker">05 / Get in touch</p>
          <h2 className="section-heading mt-5 max-w-3xl">Have a project<br />in <span>mind?</span></h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">
            I&apos;m open to entry-level software development roles, full-stack opportunities, and conversations about building useful products. Let&apos;s connect.
          </p>
          <a href="mailto:himanshuranjan2213@gmail.com" className="reference-primary-link mt-9">
            Say hello <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 sm:p-9">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Contact details</p>
          <a href="mailto:himanshuranjan2213@gmail.com" className="contact-row group">
            <span className="contact-icon"><Mail size={19} /></span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs text-zinc-500">Email</span>
              <span className="mt-1 block break-all text-sm text-zinc-200 group-hover:text-fuchsia-300">himanshuranjan2213@gmail.com</span>
            </span>
            <ArrowUpRight size={17} className="text-zinc-500 transition group-hover:text-fuchsia-300" />
          </a>
          <a href="https://github.com/HimanshuRanjan0902" target="_blank" rel="noopener noreferrer" className="contact-row group">
            <span className="contact-icon"><Github size={19} /></span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs text-zinc-500">GitHub</span>
              <span className="mt-1 block text-sm text-zinc-200 group-hover:text-fuchsia-300">HimanshuRanjan0902</span>
            </span>
            <ArrowUpRight size={17} className="text-zinc-500 transition group-hover:text-fuchsia-300" />
          </a>
          <a href="https://www.linkedin.com/in/himanshu-ranjan3/" target="_blank" rel="noopener noreferrer" className="contact-row group">
            <span className="contact-icon"><Linkedin size={19} /></span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs text-zinc-500">LinkedIn</span>
              <span className="mt-1 block text-sm text-zinc-200 group-hover:text-fuchsia-300">himanshu-ranjan3</span>
            </span>
            <ArrowUpRight size={17} className="text-zinc-500 transition group-hover:text-fuchsia-300" />
          </a>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Currently</p>
            <p className="mt-2 text-sm text-zinc-300">Based in India · Open to work</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

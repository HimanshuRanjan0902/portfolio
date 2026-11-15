"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, FileText, Linkedin } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "What I Do" },
  { href: "#career", label: "Journey" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65 }}
        className="reference-header fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-12">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight text-white">
            HR<span className="text-sky-200">.</span>
          </a>

          <a href="mailto:himanshuranjan2213@gmail.com" className="hidden text-xs tracking-[0.12em] text-zinc-400 transition hover:text-sky-200 2xl:block">
            AVAILABLE FOR SELECT OPPORTUNITIES
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="reference-nav-link">{link.label}</a>
            ))}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open resume" className="reference-nav-icon"><FileText size={17} /></a>
            <a href="https://github.com/HimanshuRanjan0902" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="reference-nav-icon"><Github size={17} /></a>
            <a href="https://www.linkedin.com/in/himanshu-ranjan3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="reference-nav-icon"><Linkedin size={17} /></a>
          </nav>

          <button onClick={() => setOpen(!open)} className="rounded-full border border-white/15 p-2 text-white lg:hidden" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-white/10 bg-[#100d17]/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm uppercase tracking-[0.18em] text-zinc-200 hover:bg-white/5 hover:text-sky-200">
                  {link.label}
                </a>
              ))}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center gap-2 rounded-xl border border-sky-200/30 px-3 py-3 text-sm text-sky-100">
                <FileText size={16} /> View Resume
              </a>
              <a href="https://www.linkedin.com/in/himanshu-ranjan3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl px-3 py-3 text-sm text-zinc-200 hover:bg-white/5 hover:text-sky-200">
                <Linkedin size={16} /> LinkedIn
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

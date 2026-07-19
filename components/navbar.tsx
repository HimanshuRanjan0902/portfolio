"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Github,
  FileText,
  Home,
  User,
  FolderGit2,
  Mail,
  Code2,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#top", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Code2 },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-5 left-1/2 z-50 -translate-x-1/2"
      >
        <div className="flex items-center rounded-full border border-white/10 bg-zinc-900/70 backdrop-blur-xl shadow-2xl px-6 py-3">

          {/* Logo */}
          <a
            href="#top"
            className="mr-8 whitespace-nowrap text-2xl font-bold"
          >
            <span className="text-white">Himanshu</span>
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              .dev
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 rounded-full px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-cyan-400"
                >
                  <Icon size={16} />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="ml-6 hidden lg:flex items-center gap-2">
            <ThemeToggle />

            <a
              href="https://github.com/HimanshuRanjan0902"
              target="_blank"
              rel="noopener noreferrer"
            >
             <Button variant="ghost" className="h-10 w-10 p-0">
  <Github className="h-5 w-5" />
</Button>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile */}
          <div className="ml-4 flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              onClick={() => setOpen(!open)}
              className="rounded-full p-2 hover:bg-white/10"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed top-24 left-4 right-4 z-40 rounded-3xl border border-white/10 bg-zinc-900/95 p-6 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl p-3 text-white hover:bg-white/10"
                  >
                    <Icon size={18} />
                    {item.label}
                  </a>
                );
              })}

              <a
                href="https://github.com/HimanshuRanjan0902"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
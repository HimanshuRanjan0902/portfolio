"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090f]">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold">
              Himanshu
              <span className="text-cyan-400">.dev</span>
            </h2>

            <p className="mt-4 max-w-sm text-gray-400 leading-7">
              Full Stack Developer passionate about building scalable,
              responsive and modern web applications with React,
              Next.js, Node.js and Django.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link href="/#home" className="hover:text-cyan-400">
                Home
              </Link>

              <Link href="/#about" className="hover:text-cyan-400">
                About
              </Link>

              <Link href="/#skills" className="hover:text-cyan-400">
                Skills
              </Link>

              <Link href="/#projects" className="hover:text-cyan-400">
                Projects
              </Link>

              <Link href="/#contact" className="hover:text-cyan-400">
                Contact
              </Link>

            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-lg font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/HimanshuRanjan0902"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 p-3 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 p-3 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:himanshuranjan2213@gmail.com"
                className="rounded-xl border border-white/10 p-3 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                <Mail size={20} />
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Himanshu Ranjan. All Rights Reserved.
          </p>

          <Link
            href="/#home"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <ArrowUp size={18} />
            Back to Top
          </Link>

        </div>

      </div>
    </footer>
  );
}
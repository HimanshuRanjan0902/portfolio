"use client";

import Link from "next/link";
import { Github, Mail, ArrowUp, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08060c]">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold">
              Himanshu
              <span className="text-sky-200">.dev</span>
            </h2>

            <p className="mt-4 max-w-sm text-gray-400 leading-7">
              Full Stack Developer focused on building thoughtful, responsive
              web applications with React, Node.js, and modern web technologies.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link href="/#home" className="hover:text-sky-200">
                Home
              </Link>

              <Link href="/#about" className="hover:text-sky-200">
                About
              </Link>

              <Link href="/#skills" className="hover:text-sky-200">
                Skills
              </Link>

              <Link href="/#projects" className="hover:text-sky-200">
                Projects
              </Link>

              <Link href="/#contact" className="hover:text-sky-200">
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
                className="rounded-xl border border-white/10 p-3 hover:border-sky-200 hover:text-sky-200 transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/himanshu-ranjan3/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 p-3 hover:border-sky-200 hover:text-sky-200 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:himanshuranjan2213@gmail.com"
                className="rounded-xl border border-white/10 p-3 hover:border-sky-200 hover:text-sky-200 transition"
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
            className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 hover:border-sky-200 hover:text-sky-200 transition"
          >
            <ArrowUp size={18} />
            Back to Top
          </Link>

        </div>

      </div>
    </footer>
  );
}
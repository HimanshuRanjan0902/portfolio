"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
} from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-cyan-400 font-semibold uppercase tracking-[0.25em]">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400 leading-8">
            I'm currently available for internships, freelance work,
            and exciting software engineering opportunities.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <div className="flex items-center gap-4">

                <Mail className="text-cyan-400" />

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <a
                    href="mailto:himanshuranjan2213@gmail.com"
                    className="text-gray-400 hover:text-cyan-400"
                  >
                    himanshuranjan2213@gmail.com
                  </a>

                </div>

              </div>

              <div className="mt-8 flex items-center gap-4">

                <Github className="text-cyan-400" />

                <div>

                  <h3 className="font-semibold">
                    GitHub
                  </h3>

                  <a
                    href="https://github.com/HimanshuRanjan0902"
                    target="_blank"
                    className="text-gray-400 hover:text-cyan-400"
                  >
                    github.com/HimanshuRanjan0902
                  </a>

                </div>

              </div>

              <div className="mt-8 flex items-center gap-4">

                <Linkedin className="text-cyan-400" />

                <div>

                  <h3 className="font-semibold">
                    LinkedIn
                  </h3>

                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400"
                  >
                    Add Your LinkedIn URL
                  </a>

                </div>

              </div>

              <div className="mt-8 flex items-center gap-4">

                <MapPin className="text-cyan-400" />

                <div>

                  <h3 className="font-semibold">
                    Location
                  </h3>

                  <p className="text-gray-400">
                    Punjab, India
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows={6}
              placeholder="Your Message..."
              className="w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none focus:border-cyan-400"
            />

            <button
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-600 transition"
            >
              <Send size={18} />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}
// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, Download } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ThreeHero } from "@/components/three-hero";

// const container = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.12, delayChildren: 0.15 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 24 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// export function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-28 text-center"
//     >
//       <ThreeHero />
//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="mx-auto flex max-w-3xl flex-col items-center"
//       >
//         <motion.span
//           variants={item}
//           className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-[var(--fg-muted)]"
//         >
//           <span className="h-1.5 w-1.5 rounded-full bg-aurora-cyan" />
//           Open to full-stack &amp; internship roles
//         </motion.span>

//         <motion.h1
//           variants={item}
//           className="font-display text-[13vw] font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
//         >
//           Himanshu
//           <br />
//           <span className="text-gradient">Ranjan</span>
//         </motion.h1>

//         <motion.p
//           variants={item}
//           className="mt-6 max-w-xl text-balance text-base text-[var(--fg-muted)] sm:text-lg"
//         >
//           Full stack developer and computer science student building fast,
//           well-crafted products across the MERN stack — from AI-driven
//           dashboards to campus utility apps.
//         </motion.p>

//         <motion.div
//           variants={item}
//           className="mt-9 flex flex-wrap items-center justify-center gap-3"
//         >
//           <a href="#projects">
//             <Button size="lg">
//               View projects <ArrowRight className="h-4 w-4" />
//             </Button>
//           </a>
//           <a href="/resume.pdf" download>
//             <Button size="lg" variant="glass">
//               Resume <Download className="h-4 w-4" />
//             </Button>
//           </a>
//         </motion.div>

//         <motion.div
//           variants={item}
//           className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-[var(--fg-muted)]"
//         >
//           {["React", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript"].map(
//             (t) => (
//               <span key={t}>{t}</span>
//             )
//           )}
//         </motion.div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.1, duration: 0.6 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--fg-muted)]"
//         aria-hidden
//       >
//         <div className="h-9 w-5 rounded-full border border-[var(--glass-border)] p-1">
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
//             className="h-1.5 w-1.5 rounded-full bg-current"
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
<section
  id="top"
  className="relative min-h-screen pt-32 lg:pt-40 ..."
>
      {/* Background Blur */}
      <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-4 text-lg text-cyan-400"
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="text-5xl font-extrabold md:text-7xl"
        >
          Himanshu{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
            Ranjan
          </span>
        </motion.h1>

        <div className="mt-8 text-2xl font-semibold text-gray-300 md:text-4xl">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Next.js Developer",
              2000,
              "Node.js Developer",
              2000,
              "Django Developer",
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mx-auto mt-8 max-w-3xl text-lg text-gray-400"
        >
          Passionate Computer Science student building modern web applications
          using React, Next.js, Node.js, Django and MongoDB.
        </motion.p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="px-8 py-6 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </a>

          <a
            href="https://github.com/HimanshuRanjan0902"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" className="px-8 py-6 text-lg">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </a>

        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-cyan-400">15+</h2>
            <p className="mt-2 text-gray-400">Projects Completed</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-cyan-400">6+</h2>
            <p className="mt-2 text-gray-400">Technologies</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-cyan-400">100%</h2>
            <p className="mt-2 text-gray-400">Passion for Coding</p>
          </div>

        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 flex justify-center"
        >
          <ArrowDown size={30} className="text-cyan-400" />
        </motion.div>

      </div>
    </section>
  );
}
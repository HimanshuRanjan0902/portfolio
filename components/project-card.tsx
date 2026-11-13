"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Activity, CandlestickChart, Wallet, Eye } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="group grid overflow-hidden rounded-2xl border border-white/10 bg-[#0d0a13] lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className={`relative flex min-h-[340px] items-center justify-center overflow-hidden p-7 sm:min-h-[430px] sm:p-12 ${project.slug === "cravecraft" ? "bg-[radial-gradient(ellipse_at_50%_45%,rgba(163,190,88,0.25),transparent_62%),linear-gradient(135deg,#171a10,#090b08)]" : "bg-[radial-gradient(ellipse_at_50%_45%,rgba(168,85,247,0.24),transparent_62%),linear-gradient(135deg,#171020,#09080e)]"}`}>
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:42px_42px]" />
        {project.slug === "cravecraft" ? (
          <div className="relative w-full max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#f7f5ef] text-[#24251f] shadow-[0_25px_100px_rgba(0,0,0,.55)]">
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
              <div className="font-display text-xl font-bold tracking-tight">cravecraft<span className="text-[#9aaa54]">.</span></div>
              <span className="rounded-full bg-[#e9edda] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#657638]">Fresh menu</span>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-[1fr_0.85fr] sm:p-6">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8b8d80]">Good food. Great mood.</p>
                <p className="mt-3 font-display text-3xl font-semibold leading-tight">A little joy<br/><span className="italic text-[#91a34e]">in every bite.</span></p>
                <p className="mt-3 max-w-[220px] text-[10px] leading-5 text-[#77796e]">Explore the menu, pick your favourites, and place your order.</p>
                <span className="mt-5 inline-flex rounded-md bg-[#24251f] px-4 py-2 text-[10px] font-semibold text-white">Explore menu <ArrowUpRight size={12} className="ml-2" /></span>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <div className="rounded-lg bg-[#e9edda] p-3">
                  <div className="mb-2 flex items-center justify-between text-[9px] font-semibold text-[#657638]"><span>YOUR BAG</span><span>01 ITEM</span></div>
                  <div className="flex items-center gap-3 rounded-md bg-white/80 p-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#d9dfc1] text-xl">🍔</div>
                    <div><p className="text-[10px] font-semibold">House special</p><p className="mt-1 text-[9px] text-[#77796e]">Freshly prepared</p></div>
                  </div>
                  <div className="mt-3 flex justify-between text-[9px] font-semibold"><span>Order summary</span><span>Ready to checkout</span></div>
                </div>
                <div className="rounded-lg border border-[#dfe1d5] bg-white p-3">
                  <p className="text-[9px] uppercase tracking-wider text-[#8b8d80]">Ordering made simple</p>
                  <p className="mt-2 text-xs font-semibold">Browse · Add · Order</p>
                </div>
              </div>
            </div>
          </div>
        ) : project.slug === "stocksense-ai" ? (
          <div className="relative w-full max-w-xl rounded-xl border border-white/10 bg-[#0a0b12]/90 p-4 shadow-[0_25px_100px_rgba(0,0,0,.55)] backdrop-blur-xl sm:p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div><p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">StockSense AI / Market overview</p><p className="mt-1 text-sm font-semibold text-white">Market dashboard</p></div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-300"><Activity size={11} /> Live data</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
              {[["NIFTY 50", "Market index"], ["WATCHLIST", "Track stocks"], ["PAPER TRADE", "Virtual funds"]].map(([name, label]) => <div key={name} className="rounded-lg border border-white/10 bg-white/[0.035] p-2.5 sm:p-3"><p className="text-[8px] tracking-[0.12em] text-zinc-500 sm:text-[9px]">{name}</p><p className="mt-2 text-[10px] text-zinc-200 sm:text-xs">{label}</p></div>)}
            </div>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.025] p-3 sm:p-4">
              <div className="mb-4 flex items-center justify-between"><span className="text-xs text-zinc-300">Market movement</span><CandlestickChart size={17} className="text-fuchsia-300" /></div>
              <div className="flex h-24 items-end gap-1.5 sm:h-32">{[28,40,34,53,47,65,58,72,62,82,74,94,80,100,87,110,96,118,108,128,117,138].map((h,i)=><span key={i} className={`flex-1 rounded-t-[2px] ${i%4===0?"bg-violet-300/80":"bg-fuchsia-400/70"}`} style={{height:`${Math.min(h,100)}%`}} />)}</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2"><span className="inline-flex items-center gap-1 rounded-md bg-violet-400/10 px-2 py-1 text-[9px] text-violet-200"><Eye size={10}/> Watchlist</span><span className="inline-flex items-center gap-1 rounded-md bg-fuchsia-400/10 px-2 py-1 text-[9px] text-fuchsia-200"><Wallet size={10}/> Virtual portfolio</span></div>
          </div>
        ) : (
          <div className="relative w-full max-w-xl rounded-xl border border-white/10 bg-[#0c1020]/95 p-5 shadow-[0_25px_100px_rgba(0,0,0,.55)] sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div><p className="font-display text-lg font-bold text-white">LinkLite<span className="text-cyan-300">.</span></p><p className="mt-1 text-[10px] text-zinc-400">Make every link count</p></div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] text-emerald-300">Dashboard</span>
            </div>
            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs font-semibold text-white">Create a short link</p>
              <div className="mt-3 rounded-lg border border-white/10 bg-black/20 px-3 py-3 text-[10px] text-zinc-500">https://your-long-url.com/goes-here</div>
              <div className="mt-3 flex items-center justify-between gap-3"><span className="text-[10px] text-zinc-400">Custom alias · Expiration</span><span className="rounded-md bg-violet-500 px-3 py-2 text-[10px] font-semibold text-white">Shorten URL ↗</span></div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-lg border border-white/10 bg-white/[0.035] p-3"><p className="text-[9px] text-zinc-500">TOTAL LINKS</p><p className="mt-2 text-2xl font-semibold text-white">12</p></div><div className="rounded-lg border border-white/10 bg-white/[0.035] p-3"><p className="text-[9px] text-zinc-500">TOTAL CLICKS</p><p className="mt-2 text-2xl font-semibold text-white">248</p></div></div>
          </div>
        )}
        <div className="absolute bottom-5 left-6 font-mono text-[10px] tracking-[0.22em] text-white/35">{project.slug === "cravecraft" ? "02 — FOOD ORDERING PREVIEW" : project.slug === "stocksense-ai" ? "01 — MARKET DASHBOARD PREVIEW" : "03 — LINK MANAGEMENT PREVIEW"}</div>
      </div>

      <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-[0.2em] text-fuchsia-300">{project.year}</span>
          <span className="h-px w-8 bg-white/20" />
          <span className="text-xs uppercase tracking-[0.16em] text-zinc-500">{project.role}</span>
        </div>
        <h3 className="mt-7 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{project.title}</h3>
        <p className="mt-5 text-sm leading-8 text-zinc-400">{project.description}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="reference-chip">{tag}</span>)}
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href={`/projects/${project.slug}`} className="reference-primary-link">View case study <ArrowUpRight size={16} /></Link>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="reference-secondary-link">Live website <ExternalLink size={15} /></a>}
          {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="reference-secondary-link"><Github size={15} /> Source code</a>}
        </div>
        {project.slug === "stocksense-ai" && <p className="mt-7 text-xs leading-6 text-zinc-500">Paper trading is simulation-only and uses virtual funds. No real-money trades are executed.</p>}
      </div>
    </motion.article>
  );
}

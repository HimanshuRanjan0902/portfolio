import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, CheckCircle2 } from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Himanshu Ranjan`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-28 pt-32">
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-1.5 text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to projects
        </Link>

        <div
          className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-glow`}
          aria-hidden
        >
          <span className="font-display text-sm font-semibold">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.15em] text-[var(--fg-muted)]">
          <span>{project.year}</span>
          <span className="h-1 w-1 rounded-full bg-current" aria-hidden />
          <span>{project.role}</span>
        </div>

        <p className="mt-6 max-w-xl text-[var(--fg-muted)]">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <Button size="sm">
                Live demo <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              <Button size="sm" variant="glass">
                Source code <Github className="h-3.5 w-3.5" />
              </Button>
            </a>
          )}
        </div>

        <div className="mt-14 grid gap-10">
          <section>
            <h2 className="font-display text-lg font-semibold">Overview</h2>
            <p className="mt-3 leading-relaxed text-[var(--fg-muted)]">
              {project.overview}
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold">The challenge</h2>
            <p className="mt-3 leading-relaxed text-[var(--fg-muted)]">
              {project.challenge}
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold">Key features</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="glass flex items-start gap-2.5 rounded-2xl p-4 text-sm text-[var(--fg-muted)]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-aurora-cyan" />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold">Tech stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--glass-border)] px-3 py-1.5 text-xs text-[var(--fg-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-[var(--glass-border)] pt-8">
          <p className="mb-2 text-xs uppercase tracking-[0.15em] text-[var(--fg-muted)]">
            Next project
          </p>
          <Link
            href={`/projects/${next.slug}`}
            className="group inline-flex items-center gap-2 font-display text-xl font-semibold tracking-tight"
          >
            {next.title}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

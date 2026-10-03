import { ArrowUpRight, FolderGit2, Lock } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { projects } from '../data/profile'
import { Card, Reveal, Section, Tag } from './ui'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 · Projects"
      title="Selected projects"
      intro="Personal and portfolio work with source you can read: design decisions, tests and CI included."
      muted
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08} className="h-full">
            <Card className="flex h-full flex-col p-6 transition-shadow hover:shadow-lg hover:shadow-slate-900/5">
              <div className="flex items-center justify-between">
                <div className="grid size-10 place-items-center rounded-lg bg-accent-50 text-accent-700 dark:bg-accent-400/10 dark:text-accent-400">
                  <FolderGit2 className="size-5" />
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{p.label}</span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{p.name}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{p.description}</p>

              <ul className="mt-4 space-y-2 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-slate-700 dark:text-slate-300">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent-500" />
                    {pt}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
                {p.stack.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-4 pt-6 text-sm font-semibold">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-800 hover:text-accent-700 dark:text-slate-200 dark:hover:text-accent-400"
                  >
                    <FaGithub className="size-4" /> Source code
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent-700 hover:underline dark:text-accent-400"
                  >
                    Live demo <ArrowUpRight className="size-4" />
                  </a>
                )}
                {!p.repo && !p.demo && (
                  <span className="inline-flex items-center gap-1.5 font-medium text-slate-500 dark:text-slate-400">
                    <Lock className="size-4" /> Private repository
                  </span>
                )}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Briefcase, Calendar, ExternalLink, FolderKanban, MapPin } from 'lucide-react'
import { experience, type Experience } from '../data/profile'
import { Card, Reveal, Section, Tag } from './ui'

export function ExperienceSection() {
  const [activeId, setActiveId] = useState(experience[0].id)
  const job = experience.find((j) => j.id === activeId) ?? experience[0]

  return (
    <Section
      id="experience"
      eyebrow="02 · Experience"
      title={
        <>
          5+ years shipping <span className="text-gradient">production Java</span>
        </>
      }
      intro="National logistics, e-commerce and ERP systems, from on-site enterprise teams to remote start-ups. Pick a company to see the details."
      muted
    >
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <div
            role="tablist"
            aria-label="Companies"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
          >
            {experience.map((j) => {
              const selected = j.id === activeId
              return (
                <button
                  key={j.id}
                  role="tab"
                  id={`tab-${j.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${j.id}`}
                  onClick={() => setActiveId(j.id)}
                  className={`relative shrink-0 rounded-xl px-4 py-3 text-left transition-colors ${
                    selected ? '' : 'hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="exp-tab"
                      className="absolute inset-0 rounded-xl border border-accent-500/30 bg-white shadow-sm dark:border-accent-400/30 dark:bg-white/[0.06]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  {selected && (
                    <motion.span
                      layoutId="exp-bar"
                      className="absolute top-3 bottom-3 left-0 hidden w-1 rounded-full bg-gradient-to-b from-accent-400 to-indigo-500 lg:block"
                    />
                  )}
                  <span className="relative block">
                    <span
                      className={`block font-semibold whitespace-nowrap ${
                        selected ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {j.shortName}
                    </span>
                    <span className="block font-mono text-xs whitespace-nowrap text-slate-500 dark:text-slate-500">{j.period}</span>
                  </span>
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={job.id}
              role="tabpanel"
              id={`panel-${job.id}`}
              aria-labelledby={`tab-${job.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <JobPanel job={job} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </Section>
  )
}

function JobPanel({ job }: { job: Experience }) {
  return (
    <Card className="p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <div className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-white/10">
          {job.logo ? (
            <img src={job.logo} alt="" className="size-full object-contain p-1.5" loading="lazy" />
          ) : (
            <Briefcase className="size-6 text-slate-500" />
          )}
        </div>
        <div className="min-w-0">
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">{job.role}</h3>
          <p className="mt-1 font-medium text-slate-700 dark:text-slate-300">
            {job.companyUrl ? (
              <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-700 hover:underline dark:hover:text-accent-300">
                {job.company}
              </a>
            ) : (
              job.company
            )}
          </p>
        </div>
      </div>

      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
        <li className="inline-flex items-center gap-1.5">
          <Calendar className="size-4" /> {job.period} · {job.duration}
        </li>
        <li className="inline-flex items-center gap-1.5">
          <MapPin className="size-4" /> {job.location}
        </li>
        <li className="inline-flex items-center gap-1.5">
          <Briefcase className="size-4" /> {job.type}
        </li>
      </ul>

      {job.project && (
        <p className="mt-4 inline-flex flex-wrap items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-sm dark:bg-white/5">
          <FolderKanban className="size-4 text-accent-600 dark:text-accent-400" />
          <span className="font-semibold text-slate-900 dark:text-white">Project:</span>
          {job.project.url ? (
            <a
              href={job.project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent-700 hover:underline dark:text-accent-300"
            >
              {job.project.name} <ExternalLink className="size-3.5" />
            </a>
          ) : (
            <span className="text-slate-700 dark:text-slate-300">{job.project.name}</span>
          )}
        </p>
      )}

      <p className="mt-5 text-pretty text-slate-600 dark:text-slate-400">{job.summary}</p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {job.highlights.map((group) => (
          <div key={group.title}>
            <h4 className="font-mono text-xs font-semibold tracking-wider text-accent-700 uppercase dark:text-accent-300">
              {group.title}
            </h4>
            <ul className="mt-3 space-y-2.5">
              {group.items.map((a) => (
                <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent-400 to-indigo-500" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ul className="mt-8 flex flex-wrap gap-2 border-t border-slate-200 pt-6 dark:border-white/10" aria-label="Technologies used">
        {job.stack.map((s) => (
          <li key={s}>
            <Tag>{s}</Tag>
          </li>
        ))}
      </ul>
    </Card>
  )
}

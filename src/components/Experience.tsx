import { Briefcase, ExternalLink, MapPin } from 'lucide-react'
import { experience, type Experience } from '../data/profile'
import { Card, Reveal, Section, Tag } from './ui'

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="02 · Experience"
      title="Where I've worked"
      intro="Five years across national logistics, e-commerce and ERP systems, from on-site enterprise teams to remote start-ups."
    >
      <ol className="relative space-y-8 border-l border-slate-200 pl-6 sm:pl-10 dark:border-slate-800">
        {experience.map((job, i) => (
          <li key={job.company} className="relative">
            <span className="absolute top-6 -left-[31px] grid size-3 place-items-center rounded-full bg-accent-600 ring-4 ring-white sm:-left-[47px] dark:bg-accent-400 dark:ring-slate-950" />
            <Reveal delay={i * 0.05}>
              <JobCard job={job} />
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function JobCard({ job }: { job: Experience }) {
  return (
    <Card className="p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700">
            {job.logo ? (
              <img src={job.logo} alt="" className="size-full object-contain p-1" loading="lazy" />
            ) : (
              <Briefcase className="size-5 text-slate-500" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
            <p className="mt-0.5 font-medium text-slate-700 dark:text-slate-300">
              {job.companyUrl ? (
                <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent-700 hover:underline dark:hover:text-accent-400">
                  {job.company}
                </a>
              ) : (
                job.company
              )}
            </p>
            <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
              <span>{job.type}</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="size-3.5" />
                {job.location}
              </span>
            </p>
          </div>
        </div>
        <div className="shrink-0 sm:text-right">
          <p className="font-mono text-sm font-medium text-slate-800 dark:text-slate-200">{job.period}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{job.duration}</p>
        </div>
      </div>

      {job.project && (
        <p className="mt-5 text-sm">
          <span className="font-semibold text-slate-900 dark:text-white">Project: </span>
          {job.project.url ? (
            <a
              href={job.project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent-700 hover:underline dark:text-accent-400"
            >
              {job.project.name} <ExternalLink className="size-3.5" />
            </a>
          ) : (
            <span className="text-slate-700 dark:text-slate-300">{job.project.name}</span>
          )}
        </p>
      )}

      <p className="mt-3 text-slate-600 dark:text-slate-400">{job.summary}</p>

      <ul className="mt-4 space-y-2.5">
        {job.achievements.map((a) => (
          <li key={a} className="flex gap-3 text-slate-700 dark:text-slate-300">
            <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-500" />
            <span>{a}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
        {job.stack.map((s) => (
          <li key={s}>
            <Tag>{s}</Tag>
          </li>
        ))}
      </ul>
    </Card>
  )
}

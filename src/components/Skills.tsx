import { Cloud, Code2, Database, FlaskConical, Layout, Server } from 'lucide-react'
import { skillGroups } from '../data/profile'
import { Card, Reveal, Section } from './ui'

const icons = [Code2, Server, Database, Cloud, FlaskConical, Layout]

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 · Skills" title="Technical skills" intro="The tools I use day to day, grouped the way a backend team works.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={group.title} delay={i * 0.05} className="h-full">
              <Card className="h-full p-6">
                <div className="flex items-center gap-3">
                  <Icon className="size-5 text-accent-600 dark:text-accent-400" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

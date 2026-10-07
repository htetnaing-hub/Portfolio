import { Bot, Cloud, Code2, Database, FlaskConical, Layout, Server, Wrench } from 'lucide-react'
import { skillGroups } from '../data/profile'
import { Reveal, Section, SpotlightCard } from './ui'

const icons = [Code2, Server, Layout, Database, Cloud, FlaskConical, Bot, Wrench]

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="05 · Skills"
      title={
        <>
          The <span className="text-gradient">toolbox</span>
        </>
      }
      intro="What I use day to day, grouped the way a product team works."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={group.title} delay={(i % 4) * 0.05} className="h-full">
              <SpotlightCard className="h-full p-6">
                <div className="flex items-center gap-3">
                  <Icon className="size-5 text-accent-600 dark:text-accent-400" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-sm text-slate-700 transition-colors hover:border-accent-500/40 hover:text-accent-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-accent-200"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

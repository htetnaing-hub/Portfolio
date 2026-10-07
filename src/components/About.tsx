import type { ReactNode } from 'react'
import { Code2, FileText, GraduationCap, Languages, Layers, Mail, MapPin, Rocket, Server } from 'lucide-react'
import { about, education, languages, profile, roleFits } from '../data/profile'
import { Card, Reveal, Section, SpotlightCard } from './ui'

const roleIcons = [Code2, Layers, Server, Rocket]

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title={
        <>
          A Java engineer who owns features <span className="text-gradient">end to end</span>
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-pretty text-slate-600 dark:text-slate-400">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white">Quick facts</h3>
            <dl className="mt-5 space-y-4 text-sm">
              <Fact icon={MapPin} label="Location" value={profile.location} />
              <Fact
                icon={Mail}
                label="Email"
                value={
                  <a href={`mailto:${profile.email}`} className="text-accent-700 hover:underline dark:text-accent-300">
                    {profile.email}
                  </a>
                }
              />
              <Fact icon={GraduationCap} label="Education" value={`${education.degree}, ${education.school}`} />
              <Fact icon={Languages} label="Languages" value={languages.join(' · ')} />
            </dl>
            <a
              href={profile.recommendation}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border-t border-slate-200 pt-5 text-sm font-medium text-accent-700 hover:underline dark:border-white/10 dark:text-accent-300"
            >
              <FileText className="size-4" /> Read my recommendation letter
            </a>
          </Card>
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase dark:text-white">Roles I'm a strong fit for</h3>
      </Reveal>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {roleFits.map((role, i) => {
          const Icon = roleIcons[i % roleIcons.length]
          return (
            <Reveal key={role.title} delay={i * 0.07} className="h-full">
              <SpotlightCard className="h-full p-6">
                <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-pink-500 text-white shadow-lg shadow-accent-500/20">
                  <Icon className="size-5" />
                </div>
                <h4 className="mt-5 font-semibold text-slate-900 dark:text-white">{role.title}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{role.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {role.skills.map((s) => (
                    <li key={s} className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-slate-600 dark:bg-white/5 dark:text-slate-300">
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

function Fact({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: ReactNode }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-slate-400" />
      <div>
        <dt className="text-slate-500 dark:text-slate-400">{label}</dt>
        <dd className="mt-0.5 font-medium text-slate-800 dark:text-slate-200">{value}</dd>
      </div>
    </div>
  )
}

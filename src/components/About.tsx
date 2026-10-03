import type { ReactNode } from 'react'
import { Check, FileText, GraduationCap, Languages, Mail, MapPin } from 'lucide-react'
import { about, education, languages, profile } from '../data/profile'
import { Card, Reveal, Section } from './ui'

export function About() {
  return (
    <Section id="about" eyebrow="01 · About" title="Backend engineer who owns features end to end" muted>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <h3 className="mt-10 text-sm font-semibold tracking-wide text-slate-900 uppercase dark:text-white">
            What I bring
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                <Check className="mt-0.5 size-5 shrink-0 text-accent-600 dark:text-accent-400" />
                {h}
              </li>
            ))}
          </ul>
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
                  <a href={`mailto:${profile.email}`} className="text-accent-700 hover:underline dark:text-accent-400">
                    {profile.email}
                  </a>
                }
              />
              <Fact icon={GraduationCap} label="Education" value={`${education.degree}, ${education.school}`} />
              <Fact icon={Languages} label="Languages" value={languages.join(' · ')} />
            </dl>
            <div className="mt-6 flex flex-col gap-2 border-t border-slate-200 pt-5 dark:border-slate-800">
              <a
                href={profile.recommendation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-700 hover:underline dark:text-accent-400"
              >
                <FileText className="size-4" /> Read my recommendation letter
              </a>
            </div>
          </Card>
        </Reveal>
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

import { Bug, CheckCircle2, FlaskConical, Sparkles, Wand2 } from 'lucide-react'
import { SiClaude, SiGithubcopilot } from 'react-icons/si'
import { aiPractices } from '../data/profile'
import { Reveal, Section, SpotlightCard } from './ui'

const icons = [Wand2, Bug, FlaskConical]

const tools = [
  { name: 'Claude', Icon: SiClaude, color: 'text-[#d97757]' },
  { name: 'Claude Code', Icon: SiClaude, color: 'text-[#d97757]' },
  { name: 'GitHub Copilot', Icon: SiGithubcopilot, color: 'text-slate-900 dark:text-white' },
]

export function AiEngineering() {
  return (
    <Section
      id="ai"
      eyebrow="03 · AI-assisted engineering"
      title={
        <>
          Faster delivery with AI, <span className="text-gradient">verified by tests</span>
        </>
      }
      intro="I use AI coding tools every day across development, code review and testing. They speed up the work; tests, reviews and my own judgement decide what ships."
    >
      <Reveal>
        <ul className="flex flex-wrap gap-3">
          {tools.map(({ name, Icon, color }) => (
            <li
              key={name}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
            >
              <Icon className={`size-4 ${color}`} /> {name}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {aiPractices.map((p, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <SpotlightCard className="h-full p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-accent-600 to-accent-500 text-white shadow-lg shadow-accent-500/20">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-mono text-xs text-slate-400">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{p.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-600 dark:text-accent-400" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-8 flex items-start gap-3 rounded-2xl border border-dashed border-accent-500/40 bg-accent-50/60 p-5 text-sm text-slate-700 dark:bg-accent-400/5 dark:text-slate-300">
          <Sparkles className="mt-0.5 size-5 shrink-0 text-accent-600 dark:text-accent-400" />
          <span>
            <strong className="text-slate-900 dark:text-white">My rule:</strong> AI output is a draft, never the final answer. Every
            change is read, tested and reviewed before it reaches the main branch, and I stay accountable for the code I ship.
          </span>
        </p>
      </Reveal>
    </Section>
  )
}

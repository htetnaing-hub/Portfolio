import { motion } from 'motion/react'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile, stats } from '../data/profile'
import { ButtonLink } from './ui'
import { SocialLinks } from './Socials'

const coreStack = ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'PostgreSQL', 'AWS · GCP · OCI']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgb(148_163_184/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.12)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-500/10"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-32 pb-16 sm:px-6 sm:pt-40 lg:grid-cols-[1.35fr_1fr] lg:px-8 lg:pb-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-accent-700 sm:text-2xl dark:text-accent-400">{profile.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            <span className="font-medium text-slate-900 dark:text-slate-100">{profile.headline}</span> {profile.summary}
          </p>

          <p className="mt-5 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <MapPin className="size-4" /> {profile.location}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Core stack">
            {coreStack.map((s) => (
              <li
                key={s}
                className="rounded-md border border-slate-200 bg-white/70 px-2.5 py-1 font-mono text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
              >
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={profile.cv} external>
              <Download className="size-4" /> Download resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Get in touch <ArrowRight className="size-4" />
            </ButtonLink>
            <div className="ml-1">
              <SocialLinks />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div aria-hidden className="absolute -inset-3 rotate-3 rounded-[2rem] bg-gradient-to-br from-accent-400/40 to-sky-400/30 blur-sm dark:from-accent-500/25 dark:to-sky-500/15" />
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width={562}
            height={587}
            className="relative aspect-[562/587] w-full rounded-[1.75rem] border border-white/60 object-cover shadow-xl dark:border-slate-800"
          />
          <div className="absolute -bottom-5 -left-4 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:-left-8 dark:border-slate-800 dark:bg-slate-900">
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">currently building with</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Java · Spring Boot · Kafka</p>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-4 dark:border-slate-800 dark:bg-slate-800">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-5 dark:bg-slate-950">
              <dt className="text-sm text-slate-500 dark:text-slate-400">{s.label}</dt>
              <dd className="mt-1 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

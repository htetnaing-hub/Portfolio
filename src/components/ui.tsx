import type { ReactNode } from 'react'
import { motion } from 'motion/react'

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  muted = false,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
  muted?: boolean
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={muted ? 'bg-slate-50 dark:bg-slate-900/40' : undefined}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <p className="font-mono text-sm font-medium tracking-wide text-accent-700 dark:text-accent-400">
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
          >
            {title}
          </h2>
          {intro && <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{intro}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-accent-50 px-2 py-1 font-mono text-xs font-medium text-accent-800 ring-1 ring-accent-600/15 ring-inset dark:bg-accent-400/10 dark:text-accent-300 dark:ring-accent-400/20">
      {children}
    </span>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.03] dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      {children}
    </div>
  )
}

const buttonStyles = {
  primary:
    'bg-accent-700 text-white shadow-sm hover:bg-accent-800 dark:bg-accent-500 dark:text-slate-950 dark:hover:bg-accent-400',
  secondary:
    'border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800',
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  download,
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof buttonStyles
  external?: boolean
  download?: string
}) {
  return (
    <a
      href={href}
      download={download}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${buttonStyles[variant]}`}
    >
      {children}
    </a>
  )
}

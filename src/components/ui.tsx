import { useRef, type MouseEvent, type ReactNode } from 'react'
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
  title: ReactNode
  intro?: string
  children: ReactNode
  muted?: boolean
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative ${muted ? 'bg-slate-50/80 dark:bg-white/[0.015]' : ''}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 font-mono text-sm font-medium tracking-wide text-accent-700 dark:text-accent-300">
            <span className="h-px w-8 bg-gradient-to-r from-accent-500 to-sky-500" />
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-balance text-slate-900 sm:text-5xl dark:text-white"
          >
            {title}
          </h2>
          {intro && <p className="mt-5 max-w-2xl text-lg text-pretty text-slate-600 dark:text-slate-400">{intro}</p>}
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  )
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-accent-50 px-2 py-1 font-mono text-xs font-medium text-accent-800 ring-1 ring-accent-600/15 ring-inset dark:bg-accent-400/10 dark:text-accent-200 dark:ring-accent-400/20">
      {children}
    </span>
  )
}

const cardBase =
  'rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.03] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none'

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`${cardBase} ${className}`}>{children}</div>
}

/** A card with a gradient border and glow that follow the cursor. */
export function SpotlightCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - r.left}px`)
    el.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight ${cardBase} transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-900/5 dark:hover:shadow-accent-500/5 ${className}`}
    >
      {children}
    </div>
  )
}

const buttonStyles = {
  primary:
    'bg-gradient-to-r from-accent-600 via-cyan-600 to-sky-600 bg-[length:200%_auto] text-white shadow-lg shadow-accent-600/20 hover:bg-right dark:from-accent-400 dark:via-cyan-400 dark:to-sky-400 dark:text-ink dark:shadow-accent-400/20',
  secondary:
    'border border-slate-300 bg-white/70 text-slate-800 backdrop-blur hover:border-slate-400 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/30 dark:hover:bg-white/10',
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
}: {
  href: string
  children: ReactNode
  variant?: keyof typeof buttonStyles
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-500 active:scale-[0.98] ${buttonStyles[variant]}`}
    >
      {children}
    </a>
  )
}

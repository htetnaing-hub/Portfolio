import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useInView } from 'motion/react'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile, stats } from '../data/profile'
import { ButtonLink } from './ui'
import { SocialLinks } from './Socials'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Backdrop />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-32 pb-16 sm:px-6 sm:pt-40 lg:grid-cols-[1.3fr_1fr] lg:px-8 lg:pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50/80 px-3 py-1 text-sm font-medium text-emerald-800 backdrop-blur dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Htet Naing <span className="text-gradient animate-gradient">Aung</span>
          </motion.h1>

          <motion.div variants={item} className="mt-4 h-9 text-xl font-semibold sm:text-2xl">
            <RotatingRole />
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-slate-100">{profile.headline}</span> {profile.summary}
          </motion.p>

          <motion.p variants={item} className="mt-5 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
            <MapPin className="size-4" /> {profile.location}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={profile.cv} external>
              <Download className="size-4" /> Download resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Get in touch <ArrowRight className="size-4" />
            </ButtonLink>
          </motion.div>
          <motion.div variants={item} className="mt-5 -ml-2">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <Portrait />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-4 dark:border-white/10 dark:bg-white/10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/90 px-6 py-6 backdrop-blur dark:bg-ink/90">
              <dd className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                <Counter to={s.value} />
                <span className="text-gradient">{s.suffix}</span>
              </dd>
              <dt className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgb(148_163_184/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.12)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_55%,transparent_100%)] dark:[background-image:linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)]" />
      <div className="animate-aurora absolute -top-48 -left-32 size-[560px] rounded-full bg-accent-400/25 blur-[120px] dark:bg-accent-600/20" />
      <div className="animate-aurora absolute -top-24 right-[-10%] size-[520px] rounded-full bg-green-300/25 blur-[120px] [animation-delay:-6s] dark:bg-green-600/15" />
      <div className="animate-aurora absolute top-[40%] left-[35%] size-[420px] rounded-full bg-lime-200/30 blur-[120px] [animation-delay:-12s] dark:bg-lime-500/10" />
    </div>
  )
}

function RotatingRole() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % profile.roles.length), 2600)
    return () => clearInterval(id)
  }, [])
  return (
    <p className="relative flex items-center gap-2 text-slate-700 dark:text-slate-300">
      <span className="font-mono text-accent-600 dark:text-accent-400">&gt;</span>
      <span className="sr-only">{profile.roles.join(', ')}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[index]}
          aria-hidden
          initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
          transition={{ duration: 0.35 }}
          className="inline-block"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
      <span aria-hidden className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-accent-500" />
    </p>
  )
}

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current
    const controls = animate(0, to, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => (node.textContent = Math.round(v).toString()),
    })
    return () => controls.stop()
  }, [inView, to])
  return <span ref={ref}>{to}</span>
}

function Portrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-sm"
    >
      {/* Rotating conic-gradient ring */}
      <div className="relative overflow-hidden rounded-[2rem] p-[2px] shadow-2xl shadow-accent-900/10 dark:shadow-accent-500/10">
        <div
          aria-hidden
          className="animate-spin-slow absolute top-1/2 left-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,#10b981,#22c55e,#a3e635,#10b981)]"
        />
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={562}
          height={587}
          className="relative aspect-[562/587] w-full rounded-[calc(2rem-2px)] object-cover"
        />
      </div>

      <div className="animate-float absolute -bottom-8 -left-6 hidden w-64 rounded-xl border border-slate-200 bg-white/90 font-mono text-[11px] leading-relaxed shadow-xl backdrop-blur-md sm:block lg:-left-14 dark:border-white/10 dark:bg-slate-900/90">
        <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2 dark:border-white/10">
          <span className="size-2.5 rounded-full bg-rose-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-slate-400">OrderController.java</span>
        </div>
        <pre className="overflow-hidden px-3 py-2.5 text-slate-600 dark:text-slate-300">
          <span className="text-amber-600 dark:text-amber-300">@RestController</span>
          {'\n'}
          <span className="text-violet-600 dark:text-violet-400">class</span> OrderController {'{'}
          {'\n  '}
          <span className="text-amber-600 dark:text-amber-300">@GetMapping</span>(
          <span className="text-emerald-600 dark:text-emerald-400">"/orders/{'{id}'}"</span>)
          {'\n  '}Order <span className="text-sky-600 dark:text-sky-400">find</span>(Long id) {'{'}
          {'\n    '}
          <span className="text-violet-600 dark:text-violet-400">return</span> service.find(id);
          {'\n  }\n}'}
        </pre>
      </div>

      <div className="animate-float absolute -top-5 -right-3 rounded-xl border border-slate-200 bg-white/90 px-3.5 py-2.5 shadow-lg backdrop-blur-md [animation-delay:-3s] sm:-right-8 dark:border-white/10 dark:bg-slate-900/90">
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Experience</p>
        <p className="text-sm font-bold text-slate-900 dark:text-white">5+ years · Java</p>
      </div>
    </motion.div>
  )
}

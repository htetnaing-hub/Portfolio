import { useState } from 'react'
import { Check, Copy, Download, Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import { ButtonLink, Reveal } from './ui'
import { socials } from '../data/socials'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-14 text-center sm:px-12 dark:bg-slate-900 dark:ring-1 dark:ring-slate-800">
            <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent-500/25 blur-3xl" />
            <p className="relative font-mono text-sm font-medium text-accent-300">07 · Contact</p>
            <h2 id="contact-title" className="relative mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let's build something reliable together
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-lg text-slate-300">
              I'm open to Java backend roles, remote or on-site. The fastest way to reach me is email or LinkedIn.
            </p>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={`mailto:${profile.email}`}>
                <Mail className="size-4" /> {profile.email}
              </ButtonLink>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800"
              >
                {copied ? <Check className="size-4 text-accent-400" /> : <Copy className="size-4" />}
                {copied ? 'Copied!' : 'Copy email'}
              </button>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800"
              >
                <Download className="size-4" /> Resume (PDF)
              </a>
            </div>

            <p className="relative mt-6 inline-flex items-center gap-2 text-sm text-slate-400">
              <Phone className="size-4" />
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-white">
                {profile.phone}
              </a>
              <span aria-hidden>·</span> Phone / Zalo
            </p>

            <ul className="relative mt-8 flex flex-wrap justify-center gap-3">
              {socials
                .filter((s) => s.label !== 'Email')
                .map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="size-4" /> {label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

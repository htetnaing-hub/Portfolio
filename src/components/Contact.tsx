import { useState } from 'react'
import { Check, Copy, Download, Mail, Phone } from 'lucide-react'
import { FaLine, FaWhatsapp } from 'react-icons/fa6'
import { profile } from '../data/profile'
import { socials } from '../data/socials'
import { Reveal } from './ui'

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

  const channels = [
    { label: 'Phone / Zalo', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, Icon: Phone },
    { label: 'WhatsApp', value: profile.whatsapp, href: profile.links.whatsapp, Icon: FaWhatsapp },
    { label: 'LINE', value: profile.line, href: profile.links.line, Icon: FaLine },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-slate-50/80 dark:bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f2a2c] to-[#0f766e] px-6 dark:from-[#0f3b3a] dark:to-[#0b1f2a] py-16 text-center ring-1 ring-white/10 sm:px-12">
            <div aria-hidden className="animate-aurora absolute -top-32 left-[10%] -z-10 size-96 rounded-full bg-accent-500/20 blur-[100px]" />
            <div aria-hidden className="animate-aurora absolute -right-20 -bottom-40 -z-10 size-96 rounded-full bg-accent-300/20 blur-[100px] [animation-delay:-8s]" />
            <div
              aria-hidden
              className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:40px_40px]"
            />

            <p className="font-mono text-sm font-medium text-accent-300">08 · Contact</p>
            <h2 id="contact-title" className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-balance text-white sm:text-5xl">
              Let's build something <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-300 bg-clip-text text-transparent">reliable</span> together
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-pretty text-slate-300">
              I'm open to Full Stack, Java and Senior Java roles, remote, hybrid or on-site. The fastest way to reach me is email or LinkedIn.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-400 via-accent-400 to-accent-300 px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-accent-400/20"
              >
                <Mail className="size-4" /> {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10"
              >
                {copied ? <Check className="size-4 text-accent-300" /> : <Copy className="size-4" />}
                {copied ? 'Copied!' : 'Copy email'}
              </button>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10"
              >
                <Download className="size-4" /> Resume (PDF)
              </a>
            </div>

            <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(href.startsWith('tel') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-left ring-1 ring-white/10 transition-colors hover:bg-white/10"
                  >
                    <Icon className="size-5 shrink-0 text-accent-300" />
                    <span>
                      <span className="block text-xs text-slate-400">{label}</span>
                      <span className="block text-sm font-medium whitespace-nowrap text-white">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {socials
                .filter((s) => s.label === 'GitHub' || s.label === 'LinkedIn')
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

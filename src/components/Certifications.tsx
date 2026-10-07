import { useState } from 'react'
import { BadgeCheck, ExternalLink, ZoomIn } from 'lucide-react'
import { certifications } from '../data/profile'
import { Reveal, Section, SpotlightCard } from './ui'
import { Lightbox, type LightboxImage } from './Lightbox'

export function Certifications() {
  const [preview, setPreview] = useState<LightboxImage | null>(null)

  return (
    <Section
      id="certifications"
      eyebrow="06 · Certifications"
      title={
        <>
          <span className="text-gradient">{certifications.length} verified</span> certifications
        </>
      }
      intro="Software engineering, cloud and API certifications from HackerRank, Oracle and Google Cloud. Each one links to its official verification page."
      muted
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.06} className="h-full">
            <SpotlightCard className="flex h-full flex-col overflow-hidden">
              <button
                type="button"
                onClick={() => setPreview({ src: c.image, alt: `${c.name} certificate` })}
                className="group relative block overflow-hidden rounded-t-2xl border-b border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5"
                aria-label={`View ${c.name} certificate`}
              >
                <img
                  src={c.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[7/5] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-ink/0 opacity-0 transition-all group-hover:bg-ink/40 group-hover:opacity-100">
                  <ZoomIn className="size-8 text-white" />
                </span>
              </button>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <BadgeCheck className="size-4 text-accent-600 dark:text-accent-400" />
                  {c.issuer} · {c.date}
                </div>
                <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">{c.name}</h3>
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-accent-700 hover:underline dark:text-accent-300"
                >
                  Verify credential <ExternalLink className="size-3.5" />
                </a>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
      <Lightbox image={preview} onClose={() => setPreview(null)} />
    </Section>
  )
}

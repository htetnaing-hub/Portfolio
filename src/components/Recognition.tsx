import { useState } from 'react'
import { Award, GraduationCap } from 'lucide-react'
import { awards, education } from '../data/profile'
import { Reveal, Section, SpotlightCard } from './ui'
import { Lightbox, type LightboxImage } from './Lightbox'

export function Recognition() {
  const [preview, setPreview] = useState<LightboxImage | null>(null)

  const items = [
    ...awards.map((a) => ({ ...a, icon: Award, meta: `${a.org} · ${a.date}` })),
    {
      title: education.degree,
      meta: `${education.school} · ${education.date}`,
      description: 'Undergraduate degree in computer science, the foundation for my work in software engineering.',
      image: education.image,
      icon: GraduationCap,
    },
  ]

  return (
    <Section
      id="recognition"
      eyebrow="07 · Awards & Education"
      title={
        <>
          Recognition and <span className="text-gradient">education</span>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06} className="h-full">
            <SpotlightCard className="flex h-full flex-col overflow-hidden">
              <button
                type="button"
                onClick={() => setPreview({ src: item.image, alt: item.title })}
                className="group block overflow-hidden rounded-t-2xl border-b border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5"
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <item.icon className="size-4 text-accent-600 dark:text-accent-400" />
                  {item.meta}
                </div>
                <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
      <Lightbox image={preview} onClose={() => setPreview(null)} />
    </Section>
  )
}

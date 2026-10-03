import { socials } from '../data/socials'

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-1">
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            {...(href.startsWith('mailto') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
            aria-label={label}
            title={label}
            className="grid size-10 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-accent-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-accent-400"
          >
            <Icon className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  )
}

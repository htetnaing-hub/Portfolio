import { profile } from '../data/profile'
import { SocialLinks } from './Socials'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, Tailwind CSS and Motion.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}

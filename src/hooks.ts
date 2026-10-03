import { useEffect, useState } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
  }, [dark])

  return { dark, toggle: () => setDark((d) => !d) }
}

/** Returns the id of the last section whose top has scrolled past the upper third of the viewport. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const update = () => {
      const line = window.innerHeight / 3
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids])

  return active
}

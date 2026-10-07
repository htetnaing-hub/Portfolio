import { motion, useScroll, useSpring } from 'motion/react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TechMarquee } from './components/TechMarquee'
import { About } from './components/About'
import { ExperienceSection } from './components/Experience'
import { AiEngineering } from './components/AiEngineering'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Certifications } from './components/Certifications'
import { Recognition } from './components/Recognition'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-accent-400 via-accent-400 to-sky-500"
      />
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-accent-700 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TechMarquee />
        <About />
        <ExperienceSection />
        <AiEngineering />
        <Projects />
        <Skills />
        <Certifications />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

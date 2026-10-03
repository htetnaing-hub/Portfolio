import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ExperienceSection } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Certifications } from './components/Certifications'
import { Recognition } from './components/Recognition'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-accent-700 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <ExperienceSection />
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

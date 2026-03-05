import { useState, useEffect, useRef } from 'react'
import './App.css'

import AsciiHero   from './components/AsciiHero.jsx'
import About       from './components/About.jsx'
import Skills      from './components/Skills.jsx'
import Projects    from './components/Projects.jsx'
import Education   from './components/Education.jsx'
import Languages   from './components/Languages.jsx'

export default function App() {
  const [lang, setLang] = useState('en')
  const cursorRef = useRef(null)

  // Custom cursor
  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY - 18}px)`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Scroll reveal — re-runs whenever language changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal')
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      }, { threshold: 0.05 })
      els.forEach((el) => obs.observe(el))
      return () => obs.disconnect()
    }, 100)
    return () => clearTimeout(timer)
  }, [lang])

  const handleLang = (l) => {
    // Remove 'visible' from all .reveal elements before switching
    document.querySelectorAll('.reveal').forEach((el) => el.classList.remove('visible'))
    setLang(l)
  }

  const isEn = lang === 'en'

  return (
    <>
      {/* Blinking block cursor */}
      <div className="cursor" ref={cursorRef} />

      {/* Language toggle */}
      <div className="lang-toggle">
        <button
          className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
          onClick={() => handleLang('en')}
        >EN</button>
        <button
          className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
          onClick={() => handleLang('fr')}
        >FR</button>
      </div>

      <div className="terminal">
        <AsciiHero  lang={lang} />
        <About      lang={lang} />
        <Skills     lang={lang} />
        <Projects   lang={lang} />
        <Education  lang={lang} />
        <Languages  lang={lang} />

        {/* Footer */}
        <div className="footer-prompt">
          <span className="dim">
            {isEn ? '// End of file. Contact: ' : '// Fin de fichier. Contact : '}
          </span>
          <a href="mailto:j.pescador03@gmail.com">j.pescador03@gmail.com</a>
          <span className="dim"> | 438-887-7205</span>
        </div>
      </div>
    </>
  )
}

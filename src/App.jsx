import './assets/style/main.css'
import { About } from './cmps/About'
import { Hero } from './cmps/Hero'
import { Navbar } from './cmps/Navbar'
import { Services } from './cmps/Services'
import { Contact } from './cmps/Contact'
import { Skills } from './cmps/Skills'
import { Footer } from './cmps/Footer'
import { Projects } from './cmps/Projects'
import { WhatsApp } from "./cmps/WhatsApp"
import { CookieConsent } from './cmps/CookieConsent'


import PrivacyPolicy from './pages/PrivacyPolicy'
import AccessibilityStatement from './pages/AccessibilityStatement'

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useRef } from 'react'

function HomePage() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <main className='main-layout'>
      <Hero />
      <About ref={aboutRef} />
      <Services />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Skills />
    </main>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/accessibility" element={<AccessibilityStatement />} />
      </Routes>
      <Footer />
      <WhatsApp />
      <CookieConsent />
    </Router>
  )
}

export default App

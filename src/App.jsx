import { useState } from 'react'
import './App.css'
import { useSmoothScroll } from './hooks/useSmoothScroll.js'
import {
  navLinks,
  hero,
  coreSkills,
  detailedSkills,
  projects,
  blogs,
  contact,
  footerLinks
} from './data.js'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import PortfolioSection from './components/PortfolioSection.jsx'
import BlogSection from './components/BlogSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  useSmoothScroll();
  return (
    <>
      <Navbar links={navLinks} />
      <HeroSection {...hero} />
      <SkillsSection coreSkills={coreSkills} detailedSkills={detailedSkills} />
      <PortfolioSection projects={projects} />
      <BlogSection blogs={blogs} />
      <ContactSection contact={contact} />
      <Footer footerLinks={footerLinks} />
    </>
  )
}

export default App

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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hobbies from './components/Hobbies.jsx';
import Events from './components/Events.jsx';
import Writings from './components/Writings.jsx';
import Volunteering from './components/Volunteering.jsx';

function MainSections() {
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
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSections />} />
        <Route path="/events" element={<Events />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/writings" element={<Writings />} />
        <Route path="/volunteering" element={<Volunteering />} />
      </Routes>
    </Router>
  );
}

export default App

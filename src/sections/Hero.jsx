import { useState, useEffect } from 'react';
import './Hero.css';
import avatarImage from '../assets/images/s2.png';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = [
    'Machine Learning Engineer',
    'Deep Learning Researcher',
    'AI Enthusiast',
    'Data Scientist'
  ];
  
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeEffect = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        // Deleting text
        setTypedText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        // Typing text
        setTypedText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }
      
      // Determine speed based on whether typing or deleting
      let typeSpeed = isDeleting ? 50 : 100;
      
      // If complete - pause and then reverse
      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at the end
        typeSpeed = 1000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Move to next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        // Pause before typing next role
        typeSpeed = 500;
      }
      
      setTimeout(typeEffect, typeSpeed);
    };
    
    const timerId = setTimeout(typeEffect, 1000);
    
    return () => clearTimeout(timerId);
  }, []);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="hero">
      <div className="neural-bg"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="bitmoji-container">
            <div className="avatar-placeholder">
              <img src={avatarImage} alt="Profile" className="avatar-image" />
            </div>
          </div>
          
          <h1 className="hero-title">Hi, I'm <span className="accent">Arjun Sarkar</span></h1>
          
          <div className="hero-subtitle">
            <span className="typed-text">{typedText}</span>
          </div>
          
          <p className="hero-description">
            Building intelligent systems that make a real-world impact
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              Explore My Work
            </button>
            <button className="btn" onClick={() => scrollToSection('contact')}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
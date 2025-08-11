import React from 'react';
import '../App.css';
import { useHeaderScroll } from '../hooks/useHeaderScroll.js';

// Usage: <Navbar links={navLinks} />
export default function Navbar({ links }) {
  const headerRef = useHeaderScroll();
  return (
    <header className="main-header" ref={headerRef}>
      <div className="nav-container">
        <nav className="main-nav" aria-label="Main navigation">
          {links.map(link => (
            <a key={link.label} href={link.href} className="nav-link" role="link" tabIndex={0}>
              <img src={new URL(`../assets/svg/${link.icon}`, import.meta.url).href} alt={link.label} className={`nav-icon nav-icon-${link.label.replace(/\s+/g, '').toLowerCase()}`} />
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
} 
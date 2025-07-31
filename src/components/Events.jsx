import React from 'react';
import '../App.css';
import Footer from './Footer.jsx';
import { footerLinks } from '../data.js';

export default function Events() {
  return (
    <div>
      <section className="blog-section">
        <div className="container">
          <div className="section-title centered">
            <span className="tagline">Extracurricular</span>
            <h2>Events</h2>
            <p>Explore my event journey and achievements.</p>
          </div>
          <div className="blog-grid">
            <article className="blog-card">
              <div className="card-content">
                <h3 style={{ color: 'var(--color-text-dark)' }}>All Events</h3>
                <ul style={{ marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--color-text-dark)' }}>
                  <li>🕵️‍♂️ <strong>CSSA CTF 2025 Murder Mystery Edition</strong> <br /> ↳ Participated with a team of 3 to solve a murder mystery through a series of hacking challenges.</li> <br />
                  <li>🚀 <strong>Sprint To Innovate 2025</strong> <br /> ↳ Created and pitched a MVP of a DEI compliant IOS App for HR professionals and organizations.</li> <br />
                  <li>👥 <strong>Better Together 2024</strong> <br /> ↳ Developed a website to alleviate housing stress for students at university.</li> <br/>
                  <li>🐱 <strong>devHacks 2024</strong> <br /> ↳ Built a tinder app for cats!</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
      <Footer footerLinks={footerLinks} />
    </div>
  );
} 
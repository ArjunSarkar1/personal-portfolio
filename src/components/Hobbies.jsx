import React from 'react';
import '../App.css';
import Footer from './Footer.jsx';
import { footerLinks } from '../data.js';

export default function Hobbies() {
  return (
    <div>
      <div>
        <section className="blog-section">
          <div className="container">
            <div className="section-title centered">
              <span className="tagline">Extracurricular</span>
              <h2>Hobbies</h2>
              <p>Discover my favorite pastimes and creative pursuits outside of work and academics.</p>
            </div>
            <div className="blog-grid">
              <article className="blog-card">
                <div className="card-content">
                  <h3 style={{ color: 'var(--color-text-dark)' }}>What I Love Doing</h3>
                  <ul style={{ marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--color-text-dark)' }}>
                    <li>♟️ Chess</li>
                    <li>📷 Gymming and Working Out</li>
                    <li>🏃‍♂️ Running and outdoor adventures</li>
                    <li>📚 Reading and writing blogs</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      <Footer footerLinks={footerLinks} />
    </div>
  );
} 
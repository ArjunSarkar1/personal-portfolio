import React from 'react';
import '../App.css';
import Footer from './Footer.jsx';
import { footerLinks } from '../data.js';

export default function Writings() {
  return (
    <div>
      <section className="blog-section">
        <div className="container">
          <div className="section-title centered">
            <span className="tagline">Extracurricular</span>
            <h2>Writings</h2>
            <p>Browse my academic papers, essays, reflections, reports and other literature.</p>
          </div>
          <div className="blog-grid">
            <article className="blog-card">
              <div className="card-content">
                <h3 style={{ color: 'var(--color-text-dark)' }}>Academic Literature</h3>
                <ul style={{ marginTop: '1.5rem', fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--color-text-dark)' }}>
                  <li>🤖 <strong>Optimizing Matrix Operations for Machine Learning: Analysis of AMD's MI100 GPU</strong> – <em>Research Paper, 2025</em></li> <br />
                  <li>📊 <strong>Bayesian Imitation Learning with Uncertainty Propagation</strong> – <em>Research Paper, 2024</em></li> <br />
                  <li>👀 <strong>Ethics in Surveillance Capitalism</strong> – <em>Reflection Essay, 2024</em></li> <br />
                  <li>✍ <strong>Lessons in Software Safety</strong> – <em>Reflection Essay, 2024</em></li> <br />
                  <li>👨‍💻 <strong>AI Ownership</strong> – <em>Reflection Essay, 2024</em></li> <br />
                  <li>🔐 <strong>Addressing Cyber Attacks</strong> – <em>Reflection Essay, 2024</em></li> <br />
                  <li>👥 <strong>Teamwork Effectiveness</strong> – <em>Reflection Essay, 2024</em></li> <br />
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
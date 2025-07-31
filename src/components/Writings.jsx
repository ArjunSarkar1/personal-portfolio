import React, { useState } from 'react';
import '../App.css';
import Footer from './Footer.jsx';
import { footerLinks } from '../data.js';

// PDF Modal Component
function PDFModal({ isOpen, onClose, pdfUrl, title }) {
  if (!isOpen) return null;

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <h3>{title}</h3>
          <button className="pdf-modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="pdf-modal-content">
          <iframe
            src={pdfUrl}
            width="100%"
            height="600px"
            title={title}
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Writings() {
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // PDF mappings
  const pdfMappings = {
    'Optimizing Matrix Operations for Machine Learning: Analysis of AMD\'s MI100 GPU': '/src/assets/pdfs/OMPML.pdf',
    'Bayesian Imitation Learning with Uncertainty Propagation': '/src/assets/pdfs/BILUP.pdf',
    'Lessons in Software Safety': '/src/assets/pdfs/SoftwareSafety.pdf',
    'Teamwork Effectiveness': '/src/assets/pdfs/Teamwork.pdf',
    'AI Ownership': '/src/assets/pdfs/AIOwnership.pdf',
    'Ethics in Surveillance Capitalism': '/src/assets/pdfs/Capitalism.pdf',
    'Addressing Cyber Attacks': '/src/assets/pdfs/CyberAttacks.pdf'
  };

  const handlePDFClick = (title) => {
    if (pdfMappings[title]) {
      setSelectedPDF({ url: pdfMappings[title], title });
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPDF(null);
  };

  const renderWritingItem = (title, type, year) => {
    const hasPDF = pdfMappings[title];
    
    return (
      <li key={title} style={{ marginBottom: 'var(--space-4)' }}>
        <div style={{ marginBottom: 'var(--space-2)' }}>
          <strong>{title}</strong>
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          fontSize: '1rem',
          color: 'var(--color-text-muted)'
        }}>
          <span><em>{type}, {year}</em></span>
          {hasPDF && (
            <button 
              onClick={() => handlePDFClick(title)}
              className="view-file-btn"
              style={{ 
                background: 'var(--color-accent)',
                color: 'var(--color-text-light)',
                border: 'none',
                padding: 'var(--space-1) var(--space-3)',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'var(--font-weight-medium)',
                transition: 'all var(--transition-normal)'
              }}
            >
              View file
            </button>
          )}
        </div>
      </li>
    );
  };

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
                  {renderWritingItem('Optimizing Matrix Operations for Machine Learning: Analysis of AMD\'s MI100 GPU', 'Research Paper', '2025')}
                  {renderWritingItem('Bayesian Imitation Learning with Uncertainty Propagation', 'Research Paper', '2024')}
                  {renderWritingItem('Ethics in Surveillance Capitalism', 'Reflection Essay', '2024')}
                  {renderWritingItem('Lessons in Software Safety', 'Reflection Essay', '2024')}
                  {renderWritingItem('AI Ownership', 'Reflection Essay', '2024')}
                  {renderWritingItem('Addressing Cyber Attacks', 'Reflection Essay', '2024')}
                  {renderWritingItem('Teamwork Effectiveness', 'Reflection Essay', '2024')}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
      
      {/* PDF Modal */}
      <PDFModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        pdfUrl={selectedPDF?.url}
        title={selectedPDF?.title}
      />
      
      <Footer footerLinks={footerLinks} />
    </div>
  );
} 
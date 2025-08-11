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

  const writings = [
    { title: 'Optimizing Matrix Operations for Machine Learning: Analysis of AMD\'s MI100 GPU', type: 'Research Paper', year: '2025' },
    { title: 'Bayesian Imitation Learning with Uncertainty Propagation', type: 'Research Paper', year: '2024' },
    { title: 'Ethics in Surveillance Capitalism', type: 'Reflection Essay', year: '2024' },
    { title: 'Lessons in Software Safety', type: 'Reflection Essay', year: '2024' },
    { title: 'AI Ownership', type: 'Reflection Essay', year: '2024' },
    { title: 'Addressing Cyber Attacks', type: 'Reflection Essay', year: '2024' },
    { title: 'Teamwork Effectiveness', type: 'Reflection Essay', year: '2024' }
  ];

  return (
    <div>
      <section className="blog-section">
        <div className="container">
          <div className="section-title centered">
            <span className="tagline">Extracurricular</span>
            <h2>Writings</h2>
            <p>Browse my academic papers, essays, reflections, reports and other literature.</p>
          </div>
          <div className="writings-table-container">
            <table className="writings-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {writings.map((writing, index) => (
                  <tr key={index}>
                    <td>{writing.year}</td>
                    <td>{writing.title}</td>
                    <td>{writing.type}</td>
                    <td>
                      {pdfMappings[writing.title] && (
                        <button 
                          onClick={() => handlePDFClick(writing.title)}
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
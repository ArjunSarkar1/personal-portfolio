import { useState } from 'react';
import './Publications.css';
import SectionTitle from '../components/SectionTitle';

const Publications = () => {
  const [expandedId, setExpandedId] = useState(null);
  
  const publicationsData = [
    {
      id: 1,
      title: "Attention-Based Transformers for Biomedical Image Segmentation",
      authors: "Your Name, Collaborator A, Collaborator B",
      journal: "IEEE Transactions on Medical Imaging",
      year: 2023,
      doi: "10.1109/TMI.2023.1234567",
      abstract: "In this paper, we propose a novel transformer-based architecture for biomedical image segmentation that achieves state-of-the-art performance on several benchmark datasets. Our method leverages self-attention mechanisms to capture long-range dependencies in medical images, resulting in more accurate tumor delineation. Experimental results on the BraTS and ISIC datasets demonstrate the effectiveness of our approach.",
      link: "https://ieeexplore.ieee.org/document/1234567"
    },
    {
      id: 2,
      title: "Self-Supervised Learning for Medical Time Series Analysis",
      authors: "Your Name, Collaborator C, Collaborator D",
      journal: "Neural Information Processing Systems (NeurIPS)",
      year: 2022,
      doi: "10.48550/arXiv.2208.12345",
      abstract: "We present a self-supervised learning framework for time series data in healthcare applications. By leveraging unlabeled data, our approach learns meaningful representations that transfer well to downstream tasks such as disease prediction and patient monitoring. We evaluate our method on several electronic health record datasets and show improved performance compared to supervised learning approaches, especially in low-data regimes.",
      link: "https://arxiv.org/abs/2208.12345"
    },
    {
      id: 3,
      title: "Robust Reinforcement Learning for Autonomous Systems",
      authors: "Collaborator E, Your Name, Collaborator F",
      journal: "International Conference on Machine Learning (ICML)",
      year: 2021,
      doi: "10.48550/arXiv.2107.12345",
      abstract: "This paper addresses the challenge of training robust reinforcement learning agents for autonomous systems. We introduce a novel regularization technique that significantly improves the agent's ability to generalize to unseen environments and perturbations. Extensive experiments in simulated robotics tasks show that our method outperforms existing approaches in terms of sample efficiency and transfer to real-world scenarios.",
      link: "https://arxiv.org/abs/2107.12345"
    },
    {
      id: 4,
      title: "Interpretable Deep Learning Models for Genomic Data",
      authors: "Your Name, Collaborator G",
      journal: "Bioinformatics",
      year: 2021,
      doi: "10.1093/bioinformatics/btab123",
      abstract: "We develop an interpretable deep learning framework for analyzing genomic data, with a focus on variant calling and gene expression prediction. Our approach incorporates attention mechanisms and feature attribution techniques to provide biological insights into model decisions. Case studies on cancer genomics demonstrate how our models can identify key genetic variants while maintaining competitive accuracy with black-box models.",
      link: "https://academic.oup.com/bioinformatics/article/37/3/1234/6123456"
    }
  ];
  
  const toggleAbstract = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  return (
    <section id="publications" className="publications">
      <div className="container">
        <SectionTitle title="Research Publications" />
        
        <div className="publications-list">
          {publicationsData.map((publication) => (
            <div key={publication.id} className="publication-item">
              <div className="publication-year">
                <span>{publication.year}</span>
              </div>
              
              <div className="publication-content">
                <h3 className="publication-title">
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">
                    {publication.title}
                  </a>
                </h3>
                
                <div className="publication-authors">{publication.authors}</div>
                
                <div className="publication-journal">
                  <span className="journal-name">{publication.journal}</span>
                  <span className="publication-doi">DOI: {publication.doi}</span>
                </div>
                
                <button 
                  className={`abstract-toggle ${expandedId === publication.id ? 'active' : ''}`}
                  onClick={() => toggleAbstract(publication.id)}
                >
                  {expandedId === publication.id ? 'Hide Abstract' : 'Show Abstract'}
                  <span className="toggle-icon"></span>
                </button>
                
                {expandedId === publication.id && (
                  <div className="publication-abstract">
                    <p>{publication.abstract}</p>
                  </div>
                )}
                
                <div className="publication-links">
                  <a href={publication.link} target="_blank" rel="noopener noreferrer" className="publication-link">
                    View Paper
                  </a>
                  <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer" className="publication-link">
                    DOI Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="publications-cta">
          <a href="https://scholar.google.com/citations?user=yourid" target="_blank" rel="noopener noreferrer" className="btn">
            View Google Scholar Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications; 
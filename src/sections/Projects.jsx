import { useState } from 'react';
import './Projects.css';
import SectionTitle from '../components/SectionTitle';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projectsData = [
    {
      id: 1,
      title: "Transformer Model for Medical Image Analysis",
      description: "Developed a novel transformer-based deep learning architecture for segmenting brain tumors in MRI scans, achieving state-of-the-art performance on the BraTS dataset.",
      technologies: ["PyTorch", "Medical Imaging", "Transformers", "CUDA"],
      category: "ai",
      image: "project-placeholder-1.jpg",
      links: {
        github: "https://github.com/yourusername/medical-transformer",
        demo: "https://medical-transformer.demo.com",
        paper: "https://arxiv.org/abs/xxxx.xxxxx"
      },
      impact: "Improved tumor detection accuracy by 15% compared to CNN-based approaches."
    },
    {
      id: 2,
      title: "NLP-Powered Financial Sentiment Analysis",
      description: "Created a BERT-based model to analyze sentiment in financial news articles and predict market movements. Integrated with a dashboard for real-time monitoring.",
      technologies: ["NLP", "BERT", "Python", "Streamlit", "Financial Data"],
      category: "nlp",
      image: "project-placeholder-2.jpg",
      links: {
        github: "https://github.com/yourusername/financial-sentiment",
        demo: "https://financial-sentiment.demo.com"
      },
      impact: "Achieved 78% accuracy in predicting next-day market direction based on news sentiment."
    },
    {
      id: 3,
      title: "Data-Driven Climate Change Visualization",
      description: "Built an interactive web platform to visualize global climate data, allowing users to explore temperature changes, emissions, and sea level rises over time.",
      technologies: ["D3.js", "React", "Data Visualization", "Geospatial Analysis", "Python"],
      category: "data",
      image: "project-placeholder-3.jpg",
      links: {
        github: "https://github.com/yourusername/climate-viz",
        demo: "https://climate-viz.demo.com"
      },
      impact: "Featured in academic publications and used as an educational tool in environmental science courses."
    },
    {
      id: 4,
      title: "Reinforcement Learning for Robotic Control",
      description: "Implemented a reinforcement learning algorithm to teach a simulated robotic arm complex manipulation tasks through trial and error.",
      technologies: ["Reinforcement Learning", "PyTorch", "ROS", "Simulation", "Robotics"],
      category: "ai",
      image: "project-placeholder-4.jpg",
      links: {
        github: "https://github.com/yourusername/rl-robotics",
        demo: "https://rl-robotics.demo.com",
        paper: "https://arxiv.org/abs/xxxx.xxxxx"
      },
      impact: "Reduced training time by 40% compared to conventional RL approaches."
    },
    {
      id: 5,
      title: "Anomaly Detection in Network Traffic",
      description: "Developed an unsupervised learning system to detect anomalies in network traffic patterns, helping identify potential security threats and intrusions.",
      technologies: ["Anomaly Detection", "Cybersecurity", "Scikit-learn", "TensorFlow", "Time Series Analysis"],
      category: "data",
      image: "project-placeholder-5.jpg",
      links: {
        github: "https://github.com/yourusername/network-anomaly",
        demo: "https://network-anomaly.demo.com"
      },
      impact: "Deployed in production environments with 95% precision in identifying malicious traffic patterns."
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionTitle title="AI & ML Projects" />
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ai')}
          >
            AI/ML
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'nlp' ? 'active' : ''}`}
            onClick={() => setActiveFilter('nlp')}
          >
            NLP
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'data' ? 'active' : ''}`}
            onClick={() => setActiveFilter('data')}
          >
            Data Science
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder" style={{ backgroundColor: `hsl(${project.id * 60}, 50%, 20%)` }}>
                  <div className="placeholder-icon">{project.category.toUpperCase()}</div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-impact">
                  <strong>Impact:</strong> {project.impact}
                </div>
                
                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                      GitHub
                    </a>
                  )}
                  
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">
                      Live Demo
                    </a>
                  )}
                  
                  {project.links.paper && (
                    <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="project-link paper">
                      Research Paper
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
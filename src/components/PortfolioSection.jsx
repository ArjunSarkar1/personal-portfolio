import React, { useState, useMemo } from 'react';
import '../App.css';
import boxUpArrow from '../assets/svg/box-up-arrow.svg';

// Vite dynamic image import
const images = import.meta.glob('../assets/images/portfolio/*/*.{png,jpg,jpeg,svg}', { eager: true });

// Usage: <PortfolioSection projects={projects} />
export default function PortfolioSection({ projects }) {
  const INITIAL_VISIBLE = 3;
  const INCREMENT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [activeFilter, setActiveFilter] = useState('all');

  // Extract unique categories from project tags
  const categories = useMemo(() => {
    const allTags = projects.flatMap(project => project.tags || []);
    const uniqueTags = [...new Set(allTags)];
    return ['all', ...uniqueTags];
  }, [projects]);

  const handleViewMore = () => {
    setVisibleCount(prev => prev + INCREMENT);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => 
      project.tags && project.tags.some(tag => tag.includes(activeFilter))
    );
  }, [projects, activeFilter]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const showViewMore = visibleCount < filteredProjects.length;
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-title centered">
          <span className="tagline-light">Portfolio</span>
          <h2>My Recent Projects</h2>
          <p>Explore my innovative projects and their impact.</p>
        </div>
        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => handleFilterChange(category)}
              aria-pressed={activeFilter === category}
              aria-label={category === 'all' ? 'Show all projects' : `Filter by ${category}`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-column">
            {visibleProjects.map(project => {
              let imageSrc = '';
              if (project.image.startsWith('portfolio/')) {
                const imagePath = `../assets/images/${project.image}`;
                imageSrc = images[imagePath]?.default || '';
              } else if (project.image.startsWith('svg/')) {
                imageSrc = new URL(`../assets/${project.image}`, import.meta.url).href;
              }
              return (
                <article className="project-card" key={project.title} data-project-card>
                  <img src={imageSrc} alt={project.title} loading="lazy" width="100%" height="auto" />
                  <div className="card-content">
                    <h3>{project.title}</h3>
                    <div className="project-meta">
                      <span className="project-date">{project.date}</span>
                      <span className={`project-status ${project.status.toLowerCase().replace(/ /g, '-')}`}>{project.status}</span>
                    </div>
                    <p>{project.description}</p>
                    {project.impact && (
                      <div className="project-impact">
                        <strong>Impact:</strong> {project.impact}
                      </div>
                    )}
                    {project.tags && (
                      <div className="tags">
                        {project.tags.map(tag => (
                          <span className="skill-tag" key={tag}>{tag}</span>
                        ))}
                      </div>
                    )}
                    {project.link && (
                      <a href={project.link} className="btn-link-light" target="_blank" rel="noopener noreferrer">
                        View Project
                        <img src={boxUpArrow} alt="Open" className="btn-icon project-arrow" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {showViewMore && (
          <button id="view-more-projects" className="btn" onClick={handleViewMore} aria-label="Show more projects">
            View More
          </button>
        )}
      </div>
    </section>
  );
} 
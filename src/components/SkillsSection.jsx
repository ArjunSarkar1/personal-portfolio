import React from 'react';
import '../App.css';

// Usage: <SkillsSection coreSkills={coreSkills} detailedSkills={detailedSkills} />
export default function SkillsSection({ coreSkills, detailedSkills }) {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <span className="tagline">Skills</span>
          <h2>Core Competencies</h2>
          <p>I love to build clean, efficient systems and design user-focused applications. My work combines solid engineering with a deep curiosity for solving real-world problems through code.</p>
        </div>
        <div className="skills-grid">
          {coreSkills.map(skill => (
            <div className="skill-item" key={skill.title}>
              <img src={new URL(`../assets/svg/${skill.icon}`, import.meta.url).href} alt={skill.title} />
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
        <div className="detailed-skills">
          {detailedSkills.map(cat => (
            <div className="skills-category" key={cat.category}>
              <h3>{cat.category}</h3>
              <div className="skills-list">
                {cat.skills.map(skill => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
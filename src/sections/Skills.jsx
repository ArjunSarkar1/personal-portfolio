import { useEffect, useRef } from 'react';
import './Skills.css';
import SectionTitle from '../components/SectionTitle';

const Skills = () => {
  const skillsRef = useRef(null);
  const skillBarsRef = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        skillBarsRef.current.forEach((bar) => {
          if (bar) {
            bar.classList.add('animate');
          }
        });
      }
    }, { threshold: 0.3 });
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Java", level: 70 },
        { name: "JavaScript", level: 65 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "Pandas", level: 95 },
        { name: "React", level: 60 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Jupyter", level: 95 },
        { name: "Git", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Tableau", level: 70 },
        { name: "AWS", level: 65 }
      ]
    },
    {
      title: "Concepts",
      skills: [
        { name: "Deep Learning", level: 90 },
        { name: "NLP", level: 85 },
        { name: "Computer Vision", level: 80 },
        { name: "Statistical Analysis", level: 90 },
        { name: "Data Visualization", level: 85 }
      ]
    }
  ];
  
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionTitle title="Skills" />
        
        <div ref={skillsRef} className="skills-container">
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skills-category">
                <h3 className="category-title">{category.title}</h3>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => {
                    const globalIndex = categoryIndex * 5 + skillIndex;
                    return (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar-container">
                          <div 
                            ref={el => skillBarsRef.current[globalIndex] = el}
                            className="skill-bar" 
                            style={{ width: '0%', '--final-width': `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skills-radar-container">
          <h3 className="radar-title">Skills Visualization</h3>
          <div className="radar-chart">
            <div className="radar-placeholder">
              <div className="radar-circle c1"></div>
              <div className="radar-circle c2"></div>
              <div className="radar-circle c3"></div>
              <div className="radar-circle c4"></div>
              <div className="radar-data"></div>
              
              <div className="radar-axis a1"></div>
              <div className="radar-axis a2"></div>
              <div className="radar-axis a3"></div>
              <div className="radar-axis a4"></div>
              <div className="radar-axis a5"></div>
              
              <div className="radar-label l1">Programming</div>
              <div className="radar-label l2">Frameworks</div>
              <div className="radar-label l3">Tools</div>
              <div className="radar-label l4">AI/ML</div>
              <div className="radar-label l5">Research</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 
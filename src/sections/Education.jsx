import { useEffect, useRef } from 'react';
import './Education.css';
import SectionTitle from '../components/SectionTitle';

const Education = () => {
  const educationData = [
    {
      id: 1,
      date: '2020 - 2022',
      degree: 'Master of Science',
      institution: 'Stanford University',
      field: 'Computer Science - Artificial Intelligence',
      description: 'Focused on deep learning, computer vision and natural language processing. Conducted research on transformer architectures for multimodal learning.'
    },
    {
      id: 2,
      date: '2016 - 2020',
      degree: 'Bachelor of Technology',
      institution: 'Indian Institute of Technology',
      field: 'Computer Science and Engineering',
      description: 'Graduated with honors. Specialized in machine learning and data structures. Completed thesis on efficient algorithms for distributed computing.'
    },
    {
      id: 3,
      date: '2014 - 2016',
      degree: 'Higher Secondary Education',
      institution: 'Delhi Public School',
      field: 'Science and Mathematics',
      description: 'Ranked in the top 1% nationally. Participated in the National Mathematics Olympiad and various technical competitions.'
    }
  ];
  
  return (
    <section id="education" className="education">
      <div className="container">
        <SectionTitle title="Education" />
        
        <div className="education-container">
          <div className="timeline">
            <div className="timeline-line"></div>            
            {educationData.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-circle"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{edu.date}</span>
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <div className="timeline-subtitle">{edu.institution}</div>
                  <div className="timeline-subtitle">{edu.field}</div>
                  <p className="timeline-description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 
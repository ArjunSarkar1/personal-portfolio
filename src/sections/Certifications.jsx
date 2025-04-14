import './Certifications.css';
import SectionTitle from '../components/SectionTitle';

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: "Deep Learning Specialization",
      issuer: "Coursera - Andrew Ng",
      date: "May 2022",
      description: "Comprehensive deep learning program covering CNNs, RNNs, and optimization techniques.",
      link: "https://www.coursera.org/account/accomplishments/specialization/12345"
    },
    {
      id: 2,
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "January 2022",
      description: "Professional certification demonstrating proficiency in building TensorFlow models.",
      link: "https://www.tensorflow.org/certificate"
    },
    {
      id: 3,
      title: "Machine Learning Engineer Nanodegree",
      issuer: "Udacity",
      date: "October 2021",
      description: "Advanced program covering ML deployment, MLOps, and production systems.",
      link: "https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009t"
    },
    {
      id: 4,
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "June 2021",
      description: "Professional certification for ML on AWS cloud infrastructure.",
      link: "https://aws.amazon.com/certification/certified-machine-learning-specialty/"
    },
    {
      id: 5,
      title: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "March 2021",
      description: "Comprehensive program covering data science methodologies, Python, SQL, and visualization.",
      link: "https://www.ibm.com/training/badge/data-science-professional-certificate"
    },
    {
      id: 6,
      title: "Natural Language Processing Specialization",
      issuer: "Coursera - DeepLearning.AI",
      date: "December 2020",
      description: "Advanced NLP techniques using deep learning and transformers.",
      link: "https://www.coursera.org/specializations/natural-language-processing"
    }
  ];
  
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <SectionTitle title="Certifications & Awards" />
        
        <div className="certifications-container">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="certification-item">
              <div className="certification-badge">
                <div className="badge-content">
                  <h3 className="badge-title">{cert.title}</h3>
                  <div className="badge-details">
                    <span className="badge-issuer">{cert.issuer}</span>
                    <span className="badge-date">{cert.date}</span>
                  </div>
                  <p className="badge-description">{cert.description}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="badge-link">
                    Verify Credential
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 
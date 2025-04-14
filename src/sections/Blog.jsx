import './Blog.css';
import SectionTitle from '../components/SectionTitle';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Explainable AI is Crucial for Ethical ML",
      excerpt: "Exploring the importance of transparency in AI systems and how explainable models can help build trust with users and stakeholders.",
      date: "August 15, 2023",
      readTime: "7 min read",
      category: "AI Ethics",
      image: "blog-placeholder-1.jpg",
      link: "https://medium.com/@yourusername/explainable-ai"
    },
    {
      id: 2,
      title: "How I Used NLP to Analyze Hacker News Sentiment",
      excerpt: "A deep dive into my project analyzing sentiment patterns in Hacker News comments using modern NLP techniques and BERT-based models.",
      date: "July 10, 2023",
      readTime: "9 min read",
      category: "NLP",
      image: "blog-placeholder-2.jpg",
      link: "https://medium.com/@yourusername/hacker-news-nlp"
    },
    {
      id: 3,
      title: "Building Robust ML Systems: Lessons Learned",
      excerpt: "Key lessons from deploying machine learning systems in production, focusing on monitoring, validation, and maintaining model performance.",
      date: "June 3, 2023",
      readTime: "11 min read",
      category: "MLOps",
      image: "blog-placeholder-3.jpg",
      link: "https://medium.com/@yourusername/robust-ml-systems"
    }
  ];
  
  return (
    <section id="blog" className="blog">
      <div className="container">
        <SectionTitle title="Featured Blog Posts" />
        
        <div className="blog-container">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <div className="blog-category">{post.category}</div>
                <div className="image-placeholder" style={{ backgroundColor: `hsl(${post.id * 40}, 70%, 20%)` }}>
                  <div className="placeholder-text">{post.title.charAt(0)}</div>
                </div>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                
                <h3 className="blog-title">{post.title}</h3>
                
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="read-more">
                  Read More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="blog-cta">
          <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer" className="btn">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog; 
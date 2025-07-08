import React from 'react';
import '../App.css';
import boxUpArrow from '../assets/svg/box-up-arrow.svg';

// Usage: <BlogSection blogs={blogs} />
export default function BlogSection({ blogs }) {
  // Color coding for tags
  const tagStyles = {
    'AI & ML': { background: '#e0f7fa', color: '#006064' },
    'Development': { background: '#ffe9c6', color: '#e65100' },
    'Productivity': { background: '#f3e5f5', color: '#6a1b9a' },
    // Add more tag styles as needed
  };
  const getTagStyle = (tag) => tagStyles[tag] || { background: '#ececec', color: '#333' };
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-title centered">
          <span className="tagline">Blog</span>
          <h2>Latest Insights and Trends</h2>
          <p>I share my two cents on the latest technology news, in-depth analysis and personal perspectives on industry trends.</p>
        </div>
        <div className="blog-grid">
          {blogs.map(blog => (
            <article className="blog-card" key={blog.title}>
              <img src={new URL(`../assets/images/portfolio/p1/login.png`, import.meta.url).href} alt={blog.title} loading="lazy" width="100%" height="auto" /> {/* Placeholder image */}
              <div className="card-content">
                <div className="card-info">
                  <span className="tag" style={getTagStyle(blog.tag)}>{blog.tag}</span>
                  <span className="read-time">{blog.readTime}</span>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <a href={blog.link} className="btn-link-blog" target="_blank" rel="noopener noreferrer">
                  Read More
                  <img src={boxUpArrow} alt="Open" className="btn-icon project-arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 
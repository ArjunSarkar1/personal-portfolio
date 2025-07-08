import React from 'react';
import '../App.css';

// Usage: <BlogSection blogs={blogs} />
export default function BlogSection({ blogs }) {
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
              <img src={new URL(`../assets/images/portfolio/p1/login.png`, import.meta.url).href} alt={blog.title} /> {/* Placeholder image */}
              <div className="card-content">
                <div className="card-info">
                  <span className="tag">{blog.tag}</span>
                  <span className="read-time">{blog.readTime}</span>
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <a href={blog.link} className="btn-link">Read more</a>
              </div>
            </article>
          ))}
        </div>
        <div className="section-actions">
          <button id="view-more-blogs" className="btn btn-secondary">View Blog</button>
        </div>
      </div>
    </section>
  );
} 
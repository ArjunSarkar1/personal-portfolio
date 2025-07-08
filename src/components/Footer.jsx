import React from 'react';
import '../App.css';

// Usage: <Footer footerLinks={footerLinks} />
export default function Footer({ footerLinks }) {
  return (
    <footer id="footer" className="main-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-links-area">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                {footerLinks.quick.map(link => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Extracurricular</h4>
              <ul>
                {footerLinks.extracurricular.map(link => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Me</h4>
              <ul>
                {footerLinks.follow.map(link => (
                  <li key={link.label}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <img src={new URL(`../assets/svg/${link.icon}`, import.meta.url).href} alt={link.label} className="footer-icon" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-newsletter">
            <h4>Join</h4>
            <p>Subscribe to my newsletter to get the latest updates from my blog.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email here" />
              <button type="submit" className="btn">Subscribe</button>
            </form>
            <p className="form-notice">By subscribing, you consent to our Privacy Policy and agree to receive updates.</p>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <div className="footer-credits">
            <p>© 2025 Arjun Sarkar. All rights reserved.</p>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 
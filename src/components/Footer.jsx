import React from 'react';
import '../App.css';
import footerPic from '../assets/images/footer/footer-pic.png';
import mailIcon from '../assets/svg/mail.svg';
import locationIcon from '../assets/svg/location-pin.svg';

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
          <div className="footer-pic-wrapper">
            <img src={footerPic} alt="Footer illustration" className="footer-pic" />
            <div className="footer-info">
              <div className="footer-info-row">
                <img src={mailIcon} alt="Email" className="footer-info-icon" />
                <span className="footer-info-text">arjuncodes111@gmail.com</span>
              </div>
              <div className="footer-info-row">
                <img src={locationIcon} alt="Location" className="footer-info-icon" />
                <span className="footer-info-text">Manitoba, Canada</span>
              </div>
            </div>
          </div>
          <div className="footer-newsletter">
            <h4>Join</h4>
            <p>Subscribe to my newsletter to get the latest updates from my blog.</p>
            <form className="newsletter-form">
              <label htmlFor="newsletter-email" style={{position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden'}}>Email address</label>
              <input id="newsletter-email" type="email" placeholder="Your email here" />
              <button type="submit" className="btn">Subscribe</button>
            </form>
            <p className="form-notice" aria-live="polite">By subscribing, you consent to our Privacy Policy and agree to receive updates.</p>
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
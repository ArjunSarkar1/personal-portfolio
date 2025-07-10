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
                {footerLinks.quick.map(link => {
                  let href = '#';
                  if (link === 'About Me') href = '#hero';
                  else if (link === 'Blog') href = 'https://medium.com/@arjunsarkar82';
                  else if (link === 'Contact') href = '#contact';
                  return (
                    <li key={link}>
                      <a
                        href={href}
                        className={['About Me', 'Contact'].includes(link) ? 'footer-smooth-scroll' : undefined}
                        target={link === 'Blog' ? '_blank' : undefined}
                        rel={link === 'Blog' ? 'noopener noreferrer' : undefined}
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
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
            <a
              href="https://medium.com/subscribe/@arjunsarkar82?source=publishing_settings---user_settings-----------------------------------------"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: '16px', display: 'inline-block' }}
            >
              Subscribe on Medium
            </a>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <div className="footer-credits">
            <p>© 2025 Arjun Sarkar. All rights reserved.</p>
            {/* <a href="#">Privacy Policy</a>
            <a href="#">Cookie Settings</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
} 
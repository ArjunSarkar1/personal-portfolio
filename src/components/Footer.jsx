import React from 'react';
import '../App.css';
import footerPic from '../assets/images/footer/footer-pic.png';
import mailIcon from '../assets/svg/mail.svg';
import locationIcon from '../assets/svg/location-pin.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Usage: <Footer footerLinks={footerLinks} />
export default function Footer({ footerLinks }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to handle navigation and smooth scroll
  const handleNavAndScroll = (hash) => (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer id="footer" className="main-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-links-area">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                {footerLinks.quick.map(link => {
                  if (link === 'About Me') {
                    return (
                      <li key={link}>
                        <Link to="/" onClick={handleNavAndScroll('#hero')} className="footer-smooth-scroll">{link}</Link>
                      </li>
                    );
                  } else if (link === 'Contact') {
                    return (
                      <li key={link}>
                        <Link to="/" onClick={handleNavAndScroll('#contact')} className="footer-smooth-scroll">{link}</Link>
                      </li>
                    );
                  } else if (link === 'Blog') {
                    return (
                      <li key={link}>
                        <a href="https://medium.com/@arjunsarkar82" target="_blank" rel="noopener noreferrer">{link}</a>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Extracurricular</h4>
              <ul>
                {footerLinks.extracurricular.map(link => {
                  let to = '/';
                  if (link === 'Hobbies') to = '/hobbies';
                  else if (link === 'Hackathons') to = '/hackathons';
                  else if (link === 'Writings') to = '/writings';
                  else if (link === 'Volunteering') to = '/volunteering';
                  return (
                    <li key={link}>
                      <Link to={to}>{link}</Link>
                    </li>
                  );
                })}
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
            <p>Subscribe to get the latest updates from my blog.</p>
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
import React, { useState, useEffect } from 'react';
import '../App.css';
import emailjs from '@emailjs/browser';

const images = import.meta.glob('../assets/images/background/*.{jpg,png,jpeg,svg}', { eager: true });
const leftImg = images['../assets/images/background/background1.jpg']?.default || '';
const rightImg = images['../assets/images/background/background2.jpg']?.default || '';

// Usage: <ContactSection contact={contact} />
export default function ContactSection({ contact }) {
  const imagePath = `../assets/images/${contact.image}`;
  const imageSrc = images[imagePath]?.default || '';
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('NDkUfLlqeRZxc5uAe');
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    emailjs.send(
      'service_1rc2dbg', // <-- replace with EmailJS service ID
      'template_ysnks1v', // <-- replace with EmailJS template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message
      },
      'NDkUfLlqeRZxc5uAe' // <-- replace with EmailJS public key
    )
    .then(() => {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    })
    .catch(() => setError('Failed to send. Please try again later.'));
  }

  return (
    <section id="connect" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-side-image left">
            <img src={leftImg} alt="Decor left" />
          </div>
          <div className="contact-text">
            <span className="tagline-light">Connect</span>
            <h2>Get in Touch</h2>
            <p>I would love to hear from you. Reach out with any questions, collaboration on projects or just to say hello!</p>
            <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
              />
              <button type="submit" className="btn btn-primary">Send Message</button>
              {submitted && <div className="form-notice" aria-live="polite">Thank you! Your message has been received.</div>}
              {error && <div className="form-notice" aria-live="polite" style={{ color: 'red', background: '#fff0f0', borderColor: 'red' }}>{error}</div>}
            </form>
          </div>
          <div className="contact-side-image right">
            <img src={rightImg} alt="Decor right" />
          </div>
        </div>
      </div>
    </section>
  );
} 
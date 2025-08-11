import React from 'react';
import '../App.css';
import { useBackgroundSlideshow } from '../hooks/useBackgroundSlideshow.js';
import ProfileCounter from './ProfileCounter.jsx';

// Usage: <HeroSection {...hero} />
export default function HeroSection({ name, bio, interests, photoCredits }) {
  const { getBackgroundImagePath } = useBackgroundSlideshow();
  return (
    <section id="hero" className="hero-section" style={{ backgroundImage: `url(${getBackgroundImagePath()})` }}>
      <div className="container hero-content-container">
        <div className="hero-content">
          <h1>{name}</h1>
          <p>{bio}</p>
          <div className="hero-interests">
            <strong>Interests:</strong> {interests.join(', ')}
          </div>
        </div>
        <ProfileCounter />
        <p className="photo-credits">
          Photos provided by{' '}
          {photoCredits.map((credit, i) => (
            <span key={credit.name}>
              <button 
                className="photo-credit-btn"
                onClick={() => window.open(credit.url, '_blank', 'noopener,noreferrer')}
              >
                <strong>{credit.name}</strong>
              </button>
              {i < photoCredits.length - 1 && ' and '}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
} 
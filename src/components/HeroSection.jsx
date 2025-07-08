import React from 'react';
import '../App.css';
import { useBackgroundSlideshow } from '../hooks/useBackgroundSlideshow.js';

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
        <p className="photo-credits">
          Photos provided by{' '}
          {photoCredits.map((credit, i) => (
            <span key={credit.name}>
              <a href={credit.url} target="_blank" rel="noopener noreferrer"><strong>{credit.name}</strong></a>
              {i < photoCredits.length - 1 && ' and '}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
} 
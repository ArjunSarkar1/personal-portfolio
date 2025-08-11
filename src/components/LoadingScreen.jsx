import React, { useState, useEffect } from 'react';
import '../App.css';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-profile">
          <img 
            src={new URL('../assets/images/footer/footer-pic.png', import.meta.url).href} 
            alt="Profile" 
            className="loading-profile-image"
          />
        </div>
        <div className="loading-text">
          <span className="loading-label">Loading</span>
          <span className="loading-dots" aria-hidden="true">
            <span className="loading-dot dot-1">.</span>
            <span className="loading-dot dot-2">.</span>
            <span className="loading-dot dot-3">.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

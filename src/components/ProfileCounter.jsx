import React, { useState, useEffect } from 'react';

export default function ProfileCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get existing count from localStorage
    const existingCount = localStorage.getItem('profileViewCount');
    let currentCount = existingCount ? parseInt(existingCount) : 0;
    
    // Check if this is a new visitor (no session storage flag)
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      // Increment count for new visitor
      currentCount += 1;
      localStorage.setItem('profileViewCount', currentCount.toString());
      sessionStorage.setItem('hasVisited', 'true');
    }
    
    setCount(currentCount);
  }, []);

  return (
    <div className="profile-counter">
      <span className="counter-number">{count.toLocaleString()}</span>
      <span className="counter-label">Profile Views</span>
    </div>
  );
} 
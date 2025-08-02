import React from 'react';
import { useProfileViews } from '../hooks/useProfileViews.js';

export default function ProfileCounter() {
  const { count, loading } = useProfileViews();

  if (loading) {
    return (
      <div className="profile-counter">
        <span className="counter-number">...</span>
        <span className="counter-label">Profile Views</span>
      </div>
    );
  }

  return (
    <div className="profile-counter">
      <span className="counter-number">{count.toLocaleString()}</span>
      <span className="counter-label">Profile Views</span>
    </div>
  );
} 
import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    const handleNavClick = (e) => {
      // Check if it's a navigation link with hash
      if (
        e.target.closest('.main-nav a[href^="#"]') ||
        e.target.closest('.footer-smooth-scroll')
      ) {
        e.preventDefault();
        const targetId = e.target.closest('a').getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleNavClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleNavClick);
    };
  }, []);
} 
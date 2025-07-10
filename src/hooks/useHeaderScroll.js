import { useEffect, useRef } from 'react';

export function useHeaderScroll() {
  const headerRef = useRef(null);
  const lastScrollTop = useRef(0);
  const mouseTimer = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // Scroll-based navigation
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Show/hide based on scroll direction
      if (scrollTop > lastScrollTop.current && scrollTop > 100) {
        // Scrolling down - hide header
        header.style.transform = 'translateY(-100%)';
      } else {
        // Scrolling up - show header
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollTop.current = scrollTop;
    };

    // Mouse movement detection
    const resetMouseTimer = () => {
      // Clear existing timer
      if (mouseTimer.current) {
        clearTimeout(mouseTimer.current);
      }
      
      // Show header immediately
      header.style.transform = 'translateY(0)';
      
      // Set new timer to hide after 3 seconds
      mouseTimer.current = setTimeout(() => {
        header.style.transform = 'translateY(-100%)';
      }, 3000);
    };

    const handleMouseMove = (e) => {
      // Don't reset timer if mouse is over the header
      if (!header.contains(e.target)) {
        resetMouseTimer();
      }
    };

    const handleMouseEnter = () => {
      resetMouseTimer();
    };

    const handleHeaderMouseEnter = () => {
      if (mouseTimer.current) {
        clearTimeout(mouseTimer.current);
        mouseTimer.current = null; // Clear the timer completely
      }
      header.style.transform = 'translateY(0)';
    };

    const handleHeaderMouseLeave = () => {
      // Only start timer if not hovering over header
      if (!header.matches(':hover')) {
        resetMouseTimer();
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    header.addEventListener('mouseenter', handleHeaderMouseEnter);
    header.addEventListener('mouseleave', handleHeaderMouseLeave);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      header.removeEventListener('mouseenter', handleHeaderMouseEnter);
      header.removeEventListener('mouseleave', handleHeaderMouseLeave);
      if (mouseTimer.current) {
        clearTimeout(mouseTimer.current);
      }
    };
  }, []);

  return headerRef;
} 
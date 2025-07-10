import { useState, useEffect } from 'react';

export function useBackgroundSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 10; // background0.jpg through background9.jpg

  useEffect(() => {
    const changeBackgroundImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    // Start the slideshow - change image every 10 seconds
    const interval = setInterval(changeBackgroundImage, 10000);

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, [totalImages]);

  const getBackgroundImagePath = () => {
    return new URL(`../assets/images/background/background${currentImageIndex}.jpg`, import.meta.url).href;
  };

  return { getBackgroundImagePath };
} 
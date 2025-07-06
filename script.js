let lastScrollTop = 0;
let mouseTimer = null;
const header = document.querySelector('.main-header');

// Scroll-based navigation
window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Show/hide based on scroll direction
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down - hide header
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up - show header
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
});

// Mouse movement detection
function resetMouseTimer() {
  // Clear existing timer
  if (mouseTimer) {
    clearTimeout(mouseTimer);
  }
  
  // Show header immediately
  header.style.transform = 'translateY(0)';
  
  // Set new timer to hide after 3 seconds
  mouseTimer = setTimeout(() => {
    header.style.transform = 'translateY(-100%)';
  }, 3000);
}

// Track mouse movement (but not when hovering over header)
document.addEventListener('mousemove', (e) => {
  // Don't reset timer if mouse is over the header
  if (!header.contains(e.target)) {
    resetMouseTimer();
  }
});

// Also track when mouse enters the page
document.addEventListener('mouseenter', resetMouseTimer);

// Show header when mouse enters the header area and prevent hiding
header.addEventListener('mouseenter', () => {
  if (mouseTimer) {
    clearTimeout(mouseTimer);
    mouseTimer = null; // Clear the timer completely
  }
  header.style.transform = 'translateY(0)';
});

// Start timer when mouse leaves header area
header.addEventListener('mouseleave', () => {
  // Only start timer if not hovering over header
  if (!header.matches(':hover')) {
    resetMouseTimer();
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Background image slideshow
let currentImageIndex = 0;
const totalImages = 10; // background0.jpg through background9.jpg
const heroSection = document.querySelector('.hero-section');

function changeBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  const newImagePath = `./src/assets/images/background/background${currentImageIndex}.jpg`;
  
  // Create a temporary image to preload
  const tempImage = new Image();
  tempImage.onload = function() {
    heroSection.style.backgroundImage = `url('${newImagePath}')`;
  };
  tempImage.src = newImagePath;
}

// Start the slideshow - change image every 10 seconds
setInterval(changeBackgroundImage, 10000);

// === Portfolio View More functionality ===
document.addEventListener('DOMContentLoaded', function() {
  const cards = Array.from(document.querySelectorAll('[data-project-card]'));
  const viewMoreBtn = document.getElementById('view-more-projects');
  const INITIAL_VISIBLE = 3;
  const INCREMENT = 3;
  let visibleCount = INITIAL_VISIBLE;

  function updateCards() {
    cards.forEach((card, idx) => {
      if (idx < visibleCount) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
    if (visibleCount >= cards.length) {
      viewMoreBtn.style.display = 'none';
    } else {
      viewMoreBtn.style.display = 'block';
    }
  }

  if (cards.length > INITIAL_VISIBLE) {
    updateCards();
    viewMoreBtn.addEventListener('click', function() {
      visibleCount += INCREMENT;
      updateCards();
    });
  } else {
    viewMoreBtn.style.display = 'none';
  }
});
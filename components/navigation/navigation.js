// Load navigation component into the page
async function loadNavigation() {
  try {
    // Load CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'components/navigation/navigation.css';
    document.head.appendChild(cssLink);
    
    // Load HTML
    const response = await fetch('components/navigation/navigation.html');
    const html = await response.text();
    
    // Insert navigation at the beginning of body
    const navContainer = document.createElement('div');
    navContainer.id = 'nav-component';
    navContainer.innerHTML = html;
    document.body.insertBefore(navContainer, document.body.firstChild);
    
    // Initialize menu functionality
    initializeMenu();
  } catch (error) {
    console.error('Failed to load navigation component:', error);
  }
}

// Initialize menu button and animations
function initializeMenu() {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const enhance = element => {
    if (element && element.textContent.trim() !== '') {
      const text = element.textContent.trim().split("");
      const start = element.dataset.start ? parseInt(element.dataset.start) : 0;

      element.textContent = "";
      
      text.forEach((value, index) => {
        const outer = document.createElement("span");
        
        outer.className = "outer";
        // mark each outer with a 1-based index so CSS can target letters reliably
        outer.dataset.index = index + start;
        
        const inner = document.createElement("span");
        
        inner.className = "inner";
        
        inner.style.animationDelay = `${rand(-1000, 0)}ms`;
        
        const letter = document.createElement("span");
        
        letter.className = "letter";
        
        letter.innerText = value;
        
        letter.style.animationDelay = `${index * 1000}ms`;
        
        inner.appendChild(letter);
        
        outer.appendChild(inner);    
        
        element.appendChild(outer);
      });
    }
  };

  // Enhance all menu text animations
  const fancyElements = document.querySelectorAll('.fancy');
  fancyElements.forEach(element => {
    enhance(element);
  });

  // Set up menu button click handler
  const burg = document.getElementById("menuButton");
  const menu = document.querySelector(".menu");

  if (burg && menu) {
    burg.addEventListener('click', function() {
      menu.classList.add('showMenu');
      document.body.classList.add('menu-open');
    });

    // Close menu when clicking outside or on a link
    menu.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        menu.classList.remove('showMenu');
        document.body.classList.remove('menu-open');
      }
    });
  }
}

// Load navigation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
  loadNavigation();
}

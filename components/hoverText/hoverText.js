// Shows random characters while hovering, displays desired value on mouse leave
const HOVER_TEXT_CHARS = "[]{}()&*%^#$!@<>,./?:;\\|`~'QWERTYUIOPASDFGHJKLZXCVBNM";

function initializeHoverText(selector = '.hoverText') {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach(element => {
    const textValue = element.dataset.value || element.innerText;
    let interval = null;

    element.addEventListener('mouseenter', () => {
      if (interval) clearInterval(interval);

      interval = setInterval(() => {
        element.innerText = textValue
          .split("")
          .map(() => HOVER_TEXT_CHARS[Math.floor(Math.random() * HOVER_TEXT_CHARS.length)])
          .join("");
      }, 60);
    });

    element.addEventListener('mouseleave', () => {
      // Stop animation and show desired value
      if (interval) clearInterval(interval);
      element.innerText = textValue;
    });
  });
}

// Auto-initialize all .hover-text elements on load
document.addEventListener('DOMContentLoaded', () => {
  initializeHoverText('.hoverText');
});


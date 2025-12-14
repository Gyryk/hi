// Random text generation for titles
const symbols =
  "ぁぃぅぇぉかきくけこさしすせそたちってとなにぬねのはひふへほみむめもゃゅょらりるれろゎゐゑをんゔゕゖ゚ゝゟ゠ァィゥェォカキクコサスセソタチッテトナニヌネノハヒフヘホマミムメモャュョラリルレロヮヰヱヲヵヶヽヿ㍐";

window.onload = () => {
  i = 0;
  const titleElements = document.querySelectorAll(".title");
  const inter = setInterval(() => {
    titleElements.forEach((titleElement) => {
      titleElement.innerText = titleElement.innerText
        .split("")
        .map((_, inx) => {
          if (inx < i) {
            return titleElement.dataset.value[inx];
          }

          return symbols[Math.floor(Math.random() * symbols.length)];
        })
        .join("");

      if (i >= titleElement.dataset.value.length) clearInterval(inter);

      i += 1 / 8;
    });
  }, 25);

  titleElements.forEach((titleElement) => {
    titleElement.innerText = titleElement.dataset.value;
  });

  const left = document.getElementById("left-side");

  // Handle mouse and touch events
  const handleMove = (e) => {
    // Don't move if menu is open
    const menu = document.querySelector(".menu");
    if (menu && menu.classList.contains("showMenu")) {
      return;
    }

    left.style.width = `${(e.clientX / window.innerWidth) * 100}%`;

    const keyframes = {
      width: `${(e.clientX / window.innerWidth) * 100}%`,
    };

    left.animate(keyframes, {
      duration: 2400,
      fill: "forwards",
      easing: "ease-in-out",
    });

    const titleElements = document.querySelectorAll(".title");
    titleElements.forEach((titleElement) => {
      if (titleElement.innerText.length < 1) {
        titleElement.innerText = titleElement.dataset.value;
      }
    });
  };

  document.onmousemove = (e) => handleMove(e);

  document.ontouchmove = (e) => handleMove(e.touches[0]);
};

// Random text generation for titles
const symbols =
  "ぁぃぅぇぉかきくけこさしすせそたちってとなにぬねのはひふへほみむめもゃゅょらりるれろゎゐゑをんゔゕゖ゚ゝゟ゠ァィゥェォカキクコサスセソタチッテトナニヌネノハヒフヘホマミムメモャュョラリルレロヮヰヱヲヵヶヽヿ㍐";

window.onload = (e) => {
  i = 0;
  const titleElements = document.querySelectorAll(".title");
  const inter = setInterval(() => {
    titleElements.forEach((titleElement) => {
      titleElement.innerText = titleElement.innerText
        .split("")
        .map((symbol, inx) => {
          if (inx < i) {
            return titleElement.dataset.og[inx];
          }

          return symbols[Math.floor(Math.random() * 102)];
        })
        .join("");

      if (i >= titleElement.dataset.og.length) clearInterval(inter);

      i += 1 / 10;
    });
  }, 25);
  titleElements.forEach((titleElement) => {
    titleElement.innerText = titleElement.dataset.og;
  });

  const left = document.getElementById("left-side");

  // Handle mouse and touch events
  const handleMove = (e) => {
    left.style.width = `${(e.clientX / window.innerWidth) * 100}%`;

    const keyframes = {
      width: `${(e.clientX / window.innerWidth) * 100}%`,
    };

    left.animate(keyframes, {
      duration: 1600,
      fill: "forwards",
      easing: "ease-in-out",
    });

    // There is an odd bug where the title text will disappear if the mouse is moved to the left edge of the window while the title is still being generated
    // I have solved it by setting the default text to the original text, but I am still unsure why it happens
    const titleElements = document.querySelectorAll(".title");
    titleElements.forEach((titleElement) => {
      if (titleElement.innerText.length < 1) {
        titleElement.innerText = titleElement.dataset.og;
      }
    });
  };

  document.onmousemove = (e) => handleMove(e);

  document.ontouchmove = (e) => handleMove(e.touches[0]);
};

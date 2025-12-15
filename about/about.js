// // Make grid cells square (column width = row height)
// function makeGridSquare() {
//   const bentoBox = document.querySelector(".bento-box");
//   if (!bentoBox) return;

//   const boxWidth = bentoBox.offsetWidth;
//   const gap = parseInt(window.getComputedStyle(bentoBox).gap);
//   const numColumns = 7;

//   // Calculate column width: (total width - gaps) / columns
//   const totalGapWidth = gap * (numColumns - 1);
//   const columnWidth = (boxWidth - totalGapWidth) / numColumns;

//   // Set row height to match column width
//   bentoBox.style.gridAutoRows = columnWidth + "px";
// }

// // Call on load and on resize
// window.addEventListener("load", makeGridSquare);
// window.addEventListener("resize", makeGridSquare);
// makeGridSquare(); // Call immediately in case already loaded

// Socials Hover
document.querySelector(".git").addEventListener("mouseover", function () {
  document.getElementById("gitImg").src = "/img/github.gif";
});
document.querySelector(".git").addEventListener("mouseleave", function () {
  document.getElementById("gitImg").src = "/img/icons8-github-96.png";
});

document.querySelector(".linked").addEventListener("mouseover", function () {
  document.getElementById("linkedImg").src = "/img/linkedin.gif";
});
document.querySelector(".linked").addEventListener("mouseleave", function () {
  document.getElementById("linkedImg").src = "/img/icons8-linkedin-96.png";
});

document.querySelector(".email").addEventListener("mouseover", function () {
  document.getElementById("emailImg").src = "/img/email.gif";
});
document.querySelector(".email").addEventListener("mouseleave", function () {
  document.getElementById("emailImg").src = "/img/email.png";
});

// Logo Hover
document.querySelector(".logo").addEventListener("mouseover", function () {
  document.getElementById("logoImg").src = "/img/blink.gif";
});
document.querySelector(".logo").addEventListener("mouseleave", function () {
  document.getElementById("logoImg").src = "/img/logo.png";
});

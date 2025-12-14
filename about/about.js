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

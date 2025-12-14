// Socials Hover
document.querySelector(".git").addEventListener("mouseover", function () {
  document.getElementById("gitImg").src = "/img/icons8-github.gif";
});
document.querySelector(".git").addEventListener("mouseleave", function () {
  document.getElementById("gitImg").src = "/img/icons8-github.png";
});

document.querySelector(".linked").addEventListener("mouseover", function () {
  document.getElementById("linkedImg").src = "/img/icons8-linkedin.gif";
});
document.querySelector(".linked").addEventListener("mouseleave", function () {
  document.getElementById("linkedImg").src = "/img/icons8-linkedin.png";
});

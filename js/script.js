const button_nav = document.querySelector(".nav__menu");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

button_nav.addEventListener("click", function () {
  header.classList.toggle("open-nav");
  body.classList.toggle("disable-scroll");
  overlay.classList.toggle("open-overlay");
});

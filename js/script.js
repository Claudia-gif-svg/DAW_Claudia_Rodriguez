// Menu de hamburguesa
const navToggle = document.getElementById("nav__toggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--open");
  navToggle.classList.toggle("active"); 
});

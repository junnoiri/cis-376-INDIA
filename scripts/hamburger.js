// To open and close hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector("nav ul");
let menuOpen = false;

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navList.classList.toggle("active");
  menuOpen = !menuOpen;
});

window.addEventListener("scroll", () => {
  if (menuOpen) {
    window.scrollTo(0, 0);
  }
});

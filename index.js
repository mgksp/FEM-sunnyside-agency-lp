const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav");

window.addEventListener("resize", () => {
  if (window.innerWidth > 864) {
    navMenu.classList.remove("mob-menu");
  }
});

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("mob-menu");
});

const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const navigation = document.querySelector(".navbar__navigation");
const navLinks = document.querySelector(".navigation-links");
const body = document.querySelector("body");

function closeMobileMenu() {
  navigation.classList.remove("navbar__navigation--open");
  openMenu.classList.remove("inactive");
  closeMenu.classList.add("inactive");
  body.style.overflowY = "initial";
}

openMenu.addEventListener("click", (evt) => {
  evt.target.classList.add("inactive");
  navigation.classList.add("navbar__navigation--open");
  closeMenu.classList.remove("inactive");
  body.style.overflowY = "hidden";
});

closeMenu.addEventListener("click", closeMobileMenu);
window.addEventListener("resize", closeMobileMenu);

const openMenu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const navigation = document.querySelector(".navbar__navigation");

function closeMobileMenu() {
  navigation.classList.remove("navbar__navigation--open");
  openMenu.classList.remove("inactive");
  closeMenu.classList.add("inactive");
}

openMenu.addEventListener("click", (evt) => {
  evt.target.classList.add("inactive");
  navigation.classList.add("navbar__navigation--open");
  closeMenu.classList.remove("inactive");
});

closeMenu.addEventListener("click", closeMobileMenu);
window.addEventListener("resize", closeMobileMenu);

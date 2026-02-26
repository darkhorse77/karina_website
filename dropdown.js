const button = document.querySelector(".hero-contacts-toggle");
const menu = document.querySelector(".hero-contacts-menu");
const menuLinks = document.querySelectorAll(".contant-link");

button.addEventListener("click", (e) => {
  button.classList.toggle("active");

  if (button.classList.contains("active")) {
    button.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    menuLinks.forEach((link) => link.setAttribute("tabindex", "0"));
  } else {
    button.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    menuLinks.forEach((link) => link.setAttribute("tabindex", "-1"));
  }
});

const burgerBtn = document.querySelector(".burger-btn");
const closeBtn = document.querySelector(".menu-close");
const header = document.querySelector(".header");

/* Åbn menu */
burgerBtn.addEventListener("click", () => {
  header.classList.add("menu-open");
});

/* Luk menu */
closeBtn.addEventListener("click", () => {
  header.classList.remove("menu-open");
});

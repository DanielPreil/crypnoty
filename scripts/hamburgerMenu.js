
// Pull Variables From The DOM
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navbarElements = document.querySelector(".navbarElements");
const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");

// addEventListener to hamburgerMenu (click)
hamburgerMenu.addEventListener("click", () => {
  // Toggle showAndHide on navbarElements
  navbarElements.classList.toggle("showAndHide");
  // Toggle rotateAndMove on bar1 & bar2
  bar1.classList.toggle("rotateAndMove")
  bar2.classList.toggle("rotateAndMove")
});
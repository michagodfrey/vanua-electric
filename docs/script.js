const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    header.classList.add("shadow-lg");
  } else {
    header.classList.remove("shadow-lg");
  }
});

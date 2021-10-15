const slides = document.querySelectorAll(".slide");

console.log(slides);

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    cleatActiveClass();
    slide.classList.add("active");
  });
});

function cleatActiveClass() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

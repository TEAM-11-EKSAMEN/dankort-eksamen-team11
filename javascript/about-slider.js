const slider = document.querySelector(".content-cards");

if (slider) {
  const slides = Array.from(slider.querySelectorAll(".content-cards__slide"));
  const prevButton = slider.querySelector(".content-cards__nav--prev");
  const nextButton = slider.querySelector(".content-cards__nav--next");
  let activeIndex = 0;

  const getWrappedIndex = (index) =>
    (index + slides.length) % slides.length;

  const updateSlides = () => {
    const prevIndex = getWrappedIndex(activeIndex - 1);
    const nextIndex = getWrappedIndex(activeIndex + 1);

    slides.forEach((slide, index) => {
      slide.classList.remove(
        "is-active",
        "is-prev",
        "is-next",
        "is-hidden"
      );
      slide.setAttribute("aria-hidden", "true");

      if (index === activeIndex) {
        slide.classList.add("is-active");
        slide.removeAttribute("aria-hidden");
      } else if (index === prevIndex) {
        slide.classList.add("is-prev");
      } else if (index === nextIndex) {
        slide.classList.add("is-next");
      } else {
        slide.classList.add("is-hidden");
      }
    });
  };

  prevButton.addEventListener("click", () => {
    activeIndex = getWrappedIndex(activeIndex - 1);
    updateSlides();
  });

  nextButton.addEventListener("click", () => {
    activeIndex = getWrappedIndex(activeIndex + 1);
    updateSlides();
  });

  updateSlides();
}

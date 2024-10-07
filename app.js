const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.replace("opacity-0", "opacity-100");
      entry.target.classList.replace("-translate-x-full", "-translate-x-0");
      entry.target.classList.replace("blur-sm", "blur-none");
    } else {
      entry.target.classList.replace("opacity-100", "opacity-0");
      entry.target.classList.replace("-translate-x-0", "-translate-x-full");
      entry.target.classList.replace("blur-none", "blur-sm");
    }
  });
});

const observedElements = document.querySelectorAll(".opacity-0");
observedElements.forEach((el) => observer.observe(el));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// OVERLAY
const overlay = document.getElementById("overlay");
const overlayCloseButton = document.getElementById("closeOverlay");

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  carousel.classList.add("hidden");
});

overlayCloseButton.addEventListener("click", () => {
  overlay.classList.add("hidden");
  carousel.classList.add("hidden");
});

// CAROUSEL
const carousel = document.getElementById("carousel");
const image = carousel.querySelector("img");
let images = [];
let index = 0;

function openCarousel(f) {
  overlay.classList.remove("hidden");
  carousel.classList.remove("hidden");
  file = f;

  images[0] = f.getAttribute("img1");
  images[1] = f.getAttribute("img2");
  images[2] = f.getAttribute("img3");
  images[3] = f.getAttribute("img4");
  images[4] = f.getAttribute("img5");
  images[5] = f.getAttribute("img6");
  images[6] = f.getAttribute("img7");
  images[7] = f.getAttribute("img8");

  image.setAttribute("src", images[0]);
}

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

function updateCarousel() {
  image.setAttribute("src", images[index]);
  console.log(images[index]);
}

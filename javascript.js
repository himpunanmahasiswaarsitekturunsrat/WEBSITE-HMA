// Reveal section on scroll
const sections = document.querySelectorAll("section");
sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
});

function revealSection() {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
}
window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// Back to top button
const topBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// New Animation and Interaction Features
// Adding a smooth fade-in effect for text content
document.querySelectorAll("h2, h3, p").forEach(el => {
  el.style.opacity = 0;
  el.style.transition = "opacity 1s ease-out";
});

function fadeInText() {
  document.querySelectorAll("h2, h3, p").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
    }
  });
}

window.addEventListener("scroll", fadeInText);
window.addEventListener("load", fadeInText);

// Adding a typing effect on the title
const typewriterElement = document.querySelector('.typewriter');
const text = typewriterElement.innerHTML;
typewriterElement.innerHTML = "";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typewriterElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);

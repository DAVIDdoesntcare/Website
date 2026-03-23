// ===== TYPING ANIMATION =====
const phrases = [
  "Animal lover 🐾",
  "Soccer player ⚽",
  "Lacrosse athlete 🥍",
  "Tennis & squash fan 🎾",
  "Scratch coder 💻",
  "Book worm 📚",
  "11 years young 🌟"
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;
const typedEl = document.getElementById("typed");

function type() {
  const current = phrases[phraseIndex];
  if (!deleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 60 : 100);
}

type();

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// ===== SMOOTH NAV HIGHLIGHT =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute("href") === `#${current}` ? "var(--cyan-dark)" : "";
  });
});
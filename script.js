// ===== SELECTORS =====
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");


// ===== NAVBAR SCROLL =====
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});


// ===== TOGGLE MOBILE MENU =====
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});


// ===== CLOSE MENU AFTER CLICK =====
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  });
});

// ===== LOADER =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // minimalny czas wyświetlania (lepsze UX)
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 500);
});
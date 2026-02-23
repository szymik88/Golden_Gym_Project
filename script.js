// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

// zamykanie po kliknięciu linku
document.querySelectorAll(".menu a").forEach(link=>{
  link.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    menu.classList.remove("active");
  });
});

// navbar scroll
window.addEventListener("scroll",()=>{
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});
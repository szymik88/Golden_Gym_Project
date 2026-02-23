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

/* =========================
   CONTACT FORM → GOOGLE SHEETS
========================= */
const form = document.getElementById("contact-form");

if (form) {
  const status = document.getElementById("form-status");
  const button = form.querySelector("button");

  form.addEventListener("submit", e => {
    e.preventDefault();

    // zmiana przycisku
    button.innerText = "Wysyłanie...";
    button.disabled = true;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      goal: form.message.value
    };

    fetch("https://script.google.com/macros/s/AKfycbyPbPAUhrvxv3vx9t6VFbLLxlAs29TeUiiwnX7naeP2no4DTdqMDrMS8fmJz9mIBVyX/exec", {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {

      // komunikat sukcesu
      status.innerHTML = "Wysłane ✓";
      status.className = "success";

      // czyszczenie pól
      form.reset();

      // zmiana przycisku
      button.innerText = "Wysłano!";

      setTimeout(() => {
        button.innerText = "WYŚLIJ ZGŁOSZENIE";
        button.disabled = false;
        status.innerHTML = "";
      }, 3000);

    })
    .catch(() => {
      status.innerHTML = "Błąd wysyłania.";
      status.className = "";
      button.innerText = "Spróbuj ponownie";
      button.disabled = false;
    });
  });
}
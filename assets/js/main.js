AOS.init({
  duration: 1200,
  once: true
});


// NAV SHADOW
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.style.boxShadow =
    window.scrollY > 50 ? "0 10px 30px rgba(0,0,0,0.3)" : "none";
});

// POPUPS
function openPopup(id) {
  document.getElementById("popupOverlay").classList.add("active");
  document.getElementById(id).classList.add("active");
}

function closePopup() {
  document.getElementById("popupOverlay").classList.remove("active");
  document.querySelectorAll(".popup").forEach(p => p.classList.remove("active"));
}

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close menu on link click
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });




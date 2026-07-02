// navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
  } else {
    nav.style.boxShadow = "none";
  }
});

// smooth form interaction
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Request sent. We will contact you soon.");
});
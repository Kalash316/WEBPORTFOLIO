// Typed.js Animation
const typed = new Typed('#typed-text', {
  strings: [
    'Frontend Developer',
    'AI Enthusiast',
    'Creative Coder'
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Contact Form Submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully! 🚀');
  form.reset();
});

// Infosys Certifications Toggle
const toggleInfosys = document.getElementById("toggleInfosys");
const infosysCertGrid = document.getElementById("infosysCertGrid");
toggleInfosys.addEventListener("click", () => {
  infosysCertGrid.style.display = infosysCertGrid.style.display === "none" ? "block" : "none";
});

// Cisco Certifications Toggle
const toggleCisco = document.getElementById("toggleCisco");
const ciscoCertGrid = document.getElementById("ciscoCertGrid");
toggleCisco.addEventListener("click", () => {
  ciscoCertGrid.style.display = ciscoCertGrid.style.display === "none" ? "block" : "none";
});

// ✅ Coursera Certifications Toggle
const toggleCoursera = document.getElementById("toggleCoursera");
const courseraCertGrid = document.getElementById("courseraCertGrid");
toggleCoursera.addEventListener("click", () => {
  courseraCertGrid.style.display = courseraCertGrid.style.display === "none" ? "block" : "none";
});

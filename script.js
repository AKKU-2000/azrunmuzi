const $ = s => document.querySelector(s);

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
}

const themeBtn = $("#themeToggle");
const lightCSS = document.createElement("style");
lightCSS.textContent = `
.light{background:#f4f7fb;color:#101827}
.light .nav{background:rgba(255,255,255,.92)!important;border-bottom-color:#dde3ee!important}
.light .brand strong,.light .brand small{color:#101827}
.light nav a{color:#4a5568!important}
.light .theme-btn,.light .menu-btn{background:#fff!important;color:#101827!important;border-color:#d7dde8!important}
.light .secondary{background:#fff!important;color:#172033!important;border-color:#d7dde8!important}
.light .chips span,.light .tool-grid span{background:#fff!important;border-color:#dde3ee!important;color:#2c3444!important}
.light .service,.light .project,.light .review,.light .feature-grid article,.light .stats>div,
.light .float-card,.light .code-card,.light .process article{
  background:#fff!important;border-color:#dde3ee!important;
  box-shadow:0 18px 50px rgba(20,30,60,.08)!important;
}
.light .code-card pre{color:#0b5fff}
.light .lead,.light .section p,.light .project-body p,.light .review p{color:#5f6c80}
.light .section-head h2,.light .section h2,.light .stats b,.light .ticker b{color:#101827!important}
.light .ticker{background:#fff!important;border-color:#e3e8f0!important;color:#7b8794!important}
.light .skills{background:linear-gradient(135deg,#ffffff,#f4f7fb)!important}
.light .skill>div{background:#e5eaf2!important}
.light .cta{background:#fff!important;border-color:#f0c9c9!important}
.light input,.light textarea,.light select{background:#fff!important;color:#101827!important;border-color:#d7dde8!important}
.light .footer{background:#fff!important;border-top-color:#e3e8f0!important;color:#7b8794!important}
.light .chat{background:#fff!important;border-color:#d7dde8!important}
.light .chat-message,.light .chat button{box-shadow:0 8px 25px rgba(20,30,60,.12)}
.light .uploaded-photo{background:#f1f3f7!important}
.light .profile-bottom{background:rgba(255,255,255,.94)!important}
`;
document.head.appendChild(lightCSS);

if (themeBtn) {
  const setTheme = light => {
    document.body.classList.toggle("light", light);
    themeBtn.textContent = light ? "☾" : "☼";
    themeBtn.setAttribute("aria-pressed", String(light));
  };
  setTheme(localStorage.getItem("theme") === "light");
  themeBtn.addEventListener("click", () => {
    const light = !document.body.classList.contains("light");
    setTheme(light);
    localStorage.setItem("theme", light ? "light" : "dark");
  });
}

const menuBtn = $("#menuBtn");
const nav = $("#navLinks");
const closeMenu = () => {
  if (!nav) return;
  nav.classList.remove("open");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
};

if (menuBtn && nav) {
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
  window.addEventListener("resize", () => { if (window.innerWidth > 900) closeMenu(); });
}

const formMsg = $("#formMsg");
const contact = document.getElementById("contact");

document.querySelectorAll(".chat button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (formMsg) formMsg.textContent = "Thanks! Please use the contact form below to send your project details.";
    if (contact) contact.scrollIntoView({ behavior: "smooth" });
  });
});

const chatDot = document.querySelector(".chat-dot");
if (chatDot) {
  chatDot.setAttribute("role", "button");
  chatDot.setAttribute("tabindex", "0");
  chatDot.setAttribute("aria-label", "Open chat options");
  const toggleChat = () => document.querySelector(".chat")?.classList.toggle("collapsed");
  chatDot.addEventListener("click", toggleChat);
  chatDot.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleChat(); }
  });
}

const form = $("#contactForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (formMsg) formMsg.textContent = "Your enquiry is ready. Connect this form to your email/API to receive submissions.";
  });
}
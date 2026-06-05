const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section[id]");
const revealItems = document.querySelectorAll(".reveal");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

links.forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(item => revealObserver.observe(item));

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
});

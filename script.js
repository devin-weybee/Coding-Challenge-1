const hamburger = document.querySelector(".hamburger");
const menuBar = document.querySelector(".menu-bar");

hamburger.addEventListener("click", () => {
  menuBar.classList.toggle("active");

  if (menuBar.classList.contains("active")) {
    hamburger.classList.remove("fa-bars");
    hamburger.classList.add("fa-xmark");
  } else {
    hamburger.classList.remove("fa-xmark");
    hamburger.classList.add("fa-bars");
  }
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !menuBar.contains(e.target)) {
    menuBar.classList.remove("active");
    hamburger.classList.remove("fa-xmark");
    hamburger.classList.add("fa-bars");
  }
});

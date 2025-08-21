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

const slider = new A11YSlider(document.querySelector(".slider"), {
  dots: false,
  centerMode: true,
  infinite: true,
  responsive: {
    0: {
      slidesToShow: 1,
      arrows: true,
    },
    480: {
      sliderToShow: 2,
      arrows: true,
    },
    1240: {
      arrows: true,
      slidesToShow: 3,
    },
  },
});
const prev = document.querySelector(".a11y-slider-prev");
const next = document.querySelector(".a11y-slider-next");
prev.innerHTML = "<";
next.innerHTML = ">";

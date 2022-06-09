//menu
window.addEventListener("resize", function () {
  addRequiredClass();
});

function addRequiredClass() {
  if (window.innerWidth < 860) {
    document.body.classList.add("mobile");
  } else {
    document.body.classList.remove("mobile");
  }
}

window.onload = addRequiredClass;

let hamburger = document.querySelector(".hamburger");
let mobileNav = document.querySelector(".nav-list");

let bars = document.querySelectorAll(".hamburger span");

let isActive = false;

hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
  if (!isActive) {
    bars[0].style.transform = "rotate(45deg)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(-45deg)";
    isActive = true;
  } else {
    bars[0].style.transform = "rotate(0deg)";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "rotate(0deg)";
    isActive = false;
  }
});

var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animate__animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

// way point footer up arrow
var waypoint = new Waypoint({
  element: document.getElementById("movies"),
  handler: function (direction) {
    if (direction === "down") {
      document.querySelector(".footer-icon").classList.add("footer-icon-show");
      document
        .querySelector(".footer-icon")
        .classList.add("animate__fadeInDown");
    } else {
      document
        .querySelector(".footer-icon")
        .classList.remove("footer-icon-show");
      document
        .querySelector(".footer-icon")
        .classList.remove("animate__fadeInDown");
    }
  },
  offset: "5%",
});

// Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 2,
      },

      1000: {
        items: 5,
      },
    },
  });
});
// Responsive Tab Service Section
$(document).ready(function () {
  $("#services-tab").responsiveTabs({
    animation: "slide",
  });
});
$(document).ready(function () {
  $("#services-tab").responsiveTabs({
    animation: "slide",
  });
});

const navbar = document.querySelector(".navbar");
const links = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");
const darkmode = document.querySelector("input");
const scrollEffect = document.querySelector(".scroll-effect");

window.onscroll = function () {
  dynamicScroll();
  scroller();
};

function dynamicScroll() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    navbar.style.background = "#f4fdff";
    links.style.background = "#f4fdff";
  } else {
    navbar.style.background = "";
    links.style.background = "";
  }
}

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("hamcross");
  links.classList.toggle("displayOff");
  console.log(e.target);
});

window.addEventListener("click", (e) => {
  if (
    e.target != hamburger &&
    e.target.parentNode != hamburger &&
    e.target != document.querySelector("ul") &&
    e.target != navbar &&
    e.target != document.querySelector(".name")
  ) {
    links.classList.add("displayOff");
    hamburger.classList.remove("hamcross");
  }
});
function scroller() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  scrollEffect.style.width = scrolled + "%";
}

const bubbles = document.querySelector(".bubbles");
for (let i = 0; i < 50; i++) {
  var dimension = Math.random() * 60;
  bubbles.innerHTML += `<div class="bubble-exo" 
  style="right:${Math.random() * 1500}px; 
         top:${Math.random() * 50}px; 
         background:rgba(
         ${Math.random() * 150 + 50}, 
         ${Math.random() * 150 + 50}, 
         ${Math.random() * 150 + 50}, 
         ${Math.random() + 0.1}); 
         width:${dimension + 10}px; 
         height:${dimension + 10}px;">
  </div>`;
}

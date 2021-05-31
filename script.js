const navbar = document.querySelector(".navbar");
const links = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");


window.onscroll = function() { dynamicScroll() };

function dynamicScroll() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        navbar.style.background = "#f4fdff";
        links.style.background = "#f4fdff";
    } else {
        navbar.style.background = "";
        links.style.background = "";
    }
}

hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle("hamcross");
    links.classList.toggle("displayOff");
});

window.addEventListener("click", (e) => {
    if (e.target.parentNode != navbar) {
        links.classList.add("displayOff");
        hamburger.classList.remove("hamcross");
    }
});
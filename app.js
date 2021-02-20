const navSlide = () => {
    const menu = document.querySelector(".menuBtn");
    const links = document.querySelector(".linksClass");
    const navlinks = document.querySelectorAll(".linksClass li a");
    const burger = document.querySelector(".hamburger");

    menu.addEventListener('click', () => {
        links.classList.toggle("linksActive");

        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `LinksFade .5s ease-in forwards ${index/7 + 0.5}s`;
            }
        });

        burger.classList.toggle("toggleBurger");
    });
}
navSlide();

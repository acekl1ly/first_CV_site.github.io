let menuIcon = document.getElementById('nav-icon');
let headerPosition = document.querySelector(".header");
let menu = document.getElementById("menu");


    function toggleMenu () {
        // menu.classList.toggle("menu");
        menuIcon.classList.toggle("margin-top");
        headerPosition.classList.toggle("position-fixed");

        const navs = document.querySelectorAll('.nav__items')

        if (navs[1].style.display === "flex") {
            navs.forEach(nav => {
                nav.style.display = "none";
            });

            menu.style.height = "0";
        } else {
            navs.forEach(nav => {
                nav.style.display = "flex";
            });

            menu.style.height = "100%";
        }
}
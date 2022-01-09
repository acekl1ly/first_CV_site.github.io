let menuIcon = document.getElementById('nav-icon');
let menuItems = document.querySelector(".menu-items");
let menu = document.getElementById("menu");


    function toggleMenu () {
        menu.classList.toggle("menu");
        menuIcon.classList.toggle("margin-top")


        const navs = document.querySelectorAll('.nav__items')

        if (navs[1].style.display === "flex") {
            navs.forEach(nav => {
                nav.style.display = "none";
            });
        } else {
            navs.forEach(nav => {
                nav.style.display = "flex";
            });
        }
}
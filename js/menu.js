let menuIcon = document.getElementById('nav-icon');
let headerPosition = document.querySelector(".header");
let menu = document.getElementById("menu");
let navs = document.querySelectorAll('.nav__items');

    function toggleMenu () {
        // menu.classList.toggle("menu");
        // menuIcon.classList.toggle("margin-top");
        headerPosition.classList.toggle("position-fixed");
        
        function display(el) {
            
            menuIcon.classList.remove('margin-top');
            el.style.display = "none";
        }

        // ** FADE OUT FUNCTION **
        function fadeOutEffect(fadeTarget, time, myCallback) {
            var fadeEffect = setInterval(function () {
                if (!fadeTarget.style.opacity) {
                    fadeTarget.style.opacity = 1;
                }
                if (fadeTarget.style.opacity > 0) {
                    fadeTarget.style.opacity -= 0.1;
                } else {
                    myCallback(fadeTarget);
                    clearInterval(fadeEffect);
                }
            }, time);
        }

        // ** FADE IN FUNCTION **
        function fadeIn(el, time) {
            el.style.opacity = 0;
          
            var last = +new Date();
            var tick = function() {
              el.style.opacity = +el.style.opacity + (new Date() - last) / time;
              last = +new Date();
          
              if (+el.style.opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
              }
            };
          
            tick();
          }
        
        if (navs[1].style.display === "flex") {
            navs.forEach(nav => {
                fadeOutEffect(nav, 50, display);
            });
            menuIcon.style.transform= "rotate(0deg)"
            
            menu.style.height = "0";
        } else {
            menuIcon.classList.add('margin-top');
            navs.forEach(nav => {
                nav.style.display = "flex"
                fadeIn(nav, 2000)
            });
            menuIcon.style.transform= "rotate(180deg)"

            menu.style.height = "100%";
        }
    }
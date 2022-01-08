let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let frontMountain = document.getElementById('frontMountain');
let midMountain = document.getElementById('midMountain');
let AbdurasulDjurayev = document.getElementById('AbdurasulDjurayev');
let explore = document.getElementById('explore');
let backMountain = document.getElementById('backMountain');
let header = document.querySelector('header');

document.onload = 
    window.addEventListener('scroll', function() {
        let value = window.scrollY;
        stars.style.left = value * 0.25 + 'px';
        moon.style.top = value * 1.05 + 'px';
        frontMountain.style.top = value * 0 + 'px';
        midMountain.style.top = value * 0.15 + 'px';
        AbdurasulDjurayev.style.marginLeft = value * 4 + 'px';
        explore.style.marginTop = value * 1.5 + 'px';
        backMountain.style.top = value * 0.15 + 'px';
        header.style.top = value * 0.5 + 'px';
    })

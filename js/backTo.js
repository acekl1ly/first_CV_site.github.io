let button = document.getElementById('back-to-container');
let link = document.getElementById('back-to-btn');
let exploreText = document.getElementById('exploreText');
let contactMe = document.getElementById('contact-me');
let rotated = true;

// rotate function
let rotater = function () {
    // check degree
    deg = rotated ? 180 : 0;
    
    // change url
    if (rotated) {
        link.setAttribute("href","#home")
    } else {
        link.setAttribute("href","#footer")
    }
    rotated = !rotated;

    // rotate
    button.style.webkitTransform = 'rotate('+deg+'deg)'; 
    button.style.mozTransform    = 'rotate('+deg+'deg)'; 
    button.style.msTransform     = 'rotate('+deg+'deg)'; 
    button.style.oTransform      = 'rotate('+deg+'deg)'; 
    button.style.transform       = 'rotate('+deg+'deg)'; 
    return ;
}

// add observer to check, rotate point
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting ) {
            rotater();
        }
        return
      }
    );
  });
window.onload = window.addEventListener('scroll', () => {
    observer2.observe(exploreText)
});

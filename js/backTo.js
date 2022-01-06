let button = document.getElementById('back-to-container');
let link = document.getElementById('back-to-btn');
let exploreText = document.getElementById('exploreText');
let contactMe = document.getElementById('contact-me');
let rotated = false;


let clickCheck = function() {    
    rotater();
    console.log();
};
// rotate function
let rotater = function () {
    // check degree
    deg = rotated ? 0 : 180;
    
    // change url
    if (rotated) {
        link.setAttribute("href","#home")
    } else {
        link.setAttribute("href","#footer")
    }

    // rotate
    button.style.webkitTransform = 'rotate('+deg+'deg)'; 
    button.style.mozTransform    = 'rotate('+deg+'deg)'; 
    button.style.msTransform     = 'rotate('+deg+'deg)'; 
    button.style.oTransform      = 'rotate('+deg+'deg)'; 
    button.style.transform       = 'rotate('+deg+'deg)'; 
    
    return rotated = !rotated;
}

// add observer to check, rotate point
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting ) {
            // rotated = !rotated;
            rotater();
        }
        return
      }
    );
  });


// add event listener on click
button.addEventListener('click', clickCheck);

window.addEventListener('scroll', function() {
    observer2.observe(exploreText);
});

// window.addEventListener('scroll', observer2.observe(contactMe));

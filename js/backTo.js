let button = document.getElementById('back-to-container');
let link = document.getElementById('back-to-btn');

var rotated = false;

button.onclick = function() {
    
    // check degree
    deg = rotated ? 0 : 180;
    
    // rotate
    button.style.webkitTransform = 'rotate('+deg+'deg)'; 
    button.style.mozTransform    = 'rotate('+deg+'deg)'; 
    button.style.msTransform     = 'rotate('+deg+'deg)'; 
    button.style.oTransform      = 'rotate('+deg+'deg)'; 
    button.style.transform       = 'rotate('+deg+'deg)'; 
    
    // change url
    
    if (rotated) {
        link.setAttribute("href","#home")
    } else {
        link.setAttribute("href","#footer")
    }

    console.log(link.getAttribute("href"));
    
    rotated = !rotated;
}
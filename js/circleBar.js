let progressBar = document.querySelectorAll(".circle-bar__progress");
let progressStartValue = 0;
let progressEndValues = [90,75,68,65,58,60,57,57,65];
let speed;
let scrolled = true;


// progress bar filling animation function
function setStyle(progressBar,progressStartValue,progressEndValues) {
    let progress = setInterval( ()=> {
    progressStartValue++;
    progressBar.style.background = `conic-gradient(
        #4d5bf9 ${progressStartValue * 3.6}deg,
        #ffffff ${progressStartValue * 3.6}deg
    )`
    if (progressStartValue === progressEndValues) {
        clearInterval(progress)
        }
    },speed);
};

// unknown error// on first run always miss animation, here is the solution ^_^'
(()=>{
    speed = 10;
    for ( var i = 0; i < progressBar.length; i++ ) {
        setStyle(progressBar[i],progressStartValue,progressEndValues[i])
    }
    return speed = 40;
})();

// Create the observer:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting || scrolled) {
        for ( var i = 0; i < progressBar.length; i++ ) {
            setStyle(progressBar[i],progressStartValue,progressEndValues[i])
        };
        scrolled = false;
        return;
    }

    //place for reverse animation
    
  });
});

//call function
observer.observe(skills);
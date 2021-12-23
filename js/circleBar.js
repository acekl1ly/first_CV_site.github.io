let progressBar = document.querySelectorAll(".circle-bar__progress");

let progressStartValue = 0;
let progressEndValues = [90,75,68,65,58,60,57,57,65];
let speed = 60;

function setStyle(progressBar,progressStartValue,progressEndValues) {
    let progress = setInterval( ()=> {
    progressStartValue++;
    progressBar.style.background = `conic-gradient(
        #4d5bf9 ${progressStartValue * 3.6}deg,
        #ffffff ${progressStartValue * 3.6}deg
    )`
    console.log('ok');
    if (progressStartValue === progressEndValues) {
        clearInterval(progress)
        }
    },speed);
};

for ( var i = 0; i < progressBar.length; i++ ) {
    // console.log(progressBar[i])
    setStyle(progressBar[i],progressStartValue,progressEndValues[i])
}
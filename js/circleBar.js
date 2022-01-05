let progressBar = document.querySelectorAll(".circle-bar__progress");

let skills = document.getElementById('skills');

// const elementInView =  (element,  scrollOffset = 0) => {
//     const elementTop = element.getBoundingClientRect().top;
//     return (
//         elementTop <= ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
//     );
// };

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
    if (progressStartValue === progressEndValues) {
        clearInterval(progress)
        }
    },speed);
};

// for ( var i = 0; i < progressBar.length; i++ ) {
//     setStyle(progressBar[i],progressStartValue,progressEndValues[i])
// }

// const handleScrollAnimation = () => {
//     progressBar.forEach((el) => {
//       if (elementInView(el, 0)) {
//         for ( var i = 0; i < progressBar.length; i++ ) {
//             setStyle(progressBar[i],progressStartValue,progressEndValues[i])
//          }
//         return scrolled = false;
//       };
//     })
//   }

 

// const handleScrollAnimation = () => {
// for ( var i = 0; i < progressBar.length; i++ ) {
//     if (elementInView(progressBar[i], 0)) {
//         setStyle(progressBar[i],progressStartValue,progressEndValues[i])
//             console.log('ok');
//         }

//     }
//   }


let scrolled = true;

// window.addEventListener('scroll', () => {
//     if (elementInView(skills, 0)) {
//         console.log('ok')
//     }
// })







// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting || scrolled) {
        console.log("ok");
        for ( var i = 0; i < progressBar.length; i++ ) {
            setStyle(progressBar[i],progressStartValue,progressEndValues[i])
        }

        scrolled = false;
      return;
    }

    console.log('not ok');
  });
});

observer.observe(skills);
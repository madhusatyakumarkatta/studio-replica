// Lenis.js Scroll (Smooth scroll ke liye zaroori hai)
const lenis = new Lenis({
    duration: 1.3,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),//smooth feeling ke liye  
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})
// Lenis ko frame-by-frame update karne ke liye ye zaroori hai
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// Fixed Image Animation
var elemC = document.querySelector("#work-list");
var fixed = document.querySelector("#fixed-image");

if(elemC && fixed) {
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        });
    });
}
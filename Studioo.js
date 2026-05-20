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

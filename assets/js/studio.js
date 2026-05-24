// ============================================================
// STUDIO.JS — Sundown Studio Landing Page JavaScript
// This file controls ALL the animations and interactive
// behaviours of the page using three external libraries:
//   • Lenis  → smooth scrolling
//   • GSAP   → animation engine (GreenSock)
//   • Swiper → touch/drag slider
// ============================================================


// ─────────────────────────────────────────────────────────────
// 1. SMOOTH SCROLL SETUP — Lenis Library
// ─────────────────────────────────────────────────────────────
// Lenis replaces the browser's default jarring scroll with a
// buttery-smooth, eased scroll effect.
const lenis = new Lenis({
    duration: 1.3,                                        // How long (in seconds) one scroll event takes to complete
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing curve — gives a smooth deceleration feeling
    direction: 'vertical',                                // Scroll direction is top-to-bottom (vertical)
    gestureDirection: 'vertical',                         // Touch/trackpad gesture direction also vertical
    smooth: true,                                         // Enable smooth scroll
    mouseMultiplier: 1,                                   // How fast mouse wheel scrolls (1 = normal speed)
    smoothTouch: false,                                   // Don't smooth on touch screens (they already have native momentum)
    touchMultiplier: 2,                                   // Touch scrolling feels 2× faster (more responsive on mobile)
    infinite: false,                                      // Don't loop the page infinitely
});

// ─────────────────────────────────────────────────────────────
// 2. RAF LOOP — Continuously updating Lenis on every frame
// ─────────────────────────────────────────────────────────────
// "raf" = requestAnimationFrame
// Lenis needs to be "ticked" every frame (60 times per second)
// to know where to position the scroll.
// requestAnimationFrame(raf) tells the browser to call raf()
// before every repaint — creating an infinite loop.
function raf(time){
    lenis.raf(time)          // Tell Lenis to update scroll position using current timestamp
    requestAnimationFrame(raf) // Schedule the NEXT frame — keeps the loop going forever
}

requestAnimationFrame(raf) // Start the Lenis animation loop


// ─────────────────────────────────────────────────────────────
// 3. PAGE 3 FEATURED PROJECTS — Hover Image Preview
// ─────────────────────────────────────────────────────────────
// This function makes a floating preview image appear and
// follow your cursor when you hover over the project list.
// Each project row (`.elem`) has a `data-image` attribute
// containing the URL of its preview image.
function page4Animation(){

    // Grab the container holding all project rows
    var elemC = document.querySelector("#elem-container")

    // Grab the fixed image element that floats on screen (hidden by default)
    var fixed = document.querySelector("#fixed-image")

    // ── When mouse ENTERS the project list container ──
    // Show the floating preview image box
    elemC.addEventListener("mouseenter", function(){
        fixed.style.display = "block"  // Make the floating image visible
    });

    // ── When mouse LEAVES the project list container ──
    // Hide the floating preview image box
    elemC.addEventListener("mouseleave", function(){
        fixed.style.display = "none"  // Hide the floating image
    });

    // ── When mouse MOVES inside the project list container ──
    // Use GSAP to smoothly move the floating image to the cursor's position
    elemC.addEventListener("mousemove", function(dets){
        // dets.x and dets.y = current mouse position on screen
        gsap.to(fixed, {
            x: dets.x,          // Move the image to the mouse's X position
            y: dets.y,          // Move the image to the mouse's Y position
            duration: 0.4,      // Animation takes 0.4 seconds (gives a lagging/trailing effect)
            ease: "power3.out"  // Decelerates at end — image catches up smoothly
        });
    });

    // ── When mouse ENTERS a specific project row ──
    // Change the floating image to match that project's preview image
    var elems = document.querySelectorAll(".elem")  // Get ALL project rows
    elems.forEach(function(e){
        e.addEventListener("mouseenter", function(){
            var image = e.getAttribute("data-image")              // Read the image URL from data-image attribute
            fixed.style.backgroundImage = `url(${image})`         // Set it as the background of the floating div
        })
    })

}


// ─────────────────────────────────────────────────────────────
// 4. SWIPER SLIDER — "Who We Work With" Section
// ─────────────────────────────────────────────────────────────
// Swiper.js is a touch-friendly carousel/slider library.
// This powers the horizontal brand logo + description slider
// in Page 4 ("Who We Work With").
function swiperAnimation(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",  // Show as many slides as fit naturally (not a fixed number)
        spaceBetween: 50,       // 50px gap between each slide
        freeMode: true,         // Free-drag mode — slides don't snap to a grid, scroll freely
        grabCursor: true,       // Shows a "grab" hand cursor when hovering so user knows it's draggable
        /* mousewheel: true */  // (commented out) — could enable mousewheel scroll on the slider
    });

}

// ─────────────────────────────────────────────────────────────
// 5. DESKTOP MENU ANIMATION (older version — currently disabled)
// ─────────────────────────────────────────────────────────────
// This function was meant to handle the full-screen overlay menu
// for DESKTOP (targeting nav h3). It's currently commented out
// at the bottom — replaced by responsiveMenu() below.
function menuAnimation() {

    var menu = document.querySelector("nav h3")        // The "Menu" button in the desktop nav
    var full = document.querySelector("#full-scr")     // The full-screen menu overlay div
    var navimg = document.querySelector("nav img")     // The logo image in the nav
    var flag = 0                                       // Flag tracks if menu is open (1) or closed (0)

    menu.addEventListener("click", function () {
        if (flag == 0) {
            // Menu is currently CLOSED → Open it
            full.style.top = 0         // Slide the overlay DOWN from off-screen to visible (top:0)
            navimg.style.opacity = 0   // Fade out the logo
            flag = 1                   // Update flag to "open"
        } else {
            // Menu is currently OPEN → Close it
            full.style.top = "-100%"   // Slide the overlay UP off-screen
            navimg.style.opacity = 1   // Fade the logo back in
            flag = 0                   // Update flag to "closed"
        }
    })
}


// ─────────────────────────────────────────────────────────────
// 6. LOADER — Intro animation that hides after 4 seconds
// ─────────────────────────────────────────────────────────────
// When the page loads, a black full-screen loader is shown
// that cycles the words: ENVIRONMENTS → EXPERIENCES → CONTENT
// After 4 seconds, it slides up off-screen to reveal the page.
var loader = document.querySelector("#loader")

setTimeout(function(){
    loader.style.top = "-100%"  // Slide the loader UP off-screen (CSS transition handles the animation)
}, 4000)  // 4000ms = 4 seconds delay before hiding the loader


// ─────────────────────────────────────────────────────────────
// 7. RESPONSIVE MENU — Mobile "Menu" Button Handler
// ─────────────────────────────────────────────────────────────
// On mobile screens, the regular nav links are hidden and
// replaced by a "Menu" button (#menu). Clicking it toggles
// a full-screen dark overlay with navigation links.
function responsiveMenu(){

    var menu = document.querySelector("#menu");      // The mobile "Menu" button (only visible on small screens)
    var full = document.querySelector("#full-scr");  // The full-screen overlay that slides down when menu opens
    var navimg = document.querySelector("navimg");   // NOTE: This selector is likely a bug — should be "nav img"
                                                     //       But it won't cause a crash, just won't find the element

    var flag = 0;  // 0 = menu is closed, 1 = menu is open

    menu.addEventListener("click", function(){
        if(flag == 0){
            // Menu is CLOSED → Open it by sliding the overlay down
            full.style.top = 0;          // Move overlay into view (from top: -100% to top: 0)
            navimg.style.opacity = 0;    // Would fade logo (selector bug means this does nothing)
            flag = 1;                    // Mark as open
        }
        else{
            // Menu is OPEN → Close it by sliding the overlay back up
            full.style.top = "-100%";    // Slide overlay back off-screen
            navimg.style.opacity = 1;    // Would restore logo (selector bug means this does nothing)
            flag = 0;                    // Mark as closed
        }
    })
}


// ─────────────────────────────────────────────────────────────
// 8. FUNCTION CALLS — Actually running everything
// ─────────────────────────────────────────────────────────────
// These three lines call the functions defined above.
// Without calling them here, nothing would happen!
responsiveMenu()   // Activate the mobile hamburger menu toggle
swiperAnimation()  // Initialize the brand logo slider
page4Animation()   // Activate the hover image preview in the projects section
//menuAnimation()  // Disabled — desktop menu (replaced by responsiveMenu)


// ─────────────────────────────────────────────────────────────
// 9. BACK BUTTON — Navigate to homepage (likely unused/buggy)
// ─────────────────────────────────────────────────────────────
// Tries to find the last button inside #fill-div1 and
// redirect to index.html on click.
// NOTE: The selector "#fill-div1" is wrong — it should be
// "#full-div1". This will likely throw an error in the console.
var backBtn = document.querySelector("#fill-div1 button:last-child");
backBtn.addEventListener("click", function(){
    window.location.href = "index.html";  // Redirect to homepage when back button is clicked
});

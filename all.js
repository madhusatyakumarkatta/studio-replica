// 1. Lenis Smooth Scroll Setup
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// 2. GSAP Animations
function pageAnimations() {
    var tl = gsap.timeline();

    // Hero Text Animation
    tl.from("#all-hero h1", {
        y: 150,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.2,
        ease: "power4.out"
    });

    // Nav elements animation
    tl.from("nav", {
        y: -50,
        opacity: 0,
        duration: 0.5
    }, "-=0.4");

    // Project Cards Reveal on Scroll
    // Iske liye hum ScrollTrigger use karenge
    gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#projects-container",
            start: "top 80%", // Jab section 80% screen par aaye tab shuru ho
            end: "top 20%",
            scrub: false // Ek hi baar animate hoga
        }
    });

    // Footer Marquee Speed Control (Optional)
    // Agar marquee slow lag rahi hai toh yahan se handle kar sakte ho
}

pageAnimations();
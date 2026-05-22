#  Sundown Studio Replica

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-black?style=for-the-badge)](https://lenis.darkroom.engineering/)

A pixel-perfect, highly interactive frontend replica of the award-winning **[Sundown Studio](https://www.sundown-studio.com/)** website. This project showcases advanced modern web design, custom transitions, fluid animations, and smooth layouts using vanilla frontend technologies.

---

## 🌟 Key Features

*   **✨ Preloader Screen:** A custom introduction animation that cycles through brand concepts (`ENVIRONMENTS`, `EXPERIENCES`, `CONTENT`) with modern sliding typographic transitions before revealing the main website.
*   **🫧 Organic Gooey Blobs:** Implements fluid, morphing background shapes utilizing CSS filters (`blur` and CSS-based gooey effects) to mimic realistic liquid movement.
*   **📁 Interactive Projects Showcase:** Hovering over featured project elements dynamically reveals a sliding card that tracks the user's cursor position with smooth GSAP damping.
*   **📜 Smooth Inertial Scrolling:** Integrated with **Lenis Smooth Scroll** to deliver a premium, high-end scrolling experience across browsers.
*   **🎡 Premium Carousels:** A responsive and touch-enabled brand slider built using **Swiper JS** showing client testimonials and case studies.
*   **📱 Fully Responsive:** Fully optimized design featuring a sleek slide-down full-screen menu tailored for mobile and tablet devices.

---

## 🛠️ Tech Stack & Libraries

*   **HTML5 & CSS3:** Semantic structure and custom styling, including advanced keyframes, flexbox/grid layouts, skew transforms, and typography.
*   **JavaScript (ES6+):** Pure vanilla JavaScript driving the DOM events, coordinate tracking, and responsive states.
*   **GSAP (GreenSock Animation Platform):** Drives complex, high-performance animations, including the cursor-following project preview.
*   **Lenis Smooth Scroll:** Delivers smooth, buttery physics-based inertia scrolling.
*   **Swiper JS:** Powers the horizontal slider for clients and partners.

---

## 📁 Project Structure

```text
studio-replica/
├── assets/
│   ├── css/
│   │   └── style.css       # Core stylesheet containing layout, typography, and responsive media queries
│   ├── js/
│   │   └── studio.js       # Lenis, Swiper, GSAP, and custom cursor animations
│   ├── fonts/              # Custom brand fonts (e.g., NHaasGroteskTXPro)
│   ├── images/             # Static visual assets and SVG logos
│   └── videos/             # Ambient background hero video loops
├── index.html              # Main webpage with semantic layout and script links
└── README.md               # Project documentation
```

---

## 🚀 Setup & Local Preview

Since this project runs entirely on vanilla HTML/CSS/JS, you can run it locally without installing complex build pipelines.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/madhusatyakumarkatta/studio-replica.git
    cd studio-replica
    ```

2.  **Open the project:**
    *   Simply double-click the `index.html` file to open it in your browser.
    *   *Alternatively (Recommended):* Run it using a local development server like VS Code's **Live Server** extension or Python's HTTP server to ensure local assets (videos/fonts) load correctly with correct CORS policies:
        ```bash
        # Python 3
        python -m http.server 8000
        ```
        Then visit `http://localhost:8000` in your web browser.

---

## 🖌️ Design Credits

All design assets, typography, and branding concepts are replicas of the original website by **[Sundown Studio](https://www.sundown-studio.com/)**. Created strictly for educational and frontend practice purposes.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

# Sundown Studio Replica

A pixel-perfect clone and interactive replica of the award-winning **Sundown Studio** website. This project captures the premium, minimalist design aesthetics, smooth inertial scrolling, and fluid animations of the original website using native web technologies and modern animation libraries.

---

## 🚀 Live Preview & Aesthetics

The replica is built with a strong focus on high-end frontend details, featuring:
- **Smooth Inertial Scrolling**: Powered by Lenis for consistent, natural scroll behavior.
- **Dynamic Keyframe Animations**: Custom background blob and gooey animations that respond dynamically.
- **Interactive Element Reveals**: Multi-layered project grid with custom follow-cursor hover image effects.
- **Modern Typography**: Embedded with premium custom Neue Haas Grotesk typography.

---

## 🛠️ Technology Stack

This project is built using:

- **Structure**: Semantic HTML5 markup
- **Styling**: Vanilla CSS3 layout systems (Flexbox, CSS Grid, Custom properties/variables)
- **Scripting**: Vanilla Javascript (ES6+) for DOM manipulation and interactions
- **Libraries & Plugins**:
  - [Lenis](https://github.com/darkroomengineering/lenis) — Smooth scroll experience
  - [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) — Timeline-based vector animations and triggers
  - [ScrollTrigger](https://greensock.com/scrolltrigger/) — Scroll-driven animation controls
  - [Swiper.js](https://swiperjs.com/) — Responsive, touch-draggable swiper sliders
  - [Remix Icon](https://remixicon.com/) — Clean vector icons for UI interaction

---

## 📂 Project Directory Structure

The project has been organized with a clean separation of concerns, keeping the root directory uncluttered and reserving it for primary page routes.

```
├── index.html           # Home page
├── all.html             # Project archive / All projects page
├── studio.html          # About page / Studio overview
├── work.html            # Work and projects showcase page
├── contact.html         # Contact and footer section page
└── assets/              # Central asset repository
    ├── css/             # Stylesheets
    │   ├── style.css    # Global stylesheet (layout, fonts, resets)
    │   ├── all.css      # Styles unique to the projects archive
    │   ├── studio.css   # Styles unique to the studio page
    │   ├── work.css     # Styles unique to the work page
    │   └── contact.css  # Styles unique to the contact page
    ├── js/              # Javascript components
    │   ├── studio.js    # Interactive logic, Swiper, and loader timelines
    │   ├── studioo.js   # Lenis scroll configuration for the studio page
    │   ├── all.js       # Card animation timelines for the archive page
    │   ├── work.js      # Card hover states and scrolls for the work page
    │   └── contact.js   # Scripting logic for the contact page
    ├── fonts/           # Custom local font assets
    │   ├── NHaasGroteskTXPro-55Rg.ttf (Regular)
    │   ├── NHaasGroteskTXPro-65Md.ttf (Medium)
    │   └── NHaasGroteskTXPro-75Bd.ttf (Bold)
    ├── images/          # Image and Vector SVG assets
    │   ├── icon.png     # Site shortcut icon
    │   ├── image.webp   # Sundown team banner
    │   ├── page4-img.webp
    │   └── swipper*.svg # Partner logos (Nike, Arc'teryx, Converse, etc.)
    └── videos/          # Compressed high-definition video assets
        └── video.mp4    # Main loop hero video
```

---

## 💻 Running the Project Locally

Because the project loads dynamic media elements (such as local videos) and local font resources, browsers may restrict some requests when files are opened directly via a file path (`file://`).

To run the site correctly, launch a local web server in the project folder.

### Option 1: Python HTTP Server (Built-in)
If you have Python installed, open your command terminal in the project directory and run:
```bash
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your web browser.

### Option 2: Live Server (VS Code Extension)
1. Install the **Live Server** extension in Visual Studio Code.
2. Open the project folder in VS Code.
3. Click the **Go Live** button in the status bar at the bottom-right corner of VS Code.

### Option 3: Node.js (http-server)
If you have Node.js and `npm` installed, you can use:
```bash
npx http-server -p 8000
```
Then visit [http://localhost:8000](http://localhost:8000).

---

## 🎨 Credits & Design System

- **Design Reference**: Sundown Studio
- **Developer**: PK Yadav
- All animations and custom transitions have been recreated to replicate the look and feel of the original site's premium layout.

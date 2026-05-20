# File Reorganization Plan

We will organize the repository to make it easier to navigate. Currently, all HTML, CSS, JavaScript, font, image, and video files are mixed together in the root directory. 

We propose moving all asset files into a structured `assets/` directory while keeping the main HTML files in the root directory. This creates a clean workspace where the pages are immediately visible.

## Proposed Directory Structure

```
/ (Root)
├── index.html
├── all.html
├── contact.html
├── studio.html (renamed from Studio.html)
├── work.html
└── assets/
    ├── css/
    │   ├── all.css
    │   ├── contact.css
    │   ├── studio.css (renamed from Studio.css)
    │   ├── style.css
    │   └── work.css
    ├── js/
    │   ├── all.js
    │   ├── contact.js
    │   ├── studio.js
    │   ├── studioo.js (renamed from Studioo.js)
    │   └── work.js
    ├── fonts/
    │   ├── NHaasGroteskTXPro-55Rg.ttf
    │   ├── NHaasGroteskTXPro-65Md.ttf
    │   └── NHaasGroteskTXPro-75Bd.ttf
    ├── images/
    │   ├── icon.png
    │   ├── image.webp
    │   ├── page4-img.webp
    │   ├── swipperarc.svg
    │   ├── swipperconver.svg
    │   ├── swipperhunter.svg
    │   ├── swipperimg.svg
    │   ├── swippermed.svg
    │   └── swippernike.svg
    └── videos/
        └── video.mp4
```

## Proposed Changes

### [HTML Files]

#### [MODIFY] [index.html](file:///c:/Users/kmadh/OneDrive/Attachments/CODE%20PLAYGROUND/SEM%202/studio-clone/studio-replica/index.html)
- Update shortcut icon link to `assets/images/icon.png`
- Update stylesheet link to `assets/css/style.css`
- Update script link to `assets/js/studio.js`
- Update links pointing to `Studio.html` to `studio.html`
- Update video source to `assets/videos/video.mp4`
- Update team image source to `assets/images/image.webp`
- Update page 4 background image attributes to `assets/images/page4-1.webp`, `assets/images/page4-2.webp`, `assets/images/page4-3.webp`
- Update page 4 image src to `assets/images/page4-img.webp`
- Update swipper SVG images to `assets/images/swippernike.svg`, `assets/images/swipperconver.svg`, etc.

#### [MODIFY] [all.html](file:///c:/Users/kmadh/OneDrive/Attachments/CODE%20PLAYGROUND/SEM%202/studio-clone/studio-replica/all.html)
- Update shortcut icon link to `assets/images/icon.png`
- Update style links to `assets/css/style.css` and `assets/css/all.css`
- Update script link to `assets/js/all.js`

#### [MODIFY] [contact.html](file:///c:/Users/kmadh/OneDrive/Attachments/CODE%20PLAYGROUND/SEM%202/studio-clone/studio-replica/contact.html)
- Update shortcut icon link to `assets/images/icon.png`
- Update style links to `assets/css/style.css` and `assets/css/contact.css`
- Update script link to `assets/js/contact.js`

#### [NEW] [studio.html](file:///c:/Users/kmadh/OneDrive/Attachments/CODE%20PLAYGROUND/SEM%202/studio-clone/studio-replica/studio.html)
- Created by renaming `Studio.html` to lowercase
- Update shortcut icon link to `assets/images/icon.png`
- Update style links to `assets/css/style.css` and `assets/css/studio.css`
- Update script link to `assets/js/studioo.js`

#### [MODIFY] [work.html](file:///c:/Users/kmadh/OneDrive/Attachments/CODE%20PLAYGROUND/SEM%202/studio-clone/studio-replica/work.html)
- Update shortcut icon link to `assets/images/icon.png`
- Update style links to `assets/css/style.css` and `assets/css/work.css`
- Update script link to `assets/js/work.js`

### [CSS Files]

#### [MODIFY] [style.css](file:///c:/Users/kmadh/OneDrive/Attachments/CODE%20PLAYGROUND/SEM%202/studio-clone/studio-replica/style.css)
- Update `@font-face` urls to use relative paths pointing to the new fonts folder: `../fonts/NHaasGroteskTXPro-55Rg.ttf`, etc.

### [File Moves]

We will create the directory structure and move all assets using shell commands.

## Verification Plan

### Manual Verification
- We will open the site locally and verify that:
  - All pages load correctly and links work.
  - Fonts load successfully.
  - The video loads and plays.
  - Swipper slides and their logos display correctly.
  - Animations (scroll animations via Lenis, fixed image hover animations) work.

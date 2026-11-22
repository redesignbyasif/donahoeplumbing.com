# Donahoe Plumbing Services, Inc — Premium Homepage Redesign (Demo)

A custom-built, premium, mobile-first homepage for **Donahoe Plumbing Services, Inc** (Sneads Ferry, NC), implemented as a fully static GitHub Pages-ready website.

> **Demo note:** This is a design demo with `noindex` enabled so it does not compete with the original website in search results.

## Business Details (from donahoeplumbing.com)

- **Business:** Donahoe Plumbing Services, Inc
- **Location:** 1420 Old Folkstone Rd, Sneads Ferry, NC 28460
- **Phone:** (704) 201-0531
- **Email:** donahoeplumbing@gmail.com
- **Services:** New Construction (Residential & Commercial), Kitchen & Bathroom Remodels, Repair Service, Replacement Services, Outdoor Kitchen/Shower/Dock Water Lines, Whole-House Water Filtration (Aquasana — only licensed installer in the area)
- **Coverage:** Wilmington to Jacksonville

## Design

- **Direction:** Coastal Trade Premium — editorial layout, full-bleed photography, bold typography, asymmetrical composition
- **Brand colors:** Deep navy `#0A2540` + water teal `#0E9BB5` (from existing brand / Aquasana palette)
- **Typography:** Archivo (display) + Inter (body)
- **Logo:** Recreated clean SVG wordmark preserving the original business name

## Project Structure

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── logo/
│       └── logo-mark.svg
├── .nojekyll
└── README.md
```

## Features

- Mobile-first responsive design (360 / 390 / 430 / 768 / 1024 / 1280 / 1440px)
- Sticky header + full-screen mobile menu
- Floating call button (mobile) + back-to-top
- FAQ accordion, scroll-reveal animations, smooth scrolling
- SEO meta + LocalBusiness JSON-LD, accessibility (skip link, ARIA, focus states)
- No backend, no build step — plain HTML/CSS/JS

## Run Locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push to GitHub (branch `main`).
2. Repo **Settings → Pages → Source: Deploy from branch → `main` / `(root)`**.
3. Site will be live at `https://<username>.github.io/<repo>/`.

All paths are relative, so the site works on project subdirectories too.

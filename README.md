# Satvik Kaul Portfolio

Personal portfolio site for **satvikkaul.github.io**, built as a lightweight static site for GitHub Pages.

The site highlights my work across **AI/ML, medical imaging, full-stack development, and product-oriented software projects**, with dedicated project case studies and a downloadable resume.

## Live Site

- **Portfolio:** `https://satvikkaul.github.io/`

## Pages

- `index.html` — homepage with hero section, featured projects, and contact links
- `pages/resume.html` — resume snapshot and downloadable PDF
- `pages/case-study.html` — reusable project case study page rendered dynamically from shared data

## Project Structure

- `assets/css/styles.css` — shared site styling
- `assets/js/site-data.js` — centralized profile, links, project data, and case study content
- `assets/js/script.js` — homepage rendering logic
- `assets/js/case-study.js` — case study rendering logic
- `assets/documents/satvik_kaul_resume.pdf` — downloadable resume
- `.nojekyll` — ensures GitHub Pages serves the site as plain static files

## Features

- Responsive static portfolio built for GitHub Pages
- Centralized site content through a shared data file
- Featured project cards linked to GitHub, demos, and case studies
- Reusable case study page structure for deeper project write-ups
- Resume companion page with direct PDF download
- Lightweight styling and motion without heavy frameworks

## Featured Work

Current featured projects include:

- **Smart Resume Analyzer**
- **Self-Supervised Learning for Gleason Grading**
- **NutriSnap AI Nutrition Assistant**
- **Masked Auto Encoder for Gleason Grading**

## Customization

Most portfolio content is managed in:

- `assets/js/site-data.js`

Update this file to change:

- profile text
- hero content
- featured project cards
- external links
- case study content
- quick facts / skills / project metadata

Use these files for layout-specific changes:

- `index.html` — homepage structure
- `pages/resume.html` — resume page structure
- `pages/case-study.html` — case study page shell
- `assets/css/styles.css` — design, spacing, typography, and responsive layout

Thank you!

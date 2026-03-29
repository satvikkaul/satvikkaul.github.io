# Satvik Kaul Portfolio

This is a static portfolio starter designed for the `satvikkaul.github.io` repository.

## What is included

- A one-page portfolio that works well on GitHub Pages
- A responsive layout with custom styling and light motion
- Curated project cards backed by live GitHub repository links
- A lightweight resume companion page
- Centralized portfolio content in the shared site data file

## Files

- `index.html`: homepage entry point
- `pages/resume.html`: resume companion page
- `pages/case-study.html`: reusable case study page
- `assets/css/styles.css`: shared styling
- `assets/js/site-data.js`: shared profile, project, and link data
- `assets/js/script.js`: homepage rendering logic
- `assets/js/case-study.js`: case study page rendering logic
- `assets/documents/satvik_kaul_resume.pdf`: downloadable PDF resume
- `.nojekyll`: tells GitHub Pages to serve the site as plain static files

## Quick customization

1. Open `assets/js/site-data.js`.
2. Update the text in `siteData.profile`.
3. Adjust the quick facts, skills, and featured project entries.
4. Update `pages/resume.html` if you want a fuller resume snapshot.
5. Optionally expand the case study layouts in `pages/case-study.html` and `assets/js/case-study.js`.

## Publishing

1. Clone your empty repository locally, or connect this folder to it:
   `https://github.com/satvikkaul/satvikkaul.github.io.git`
2. Commit these files.
3. Push to the default branch of `satvikkaul.github.io`.
4. Your site will publish at `https://satvikkaul.github.io/`.

## Good next upgrades

- Replace the existing PDF in `assets/documents/` when you update your resume
- Add screenshots for each project
- Add a custom domain later if you want stronger branding

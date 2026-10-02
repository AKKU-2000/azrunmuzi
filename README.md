# AZRUNMUZI — Freelance Mobile App Developer Portfolio

Static portfolio site (HTML/CSS/JavaScript), deployed to GitHub Pages.

## Live site

**https://akku-2000.github.io/azrunmuzi/**

Repository: https://github.com/AKKU-2000/azrunmuzi

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure and content (the live site) |
| `style.css` | Responsive visual design |
| `script.js` | Theme toggle, reveal animations, mobile menu, chat widget, form demo |
| `assets/photo.jpg` | Profile photo |
| `favicon.svg` | Favicon |
| `404.html` | Not-found page |
| `robots.txt` | Search crawler rules |
| `.gitignore` | Excludes local-only files |

`index-blue.html` and `AZRUNMUZI_red_black_portfolio.html` are alternative design drafts kept locally and excluded from deploy.

## Customize

Search and replace in `index.html`:
- project names and descriptions
- testimonials (currently placeholder "Client Name")
- skill percentages
- `9895657390` — the contact number (appears in the nav button, hero contact row, and contact form context)

### Profile photo
Replace `assets/photo.jpg`. The hero image is rendered at 560px tall and uses
`object-fit: cover` with `object-position: center top`, so a portrait-oriented
photo works best.

## Contact form
`script.js` currently shows a confirmation message only. To receive submissions,
connect a service such as Formspree or Web3Forms and POST to it in the
`#contactForm` submit handler.

## Local preview
```bash
npx serve .
```
Or open `index.html` directly, or use VS Code Live Server.

## Deploy
Push to `main`; GitHub Pages builds from the `main` branch automatically.
Changes appear at the live URL within a minute or two.

Auto-deploy via GitHub Actions is optional. To enable it, add
`.github/workflows/deploy.yml`, then set **Settings → Pages → Source** to
**GitHub Actions**. Pushing a workflow file requires a token with the
`workflow` scope.
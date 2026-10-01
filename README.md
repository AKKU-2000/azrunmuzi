# AZRUNMUZI — Freelance Mobile App Developer Portfolio

Static portfolio site (HTML/CSS/JavaScript), deployed automatically to GitHub Pages.

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
| `.github/workflows/deploy.yml` | Auto-publish to GitHub Pages on every push to `main` |

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
Push to `main`; GitHub Actions publishes the site automatically.
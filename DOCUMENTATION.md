# Documentation

## Purpose
This project is a minimal, semantic, responsive site built for the AeroAspire internship first week assignments.

## File structure
- `index.html` — main HTML file
- `css/styles.css` — styling (mobile-first)
- `images/` — assets

## Design and accessibility decisions
- Mobile-first approach ensures good performance on phones.
- Semantic tags (header, main, section, aside, footer) help screen readers and SEO.
- All interactive controls use clear labels and focus styles for keyboard users.

## How layout works
- Grid is used for the main container; at `min-width:768px`, the layout becomes two-column (content + photo).
- Flexbox is used for small row-based layout like nav and skill pills.

## Deployment
- Create a GitHub repo, push your files, enable GitHub Pages from main branch → settings → Pages.

## Sept 24 — JS basics, DOM, events, form handling

- Implemented greeting by time, toggle photo button, and JS-driven contact form that submits without reload.
- Key JS concepts applied: let/const, event listeners, event.preventDefault(), DOM selection & manipulation, simple client-side validation and accessibility (aria-invalid, aria-live).
- Verification: greeting, toggle, validation and in-page submission tested locally.

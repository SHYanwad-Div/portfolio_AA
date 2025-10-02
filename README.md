<<<<<<< HEAD
# AeroAspire — Intern Demo Site

Simple responsive portfolio page for AeroAspire internship tasks (About / Photo / Contact).

## Features
- Semantic HTML5 markup (header, main, section, aside, footer)
- Mobile-first CSS with Grid + Flexbox
- Accessible form with labels
- Lightweight and easy to extend

## How to run
1. Clone repo / copy files.
2. Open `index.html` in your browser (double-click or `ctrl+o`).
3. Replace `images/profile.jpg` with your photo.

## Next steps
- Add JavaScript interactivity (greeting, form submission without reload).
- Deploy to GitHub Pages.

=======
# portfolio_AA
internship assignment
>>>>>>> 63215311d173f83192adfa09971873953d8909d2
# AeroAspire Internship Portfolio - Day 4

## Overview

This is a responsive portfolio site created as an intern assignment for AeroAspire. The project demonstrates semantic HTML5, CSS Grid/Flexbox responsive design, and JavaScript interactivity.

## Features Implemented as of Day 4

- Semantic HTML5 structure with accessible elements.
- Responsive CSS styling with light and dark mode themes.
- Dark mode toggle button with user preference persistence.
- Dynamic current year display in footer using JavaScript.
- Accessible, no-reload contact form with validation and UI feedback.

## Getting Started

### Prerequisites

- A modern web browser (e.g. Chrome, Firefox, Edge).
- No backend or additional setup required for demo purposes.

### How to Use

1. Clone or download this repository.
2. Open `index.html` in your web browser.
3. Navigate using the header menu (About, Photo, Contact).
4. Use the **Dark Mode** button in the header to switch themes.
5. Fill and submit the contact form to see instant validation and submission display.

## File Structure

/css/styles.css - Main stylesheet with light/dark themes
/js/main.js - JavaScript for greeting, photo toggle, dark mode, contact form
index.html - Main HTML document

text

## Future Work

- Add backend integration for contact form submissions.
- Deploy the portfolio to GitHub Pages.
- Add animations and more interactive features.

## License

This project is for internship learning purposes only.
# Portfolio — AeroAspire Internship

## Progress Log

### Week 1
- **Day 1–4**: Built a static HTML/CSS/JS portfolio with sections (Home, About, Photo, Contact, Footer).
- **Day 5**: Reflection + bonus improvements.

---

### Week 2
#### Day 1 — React + Vite Setup
- Migrated project into a React + Vite environment.
- Installed Material-UI (MUI) for design system.
- Created base folder structure:
  - `src/components`
  - `src/assets`
- Implemented first component: header with MUI `AppBar` and `Typography`.
- Verified hot reloading and build/dev flow.

## Next steps (Day 2): Add modular components for Home, About, Photo, Contact, Footer.
## Week 2 Day 2 — React Props & TaskCard Component
## Overview
Built a reusable TaskCard component and rendered a list of dummy tasks via props. Learned how parent-to-child communication works in React and practiced using MUI’s Card components.
## Key Features
TaskCard with title, description, and status.
Rendered multiple tasks dynamically using .map().
Conditional styling for status.
Props flow explained and tested.
## Learnings
Props act like function arguments. Changing props triggers re-render.
Virtual DOM enables efficient UI updates.
Can prevent unnecessary re-renders with React.memo and hooks.

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
## Day 3: Git Basics and Branch Management -- sept 25

### Tasks Completed:
1. **Git Basics**
   - Initialized a Git repository using `git init`.
   - Learned to stage changes with `git add` and commit using `git commit`.
   - Checked repository status with `git status` and viewed commit history using `git log`.
   - Practiced organizing project files and tracking daily work using Git.

2. **Branching**
   - Created a feature branch for new portfolio functionalities:
     ```bash
     git checkout -b feature/<branch-name>
     ```
   - Committed changes to the feature branch regularly.
   - Learned the importance of keeping the `main` branch stable.

3. **Merging Branches**
   - Merged the feature branch into `main` after review:
     ```bash
     git checkout main
     git merge feature/<branch-name>
     ```
   - **Merge Conflicts**
     - **Cause:** Conflicts occur when changes in two branches affect the same lines or when one branch deletes a file another branch modifies.
     - **Resolution Steps:**
       1. Open the conflicted file(s)
       2. Identify conflicting sections marked by Git (`<<<<<<<`, `=======`, `>>>>>>>`)
       3. Edit and combine changes as needed
       4. Stage resolved files using `git add <file>`
       5. Commit the merge resolution using `git commit`

### Key Learnings:
- Branching allows safe development without affecting main code.
- Regular commits with descriptive messages improve tracking.
- Merge conflicts are common in collaboration and can be resolved carefully.

### Next Steps:
- Continue implementing portfolio features in separate branches.
- Practice resolving merge conflicts with collaborative work.
## Day 4: Styling polish & deployment

## Purpose
This project is a minimal, semantic, and responsive portfolio site built as part of the AeroAspire internship assignments. It aims to showcase modern web development practices including accessibility, responsive design, and JavaScript enhancements.

## File Structure
- `index.html` — main HTML document with semantic markup
- `css/styles.css` — stylesheet implementing mobile-first responsive design and theming (light/dark modes)
- `js/main.js` — JavaScript for interactive features: greeting, photo toggle, dark mode toggle, contact form handling
- `images/` — folder for profile photo and other assets

## Design and Accessibility Decisions
- Mobile-first design ensures optimized performance and usability on phones and small devices.
- Semantic HTML5 tags (`header`, `main`, `section`, `aside`, `footer`) improve screen reader support and search engine optimization.
- Interactive elements like buttons and form inputs have accessible labels and visible focus styles to aid keyboard users.
- The dark mode toggle button uses ARIA attributes for better screen reader interaction.

## How Layout Works
- The main content area uses CSS Grid to create a single-column layout by default.
- At viewport widths of 768px and above, the layout switches to two columns (main content + photo sidebar) for better use of space.
- Flexbox is employed for horizontal navigation menus and wrapping skill tag lists to maintain alignment and responsiveness.

## Interactive Features
- **Greeting Message**: Personalized greeting changes based on the user's local time.
- **Photo Toggle**: A button lets users show or hide the profile photo dynamically.
- **Dark Mode Toggle**: Switch between light and dark themes with user preference saved in localStorage.
- **Contact Form Handling**: Validation and submission feedback occur without page reload, with submissions rendered live on the page.

## Deployment
- Initialize a GitHub repository with the project files.
- Push the code to GitHub and enable GitHub Pages to deploy directly from the `main` branch under repository settings → Pages.
- The live site will then be hosted at `https://<username>.github.io/<repository>/`.

## Next Steps
- Integrate backend functionality for persistent contact form submissions.
- Add additional UI enhancements such as animations and transitions.
- Optimize for SEO and cross-browser compatibility.
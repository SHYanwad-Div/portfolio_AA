/* js/main.js
   Sept 24 JS tasks:
   - greeting based on time
   - toggle photo section (hide/show)
   - contact form handling (no page reload), validation, UI feedback
   - simple client-side storage of submissions (in-memory)
*/

// ---- Greeting ----
(function greeting() {
  const el = document.querySelector('.site-header .greeting');
  const now = new Date();
  const h = now.getHours();
  let g = 'Hello';
  if (h < 12) g = 'Good morning';
  else if (h < 17) g = 'Good afternoon';
  else g = 'Good evening';

  if (el) el.textContent = `${g} — welcome to the AeroAspire demo`;
})();

// ---- Toggle Photo Section ----
(function togglePhoto() {
  // create toggle button in header nav area (accessible)
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'toggle-photo-btn';
  btn.textContent = 'Hide Photo';
  btn.setAttribute('aria-pressed', 'false');
  btn.style.marginLeft = '0.6rem';
  btn.style.cursor = 'pointer';

  // Insert button after nav list
  nav.appendChild(btn);

  const photo = document.getElementById('photo');
  if (!photo) return;

  btn.addEventListener('click', function () {
    const isHidden = photo.getAttribute('data-hidden') === 'true';
    if (isHidden) {
      photo.style.display = '';
      photo.setAttribute('data-hidden', 'false');
      btn.textContent = 'Hide Photo';
      btn.setAttribute('aria-pressed', 'false');
    } else {
      photo.style.display = 'none';
      photo.setAttribute('data-hidden', 'true');
      btn.textContent = 'Show Photo';
      btn.setAttribute('aria-pressed', 'true');
    }
  });
})();


// ---- Form handling (no reload), basic validation, and UI feedback ----
(function contactFormHandler() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // area to display submitted messages (create below the form)
  const outWrapper = document.createElement('div');
  outWrapper.className = 'submissions';
  outWrapper.style.marginTop = '1rem';
  form.parentNode.insertBefore(outWrapper, form.nextSibling);

  // In-memory store for submissions (for demo)
  const submissions = [];

  // helper: show error on input and set aria-invalid
  function setFieldError(inputEl, message) {
    inputEl.setAttribute('aria-invalid', 'true');
    // show message in small element next to field (remove old)
    let note = inputEl.parentNode.querySelector('.field-note');
    if (!note) {
      note = document.createElement('div');
      note.className = 'field-note';
      note.style.color = '#b62424';
      note.style.fontSize = '0.9rem';
      note.style.marginTop = '4px';
      inputEl.parentNode.appendChild(note);
    }
    note.textContent = message;
  }
  function clearFieldError(inputEl) {
    inputEl.removeAttribute('aria-invalid');
    const note = inputEl.parentNode.querySelector('.field-note');
    if (note) note.remove();
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault(); // prevents full page reload — we handle it in JS

    // gather values
    const nameEl = form.querySelector('#name');
    const emailEl = form.querySelector('#email');
    const messageEl = form.querySelector('#message');

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const message = messageEl.value.trim();

    // simple validation
    let hasErr = false;
    clearFieldError(nameEl);
    clearFieldError(emailEl);

    if (!name) {
      setFieldError(nameEl, 'Name is required');
      if (!hasErr) nameEl.focus();
      hasErr = true;
    }

    // email basic regex (simple)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setFieldError(emailEl, 'Please enter a valid email');
      if (!hasErr) emailEl.focus();
      hasErr = true;
    }

    if (hasErr) {
      // show a brief accessible summary
      showStatus('Please correct the highlighted fields.', 'error');
      return;
    }

    // create submission object (in real app this would be POST to backend)
    const sub = {
      id: Date.now(),
      name,
      email,
      message,
      created_at: new Date().toISOString()
    };

    // store and show immediately (optimistic UI)
    submissions.unshift(sub);
    renderSubmissions();

    // clear form and show success
    form.reset();
    showStatus('Thanks — your message was recorded (demo).', 'success');
  });

  // small status element
  const statusEl = document.createElement('div');
  statusEl.className = 'form-status';
  statusEl.style.marginTop = '0.75rem';
  form.appendChild(statusEl);

  function showStatus(text, type = 'info') {
    statusEl.textContent = text;
    statusEl.style.color = type === 'error' ? '#b62424' : '#0b67b2';
    // announcement for screen readers
    statusEl.setAttribute('role', 'status');
    // clear after 4s
    clearTimeout(statusEl._timeout);
    statusEl._timeout = setTimeout(() => {
      statusEl.textContent = '';
    }, 4000);
  }

  function renderSubmissions() {
    outWrapper.innerHTML = ''; // clear
    if (submissions.length === 0) {
      outWrapper.textContent = '';
      return;
    }
    const list = document.createElement('div');
    list.className = 'submission-list';
    submissions.forEach(s => {
      const card = document.createElement('article');
      card.className = 'submission-card';
      card.style.border = '1px solid rgba(0,0,0,0.06)';
      card.style.padding = '10px';
      card.style.borderRadius = '8px';
      card.style.marginBottom = '8px';

      const h = document.createElement('h4');
      h.textContent = s.name + ' — ' + (new Date(s.created_at)).toLocaleString();
      h.style.margin = '0 0 6px 0';
      const p = document.createElement('p');
      p.textContent = s.message;
      p.style.margin = '0';

      const e = document.createElement('div');
      e.textContent = s.email;
      e.style.color = '#556070';
      e.style.fontSize = '0.9rem';
      e.style.marginTop = '6px';

      card.appendChild(h); card.appendChild(p); card.appendChild(e);
      list.appendChild(card);
    });
    outWrapper.appendChild(list);
  }

})();

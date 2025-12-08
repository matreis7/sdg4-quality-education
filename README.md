# SDG 4 – Quality Education (Web Design & Development Project)

Responsive multi-page website about **Sustainable Development Goal 4 – Quality Education**, built for the **Web Design & Development** module at the National College of Ireland.

The project demonstrates:

- Semantic HTML and Bootstrap layout
- Custom CSS components and responsive design
- External JavaScript for DOM manipulation and form validation
- Basic SEO and accessibility best practices

> Student: **Matheus Borges Mota Reis**  
> Module: **Web Design & Development** – Year 1  
> College: **National College of Ireland**

---

## 🎯 Project Goals

- Present SDG 4 in a clear, engaging way for visitors.
- Provide curated resources and links for further learning.
- Practice **clean separation** of concerns:
  - Structure → HTML  
  - Presentation → CSS  
  - Behaviour → JavaScript
- Implement at least one **interactive feature** and one **validated form** using JavaScript.

---

## 🧭 Pages

### `index.html` – Home

- Hero section with background image and **spinning SDG navigation wheel**.
- Intro to **Goal 4 – Quality Education**.
- “What is SDG 4?” section explaining context and key ideas.
- Statistics strip with SDG-related figures and external links (UNESCO, UNICEF).
- “Targets” section describing SDG 4.1, 4.2 and 4.3 with supporting images.

**Key features on this page:**

- SDG-style circular navigation wheel powered by `mt-wheel.js`.
- Reusable button styles, typography tokens and layouts from `style.css`.
- Back-to-top floating button, shared across pages (`mt-backtotop.js`).

---

### `resources.html` – Resources & Learning

- Hero section: “Learn & Share: Educational Resources”.
- Quick jump buttons to sections using in-page anchors.
- **Featured resources grid** (video, UN fact sheet, UNICEF report).
- **Trusted websites & platforms**: UN, Global Goals, UNESCO, UNICEF.
- **“Share a Resource” form** with custom JavaScript validation.

Form fields:

- Resource Title (required)
- Resource Type (select)
- Resource Link (URL)
- File upload (PDF/DOC/PPT/ZIP)
- Author / Source
- Short Summary
- Description
- “I agree to share this resource” checkbox (required)

The validation logic for this form is in `script/mt-resources-form.js`.

---

## 🧪 JavaScript Overview

All custom behaviour is placed in external JS files in the `script/` folder.

### 1. `mt-wheel.js` – Spinning SDG Wheel (Home page)

Enhances the hero section on `index.html` with a rotating SDG-style wheel.

**What it does:**

- Waits for `DOMContentLoaded`.
- Selects the `.mt-sdg-wheel-orbit` `<ul>` and all its `<li>` slices.
- Calculates the angle between slices (`360 / numberOfSlices`).
- Uses `transform: rotate(...) skew(...)` to position each slice around the circle.
- Applies SDG-inspired colours via a radial gradient.
- Keeps the code safe to load on every page by checking if the wheel exists.

**Main concepts used:**

- DOM selection (`querySelector`, `querySelectorAll`)
- Loops with `forEach`
- Dynamic inline styles
- Arrays and indexing for colour assignment

The wheel layout is adapted from a CodePen by Felipe Mendez and visually inspired by the Global Goals website.

---

### 2. `mt-resources-form.js` – Custom Form Validation (Resources page)

Provides **client-side validation** for the “Share a Resource” form on `resources.html`.

**Key behaviours:**

- Attaches after `DOMContentLoaded` and selects the form `#mt-rsc-form`.
- Disables native HTML5 validation using `novalidate` so custom messages and styling can be applied.
- Grabs references to each input, select and checkbox using `getElementById`.
- On `submit`:
  - Runs `validateInputs()`.
  - Checks required fields (title, type, author, checkbox).
  - Validates URL format with a regex (must start with `http://` or `https://`).
  - Enforces **“either link or file”** rule for resources.
  - Checks length of optional summary/description if provided to encourage meaningful text.
  - Uses `preventDefault()` if any rule fails to stop form submission.

**Feedback functions:**

- `setError(element, message)`  
  Adds `.error` class to the field’s wrapper and displays the message in a `<small class="error">`.

- `setSuccess(element)`  
  Adds `.success` class and clears any error message.

- `setNeutral(element)`  
  Removes both `.error` and `.success` when an optional field is left empty.

These classes are styled in `style.css` to show red or green borders and small helper text.

**Extra UX touches:**

- `updateTypeUI()` changes the placeholder of the link field depending on the selected resource type and pre-fills `https://` to guide users.
- The form listens to:
  - `submit` → full validation.
  - `reset` → clears all messages and states.
  - `change` on `resourceType` → updates placeholders dynamically.

---

### 3. `mt-backtotop.js` – Back to Top Button

Adds a floating “Back to top” button on all pages.

**Behaviour:**

- On scroll past 300px, adds `.show` to `.mt-back-to-top`.
- On scroll above 300px, removes `.show`.
- On click, scrolls smoothly to the top using `window.scrollTo({ top: 0, behavior: 'smooth' })`.

**Concepts used:**

- `scroll` and `click` events
- `classList.add/remove` to trigger CSS transitions
- Smooth scroll behaviour for better UX

---

## 🎨 CSS & Design

All custom styles are in `css/style.css`.

- Common tokens defined with CSS variables (`:root`):
  - `--mt-sdg4`, `--mt-sdg4-dark`, `--mt-sdg4-soft`
  - `--mt-gray-900`, `--mt-gray-700`
  - `--mt-radius-lg`, `--mt-shadow-soft`
- Typography:
  - **Anton** for headings, **Open Sans** for body text.
- Reusable components:
  - `.mt-btn`, `.mt-btn-large`, `.mt-btn-full`
  - `.mt-section-eyebrow`, `.mt-section-card`, `.mt-resource-card`, `.mt-trusted-card`
- Responsive adjustments using `@media` queries, especially for:
  - Mobile hero spacing
  - Wheel behaviour
  - Resource cards layout

The CSS file also contains sections authored by teammates for other pages (campaigns, challenges, about SDG 4, registration, stories), clearly marked with comments and author names.

---

## 🔍 SEO & Accessibility

- Unique `<title>` and `<meta name="description">` on each page.
- Keyword and robots meta tags:
  - `keywords`, `title`, `description`, `robots`, `language`.
- Semantic structure using headings (`<h1>`, `<h2>`, `<h3>`), `<section>`, `<article>`.
- External links open in new tabs where appropriate (e.g. YouTube, UN sites).
- “Back to top” button uses an accessible label: `aria-label="Back to top"`.

---

## 🛠️ Technologies

- **HTML5** – semantic structure
- **CSS3** – custom styles + responsive layout
- **Bootstrap 5** – grid, basic utilities
- **JavaScript (Vanilla)** – DOM manipulation, events, validation
- **Font Awesome / Bootstrap Icons** – icons
- **Google Fonts** – Anton + Open Sans

---

## 📂 Folder Structure (simplified)

```text
.
├── index.html
├── resources.html
├── css
│   └── style.css
├── script
│   ├── main.js               # (navbar/footer loading - shared)
│   ├── mt-wheel.js           # spinning SDG wheel
│   ├── mt-resources-form.js  # resources form validation
│   └── mt-backtotop.js       # back-to-top button
└── img
    └── matheus
        ├── childrenPlaying.jpg
        ├── what-is-sdg4.jpg
        ├── cardTwo.jpg
        ├── cardThree.jpg
        └── ... other assets

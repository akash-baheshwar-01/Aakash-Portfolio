# Aakash — Professional Graphic Designer Portfolio

A clean, professional portfolio website designed for graphic designers. Built with modern HTML, CSS, and JavaScript—no frameworks needed. Fully customizable and ready to showcase your best work.

## ✨ Features

- **Professional Hero Section** — Bold, elegant home page with clear call-to-action
- **Smooth Animations** — Fade-in effects, scroll reveals, and hover interactions
- **Responsive Design** — Looks great on desktop, tablet, and mobile
- **Service Showcase** — Highlight your core skills (Brand Identity, Web & Digital, Print & Motion)
- **Multi-Page Structure** — One dedicated page per section (Experience, Projects, About, Education, Contact)
- **Black & White Gradient** — Modern, elegant gradient background
- **Easy to Customize** — Simple HTML cards; just add your text and images

## 📁 File Structure

```
frontend/
├── index.html              # Home page with hero section
├── experience.html         # Work experience and roles
├── about.html              # Your background and design philosophy
├── projects.html           # Featured projects with images
├── education.html          # Degrees and certifications
├── contact.html            # Email and social links
├── style.css               # All styling, animations, and responsive layout
└── script.js               # Navigation, animations, and interactivity
```

## 🎨 How to Customize

1. **Update Your Name & Title**: Edit the `<h1>` in `index.html` (line ~25)
2. **Add Your Content**: 
   - Open each section page (e.g., `projects.html`, `experience.html`)
   - Replace placeholder text inside the card elements
   - For projects: add image URLs where it says `[Add Project Image]`
3. **Add Social Links**: In `contact.html`, replace placeholder links with your actual profiles
4. **Change Hero Tagline**: Edit the `<p class="hero-desc">` in `index.html` to reflect your unique value

## 📸 Adding Project Images

In `projects.html`, replace the placeholder with an `<img>` tag:

```html
<div class="project-image">
  <img src="project-1-thumbnail.jpg" alt="Project 1">
</div>
```

Place your images in the `frontend/` folder and reference them.

## 🚀 Quick Start

1. Open `frontend/index.html` in a browser to preview
2. Edit HTML files with your text and images
3. Customize CSS variables in `style.css` (lines 1-5) for different colors
4. Deploy to GitHub Pages, Netlify, or any static host

## 🎯 Pro Tips

- **Keep it Concise**: 1–2 sentences per card works best
- **Use High-Quality Images**: First impressions matter
- **Link Projects**: Make project cards clickable to external case studies
- **Update Regularly**: Add new work as you complete projects
- **Mobile Test**: Check your site on phone and tablet before sharing

## 🔧 Customization Options

### Change Colors (optional)
Edit the CSS variables at the top of `style.css`:
```css
--black:#000;
--white:#fff;
--light-gray:#f5f5f5;
```

### Adjust Fonts
Change the font-family in `body` rule (line ~22 in `style.css`).

### Add More Cards
Copy a `<article class="card">...</article>` block and paste it in the same section.

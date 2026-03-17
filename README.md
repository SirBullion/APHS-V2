# APHS Static Website

Static website for **All People Holistic Support**.

## Stack

- HTML (`index.html`, `about.html`, `services.html`, `refer.html`, `careers.html`, `contact.html`, `feedback.html`, `complaint.html`)
- CSS (`style.css`)
- Vanilla JS (`site.js`)
- Form handling via Formspree

## Project Structure

- `index.html`: Home page
- `about.html`: About page
- `services.html`: Services page
- `refer.html`: Referral form page
- `careers.html`: Careers expression-of-interest page
- `contact.html`: Contact form page
- `feedback.html`: Feedback form page
- `complaint.html`: Complaint form page
- `style.css`: Shared styles
- `site.js`: Shared JS for:
  - dynamic footer year (`.js-current-year`)
  - AJAX form submit handling (`data-ajax-form`)
  - success/error status messages
- `logo.png`, `favicon.png`, `bg.gif`: Site assets

## Deploy

This is deployable as-is to any static host:

- Netlify
- Cloudflare Pages
- GitHub Pages
- cPanel static hosting
- S3 + CloudFront

Deploy by uploading the full `APHS` folder contents.

## Forms

All forms post to Formspree endpoint:

- `https://formspree.io/f/mwpbzdal`

Each form includes hidden routing fields:

- `form_type`
- `source_page`

This lets you filter submissions by form in Formspree/email automation.

## SEO

Each page includes:

- `canonical`
- Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:locale`)

Twitter tags were intentionally removed.

Current production domain in metadata:

- `https://aphsnt.com.au`

If domain changes, update:

- `canonical` links
- `og:url`
- `og:image`

## Content Updates

Common updates:

- Navigation labels/links: update header nav in each HTML file
- Footer text: update in each HTML file
- Colors/spacing/typography: update `style.css`
- Form success/error text: update `data-success-message` in form tags or `site.js`

## Accessibility and UX

Implemented:

- Keyboard focus styles via `:focus-visible`
- `aria-current="page"` on active nav links
- `aria-live="polite"` form status messages
- Disabled submit button while request is in progress

## Notes

- No backend code in this project.
- If Formspree endpoint changes, update all form `action` attributes.
- Keep files ASCII/plain UTF-8 text.

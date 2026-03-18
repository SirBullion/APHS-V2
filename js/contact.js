document.addEventListener("DOMContentLoaded", () => {
  // Keep contact-page logic external for CSP compatibility.
  const form = document.querySelector(".contact-form[data-ajax-form]");
  if (!form) return;
});

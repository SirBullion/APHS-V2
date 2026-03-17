document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear().toString();
  document.querySelectorAll(".js-current-year").forEach((node) => {
    node.textContent = year;
  });

  document.querySelectorAll("form[data-ajax-form]").forEach((form) => {
    const status = document.getElementById(form.dataset.statusId || "");
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      if (status) {
        status.textContent = "";
        status.className = "form-status";
      }

      if (submitButton) {
        submitButton.disabled = true;
      }

      try {
        const response = await fetch(form.action, {
          method: form.method || "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });

        if (!response.ok) {
          throw new Error("Submission failed.");
        }

        form.reset();
        if (status) {
          status.textContent =
            form.dataset.successMessage ||
            "Thanks. Your submission has been received.";
          status.className = "form-status is-success";
        }
      } catch (error) {
        if (status) {
          status.textContent =
            "Something went wrong. Please try again or contact us directly.";
          status.className = "form-status is-error";
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });
  });
});

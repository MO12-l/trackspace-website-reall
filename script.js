// Trackspace preview: forms do not send or store any information.
document.querySelectorAll(".preview-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = form.querySelector(".form-message");
    if (message) {
      message.textContent = "This is a preview. Your details were not submitted.";
    }
  });
});
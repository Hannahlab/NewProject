document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("goalForm");
  const submitButton = form.querySelector('input[type="submit"]');
  const successMessage = document.getElementById("successMessage");

  // Hover effect to change button text
  submitButton.addEventListener("mouseenter", function () {
    submitButton.value = "Start My 2026 Journey";
  });

  submitButton.addEventListener("mouseleave", function () {
    submitButton.value = "Start Journey";
  });

  // Form submit
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // hide form
    form.style.display = "none";

    // show success message with user name
    const name = document.getElementById("name").value;
    successMessage.textContent = `🎉 Congratulations ${name}! Your 2026 journey has started.`;
    successMessage.classList.remove("hidden");
  });
});

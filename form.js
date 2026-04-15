const form = document.getElementById("contact-form");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Odesílám...";
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submiting", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      submitBtn.textContent = "✔️ Odesláno!";

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        form.reset();
      }, 3000);
    } else {
      submitBtn.textContent = "❌ Zprávu se nepodařilo odeslat.";

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }
  } catch (error) {
    // alert("Something went wrong. Please try again.");
  } finally {
  }
});

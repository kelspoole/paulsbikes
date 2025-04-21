document.addEventListener("DOMContentLoaded", function () {
  const enquirySelect = document.getElementById("enquiry");
  const jobTypeWrapper = document.getElementById("job-type-wrapper");
  const form = document.getElementById("booking-form");
  const thankYou = document.getElementById("thank-you");

  if (enquirySelect) {
    enquirySelect.addEventListener("change", function () {
      const show = this.value === "booking" || this.value === "pricing";
      jobTypeWrapper.style.display = show ? "block" : "none";
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      })
        .then(response => {
          if (response.ok) {
            form.reset();
            form.style.display = "none";
            thankYou.style.display = "block";
          } else {
            alert("Oops! Something went wrong.");
          }
        })
        .catch(() => {
          alert("Network error. Please try again.");
        });
    });
  }
});

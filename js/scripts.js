// Show/hide Job Type field based on Enquiry Type
document.addEventListener("DOMContentLoaded", function () {
    const enquirySelect = document.getElementById("enquiry");
    const jobTypeWrapper = document.getElementById("job-type-wrapper");
  
    enquirySelect.addEventListener("change", function () {
      const show = this.value === "booking" || this.value === "pricing";
      jobTypeWrapper.style.display = show ? "block" : "none";
    });
  });
  
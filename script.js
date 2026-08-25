const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const copyButton = document.getElementById("copy-btn");
const accountNumber = document.getElementById("account-number");

copyButton.addEventListener("click", function() {
  navigator.clipboard.writeText(accountNumber.textContent);

  copyButton.textContent = "Copied";

  setTimeout (function (){
    copyButton.textContent = "copy"
  }, 2000);
});

const progressBars = document.querySelectorAll(".progress-fill");
progressBars.forEach(function(bar) {
  const raised = Number(bar.dataset.raised);
  const goal = Number(bar.dataset.goal);
  const percentage = (raised / goal) * 100;
  bar.style.width = percentage + "%";
});
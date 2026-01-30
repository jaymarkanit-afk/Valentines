// Add click event listener to the wax seal
document.addEventListener("DOMContentLoaded", function () {
  const waxSeal = document.querySelector(".wax-seal");

  if (waxSeal) {
    waxSeal.addEventListener("click", function () {
      // Navigate to the letter page
      window.location.href = "letter.html";
    });
  }
});

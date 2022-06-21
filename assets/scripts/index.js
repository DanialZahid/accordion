// Store reference for all accordions.

const accordion = document.querySelectorAll(".accordion-title");

// Open accordion when clicked on it.

accordion.forEach((e) => {
  e.addEventListener("click", toggleAccordion);
});

function toggleAccordion(e) {
  e.target.classList.toggle("accordion-active");

  // Prevent opening multiple accordions at the same time.

  // accordion.forEach((e) => {
  //   if (this !== e) {
  //     e.classList.remove("accordion-active");
  //   }
  // });
}

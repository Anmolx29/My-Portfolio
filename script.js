const scrollToElement = (element, offset = 0) => {
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: elementPosition - offset,
    behavior: "smooth"
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const contactLink = document.getElementById("contact-link");
  const contactSection = document.getElementById("contact");

  if (contactLink && contactSection) {
    contactLink.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToElement(contactSection, 50); // adjust offset if needed
    });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

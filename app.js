function deactivateAllLinks() {
  const links = document.querySelectorAll(".navbar a");
  links.forEach((link) => link.classList.remove("active"));
}

document.querySelector(".navbar").addEventListener("click", function (event) {
  deactivateAllLinks();
  event.target.classList.add("active");
});

document
  .querySelector(".header-logo")
  .addEventListener("click", function (event) {
    deactivateAllLinks();
  });

// Menu & Mobile Navbar Variables
const MobileNavbar = document.querySelector(".mobile__navbar__wrapper"),
  closeMobileNavbar = document.querySelector(".close__ico"),
  openMobileNavbar = document.querySelector(".menu__ico");

// Open Mobile Navbar
openMobileNavbar.addEventListener("click", () => {
  MobileNavbar.style.display = "flex";
});

// Close Mobile Navbar
closeMobileNavbar.addEventListener("click", () => {
  MobileNavbar.style.display = "none";
});

document.querySelectorAll(".acc__title").forEach((item) => {
  item.addEventListener("click", () => {
    const panel = item.parentNode;

    // Toggle active class for the clicked panel
    panel.classList.toggle("active");

    // Close other panels
    document.querySelectorAll(".accordion__panel").forEach((otherPanel) => {
      if (otherPanel !== panel) {
        otherPanel.classList.remove("active");
      }
    });
  });
});

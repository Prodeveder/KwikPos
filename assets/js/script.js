const menu = document.querySelector(".menu"),
  close = document.querySelector(".close"),
  mobileNav = document.querySelector(".mobile__nav__wrapper");

menu.addEventListener("click", () => {
  mobileNav.style.display = "block";
});

close.addEventListener("click", () => {
  mobileNav.style.display = "none";
});

const accordionHeader = document.querySelectorAll(".accordion__header");

if (accordionHeader.length > 0) {
  const firstElement = accordionHeader[0].nextElementSibling;
  const firstIconElement = accordionHeader[0].children[1].children;
  firstElement.style.display = "block";
  firstIconElement[1].style.display = "flex";
  firstIconElement[0].style.display = "none";
}

accordionHeader.forEach((element) => {
  element.addEventListener("click", () => {
    const nextElement = element.nextElementSibling;
    const iconElement = element.children[1].children;
    if (nextElement.style.display === "block") {
      nextElement.style.display = "none";
      iconElement[0].style.display = "flex";
      iconElement[1].style.display = "none";
    } else {
      nextElement.style.display = "block";
      iconElement[1].style.display = "flex";
      iconElement[0].style.display = "none";
    }
  });
});

// Pricing Model

const paymentDuration = document.querySelectorAll(".payment"),
  prices = document.querySelectorAll(".pr");

const clearPayment = () => {
  paymentDuration.forEach((duration) => {
    duration.classList.remove("fill");
  });
};

paymentDuration.forEach((duration) => {
  duration.addEventListener("click", () => {
    clearPayment();
    duration.classList.add("fill");
  });
});

// File Upload
const fileUpload = document.querySelector(".file__upload");
const fileSpan = document.querySelector(".file span");
const file = document.querySelector(".file");
let fileName;

file.addEventListener("click", () => {
  fileUpload.click();
});

fileUpload.addEventListener("change", () => {
  if (fileUpload.files.length > 0) {
    fileName = fileUpload.files[0].name;
    fileSpan.textContent = fileName;
  }
});



// COntact Form 


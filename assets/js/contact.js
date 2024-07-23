// const formContent = document.querySelectorAll(".form__content");
// const formNext = document.querySelector(".next");
// const formPrevious = document.querySelector(".previous");
// const formHeader = document.querySelectorAll(".header__item");

// formContent[0].style.display = "flex";

// const clearFormContent = () => {
//   formContent.forEach((element) => {
//     element.style.display = "none";
//   });
// };

// let formIndex = 1;
// formNext.addEventListener("click", () => {
//   clearFormContent();
//   if (formIndex < 3) {
//     if (formIndex == 2) {
//       formContent[formIndex].style.display = "flex";
//       formHeader[formIndex].classList.add("active");

//       formNext.textContent = "Submit";
//       formNext.classList.remove("next");
//     } else {
//       formContent[formIndex].style.display = "flex";
//       formHeader[formIndex].classList.add("active");
//       formIndex++;
//     }
//   }
// });

// formPrevious.addEventListener("click", () => {
//   clearFormContent();
//   formIndex -= 1;
//   if (formIndex == -1) {
//     formIndex = 0;
//   } else if (formIndex == 1) {
//     formHeader[formIndex + 1].classList.remove("active");
//   }
//   formContent[formIndex].style.display = "flex";
//   formHeader[formIndex].classList.remove("active");
// });

// Select elements
const formContents = document.querySelectorAll(".form__content");
const nextButton = document.querySelector(".next");
const previousButton = document.querySelector(".previous");
const formHeaders = document.querySelectorAll(".header__item");

// Show the first form content initially
formContents[0].style.display = "flex";

// Function to hide all form contents
const hideAllFormContents = () => {
  formContents.forEach((element) => {
    element.style.display = "none";
  });
};

// Initialize form index
let currentFormIndex = 0;

// Function to show a specific form content
const showFormContent = (index) => {
  formContents[index].style.display = "flex";
  formHeaders[index].classList.add("active");
};

// Function to handle the "Next" button click
const handleNextClick = () => {
  hideAllFormContents();
  if (currentFormIndex < formContents.length - 1) {
    currentFormIndex++;
    showFormContent(currentFormIndex);
    if (currentFormIndex === formContents.length - 1) {
      nextButton.textContent = "Submit";
      nextButton.classList.remove("next");
    }
  }
};

// Function to handle the "Previous" button click
const handlePreviousClick = () => {
  hideAllFormContents();
  if (currentFormIndex > 0) {
    formHeaders[currentFormIndex].classList.remove("active");
    currentFormIndex--;
    showFormContent(currentFormIndex);
    nextButton.textContent = "Next";
    nextButton.classList.add("next");
  }
};

// Event listeners
nextButton.addEventListener("click", handleNextClick);
previousButton.addEventListener("click", handlePreviousClick);

// Initial display setup
showFormContent(currentFormIndex);



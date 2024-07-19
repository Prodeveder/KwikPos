const fileUpload = document.querySelector(".file__upload"),
  fileZone = document.querySelector(".drop__zone");

fileZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  fileZone.classList.add("drag");
});

fileZone.addEventListener("click", (e) => {
  fileUpload.click();
});

fileUpload.addEventListener("change", (e) => {
  if (fileUpload.files.length) {
    changeSpan(fileUpload.files[0]);
  }
});

["dragleave", "dragend"].forEach((type) => {
  fileZone.addEventListener(type, (e) => {
    e.preventDefault();

    fileZone.classList.remove("drag");
  });
});

fileZone.addEventListener("drop", (e) => {
  e.preventDefault();

  if (e.dataTransfer.files.length) {
    fileUpload.files = e.dataTransfer.files;
    changeSpan(e.dataTransfer.files[0]);
  }
  fileZone.classList.remove("drag");
});

const changeSpan = (file) => {
  document.querySelector(
    ".drop__name"
  ).textContent = `Image Uploaded ${file.name}`;
};

let toggleBtn = document.querySelector(".toggle");
let infoPage = document.querySelector(".nav-overlay");
let overlayDetails = document.querySelector(".overlay-details");

toggleBtn.addEventListener("click", () => {
    infoPage.classList.toggle("show-links");
})
let exitBtn = document.querySelector(".exitBtn");
exitBtn.addEventListener("click", () => {
    infoPage.classList.toggle("show-links");
});
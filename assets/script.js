

console.log("this is avery's website. things i need to fix: mouse position, ticker tape responsive, margin bottom text consistency, unicode eyes appear if no activity, more images when clicking or hovering over preview img, are.na cms for images, custom website email, different custom domain, two column info/about box, current timestamp, inverse button with black bkgrnd like arc browser")

//about text container
let about = document.querySelector(".about");
let aboutContainer = document.querySelector(".aboutContainer");
about.addEventListener("click", function (e) {
  e.preventDefault();
  aboutContainer.style.display = "block";
  if (aboutContainer) {
    aboutContainer.addEventListener("click", function () {
      this.style.display = "none";
    });
  }
});

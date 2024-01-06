/* 
let images = document.querySelectorAll(".image-conatiner img");

for (let image of images) {
  let viewImage = document.querySelector(".view-image");
  let fullImage = document.querySelector(".view-image img");
  let closeBtn = document.querySelector(".view-image span");
  image.addEventListener("click", function (e) {
    viewImage.style.display = "flex";
    fullImage.src = e.target.src;
  });
  closeBtn.addEventListener("click", function () {
    viewImage.style.display = "none";
  });
}
 */

let imageContainer = document.querySelector(".image-conatiner");
let fullImageConatiner = document.querySelector(".view-image");
let closeBtn = document.querySelector(".view-image span");

imageContainer.addEventListener("click", function (event) {
  if (event.target.localName === "img") {
    fullImageConatiner.style.display = "flex";
    let fullImage = fullImageConatiner.querySelector("img");
    fullImage.src = event.target.src;
  }
});

closeBtn.addEventListener("click", function (event) {
  fullImageConatiner.style.display = "none";
});

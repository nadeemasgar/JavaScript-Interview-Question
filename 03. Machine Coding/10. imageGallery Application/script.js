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

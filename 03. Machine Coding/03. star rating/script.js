const container = document.getElementById("star-container");
const star = document.querySelectorAll(".star");
let filled = 0;

container.addEventListener("click", function (e) {
  let currClick = e.target;
  const index = currClick.dataset.index;

  // for resetting the previous selected
  for (let i = 0; i < filled; i++) {
    star[i].classList.remove("starColor");
  }

  for (let i = 0; i < index; i++) {
    star[i].classList.add("starColor");
  }

  filled = index;

  if (filled) {
    document.getElementById("starCount").innerText = `Rating Count: ${filled}`;
  }
});

container.addEventListener("mouseover", function (e) {
  let currClick = e.target;
  const index = currClick.dataset.index;

  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("starColor");
  }

  for (let i = 0; i < index; i++) {
    star[i].classList.add("starColor");
  }
});

container.addEventListener("mouseleave", function (e) {
  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("starColor");
  }

  for (let i = 0; i < filled; i++) {
    star[i].classList.add("starColor");
  }
});

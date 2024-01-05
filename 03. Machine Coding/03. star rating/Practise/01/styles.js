let filled = 0;
const root = document.getElementById("stars");

root.addEventListener("click", function (e) {
  const star = e.target;
  const index = star.dataset.index;
  const ratingElement = document.getElementById("ratings");

  const allStars = document.querySelectorAll(".star");
  Array.from(allStars).forEach((ele, idx) => {
    if (idx < filled) {
      ele.classList.remove("active");
    }
  });

  Array.from(allStars).forEach((ele, idx) => {
    if (idx < index) {
      ele.classList.add("active");
    }
  });

  filled = index;
  if (filled) {
    ratingElement.textContent = `Star Rating ${index}`;
  }
});

root.addEventListener("mouseover", function (e) {
  const star = e.target;
  const index = star.dataset.index;
  const ratingElement = document.getElementById("ratings");

  const allStars = document.querySelectorAll(".star");
  Array.from(allStars).forEach((ele, idx) => {
    ele.classList.remove("active");
  });

  Array.from(allStars).forEach((ele, idx) => {
    if (idx < index) {
      ele.classList.add("active");
    }
  });
});

root.addEventListener("mouseleave", function (e) {
  const allStars = document.querySelectorAll(".star");
  Array.from(allStars).forEach((ele, idx) => {
    ele.classList.remove("active");
  });

  Array.from(allStars).forEach((ele, idx) => {
    if (idx < filled) {
      ele.classList.add("active");
    }
  });
});

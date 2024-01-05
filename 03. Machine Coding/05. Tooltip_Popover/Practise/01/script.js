const container = document.getElementById("container");
const heading = container.querySelector(".heading");

heading.addEventListener("mouseover", function () {
  const content = container.querySelector(".content");
  content.classList.toggle("display");
});

heading.addEventListener("mouseleave", function () {
  const content = container.querySelector(".content");
  content.classList.toggle("display");
});

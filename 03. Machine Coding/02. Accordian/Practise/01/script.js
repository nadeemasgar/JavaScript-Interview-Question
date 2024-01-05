const container = document.getElementById("container");
const allTextElement = document.getElementsByClassName("text");

container.addEventListener("click", function (e) {
  const targetElement = e.target;
  const textContent = targetElement.parentNode.querySelector(".text");
  console.log(textContent);
  // To close the previous accordian
  Array.from(allTextElement).forEach((ele) => {
    ele.classList.remove("display");
  });
  textContent.classList.toggle("display");
});

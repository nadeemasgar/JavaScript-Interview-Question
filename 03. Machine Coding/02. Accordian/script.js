const section = document.getElementsByClassName("heading");
console.log(section, typeof section);

Array.from(section).forEach((ele) => {
  ele.addEventListener("click", (evt) => {
    const contentEle = evt.target.nextElementSibling;
    contentEle.classList.toggle("content");
  });
});

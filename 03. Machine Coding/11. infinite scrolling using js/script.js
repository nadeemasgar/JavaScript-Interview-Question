let images = document.querySelectorAll(".image-container img");
let viewImage = document.querySelector(".view-image");
let fullImage = document.querySelector(".view-image img");
let closeBtn = document.querySelector(".view-image span");
let imageContainer = document.querySelector(".image-container");

let counter = 0;

for (let image of images) {
}
closeBtn.addEventListener("click", function () {
  viewImage.style.display = "none";
});

async function getImage(n) {
  console.log("counter " + counter + " " + n);
  counter++;
  for (let i = 0; i < n; i++) {
    let res = await fetch("https://source.unsplash.com/random");
    let url = res.url;
    let img = document.createElement("img");
    img.src = url;
    imageContainer.appendChild(img);
    img.addEventListener("click", function (e) {
      viewImage.style.display = "flex";
      fullImage.src = e.target.src;
    });
  }
}

/* window.addEventListener("scroll", function (e) {
  console.log("scroll");
  let { clientHeight, scrollTop, scrollHeight } = e.target.documentElement;
  if (clientHeight + scrollTop + 1 >= scrollHeight) {
    getImage(3);
  }
}); */

window.addEventListener("scroll", function (e) {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    getImage(4);
  }
});

getImage(12);

console.log("<<< ", document.getElementById("app").classList);
const root = document.getElementById("app");
const findElementById = (root, id) => {
  if (root.childNodes.length === 0) return;
  let result;
  const childNodes = root.childNodes;
  console.log("<< length", childNodes.length);
  for (let i = 0; i < childNodes.length; i++) {
    const ele = childNodes[i];
    if (ele.childNodes.length > 1) {
      const reccAns = findElementById(ele, id);
      result = reccAns;
    }
    if (ele.classList && ele.id === id) {
      result = ele;
      return;
    }
  }
  return result;
};
console.log(findClassList(root, "abc"));

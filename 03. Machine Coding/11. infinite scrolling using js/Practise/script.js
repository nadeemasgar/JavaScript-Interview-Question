const root = document.getElementById("container");
const loadingElemet = document.querySelector(".loading");
let idx = 0;

const createNewElement = (count) => {
  loadingElemet.classList.add("display");
  for (let i = 0; i < count; i++) {
    const element = document.createElement("div");
    element.innerText = idx;
    root.appendChild(element);
    idx++;
  }
};

createNewElement(55);

window.addEventListener("scroll", function (e) {
  const endOfPage =
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight;

  if (endOfPage) {
    loadingElemet.classList.remove("display");
    setTimeout(() => {
      createNewElement(10);
    }, 500);
  }
});

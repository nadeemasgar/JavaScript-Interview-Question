const grandParent = document.getElementById("grandparent");
grandParent.addEventListener(
  "click",
  (e) => {
    console.log("grandparent");
  },
  false // bubbling
);

const parent = document.getElementById("parent");
parent.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("parent");
  },
  true // capturing
);

const child = document.getElementById("child");
child.addEventListener(
  "click",
  (e) => {
    console.log("child");
  },
  true // capturing
);

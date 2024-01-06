const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener(
  "click",
  function () {
    console.log("grandParent clicked");
  },
  true
);

parent.addEventListener(
  "click",
  function () {
    console.log("parent clicked");
  },
  false
);

child.addEventListener(
  "click",
  function () {
    console.log("child clicked");
  },
  true
);

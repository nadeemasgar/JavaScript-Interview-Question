const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click", function (e) {
  console.log("grandParent");
});

parent.addEventListener("click", function (e) {
  e.stopImmediatePropagation();
  console.log("parent1");
});

parent.addEventListener("click", function (e) {
  console.log("parent2");
});

child.addEventListener("click", function (e) {
  console.log("child");
});

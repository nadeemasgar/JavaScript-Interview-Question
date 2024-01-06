const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// grandParent.addEventListener("click", function () {
//   console.log("grandParent clicked");
// });

// parent.addEventListener("click", function () {
//   console.log("parent clicked");
// });

// child.addEventListener("click", function () {
//   console.log("child clicked");
// });

grandParent.addEventListener("click", function (event) {
  if (event.target.id === "grandParent") {
    console.log("grandParent clicked");
  } else if (event.target.id === "parent") {
    console.log("parent clicked");
  } else if (event.target.id === "child") {
    console.log("child clicked");
  }
});

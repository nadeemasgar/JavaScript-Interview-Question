// buttons and counter text
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

// initialise the count
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("reset")) {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else if (count === 0) {
      counter.style.color = "grey";
    }

    counter.textContent = count;
  });
});

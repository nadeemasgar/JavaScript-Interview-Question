// create abort controller
const controller = new AbortController();
const signal = controller.signal;

// get the buttons
const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

// download event
downloadBtn.addEventListener("click", makeCall);

// abort event
abortBtn.addEventListener("click", () => {
  controller.abort();
  console.log("Download aborted");
});

// helper method to make api call
function makeCall() {
  fetch("https://jsonplaceholder.typicode.com/photos", { signal })
    .then((response) => {
      console.log("complete", response);
    })
    .catch((err) => {
      console.error(`error: ${err.message}`);
    });
}

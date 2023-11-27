// https://www.greatfrontend.com/questions/javascript/sleep

// Solution -  asynchronous version of the sleep

/* >>> This sleep function is wrong <<<
function sleep(duration) {
  setTimeout(() => {
    return new Promise(function (resolve, reject) {
      resolve();
    });
  }, duration);
}
 */

function sleep(duration) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, duration);
  //   });
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function greeting() {
  console.log("Hello!");
  await sleep(3000);
  console.log("Bye");
}

greeting().then(() => {
  console.log("all completed");
});

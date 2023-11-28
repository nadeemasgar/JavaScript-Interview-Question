// Handling of promise using normal older way

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 2000);
});

function getData() {
  // JS engine will not wait for promise to be resolved
  p.then((res) => console.log(res));
  console.log("Namase Javascript");
}

getData();

console.log("Completed");

/* 
Output-> 
    Namase Javascript
    Completed
    Promise resolved value
 */

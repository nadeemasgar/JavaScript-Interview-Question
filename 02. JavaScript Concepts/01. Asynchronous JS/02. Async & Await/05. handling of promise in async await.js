// Handling of promise using async await

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 2000);
});

async function getData() {
  // JS engine was waiting for promise to resolved - It is assumed to be waiting here
  // but actually the getData() function is not in the call stack. It will move out of the function and continue further execution of the code
  const val = await p;
  console.log("Namase Javascript");
  console.log(val);
}

getData();

console.log("Completed");

/* 
Output-> 
    Completed
    Namase Javascript
    Promise resolved value
*/

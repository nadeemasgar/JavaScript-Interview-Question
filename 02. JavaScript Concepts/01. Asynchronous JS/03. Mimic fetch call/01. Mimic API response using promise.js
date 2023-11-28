// Mimic of API call
// This p can be assumend similar to fetch
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("API call successful");
  }, 2000);
});

// we apply similar to fetch.then()
p.then((res) => {
  console.log(res);
});

console.log("Normal code execution completed");

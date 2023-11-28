// creation of promise goes synchronously
const p = new Promise((resolve, reject) => {
  console.log("Inside promise");
  setTimeout(() => {
    console.log("Inside setTimeout callback");
    resolve("Promise resolved");
  }, 2000);
});

async function handlePromise() {
  console.log("function execution started");
  const val = await p;
  console.log("result of promise - ", val);
}

handlePromise().then((res) => {
  console.log("handle promise function execution done");
});

console.log("loop execution begin");

for (let i = 0; i < 10000000000; i++) {}

console.log("Completed!!");

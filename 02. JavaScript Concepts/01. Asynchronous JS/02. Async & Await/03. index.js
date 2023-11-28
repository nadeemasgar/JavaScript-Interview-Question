// Async & Await combo is used to handle promise.

// Ques -> How we handle promise before async/await?

const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value");
});

function getData() {
  p.then((res) => console.log(res));
}

getData();


// Ques -> How we handle promise using async await

async function handlePromise() {
    const val = await p;
    console.log(val);
}

handlePromise();

// await can only be used inside an async function
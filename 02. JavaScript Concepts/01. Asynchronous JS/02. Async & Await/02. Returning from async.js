// Returning a value from async function

// when you return a value, then value will be wrapped inside a promise
async function getData() {
  return "Namaste";
}

const data = getData();
data.then((res) => console.log(res));

// Returning a promise from async function

const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value");
});

async function getData2() {
  return p;
}

const val = getData2();

val.then((res) => console.log(res));

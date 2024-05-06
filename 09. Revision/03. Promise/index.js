const firstPromise = new Promise((resolve, reject) => {
  resolve("First");
  console.log(2);
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(firstPromise);
  console.log(1);
});

secondPromise
  .then((res) => {
    console.log(res);
    return res;
  })
  .then((res) => console.log(res));

console.log(3);

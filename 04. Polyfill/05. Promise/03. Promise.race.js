function race(promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
}

const test1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const test2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

const test3 = new Promise((resolve, reject) => {
  setTimeout(reject, 40, "three");
});

race([test1, test2, test3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

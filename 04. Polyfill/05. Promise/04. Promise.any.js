function any(promiseArr) {
  const result = [];
  let rejectedPromise = 0;
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, idx) => {
      promise.then(resolve).catch((err) => {
        result[idx] = err;
        rejectedPromise++;

        if (rejectedPromise === promiseArr.length) {
          reject(new AggregateError(result, "All promises were rejected"));
        }
      });
    });
  });
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "p1");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "p1");
});

any([p1, p2])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

function allSettled(promiseArr) {
  let counter = 0;
  const res = [];

  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, idx) => {
      promise
        .then((val) => {
          res[idx] = { status: "fulfilled", value: val };
        })
        .catch((err) => {
          res[idx] = { status: "rejected", value: err };
        })
        .finally(() => {
          counter++;
          if (counter === promiseArr.length) {
            resolve(res);
          }
        });
    });
  });
}

const a = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

const b = new Promise((resolve, reject) => reject(2));

const c = new Promise((resolve) => resolve(3));

allSettled([a, b, c]).then((val) => {
  console.log(val);
});

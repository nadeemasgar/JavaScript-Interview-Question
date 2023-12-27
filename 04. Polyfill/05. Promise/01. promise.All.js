// Polyfill of promise.all

const dummyAPI = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(time);
    }, time);
  });
};

const tasksArray = [dummyAPI(1000), dummyAPI(3000), dummyAPI(5000)];

const promisePolyfill = (tasksArray) => {
  return new Promise((resolve, reject) => {
    const output = [];
    let resolvedPromCounter = 0;

    tasksArray.forEach((promise, index) => {
      promise
        .then((data) => {
          console.log(index);
          output[index] = data;
          resolvedPromCounter += 1;

          if (resolvedPromCounter === tasksArray.length) {
            resolve(output);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

promisePolyfill(tasksArray)
  .then((data) => {
    console.log(`the output if ${data}`);
  })
  .catch((err) => {
    console.log(`the error is ${err}`);
  });

const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function customPromise(executor) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let catchers = [];

  function resolve(result) {
    if (state !== PENDING) return;

    state = FULFILLED;
    value = result;

    handlers.forEach((h) => h(value));
  }

  function reject(err) {
    if (state !== PENDING) return;

    state = REJECTED;
    value = err;

    catchers.forEach((c) => c(value));
  }

  this.then = function (successCallback) {
    if (state === FULFILLED) {
      successCallback(value);
    } else {
      handlers.push(successCallback);
    }
  };

  this.catch = function (failureCallback) {
    if (state === REJECTED) {
      failureCallback(value);
    } else {
      catchers.push(failureCallback);
    }
  };

  executor(resolve, reject);
}

const doWork = (res, rej) => {
  if (2 == 3) {
    setTimeout(() => res("Promise Resolved "), 2000);
  } else {
    setTimeout(() => rej("Promise Rejected"), 2000);
  }
};

let greetMsg = new customPromise(doWork);
greetMsg.then((val) => {
  console.log("then log - ", val);
});

greetMsg.catch((val) => {
  console.log("catch log - ", val);
});

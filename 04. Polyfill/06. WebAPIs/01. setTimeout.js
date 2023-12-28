function createSetTimeout() {
  let timerId = 1;
  let timerMap = {};

  function setTimeoutPoly(callback, delay, ...args) {
    let id = timerId++;
    timerMap[id] = true;
    let start = Date.now();

    function triggerCallback() {
      if (!timerMap[id]) return;

      if (Date.now() > start + delay) {
        callback.apply(this, args);
      } else {
        requestIdleCallback(triggerCallback);
      }
    }

    requestIdleCallback(triggerCallback);
    return id;
  }

  function clearTimeoutPoly(id) {
    delete timerMap[id];
  }

  return { setTimeoutPoly, clearTimeoutPoly };
}

const { setTimeoutPoly, clearTimeoutPoly } = createSetTimeout();

console.log("start");

const myId = setTimeoutPoly(
  function (args) {
    console.log("Welcome to preparation");
    console.log(args);
  },
  1000,
  "Nadeem"
);

clearTimeoutPoly(myId);

console.log("End");

export default createSetTimeout;

import createSetTimeout from "./01. setTimeout.js";

function createInterval() {
  let intervalId = 1;
  let intervalMap = {};

  var { setTimeoutPoly, clearTimeoutPoly } = createSetTimeout();

  function setIntervalPoly(callback, delay) {
    let id = intervalId++;
    function reiterate() {
      intervalMap[id] = setTimeoutPoly(function () {
        callback();
        if (intervalMap[id]) {
          reiterate();
        }
      }, delay);
    }

    reiterate();
    return id;
  }

  function clearIntervalPoly(id) {
    delete intervalMap[id];
  }

  return { setIntervalPoly, clearIntervalPoly };
}

var { setIntervalPoly, clearIntervalPoly } = createInterval();

let counter = 0;
let myId = setIntervalPoly(function () {
  console.log("Nadeem");
  counter++;
  if (counter >= 5) clearIntervalPoly(myId);
}, 1000);

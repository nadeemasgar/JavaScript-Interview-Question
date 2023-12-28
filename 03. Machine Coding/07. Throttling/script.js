let count = 0;
const task = () => {
  count++;
  console.log("pointermove ", count);
};

// 1st Way
/* 
const throttle = function (func, delay) {
  let flag = true;

  return function () {
    let context = this;
    args = arguments;

    if (flag) {
      func.apply(context, args);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
 */

// 2nd Way
const throttle = function (func, delay) {
  let lastCall = 0;
  return function (...args) {
    let context = this;
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    func.apply(context, args);
  };
};

const optimisedFunction = throttle(task, 300);

window.addEventListener("pointermove", optimisedFunction);

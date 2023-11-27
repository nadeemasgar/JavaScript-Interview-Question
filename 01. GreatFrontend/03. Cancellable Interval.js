// https://www.greatfrontend.com/questions/javascript/cancellable-interval?list=async-operations

function setCancellableInterval(callback, delay) {
  const id = setInterval(callback, delay);
  return () => {
    clearInterval(id);
  };
}

let i = 0;
// t = 0:
const cancel = setCancellableInterval(() => {
  i++;
  console.log(i);
}, 10);
// t = 10: i is 1
// t = 20: i is 2
// cancel(); // Called at t = 25
// t = 30: i is still 2 because cancel() was called and the interval callback has stopped running.
cancel();

// Solution 2: Maintain a cancelled flag (non-optimal)

export default function setCancellableInterval(callback, delay, ...args) {
  let cancelled = false;
  setInterval(() => {
    if (cancelled) {
      return;
    }

    callback(...args);
  }, delay);

  return () => {
    cancelled = true;
  };
}

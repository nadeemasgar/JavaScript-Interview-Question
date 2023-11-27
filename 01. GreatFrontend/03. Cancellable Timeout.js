// https://www.greatfrontend.com/questions/javascript/cancellable-timeout

// Solution 1: Return a function that calls clearTimeout

function setCancellableTimeout(callback, delay) {
  const timerId = setTimeout(callback, delay);

  return () => {
    clearTimeout(timerId);
  };
}

let i = 0;
// t = 0:
const cancel = setCancellableTimeout(() => {
  i++;
}, 100);
// t = 50:
cancel();
// t = 100: i is still 0 because cancel() was called.

// Solution 2: Maintain a cancelled flag (non-optimal)

export default function setCancellableTimeout(callback, delay, ...args) {
  let cancelled = false;
  setTimeout(() => {
    if (cancelled) {
      return;
    }

    callback(...args);
  }, delay);

  return () => {
    cancelled = true;
  };
}

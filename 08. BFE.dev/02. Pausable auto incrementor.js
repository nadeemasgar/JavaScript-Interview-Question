// Create Pausable auto incrementer

const incrementor = (initial = 0, steps = 1) => {
  let count = initial;
  let intervalId = null;

  const startTimer = () => {
    if (intervalId === null) {
      intervalId = setInterval(() => {
        console.log(count);
        count += steps;
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  return {
    startTimer,
    stopTimer,
  };
};

let timerObj = incrementor(0, 10);
timerObj.startTimer();

setTimeout(() => {
  timerObj.stopTimer();
}, 5000);

setTimeout(() => {
  timerObj.startTimer();
}, 6000);

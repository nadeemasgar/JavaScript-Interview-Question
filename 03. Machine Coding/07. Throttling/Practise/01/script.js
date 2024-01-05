function onKeyUp() {
  const element = document.getElementsByTagName("input");
  console.log(element[0].value);
}

const throttle = (cb, duration) => {
  let lastCall = 0;

  return function (...args) {
    let context = this;
    currentTime = new Date().getTime();
    if (currentTime - lastCall < duration) return;
    lastCall = currentTime;
    cb.apply(context, args);
  };
};

const betterFunction = throttle(onKeyUp, 500);

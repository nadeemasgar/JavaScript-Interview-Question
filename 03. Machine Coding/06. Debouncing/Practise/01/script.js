let counter = 0;
const onKeyUp = () => {
  counter++;
  console.log("counter ", counter);
};

const debounce = (cb, delay) => {
  let timer;
  return function (...args) {
    let context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounce(onKeyUp, 300);

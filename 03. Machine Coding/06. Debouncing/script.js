// Debouncing in javascript
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data...", counter++);
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    args = arguments;

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

const betterFunction = debounce(getData, 300);

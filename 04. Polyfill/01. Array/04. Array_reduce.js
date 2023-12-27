const arr = [1, 2, 3, 4];

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const ans = arr.reduce((acc, curr, i, arr) => {
  return acc * curr;
}, 1);

console.log(ans);

/* const ans = arr.reduce((acc, cur) => {
  return acc * cur;
}, 2);

console.log(ans); */

const arr = [1, 2, 3, 4];

Array.prototype.myFilter = function (cb) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) res.push(this[i]);
  }

  return res;
};

const newArr = arr.myFilter((ele, i, arr) => {
  return ele % 2;
});

console.log(newArr);

/* const newArr = arr.filter((ele) => {
  //   console.log(ele % 2);
  return ele % 2;
});

console.log(newArr); // [ 1, 3 ]
 */

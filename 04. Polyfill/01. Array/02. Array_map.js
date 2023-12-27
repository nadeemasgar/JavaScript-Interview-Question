const arr = [1, 2, 3, 4];

Array.prototype.myMap = function (cb) {
  const res = [];
  for (const i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }

  return res;
};

const newArr = arr.map((ele) => {
  return ele * 2;
});

console.log(newArr);

/* 
const newArr = arr.map((ele, i, arr) => {
  return ele * 2;
});

 */

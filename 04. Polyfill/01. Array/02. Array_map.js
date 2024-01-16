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

/* ---> isArray condition applied to check array type

const arr = [1, 2, 3, 4];

Array.prototype.myMap = function (cb) {
  if (!Array.isArray(this)) {
    return new Error(this.name + " is not an Array");
  }

  const res = [];
  for (let i = 0; i < this.length; i++) {
    res[i] = cb(this[i], i, this);
  }

  return res;
};

const ans = arr.myMap((ele, idx) => {
  return ele * idx;
});

console.log(ans);
*/

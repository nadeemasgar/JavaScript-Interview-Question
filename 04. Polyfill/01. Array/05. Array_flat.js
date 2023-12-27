const arr = [1, 2, 3, [1, 2, [10, 11]]];

Array.prototype.myFlat = function (depth = 1) {
  if (!Array.isArray(this)) {
    throw new Error(`${this}.flat is not a  Array`);
  }

  const res = [];

  for (let i = 0; i < this.length; i++) {
    let ele = this[i];
    if (Array.isArray(ele) && depth > 0) {
      res.push(...ele.myFlat(depth - 1));
    } else {
      res.push(ele);
    }
  }

  return res;
};

console.log(arr.myFlat(2));
/* 
console.log(arr.flat(2));
 */

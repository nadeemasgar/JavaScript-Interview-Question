Array.prototype.myForEach = function (cb) {
  const length = this.length;
  for (let index = 0; index < length; index++) {
    const ele = this[index];
    cb(ele, index, this);
  }
};

const arr = [1, 2, 3, 4];

arr.myForEach((ele, i, arr) => {
  console.log(ele);
});

/* 
arr.forEach((ele, i, index) => {
  console.log(ele, i, index);
});
 */

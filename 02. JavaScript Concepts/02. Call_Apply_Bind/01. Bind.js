function list(...args) {
  return args;
}

const newList = list.bind(null, 1);
console.log(newList()); // [ 1 ]
console.log(newList(2, 3)); // [ 1, 2, 3 ]

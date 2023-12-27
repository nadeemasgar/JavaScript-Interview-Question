// DeepCopy Polyfill

/********* Shallow And Deep Copy in Array *********/
let arr1 = [1, 2, [3, 4]];
let brr1 = arr1; // Shallow Copy
brr1.push(8);
console.log(arr1);
console.log(brr1);

const arr2 = [5, 6, [7, 8]];
let brr2 = [...arr2]; // Deep Copy
/* 
The spread operator makes deep copies of data if the data is not nested.
When you have nested data in an array or object the spread operator will create a deep copy of the top most data and a shallow copy of the nested data. 
*/
arr2.push(8);
console.log(arr2);
console.log(brr2);

// Shallow copy using spread in nested object
let arr3 = [9, 10, [11, 12]];
let brr3 = [...arr3];
brr3[2].push(13);
console.log(arr3);
console.log(brr3);

// To stop the shallow copy in nested object, we can use like below->
let arr4 = [15, 16, [17, 18]];
let brr4 = JSON.parse(JSON.stringify(arr4));
brr4[2].push(19);
console.log(arr4);
console.log(brr4);
// You can also use lodash deep cody function here

//////////////////////////////////////////////////////////////////
/********* Shallow And Deep Copy in Object *********/
const obj1 = {
  a1: {
    b1: {
      c1: "Nadeem",
    },
  },
};

let obj2 = obj1;
obj2.a1.b1 = null;

console.log(obj1);
console.log(obj2);

/********* Polyfill  *********/

let arr5 = [1, 2, [3, 4]];

function deepCopy(val) {
  if (["string", "number", "boolean"].includes(typeof val)) {
    return val;
  } else if (Array.isArray(val)) {
    return val.map((el) => deepCopy(el));
  } else {
    return Object.keys(val).reduce((acc, key) => {
      acc[key] = deepCopy(val[key]);
      return acc;
    }, {});
  }
}

let brr5 = deepCopy(arr5);
brr5[2].push(6);
console.log(arr5);
console.log(brr5);

const obj3 = {
  a1: {
    b1: {
      c1: "Asgar",
    },
  },
};

let obj4 = deepCopy(obj3);
obj4.a1.b1 = null;

console.log(obj3);
console.log(obj4);

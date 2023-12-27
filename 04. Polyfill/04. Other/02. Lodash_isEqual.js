/* 
    How to compare 2 objects or Polyfill for lodash.isEqual()

    One way to use JSON.stringify() -> It converts objects into equivalent JSON strings. 
    The JSON.stringify() function converted both objects into JSON strings, and since both a and b have the same properties and values, the result is true.
    But JSON.stringify() isn't always the best solution for comparing objects by value since it has limitations.
    First of all, when using JSON.stringify(), the order of the keys matters.
    There is also an additional limitation: JSON doesn't represent all types.

    Lodash _.isEqual() Method in JavaScript
    https://www.freecodecamp.org/news/javascript-comparison-operators-how-to-compare-objects-for-equality-in-js/
*/

const isObject = (object) => {
  return object != null && typeof object === "object";
};

function compareObjects(obj1, obj2) {
  const keyArr1 = Object.keys(obj1);
  const keyArr2 = Object.keys(obj2);

  if (keyArr1.length !== keyArr2.length) return false;

  for (let key of keyArr1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if (!isObjects && value1 !== value2) return false;

    if (isObjects && !compareObjects(value1, value2)) return false;
  }

  return true;
}

const obj1 = { a: 1, b: 2, c: { d: 10 } };
const obj2 = { a: 1, b: 2, c: { d: 10 } };

console.log(compareObjects(obj1, obj2));

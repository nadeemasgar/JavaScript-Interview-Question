console.log("This is the tutorial 58");

// Set stores unique value
const mySet = new Set(); // Initialize an empty set
console.log("The set looks like :", mySet);

// Adding values to this set
mySet.add("this");
mySet.add("My name");
mySet.add("this");
mySet.add(34);
mySet.add(true);
mySet.add(false);

console.log("This set looks like now: ", mySet); // This set looks like now:  Set(5) { 'this', 'My name', 34, true, false }

// Use a construtor to initialise the set
let mySet2 = new Set([1, 45, "this", false, { a: 4, b: 8 }, "this"]);
console.log("New set", mySet2);

console.log(mySet.size); // Get the size of the set

console.log(mySet.has(34)); // Check whether set has 346 or not

mySet.delete(34); // Remove an elements from the set

console.log(mySet.has(34));

// Iterating a set
/* for (let item of mySet) {
  console.log("Item is :", item);
} */

mySet.forEach((item) => {
  console.log("Item is : ", item);
});

// Converting set from Array
const arr = Array.from(mySet);
console.log(arr);
console.log(Array.isArray(arr));

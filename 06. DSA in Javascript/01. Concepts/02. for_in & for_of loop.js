let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

/******* For in Loop ****** */

/* 
// Traditional for loop
for (let index = 0; index < people.length; index++) {
  const element = people[index];
  console.log(element);
}
*/

// Iterating in Object
const obj = {
  name: "Harry",
  language: "Javascript",
  hobbies: "Android app development",
};

// console.log(obj);
// 1.1 Iterating an object using Traditional for loop
/* for (let index = 0; index < Object.keys(obj).length; index++) {
  const element = obj[Object.keys(obj)[index]];
  console.log(element);
}
 */

// 1.2 Iterating an object using for in loop
for (let key in obj) {
  console.log(obj[key]);
}

// 2. Iterating a String
myString = "This is my string";

// 1.1 Iterating an object using Traditional for loop
for (let i = 0; i < myString.length; i++) {
  //   console.log(myString[i]);
  console.log(myString.charAt(i));
}

// 2.1 We can use for..in with strings to loop through all the characters
for (let char in myString) {
  console.log(myString[char]);
}

/***** For..of loop ******/
// It is applied on Iterable objects 
people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikrant"];

for (let name of people) {
  console.log(name);
}

for (let char of myString) {
  console.log(char);
}

// 1. Aggregation

// Sum all the elements of the array or multiple all the elements of the array

const arr = [1, 2, 3, 4];

const sum = arr.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0);

console.log(sum);

const product = arr.reduce((previousValue, currentValue) => {
  return previousValue * currentValue;
}, 1);

console.log(product);

// 2. Segregation
// We can group certain values depending on our requirements

const arr2 = [1.2, 1.4, 1.6, 2.2, 2.3, 2.8, 3.2, 3.7, 3.9];

const segregate = arr2.reduce((previousValue, currentValue) => {
  const key = Math.floor(currentValue);

  if (!previousValue[key]) {
    previousValue[key] = [];
  }

  previousValue[key].push(currentValue);
  return previousValue;
}, {});

console.log(segregate);
/*
    {
    '1': [ 1.2, 1.4, 1.6 ],
    '2': [ 2.2, 2.3, 2.8 ],
    '3': [ 3.2, 3.7, 3.9 ]
    }
*/

// 3. Run the task in a sequence
// We have an array of function and a value and the value has to be passed through the function in pipe
const upperCase = (str) => str.toUpperCase();
const reverse = (str) => str.split("").reverse().join("");
const append = (str) => "Hello " + str;

const fnArr = [upperCase, reverse, append]; // array of function

const initialValue = "Nadeem";

const finalValue = fnArr.reduce((previousValue, currentValue) => {
  const newValue = currentValue(previousValue);
  return newValue;
}, initialValue);

console.log(finalValue);

// 4. If we want to run the promise in a sequence
const asyncTask = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${time}`), 100 * time);
  });
};

// create an array of task
const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

const asynSeriesExecutor = function (promises) {
  const ans = promises.reduce((prev, curr) => {
    // return when previous promise is resolved
    return prev.then(() => {
      // run the current promise
      return curr.then((val) => {
        console.log(val);
      });
    });
  }, Promise.resolve());
};

asynSeriesExecutor(promises);

// Execute async task in sequence
function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 5) {
        reject(`Error ${value}`);
      } else {
        resolve(value * 1000);
      }
    }, value * 1000);
  });
}

let tasks = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

// Using reduce
/* 
const asyncSequence = (tasks, callback) => {
  const results = [];
  const errors = [];
  let completed = 0;

  tasks.reduce((prev, curr) => {
    return prev.finally(() => {
      return curr
        .then((val) => {
          results.push(val);
        })
        .catch((error) => {
          errors.push(error);
        })
        .finally(() => {
          completed++;

          if (completed === tasks.length) {
            callback(errors, results);
          }
        });
    });
  }, Promise.resolve());
};
 */

/* 
    Using for of loop, When using async/await with a for loop, 
    each iteration awaits the resolution of the previous asynchronous operation before moving on to the next iteration. 
    This will keep the loop operations in the desired order and will not give us any surprises.
*/

const asyncSequence = async (tasks, callback) => {
  const results = [];
  const errors = [];

  for (let task of tasks) {
    try {
      let res = await task; // await keyword is used so that only one particular task is executed then its move to next task
      results.push(res);
    } catch (e) {
      errors.push(e);
    }
  }

  callback(errors, results);
};

asyncSequence(tasks, (error, result) => {
  console.log("error", error);
  console.log("result", result);
});

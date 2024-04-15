// Execute Async Task in Parallel
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

const tasks = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

const asyncParallel = (tasks, callback) => {
  const results = [];
  const errors = [];

  let completed = 0;

  tasks.forEach((task) => {
    task
      .then((val) => {
        results.push(val);
      })
      .catch((err) => {
        errors.push(err);
      })
      .finally(() => {
        completed++;

        if (completed >= tasks.length) {
          callback(errors, results);
        }
      });
  });
};

asyncParallel(tasks, (error, result) => {
  console.error(error);
  console.log(result);
});

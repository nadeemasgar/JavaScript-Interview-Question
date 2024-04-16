//delay func
const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

const retryWithDelay = (
  operation,
  retries = 3,
  delay = 50,
  finalErr = "Retry failed"
) => {
  return new Promise((resolve, reject) => {
    let retryCount = 0;
    const callFetcher = () => {
      operation()
        .then(resolve)
        .catch((reason) => {
          wait(delay).then(() => {
            if (retryCount < retries) {
              callFetcher();
              retryCount += 1;
            } else {
              reject(finalErr);
            }
          });
        });
    };
    callFetcher();
  });
};

// Test function
const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error("Not yet");
    }
  };
};
// Test the code
const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log("success");
  await retryWithDelay(getTestFunc(), 3);
  console.log("will fail before getting here");
};
// Print the result
test().catch(console.error);

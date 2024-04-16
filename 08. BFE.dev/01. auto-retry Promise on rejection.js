// https://bigfrontend.dev/problem/retry-promise-on-rejection

/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return new Promise((resolve, reject) => {
    let retryCount = 0;
    const callFetcher = () =>
      fetcher()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          if (retryCount < maximumRetryCount) {
            callFetcher();
            retryCount += 1;
          } else {
            reject(error);
          }
        });

    callFetcher();
  });
}

// https://www.greatfrontend.com/questions/javascript/promise-reject?list=async-operations

export default function promiseReject(reason) {
  return new Promise((_, reject) => reject(reason));
}

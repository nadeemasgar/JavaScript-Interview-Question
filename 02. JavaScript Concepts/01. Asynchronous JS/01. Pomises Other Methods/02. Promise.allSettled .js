const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 resolve");
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p2 resolve");
    }, 5000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p3 resolve");
        reject("p3 reject");
    }, 1000);
})

Promise.allSettled([p1, p2, p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
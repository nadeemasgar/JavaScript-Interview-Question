const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 resolved");
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 resolve");
        // reject("p2 reject");
    }, 3000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p3 resolve");
        reject("p3 reject");
    }, 1000);
})

Promise.race([p1, p2, p3])
.then((res) =>  {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
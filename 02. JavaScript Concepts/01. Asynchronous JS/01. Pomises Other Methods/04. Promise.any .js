const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p1 resolved");
        reject("p1 reject");
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p2 resolved");
        reject("p2 reject");
    }, 5000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p3 resolved");
        reject("p3 reject");
    }, 2000);
})

Promise.any([p1, p2, p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.errors);
})
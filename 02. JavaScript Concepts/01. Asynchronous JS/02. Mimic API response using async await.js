// Mimic of API call
// This p can be assumend similar to fetch
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("API call successful");
  }, 2000);
});

// async function getData()
const getData = async () => {
  // async using in case of arrow function
  console.log("Inside getData function");
  const data = await p;
  console.log(data);
  // data.then((res) => console.log("API data is - ", res)); --> why this is giving TypeError: data.then is not a function

  // await p.then((res) => console.log("API data is - ", res));
};

getData();

console.log("Normal code execution completed");

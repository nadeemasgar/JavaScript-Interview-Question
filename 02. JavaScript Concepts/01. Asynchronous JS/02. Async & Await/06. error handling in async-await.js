const API_URL = "https://invalidurl";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();

// Traditional way of handling error

async function handlePromise2() {
  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  console.log(jsonValue);
}

// because async function also return a promise, so we can also handle error in this way
handlePromise2().catch((err) => {
  console.log(err);
});

/* 
            FETCH WORKING
    fetch gives you the promise. You can handle promise in async-await using await keyword.
     ----> const data = await fetch(API_URL);
     fetch return a response object. And this response object is a readable stream.
     And when you want to covert this stream into JSON, you do Response.JSON()
    -----> Response.JSON()
    Response.JSON() is promise. When it will resolve, it will give the JSON value
 
*/

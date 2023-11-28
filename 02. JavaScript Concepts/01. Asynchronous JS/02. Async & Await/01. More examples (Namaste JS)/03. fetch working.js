const API_URL = "https://api.github.com/users/nadeemasgar";

async function handlePromise() {
  const data = await fetch(API_URL);
  const jsonValue = await data.json();
  console.log(jsonValue);

  /* 
  fetch(API_URL)
    .then((res) => res.json())
    .then((res) => console.log(res));
 */
}

handlePromise();

/* 
            FETCH WORKING
    fetch gives you the promise. You can handle promise in async-await using await keyword.
     ----> const data = await fetch(API_URL);
     fetch return a response object. And this response object is a readable stream.
     And when you want to covert this stream into JSON, you do Response.JSON()
    -----> Response.JSON()
    Response.JSON() is promise. When it will resolve, it will give the JSON value
 
*/

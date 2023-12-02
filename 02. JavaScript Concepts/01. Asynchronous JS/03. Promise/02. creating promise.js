const cart = ["shoes", "pants", "kurta"];

// Consuming part
const promise = createOrder(cart); // orderId

promise
  .then(function (orderId) {
    console.log(orderId);
    //   proceedToPayment(orderId);
  })
  .catch(function (err) { // gracefully handling the error
    console.log(err.message);
  });

// Producer part
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createOrder
    // validateCart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return false; // for testing purpose
}

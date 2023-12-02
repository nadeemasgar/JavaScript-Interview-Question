const cart = ["shoes", "pants", "kurta"];

// Consuming part
const promise = createOrder(cart); // orderId

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(
    function (paymentInfo) {
      console.log(paymentInfo);
    },
    function (paymentInfo) {
      console.log(paymentInfo.message);
    }
  )
  .catch(function (err) {
    console.log(err.message);
  });

/* Question-> why this catch block needed when we have written rejection handler */

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
      }, 1000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    const err = new Error("Payment rejected");
    reject(err);
  });
}

function validateCart(cart) {
  return true; // for testing purpose
}

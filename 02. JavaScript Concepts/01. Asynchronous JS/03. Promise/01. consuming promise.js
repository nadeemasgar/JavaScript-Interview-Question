const API_URL = "https://api.github.com/users/nadeemasgar";

const user = fetch(API_URL);

user.then((res) => {
  console.log(res);
});

// Example of callback hell and its fixing using promises

const cart = ["shoes", "pants", "kurta"];

// callback hell
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

// handling using promise
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId); // We always use return statement to return a promise when we are chaining it
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });

// These promises can be written using arrow function
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo));

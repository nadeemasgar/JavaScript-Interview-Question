var obj = { name: "Nadeem" };

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " It's not callable");
  }

  context.fn = this;
  context.fn(...args);
};

function sayHello(age) {
  console.log("Hello " + this.name + " is " + age);
}

sayHello.myCall(obj, 23);

/* 
sayHello.call(obj, 23);
 */


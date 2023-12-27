const obj = { name: "Piyush" };

function sayHello(age, profession) {
  console.log("Hello " + this.name + " is " + age + " and is a " + profession);
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it's not callable");
  }

  context.fn = this;

  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const bindFunc = sayHello.myBind(obj, 23);

bindFunc("Software Engineer");

/* 
const bindFunc = sayHello.bind(obj, 23);

bindFunc("Software Engineer");
 */

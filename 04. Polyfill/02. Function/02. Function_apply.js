const obj = { name: "Nadeem" };

function sayHello(age, profession) {
  console.log("Hello " + this.name + " is " + age + " and is an " + profession);
}

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError(" CreateListFromArrayLike called on non-object");
  }

  context.fn = this;
  context.fn(...args);
};

sayHello.myApply(obj, ["23", "Software Enginner"]);

/* 
sayHello.apply(obj, ["23", "Software Enginner"]);
 */
// TypeError:

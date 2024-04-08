/* function example() {
    let blog = "Network18";
    function display() {
        console.log(blog);
    }

    display();
}

example(); */

function x(a) {
  function y(b) {
    function z(c) {
      return a + b + c;
    }
    return z;
  }

  return y;
}

const a = x(10);
const b = a(20);
const c = b(30);

console.log(c);

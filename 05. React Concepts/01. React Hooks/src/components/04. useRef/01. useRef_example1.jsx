import React, { useState, useEffect, useRef } from "react";

function UseRef_example1() {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  useEffect(() => {
    ref.current += 1;
  });

  return (
    <div>
      <h4>{count}</h4>
      <h4>Number of times page rendered: {ref.current}</h4>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default UseRef_example1;

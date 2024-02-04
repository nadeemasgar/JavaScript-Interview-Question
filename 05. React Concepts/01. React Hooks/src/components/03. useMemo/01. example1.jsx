import React, { useMemo, useState } from "react";

function Example1() {
  const [count, setCount] = useState(0);
  const expensiveValue = useMemo(() => {
    for (let i = 0; i < 10000; i++) {
      console.log(i);
    }
    return "Nadeem";
  }, []);
  return (
    <>
      <div>{count}</div>
      <div>{expensiveValue}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </>
  );
}

export default Example1;

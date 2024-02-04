import React, { useState, useCallback } from "react";
import Child from "./02. Child";

function Parent() {
  const [counter, setCounter] = useState(0);

  const incrementHandler = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const decrementHandler = useCallback(() => {
    setCounter((prev) => prev - 1);
  }, []);

  return (
    <>
      <div>{counter}</div>
      <Child
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
      />
    </>
  );
}

export default Parent;

import { memo } from "react";
const Child = memo(function Cild({ incrementHandler, decrementHandler }) {
  console.log("Child");
  return (
    <>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </>
  );
});

export default Child;

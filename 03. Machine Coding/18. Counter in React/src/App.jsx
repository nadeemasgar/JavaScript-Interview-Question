import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };

  const onReset = () => {
    setCount(0);
  };

  return (
    <>
      <div>Counter : {count}</div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={onReset} disabled={count === 0}>
        Reset
      </button>
    </>
  );
}

export default App;

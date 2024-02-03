import { useState } from "react";

export default function Counter() {
  const [age, setAge] = useState(42);

  function increment() {
    setAge((prevAge) => prevAge + 1); // This will increment 3 times
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </>
  );
}

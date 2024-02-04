import React, { useRef } from "react";
import Child from "./02. Child";

function RefParent() {
  const inputRef = useRef(null);

  const handleInput = () => {
    inputRef.current.value = "1000";
  };

  return (
    <div>
      <Child ref={inputRef} />
      <button onClick={handleInput}>Input Handler</button>
    </div>
  );
}

export default RefParent;

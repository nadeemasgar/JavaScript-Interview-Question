import React, { useState, useRef, useEffect } from "react";

function DontUseItAsState() {
  const [name, setName] = useState();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current = name;
  }, [name]);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        {name} is the state -- {inputRef.current} is the ref
      </p>
    </>
  );
}

export default DontUseItAsState;

// ref can be preferable used to store previous state

import { useState, useEffect, useRef } from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";

function App() {
  const [value, setValue] = useState(0);

  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);

    return () => clearInterval(timer.current);
  }, [value]);

  return (
    <>
      <ProgressBar value={value} />
    </>
  );
}

export default App;

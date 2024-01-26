import { useState, useEffect, useRef } from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  const timer = useRef();

  const onComplete = () => {
    setSuccess(true);
    clearInterval(timer.current);
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);

    return () => clearInterval(timer.current);
  }, []);

  return (
    <>
      <ProgressBar value={value} onComplete={onComplete} />
      {success ? (
        <div className="success">Success...</div>
      ) : (
        <div className="success">Loading...</div>
      )}
    </>
  );
}

export default App;

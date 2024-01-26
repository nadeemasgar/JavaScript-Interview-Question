import React, { useEffect, useState } from "react";
import "./App.css";

function ProgressBar({ value, onComplete }) {
  const [percent, setPercent] = useState(value);
  console.log(value);
  useEffect(() => {
    const val = Math.max(0, Math.min(100, value)); // using value - working.
    // const val = Math.max(0, Math.min(100, percent)); // using percent - not working Why?
    setPercent(val);

    if (percent >= 100) {
      onComplete();
    }
  }, [value]);

  return (
    <>
      <div className="container">
        <div className="progress">{percent} %</div>
        <div className="status" style={{ width: `${percent}%` }} />
      </div>
    </>
  );
}

export default ProgressBar;

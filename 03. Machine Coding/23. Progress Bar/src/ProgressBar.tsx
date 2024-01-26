import React, { useEffect, useState } from "react";
import "./App.css";

function ProgressBar({ value }) {
  const [animation, setAnimation] = useState(value);
  console.log(animation);

  //   useEffect(() => {
  //     const val = Math.max(0, Math.min(100, animation));
  //     console.log(val);
  //     setAnimation(val);
  //   }, [value]);

  return (
    <>
      <div className="container">
        <div className="progress">{animation} %</div>
        <div className="status" style={{ width: `${value}%` }} />
      </div>
    </>
  );
}

export default ProgressBar;

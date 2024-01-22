import React, { useState, useRef, useEffect } from "react";
import "./App.css";

const format = (time) => {
  const SECOND = 1;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;

  // format our time
  let hrs = Math.floor(time / HOUR);
  let mins = Math.floor((time % HOUR) / MINUTE);
  let secs = Math.floor((time % MINUTE) / SECOND);

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  return `${hrs}:${mins}:${secs}`;
};

function Timer() {
  const [time, setTime] = useState(3597);
  const [running, setRunning] = useState(true);

  const timer = useRef();

  useEffect(() => {
    if (running) {
      timer.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer.current);
  }, [running]);

  const onRestart = () => {
    setTime(0);
  };

  const onStopResume = () => {
    if (running) {
      clearInterval(timer.current);
    }
    setRunning(!running);
  };

  return (
    <div className="stopwatch">
      <p className="timer">{format(time)}</p>
      <div className="actions">
        <button onClick={onRestart}>Restart</button>
        <button onClick={onStopResume}>{running ? "Stop" : "Resume"}</button>
      </div>
    </div>
  );
}

export default Timer;

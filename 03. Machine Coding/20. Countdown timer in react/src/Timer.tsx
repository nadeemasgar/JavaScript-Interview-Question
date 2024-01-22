import React, { useState, useEffect, useRef } from "react";

function format(timer) {
  const SECOND = 1;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;

  let hrs = Math.floor(timer / HOUR);
  let mins = Math.floor((timer % HOUR) / MINUTE);
  let secs = Math.floor((timer % MINUTE) / SECOND);

  if (hrs < 10) hrs = "0" + hrs;
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) secs = "0" + secs;

  return `${hrs} : ${mins} : ${secs}`;
}

function Timer() {
  const [timer, setTimer] = useState(3600);
  const [running, setRunning] = useState(true);

  let timerId = useRef(null);

  useEffect(() => {
    if (running) {
      timerId.current = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (!running) {
      clearTimeout(timerId.current);
    }
  }, [timer, running]);

  const onRestart = () => {
    setTimer(3600);
    clearTimeout(timerId.current);
  };

  const onStopResume = () => {
    setRunning(!running);
  };

  return (
    <div className="container">
      <div className="timer">{format(timer)}</div>
      <div className="controls">
        <button onClick={onStopResume}>{running ? "Stop" : "Resume"}</button>
        <button onClick={onRestart}>Restart</button>
      </div>
    </div>
  );
}

export default Timer;

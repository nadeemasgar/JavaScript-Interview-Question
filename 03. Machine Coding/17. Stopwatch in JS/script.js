const time_el = document.querySelector(".time");
const start_btn = document.querySelector("#start");
const stop_btn = document.querySelector("#stop");
const reset_btn = document.querySelector("#reset");

let seconds = 0;
let interval = null;

const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

function timer() {
  seconds++;

  // format our time
  let hrs = Math.floor(seconds / HOUR);
  let mins = Math.floor((seconds % HOUR) / MINUTE);
  let secs = Math.floor((seconds % MINUTE) / SECOND);

  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start() {
  if (interval) return;

  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  time_el.innerText = "00:00:00";
}

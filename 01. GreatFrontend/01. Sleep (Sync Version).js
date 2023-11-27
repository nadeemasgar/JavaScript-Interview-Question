// Blocking version of sleep()

function sleep(duration) {
  const time = new Date().getTime();
  while (new Date().getTime() <= time + duration) {}
}

async function greeting() {
  console.log("Hello!");
  await sleep(2000);
  console.log("Bye."); // Only logs after 2000 milliseconds (2 seconds)
}

greeting();

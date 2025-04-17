// script.js
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  let diffInHrs = Math.floor(time / 3600000);
  let diffInMin = Math.floor((time % 3600000) / 60000);
  let diffInSec = Math.floor((time % 60000) / 1000);
  let diffInMs = time % 1000;

  return (
    String(diffInHrs).padStart(2, '0') + ':' +
    String(diffInMin).padStart(2, '0') + ':' +
    String(diffInSec).padStart(2, '0') + '.' +
    String(diffInMs).padStart(3, '0')
  );
}

function print(txt) {
  document.getElementById('display').innerHTML = txt;
}

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
}

function pauseStopwatch() {
  clearInterval(timerInterval);
}

function resetStopwatch() {
  clearInterval(timerInterval);
  print("00:00:00.000");
  elapsedTime = 0;
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  if (elapsedTime === 0) return;
  const lapTime = timeToString(elapsedTime);
  const li = document.createElement("li");
  li.innerText = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(li);
}

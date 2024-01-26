//GLOBAL DECLARATIONS

let playButton = document.getElementById("play-time-js");
let displayTime = document.getElementById("display-time-js");
let stopTime = document.getElementById("stop-time-js");
let restartTime = document.getElementById("restart-time-js");
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

//FUNCTIONS

const stopWatch = () => {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + ":" + m + ":" + s;
};
const watchStart = () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
};

const watchStop = () => {
  clearInterval(timer);
};

const watchReset = () => {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
};

function dynamicImageFunction() {
  document.querySelector(".dynamic-img").src = "assets/pause-solid.svg";
}
function defaultImage() {
  document.querySelector(".dynamic-img").src = "assets/play-button.png";
}

//EVENT LISTENERS (ONCLICK)

restartTime.addEventListener("click", watchReset);
restartTime.addEventListener("click", defaultImage);
stopTime.addEventListener("click", watchStop);
playButton.addEventListener("click", watchStart);
playButton.addEventListener("click", dynamicImageFunction);

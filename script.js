let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

function updateClock() {
    let dateNow = new Date();
    let hr = dateNow.getHours();
    let min = dateNow.getMinutes();
    let sec = dateNow.getSeconds();

    hour.textContent = hr < 10 ? "0" + hr : hr;
    minute.textContent = min < 10 ? "0" + min : min;
    second.textContent = sec < 10 ? "0" + sec : sec;
}

updateClock();
const clock = setInterval(updateClock, 1000)
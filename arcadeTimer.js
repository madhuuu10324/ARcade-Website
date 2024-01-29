let deadline = new Date("Feb 2, 2024 08:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let t = deadline - now;
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementsByClassName("di-arcade-countdown")[0].innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (t < 0) {
    clearInterval(x);
    document.getElementById("countd").innerHTML = "EXPIRED";
  }
}, 1000);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";

let i = 10;
const speed = 100;
setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(i, 10, 10, 10);
    i = i + 1;
}, speed);

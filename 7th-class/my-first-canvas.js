console.log('Here');

let myCanvas = document.getElementById("my-canvas");
let canvasContext = myCanvas.getContext("2d");
canvasContext.fillStyle = "green";


let startPoint = 10;
setInterval(function() {
    canvasContext.clearRect(0, 0, myCanvas.width, myCanvas.height);
    canvasContext.fillRect(startPoint, 10, 100, 100);
		startPoint = startPoint + 10;
    if(startPoint >= myCanvas.width) {
        startPoint = 0;
    }

}, 1000 / 60);

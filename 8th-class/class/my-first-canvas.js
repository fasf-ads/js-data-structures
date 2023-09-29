console.log('Here');

let myCanvas = document.getElementById("my-canvas");
let canvasContext = myCanvas.getContext("2d");
canvasContext.fillStyle = "green";

let car = new Image();
car.src = './car-1.png';

let direction = 1;
let startPoint = 10;
setInterval(function() {
    canvasContext.clearRect(0, 0, myCanvas.width, myCanvas.height);
    //canvasContext.fillRect(startPoint, 10, 100, 100);
    canvasContext.drawImage(car, startPoint, 10, 100, 100);
    startPoint = startPoint + (10 * direction);
    if (startPoint >= myCanvas.width) {
        startPoint = 0;
    }

    if(startPoint < 0) {
        startPoint = myCanvas.width;
    }

}, 1000 / 60);


document.addEventListener('keydown', function(event) {
    if (event.key == 'ArrowLeft') {
        direction = -1;
    }

    if (event.key == 'ArrowRight') {
        direction = 1;
    }
    console.log(event.key);
});








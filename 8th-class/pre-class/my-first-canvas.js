let direction = 10;
let myCanvas = document.getElementById("my-canvas");
let canvasContext = myCanvas.getContext("2d");
canvasContext.fillStyle = "green";

const image = new Image();
image.src = './vehicle-icon-png-car-sedan-4.png';


let startPoint = 10;
setInterval(function() {
    canvasContext.clearRect(0, 0, myCanvas.width, myCanvas.height);
    //canvasContext.fillRect(startPoint, 10, 100, 100);
    canvasContext.drawImage(image, startPoint, 10)
    startPoint = startPoint + direction;
    if (startPoint >= myCanvas.width) {
        startPoint = 0;
    }

    if(startPoint < 0) {
        startPoint = myCanvas.width;
    }

}, 1000 / 60);


document.addEventListener('keydown', function(event) {
    console.log(event.key);
    switch (event.key) {
        case 'ArrowLeft': {
            direction = -10;
        break;
        }
        case 'ArrowRight': {
            direction = 10;
        break;
        }
    }
});

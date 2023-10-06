let gameState = {
    fps :  1000 / 60,
    pause: false,
};

let direction = 10;
let myCanvas = document.getElementById("my-canvas");
let canvasContext = myCanvas.getContext("2d");
canvasContext.fillStyle = "green";

let image = new Image(50, 50);
image.src = './vehicle-icon-png-car-sedan-4.png';
let carOne = {
    x: 200, // (Math.random() * 500)// Novo
    startPoint: 50,
    direction: 1,
};
let carLast = {
    x: 100,
    startPoint: 10,
    direction: 1,
}

let newCar = {
    x: 300,
    startPoint: 200,
    direction: -1,
};
let cars = [carLast, carOne, newCar];
gameState.cars = cars;



let startPoint = 10;
setInterval(function() {// game loop
    if (gameState.pause) {
        console.log('The game is poused');
        return;
    }
    canvasContext.clearRect(0, 0, myCanvas.width, myCanvas.height);
    //canvasContext.fillRect(startPoint, 10, 100, 100);
    //drawn the car here
    //canvasContext.drawImage(image, startPoint, 10, 100, 100)
    for (let i = 0; i < cars.length; i++) {
        canvasContext.drawImage(image, cars[i].startPoint, cars[i].x, 100, 100)
        cars[i].startPoint =  cars[i].startPoint + cars[i].direction;

        if (cars[i].startPoint >= myCanvas.width) {
            cars[i].startPoint = 0;
        }

        if (cars[i].startPoint < 0) {
            cars[i].startPoint = myCanvas.width;
        }
    }

    startPoint = startPoint + direction;
    if (startPoint >= myCanvas.width) {
        startPoint = 0;
    }

    if (startPoint < 0) {
        startPoint = myCanvas.width;
    }

}, gameState.fps);


document.addEventListener('keydown', function(event) {
    console.log(event.key);
    if(event.key == 'n') {
        let carDirectionDelta = (Math.random()*1);
        let carDirection = 1;
        if (carDirectionDelta < 0.5) {
            carDirection = -1;
        }
        let arrivingCar = {
            x: (Math.random() * 600),
            startPoint: (Math.random() * 600),
            direction: carDirection,
        };
        cars[cars.length] = arrivingCar;
    }
});

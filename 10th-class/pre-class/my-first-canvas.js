let car_size = 100;
let gameState = {
    fps :  1000 / 120,
    pause: false,
    speed: 2,
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
//setInterval roda a cada intervalo de x tempo
//
//setInterval(
// 10 
// 10   20 30 40 50 60 70 80 90 100 110 120 130 140 150
//   15   25
function gameLoop() {// game loop
    setTimeout(gameLoop, gameState.fps);// Agenda a proxima exec
    if (gameState.pause) {
        console.log('The game is poused');
        return;
    }
    canvasContext.clearRect(0, 0, myCanvas.width, myCanvas.height);
    //canvasContext.fillRect(startPoint, 10, 100, 100);
    //drawn the car here
    //canvasContext.drawImage(image, startPoint, 10, 100, 100)
    for (let i = 0; i < cars.length; i++) {
        canvasContext.drawImage(image, cars[i].startPoint, cars[i].x, car_size, car_size)
        cars[i].startPoint =  cars[i].startPoint + (cars[i].direction * gameState.speed);

        if (cars[i].startPoint >= myCanvas.width) {
            cars[i].startPoint = (car_size * -1);
        }

        // Calcula quando carro bate na parede esquerda ... nao pode ser 0 ou o carro dessaperace
        if (cars[i].startPoint < (car_size * -1)) {
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

}
//, gameState.fps);
setTimeout(gameLoop, gameState.fps);


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


    if(event.key == 'ArrowLeft' ) {
        gameState.fps = gameState.fps * 2;
    }

    if(event.key == 'ArrowRight' ) {
        gameState.fps = gameState.fps / 2;
    }
});

let car_size = 100;
let db = new NunDb('wss://ws-staging.nundb.org/', 'class-game', 'class-game-token');

let playerName = localStorage.getItem('playerName');
if(!playerName) {
    playerName = prompt("What is your name?");
    localStorage.setItem('playerName', playerName);
}
document.getElementById("myCar").value = playerName;


async function startGame() {
    let dbCars = (await db.get('cars')).value;
    console.log(dbCars);
    for(let carName in dbCars) {
        let car = dbCars[carName];
        carsMap[car.name] = car;
        cars.push(car);
    }
    if(!carsMap[carOne.name]) {
        carsMap[carOne.name] = carOne;
        cars.push(carOne);
    }
    setTimeout(gameLoop, gameState.fps);
    dbCars[playerName] = carOne;
    db.set('cars', dbCars);

    db.watch('lastAction', function(e){
        console.log(e);
        applyAction(e.value.player, e.value.key);
    });
    db.watch("cars", function(e){
        let commingCars = e.value;
        console.log(commingCars);
        let players = Object.keys(commingCars);
        for(let i=0; i<players.length; i++) {
            console.log(players[i]);
            let playerExists = carsMap[players[i]];
            if(!playerExists) {
                carsMap[players[i]] = commingCars[players[i]];
                cars.push(carsMap[players[i]]);
            }
        }
    });
}

startGame();
let gameState = {
    fps :  1000 / 120,
    pause: false,
    speed: 2,
    playerName: playerName,
};

let direction = 10;
let myCanvas = document.getElementById("my-canvas");
let canvasContext = myCanvas.getContext("2d");
canvasContext.fillStyle = "green";

let image = new Image(50, 50);
image.src = './vehicle-icon-png-car-sedan-4.png';
let carOne = {
    name: playerName,
    x: 200,
    startPoint: 50,
    direction: 1,
};
let carLast = {
    name: 'carLast',
    x: 100,
    startPoint: 10,
    direction: 1,
}

let newCar = {
    name: 'newCar', 
    x: 300,
    startPoint: 200,
    direction: -1,
};
// https://github.com/fasf-ads/js-data-structures
let cars = [];
let carsMap = {};

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
        canvasContext.fillText(cars[i].name, cars[i].startPoint, cars[i].x + 20);
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


document.addEventListener('keydown', function(event) {
    let myCarName = document.getElementById("myCar").value;
    applyAction(myCarName, event.key, true);
});

function applyAction(carName, key, replicate) {
    let car = carsMap[carName];
    if (!car) {
        console.warn("Car not found");
    }

    if(key == 'ArrowLeft' ) {
        //gameState.fps = gameState.fps * 2;
        car.direction = -1;
        if(replicate) {
            db.set("lastAction",{ key: key, player: carName });
        }
    }
    if(key == 'ArrowRight' ) {
        //gameState.fps = gameState.fps / 2;
        car.direction = 1;
        if(replicate) {
            db.set("lastAction",{ key: key, player: carName });
        }
    }
}


function cleanStorage() {
    localStorage.removeItem('playerName');
    window.location.reload();
}

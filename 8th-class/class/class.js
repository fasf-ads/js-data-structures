console.log('Class was called');

class People {
    constructor(name, age) {
        this.peopleName = name;
        this.peopleAge = age;
    }

    showName() {
        console.log(this.peopleName);
    }
}


let mateus = new People("Mateus", 34);
let nilza = new People("Nilza", 59);
console.log(mateus);
console.log("O nome da minha mae e");
nilza.showName();


class Queue {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items[this.items.length] = item;
    }
    remove() {
        let item = this.items[0];
        for(let i=0;i< this.items.length -1; i++){
            this.items[i] = this.items[i+1];
        }
        this.items.length = this.items.length -1;
        return item;
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length == 0;
    }
}

let banckQueue = new Queue();
console.log('A fila esta vazia? deve ser true', banckQueue.isEmpty());
console.log('O tamanho da fila e: Deve ser 0 =>', banckQueue.size());

banckQueue.add(nilza);
banckQueue.add(mateus);

console.log(banckQueue);
console.log('A fila esta vazia? deve ser false', banckQueue.isEmpty());
console.log('O tamanho da fila e: Deve ser 2 =>', banckQueue.size());
let firstInTheQueue = banckQueue.remove();
console.log('Deve ser Nilza', firstInTheQueue.peopleName);

let lastInTheQueue = banckQueue.remove();
console.log('Deve ser Mateus', lastInTheQueue.peopleName);
//

class Stack {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items[this.items.length] = item;
    }
    remove() {
        // 0.1 extra points
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length == 0;
    }
}
let banckStak = new Stack();
console.log('A pilha esta vazia? deve ser true', banckStak.isEmpty());
console.log('O tamanho da fila e: Deve ser 0 =>', banckStak.size());

banckStak.add(nilza);
banckStak.add(mateus);

console.log(banckStak);
console.log('A pilha esta vazia? deve ser false', banckStak.isEmpty());
console.log('O tamanho da fila e: Deve ser 2 =>', banckStak.size());
let firstInTheStak = banckStak.remove();
console.log('Deve ser Mateus', firstInTheStak.peopleName);

let lastInTheStack = banckQueue.remove();
console.log('Deve ser Nilza', lastInTheStack.peopleName);


class Queue {
    constructor(){
        this.items = [];
    }

    add(item){
        this.items[this.items.length] = item;
    }
    remove() {
        let item = this.items[0];
        for(let i=0; i< this.items.length; i++) {
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

    // Para cada execute a fn para cada item na lista
    forEach(fn) {
        for(let i=0; i < this.items.length; i++) {
            //do
            console.log("Estou passando", this.items[i]);
            fn(this.items[i]);
        }
    }
}

let bankQueue = new Queue();
bankQueue.add('Nilza'); 
bankQueue.add('Mateus'); 
bankQueue.add('Tiago'); 
bankQueue.add('Lucas'); 

function checkDocument(person) {
    if (person == 'Mateus') {
        console.log('Os documentos estao ok! Mateus');
    } else {
        console.log('Ush, olhe seus docs', person);
    }
}

function sayHello (name) {
    console.log("Hey ", name, " How are you doing???")
}
bankQueue.forEach(checkDocument);
bankQueue.forEach(sayHello);



/// Linked list

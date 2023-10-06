class LinkedQueue {
    constructor() {
        this.head = {
            current: undefined,
            next: undefined,
        };
        this.last = this.head;
    }

    add(item) {
        this.last.next = {
            current: item,
            next: undefined,
        };
        this.last = this.last.next;
    }
    remove() {
        this.head = this.head.next;
        return this.head.current;
    }
    size() {}
    isEmpty() {}
    forEach(fn) {
        let item = this.head;
        while(item.next != undefined) {
            fn(item.current);
            item = item.next;
        }
        fn(item.current);
    }
}
let bankQueue = new LinkedQueue();
bankQueue.add('Nilza');
bankQueue.add('Mateus');
bankQueue.add('Tiago');
console.log(bankQueue.remove(), 'Deveria printar Nilza'); // Print Nilza
//bankQueue.add('Tiago'); 
//bankQueue.add('Lucas'); 

function checkDocument(person) {
    if (person == 'Mateus') {
        console.log('Os documentos estao ok! Mateus');
    } else {
        console.log('Ush, olhe seus docs', person);
    }
}

function sayHello(name) {
    console.log("Hey ", name, " How are you doing???")
}
bankQueue.forEach(checkDocument);
bankQueue.forEach(sayHello);


/// Linked list

class LinkedQueue {
    constructor() {
        this.length = 0;
        this.head = {
            current: undefined,
            next: undefined,
        };
        this.last = this.head;
    }

    add(item) {
        this.length++;
        this.last.next = {
            current: item,
            next: undefined,
        };
        this.last = this.last.next;
    }
    remove() {
        this.length--;
        this.head = this.head.next;
        return this.head.current;
    }
    size() {
        return this.length;
        /*
        let size = 0;
        this.forEach(function() {
            size++;
        });
        return size;
        */
    }

    removeItem(itemToRemove) {
        let queue  = this;
        // Pega o anterior
        let prev = this.head;
        // Acha o item
        // Aponta o proxy to anteior para o proximo do item
        this.forEach(function(name, item) {
            if(name == itemToRemove) {
                //console.log("Vou tentar remove o ", { name, prev, item });
                prev.next = item.next;
                queue.length --;
            } else {
                prev = item;
            }
        });

    }
    isEmpty() {}
    forEach(fn) {
        let item = this.head;
        while (item.next != undefined) {
            fn(item.current, item);
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
//console.clear();
console.log("Size of linked list", bankQueue.size());
bankQueue.add('Jose');
console.log("Size of linked list", bankQueue.size());
bankQueue.removeItem('Mateus');
console.log("Size of linked list should be 2", bankQueue.size());
console.log("Deveria ser tiago:", bankQueue.head.next);
// Linked list

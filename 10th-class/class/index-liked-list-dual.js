console.log("index-liked-list-dual.js")
class LinkedQueueDual {
    constructor() {
        this.head = {
            next: undefined,
            current: undefined,
            prev: undefined,
        };
        this.last = this.head;
    }
    add(item) {
        this.last.next  = {
            current: item,
            prev: this.last,
            next: undefined
        };
        //this.head = this.head.next;
        this.last = this.last.next;
    }
    remove() {
        this.head = this.head.next;
        return this.head.current;
    }
    size() {
    }

    removeItem(itemToRemove) {
        console.log('removeItem > ',itemToRemove);
        itemToRemove.prev.next = itemToRemove.next;
        itemToRemove.next.prev = itemToRemove.prev;
    }
    isEmpty() {}
    forEach(fn) {
    }
}

let ourList = new LinkedQueueDual();
ourList.add("Mateus");
ourList.add("Nilza");
ourList.add("Maria");
console.log(ourList);
//ourList.head.next.next Nilza
ourList.removeItem(ourList.head.next.next);
//console.log("Deveria ser Mateus", ourList.remove());




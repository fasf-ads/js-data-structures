// BinaryTree
class Tree {
    constructor(mainValue) {
        this.mainNode = new Node(mainValue);
    }

    insert(insertingValue, compareNode) {
        let node = compareNode || this.mainNode;
        if (node.value < insertingValue) {
            if (node.rigth == null) {
                node.rigth = new Node(insertingValue);
            } else {
                this.insert(insertingValue, node.rigth);
            }
        } else if (node.value > insertingValue) {
            if (node.left == null) {
                node.left = new Node(insertingValue);
            } else {
                this.insert(insertingValue, node.left);
            }
        } else {
            throw new Error(`${insertingValue} already exists`)
        }
    } //insert
} //class Tree {

class Node {
    constructor(value) {
        this.left = null;
        this.rigth = null;
        this.value = value;
    }
}

let myTree = new Tree(11);
myTree.insert(15);
myTree.insert(7);
myTree.insert(5);
myTree.insert(9);
myTree.insert(3);
myTree.insert(6);
console.log(myTree);


class ParentTree {
    constructor(value, parent) {
        this.parent = parent;
        this.children = [];
        this.value = value;
    }
    insert(child) {
        child.parent = this;
        this.children.push(child);
    }
}

let orgChart = new ParentTree("CEO Gandalf");
let frodo = new ParentTree("VP Marketing Frodo");
let legolas = new ParentTree("Gerente Legolas");
let awriel = new ParentTree("Gerente Awriel");
frodo.insert(legolas);
frodo.insert(awriel);
 
orgChart.insert(frodo);
console.log(orgChart);















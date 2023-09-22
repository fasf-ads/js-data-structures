console.log('Stack started');
let fila = [];

function add(fila, numero) {
    fila[fila.length] = numero;
}

function remove(fila) {
}

add(fila, 10);
add(fila, 20);
add(fila, 1);
console.log({
    fila,
    expected: [10, 20, 1]
});

let removido = remove(fila);
console.log({
    fila,
    expected: [10, 20],
    removido,
    expectedRemovido: 1
});


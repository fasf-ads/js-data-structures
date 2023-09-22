console.log('Queue started');
let fila = [];

function add(fila, numero) {
    fila[fila.length] = numero;
}

function remove(fila) {
    let retorno = fila[0];
    for (let i = 0; i < fila.length - 1; i++) {
        fila[i] = fila[i + 1];
    }
    fila.length = fila.length - 1
    return retorno;
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
    expected: [20, 1],
    removido,
    expectedRemovido: 10
});

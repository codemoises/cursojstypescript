// Tutle
const dadosCliente1: readonly [number, string] = [1, 'Moises'];
const dadosCliente2: [number, string, string] = [1, 'Moises', 'Cruz'];
const dadosCliente3: [number, string, string?] = [1, 'Moises'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Moises', 'Cruz'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Jose';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Luiz', 'Otávio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];

console.log(array1);
console.log(array2);

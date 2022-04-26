"use strict";
//for (usado quando se sabe o que quer) 
let arr = [10, 20, 30, 40];
console.log('for interativo');
for (var val of arr) {
    console.log(`${val}`); // prints values: 10, 20, 30, 40
}
console.log("for indexado");
for (let i = 0; i < arr.length; i++) {
    console.log(`posicao ${i} valor ${arr[i]}`);
}
// While (executa quando não se saba quantas vezes rodar)
var x;
x = 0;
while (x < 10) {
    console.log(`Execução: ${x}`);
    x++;
}
// do while (usando quando se quer rodar pelo menos uma vez sem usar a lógica)
var y = 0;
do {
    console.log(`execução ${y}`);
    y++;
} while (y < 10);

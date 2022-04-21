const valores = [7.7, 8.9, 6.3, 9.2]; // array identificado por [], são dados dinamicos mistura dados, acrescenta e decresse valores
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 8.5;
console.log(valores);
console.log(valores.length); // length quantidade de valores no array 

valores.push({id:3}, false, null, "teste"); // push acresenta valores ao array
console.log(valores);

console.log(valores.pop("teste")); // retira elemento da sua escolha do array
delete valores[0]; // deleta o primeiro valor do array
console.log(valores);

console.log(typeof valores);
// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma função ARROW em uma variavel (=>) substitui o FUNCTION, forma reduzida de construçaõ da função
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3));

//retorno implicito (return)
const subtracao = (a, b) => a - b // (a,b) são os parametros, => arrow ou function e o retorno (return) (a-b)
console.log(subtracao(2,3));

const imprimir2 = a => console.log(a);
imprimir2("Legal !!!");
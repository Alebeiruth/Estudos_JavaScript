// 1.Funçaõ sem Retorno
function imprimirSoma(a, b) {
    console.log(a+b)
};

imprimirSoma(2, 3);
imprimirSoma(2); // 2 + numero indefinido = Nan
imprimirSoma(2, 10, 5, 15, 2, 34); // em outra linguagem acusaria erro 
imprimirSoma(); // Nan

// 2.Funçaõ com retorno (RETURN)
function soma(a, b = 8) {
    return a + b
};

console.log(soma(2, 8)); //soma eles dois
console.log(soma(5)); // SOMA 8 e 5
console.log(soma()); // Nan
function contas(a, b, c, d) {
    console.log( a + b * c / d)
}

contas(2, 3, 5, 5)


function somar(a, b = 2) {
    return a + b
}

console.log(somar(4, 5))
console.log(somar(4))

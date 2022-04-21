function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random () * (max  - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))

// desctrution retira de dentro de objetos e array elementos ou dado com {} antes do sinal de =
// Math.floor() arredonda pra baixo
// Math.ciele() arredonda pra cima
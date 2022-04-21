let a = 3

global.b = 123
this.c = 456
this.e = "teste"

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//module.exports é igual this.
// criando uma variavel maluca: sem VAR ou LET, ela passa a ser uma variavel global de livre acesso
abc = 3 // não faça isso 
console.log(global.abc)

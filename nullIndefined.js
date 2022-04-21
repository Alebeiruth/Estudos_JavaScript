let valor // não inicializada, undefined NÃO se usa para zerar nada
console.log(valor);

valor = null // ausência de valor, use para uma variavel não apontar pra nada
console.log(valor);
// console.log(valor.toString()) // Vai dar Erro sempre q acessa propriedade NULL

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco); // delete produto.preco < usa esse comando para deletar o valor atribuido
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);


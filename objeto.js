const prod1 = {}; //objeto é esse {} é coleçaõ de chaves e valor, identificador e o valor do mesmo, pode haver outros objetos 
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4099.99;
prod1["DescontoLegal"] = 0.40; // evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 99.55,
    tamanho: "M",
    temporada: "Inverno",
};

console.log(prod2);
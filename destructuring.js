// novo recurso do ES2015

const pessoa = {
    nome: "Ana Viera",
    idade: 18,
    endereco: {
        logradouro: "Rua ABCDEF",
        numere: 1001
    }
}

const { nome, idade, numero } = pessoa; // desctrution retira do obejto os elementos ou dado solicitados com {}
console.log(nome, idade);

const { nome: n, idade: i} = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numere, cep } } = pessoa
console.log(logradouro, numere, cep);
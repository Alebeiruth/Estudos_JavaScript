// const ou let (var), nome ou idetificador = seu valor
//par nome/valor
// EXP const < cons ou let depois idetificador ou nome SAUDACAO = "opa" seu valor

const saudacao = "opa" // constexto léxico 1

function exec() {      // constexto léxico 2
    const saudacao = "Fala" 
    return saudacao
}

// Obejtos são grupos aninhados de pares nome/valor  // constexto léxico 3
const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);


const nome = "Rebeca";
const concatenacao = "Olá " + nome  + " !";
const template = `
    Olá
        ${nome} !`;
console.log(concatenacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase(); // por os texto em maiusculo
console.log(`Ei...${up("carai")}!`);
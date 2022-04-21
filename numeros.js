const peso1 = 1.0;
const peso2 = Number("2.1");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

// .isInteger comando p/ false or true
// .toFixed(x) põe o numero de casas decimais que vc deseja
// .toString(x) o numero volta a ser palavras 
// .toString(2) o numero 2 transforma o valor em um valor BINARIO 
//não esquecer ponto e virgula final da sentença

const avaliacao1 = 9.872;
const avaliacao2 = 8.755;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(3)); // poe numero de casa decimasi que vc quiser
console.log(media.toString(2)); // converte em n binario 
console.log(typeof media);
console.log(typeof Number);






let isAtivo = false;
console.log(isAtivo);

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo); //um exclamaçao ! não (verdadeiro false), duas exclamações !! não não (volta a ser verdadeiro, true)


console.log("os verdadeiros...");
console.log(!!3);
console.log(!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("os falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!isAtivo - false);

console.log("pra finalizar");
console.log(!!(''|| null || 0 || ' ' ));
console.log((''|| null || 0 || 'epa' )); // (Ou) esse simbolo > || dá um valor padrão pra determinada variavel...exp abaixo

let nome = ""; // sentença vazia aqui mas abaixo usado || (ou) o valor foi preenchido
console.log(nome || "Desconhecido"); // caso o nome nâo esteja valido use Desconhecido




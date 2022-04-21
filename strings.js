const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(3));
console.log(escola.charAt(5));


console.log(escola.indexOf("3")); 
console.log(escola.substring(1)); // do 1 em diante
console.log(escola.substring(0, 3)); // do zero ao 3 elemento em diante


console.log(escola.replace(3, "e")); // recolocar o E no lugar do 3 = Coder
console.log("Escola ".concat(escola).concat(" !")); //contatenar > unir numeros,let ras, simbolos
console.log("Escola " + escola + " !" + " isso"); // segunda forma de contatenar usando +
console.log(escola.charCodeAt(3)); // codigo relacionado a tabela unicode > tabela binaria = posição 51
console.log("Ana,Maria,Pedro".split(",")); //poe aspas e separa com virgula os string
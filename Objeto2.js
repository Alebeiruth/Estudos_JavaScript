console.log(typeof Object); // aqui é função
console.log(typeof new Object);

const Cliente = function() {}; // aqui é função
console.log(typeof Cliente); // aqui aparece a função
console.log(typeof new Cliente);

class Produto {} // ES 2015 (ES6) // aqui é função
console.log(typeof Produto); // aqui aparece a função
console.log(typeof new Produto());
console.log(Math.ceil(6.1));
console.log(typeof console);

const obj1 = {};
obj1.nome = "Bola"; // ponto ou [ ]  permite criar um atributo dentro do objeto 
//obj1["nome"] = "Bola2"

function Obj(nome) {   //this.nome serve para expor uma função publica 
    this.nome = nome
    this.exec = function() {
        console.log("Exec...")
    }
};

const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);
console.log(Obj.nome);
obj3.exec();

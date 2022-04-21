{
     { 
        { 
            {
                 var sera = "Será ???" 
                 console.log(sera);
            } 
        } 
    } 
}
console.log(sera);

// variavel (var) é visivel dentro e fora de um bloco {}, desde que não seja uma function 
// dois escopos possiveis > nivel global visivel fora ou no escopo de função que visivel dentro da função

function teste() {
var local = 123;
console.log(local);

}

teste ()
console.log(local);
//variavel dentro da função (restrito) só é vista dentro da msm
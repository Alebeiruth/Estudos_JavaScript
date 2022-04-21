let numero = 1; 
{
    let numero = 2;
    console.log("dentro =", numero); 
}
console.log("fora =", numero);

// ele procura no escopo de bloco {} menor o valor de NUMERO, se não ouver ele vai pro geral, fora
// na funçao LET com msm nome cada escopo (escopo dentro do bloco {} e fora), funciona distiguamente um do outro, 
// diferente de VAR que subscreve pelo nova atribuição
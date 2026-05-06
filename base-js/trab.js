const prompt = require('prompt-sync')();

function calcularFatorial(n) {
    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

function calcularRaiz() {
    for (let i = 1; i <= 3; i++){
        let num = 
        Number (prompt('Digite um ${i}º numero: '));
         console.log("A raiz quadrada de ${num} é ${Math.sqrt(num)}")
    }
    
}

function imprimirTabuada() {
    for (let i = 1; i <= 10; i++) {
        
}
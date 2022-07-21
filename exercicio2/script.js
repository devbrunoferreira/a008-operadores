////////////////// EXERCÍCIO NÚMERO 2 - DOIS NÚMEROS ///////////////////////

let numero1, numero2, divisivel1, divisivel2;
numero1 = Number(prompt('Digite o primeiro número:'));
numero2 = Number(prompt('Digite o segundo número:'));

console.log('OPERAÇÕES COM DOIS NÚMEROS');
console.log('');
console.log(`Números escolhidos: ${numero1} e ${numero2}`);
console.log('O primeiro número é maior que o segundo?', numero1 > numero2);
console.log('O primeiro número é igual ao segundo?', numero1 === numero2);
console.log('O primeiro número é divisível pelo segundo?', numero1 % numero2 === 0);
console.log('O segundo número é divisível pelo primeiro?', numero2 % numero1 === 0);


// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

// Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
////////////////// EXERCÍCIO NÚMERO 1 - NÚMERO PAR ///////////////////////
console.log('NÚMERO PAR');
console.log('');

let numero, resto;
numero = Number(prompt('Digite um número par:'));
while (numero % 2 === 1) {
    numero = Number(prompt(`${numero} não é par, escolha outro número:`));
}
console.log('O número escolhido foi:', numero);
resto = numero % 2;
console.log('O resto da divisão é:', resto);

// C) Por se tratar de números pares o valor retornado é sempre 0 (ZERO);

// D) Se o usuário digita um número ímpar o valor retornado será sempre 1 (UM);

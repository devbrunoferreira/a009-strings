///////////////////////// EXERCÍCIO 3 ///////////////////////////

// a)
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log('a)');
console.log(frase);
console.log('');

// b)
const fraseTroca1 = frase.replace('verde', 'rosa');
const fraseTroca2 = fraseTroca1.replace('azul', 'laranja');
console.log('b)');
console.log(fraseTroca2);
console.log('');

// c)
console.log('c)');
console.log(`Inclui verde: ${fraseTroca2.includes('verde')} 
Inclui laranja: ${fraseTroca2.includes('laranja')}`);
console.log('');

// EXTRA
// Tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
console.log('(EXTRA)');
console.log(fraseTroca2.slice(0, 76) + fraseTroca2.slice(76).toUpperCase());
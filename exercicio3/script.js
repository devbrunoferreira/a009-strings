///////////////////////// EXERCÍCIO 3 ///////////////////////////

// a)
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log('a)');
console.log(frase);
console.log('');

// b)
const fraseTroca = frase.replace('verde', 'rosa').replace('azul', 'laranja');
// const fraseTroca2 = fraseTroca1.replace('azul', 'laranja');
console.log('b)');
console.log(fraseTroca);
console.log('');

// c)
console.log('c)');
console.log(`Inclui verde: ${fraseTroca.includes('verde')} 
Inclui laranja: ${fraseTroca.includes('laranja')}`);
console.log('');

// EXTRA
// Tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
console.log('(EXTRA)');
console.log(fraseTroca.slice(0, 76) + fraseTroca.slice(76).toUpperCase());

// let frase1 = frase.replace('verde','rosa').replace('azul','laranja').replace('mas não deixe o gato sair','MAS NÃO DEIXE O GATO SAIR');
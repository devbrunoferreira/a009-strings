///////////////////////// EXERCÍCIO 2 ///////////////////////////

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// const minhaStringNova = minhaString.replaceAll("      ", '');
const minhaStringNova = minhaString.trim();

// a)
console.log(minhaString);
console.log(minhaStringNova);
console.log('');

// b)
console.log(`A quantidade de caracteres antes da remoção: ${minhaString.length} caracteres.
A quantidade de caracteres depois da remoção: ${minhaStringNova.length} caracteres.`);

// c)
const minhaStringFinal = minhaStringNova.replaceAll('________', 'sticioso');
console.log('');
console.log(minhaStringFinal);
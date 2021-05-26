//Exercício com variáveis

let varA = 'A';//B
let varB = 'B';//C
let varC = 'C';//A

const varAntes = varA;
varA = varB;
varB = varC;
varC = varAntes;

console.log(varA, varB, varC);
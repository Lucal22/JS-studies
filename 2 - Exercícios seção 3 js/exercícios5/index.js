//Escreva uma função que recebe 2 números e retorna o maior

function maior(x, y) {
    if (x>y) return x;
    return y;
}
console.log(maior(3,4));

//Forma com menos linhas de código
const maior2 = (x,y) => x>y ? x : y;
console.log(maior2(6,4));
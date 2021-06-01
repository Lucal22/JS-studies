let i = 0;
while (i < 100) {
    i++;
    if (isNaN(i)) console.log(i);
    let y = i % 3;
    let z = i % 5;
    if (y == 0 && z !== 0) console.log('Fizz');
    if (y !== 0 && z == 0) console.log('Buzz');
    if (y == 0 && z == 0)  console.log('FizzBuzz');
    if (y !== 0 && z !== 0)  console.log(i);
}
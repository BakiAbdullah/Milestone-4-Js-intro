function factorial(anyNumber) {
  let result = 1;
  for (let i = anyNumber; i >= 1; i--) {
    result = result * i;
    console.log(i);
  }
  return result;
}

const number = 5;
const fact = factorial(number);
console.log('Factorial of:', number, fact);
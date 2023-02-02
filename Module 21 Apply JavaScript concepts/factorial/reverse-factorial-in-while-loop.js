function factorial(anyNumber) {
  let i = anyNumber;
  let result = 1;
  while(i >= 1) {
    result = result * i
    i--;
  }

  return result;
}

const factorialOutput = factorial(4);
console.log(factorialOutput);
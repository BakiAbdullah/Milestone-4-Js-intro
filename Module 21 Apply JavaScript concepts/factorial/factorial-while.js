function factorial(anyNumber) {
    let i = 1;
    let result = 1;
    while (i <= anyNumber) {
      result = result * i;
      i++;
    }
    return result;
}

var factorialResult = factorial(3);
console.log(factorialResult);
// let factorial = 1;
// for (let i = 5; i >= 1; i--) {
//   factorial = factorial * i;
// }
// console.log(factorial);

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n-1);
}

const result = factorial(5);
console.log(result)

/*
  5 * factorial(5-1)
  5 * factorial(4)
  5 * factorial(4-1)
  5 * factorial(3)


  5 * factorial(4)
  5 * 4 * factorial(3)
  5 * 4 * 3 * factorial(2)
  5 * 4 * 3 * 2 * factorial(1)
  5 * 4 * 3 * 2 * 1
*/
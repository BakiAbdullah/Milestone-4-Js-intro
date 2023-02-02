// 1 * 2 * 3 * 4 * 5 * 6 * 7

//? Factorial 
// 3! = 3*2*1
// 4! = 4*3*2*1
//^ Factorial Formula: n! = n * (n-1)! 

function factorial (number) {
  let result = 1; //? গুন করলে initial value 1 নিবো, আর কোনো কিছু যোগ করলে 0 নিব।

  for (let i = 1; i <= number; i++) {
    result = result * i; 
  }

  return result;
}

const results = factorial(4);
console.log(results);


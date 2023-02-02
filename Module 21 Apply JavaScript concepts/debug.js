//! How to Debug a code properly?? 
//! STEP-1: Run and Debug করে করে দেখা।
//! STEP-2: console.log করে করে দেখতে হবে ভ্যালু গুলা ঠিক আছে কিনা।

function getFactorial(anyNumber) {
  let factorial = 1;
  for (let i = 1; i <= anyNumber; i++) {
    factorial = factorial * i;
    console.log(i, factorial);
  }
  return factorial;
  
}

const factorial = getFactorial(8);
console.log('Factorial of 8 is:', factorial);
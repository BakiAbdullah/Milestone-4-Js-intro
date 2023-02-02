//? Math.pow(x,y);
const result = Math.pow(2, 4);
console.log(result);


//? Math.abs();
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
console.log(gap);

if (gap < 5) {
  console.log('You guys can be friends.');
} else {
  console.log('You guys stay apart.');
}


//? Math.round();
let number = 2.55345; // 2.49999 এর উপরে চলে গেলে সেটা 3 তে round হয়ে যাবে।
const fullNumber = Math.round(number);
// console.log(fullNumber);


//? Math.ceil();
const result2 = Math.ceil(2.00001); // Result will be 3.
console.log(result2);


//? Math.floor();
const result3 = Math.floor(456.654); // Result will be 456.
console.log(result3);


//? Math.random(); আমার ১ - ১০০ পর্যন্ত number দরকার।
console.log(Math.random());

// const random = Math.floor(Math.random() * 100);
const random = Math.round(Math.random() * 6);
console.log(random);

// let name = 'baki' // String
// let isHappy = true; // Boolean
// let age = 26; // number
// ------------------------------

let salary = 10000;
salary = 20000;
const employee = 'Kabir';

// ----------------------------------
//? Math operation 
let chairPrice = 5000;
let tablePrice = 7500;
let chairQuantity = 2;

// sum = chairPrice + tablePrice;
// multiplication = chairPrice * chairQuantity;
// division = tablePrice / chairPrice;
// modulo = tablePrice % chairPrice;
// substraction = tablePrice - chairPrice;
// console.log(substraction);
// -----------------------------------

let person1Salary = 5000;
let person2Salary = 10000;
 
// if (person1Salary > person2Salary) {
//   console.log('Gorib lok');
// } else {
//   console.log('Borolox')
// }
// ......-----------------------------------------

let name = 'baki' // String
let isHappy = true; // Boolean
let age = 26;

// if (isHappy == true && age == 26 ) {
//   console.log('It is baki');
// } else {
//   console.log('It is another person');
// }

// if (isHappy == false || age == 26) {
//   console.log('Its me');
// } else {
//   console.log('its not me');
// }
// ==================================

//? While loop
// let num = 7;
// while (num <= 19) {
//   if (num % 2 !== 0) {
//     console.log(num);
//   }
//   num ++;
// }

// =====================================

//? Array

let arrayElement = [12, 13, 14, 15, 16, 17, 18, 19 , 20];

let indexOfAnArray =  arrayElement.indexOf(16);
let setIndex =  arrayElement[4] = 200; // Finding index and set index value.
// console.log(arrayElement);

// let changedArr = arrayElement.indexOf[4] = 221;

//? Looping through an Array Elements

const cars = ["BMW", "Volvo", "Mini", "Nissan"];
//* For of loop
// let text = "";
// for (let x of cars) {
//   text += x;
//   console.log(text);
// }

//* regular For loop
// for ( let i = 0; i < cars.length; i++) {
//   let arrElement = cars[i];
//   console.log(arrElement);
// }

//? find greater than 80 in an Array

// const arrayOfNum = [10, 20 , 30, 34, 50, 60, 75, 80, 83, 89, 90, 84, 95, 100, 134, 88, 70];

// for(let i = 0; i <= arrayOfNum.length; i++ ) {
//   let arrElem = arrayOfNum[i];

//   if ( arrElem >= 80) {
//     console.log(arrElem);
//   }

// }

// ? multiplication of 3 num
 function multiPlication(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
 }

let totalResult =  multiPlication(5, 10, 5);
// console.log(totalResult);

// ? Object & property 

let car = {
  brand: "audi",
  model: 2019,
  price: 500000
}

let changedProps = car.model = 2022;
console.log(changedProps);


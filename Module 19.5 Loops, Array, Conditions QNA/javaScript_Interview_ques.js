//? What is Variable?
// ভেরিয়েবল বলতে এমন কিছুকে বোঝানো হয়ে থাকে যার মান সময়ের সাথে সাথে বদলানো যায়। যার মান সময়ের সাথে সাথে বিভিন্ন ভাবে প্রভাবিত হতে পারে
// ভেরিয়েবল হচ্ছে কম্পিউটার মেমোরি একটি নির্দিষ্ট জায়গা যেখানে বিভিন্ন মান সংরক্ষণ করে রাখা যায়
// ভ্যারিয়েবল লেখার  জন্য  যা  যা  ব্যবহার  করতে  পারবেন

// 1. Letter(A-z)
// 2. Number {0-9}
// 3. UnderScore (_)
// 4. Doller ($)

// ভ্যারিয়েবল লেখার  জন্য  যা  যা  ব্যবহার  করতে  পারবেন না
// 1. কি  ওয়ার্ড  ব্যবহার  করা  যাবে  না
// 2. নম্বর  শুরুতেই  ব্যবহার  করা  যাবে  না
// 3. স্পেস  দেওয়া  যাবে  না
// 4. কেস  সেনসিটিভ  হওয়ায়  সেইম  টু  সেইম  হতে  হবে

//* 1. Declare a variable and
var aliName = "Kodom";
// change a variables value.
aliName = 20;
// console.log(aliName); -------------------------------

//* 2. Type of Variable , how can you find out type of a variable?
var carName = "Audi";
var carWeight = 2000;
var carCanFly = false;
var carColor;
// console.log(typeof carColor); =========================

//* 3. Primitive and non primitive data types :----------------
// Primitive data types:--
// 1. number
// 2. string
// 4. Boolean
// 3. Undefined
// 5. NaN
// 6. null
//* Non primitive / Composite data types:
// 1. Objects
// 2. Array
// 3. function

// * 4. Naming Convention of JavaScript
// 1. camelCase
// 2. PascalCase
// 3. snake_case
// 4. Always put spaces around operators and after comma
// 5. Always use 2 spaces for identation of code blocks

// * 5. ParseInt & parseFloat

var shipWeight = '2090.22332221';

// var number = parseInt(shipWeight);
// var number = parseFloat(shipWeight);
// number.toFixed(3); --- problem should be solved.
// console.log(number);

// * 6. What is the purpose of an Array?
/* In coding and programming, an array is a collection of items, or data, 
stored in contiguous memory locations, also known as database systems . 
The purpose of an array is to store multiple pieces of data of the same type together.

Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value.
Each item in an array has a number attached to it, called a numeric index, that allows you to access it.
In JavaScript, arrays start at index zero and can be manipulated with various methods.*/ 

//* 7. How to declare an Array in js?
 var penColor = ['red', 'blue', 'black', 'green'];

//  penColor[2] = 'White'; //? Change an element by index.
//  penColor.push('pink'); //? Adds elements at the end of an Array.
//  penColor.pop();
// penColor.shift(); //? Removes the first element of an array
// penColor.unshift('yellow') //? Add elements of an array at the first 
//  console.log(penColor);
//  console.log(penColor[4]); //? The result will be undefined because 4 no index does not assigned.


//* 8. How to find number of elements in an Array?
var pens = penColor.length;
// console.log(penColor[2]);
// console.log(pens);

//* 9. What is index of an array & what is -1?;
// var positionIndex = penColor.indexOf('white'); //?Result will be -1 , becase the element does not exists in penColor[] Array.
// console.log(positionIndex);

// ===============================================================================
// & Conditionals

// var money = 19500;

// if (money >= 80000) {
//   console.log('Mac is on!!!');
// } else if (money >= 60000) {
//   console.log('Gaming laptop is on!!!');
// } else if (money >= 40000) {
//   console.log('Lenovo Yoga is on!!!');
// } else if (money >= 20000) {
//   console.log('Used Laptop ai cholbe.');
// }  else {
//   console.log('Thak amar phone e valo.');
// }

// & Loops
//~ 01. -------------- Display ajke amr mon valo ney 39 times.
// for (var i = 0; i < 39; i++) {
//   console.log('Ajke Amar mon valo ney!')
// }

//~ 02. -------------- what is the consequenses if you dont change the loop variable in while loop.
// var car = 0;
// while ( car < 3) {
  // console.log('Buy a car!');
  //  car ++; //? If you dont add the loop variable , the console/ terminal will frezee :D
// }


//~ 03. --------------------------------
//~ Display numbers between 58 to 98.
// for (var i = 58; i <= 98; i++) {
//   console.log(i);
// }


//~ 04. --------------------------------
//~ Show all even numbers from 412 to 456
// for (var i = 411; i <= 456; i++) {
//   if (i % 2 == 0) { //? Vag sesh jodi 0 hoy , tobei seta Even number hbe.
//     console.log(i);
//   }
// } 

//~ 05. --------------------------------
//~ Show all odd numbers between 518 to 623
// for ( var i = 518; i <= 623; i++) {
//   if (i % 2 == 1) { //! i ke 2diye vag kore vagsesh 1 hcche tai i Odd number show krtese.
//     console.log(i);
//   }
// }

//~ 06. --------------------------------
//~ Run a loop from 30 to 86. This loop will stop if the value get higher than 44.

for (var i = 30; i <= 86; i++){
  if ( i > 44) {
    break; //? break; use krle Emediate break krbe.
  }
  console.log(i)
}


//~ 07. --------------------------------
//~ Write the price of the books that you have. Display the prices if the prices is lower than 200 only.
var priceOfMyBooks = [100, 150, 180, 210, 200, 220, 260, 300, 170, 490];

// for (var i = 0; i < priceOfMyBooks.length; i++) {
//   var books = priceOfMyBooks[i];
//   if (books > 200) {
//     continue; //? Specific Iteration Skip krbe Continue dile. Array er sob elements check krbe just condition 200 ar oporer number gula k Skip kre dibe.
//   }
//   console.log(books);
// }


//~ 08. --------------------------------
//~ Create an array for all the mobile phone you have used. Display all elements of the array by using a while loop.
var myMobilePhones = ['samphony', 'nokia', 'lg', 'xiaomi', 'oneplus', 'samsung', 'apple'];

// var i = 0;
// while (i < myMobilePhones.length) {
//   var phones = myMobilePhones[i];
//   console.log(phones);
//   i++;
// }
// for (var i = 0; i < myMobilePhones.length; i++) {
//   var phones = myMobilePhones[i];
//   console.log(phones);
// }


//~ 09. --------------------------------
//~ How does while & for loop works? 
/*  
The while loop checks the condition first, and if it returns true, the code within it runs.
The loop continues until the condition provided returns false, then stops. Alternatively,
the do while loop runs its code once before checking the condition and runs again only if the condition is true.
*/
//? A "For" Loop is used to repeat a specific block of code a known number of times. For example, if we want to check the grade of every student in the class, we loop from 1 to that number. When the number of times is not known before hand, we use a "While" loop


//~ 10. --------------------------------
//~ Difference between while and for loop.

// The for and while loops are both conditional statements. A for loop is a single-line command that will be executed repeatedly. While loops can be single-lined or contain multiple commands for a single condition.

// Both the for loop and the while loop are important in computer languages for obtaining results. The condition is met if the command syntax is correct.

// Both the for loop and the while loop are iteration statements, but they have distinct characteristics. The for loop declares everything (initialization, condition, iteration) at the top of the loop body. In contrast, only initialization and condition are at the top of the body of the loop in a while loop, and iteration can be written anywhere in the body of the loop.
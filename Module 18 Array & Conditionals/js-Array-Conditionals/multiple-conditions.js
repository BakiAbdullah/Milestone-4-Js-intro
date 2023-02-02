//& Check Multiple Condition

//? money1 > money2 && result1 > result2 && height1 > height2

//! money1 > money2 || result1 > result2 || height1 > height2

var isGraduated = true;
var salary = 75000;
var cars = 0;

// if(isGraduated === true){
//   console.log('Lets get married');
// }
// else {
//   console.log('Tor Kopale Biya nai..')
// }

//! if(isGraduated === true && salary > 50000){
//!   console.log('Lets get married');
//! }
//! else {
//!   console.log('Tor Kopale Biya nai..')
//! }

 if ( (isGraduated === true && salary > 50000) || cars >=1) {
   console.log('Lets get married');
 }
 else {
   console.log('Tor Kopale Biya nai..')
 }
// function isLeapYear (year) {
//   const remainder = year % 4;
//   if (remainder === 0) {
//     return true;
    // console.log(year,'is a leap year')
//   } 
//   else {
//     return false;
    // console.log(year,'is not a leap year')
//   }
// }

function isLeapYear (year) {
  const remainder = year % 4;
  if (remainder === 0) {
    return true;
  }
  return false;
}

const leapYear = isLeapYear(1900);
console.log(leapYear);


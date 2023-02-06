// Leap year Criteria:
// 1. Every year that is evenly divisible by 4
// 2. The year also evenly divisible by 400 is a leap year.
// 3. Except every year that is evenly dividible by 100. (১০০ দিয়ে ভাগ করে যদি ভাগশেষ শূন্য ০ হয় তাহলে সেটি Leap year নয়, আর যদি ভাগশেষ ০ না হয় তাহলে সেটি Leap year)

function isLeapYear(year) {
  
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log(year, "is a leap year");
  } else {
    console.log(year, "is not a leap year");
  }
}

const leapYear = isLeapYear(1900);
console.log(leapYear);
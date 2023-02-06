function largetNum(numbers) {
  let largestNum = numbers[0];
  for(let i = 0; i < numbers.length; i++) {
    const numArrEL = numbers[i];
    if (numArrEL < largestNum) {
      largestNum = numArrEL;
    }
  }
  return largestNum;
}

const numArray = [23, 13, 34, 5, 55, 66, 30, 43];
let largestNumber = largetNum(numArray);
console.log(largestNumber);
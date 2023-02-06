function secondLargest(numbers) {
  let largest1 = 0;
  let largest2 = 0;

  for (i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element > largest2) {
      largest2 = element;
      if(largest2 > largest1) {
        const value = largest2;
        largest2 = largest1;
        largest1 = value;
      }
    }
  }
  return largest2;
}

const numbersArray = [15, 24, 8, 43, 45, 55, 31, 29];
const secondLargestNumber = secondLargest(numbersArray);
console.log(secondLargestNumber);
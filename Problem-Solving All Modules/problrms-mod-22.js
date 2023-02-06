//? 1. Write a code finding the (SMALLEST NUMBER) from an Array
const numbersArray = [12, 13, 1, 2, 4, 8, 21, 43, 64];

let smallestNum = numbersArray[0];
for (let i = 0; i < numbersArray.length; i++) {
  let numELements = numbersArray[i];
  if (numELements < smallestNum) {
    smallestNum = numELements;
  }
}
console.log(smallestNum);

// 2.





// //? (Tricky) Find the 2nd largest number from an Array, Write a program finding the 2nd largest number from an Array


function secondLargest(array) {
  array.sort(function (a, b) {
    return b - a;
  });
  return array[1];
}


function secondLargest(array){
  let first = array[0];
  let second = -Infinity;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > first) {
      second = first;
      first = array[i];
    } else if (array[i] > second && array[i] != first) {
      second = array[i];
    }
  }
  return second;
}


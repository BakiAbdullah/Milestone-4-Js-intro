function getSumOfAnArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element
    // console.log(index, element, sum);
  } 
  return sum;
}


//& =========== Find the sum of all odd number of an array. ================================
// 1st step function declaration
// 2nd step for loop, using (numbers) params
// 3rd step , index নিলাম i হিসেবে।
// 4th step তারপর ঐ index দিয়ে Array এর Element গুলোকে বের করলাম।
// 5th step find Odd number

function getOddNumberOfAnArray(numbers) { 
  const oddNumbers = [];
  for (let i = 0; i< numbers.length; i++) { 
    const index = i; 
    const element = numbers [index]; 
    if(element % 2 === 1) { 
      console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
} 


const myNumbers = [12, 65, 45, 78, 32, 45, 91]; //? এখানে আমরা getSumOfAnArray/ getOddNumberOfAnArray এর Parameter(numbers) এর মধ্যে, myNumber এর ভ্যালু Arguments হিসেবে পাস করছি / input dicchi.

const oddNumbers =  getOddNumberOfAnArray(myNumbers);
console.log(oddNumbers);
// getSumOfAnArray(myNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);

console.log(oddNumberSum);
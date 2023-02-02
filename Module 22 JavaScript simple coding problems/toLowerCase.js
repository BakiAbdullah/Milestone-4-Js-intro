const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
// console.log(userName.toLocaleLowerCase());

if ( userName.toLowerCase() === userInput.toLowerCase()) {
  console.log('Valid user name');
} else  {
  console.log('Invalid user name');
}
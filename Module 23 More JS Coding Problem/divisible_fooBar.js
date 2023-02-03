/*
1. Show output from: 1-50
2. if the number is divisible by 3 then instead of the number show 'foo'/ 'fizz'
2. if the number is divisible by 5 then instead of the number show 'bar'/ 'Buzz'
2. if the number is divisible by 3 & 5 both then instead of the number show 'fooBar'/ 'fizzBuzz'
*/

for (let i = 1; i <= 50; i++) {
  if( i % 3 === 0 && i % 5 === 0) {
    console.log('fizzBuzz');
  }
  else if (i % 3 === 0) {
    console.log('foo');
  } else if (i % 5 === 0) {
    console.log('Bar');
  }
  else {
    console.log(i);
  }
}
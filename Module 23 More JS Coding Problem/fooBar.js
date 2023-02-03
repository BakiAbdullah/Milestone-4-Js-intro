 /*
 1. show output from:  1-50 
 2. if the number is divisible by 3 then istead of the number show 'Foo'
 3. if the number is divisible by 5 then istead of the number show 'Bar'
 4.if the number is divisible by 3 & 5 both then istead of the number show 'FooBar'
 */


for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FooBar');
  } else if (i % 3 === 0) {
    console.log('Foo');
  } else if (i % 5 === 0) {
    console.log('Bar');
  } else {
    console.log(i);
  }
}
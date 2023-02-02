//? 1. Variable 
var myName = 'Khan';

// Math operation: +, -, =, /, %
// Shorthand: +=, -=, *=, /=
// ++, --


//? 2. Array
var friends = ['babul', 'abul', 'khair', 'kabul'];

var myThirdFriend = friends[2]; //? 3 no. ইনডেক্স কে Output দিবে।
friends[3] = 'dambel'; //? Array এর মান change / set হবে।


//? 3. Conditionals
// <=, >=, ==, ===, !==, !=
if(friends.length <2) {
  console.log('Fokira tor kono friend nai');
} else {
  console.log('tor onek friend!');
}


//? 4. loop
var number = 0;
while (number <= 6) {
  console.log(number);
  number++;
}

for (var i = 0; i<= 10; i++) {
  console.log(i);
}

//? 5. Function 
// parameter / arguments
//? Return
function isMoonUp(time) {
  if ( time > 7) {
    return true;
  }
}

//? 6. Object 
var employee = {
  name : 'Amir',
  height: 6,
  salary: 30000,
  position: 'developer'
}
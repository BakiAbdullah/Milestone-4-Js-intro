//* Problem 1
// প্রাকটিস চ্যালেঞ্জ -১:  

// ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?

// ১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

// ২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

// ৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

// ৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

// ৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

// ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.
var TomResult = 66;
var JaneResult = 95;
var PeterResult = 56;
var JhonResult = 40;
var MyResult = 85;

if (JhonResult >= 80) {
  console.log("A Grade");
} else if (JhonResult >= 60) {
  console.log("B Grade");
} else if (JhonResult >= 50) {
  console.log("C Grade");
} else if (JhonResult >= 40) {
  console.log("D Grade");
} else {
  console.log("F Grade");
}

//* Problem 2
// You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ["Apple", "Banana", "orange"];
var fruitIdentity = fruits.indexOf("Banana");

fruits[1] = "Mango";
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);


//* Isosceles Triangle Problem 3.
// You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.
//  Isosceles => two sides are equal

var triangelSide1 = 8;
var triangelSide2 = 9;
var triangelSide3 = 9;

if (triangelSide1 === triangelSide2 ) {
  console.log("Triangle is Isosceles");
} else if ( triangelSide2 === triangelSide3) {
  console.log("Triangle is Isosceles");
} else if ( triangelSide1 === triangelSide3) {
  console.log("Triangle is Isosceles");
}
else {
  console.log('Not Isosceles');
}

//* Problem 4
// প্রাকটিস প্রব্লেম-২: 

// তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা Signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো। 

var signal = 'green'

if (signal == 'green') {
  console.log("You Can Cross the road");
} else if (signal == 'red') {
  console.log("Danger!");
} else if (signal == 'yellow') {
  console.log('You should stop');
}

// * Problem 5
// You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.
// console.log(Math.max(13, 79, 45));

var num1 = 13;
var num2 = 79;
var num3 = 80;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if(num2 > num1 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}
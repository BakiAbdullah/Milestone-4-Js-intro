function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments); //? Array Like object.
}

add(12, 13, 45, 89, 78);
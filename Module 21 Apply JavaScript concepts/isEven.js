




function isEven(number) {
  const remainder = number % 2 == 0;
  /*
  const remainder = number % 2;
      if (remainder === 0) {
        return true;
      } else {
        return false;
      }
 */
  return remainder;
}

const number = 9;
const evenNumber = isEven(number);
console.log(evenNumber);

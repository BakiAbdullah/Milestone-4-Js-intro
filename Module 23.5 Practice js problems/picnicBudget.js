// if 100 or less then: 500tk/ person
// if greater than 100 but less than or equal <= 200 then, first 100 will be 5000tk
// 101-200 persons ticket price will be 400
// if greater than 200 persons then 1st 100 will be 5000 
// and 101 - 200 will be 4000tk 
// and the rest (201 - rest persons) will be 300tk.

function picnicBudget (persons) {
  const first100Rate = 500;
  const second100Rate = 400;
  const restPersonRate = 300;

    if (persons <= 100) {
      const price = persons * first100Rate;
      return price;
    } 
    else if(persons <= 200) {
      const first100PersonPrice = 100 * first100Rate;
      const restPersonQuantity = persons - 100;
      const restPersonsPrice = restPersonQuantity * second100Rate;
      const totalPrice = first100PersonPrice + restPersonsPrice;
      return totalPrice;
    } 
    else {
      const first100PersonPrice = 100 * first100Rate;
      const second100Price = 100 * second100Rate;
      const restPersonQuantity = persons - 200;
      const restPersonPrice = restPersonQuantity * restPersonRate;
      const totalPrice = first100PersonPrice + second100Price + restPersonPrice;
      return totalPrice;

    }
}

const totalCost =  picnicBudget(205);
console.log(totalCost);
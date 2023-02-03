const shoppingCart = [
  { name: "shirt", price: 2200, qualtity: 3 },
  { name: "shoe", price: 1200, qualtity: 2 },
  { name: "pant", price: 3700, qualtity: 2 },
  { name: "belt", price: 600, qualtity: 3 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productTotal = product.price * product.qualtity;
    sum = sum + productTotal;
    // console.log(product);
  }

  return sum;
}

const expenses = totalCost(shoppingCart);
console.log("Total expense today:", expenses);

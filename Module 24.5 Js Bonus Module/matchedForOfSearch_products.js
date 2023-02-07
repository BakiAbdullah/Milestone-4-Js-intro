// const numbers = [12, 13, 45, 89, 78, 17];

//? for loop
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   console.log(number);
// }

//? for of loop 
// for(const number of numbers) {
//   // console.log(number);
// }



const products = [
  {id: 1, name: 'Xiaomi phone one night', price: 19000},
  {id: 2, name: 'iphone', price: 23000},
  {id: 3, name: 'lenovo yoga laptop 2025', price: 35000},
  {id: 4, name: 'Phone one', price: 29000},
  {id: 5, name: 'Samsung Phone note 7', price: 49000},
  {id: 6, name: 'Dell inspiron laptop', price: 79000},
  {id: 7, name: 'Nokia old age phone gone', price: 13000},
  {id: 8, name: 'Mac book air', price: 119000},
  {id: 9, name: 'M1 Chip not cheap laptop', price: 119000}
];

// for (const product of products) {
//   console.log(product);
// }

function matchedProducts (products, searchProduct) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(searchProduct.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);


// Very important to learn this module, Agula website a customer search krle kono products dekhanor jnno use hoy, Jemon amra Daraz a jodi laptop diye search di thle sudhu laptops items dekhay.
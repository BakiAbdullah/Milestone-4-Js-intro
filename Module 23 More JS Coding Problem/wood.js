/*
Fixed : Per item wood price
1. Chair --> 3 cft
2. Table --> 10 cft
3. bed --> 50 cft

Vary: Quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
 
  let chairWood = perChairWood * chairQuantity; 
  let tableWood = perTableWood * tableQuantity;
  let bedWood = perBedWood * bedQuantity;


  // console.log(chairQuantity, tableQuantity, bedQuantity)
  const totalFurnitureWood = chairWood + tableWood + bedWood;
  return totalFurnitureWood;
}

const totalWood = woodCalculator(2, 2, 1);
console.log(totalWood);
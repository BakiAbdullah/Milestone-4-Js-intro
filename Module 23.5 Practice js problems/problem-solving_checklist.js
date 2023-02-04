// function feetToInch(feet) {
//   let inch = feet * 12;
//   return inch;
// }
// let convertedInch = feetToInch(2);
// console.log(convertedInch);


// function centimeterToMeter(centimeter) {
//   let meter = centimeter / 100;
//   return meter;
// }
// let totalMeter = centimeterToMeter(400);
// console.log(totalMeter);


//? 3.=====================================
// function paperRequirements(firstBook, secondBook, thirdBook) {
//   let firstBookCost = firstBook * 100;
//   let secondBookCost = secondBook * 200;
//   let thirdBookCost = thirdBook * 300;

//   const totalBookCost = firstBookCost + secondBookCost + thirdBookCost;
//   return totalBookCost;
// }

// let totalBooks = paperRequirements(5, 5, 5);
// console.log(totalBooks);

//? 4.=====================================
function bestFriend(arrElements) {
  let longestFriend = arrElements[0];
  for(let i = 0; i < arrElements.length; i++) {
    let friendsElement = friends[i];

    if (friendsElement.length > longestFriend.length) {
      longestFriend = friendsElement;
    }
  }
  return longestFriend;
}

let friends = ['Kafi', 'Liza', 'Bristy', 'Umme Ammara', 'Hisham'];
let longestFriendName = bestFriend(friends);
console.log(longestFriendName);

//?

function onlyPositive(numbersArray) {
  const positiveArr = [];
  for (let i = 0; i < numbersArray.length; i++) {
    let arrELement = numbersArray[i];
    if (arrELement >= 0) {
      positiveArr.push(arrELement);
    } else {
      break;
    }
  }
  return positiveArr;
  
}

 let numbersArray = [12, 13, 96, 19, 32, 24, -45, 31];
 let positiveNum = onlyPositive(numbersArray);
//  console.log(positiveNum);


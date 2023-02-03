
let friends = [25, 27, 19, 37, 30, 29, 21, 20, 87];
// Removes elements from an array
// and, if necessary, inserts new elements in their place,
// returning the deleted elemts.
// Will change the original array.
// const partial = friend.splice(0, 5);
// let partial = friend.splice(2, 5);
// console.log(partial);

let partials = friends.splice(2, 4, 2888, 2777);
console.log(partials);
console.log(friends);
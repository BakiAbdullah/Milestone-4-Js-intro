const country = 'Bangladesh';
const age = 52;
const isIndependent = true;

const student = {
  id: 121,
  class: 11,
  name: 'Agun'
};

const friends = [13, 14, 11, 15, 17, 21, 20];

console.log(typeof student);
// Check array using Array.isArray()
console.log(Array.isArray(friends));

console.log(friends.includes(19));
console.log(friends.includes(20));

if (friends.indexOf(52) !== -1) {

}

// concat :
const moreFriends = [7, 8, 10];
const newFriendsAge = [12, 14, 13, 11]
const allFriends = newFriendsAge.concat(moreFriends)
console.log(allFriends);

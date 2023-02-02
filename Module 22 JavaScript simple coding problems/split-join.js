//! split();
const lyrics = "Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomai bolte pari ni. Sada sada kala kala";
const parts = lyrics.split(' ');
const sentences = lyrics.split('.'); 
const chars = lyrics.split('');
console.log(chars);
console.log(lyrics);


//! slice();
const song = 'never forget to say, La ilaha illallah.'

const partialSlice = lyrics.slice(6,9);
console.log(partialSlice);


//! substring();
const partialString = song.substring(0,5);
console.log(partialString);

//! trim();

//! concat();
const str1 = 'Hello';
const str2 = 'World';

const addStr1Str2 = str1.concat(' ', str2);
console.log(addStr1Str2);

//! join();
const lines = [
  "Tumi bondhu kala pakhi ami jeno ki",
  " Bosonto kale tomai bolte pari ni",
  " Sada sada kala kala",
  "Rong jomeche sada kala"
];

const newSong = lines.join(':');
console.log(newSong);
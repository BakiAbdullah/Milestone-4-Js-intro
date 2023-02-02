const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. Bosonto kale tomai bolte pari ni. Sada sada kala kalaa'


const searchString = 'Pakhi';
const doesStringExists = lyrics.includes('bosonto');
// let doesExist = lyrics.includes(searchString);
const lyricLowerCase = lyrics.toLowerCase();
const doesExists = lyricLowerCase.includes("bosonto");
// console.log(doesExists);

// =================================================================

//* IndexOf

console.log(lyrics.indexOf('kala'))

if (lyrics.indexOf('sada') !== -1) { //! -1 মানে string এর মধ্যে নাই, আর !== -1 মানে আছে।
  console.log('exists inside the string.')
} else {
  console.log('Can not find it.')
}

// ===========================================

//~ startsWith
// console.log(lyrics.startsWith('Tumi'));

//~ endsWith  ফাইল type check করার জন্য use করা হয়ে থাকে।
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
console.log(fileName.endsWith(".pdf"));


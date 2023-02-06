
function reversedWord(demoString) {
  const words = demoString.split(' ');
  const resultStore = [];
  for(let i = words.length - 1; i>=0; i--) {
    const element = words[i];
    resultStore.push(element);
  }
  const reversedStr = resultStore.join(' ');
  return reversedStr;
}

const myString = 'I am a good boy';
const result = reversedWord(myString);
console.log(result);



// Solution 1
/*
function titleCase(str) {
  let modifiedStr = str.split('');

  for (let i = 0; i < modifiedStr.length; i++) {
    if (i === 0 || modifiedStr[i - 1] === ' ') {
      modifiedStr[i] = modifiedStr[i].toUpperCase();
    } else {
      modifiedStr[i] = modifiedStr[i].toLowerCase();
    }
  }

  return modifiedStr.join('');
}
*/

// Solution 2
// function titleCase(str) {
//   words = str.toLowerCase().split(' ');
//   // 'Hello world'
//   // -> ['hello', 'world'];
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     // -> ['Hello', 'World'];
//   }
//   return words.join(' ');
//   // -> 'Hello World';
// }

function titleCase(str) {
  // str = 'hello world'
  arrayOfWords = str.toLowerCase().split(' ');
  // arrayOfWords = ['hello', 'world'];
  let output = [];
  // Hello World
  arrayOfWords.forEach((word) => {
    output.push(word[0].toUpperCase() + word.slice(1))
  });
  return output.join(' ');
}

module.exports = titleCase;

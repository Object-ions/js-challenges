/*
questions to ask:
1. upper case / lower case ?
2. handle empty str?
*/

/*
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str
    .trim()
    .toLowerCase()
    .split('')
    .filter((item) => vowels.includes(item)).length;
}
*/

function countVowels(string) {
  // create var for vowels
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  // create var for vowel count
  let numberOfVowels = 0;
  // look at individual char in string
  // run a loop through each char in string and compare to vowels
  for (let char of string) {
    // if there is a match, add +1 to vowel count
    if (vowels.includes(char)) {
      numberOfVowels ++;    
    }
  }
  // output vowelcount (number of vowels)
  return numberOfVowels;
}

module.exports = countVowels;

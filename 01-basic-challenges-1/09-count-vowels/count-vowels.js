/*
questions to ask:
1. upper case / lower case ?
2. handle empty str?
*/

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str
    .trim()
    .toLowerCase()
    .split('')
    .filter((item) => vowels.includes(item)).length;
}

module.exports = countVowels;

/*
questions to ask:
1. upper case / lower case ?
2. handle empty str?
*/

function countVowels(str) {
  let count = 0;
  let vowels = ['a', 'e', 'o', 'i', 'u'];
  // hello
  // toCheck = [h,e,l,l,o]
  let toCheck = str.trim().toLowerCase().split('');
  toCheck.forEach((item) => {
    if (vowels.includes(item)) {
      count += 1;
    }
  });

  return count;
}

module.exports = countVowels;

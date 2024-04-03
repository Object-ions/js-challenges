/*
function validAnagrams(str1, str2) {
  const freqCount1 = str1.split('').reduce((acc, char) => {
    acc[char] = acc[char || 0] + 1;
    return acc;
  }, {});

  const freqCount2 = str2.split('').reduce((acc, char) => {
    acc[char] = acc[char || 0] + 1;
    return acc;
  }, {});

  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  );
}
*/

function validAnagrams(str1, str2) {
  // Make both words lowercase
  str1Lowercase = str1.toLowerCase();
  str2Lowercase = str2.toLowerCase();

  // If word lengths don't match, return false
  if (str1Lowercase.length !== str2Lowercase.length) {
    return false;
  }

  // Create empty map for letters in word1
  const charMap1 = {};

  // Fill map with each letter from word1 and count how many times each appears
  for (let char of str1Lowercase) {
    charMap1[char] = (charMap1[char] || 0) + 1;
  }

  // Go through each letter in word2
  for (let char of str2Lowercase) {
    // If letter not in map or count goes below 0, return false
    if (!charMap1[char]) {
      return false;
    } else {
      // If letter is in map, decrease its count
      charMap1[char] -= 1;
    }
  }
  // If all counts in map are zero, return true
  for (let char in charMap1) {
    if (charMap1[char] !== 0) {
      return false;
    }
  }

  // Otherwise, return false
  return true;
}
module.exports = validAnagrams;

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
  // If word lengths don't match, return false
  // Create empty map for letters in word1
  // Fill map with each letter from word1 and count how many times each appears
  // Go through each letter in word2
  // If letter is in map, decrease its count
  // If letter not in map or count goes below 0, return false
  // If all counts in map are zero, return true
  // Otherwise, return false
}
module.exports = validAnagrams;

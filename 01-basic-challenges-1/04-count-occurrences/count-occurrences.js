/*
//  Solution 1
function countOccurrences(string, charToCheck) {
  let amount = 0;

  for (var char in string) {
    if (string[char] === charToCheck) {
      amount++;
    }
  }
  return amount;
}
*/

// Solution 2
function countOccurrences(string, char) {
  let amount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      amount++;
    }
  }
  return amount;
}

module.exports = countOccurrences;

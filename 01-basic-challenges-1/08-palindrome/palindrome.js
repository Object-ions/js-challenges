// Questions to ask :
/*
1. 'empty string - true / false '?
2. special chars? comma? period?
*/

// Solution 1
/*
function isPalindrome(string) {
  // hello
  // result = [h,e,l,l,o]
  // result = [o,l,l,e,h]
  // result = olleh
  reversed = string.toLowerCase().split('').reverse().join('');
  if (string === reversed) {
    return true;
  } else {
    return false;
  }
}
*/

// Solution 2
/*
function isPalindrome(string) {
  let sterilized = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversedStrings = sterilized.split('').reverse().join('');
  return sterilized === reversedStrings;
}
*/

function isPalindrome(string) {
  // string = 'hello'
  let cleanString = '';
  for (let char of string) {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
      cleanString = cleanString + char.toLowerCase();
    }
  }
  let stringReverse = cleanString.split('').reverse().join('');
  // stringReverse = 'olleh'
  return cleanString === stringReverse;
}

module.exports = isPalindrome;

// Questions to ask :
/*
1. 'empty string - true / false '?
2. special chars? comma? period?
*/

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

module.exports = isPalindrome;

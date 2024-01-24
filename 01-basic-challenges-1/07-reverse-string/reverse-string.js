// Solution 1
/*
function reverseString(string) {
  return string.split('').reverse().join('');
}
*/

// Solution 2
function reverseString(string) {
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

module.exports = reverseString;

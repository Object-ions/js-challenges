// Solution 1
/*
function reverseString(string) {
  return string.split('').reverse().join('');
}
*/

// Solution 2
// function reverseString(string) {
//   let reversed = '';
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversed += string[i];
//   }
//   return reversed;
// }

function reverseString(string) {
  // Hello || str.length = 5
  let output = [];
  for (let i = string.length + 1; i >= 0; i--) {
    output.push(string[i])
  }
  return output.join('');
}

module.exports = reverseString;

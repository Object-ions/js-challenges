/*
// Solution 1 -

function findMissingLetter(arr) {
  let start = arr[0].charCodeAt(0);

  const missingCharCode = arr
    .map((char) => char.charCodeAt(0)) // convert each character to its character code
    .find((current) => {
       //  if the current character code is more than one greater than the previous character code then return true
       if (current - start > 1) {
         return true;
       }
       // otherwise set `start` to the current character code and return false
       start = current;
       return false;
    })
  // will return the char from the code
  return missingCharCode? String.fromCharCode(missingCharCode - 1) : ''; 
*/

  function findMissingLetter(arr) {
    const missingCharCode = arr.filter((char, index) => {
      if (index === 0) return false;

      const prevCharCode = arr[index - 1].charCodeAt(0);
      const currentCharCode = char.charCodeAt(0);
      return currentCharCode - prevCharCode > 1;
    })[0]; 
  return missingCharCode ? String.fromCharCode(missingCharCode.charCodeAt(0) - 1) : ''; 
}

module.exports = findMissingLetter;

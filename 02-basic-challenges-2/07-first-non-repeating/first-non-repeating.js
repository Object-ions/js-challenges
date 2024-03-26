// function findFirstNonRepeatingCharacter(str) {
//   const charCount = {};

//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//   for (const char of str) {
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }

//   return null;
// }

function findFirstNonRepeatingCharacter(s) {
  // create a char map
  const charMap = {};

  // iterate through s
  // assign (create the object) the chars in the map with the count

  /*
  if the character is not there in charMap treat its count as 0 and then add 1 to it, (effectively initializing it with a count of 1). If it's already there just add 1 to its current count.
  */

  for (let char of s) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  // loop through the completed object check if a char has assigned only once in the char map
  for (let char in charMap) {
    if (charMap[char] === 1) {
      // return this char
      return char;
    }
  }

  // if none repeated char return 'null'
  return null;
}

module.exports = findFirstNonRepeatingCharacter;

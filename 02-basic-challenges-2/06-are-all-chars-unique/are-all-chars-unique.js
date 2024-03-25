// Solution 1
/*
function areAllCharactersUnique(string) {
  // loop and compare string[i] ?== string[j]
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
}
*/

// Solution 2
/*
function areAllCharactersUnique(string) {
  // 'a'b'c'd'e'
  const charMap = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i]; // 0 - a, 1 -b ...

    if (charMap[char]) {
      return false;
    }

    charMap[char] = true;
  }
  return true;
}
*/

function areAllCharactersUnique(s) {
  // create a character map
  // iterate through s
  // assign characters in the map
  // if the value of any key is more than 1 return false
  // else return true
}

module.exports = areAllCharactersUnique;

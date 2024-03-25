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
  let charMap = {};

  // iterate through s
  for (let char of s) {
    // assign characters in the map
    charMap[char] = (charMap[char] || 0) + 1;
  }

  // if the value of any key is more than 1 return false
  for (let char in charMap) {
    if (charMap[char] > 1) {
      // If any character count is more than 1, return false
      return false;
    }
  }

  return true;
  // else return true
}

module.exports = areAllCharactersUnique;

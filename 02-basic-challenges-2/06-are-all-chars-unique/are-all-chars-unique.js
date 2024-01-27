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

module.exports = areAllCharactersUnique;

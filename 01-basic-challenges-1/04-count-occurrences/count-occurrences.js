function countOccurrences(string, charToCheck) {
  let amount = 0;

  for (var char in string) {
    if (string[char] === charToCheck) {
      amount++;
    }
  }
  return amount;
}

module.exports = countOccurrences;

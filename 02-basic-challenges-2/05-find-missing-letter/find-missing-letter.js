// case sensitive? A vs. a

const alphabet = [
  'a', // (1)
  'b', // (2)
  'c', // (3)
  'd', // (4)
  'e', // (5)
  'f', // (6)
  'g', // (7)
  'h', // (8)
  'i', // (9)
  'j', // (10)
  'k', // (11)
  'l', // (12)
  'm', // (13)
  'n', // (14)
  'o', // (15)
  'p', // (16)
  'q', // (17)
  'r', // (18)
  's', // (19)
  't', // (20)
  'u', // (21)
  'v', // (22)
  'w', // (23)
  'x', // (24)
  'y', // (25)
  'z', // (26)
];

function findMissingLetter(stringArr) {
  let solution = '';
  const length = stringArr.length;
  const startingLetter = stringArr[0];

  const localAlphabet =
    startingLetter === startingLetter.toUpperCase()
      ? alphabet.map((letter) => letter.toUpperCase())
      : alphabet;

  let startCut = localAlphabet.indexOf(startingLetter);
  let endCut = localAlphabet.indexOf(stringArr[length - 1]);

  let arrayPortion = localAlphabet.slice(startCut, endCut + 1);

  for (let item of arrayPortion) {
    if (!stringArr.includes(item)) {
      solution = item;
      break;
    }
  }

  return solution;
}

module.exports = findMissingLetter;

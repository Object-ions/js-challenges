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
  // stringArr = [a,b,c,e] -> d
  let length = stringArr.length; // 4
  const startingLetter = stringArr[0]; // a
  console.log(startingLetter);

  let startCut = alphabet.indexOf(startingLetter);
  console.log(startCut);

  let arrayPotion = alphabet.slice(startCut, startCut + length + 1); // [a,b,c,d,e]

  console.log(arrayPotion);

  for (let item of arrayPotion) {
    if (!stringArr.includes(item)) {
      solution = item;
    }
  }
  console.log(solution);

  return solution;
}

module.exports = findMissingLetter;

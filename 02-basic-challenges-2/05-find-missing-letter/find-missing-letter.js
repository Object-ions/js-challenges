const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function findMissingLetter(stringArr) {
  let solution = '';
  // stringArr = [a,b,c,e] -> d
  let length = stringArr.length; // 4
  const startingLetter = stringArr[0]; // a
  let arrayPotion = alphabet.slice(0, length + 1); // [a,b,c,d,e]

  console.log(arrayPotion);

  // compare srtingArr ?== arrayPotion;

  for (let item of arrayPotion) {
    if (!stringArr.includes(item)) {
      solution = item;
    }
  }
  console.log(solution);

  return solution;
}

module.exports = findMissingLetter;

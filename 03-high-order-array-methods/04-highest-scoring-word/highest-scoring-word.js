// Solution 1
/*
function highestScoringWord(str) {
  const words = str.split(' ');

  const scores = words.map((word) => {
    let score = 0;
    for (const letter of word) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });

  let highestScore = 0;
  let highestIndex = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestIndex = i;
    }
  }
  return words[highestIndex];
}
*/

// Solution 2
/*
function highestScoringWord(str) {
  const words = str.split(' ');

  const scores = words.map((word) => {
    return Array.from(word).reduce(
      (acc, letter) => acc + letter.charCodeAt(0) - 96,
      0
    );
  });

  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);

  return words[highestIndex];
}
*/

function highestScoringWord(str) {
  // create highestScore to store the score of the highest scoring word
  // create highestWord to store the highest scoring word
  // create a charMap using a loop to assign scores to letters
  /*
    a: 1
    b: 2
    c: 3
  */
  // break str into an arrayOfWords
  // for each word in the array calculate it's score
  // if the score of the current word is greater than the highestScore
  // update the highestScore with the new highest score
  // update the highestWord with the new highest word
  // return highestWord
}

module.exports = highestScoringWord;

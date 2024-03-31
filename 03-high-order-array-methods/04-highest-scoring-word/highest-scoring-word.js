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
  let highestScore = 0;

  // create highestWord to store the highest scoring word
  let highestWord = '';

  // create a charMap using a loop to assign scores to letters
  /*
    a: 1
    b: 2
    c: 3
  */

  const letters = 'abcdefghijklmnopqrstuvwxyz';

  const charMap = {};
  for (let i = 0; i < letters.length; i++) {
    charMap[letters[i]] = i + 1;
  }

  // break str into an arrayOfWords
  const arrayOfWords = str.split(' ');

  // for each word in the array calculate it's score
  arrayOfWords.forEach((word) => {
    let wordScore = 0;
    for (let char of word) {
      wordScore = wordScore + charMap[char];
    }

    // if the score of the current word is greater than the highestScore
    if (wordScore >= highestScore) {
      // update the highestScore with the new highest score
      highestScore = wordScore;
      // update the highestWord with the new highest word
      highestWord = word;
    }
  });
  // return highestWord
  return highestWord;
}

module.exports = highestScoringWord;

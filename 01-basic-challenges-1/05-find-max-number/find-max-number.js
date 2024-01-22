/*
questions to ask -
1. we are dealing with positive and negative numbers?
2. how to handle if an array is empty?
*/

// Solution 1
/*
function findMaxNumber(numbersArr) {
  let largestNumber = numbersArr[0];
  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] > largestNumber) {
      largestNumber = numbersArr[i];
    }
  }
  return largestNumber;
}
*/

// Solution 2
const findMaxNumber = (numbersArr) => Math.max(...numbersArr);

module.exports = findMaxNumber;

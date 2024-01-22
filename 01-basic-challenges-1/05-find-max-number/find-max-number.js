/*
questions to ask -
1. we are dealing with positive and negative numbers?
2. how to handle if an array is empty?
*/

function findMaxNumber(numbersArr) {
  let largestNumber = numbersArr[0];
  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] > largestNumber) {
      largestNumber = numbersArr[i];
    }
  }
  return largestNumber;
}

module.exports = findMaxNumber;

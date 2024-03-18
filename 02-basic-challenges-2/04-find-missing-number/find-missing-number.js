/*
1. handle empty arr? -> return 1
2. starting from 0? 1 ?
2. only arr?
3. only one number missing? (return is int and not array)
4. is there always be a missing number? what if no missing number?
*/

// [1,2,3,5] -> 4

// Solution 1
/*
function findMissingNumber(numArr) {
  let missingNumber;
  let newArray = [];
  let length = numArr.length;

  for (let i = 1; i <= length + 1; i++) {
    newArray.push(i);
  }

  newArray.forEach((item) => {
    if (!numArr.includes(item)) {
      missingNumber = item;
    }
  });

  return missingNumber;
}
*/
/*
function findMissingNumber(numArr) {
  if (numArr.length === 0) {
    return 1;
  }

  const n = numArr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < numArr.length; i++) {
    actualSum += numArr[i];
  }

  return expectedSum - actualSum;
}
*/

function findMissingNumber(arrayOfNumbers) {
  // create an empty array to hold the numbers (including the missing number by adding +1 to the array.length)
  // create 'missingNumber'
  // run a loop through all the indexes in the array
  // compare the new array with the existing given array
  // add the missing number into 'missingNumber' variable
  // return the missing number
}
module.exports = findMissingNumber;

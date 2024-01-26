/*
1. handle empty arr? -> return 1
2. starting from 0? 1 ?
2. only arr?
3. only one number missing? (return is int and not array)
4. is there always be a missing number? what if no missing number?
*/

// [1,2,3,5] -> 4

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

module.exports = findMissingNumber;

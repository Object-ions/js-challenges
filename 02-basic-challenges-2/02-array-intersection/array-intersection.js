/*
1. input > 0 ?
2. input == int ?
*/

// Examples:
// inputA = [1,2,3,4,5]
// inputB = [1,3,5,7,9]
// outputC = [1,3,5]
/*
function arrayIntersection(arrNumA, ArrNumB) {
  let arrNumC = [];

  arrNumA.forEach((item) => {
    if (ArrNumB.includes(item)) {
      arrNumC.push(item);
    }
  });

  return arrNumC;
}
*/

// Solution 2
/*
function arrayIntersection(arrNumA, arrNumB) {
  const setA = new Set(arrNumA);
  const arrNumC = [];

  for (let item of arrNumB) {
    if (setA.has(item)) {
      arrNumC.push(item);
    }
  }
  return arrNumC;
}
*/

/*
function arrayIntersection(array1, array2) {
  // init array of results
  let result = [];
  // loop through array1
  for (let item of array1) {
    // check if the item of array1 exist in array2
    if (array2.includes(item)) {
      // if it exists add item to the result array
      result.push(item);
    }
  }
  //return the result
  return result;
}
*/

function arrayIntersection(array1, array2) {
  // use filter on array2 to find only the items that exist in array 1
  return array2.filter((item) => array1.includes(item));
}

module.exports = arrayIntersection;

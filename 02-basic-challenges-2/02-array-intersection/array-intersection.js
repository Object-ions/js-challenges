/*
1. input > 0 ?
2. input == int ?
*/

// Examples:
// inputA = [1,2,3,4,5]
// inputB = [1,3,5,7,9]
// outputC = [1,3,5]

function arrayIntersection(arrNumA, ArrNumB) {
  let arrNumC = [];

  arrNumA.forEach((item) => {
    if (ArrNumB.includes(item)) {
      arrNumC.push(item);
    }
  });

  return arrNumC;
}

module.exports = arrayIntersection;

/*
1. type of input - int ? char? str? bool? 
2. '    ' in account or no?
*/

function removeDuplicates(arr) {
  // arr = [1,2,3,4,5,5,6,7,8,9]
  let noDuplications = [];
  arr.forEach((item) => {
    if (!noDuplications.includes(item)) {
      noDuplications.push(item);
    }
  });

  return noDuplications;
}

module.exports = removeDuplicates;

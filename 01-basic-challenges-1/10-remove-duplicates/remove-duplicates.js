/*
1. type of input - int ? char? str? bool? 
2. '    ' in account or no?
*/
// Solution 1
/*
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
*/

// Solution 2
function removeDuplicates(arr) {
  let noDuplications = new Set(arr);
  return [...noDuplications]; // turn a set into an array with spread operator
}

module.exports = removeDuplicates;

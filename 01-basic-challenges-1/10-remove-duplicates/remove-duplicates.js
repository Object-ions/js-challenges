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
/*
function removeDuplicates(arr) {
  let noDuplications = new Set(arr);
  return [...noDuplications]; // turn a set into an array with spread operator
}
*/

function removeDuplicates(array) {
  // create an empty array for the output
  let output = [];
  // loop through each item in array
  for (let item of array) {
    // check if the item !exists
    if (!output.includes(item)) {
      // if the item !exist add it to the output array
      output.push(item);
    }
  };
  // return the output array
  return output;
}

module.exports = removeDuplicates;

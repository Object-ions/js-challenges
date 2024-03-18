/*
1. input > 0 ?
1. input == number ?
*/
/*
function fizzBuzzArray(number) {
  let outputArr = [];
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      outputArr.push('FizzBuzz');
    } else if (i % 5 === 0) {
      outputArr.push('Buzz');
    } else if (i % 3 === 0) {
      outputArr.push('Fizz');
    } else {
      outputArr.push(i);
    }
  }
  return outputArr;
}
*/

function fizzBuzzArray(number) {
  // initialize an empty array
  let output = [];
  for (let i = 1; i <= number; i++) {
    // check if the number divides by 15
    if (i % 15 === 0) {
      // if it does add 'FizzBuzz' to the array (end)
      output.push('FizzBuzz');

      // check if the number divides by 5
    } else if (i % 5 === 0) {
      // if it does add 'Buzz' to the array (end)
      output.push('Buzz');

      // check if the number divides by 3
    } else if (i % 3 === 0) {
      // if it does add 'Fizz' to the array (end)
      output.push('Fizz');

      // else add the number itself
    } else {
      output.push(i);
    }
  }
  // return the array with the result
  return output;
}

module.exports = fizzBuzzArray;

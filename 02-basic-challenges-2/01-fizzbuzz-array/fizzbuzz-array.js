/*
1. input > 0 ?
1. input == number ?
*/

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

module.exports = fizzBuzzArray;

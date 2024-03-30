/*
function sumOfEvenSquares(numbers) {
  const evenSquare = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((acc, num) => acc + num, 0);

  return evenSquare;
}
*/

function sumOfEvenSquares(numbers) {
  // first we will filter the even numbers
  return (
    numbers
      .filter((number) => number % 2 === 0)
      // get each of them their squared result
      .map((number) => number ** 2)
      // add them together
      .reduce((acc, number) => acc + number, 0)
  );
  // return that result
}

module.exports = sumOfEvenSquares;

function sumOfEvenSquares(numbers) {
  const evenSquare = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((acc, num) => acc + num, 0);

  return evenSquare;
}
module.exports = sumOfEvenSquares;

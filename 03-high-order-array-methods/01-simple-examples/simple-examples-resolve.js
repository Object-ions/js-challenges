const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubleNumbers = numbers.map((number) => {
  return number * 2;
});
/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sum = numbers.reduce((acc, current) => {
  return acc + current;
}, 0);
/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach((number) => {
  console.log(number);
});
/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const findNumber = numbers.find((number) => {
  return number > 2;
});
/**
 * some: Checks if at least one array element satisfies a condition.
 */
const hasEvenNumber = numbers.some((number) => {
  return number % 2 === 0;
});
/**
 * every: Checks if all array elements satisfy a condition.
 */
numbers.every((number) => {
  return number > 0;
});

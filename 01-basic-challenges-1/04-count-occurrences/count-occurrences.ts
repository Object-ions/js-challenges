/**
 * Returns the amount of occurrences of char
 * @param {string} str - the string to research
 * @param {string} char - the character to search for
 * @return {number} - the amount of occurrences of 'char' in 'str'
 */

export function countOccurrences(str: string, char: string): number {
  let count: number = 0;

  for (let i: number = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

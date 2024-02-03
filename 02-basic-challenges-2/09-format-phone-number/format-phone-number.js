/*
// Solution 1
function formatPhoneNumber(numbersArr) {
  // numbersArr = [1,2,3,4,5,6,7,8,9,0] => '(123) 456-7890'
  // numbersArr[0-2] add () => (123)
  let resultArr = [];
  resultArr.push('(');
  resultArr.push(...numbersArr.slice(0, 3));
  resultArr.push(') ');
  resultArr.push(...numbersArr.slice(3, 6));
  resultArr.push('-');
  resultArr.push(...numbersArr.slice(6, 10));

  let result = resultArr.join('');
  return result;
}
*/

// Solution 2
function formatPhoneNumber(numbersArr) {
  let areaCode = numbersArr.slice(0, 3).join('');
  let prefix = numbersArr.slice(3, 6).join('');
  let lineNumber = numbersArr.slice(6).join('');
  return `(${areaCode}) ${prefix}-${lineNumber}`;
}

module.exports = formatPhoneNumber;

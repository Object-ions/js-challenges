function formatPhoneNumber(numbersArr) {
  // numbersArr = [1,2,3,4,5,6,7,8,9,0] => '(123) 456-7890'
  // numbersArr[0-2] add () => (123)
  let resultArr = [];
  resultArr = numbersArr.slice(0, 3);
  resultArr.unshift('(');
  resultArr.push(') ');
  resultArr.push(numbersArr.slice(3, 6));
  resultArr.push('-');
  resultArr.push(numbersArr.slice(6, 9));

  console.log('result array: ', resultArr);
  let result = resultArr.join(',');
  let resultNoCommas = result.replace(/,/g, '');
  console.log('after join', resultNoCommas);
}

module.exports = formatPhoneNumber;

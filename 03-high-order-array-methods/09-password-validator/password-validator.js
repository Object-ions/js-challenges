/*
function validatePassword(password) {
    const isLengthValid = password.length >= 8 ? true : false;

    const hasUppercase = password.split('')
    .some((char) => char === char.toUpperCase() && char!== char.toLowerCase());

    const hasLowercase = password.split('')
    .some((char) => char === char.toLowerCase() && char!== char.toUpperCase()); ;

    const hasDigit = password.split('').some((char) => !isNaN(parseInt(char, 10)));

    return isLengthValid && hasUppercase && hasLowercase && hasDigit;
}
*/

function validatePassword(password) {
  // check if the length is valid
  const isLengthValid = password.length >= 8 ? true : false;

  // check if the password contains uppercase char
  const isUppercase = password
    .split('')
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  // check if the password contains lowercase char
  const isLowercase = password
    .split('')
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  // check if the password contains min of one digit
  const isInt = password.split('').some((char) => !isNaN(char));

  // return true if all tests are true : false
  return isLengthValid && isUppercase && isLowercase && isInt;
}
module.exports = validatePassword;

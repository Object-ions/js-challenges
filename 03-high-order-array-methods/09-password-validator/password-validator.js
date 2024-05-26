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
  // check if the password contains uppercase char
  // check if the password contains lowercase char
  // check if the password contains min of one digit
  // return true if all tests are true : false
}
module.exports = validatePassword;

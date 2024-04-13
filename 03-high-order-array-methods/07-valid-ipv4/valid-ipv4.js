/*
const isValidIPv4 = (str) => {
  const octets = str.split('.');

  if (octets.length !== 4) {
    return false;
  }

  return octets.every((octet) => {
    const num = parseInt(octet);
    return num >= 0 && num <= 255 && octet === num.toString();
  });
};
*/

function isValidIPv4(string) {
  // break string into array by '.'
  // run a check if array length is 4
  // return false if not 4
  // run a check on each item in the array
  // if array item not between 0 and 255 return false
}
module.exports = isValidIPv4;

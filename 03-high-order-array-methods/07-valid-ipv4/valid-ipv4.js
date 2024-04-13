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
  const octets = string.split('.');
  
  // run a check if array length is 4
  if (octets.length !== 4) {
    // return false if not 4
    return false;
  }
  
  // run a check on each item in the array
  for (let item of octets) {
    const num = parseInt(item);
    // Check if the item fails any criteria
    if (!(num >= 0 && num <= 255 && item === num.toString())) {
      return false;  // Return false if invalid
    }
  }

  return true;  // Return true if pass all tests
}

module.exports = isValidIPv4;

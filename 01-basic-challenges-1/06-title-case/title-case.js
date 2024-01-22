function titleCase(str) {
  let modifiedStr = str.split('');

  for (let i = 0; i < modifiedStr.length; i++) {
    if (i === 0 || modifiedStr[i - 1] === ' ') {
      modifiedStr[i] = modifiedStr[i].toUpperCase();
    } else {
      modifiedStr[i] = modifiedStr[i].toLowerCase();
    }
  }

  return modifiedStr.join('');
}

module.exports = titleCase;

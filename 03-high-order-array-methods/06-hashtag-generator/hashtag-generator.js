/*
// Solution 1
function generateHashtag(str) {
  if (str.trim() === '') {
    return false;
  }

  const words = str.trim().split(/\s+/);

  const capitalizeWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  const hashtag = '#' + capitalizeWords.join('');

  return hashtag.length > 140 ? false : hashtag;
}
*/

// Solution 2
function generateHashtag(str) {
  const hashtag = str.split(/\s+/).reduce((acc, word) => {
    return acc + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');

  return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}

module.exports = generateHashtag;

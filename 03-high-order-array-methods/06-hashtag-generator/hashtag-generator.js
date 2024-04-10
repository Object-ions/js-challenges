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
/*
function generateHashtag(str) {
  const hashtag = str.split(/\s+/).reduce((acc, word) => {
    return acc + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');

  return hashtag.length === 1 || hashtag.length > 140 ? false : hashtag;
}
*/

function generateHashtag(string) {
  // check validation if string is empty or > 140 chars return false
  // take string and break it into array of words
  // convert every first char of each word to uppercase
  // add a hash tag to the array in the index of 0
  // join all words into a single string
  // return result
}
module.exports = generateHashtag;

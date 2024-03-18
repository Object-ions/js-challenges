// case 1 : 1 name exist
// '{name1} like this';

// case 1 : 2 name exist
// 'name1, name 2 like this';

// case 1 : 3 name exist
// 'name1, name2, name3 like this';

// case 4 : 3 + name exist
// 'name1, name2, and {X} others like this';

// Example:
// input : namesArr = ['Moses', 'Judah', 'Aron'];
// output : '{name1}, {name2} and {name3} like this'

/*
function displayLikes(namesArr) {
  if (namesArr.length === 0) {
    return 'no one likes this';
  } else if (namesArr.length === 1) {
    return `${namesArr[0]} likes this`;
  } else if (namesArr.length === 2) {
    return `${namesArr[0]} and ${namesArr[1]} like this`;
  } else if (namesArr.length === 3) {
    return `${namesArr[0]}, ${namesArr[1]} and ${namesArr[2]} like this`;
  } else {
    return `${namesArr[0]}, ${namesArr[1]} and ${
      namesArr.length - 2
    } others like this`;
  }
}
*/

function displayLikes(arrayOfNames) {
  // switch conditions
  // return the name in the current the index with 'like this' depending on the amount of the indexes in the array
  switch (arrayOfNames.length) {
    // if the array is empty return 'no one likes this'
    case 0:
      return 'no one likes this';

    // if the array has 1 item return 'arrayOfNames[i] likes this'
    case 1:
      return `${arrayOfNames[0]} likes this`;

    // if the array has 2 items return 'arrayOfNames[0] and arrayOfNames[1] likes this'
    case 2:
      return `${arrayOfNames[0]} and ${arrayOfNames[1]} like this`;

    // if the array has 3 items return 'arrayOfNames[0] and arrayOfNames[1] and arrayOfNames[2] likes this'
    case 3:
      return `${arrayOfNames[0]}, ${arrayOfNames[1]} and ${arrayOfNames[2]} like this`;

    // if the array has 4 and more items return 'arrayOfNames[0] and arrayOfNames[1] and arrayOfNames.length - 2 others like this'
    default:
      return `${arrayOfNames[0]}, ${arrayOfNames[1]} and ${
        arrayOfNames.length - 2
      } others like this`;
  }
}
module.exports = displayLikes;

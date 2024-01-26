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

module.exports = displayLikes;

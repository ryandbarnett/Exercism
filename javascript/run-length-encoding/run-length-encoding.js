//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => {
  if (!str.length) return '';
  let count = 1;
  return str.split('').reduce((acc, curChar, i) => {
    if (curChar === str[i + 1]) {
      count++;
    } else {
      if (count === 1) {
        acc += curChar;
      } else {
        acc += `${count}${curChar}`
      }
      count = 1;
    }
    return acc;
  }, '');
};

export const decode = (str) => {
  return str.split('').reduce((acc, curChar, i, arr) => {
    if (parseInt(curChar)) {
      return acc;
    } else if (parseInt(arr[i - 1]) && parseInt(arr[i - 2])) {
      acc += curChar.repeat(parseInt(arr[i - 2] + arr[i - 1]))
    } else if (parseInt(arr[i - 1])) {
      acc += curChar.repeat(parseInt(arr[i - 1]))
    } else {
      acc += curChar;
    }
    return acc;
  }, '');
};
